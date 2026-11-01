/* The review sheet and the local generation server use the same design vocabulary. */
(function(root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PatternGrammar = factory();
})(globalThis, () => {
  'use strict';
  const version = 'enamel-ornament-17';
const colourWords={'钴蓝':'#1049a4','靛蓝':'#30477c','搪瓷蓝':'#355b68','朱红':'#be4532','砖红':'#a34c3b','赭黄':'#c59330','金黄':'#d5a244','灰绿':'#758977','墨绿':'#335e51','红':'#ba4036','蓝':'#355b86','黄':'#c99a36','绿':'#518467','紫':'#845f92','橙':'#cc753a','粉':'#d7899b','黑':'#302f31','奶白':'#fffaf0','米白':'#fffaf0','白':'#ffffff'};
const isBody=part=>/身体|躯干|主体|主色|其余|其他部分|全身|身子|身$/.test(part);

// Parse both "白色的角" and "角和眼睛是白色的". Keep both nouns even
// when they share an ink. Existing free-form colour-only palettes use the planner.
function partAssignments(words){
  const pattern=new RegExp('#[0-9a-fA-F]{6}|'+Object.keys(colourWords).sort((a,b)=>b.length-a.length).join('|'),'g');
  const out=[];
  for(const clause of words.split(/[，,。；;\n]/)){
    const groups=[...clause.matchAll(pattern)].length>1?clause.split('、'):[clause];
    for(const group of groups){
      if(/留白|露白|透明|露釉/.test(group))continue;
      const matches=[...group.matchAll(pattern)];if(matches.length!==1)continue;
      const m=matches[0],before=group.slice(0,m.index).trim(),after=group.slice(m.index+m[0].length).trim();
      const names=before&&!/^(?:用|配|要|选)$/.test(before)?before.replace(/(?:都|均|全部|分别)?(?:是|为|用|呈|涂成|涂为|改成|改为|涂|填|染成|要)$/,''):after.replace(/^色?的?/,'');
      for(let part of names.split(/、|和|与|及/)){
        part=part.trim().replace(/^.*的(?=.+)/,'').trim();
        if(!part||part.length>24||/^[的色：:\s]+$/.test(part))continue;
        const hex=colourWords[m[0]]||m[0].toLowerCase();
        if(!out.some(p=>p.part===part&&p.hex===hex))out.push({part,hex});
      }
    }
  }
  return out;
}
function isBoundPalette(targets){
  const colours=new Set(targets.map(p=>p.hex));
  return targets.length<=12&&colours.size>=2&&colours.size<=3&&targets.some(p=>isBody(p.part))&&targets.some(p=>!isBody(p.part));
}


  // Internal construction for a connected figure; exposed only on its saved recipe.
  const linePlate={name:'圆线平印',ink:'#203f66'};
  // Internal print studies. The renderer receives anonymous ink fragments, never the sample subject.
  const techniques = {
    vermilion:{name:'朱红喷花',hint:'同色收线，色边渐淡',inks:['#c54227','#a73226'],
      shape:'把重心交给一块主色面，另一侧由几段有轻重的短线和留底接起。',
      finish:'仅用朱红色系。主面实而饱满，深赭红短线在结构转折处与主面接拢。一处套模边清楚，另一处以细密喷点渐淡露底。不要黑线、异色配饰、全身渐变或立体光影。'},
    cobalt:{name:'钴蓝露白',hint:'整块钴蓝，以白分形',inks:['#073690'],
      shape:'合并相接的大面，在关键连接处切出少量宽窄不一的白形，让小尺寸也能读出结构。',
      finish:'只用一种饱满的钴蓝实色和露出的釉底。用两三处有来由的负形分出部件、遮挡和朝向，保留输入里有性格的小笔形。不要渐变、细密排线、第二套色或另加的花饰。'},
    softSpray:{name:'暖红柔喷',hint:'暖红渐退，透出奶白',inks:['#c8472c','#efdabe'],
      shape:'将主形化为一处连贯的大面，保留原有转折和不对称，让轮廓一侧轻轻消失。',
      finish:'暖朱红压在一个结构面上，沿一个方向均匀柔喷到奶白露底，过渡宽而柔。仅用同色细短线收住关键接点，其余地方透底。没有逐根毛发、轮廓黑线、立体光影或全图雾化。'}
  };
  const subjectRule='主体、数量、朝向、重心与部件之间的连接取自创作者。只简化妨碍阅读的细节。植物保留枝叶生长关系，器物保留支撑与开口，其他题材依其自身结构取舍。画法样张仅说明用笔和留底，不能把样张的题材、五官或姿势套进来。';
  const formDirections={classic:'保留经典：按输入的比例与节奏制纹。',modern:'现代转译：合并小面，放大主次与留底的对比。',free:'自由融合：允许夸张局部笔形，保留主体姿态与关键连接。'};
  // Catalogue descriptions are evidence. The layouts and approximate RGB pigments are design decisions.
  const references = {
    'motif:enamel-magpie': {
      study:'喜鹊花枝', title:'靛蓝与朱花', layout:'sprig',
      source:'立豐三星牌花鳥搪瓷製面盆', accession:'2004.025.0066',
      url:'https://collections.nmth.gov.tw/CollectionContent.aspx?a=132&rno=2004.025.0066',
      observed:'白底，内底主景有靛蓝、红黄花色与绿叶，外腹另作红蓝横饰。',
      pigment:'让靛蓝压住视觉重心，朱红只点焦点，绿承接转折；让底釉在形与形之间贯通。',
      colors:['#203f66','#bb4939','#698361','#d8a448']
    },
    'motif:enamel-peony': {
      study:'牡丹花开', title:'牡丹与晕边', layout:'rosette',
      source:'牡丹搪瓷盤', accession:'2004.028.0442',
      url:'https://collections.nmth.gov.tw/CollectionContent.aspx?a=132&rno=2004.028.0442',
      observed:'牡丹在盘底，内缘蓝色渐层和红口沿分区。',
      pigment:'借主纹与外围分色的方法。焦点用暖胭脂，蓝调退到外层；在局部色根收浓、色梢露底，不在每条边上描线。',
      colors:['#b94f57','#da9389','#487aa2','#77917c']
    },
    'motif:enamel-happiness': {
      study:'双喜记忆', title:'红纹与靛边', layout:'border',
      source:'Enamel bowl made in China', accession:'98/126/111',
      url:'https://collection.powerhouse.com.au/object/160895',
      observed:'石家庄制面盆，白底粉花红字，外侧红色叶饰，口缘红与深蓝分带。',
      pigment:'暖红负责大节拍，以深蓝在转折处收边，淡红退后。保留底釉空隙；只有用户要求文字才使用字形。',
      colors:['#ad3f46','#d99598','#243e5b','#c56352']
    }
  };
  const layouts = {
    single:{name:'单幅主纹',note:'让一个完整主体或一组有关联的物件独立成纹。',plate:'保留输入规定的主体数量与相对位置，组成一枚完整主纹。四周留白，不自动派生陪衬、复制主体或围成徽章。'},
    sprig:{name:'折枝成簇', note:'沿一条弯势安排主形，辅形向一侧收小，对侧留空。', plate:'生成一枚可独立放置的偏心主纹。沿同一条连贯弧势收拢成一簇，默认一个主形组、一到两个陪衬；几颗成组时保留共同连接，避免等大的图标撒满画面。枝势是构图方向，不强加花枝。'},
    rosette:{name:'向心团花', note:'主形定中心，小单元围合，层与层之间透出底色。', plate:'外缘由单元共同围出松动的圆势，内外层错位。在中心与外围之间留出可呼吸的负形。以轮廓特征提炼的小单元作回旋，不必复制整个主角或画实心圆徽章。'},
    border:{name:'连续边花', note:'把主体提炼成横向的一节，留出能接到下一节的节拍。', plate:'设计一个横向边花循环单元，完整置于画面中部。建立主、次、停顿的节奏，首尾疏密能相接，左右边位留同量空隙。可重复部分借自用户题材，禁止裁断主体来假装循环。'}
  };
  const methods = {
    image:{name:'照片', summary:'提炼姿态与关键细节，重组剪影。', rule:'从用户图片辨认主角，选择两项最具辨识度的结构特征和一处关系，如朝向、果梗连接或遮挡。删去摄影背景、阴影、镜面高光和次要物。将轮廓归纳成舒展的大弧、转折与负形，再从轮廓抽一个小形作陪衬。'},
    sketch:{name:'手绘',summary:'看原画的笔触、姿态和比例，确认单色稿后设色。',rule:'先辨认题材，再以同一张草图为姿态参考，保留夸张与重心，只整理影响成纹的线。'},
    text:{name:'文字', summary:'从名词、数量和动作确定主次与呼应。', rule:'先提取明确写出的主体、数量、动作、色彩和情绪；一个核心意象构成大形，一个关系词决定间距、朝向或重叠。抽象词采用创作者选定的具体意象。没有要求题字时，用形与势表达，不把词印在画上。'},
    motif:{name:'参考纹样',summary:'保留主纹特征，调整主辅关系。',rule:'按所选方向重新组织项目示意纹样中的主形和配饰。'}
  };
  const directions = {
    classic:'保留经典：沿用所选实物对照的主辅色分工、留底位置与装饰层次，换入用户题材。',
    modern:'现代转译：保留所选对照的一处色层关系和一处留底关系，合并细部，放大主次尺度差。',
    free:'自由融合：允许重组节奏和夸张比例，仍保留输入主体可辨的两个特征，以及所选对照的色彩分工。'
  };
  const abstractIdeas = {
    '团圆':['双鱼环游，鱼头与鱼尾接续成环','两瓣相对，向内围出一个团圆的空心'],
    '思念':['两燕隔空相望，中央留出距离','两枝隔岸相向，叶尖彼此呼应'],
    '春天':['嫩芽由小到大展开','燕尾与柳叶相互穿插'],
    '希望':['一枚种子裂开，嫩芽向上抽长','花苞逐层舒展，外层由密到疏'],
    '自由':['飞燕掠过风纹，翼尖向外舒展','一尾鱼转身，尾鳍带出水纹'],
    '丰收':['两束谷穗向中央低垂','累累果实沿枝条由疏渐密']
  };
  function choices(text) {
    const key=String(text||'').trim().replace(/[。！!\s]+$/g,'');
    return Object.hasOwn(abstractIdeas,key)?abstractIdeas[key]:[];
  }
  function makePlan({method,reference,direction,prompt='',subject='',layout='auto',reading='',sketchMode='gesture',technique}){
    const ref=Object.hasOwn(references,reference) && references[reference];
    if(!ref || !Object.hasOwn(methods,method) || !Object.hasOwn(directions,direction))throw Error('纹样规则与所选素材不匹配。');
    if(method==='sketch' && !['gesture','redesign'].includes(sketchMode))throw Error('请选择草图的画法。');
    if(technique!==undefined && (method==='motif'||(technique!=='auto'&&!Object.hasOwn(techniques,technique))))throw Error('无效的纹样研究依据。');
    const treatment=techniques[technique];
    let form=layout;
    if(form==='auto'){
      form=technique?'single':ref.layout;
      if(method==='text' && /边花|边饰|连续|二方连续/.test(prompt))form='border';
      else if(method==='text' && /团花|成环|环游|围成一圈/.test(prompt))form='rosette';
      else if(method==='text' && /折枝|斜枝/.test(prompt))form='sprig';
    }
    if(!Object.hasOwn(layouts,form))throw Error('请选择可用的纹样构图。');
    const candidates=method==='text'?choices(prompt):[];
    if(reading && !candidates.includes(reading))throw Error('这项意象与当前文字不匹配。');
    const idea=method==='text'?prompt.trim():method==='sketch'?subject.trim():'';
    return {version,method,reference,direction,...(method==='sketch'?{sketchMode,printInks:printPalette(reference)}:{}),
      ...(technique?{technique}:{}),...(treatment?{printInks:treatment.inks}:{}),layout:form,layoutName:layouts[form].name,
      idea,reading,needsReading:candidates.length>0&&!reading,materialRule:methods[method].summary,
      formation:layouts[form].note, colorStudy:treatment?.name||ref.title,source:ref.source,accession:ref.accession,sourceUrl:ref.url};
  }
  function printPalette(reference){
    const [base,second,third]=references[reference].colors;
    return [base,reference==='motif:enamel-magpie'?second:third];
  }
  function printBrief(plan){
    const [main,accent]=printPalette(plan.reference);
    return '本次花纸选两版颜料：主色 '+main+' 构成主形，辅色 '+accent+' 仅在一处视觉焦点呼应。以釉底作为第三种形。保留主色的稀释色阶，避免红蓝绿等面积、高饱和轮替。创作者明确指定的配色优先。';
  }
  function instructions(plan, design) {
    if(plan.needsReading)throw Error('请先为这个词选定一个具体意象。');
    const ref=references[plan.reference];
    const treatment=techniques[plan.technique];
    const role=plan.method==='motif'?'配图为项目自绘示意纹样。':'按照已经提炼的设计稿绘制原创日用搪瓷平面印花，交付完整纹样。';
    return [role,plan.method==='motif'?methods.motif.rule:'',
      design && '主体与动作：'+design.subject+'。'+(design.traits.length?'保留以下辨识特征：'+design.traits.join('；')+'。':''),
      design && '重新造型：'+design.redraw+'。派生纹元和节奏：'+design.unit+'。',
      design && '主次与留白：'+design.arrangement+'；'+design.void+'。',
      (!design||treatment)&&plan.idea&&'创作者输入（题材、数量、关系及省略要求）：'+JSON.stringify(plan.idea),
      plan.reading && '创作者选定的表达：'+plan.reading,
      '纹样组织：'+layouts[plan.layout].plate,
      treatment?subjectRule:plan.method==='motif'?'设色原则：'+ref.pigment:printBrief(plan),
      treatment?[formDirections[plan.direction],treatment.shape,treatment.finish].join(' '):directions[plan.direction],
      treatment&&plan.layout==='single'&&'主体之外整片留空；花苞、叶片、车轮、文字等部件严格按输入，未要求的地平线、云线、地纹、装饰横线或背景符号一律省去。',
      !treatment&&'用相邻形的咬合与色块叠压组织一组纹样。仅在需要的根部退晕，避开球面高光、投影、金属描边和摄影明暗。用户指定的数量和姿态优先；需要回声时重复局部节奏，不擅自增添主体。线宽、虚实和边沿随结构改变。',
      '输出一张完整平面纹样贴图，透明底，四周至少留一成安全空间。只画装饰纹样本身；不画器物、相片、色卡、商标、说明字、格线、边框或阴影。'].filter(Boolean).join('\n');
  }
  return {version,partAssignments,isBoundPalette,isBody,colourWords,references,layouts,methods,directions,techniques,linePlate,subjectRule,formDirections,choices,makePlan,printPalette,printBrief,instructions};
});
