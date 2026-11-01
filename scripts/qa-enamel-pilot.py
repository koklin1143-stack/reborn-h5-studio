"""Optional paid, isolated rule comparison. Never used by the H5 server.
Run with --live. The six PNGs are reused on subsequent runs.
Photo: USDA / Ken Hammond, public domain, Flickr 7880830004.
"""
import argparse
import base64
import json
import os
from pathlib import Path
import re
from urllib.parse import urlparse
import requests
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1] / 'previews' / 'enamel-pilot'
MODEL = 'qwen-image-2.1-turbo'
TEXT = '一只长垂耳的比格犬坐着，前爪撑地，身子侧向画面右边，头转回来望向我。'
COMMON = '设计一枚能放在浅色搪瓷杯身正面的原创平面印花，只有一个完整主体，四周宽松留白。不要器皿、投影、说明字、图章、商标、鱼鳞、装饰花枝和边框。去掉所有背景、文字及工作服。保留输入中主体的动作与视线。'
TECHNIQUES = {
 'blue':'单色露白。仅用一种深钴蓝实色与露出的白底；耳根和胸肩用宽窄不同的白地隔开相邻色面。用轮廓切分和大块留白做出姿态，不加额外颜色、细密排线或渐变。借鉴日用蓝鱼盘的蓝色主形和局部露白，题材完全由输入决定。',
 'spray':'柔边喷花。让头背暖红较浓，腹侧渐淡露出乳白底色，至少一处连续柔和的色阶从背侧过渡到浅腹；保留套模形成的清楚外缘，耳根用较浓暖色与脸区分。局部叠喷，不使用全周等粗描边或硬切两色。平面颜料效果，不画毛发与摄影光影。借鉴的是日用搪瓷喷花的深浅处理。'
}
def draw_sketch():
    # Hand-specified ink paths of the same seated, floppy-eared hound.
    paths=[[(113,73),(122,60),(136,54),(161,56),(175,68),(179,82)],
           [(118,68),(107,73),(100,89),(99,104),(106,116),(115,111),(123,87)],
           [(165,65),(180,69),(187,82),(184,103),(177,118),(167,117),(163,101),(165,84)],
           [(122,80),(121,92),(129,106),(135,113),(147,114),(159,107),(167,91)],
           [(127,81),(130,83)],[(151,80),(155,82)],[(133,98),(141,97),(144,100),(138,104),(133,98)],
           [(122,107),(124,127),(121,152),(125,185),(123,204),(116,210),(119,214),(134,214),(140,207),(142,169)],
           [(164,117),(180,123),(201,139),(220,160),(229,180),(231,198),(225,209),(211,214),(174,212),(164,208)],
           [(192,171),(181,166),(171,171),(166,185),(174,197),(187,201),(171,205),(164,210)],
           [(147,148),(153,172),(150,202),(141,211),(144,214),(159,212),(164,202)],
           [(228,205),(241,211),(259,210),(270,204),(263,213),(249,217),(227,214)]]
    im=Image.new('RGB',(350,260),'white');d=ImageDraw.Draw(im)
    for pts in paths:d.line(pts,fill='#303439',width=3,joint='curve')
    im.save(ROOT/'sketch.png')

def server_value(name):
    value=os.environ.get(name)
    if not value:
        import winreg
        with winreg.OpenKey(winreg.HKEY_CURRENT_USER,'Environment') as key:
            value=winreg.QueryValueEx(key,name)[0]
    return value

def main():
    parser=argparse.ArgumentParser();parser.add_argument('--live',action='store_true');args=parser.parse_args()
    ROOT.mkdir(exist_ok=True);draw_sketch()
    key=server_value('DASHSCOPE_API_KEY');space=server_value('BAILIAN_WORKSPACE_ID')
    assert re.fullmatch(r'llm-[a-z0-9-]+',space)
    records=[]
    for method,source in [('sketch','sketch.png'),('text',None),('photo','beagle-photo.jpg')]:
        for rule,direction in TECHNIQUES.items():
            destination=ROOT/f'{method}-{rule}.png'
            cue=TEXT if method=='text' else '识别图中的主体、姿态及醒目的个人特征，用它们来设计。'
            prompt=cue+' '+COMMON+' '+direction
            records.append(dict(method=method,rule=rule,source=source,prompt=prompt,model=MODEL,prompt_extend=False))
            if destination.exists():continue
            if not args.live:raise SystemExit('Use --live for new provider calls.')
            body=dict(model=MODEL,prompt=prompt,prompt_extend=False,size='1024x1024',n=1)
            if source:
                mime='image/jpeg' if source.endswith('.jpg') else 'image/png'
                body['image']=['data:'+mime+';base64,'+base64.b64encode((ROOT/source).read_bytes()).decode()]
            reply=requests.post(f'https://{space}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1/images/generations',
                json=body,headers={'Authorization':'Bearer '+key},timeout=270,allow_redirects=False)
            if reply.status_code!=200:raise RuntimeError(f'Provider HTTP {reply.status_code}')
            url=reply.json()['data'][0]['url'];parsed=urlparse(url)
            if parsed.scheme!='https' or not re.fullmatch(r'[a-z0-9-]+\.oss(?:-accelerate|-cn-[a-z0-9-]+)\.aliyuncs\.com',parsed.netloc):raise RuntimeError('Unexpected result host')
            pic=requests.get(url,timeout=60,allow_redirects=False);pic.raise_for_status()
            if not pic.content.startswith(b'\x89PNG\r\n\x1a\n'):raise RuntimeError('Bad PNG')
            temp=destination.with_suffix('.tmp');temp.write_bytes(pic.content);temp.replace(destination)
            print(destination.name,flush=True)
    (ROOT/'run.json').write_text(json.dumps(dict(photoSource='https://www.flickr.com/photos/usdagov/7880830004',photoCredit='USDA / Ken Hammond, public domain',baseline='Independent provider experiment; no reference artifact image sent; one sample per cell; no fixed random seed',records=records),ensure_ascii=False,indent=2),encoding='utf8')
if __name__=='__main__':main()
