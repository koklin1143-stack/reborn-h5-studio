"""Two opt-in Bailian studies using only mark samples from the approved project proof."""
import argparse
import json
import runpy
from pathlib import Path
from PIL import Image

helpers = runpy.run_path(str(Path(__file__).with_name('qa-enamel-mask-study.py')))
base = helpers['base']
out = base / 'subject-study'

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--live', action='store_true')
    parser.add_argument('--wheel-variant', action='store_true')
    args = parser.parse_args()
    out.mkdir(exist_ok=True)
    source = Image.open(base/'selected/warm-line.png').convert('RGB')
    # Relative to the entire source plate. Isolate marks without eyes, ears, or a complete object.
    pieces = [(0.321,.485,.354,.57),(.432,.426,.515,.518),(.63,.64,.699,.73)]
    strip = Image.new('RGB',(456,160),'white')
    for i,(x0,y0,x1,y1) in enumerate(pieces):
        patch = source.crop((round(source.width*x0),round(source.height*y0),round(source.width*x1),round(source.height*y1)))
        patch.thumbnail((140,130))
        strip.paste(patch,(i*152+(152-patch.width)//2,(160-patch.height)//2))
    strip.save(out/'ink-samples.png')
    rules = ('交付一枚完整原创的日用搪瓷平面印花正稿，纯白背景、完整居中，四周留空。'
             '参考图的三个碎片只说明印墨如何收边、变淡和连接。题材按下述文字重新设计。'
             '只用朱红大面、同色系略深的赭红短线及露出的底白。在结构转折处让线自然并入色面。'
             '喷点细而集中，最多一两处局部退晕。不要黑轮廓、投影、皮毛、贴纸白边、文字、产品照片或参考碎片。')
    subjects = {
       'flower':'一枝侧向舒展的山茶，保留一朵半开的花、一枚斜向的小花苞、两片叶。以几瓣宽阔弧面构成主花，大瓣根部积朱红并向瓣尖露白。赭红小线在花瓣翻折处收进色面。留一弯空白分出前后瓣。叶片以同色实形和一条留白叶脉收束；枝梗自然接入花托。不要繁复花束或装饰圆框。',
       'bicycle':'一辆侧看的老式通勤自行车，车头朝右，两个等大的轮圈，清楚的菱形车架、鞍座和弯把。把车轮的圆弧、横梁和斜梁的相接处概括为带手感的朱红印花。轮圈之间和车架三角里大块露白，关键车管须相接。细节只保留少数有节奏的辐条。用一小片后挡泥板承接车轮弧势，挡泥板根部一处可以轻微退晕。不要路面、骑手、品牌和机械爆炸图。'
    }
    for name,brief in subjects.items():
        output=out/(name+'.png')
        if not output.exists() and not args.live:
            raise SystemExit('Pass --live for new samples')
        helpers['generate'](output,out/'ink-samples.png',brief+rules)
    (out/'study.json').write_text(json.dumps(dict(model=helpers['pilot']['MODEL'],input='ink-samples.png',source='../selected/warm-line.png',fragments=pieces,rules=rules,subjects=subjects,scope='Non-collection prototypes. One generation per subject.'),ensure_ascii=False,indent=2),encoding='utf-8')
    if args.wheel_variant:
        target=out/'wheel.png'
        if not target.exists() and not args.live:raise SystemExit('Use --live for the wheel variant')
        prompt=('按附图三弧轮的原创构图制作一枚朱红单色印花。保住侧视自行车、三角露白和两个等大轮圈。'
                '每个轮内只有三片宽阔的弧形辐片，像三片同向旋转的柳叶，叶端接到轮圈，中央连到轮轴，'
                '请保留这种当代自行车装饰造型。大片轮内留白，外轮廓干净清楚，车管在接头处用同色赭红收线后并入朱红。'
                '线宽随受力而变，只有车座和挡泥板色根用短促细喷点退到白。切勿添加普通钢丝辐条，轮胎外不喷色。'
                '整幅为白底朱红实形的小印花。保留疏朗手感与纸上布局，只画图案本身。')
        helpers['generate'](target,out/'wheel-guide.png',prompt)
        (out/'wheel-request.json').write_text(json.dumps(dict(model=helpers['pilot']['MODEL'],input='wheel-guide.png',prompt=prompt),ensure_ascii=False,indent=2),encoding='utf-8')

if __name__=='__main__':main()

