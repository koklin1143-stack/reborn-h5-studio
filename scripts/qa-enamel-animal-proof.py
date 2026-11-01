"""Generate one colour proof from an original composition drawing, without sending collection images."""
import argparse
import json
import runpy
from pathlib import Path
work=runpy.run_path(str(Path(__file__).with_name('qa-enamel-mask-study.py')))
folder=work['base']/'animal-proof'
prompt="""你是绘制中国老式日用搪瓷烤花纸原稿的美术设计师。把这张平涂的布局稿绘成一幅完成度很高的小型动物装饰画《小犬逐球》。参考仅用于确定狗、绣球、头足和翘尾的相对位置与动势，你要重新绘制全部笔法和大轮廓。
画出中国工笔小动物经过喷花分色后温润而明亮的质感。像是在乳白釉上用花版印出的民间小画：用饱满的藤黄、赭红、孔雀蓝分出明暗，部分色面外沿利落，色根慢慢向内变浅，局部以细而有提按的深褐笔点染。用色清亮，别泛黄。蓝耳深处以靛色收，尾巴蓝尖与脊背蓝斑呼应。颊面和腹侧露白，不沿整圈描边。让近侧长耳自然柔垂，照应比格犬的品种，鼻眼精巧，狗的目光明确落在前爪前的朱红绣球；眼睛正常大小。用疏密有别的少量短笔在耳根、肩窝、胸毛表达转折，面部保持简洁，躯体要有真实犬的骨架起伏，并概括为团纹的圆势。耳、爪、尾的走势都在追着球，形成浑然一体的装饰构图。球的弧带有疏密变化，与翘尾呼应，绸绳收成下方有轻重的一笔。四肢交叠清楚，前长后收，保留扑玩的姿态。整幅纹样在圆形视觉范围内偏下聚拢，四周留白，只给一只狗与一只球。
请以蘸色手绘后按版分色的平面原画交稿，纯白空背景。一张完整纹样，无器物、字样、标签、标志、纸纹、阴影、厚涂反光、卡通贴纸感、黑色外轮廓或几何图标。"""
p=argparse.ArgumentParser();p.add_argument('--live',action='store_true');p.add_argument('--loose',action='store_true');args=p.parse_args()
if args.loose:
    source=work['out']/'bow-guide.png'
    name='loose'
    prompt="""以这幅动作速写里的小猎犬画一幅原创中国老日用搪瓷花纸装饰画《小犬逐球》。草图只管动作。想象熟练的花鸟画家拿蘸色毛笔在白地上直接写生，再把画分版。润湿的色根、饱和的小点和透出的白地都跟随体块，有果断的笔头。请亲自重新设计犬形：额头圆而宽，吻突出，耳深长软垂；伏低的前胸和两只前掌并向左前方，后臀扬起，尾尖向上再弯回。小狗歪着脑袋，眼珠向下看前爪前那枚小朱红绣球。它的神气要像一只随时会扑上去的幼犬。此题的主角是动物与球在玩耍的关系。
画面取传统盆底小景的团块章法：狗的回背与扬尾团成上半弧，球下伸出一绺缎带折回来应下半弧，尾尖与丝带呼应，球面露出两三道斜斜的绣线。两三片自成节奏的嫩叶在远侧压住一角，浅到不抢眼。主体与陪景共用一块有开口的白地，没有徽章、圆边或装裱。
动物主体用暖褐金与乳白相间，颊和大耳的色根用沉靛青。肩与臀分出大小不同的釉色斑，背浓腹浅，局部以短短的赭线或钴线点醒足、眼和耳。侧面转折用几笔蘸色退晕收拢，极少数毛簇成组而不画满表面。色块既有晕边又有明确的剪影，绝不要沿全身勾线填色，不画扁平矢量卡通和品牌吉祥物。全幅是一枚横向疏密错落的原创手绘平面纹样，白底，色墨只在纹样内，四周留白。不要画实物杯盘、手、色卡、字、阴影、做旧纹理和相片。"""
else:
    source=folder/'layout.png'
    name='print'
if not args.live and not (folder/(name+'.png')).exists():raise SystemExit('Pass --live for one image call.')
work['generate'](folder/(name+'.png'),source,prompt)
(folder/(name+'-request.json')).write_text(json.dumps(dict(method='Bailian study using only project-drawn layout or loose gesture',model=work['pilot']['MODEL'],prompt=prompt,
 referenceRecord='NMTH 2017.004.0001 (visual analysis only)',input=str(source.relative_to(work['base'])),output=name+'.png'),ensure_ascii=False,indent=2),encoding='utf-8')

