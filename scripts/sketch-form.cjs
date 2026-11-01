/* The original supplies pen marks and the small study supplies pose. Colour uses the approved drawing. */
const families = {
  quadruped:'依原画的四肢落点与伸缩关系画出近远层次。用少量有宽度、带转折的面代替细棍，爪有着力处。沿原画的身体长短、耳朵和尾尖的方向发展；不把短腿画长，不将所有动物扶正站好。',
  bird:'依据草图的俯仰和翼尾开合概括羽形，在羽根和翅尖之间有张有收。',
  aquatic:'沿原稿的身体弧向连接头和尾，保留鳍尾原有的开合和身体的弯势。',
  plant:'沿原稿的长势、倾斜和枝叶间距设计主茎与叶片，在拐点安排叶序。',
  person:'依原稿的头肩倾角、躯干与手足的相对位置，保留重心偏移或探身的姿势。',
  other:'保留主体大块之间的朝向、比例、挤压与疏密，让最特别的部位仍能认出来。'
};
const poses=['站立','行走','小跑','跳跃','坐着','趴卧','回望','飞行','游动','舒展','静置','抬头','低头嗅闻','伸懒腰','伏跃','未指定'];
const facings=['向左','向右','正面','未指定'];
const cues=['竖耳','垂耳','卷尾','蓬尾','长喙','展翼','成簇','攀缘','对望','未指定'];
const details=['短吻','长吻','垂耳','竖耳','折耳','翘尾','卷尾','蓬尾','斑点','双色毛','围巾','项圈','长须','宽翼','双瓣','锯齿叶'];
const recognition = [
 '只辨认自由手绘想表达谁或什么。识别动作、朝向以及有把握的身份线索。创作者填写的主体提示优先。把草图看作作者的动作速写。观察大块之间的比例差、俯仰、支撑与伸展，不把夸张或不对称一概视为失误。注意画者在哪一处顿笔、复笔或略微摇摆。',
 '另外填写 gesture 对象：axis 写最显眼的大动作与两处相对位置，proportion 写画中最有个性的一处大小或长短关系，accent 写一个能传达神态的局部朝向或负形。每项不超过45字，写实际看见的空间关系，避免只有「可爱、灵动」或物种常识。难以分辨的细节可填「未见」。',
 'handwriting 另用一句不超过60字的话描述原稿中一到两处能定位的笔迹，例如哪段边有短促折返、哪两笔没有接牢。只记眼睛看得见的痕迹；线条本来平滑时如实记录。另给 inkAnchors，为2至3组 [x,y]，在整张正方形输入上按0至1000计。中心选在不同区域最值得保留的真实墨线上，例如两笔相交、长边轻颤或耳尖折返。',
 'ornament 对象含三个短句。unit 从这件主体挑出一个带有手绘特征的基本形。join 说明它怎样同时构成外轮廓和构图节奏。opening 说明哪处釉白穿入主体、使不同部位相接。这三句必须写出具体改法：哪一部分拉长、旋转或分叉，怎样把轮廓拆为相接的笔形，哪一笔越过原有外边界。不能只说明原来画了什么。禁止先造一个封闭轮廓，再在身上添加装饰。',
 '输出 JSON。字段 subject 是简短的题材名称（只写物种或物名，不写草线形状），family 选 '+Object.keys(families).join('/')+'，pose 选 '+poses.join('/')+'，facing 选 '+facings.join('/')+'，cue 选 '+cues.join('/')+'，count 是主体数量 1 至 8。可选 details 最多选两项：'+details.join('/')+'。只有清晰可辨或创作者明确提到的个性细节才填；不确定则省略。拿不准的动作与特征用未指定。若连主体类别也不能确定且没有用户提示，只返回 {"unclear":true}。'
].join('\n');
function identity(value) {
  if(!value || typeof value.subject!=='string' || !/^[\p{L}· ]{1,20}$/u.test(value.subject) ||
     !Object.hasOwn(families,value.family) || !poses.includes(value.pose) || !facings.includes(value.facing) ||
     !cues.includes(value.cue) || !Number.isInteger(value.count) || value.count<1 || value.count>8)return null;
  const {subject,family,pose,facing,cue,count}=value;
  const features=Array.isArray(value.details)?[...new Set(value.details.filter(x=>details.includes(x)&&x!==cue))].slice(0,2):[];
  const fields=['axis','proportion','accent'];
  const observed=value.gesture;
  const gesture=observed&&fields.every(k=>typeof observed[k]==='string'&&observed[k].trim()&&observed[k].length<=80)
    ?Object.fromEntries(fields.map(k=>[k,observed[k].trim()])):null;
  const handwriting=typeof value.handwriting==='string'&&value.handwriting.trim()&&value.handwriting.length<=100?value.handwriting.trim():null;
  const inkAnchors=Array.isArray(value.inkAnchors)?value.inkAnchors.filter(p=>Array.isArray(p)&&p.length===2&&p.every(n=>Number.isFinite(n)&&n>=0&&n<=1000)).slice(0,3):[];
  const motif=value.ornament;
  const ornament=motif&&['unit','join','opening'].every(k=>typeof motif[k]==='string'&&motif[k].trim()&&motif[k].length<=120)?{unit:motif.unit.trim(),join:motif.join.trim(),opening:motif.opening.trim()}:null;
  return {...(ornament?{ornament}:{}),...(inkAnchors.length?{inkAnchors}:{}),...(handwriting?{handwriting}:{}),...(gesture?{gesture}:{}),subject:subject.trim(),family,pose,facing,cue,count,...(features.length?{details:features}:{})};
}
function silhouette(id,hasInk,plan,grammar) {
  return [
   '重新设计图1的印花构图，交付一枚「'+id.subject+'」主题的单色搪瓷花纸正稿。图1是项目自绘的风格示意：学习其大块实形、弧形露白和从大到小的节奏，把原有题材全部换成创作者的题材。画黑白木刻般的正负形稿，已印实的宽笔面约占图案本身四成。',
   '图2只提供主角的朝向、动作与性格。'+[id.pose,id.facing,id.cue,...(id.details||[])].filter(v=>v!=='未指定').join('，')+'。保留数量 '+id.count+'。允许外轮廓重新设计。'+(hasInk?'图3的少量真实手笔只在对应部位点到即可。':''),
   '把一条最动人的笔势抽出来，拉长、分叉、翻转或收小，让一组彼此咬合的大实形直接组成主角。至少让一处原外轮廓断开，和外部留白呼吸。画面的趣味应来自外轮廓与轮廓外的节拍，不能做一张空心线描外框，也不能用图标填色或在身体里排一套无关纹理。',
   id.family==='aquatic'?'把鱼的游势画成一个连续的弧形笔意。头背是一枚宽而收尖的墨形，尾鳍从躯体分出两道长短有别的飘带，鱼腹由贯通的一弯白地自然显出；可在尾后收一笔同势小水纹。保留原鱼方向、眼位与手笔。整条鱼本身是一枚活的纹元。禁止密鳞填充和全周描边。':families[id.family],
   id.ornament&&[id.ornament.unit,id.ornament.join,id.ornament.opening].join('。'),
   id.gesture&&Object.values(id.gesture).join('。'),id.handwriting&&id.handwriting,
   grammar.layouts[plan.layout].plate,grammar.directions[plan.direction],
   '本步骤先用黑与留白表现所选方向的造型与疏密，设色留到确认稿以后。',
   '纯白底，哑光平面实墨；输出一枚完整花纸单元，四周空出一成。无器物、字样、展板、边框、铅笔阴影和纸张纹理。'
  ].filter(Boolean).join('\n');
}
// Separate subject from style: send semantic cues and print rules, never a different pictured subject.
function redesign(id,plan,grammar) {
  const traits=[id.subject,id.pose,id.facing,id.cue,...(id.details||[])].filter(v=>v!=='未指定');
  return [
   '画一枚「'+id.subject+'」的黑白搪瓷花纸，画面以此主体为中心。装饰单元从它自身的轮廓提炼。',
   '主体与神态：'+traits.join('，')+'。主体数量 '+id.count+'。',
   id.gesture && '动作与特征：'+[id.gesture.axis,id.gesture.accent].join('；'),
   '参照所选搪瓷器物的套印方法：'+grammar.references[plan.reference].pigment+'。这一步把主色看作大墨面，点色看作小墨面，中间用底白分隔，只画黑白。',
   id.family==='aquatic'&&'用鱼的头、背鳍、腹弧和分叉尾鳍塑造鱼身，节奏可来自尾流或鳍尖。',
   '重新决定外轮廓和比例。从刚辨认出的主体取一个最有性格的局部，把它放大到主导整张剪影。用手绘花纸的卷瓣、回钩或弯月刀口改造这个局部，选一种笔形就够，同形一大一小互相呼应。让黑形与宽阔的釉白互相咬合，缩到拇指大小仍可看出回旋。放开写实比例，舍去草稿中的断线与细碎排线。',
   '只由三至五块有方向的宽笔形组成主纹；白地必须有一条粗而不断的通道从画外穿入主形深处。不要画物种图鉴、整块黑剪影加鳍条、照片剪影或轮廓内填装饰。',
   grammar.layouts[plan.layout].plate,grammar.directions[plan.direction],
   '在白底上只画黑色实形与露白。完整纹样居中，四周留一成空地。不要器物、题字、投影或纸张肌理。'
  ].filter(Boolean).join('\n');
}
function decoration(id,plan,grammar) {
  const traits=[id.pose,id.cue,...(id.details||[]),id.facing].filter(x=>x!=='未指定').slice(0,2);
  const motif=(plan.sketchMode!=='redesign' && id.ornament)||{unit:'由主体最醒目的轮廓提炼一个基本形。',join:grammar.layouts[plan.layout].note,opening:'让底釉从主形的间隙穿过。'};
  const design={subject:id.subject,traits,redraw:'按确认稿的笔势与负形分版。',unit:motif.unit,arrangement:motif.join,void:motif.opening};
  const instructions=[
   '用附图这枚已确认的单色纹样，制成可用于日用搪瓷的平面花纸。题材为'+id.subject+'。保持稿中的朝向、关键手势和主辅形的位置。',
   '按稿子的正负形分色。用主色直接画出构成身体和姿态的大形，以留白交代两形的边界。线条只用在关键转折与传神的原笔。不把每个白区涂满，不给主体套一个连续粗外框。单色稿越简洁，分色越要克制。',
   '主纹的生成依据：'+motif.unit+'。形与形的衔接：'+motif.join+'。露底：'+motif.opening,
   id.family==='aquatic'&&'让背弧、鳍或尾之一成为形体的构图节拍；鱼腹留白并与外部水势呼应。不能另添成排扇形鱼鳞，也不在鱼腹铺花。',
   '输出黑、红、白的套印分版稿。把一块完整的小主体部件（例如较小的鱼鳍、羽片、花心）改画为明亮纯红 #ff0000，约占墨量一成。主形用纯黑，开放底纹纯白。黑色会印成主墨，红色会印成点墨，白地露釉。仅画腹内的一点、增添无关点缀或照原单色稿不分版均不合要求。',
   '采用所选实物研究的主次层级和疏密。最终套色由系统完成，当前只交付黑版、红版与留底。',
   plan.sketchMode!=='redesign'&&id.handwriting&&'保留这处笔迹的气质：'+id.handwriting,
   '只交付一枚完整纹样，四周留一成余量，背景纯白。不要使用灰雾、喷溅、纸纹或彩色边缘。不要出现器物、纸面、文字、阴影、套印标记、色卡或对照图。'
  ].filter(Boolean).join('\n');
  return {design,instructions};
}
module.exports={recognition,identity,silhouette,redesign,decoration};
