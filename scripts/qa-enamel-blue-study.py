"""Isolated follow-up to enamel-pilot. Two opt-in generation calls. Leaves originals intact."""
from pathlib import Path
import argparse
import base64
import json
import re
import runpy
from urllib.parse import urlparse
import requests
from PIL import Image, ImageChops

pilot = runpy.run_path(str(Path(__file__).with_name('qa-enamel-pilot.py')))
base = pilot['ROOT']
out = base / 'blue-study'
out.mkdir(exist_ok=True)
parser = argparse.ArgumentParser()
parser.add_argument('--live', action='store_true')
args = parser.parse_args()

def encode(path):
    mime = 'image/jpeg' if path.suffix=='.jpg' else 'image/png'
    return 'data:'+mime+';base64,'+base64.b64encode(path.read_bytes()).decode()

# Use discontinuous details, never the exemplar's complete pose.
anchor=Image.open(base/'sketch-blue.png').convert('RGB')
mask=anchor.getchannel('R').point(lambda x:255 if x<115 else 0)
left,top,right,bottom=mask.getbbox()
w,h=right-left,bottom-top
strip=Image.new('RGB',(560,190),'white')
for i,(x0,y0,x1,y1) in enumerate([(.10,.01,.36,.29),(.12,.33,.45,.69),(.38,.59,.70,.90)]):
    crop=anchor.crop((round(left+w*x0),round(top+h*y0),round(left+w*x1),round(top+h*y1)))
    crop.thumbnail((165,150))
    strip.paste(crop,(i*185+(185-crop.width)//2,(190-crop.height)//2))
strip.save(out/'mark-samples.png')
common=('交付白底上的一枚钴蓝单版平面转印图。把动物视为一整块略有手工起伏的蓝形。'
        '先概括为四至六处轮廓转折，大耳以完整实色垂下，脸也以蓝面为主；'
        '仅以一块乳白胸口连接前腿内侧，后腿弯折由一道有粗有细的白缝交代。'
        '眼鼻用极少的蓝白形轻轻点出，留住目光。图样缩到两厘米还要一眼认出坐姿。'
        '只用一色实墨与底白，不描毛发、衣服、斑点、爪趾、肌肉、阴影或渐变。'
        '不要器物、边框、文字、背景景物或分栏。请绘出完整单体，白底四周留适量安全空间。'
        '最后一张参考图是三个不相连的局部墨样，只取用墨与留白关系，不拼贴这些碎片。')
records=[]
for kind in ('text','photo'):
    prompt=pilot['TEXT']+' '+common if kind=='text' else (
        '第一张照片决定主角、目光和坐姿。保留这只犬的垂耳、微斜的头和侧坐回看的形态。去除工作背带及标识，勿照抄毛色。'+common)
    paths=([base/'beagle-photo.jpg'] if kind=='photo' else [])+[out/'mark-samples.png']
    records.append(dict(kind=kind,prompt=prompt,images=[p.name for p in paths]))
    target=out/(kind+'.png')
    if target.exists():continue
    if not args.live:raise SystemExit('Pass --live to request a new image.')
    space=pilot['server_value']('BAILIAN_WORKSPACE_ID')
    if not re.fullmatch(r'llm-[a-z0-9-]+',space):raise ValueError('Unexpected workspace')
    payload=dict(model=pilot['MODEL'],prompt=prompt,image=[encode(p) for p in paths],prompt_extend=False,size='1024x1024',n=1)
    rsp=requests.post(f'https://{space}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1/images/generations',
                      json=payload,headers={'Authorization':'Bearer '+pilot['server_value']('DASHSCOPE_API_KEY')},timeout=270,allow_redirects=False)
    if rsp.status_code!=200:raise RuntimeError(f'Provider HTTP {rsp.status_code}')
    url=rsp.json()['data'][0]['url']
    if urlparse(url).scheme!='https' or not re.fullmatch(r'[a-z0-9-]+\.oss(?:-accelerate|-cn-[a-z0-9-]+)\.aliyuncs\.com',urlparse(url).netloc):raise ValueError('Unexpected asset location')
    rsp=requests.get(url,allow_redirects=False,timeout=60);rsp.raise_for_status()
    if not rsp.content.startswith(b'\x89PNG\r\n\x1a\n'):raise ValueError('Invalid PNG')
    temp=target.with_suffix('.part');temp.write_bytes(rsp.content);temp.replace(target)
    print(kind,flush=True)
(out/'study.json').write_text(json.dumps(dict(model=pilot['MODEL'],anchor='../sketch-blue.png',unfixedSeed=True,
    source='../run.json',records=records),ensure_ascii=False,indent=2),encoding='utf8')
