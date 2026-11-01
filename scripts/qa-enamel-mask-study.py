"""Opt-in warm print pilot. Public reference is used for human observation only."""
import argparse
import base64
import json
from pathlib import Path
import re
import runpy
from urllib.parse import urlparse

import requests
from PIL import Image, ImageDraw

pilot=runpy.run_path(str(Path(__file__).with_name('qa-enamel-pilot.py')))
base=pilot['ROOT']
out=base/'mask-study'
palette={'warm':'#D3332A','dark':'#0E1718','leaf':'#8BC7A6'}
reference='http://art.people.com.cn/NMediaFile/2019/0820/MAIN201908200915000197254082222.jpg'

def play_bow():
    # Original gesture sketch: head extends to the left; chest down, hip and tail up.
    paths=[
        [(162,151),(146,136),(133,129),(112,128),(102,137),(98,148),(79,158),(58,160),(51,166),(55,173),(80,181),(106,174)],
        [(125,134),(139,139),(139,153),(130,170),(122,182),(114,184),(108,174),(112,153),(118,140)],
        [(99,148),(97,150)],[(53,164),(60,163),(54,168)],
        [(103,171),(111,184),(127,187),(142,186),(140,196),(121,203),(91,210),(82,218),(103,219),(146,210),(173,197),(190,178)],
        [(159,150),(183,147),(218,133),(250,114),(278,92),(298,82),(316,84),(324,91),(331,117),(335,154),(348,188),(345,198),(333,198),(316,165),(304,146)],
        [(327,93),(353,80),(375,55),(381,39),(377,64),(363,85),(335,110)],
        [(293,126),(278,159),(272,181),(258,196),(242,199),(239,205),(267,206),(290,185),(306,159)],
        [(194,167),(208,163),(238,150),(258,141),(279,128)],[(154,193),(150,206),(125,216),(122,221),(148,220),(175,207)]]
    im=Image.new('RGB',(435,262),'white');g=ImageDraw.Draw(im)
    for pts in paths:g.line(pts,fill='#29332f',width=3,joint='curve')
    im.save(out/'bow-guide.png')

def generate(path,source,prompt):
    if path.exists():return
    space=pilot['server_value']('BAILIAN_WORKSPACE_ID')
    if not re.fullmatch(r'llm-[a-z0-9-]+',space):raise ValueError('Unexpected workspace')
    encoded=base64.b64encode(source.read_bytes()).decode()
    rsp=requests.post(f'https://{space}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1/images/generations',
            json=dict(model=pilot['MODEL'],image=['data:image/png;base64,'+encoded],prompt=prompt,prompt_extend=False,size='1024x1024',n=1),
            headers={'Authorization':'Bearer '+pilot['server_value']('DASHSCOPE_API_KEY')},allow_redirects=False,timeout=270)
    if rsp.status_code!=200:raise RuntimeError('Provider HTTP '+str(rsp.status_code))
    url=rsp.json()['data'][0]['url']; u=urlparse(url)
    if u.scheme!='https' or not re.fullmatch(r'[a-z0-9-]+\.oss(?:-accelerate|-cn-[a-z0-9-]+)\.aliyuncs\.com',u.netloc):raise RuntimeError('Unexpected asset host')
    raw=requests.get(url,allow_redirects=False,timeout=60);raw.raise_for_status()
    if not raw.content.startswith(b'\x89PNG\r\n\x1a\n'):raise RuntimeError('Invalid PNG')
    temp=path.with_suffix('.part');temp.write_bytes(raw.content);temp.replace(path);print(path.name,flush=True)

def main():
    p=argparse.ArgumentParser();p.add_argument('--live',action='store_true');args=p.parse_args()
    out.mkdir(exist_ok=True);play_bow()
    main_ink=('用两道有独立轮廓的色版组织这只比格犬，一版朱红近 #D3332A，另一版墨青近 #0E1718。'
              '以朱红负责一片背斑和头顶，墨青负责垂耳、鼻眼、尾端与脚掌的着力处。'
              '把浅色腹胸留作宽阔连续的底白，直接开到轮廓外，嘴边少量露白，保住眼神。'
              '色面外缘像喷花漏模，有简洁、略有手笔的转折；只在背斑的一条根缘向内短短退淡半级，'
              '色面其余部分饱满。不要从头到尾的大渐变、光影、绒毛、全周描线、爪趾细线或插画滤镜。')
    shared='只交付一枚原创平面装饰纹样，完整居中，白底，四面有空地。不画产品、文字、色样、分栏、投影或纸张纹理。'
    grass=('在脚旁另安排一小笔疏朗的灰绿草叶，近 #8BC7A6，最长叶片不足犬身长四分之一。'
           '叶尖沿动作的反向轻轻挑起，让重心有呼应。草与脚之间能透进白底，不做地台环框，狗身上不加花。')
    cases=[
        ('seated',base/'sketch-spray.png','图中坐着的垂耳犬是造型底稿。沿用脸的倾斜、前腿的长短、侧坐腰背及向右伸的尾尖，仅重新分色。保留画者简短的点眼和神情。'+main_ink+'只画犬。'),
        ('sprig',out/'seated.png','保留参考中的犬及已有分色、坐姿、脸和眼神，作一枚主纹与辅纹的组合。整只犬不重新造型。'+grass),
        ('bow',out/'bow-guide.png','读图中一只长垂耳犬邀请玩耍的动作，向左探头，前腿贴低伸长，臀高于头，尾尖翘起。依据这张草图重新分出实形和露白，保住耳朵与朝向。'+main_ink+grass)]
    if not args.live and any(not (out/(name+'.png')).exists() for name,_,_ in cases):raise SystemExit('Use --live for three research images')
    for name,src,prompt in cases: generate(out/(name+'.png'),src,prompt+shared)
    (out/'study.json').write_text(json.dumps(dict(model=pilot['MODEL'],reference=reference,
         sampledPhoto='324x255; per-channel median of central 5x5 pixels',sampling={'warm':[198,153],'dark':[148,118],'leaf':[224,171]},
         palette=palette,scope='Photograph not sent. Palette locations and placement on a dog are contemporary study decisions. No fixed seed.',
         cases=[dict(output=n+'.png',input=str(s.relative_to(base)),prompt=t+shared) for n,s,t in cases]),ensure_ascii=False,indent=2),encoding='utf-8')

if __name__=='__main__':main()
