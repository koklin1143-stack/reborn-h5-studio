/* Beijing Model Studio. Only this local server sees the API key and signed result URLs. */
const fs = require('node:fs/promises');
const path = require('node:path');

const model = 'qwen-image-2.1-turbo';
const references = new Map([
  ['motif:enamel-magpie', ['magpie', '喜鹊花枝']],
  ['motif:enamel-peony', ['peony', '牡丹花开']],
  ['motif:enamel-happiness', ['happiness', '双喜记忆']]
]);
const grammar = require('../prototype/pattern-grammar.js');
const sketch = require('./sketch-form.cjs');
const {inkReference}=require('./ink-reference.cjs');
const {applySpotInks,colourPlates,printPlates}=require('./spot-print.cjs');
const {proofIssue}=require('./sketch-proof.cjs');
const {sketchInkGuide,reserveGlaze,readSketchField}=require('./sketch-ink-guide.cjs');
const {roundLineStudy,separateLineInk}=require('./round-line-print.cjs');
const {regionMap,markedParts,recolour}=require('./region-ink.cjs');
const {createHash}=require('node:crypto');
const {registerSketch}=require('./sketch-registration.cjs');
const maxImage = 12 * 1024 * 1024;
class ImageError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
function configured(env = process.env) {
  return Boolean(env.DASHSCOPE_API_KEY && /^llm-[a-z0-9-]{3,64}$/.test(env.BAILIAN_WORKSPACE_ID || ''));
}
function validate(input) {
  if (!input || input.consent !== true) throw new ImageError(400, '请先确认本次素材传输。');
  if (!references.has(input.reference) || !Object.hasOwn(grammar.directions,input.direction)) throw new ImageError(400, '请选择可用的参考纹样和创作方向。');
  if (!['text','motif','image','sketch'].includes(input.method) || typeof input.prompt !== 'string' || input.prompt.length > 1200)
    throw new ImageError(400, '请检查本次素材与文字长度。');
  if (input.method === 'text' && !input.prompt.trim()) throw new ImageError(400, '请先写下想法。');
  if(input.stage==='recolour'){
    if(input.method!=='sketch'||input.technique!=='auto'||input.requestedInks!=null||typeof input.subject!=='string'||input.subject.length>160||
       typeof input.image!=='string'||input.image.length>maxImage||!/^data:image\/png;base64,[a-z0-9+/]+=*$/i.test(input.image))
      throw new ImageError(400,'请选一份已生成的纹样，并写下部位和颜色。');
    return;
  }
  const directSketch=input.method==='sketch'&&input.stage==='pattern'&&input.technique==='auto';
  if(input.requestedInks!==undefined && (input.technique!=='auto'||input.stage!=='pattern'||!validInks(input.requestedInks)))
    throw new ImageError(400,'请选择两种或三种不同的颜料。');
  if(input.refinement!==undefined&&(!directSketch||typeof input.refinement!=='string'||input.refinement.length>160))
    throw new ImageError(400,'这次生成的参数不完整，请重新打开草稿。');
  if (input.method === 'sketch' && !directSketch && !['shape','decorate'].includes(input.stage))
    throw new ImageError(400, '请先生成并确认主体造型。');
  if(input.technique==='auto'&&input.stage!=='pattern')throw new ImageError(400,'素材与生成步骤不一致。');
  if (input.method !== 'sketch' && input.stage != null && input.stage !== 'pattern')
    throw new ImageError(400, '此素材不支持该步骤。');
  if(input.sketchMode !== undefined && (input.method!=='sketch' || !['gesture','redesign'].includes(input.sketchMode)))
    throw new ImageError(400,'草图画法无效。');
  if ((input.stage==='shape' && input.sketchMode!=='redesign')||(directSketch&&input.gestureImage!=null)) {
    if(typeof input.gestureImage!=='string'||input.gestureImage.length>1024*1024||
       !/^data:image\/png;base64,[a-z0-9+/]+=*$/i.test(input.gestureImage))
      throw new ImageError(400,'未收到完整的姿态参考，请刷新后重试。');
  }else if(input.gestureImage!=null){
    throw new ImageError(400,'这一步只需本次选定的素材。');
  }
  if (input.stage === 'decorate') {
    if (input.image != null || input.approved !== true || !sketch.identity(input.identity) ||
        typeof input.shapeImage !== 'string' || input.shapeImage.length > maxImage ||
        !/^data:image\/png;base64,[a-z0-9+/]+=*$/i.test(input.shapeImage))
      throw new ImageError(400, '请先确认一份有效的素形。');
    return;
  }
  if (input.shapeImage != null) throw new ImageError(400, '素材与当前步骤不一致。');
  if (['image','sketch'].includes(input.method)) {
    if (typeof input.image !== 'string' || input.image.length > maxImage ||
        !/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/]+=*$/i.test(input.image))
      throw new ImageError(400, '请重新选择有效图片或绘制草图。');
  } else if (input.image != null) throw new ImageError(400, '输入方式与图片不一致。');
}
async function collect(stream, limit) {
  const chunks = []; let size = 0;
  for await (const chunk of stream) {
    size += chunk.length;
    if (size > limit) throw new ImageError(413, '文件太大，请缩小后重试。');
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}
function providerError(status, code) {
  if (status === 401 || status === 403) return new ImageError(status, '百炼鉴权失败，请核对密钥、北京业务空间和模型权限。');
  if (status === 429 || /quota|balance|allocation|arrear/i.test(code)) return new ImageError(429, '百炼限流或额度不足，请查看账户后再试。');
  if (/inspection|inappropriate|safety|moderation/i.test(code)) return new ImageError(422, '本次素材未通过百炼内容审核，请调整后再试。');
  if (status === 404 || /modelnotfound/i.test(code)) return new ImageError(503, '当前业务空间暂不可用此图像模型。');
  return new ImageError(502, '百炼暂未返回纹样，请稍后重试。');
}
const planner='qwen3.6-flash';
async function postProvider(host, endpoint, body, {env,fetcher,signal,reviewing=false,regionReading=false}){
  const response=await fetcher('https://'+host+'/compatible-mode/v1/'+endpoint,{
    method:'POST',redirect:'error',signal,
    headers:{'Content-Type':'application/json',Authorization:'Bearer '+env.DASHSCOPE_API_KEY},
    body:JSON.stringify(body)
  });
  const json=JSON.parse((await collect(response.body,256*1024)).toString('utf8')||'{}');
  if(!response.ok){
    const err=providerError(response.status,String(json.error?.code||json.code||''));
    if(endpoint==='chat/completions')throw new ImageError(err.status,(regionReading?'部位定位未完成。':reviewing?'已出图，但结构核对未完成。':'设计提炼未完成，尚未生图。')+err.message.replace('图像模型','视觉模型'));
    throw err;
  }
  return json;
}
function readDesign(content,sketchInput){
  let parsed;
  try{parsed=JSON.parse(String(content).trim().replace(/^\x60\x60\x60(?:json)?\s*/i,'').replace(/\s*\x60\x60\x60$/,''));}
  catch{throw new ImageError(502,'设计说明返回不完整，尚未开始生图。');}
  if(parsed?.unclear===true){
    if(!sketchInput)throw new ImageError(422,'主体还不够明确。请补一句想保留的特征或换一张更清楚的图。');
    const hint=sketchInput.subject?.trim();
    return {subject:hint||'手绘线纹',traits:[],structure:'linear',seams:[],
      redraw:hint?'以创作者写下的题材为意图，借草图的倾斜与比例概括主形。':'沿原笔迹最明显的走向组织一枚自由纹样，保留不对称，不猜具体物种。',
      unit:'由原画中的弯折或停笔提炼一笔有宽窄的色形。',arrangement:'保持原笔迹的相对位置。',void:'让线条之间的空隙透出器物底色。'};
  }
  function field(value){
    if(typeof value!=='string'||!value.trim()||value.length>175)throw new ImageError(502,'设计说明缺少必要内容，尚未开始生图。');
    return value.trim();
  }
  const traits=sketchInput?(Array.isArray(parsed?.traits)?parsed.traits.filter(t=>typeof t==='string'&&t.trim()).slice(0,2):[]):parsed?.traits;
  if(!Array.isArray(traits)||(!sketchInput&&traits.length!==2))throw new ImageError(502,'未收到完整的设计说明，请重试。');
  const seams=Array.isArray(parsed?.seams)?parsed.seams.filter(t=>typeof t==='string'&&t.trim()&&t.length<=175).slice(0,3):null;
  const landmarks=sketchInput&&Array.isArray(parsed.landmarks)
    ?parsed.landmarks.filter(t=>typeof t==='string'&&t.trim()&&t.length<=120).slice(0,5):[];
  const inks=Array.isArray(parsed.inkPalette)&&validInks(parsed.inkPalette.map(p=>p?.hex))&&parsed.inkPalette.every(p=>typeof p.part==='string'&&p.part.trim()&&p.part.length<=80)
    ?parsed.inkPalette.map(p=>({hex:p.hex.toLowerCase(),part:p.part.trim(),...(validInkRegion(p.region)?{region:p.region}:{})})):null;
  return {...(inks?{inkPalette:inks,colorCue:typeof parsed.colorCue==='string'?parsed.colorCue.slice(0,180):''}:{}),...(landmarks.length?{landmarks}:{}),...(seams?{seams}:{}),...(typeof parsed.technique==='string'&&Object.hasOwn(grammar.techniques,parsed.technique)?{technique:parsed.technique}:{}),
    ...(parsed.structure==='solid'||parsed.structure==='linear'?{structure:parsed.structure}:{}),subject:field(parsed.subject),traits:traits.map(field),redraw:field(parsed.redraw),unit:field(parsed.unit),
    arrangement:field(parsed.arrangement),void:field(parsed.void),...(sketchInput?.subject&&parsed.subjectOnly===true?{subjectOnly:true}:{})};
}
function validInks(colors){
  return Array.isArray(colors)&&[2,3].includes(colors.length)&&colors.every(c=>typeof c==='string'&&/^#[0-9a-f]{6}$/i.test(c))&&new Set(colors.map(c=>c.toLowerCase())).size===colors.length;
}
function validInkRegion(box){
  return Array.isArray(box)&&box.length===4&&box.every(v=>Number.isFinite(v)&&v>=0&&v<=1000)&&box[2]-box[0]>=20&&box[3]-box[1]>=20;
}
const {colourWords,partAssignments,isBody}=grammar;
function namedInks(words){
  const segments=words.split(/[，,、。；;：:\n]/);
  const items=[];
  const names=new RegExp('#[0-9a-f]{6}|'+Object.keys(colourWords).join('|'),'gi');
  for(const part of segments){
    const found=[...part.matchAll(names)];
    for(const [i,m] of found.entries()){
      const hex=colourWords[m[0]]||m[0].toLowerCase();
      if(items.some(p=>p.hex===hex))continue;
      const placement=found.length===1?part:part.slice(m.index,found[i+1]?.index);
      items.push({hex,part:placement.trim().slice(0,80)});
    }
  }
  return items;
}
function chooseInks(input,design,words){
  const predicted=design.inkPalette||[],cue=design.colorCue;
  const explicit=partAssignments(words);
  const ordered=[...new Set([...explicit.filter(p=>isBody(p.part)),...explicit].map(p=>p.hex))];
  if(!input.requestedInks&&validInks(ordered)&&!/(?:只用一种色|只用一种颜色|保持单色|改成单色|只要单色)/.test(words))
    return ordered.map(hex=>({hex,part:explicit.filter(p=>p.hex===hex).map(p=>p.part).join('、'),...((predicted.find(p=>p.hex===hex)?.region)?{region:predicted.find(p=>p.hex===hex).region}:{})}));
  // A planner suggestion alone cannot turn an ordinary one-ink request into a colour menu.
  const fromWords=cue&&words.includes(cue)&&/[色红橙橘黄绿青蓝紫粉棕褐靛金银黑白灰赭绛碧翠黛朱丹#]|red|blue|green|colou?r/i.test(cue);
  const count=/三(?:种|个)?(?:颜)?色|3(?:种|个)?(?:颜)?色/.test(words)?3:/(?:两|二|双|2)(?:种|个)?(?:颜)?色/.test(words)?2:0;
  const named=namedInks(words);
  const singleOnly=/(?:只用一种色|只用一种颜色|保持单色|改成单色|只要单色)/.test(words);
  if(!input.requestedInks&&singleOnly)return null;
  const colourFirst=named.every(p=>Object.keys(colourWords).some(w=>p.part.startsWith(w)&&p.part.length>w.length));
  const distinctPhrases=colourFirst&&/[，,、；;]|配色|搭配|和.+色/.test(words);
  const literal=(count||fromWords||distinctPhrases)&&[2,3].includes(named.length)&&(!count||count===named.length);
  let colors=input.requestedInks;
  if(!colors){
    if(literal)colors=named.map(p=>p.hex);
    else if((count||fromWords)&&predicted.length&&(!count||count===predicted.length))colors=predicted.map(p=>p.hex);
    else if(count)colors=['#355b68','#bd4e39','#c8a24d'].slice(0,count);
  }
  if(!validInks(colors))return null;
  return colors.map((hex,i)=>{
    const assigned=predicted.find(p=>p.hex===hex.toLowerCase())||predicted[i];
    return {hex:hex.toLowerCase(),part:(!input.requestedInks&&literal&&named[i]?.part)||assigned?.part||['主要色面','一个完整可辨的次要部件','较小的局部点色'][i],...(assigned?.region?{region:assigned.region}:{})};
  });
}
// The original drawing controls geometry. The print study controls how ink meets exposed glaze.
// Reuse the planner's existing redraw / void / unit fields as concrete engraving instructions.
function sketchPrintBrief(design){
  return ['图一是完整的创作者线稿。整个图的取景、朝向、长短、表情和开放端点以图一为准。允许将一串零碎笔迹归为一条有起收的长弧。保留作者画出的简省和不对称。',
    !design.landmarks?.length&&design.traits.length&&'原稿可辨的特征：'+design.traits.join('；'),
    design.landmarks?.length&&'从原画找回这些位置：'+design.landmarks.join('；'),
    design.seams?.length&&'这些接点仍在原位：'+design.seams.join('；'),
    '安排同一枚印花里的实面、空面与接笔。让最有分量的一笔承色，选择已有的次形或内部转折整段露出底釉，留下足以读出其轮廓的同色线。原画只有一个形时利用它自己的边或开口取白。线性题材可以只在一个交接处压重。',
    '主面怎么走：'+design.redraw+' 保留的空面：'+design.void+' 线与面在哪里交接：'+design.unit,
    '形的边界可以从线变为面，再让底釉透出；仅在需要分开两层的局部留窄白缝。不要沿整圈复制双边，不沿每条边喷阴影。只有原画里有的小记号才留下；不能为了使物种更像图鉴补画五官、附肢、鳞片、瓣脉或装饰符号。'
  ].filter(Boolean).join('\n');
}
function figureInk(words,design){
  if(!words)return grammar.linePlate.ink;
  if(/喷|晕|渐变|水彩|点彩|写实|空心|只画线|只描边|不(?:要|用)?(?:平涂|圆线|粗线)/.test(words))return null;
  const colours=namedInks(words.replace(/留白|露白|白缝|白线/g,''));
  if(colours.length>1)return null;
  if(/平涂|粗线|圆线|平印|单色|藏蓝|深蓝/.test(words)){
    if(/藏蓝|深蓝/.test(words)&&!/#/.test(words))return grammar.linePlate.ink;
    return colours[0]?.hex||grammar.linePlate.ink;
  }
  const simpleCaption=words.length<=32&&!/[色墨釉描涂绘笔线染印填饰风格]/.test(words);
  return !colours.length&&(design.subjectOnly||simpleCaption)?grammar.linePlate.ink:null;
}
function platePrompt(plan,design,plates){
  return ['画一枚可套印的搪瓷独幅纹样。交付一张完整白底成品图；只出现创作者的题材。若有附图，这是创作者的草图，保留它的姿态和笔势。整张图内须看到以下'+plates.length+'种颜料分别落在主纹的不同部件。',
    '主体与关系：'+design.subject+'。'+design.traits.join('、')+'。'+design.arrangement+'。'+(plan.method==='sketch'?'':design.redraw+'。'+design.void),
    grammar.layouts[plan.layout].plate,grammar.formDirections[plan.direction],grammar.techniques[plan.technique].shape,
    plan.method!=='sketch'&&design.seams?.length&&'在原位保留这些接点和空隙：'+design.seams.join('；'),
    '创作者的题意和部位要求：'+JSON.stringify(plan.idea)+'。按下面的部位一一配色，每一版都要在缩略图上看得见。只改变已有部位的色面，避免为分色重画外形或增添部件。'+plates.map(p=>p.name+' '+p.code+' 只画「'+p.part+'」').join('；')+'。',
    plan.technique==='cobalt'?'用明晰实面与宽窄不同的负形表现各版。':'只在形体转折处用同版色柔喷退淡，线条收进色块。',
    '白色仅代表露釉，同一色版可向白底渐淡。各版占不同部位；不要用全图彩色渐变。不要出现色块样片、色卡、编号、纸张、器物或文字。若要求白色颜料也要用指定版色交付，由系统印成白色。'
  ].filter(Boolean).join('\n');
}
async function planMaterial(input,plan,host,options){
  const ref=grammar.references[plan.reference];
  const treatment=grammar.techniques[plan.technique];
  const automatic=plan.technique==='auto';
  const personalSketch=automatic&&input.method==='sketch';
  const wantsInks=automatic&&(input.requestedInks||/[两二双三23](种|个)?颜?色/.test(plan.idea)||namedInks(plan.idea||'').length>=2);
  const content=[{type:'text',text:[
    '你负责搪瓷器物印花的设计制稿。阅读本次用户材料，先给绘图师一份具体中文设计说明。每项用一句短句，写出可画的形，不用空泛形容词。',
    (treatment||automatic)&&input.method==='image'?'从照片识别主角和两个可辨特征，记录动作、遮挡、连接或重心；略去摄影背景与光影。':grammar.methods[input.method].rule,
    grammar.layouts[plan.layout].plate,automatic?'按当前素材本身提炼，不预设品种与装饰。':treatment?treatment.shape:ref.pigment,
    treatment||automatic?grammar.formDirections[plan.direction]:grammar.directions[plan.direction],
    treatment||automatic?grammar.subjectRule+' 将 unit 写为主体本身的一处节奏，例如支撑、开口或枝杈，允许它只出现一次。':
    '识别主体的名称、动作或关系，明确两项特征。把主角转成有取舍的装饰轮廓，从主体自身抽取一处弧、切口、叶脉或轮廓作为陪衬纹元并指定次数与位置。不要把所有题材都配一枝花。仅在用户明确指定数量时保留准确数量，成堆照片选一组有代表性的两到三个单元，subject 明确写出选定的数量和连接关系；描绘出互相连接的整组形，不把小纹元悬空散落。拒绝原封不动描述照片。',
    '仅输出 JSON，字段为 subject（简短题名）、traits（'+(personalSketch?'只写看得出的零至两项特征':'恰好两条字符串')+'）、redraw（怎样重画主形）、unit（小纹元与重复节拍）、arrangement（主次朝向和位置）、void（空地在何处），每项不超过80个字。确实无法辨认且无用户主体提示时只答 {"unclear":true}。',
    automatic&&'另给 technique 与 structure 字段。能形成面的题材（例如脸、花瓣、鸟翼）选 solid，车架或细枝等线性结构选 linear。redraw 描述一片宽阔墨面怎样沿原形转折，void 写从哪里挖出釉白。根据输入取舍，蓝色意图或有清楚正负形的剪影选 cobalt；线与面相接明显选 vermilion；柔和弧面或想要暖红退到奶白选 softSpray。用户明确的用色优先。只提炼画中实际可见的标志。只画了脸就保留脸，只画了全身就保留全身；看不到的皮毛、斑纹、数量、纹理等不补画。',
    automatic&&'制稿时安排主面、次面和收笔。redraw 具体写哪段外沿要连、哪段在转折处让开；void 说明露底怎样帮助读出前后关系。局部退晕只放在有结构转折的地方，不能把散点和无落点的线堆在下沿。',
    automatic&&(input.requestedInks?'创作者已选颜料（顺序为主色、辅色、可选点色）'+JSON.stringify(input.requestedInks)+'。必须在 inkPalette 中逐项给出这组色值和实际落色部位。':'如果创作者在输入中明确要求两色或三色，或给不同部位指定了不同颜色，返回 inkPalette 并在 colorCue 中逐字摘出这段配色要求。没有这样的要求则省略两字段。'),
    automatic&&'inkPalette 是二或三项 {hex:"#rrggbb",part:"具体着色部位",region:[左,上,右,下]}。region 使用整个主体的紧包围盒坐标，左上0,0右下1000,1000，紧贴该部件的核心着色区。遵守指明的实际颜色与位置，只给了色数时再按题材选色。白色底釉不计颜料数。主色在先，辅色和点色分别落在可辨的部件，避免彼此重叠。已有用户选色优先于文字中的色值。',
    automatic&&input.method==='sketch'&&'草图只需提供一个意图。允许断线、比例夸张、部件省略。画者写了题材就结合提示来读。seams 只记录原画中确实看得见、值得保留的分叉或穿插，最多三条；稀疏或含糊时填 []。露底与色面由制稿者设计，不把它们当作原画必须画出的结构。',
    personalSketch&&'另给 landmarks 数组。逐项记录原画特有、可按图定位的形态：占画面最远的几段外沿及其端点，较大部件之间的长度和朝向，一两个短小而有辨识度的转折或空隙。若有脸，记录实际眼口的笔形、朝向、开闭。短句描述所见；只就能看清的部分写，最多五项。redraw 和 void 只讨论在这些结构上怎样用墨。',
    personalSketch&&'把草图当一枚小尺寸花纸设计。redraw 指出已有哪块主面吃墨、哪段笔势可收得更舒展。void 指出主角自身哪一段在印成后仍整块见底釉，用什么线交代它；画面周围的白底不算。unit 写出两者具体在哪里从线接入色面。哪怕只有几笔，也只讨论能看到的形、端点与缺口，不按猜测的物种补全器官。两三笔能辨出的一主一次形，可用 vermilion 的实面配留白线形；蓝色意图、适合切白的剪影、柔喷或明确的套色要求仍各依原意。',
    personalSketch&&plan.idea&&'subjectOnly 为布尔值。仅当文字只点名题材、动作或朝向时填 true；涉及画法、配色或哪个部位要实或虚时填 false。',
    '本次创作者素材说明和已选意象：'+JSON.stringify({idea:plan.idea,reading:plan.reading})
  ].filter(Boolean).join('\n')}];
  if(input.image)content.push({type:'image_url',image_url:{url:input.image}});
  const data=await postProvider(host,'chat/completions',{model:planner,enable_thinking:false,max_tokens:automatic&&input.method==='sketch'?1100:automatic?760:520,
    temperature:.35,...(wantsInks?{response_format:{type:'json_object'}}:{}),messages:[{role:'user',content}]},options);
  const design=readDesign(data.choices?.[0]?.message?.content,personalSketch?input:null);
  if(personalSketch)design.seams??=[];
  return design;
}
async function reviewSeams(input,design,bytes,host,options){
  const text='第一张是用户草图，第二张是准备采用的平面印花。核对下列可见关系：'+JSON.stringify(design.seams)+
    '。只评价生成的第二张。允许简笔、夸张、省略和抽象。'+(design.structure==='solid'?'内部留底是绘图模型的设计任务：'+design.void+'。':'')+
    '若可改进，给绘图模型一条下一版能执行的绘制指令；不评价作者画技。返回 JSON {"pass":true} 或 {"pass":false,"issue":"不超过40字的改画指令"}。';
  const content=[{type:'text',text},...[input.image,'data:image/png;base64,'+bytes.toString('base64')].map(url=>({type:'image_url',image_url:{url}}))];
  try{
    const response=await postProvider(host,'chat/completions',{model:planner,enable_thinking:false,max_tokens:150,temperature:0,
      response_format:{type:'json_object'},messages:[{role:'user',content}]},{...options,reviewing:true,
        signal:AbortSignal.any([options.signal,AbortSignal.timeout(8000)])});
    const review=JSON.parse(response.choices?.[0]?.message?.content);
    if(typeof review?.pass!=='boolean')return;
    design.seamsReviewed=true;
    if(!review.pass){
      const note=(typeof review.issue==='string'&&review.issue.trim().slice(0,80))||'在保持原画姿态的前提下，把相邻色面分开。';
      design.refinement=[design.refinement,note].filter(Boolean).join(' ').slice(0,160);
    }
  }catch(error){
    // An optional aesthetic reading must not discard an already generated print.
    // Explicit cancellation and provider content moderation still apply.
    options.callerSignal?.throwIfAborted();
    if(error.status===422)throw error;
  }
}
async function recognizeSketch(input,plan,host,options) {
  const content=[{type:'text',text:sketch.recognition+'\n选定的成纹方式：'+grammar.layouts[plan.layout].plate+'\n创作者写下的主体提示：'+JSON.stringify(input.subject||'')},
    {type:'image_url',image_url:{url:input.image}}];
  const data=await postProvider(host,'chat/completions',{model:planner,enable_thinking:false,max_tokens:840,
    temperature:.1,response_format:{type:'json_object'},messages:[{role:'user',content}]},options);
  let value;
  try{value=JSON.parse(data.choices?.[0]?.message?.content);}catch{throw new ImageError(502,'未收到完整的主体识别结果，可重试。');}
  if(value?.unclear===true)throw new ImageError(422,'还没认出主体。可在「我画的是」补一个词，再重新塑形。');
  const identity=sketch.identity(value);
  if(!identity || (plan.sketchMode!=='redesign' && !identity.gesture))throw new ImageError(502,'未读出完整的草图姿态，可保留原画重试。');
  return identity;
}
async function projectStudy(reference){
  const [name]=references.get(reference);
  const png=await fs.readFile(path.join(__dirname,'print-references',name+'.png'));
  return 'data:image/png;base64,'+png.toString('base64');
}
const verifiedRegions=new Map();
async function locateInks(bytes,targets,host,options,materials){
  let map;
  try{map=regionMap(bytes,materials);}catch{const err=new ImageError(422,'这张纹样暂时无法分区，原稿已保留。');err.unresolved=true;throw err;}
  const names=[...new Set(targets.filter(t=>!isBody(t.part)).map(t=>t.part))].sort();
  // An eye opening and a mouth opening can be very similar on a profile print.
  // Require mutually exclusive labels for this observed confusion, even when
  // the mouth is not being painted. The contrast class is never applied as ink.
  const distinguishMouth=names.some(n=>/眼|瞳/.test(n))&&!names.some(n=>/嘴|口部|嘴缝/.test(n));
  const classes=distinguishMouth?[...names,'嘴']:names;
  function exclusive(parts){
    if(!parts||!distinguishMouth)return parts;
    if(!Array.isArray(parts['嘴']))return null;
    return Object.fromEntries(names.map(n=>[n,Array.isArray(parts[n])?parts[n].filter(id=>!parts['嘴'].includes(id)):[]]));
  }
  const key=createHash('sha256').update(map.proof).update(map.chart).update(JSON.stringify(names)).digest('hex');
  const img=url=>({type:'image_url',image_url:{url}});
  async function read(text,images){
    const content=[{type:'text',text},...images];
    const answer=await postProvider(host,'chat/completions',{model:planner,enable_thinking:false,temperature:0,max_tokens:512,response_format:{type:'json_object'},messages:[{role:'user',content}]},{...options,regionReading:true});
    try{return JSON.parse(answer.choices?.[0]?.message?.content);}catch{throw new ImageError(502,'部位定位未完成，原稿已保留。');}
  }
  const unresolved=()=>{const err=new ImageError(422,'未能核实所有指定部位，已保留原版。');err.unresolved=true;throw err;};
  function valid(parts){
    if(!parts||typeof parts!=='object')return false;
    const used=new Set();
    for(const name of names){
      if(!Object.hasOwn(parts,name)||!Array.isArray(parts[name])||!parts[name].length)return false;
      for(const id of parts[name]){if(!Number.isInteger(id)||!map.regions[id-1]||used.has(id))return false;used.add(id);}
    }
    return true;
  }
  let parts=verifiedRegions.get(key);
  if(!parts&&names.length){
    const instruction='图一是原纹样，图二是编号图。先观察朝向和实际可见的部件数量，用一句话说明相对位置。然后将图中编号按下列部位互斥分类。某类不可见时填空数组，不补背面。'+(distinguishMouth?'请把嘴或嘴缝与眼睛分别编号，不得重叠。':'')+'只输出 JSON，含位置说明和 parts 对象，parts 以指定的部位名称为键，每个值为图二整数编号的数组。部位：'+JSON.stringify(classes);
    if(materials)parts=Object.fromEntries(names.map(n=>[n,map.regions.filter(z=>z.part===n).map(z=>z.id)]));
    else{const first=await read(instruction,[img(map.proof),img(map.chart)]);parts=exclusive(first?.parts??first);}
    // Missing or conflicting first readings still get a visual review. No ink
    // is applied until a complete, non-overlapping assignment is corroborated.
    parts=Object.fromEntries(names.map(n=>[n,Array.isArray(parts?.[n])?parts[n].filter(id=>Number.isInteger(id)&&map.regions[id-1]):[]]));
    for(let attempt=0;attempt<2;attempt++){
      const panels=markedParts(map,names.map(n=>parts[n]));
      const audit=await read('图一原稿，图二编号图。图三是待检查的洋红选区，按从左到右、从上到下顺序对应 '+JSON.stringify(names)+'。请独立识别每个目标的可见数量，判断图三有无遗漏、多选。对照图二逐类给出互斥的完整编号集合：'+JSON.stringify(classes)+'。只输出 JSON：先写各部位所在的位置，再给 parts 对象；无法精确表示的部位填空数组。',[img(map.proof),img(map.chart),img(panels)]);
      const checked=exclusive(audit?.parts??audit);
      if(!valid(checked))unresolved();
      if(names.every(n=>parts[n].length===checked[n].length&&parts[n].every(id=>checked[n].includes(id))))break;
      if(attempt)unresolved();
      parts=checked;
    }
    if(verifiedRegions.size>=48)verifiedRegions.delete(verifiedRegions.keys().next().value);
    verifiedRegions.set(key,parts);
  }
  const choices=targets.map(t=>isBody(t.part)?[]:parts[t.part]);
  let print;try{print=recolour(map,targets,choices);}catch(e){const err=new ImageError(422,e.message+' 原稿已保留。');err.unresolved=true;throw err;}
  const bindings=targets.map((p,i)=>({...p,regions:choices[i]}));
  const ordered=[...bindings].sort((a,b)=>Number(isBody(b.part))-Number(isBody(a.part)));
  const palette=ordered.some(t=>isBody(t.part))?[...new Set(ordered.map(t=>t.hex))].map(hex=>({hex,part:ordered.filter(t=>t.hex===hex).map(t=>t.part).join('、')})):undefined;
  return {print,bindings,palette};
}
async function generateResult(input, { env = process.env, fetcher = fetch, signal,materials } = {}) {
  validate(input);
  if (!configured(env)) throw new ImageError(503, '百炼图像生成待配置。');
  if(input.ruleVersion && input.ruleVersion !== grammar.version)throw new ImageError(409,'规则已更新，请刷新后重新查看方案。');
  if(input.subject != null && (typeof input.subject !== 'string' || input.subject.length > (input.stage==='recolour'?160:80)))throw new ImageError(400,'主体提示过长。');
  let plan;
  try {
    plan=grammar.makePlan({method:input.method,reference:input.reference,direction:input.direction,
      prompt:input.method==='text'?input.prompt:'',subject:input.method==='sketch'?input.subject||'':'',
      layout:input.layout,reading:input.reading,sketchMode:input.sketchMode,technique:input.technique});
    if(plan.needsReading)throw Error('请先为这个词选定一个具体意象。');
  } catch(e){throw new ImageError(400,e.message);}
  const host=env.BAILIAN_WORKSPACE_ID+'.cn-beijing.maas.aliyuncs.com';
  const abort=AbortSignal.any([AbortSignal.timeout(270000),...(signal?[signal]:[])]);
  const options={env,fetcher,signal:abort};
  let design=null,image,instructions,identity=null,plates=null,guide=null,registrationField=null;
  const stage=input.stage||'pattern';
  if(stage==='recolour'){
    const targets=partAssignments(input.subject);
    if(!targets.length||targets.length>12||new Set(targets.map(t=>t.hex)).size>3)throw new ImageError(400,'请写明各部位要用的颜色，例如“角和眼睛是白色，身体是绿色”。');
    const {print,bindings,palette}=await locateInks(Buffer.from(input.image.split(',')[1],'base64'),targets,host,options);
    return {bytes:print,stage,technique:'regionInk',design:{inkPalette:palette,regionBindings:bindings,subject:'局部分色',traits:[],redraw:'沿用选中的完整造型。',unit:'按已有部件分色。',arrangement:'保留原有位置和喷色浓淡。',void:'背景和未指定的留白仍透出器物底色。'}};
  }
  if(stage==='pattern'&&input.method==='sketch'&&input.technique==='auto'&&!materials){
    const words=input.subject||'',targets=partAssignments(words);
    const inkOrder=[...new Set([...targets].sort((a,b)=>Number(isBody(b.part))-Number(isBody(a.part))).map(t=>t.hex))];
    if(grammar.isBoundPalette(targets)&&(!input.requestedInks||input.requestedInks.length===inkOrder.length)){
      if(input.requestedInks)for(const t of targets)t.hex=input.requestedInks[inkOrder.indexOf(t.hex)];
      // Render the sketch once for its shape, then bind the requested inks to
      // that exact result. A colour instruction cannot ask the image model to redraw it.
      const subject=words.split(/[，,。；;\n]/).filter(clause=>!partAssignments(clause).length).join('，');
      const codeColours=['#0000ff','#ff0000','#00ff00','#ff00ff','#00ffff','#ffff00','#000000'];
      const ordered=[...targets].sort((a,b)=>Number(isBody(b.part))-Number(isBody(a.part)));
      if(ordered.length>codeColours.length)throw new ImageError(400,'一次最多可以分别指定七个部位。');
      const codes=colourPlates(ordered.map((t,i)=>({part:t.part,hex:codeColours[i]})));
      const base=await generateResult({...input,subject,requestedInks:undefined},{env,fetcher,signal:abort,materials:codes});
      try{
        const {print,bindings,palette}=await locateInks(base.bytes,targets,host,options,codes);
        return {...base,bytes:print,technique:'regionInk',design:{...base.design,inkPalette:palette,regionBindings:bindings,baseTechnique:base.technique}};
      }catch(error){
        if(!error.unresolved)throw error;
        const {PNG}=require('pngjs'),png=PNG.sync.read(base.bytes),ink=grammar.techniques[base.technique].inks[0].slice(1).match(/../g).map(v=>parseInt(v,16));
        for(let i=0;i<png.data.length;i+=4)if(png.data[i+3])png.data.set(ink,i);
        base.bytes=PNG.sync.write(png);base.design.colourIssue='新造型已保存。局部配色尚未核实，可在工作台点选部位上色。';return base;
      }
    }
  }
  if(stage==='shape'){
    identity=await recognizeSketch(input,plan,host,options);
    abort.throwIfAborted();
    if(plan.technique){
      const preserve=plan.sketchMode==='gesture';
      if(preserve)image=[input.image,input.gestureImage];
      instructions=[preserve?'图一是用户的原草图，图二是同一张图的姿态简图。保留方位、比例、接点和有辨识度的不对称，仅整理笔形；有五官时保留其相对位置。':'以已辨认的题材和动作为依据，允许重新概括轮廓，保持朝向、重心和关键连接。',
        grammar.subjectRule,identity.subject+'，数量 '+identity.count+'。'+[identity.pose,identity.facing,identity.cue,...(identity.details||[])].join('，'),
        ...Object.values(identity.gesture||{}),preserve&&identity.handwriting,
        grammar.layouts[plan.layout].plate,grammar.formDirections[plan.direction],grammar.techniques[plan.technique].shape,
        '只出一张白底黑白造型稿。配色留到采用后，不加文字、器物或背景。'].filter(Boolean).join('\n');
    }else if(plan.sketchMode==='redesign'){
      instructions=sketch.redesign(identity,plan,grammar);
    }else{
      const handwriting=inkReference(input.image,identity.inkAnchors);
      image=[await projectStudy(plan.reference),input.gestureImage];
      if(handwriting)image.push(handwriting);
      instructions=sketch.silhouette(identity,Boolean(handwriting),plan,grammar);
    }
  } else if(stage==='decorate'){
    identity=sketch.identity(input.identity);
    if(plan.technique){
      const style=grammar.techniques[plan.technique];
      design={subject:identity.subject,traits:[identity.pose,identity.cue,...(identity.details||[])].filter(x=>x!=='未指定'),
        redraw:'沿用已确认的黑白稿。',unit:style.shape,arrangement:plan.formation,void:style.finish};
      instructions=['附图是创作者已经选定的黑白稿。以这一张为唯一造型底稿，只施画法。主体数量、头向、姿势、五官位置、轮廓和部件连接均随底稿；涉及无生命题材时按其结构落色。',
        style.finish,'交付透明或干净白底的一枚平面印花，保持原有留边、比例和构图，不画器皿、图框或文字。'].join('\n');
    }else ({design,instructions}=sketch.decoration(identity,plan,grammar));
    image=[input.shapeImage];
  } else if(input.method==='motif'){
    image=[await projectStudy(input.reference)];
  } else {
    design=await planMaterial(input,plan,host,options);
    abort.throwIfAborted();
    if(input.technique==='auto'){
      const technique=design.technique||'vermilion';
      plan={...plan,technique};
      const inks=chooseInks(input,design,plan.idea||'');
      if(inks)plates=colourPlates(inks);
      delete design.colorCue;
      if(inks)design.inkPalette=inks;else delete design.inkPalette;
      const drawn=input.method==='sketch';
      const field=drawn&&!plates&&plan.layout==='single'?readSketchField(input.image):null;
      const ink=field&&figureInk(plan.idea,design);
      const lineStudy=ink&&roundLineStudy(field);
      const articulated=drawn&&design.structure==='solid'&&design.seams.length>0;
      if(field&&!lineStudy&&plan.sketchMode==='gesture'&&(!plan.idea||design.subjectOnly||plan.idea.length<=6))registrationField=field;
      const sketchBrief=drawn&&sketchPrintBrief(design);
      if(materials){
        image=[input.image];
        instructions=[sketchPrintBrief(design),'按图一制作一枚完整独幅工作色版。原画的首尾、突出部位、负形和眼口必须与底稿对位。',
          '每个部位先用唯一的工作色形成实面，颜色只作区域编号。包括较小的眼睛也要清晰着色。纯白只做纸底或细分隔缝，亮色颜料在工作版上也要用下列饱和色表示。不要出现编号、图例或色卡。',
          materials.map(m=>m.part+'的全部可见部分用'+m.name+' '+m.code).join('。'),
          '主面保持舒展，交界以清楚的细线或露底分形，只在一处转折处退喷。'].join('\n');
      }else if(lineStudy){
        plan={...plan,technique:'linePlate'};
        Object.assign(design,{technique:'linePlate',lineInk:ink,
          redraw:'将原画主线收成圆角长线，保留各部件的位置和伸展方向。',unit:'短笔和卷线在原来的位置收圆。',void:'同色实面之间以窄缝露出器物底色。'});
        image=[input.image,lineStudy];
        instructions=['以图一完整手绘线稿为唯一造型依据。图二是同一原画的圆线分色试稿，完成并修顺这一枚单色搪瓷印花。四周留白，位置、比例、朝向与图一一致。',
          '按图二组织三层：一笔有分量的圆头外线，紧接一段窄而干净的白缝，里面是一整片平墨。粗线约占主体长边的 2%，白缝约为粗线的一半，转弯有半径。把细碎折点连成舒展的弧，保留原画的长短、开放笔端和不对称。',
          '看回图一校准每个细小开口，分清遮挡。小卷环内部留透；原画的孤立点或短线保持小而清楚。图二在交接处如有粘连，沿图一拆开。整图只用一种深色实墨和纯白露底，无喷点、无渐变、无纸纹、无阴影、无双色描边。每一条白缝都交代构件关系。',
          '主体：'+design.subject,...(design.landmarks||design.traits),...(design.seams||[]),plan.idea&&'创作者题意：'+JSON.stringify(plan.idea),
          input.refinement&&'上次内部复核的意见仅用于图一现有部件的形态和衔接；制版均沿用图二的圆线平印。'+JSON.stringify(input.refinement),
          '只交付平面纹样。使用清晰的深色工作版，实际油墨 '+ink+' 在本地单版分色时应用。'].filter(Boolean).join('\n');
      }else if(plates){
        if(drawn)image=[input.image];
        instructions=[sketchBrief,platePrompt(plan,design,plates),input.refinement&&'上次内部制稿笔记：'+JSON.stringify(input.refinement)].filter(Boolean).join('\n');
      }else{
        // open-vermilion is an anonymous junction cropped from the approved rough-sketch print.
        const study=drawn&&technique==='vermilion'?'open-vermilion':(articulated?'joint-':'ink-')+technique;
        const bytes=await fs.readFile(path.join(__dirname,'print-references',study+'.png'));
        const swatch='data:image/png;base64,'+bytes.toString('base64');
        const unassigned=!plan.idea||(design.subjectOnly&&!/[色墨涂染镂釉喷]|留白|填满|实心|线描|轮廓/.test(plan.idea));
        guide=field&&unassigned&&technique!=='cobalt'&&sketchInkGuide(input.image,grammar.techniques[technique].inks[0],field);
        image=drawn?[input.image,swatch,...(guide?[guide.image]:[])]:[swatch];
        instructions=[sketchBrief,drawn?'图二只示范印墨与露釉怎样相接，取它的虚实关系和收边手法。图二的形状、方向、交叉记号均不搬入图案。':'图一是三块局部颜料样片，只借用其边缘与留底，按下面设计说明画新主体。',
          drawn?['按图一的'+design.subject+'制一枚搪瓷平面印花。'+design.arrangement,plan.idea&&'创作者题意：'+JSON.stringify(plan.idea),
            grammar.layouts[plan.layout].plate,grammar.formDirections[plan.direction],grammar.techniques[technique].finish].filter(Boolean).join('\n'):grammar.instructions(plan,design),
          '只交付一个完整图案；样片、样片边界与空隙不属于构图。禁止刻版肖像、刻毛排线、毛刺边和新增条纹。',
          drawn&&input.refinement&&'创作者希望同一张草图再出一版。参照上一张成品的内部制稿笔记，针对相关部位调整；以本次草图与既定画法为准：'+JSON.stringify(input.refinement),
          guide&&'图三是从图一得到的分色底稿，只规定落墨位置。按图三把大形落实色，小形整个内部露底釉、只保留外面的线。在这两个形碰面的根部单向收喷，离开根部即回到实色。图一仍决定首尾与姿态。把长边的碎折顺成一两道饱满弧线，到尖角才停住，不模仿图三的像素边。此分色关系优先于文字中推测的细节。',
          technique==='cobalt'?'主体以少数钴蓝面相接，每一道切白交代一处部件关系，转角留有手笔。':drawn?'在主面接到空面的那一侧局部退喷，其余边缘利落，细线顺势收住。':'让一片暖红主面承重，次面留底；在一个形体转折处湿喷渐淡。轮廓线在接点并入色面，不另绕一圈，不在空白悬挂余线。',
          '仅交付独立印花，四周与需要露釉的夹隙均用纯白无纹理底或透明底；不画衬纸、白色贴纸边、纸张阴影或印刷样片。'].filter(Boolean).join('\n');
      }
    }
  }
  const json=await postProvider(host,'images/generations',{model,...(image?{image}:{}),
    prompt:instructions||grammar.instructions(plan,design),prompt_extend:false,size:'1024x1024',n:1},options);
  const url = new URL(json.data?.[0]?.url);
  if (url.protocol !== 'https:' || url.username || url.password || url.port ||
      !/^[a-z0-9-]+\.oss(?:-accelerate|-cn-[a-z0-9-]+)\.aliyuncs\.com$/.test(url.hostname))
    throw new ImageError(502, '生成结果地址不受支持。');
  const downloaded = await fetcher(url, { redirect:'error', signal:abort });
  if (!downloaded.ok) throw new ImageError(502, '下载生成结果失败，请稍后重试。');
  const bytes = await collect(downloaded.body, maxImage);
  if (!bytes.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a','hex')))
    throw new ImageError(502, '生成服务返回了无效的 PNG。');
  const reserved=guide&&reserveGlaze(bytes,guide);
  if(reserved)design.glazeReserve='沿原画的主次形在本地分色，小形露出器物底釉。';
  let print=design?.lineInk?separateLineInk(bytes,design.lineInk):reserved||bytes;
  if(registrationField&&!guide){
    const fit=registerSketch(registrationField,print);
    if(fit){design.outlineFit=fit.result;print=fit.bytes||print;}
  }
  if(!materials&&input.method==='sketch'&&input.technique==='auto'&&plan.layout==='single'&&design?.structure==='solid'){
    const issue=proofIssue(print);
    if(issue)design.refinement=issue+'。沿原笔势整理为几片宽窄分明的色面。';
  }
  if(!materials&&input.method==='sketch'&&input.technique==='auto'&&design?.seams?.length){
    signal?.throwIfAborted();
    if(!abort.aborted)await reviewSeams(input,design,print,host,{...options,callerSignal:signal});
  }
  if(materials)print=printPlates(print,materials).bytes;
  else if(plates){
    const separated=printPlates(bytes,plates);print=separated.bytes;design.inkCoverage=separated.coverage;
    if(separated.completed.length)design.locallyPlaced=separated.completed;
  }else if(stage==='decorate'&&!plan.technique)print=applySpotInks(bytes,grammar.printPalette(plan.reference));
  return {bytes:print,design,stage,identity,technique:plan.technique};
}
async function generate(input, options){return (await generateResult(input,options)).bytes;}
function createHandler(opts = {}) {
  let active = false;
  return async function handle(req, res, pathname, json) {
    if (pathname === '/api/pattern/status' && req.method === 'GET') return json(200, { available: configured(opts.env), model, ruleVersion:grammar.version });
    if (pathname !== '/api/pattern' || req.method !== 'POST') return json(404, {});
    if (!req.headers['content-type']?.startsWith('application/json')) return json(415, {});
    if (active) return json(429, {error:'已有一份纹样正在生成。'});
    const controller = new AbortController();
    res.once('close', () => controller.abort());
    active = true;
    try {
      const body = await collect(req, maxImage + 16*1024);
      let input; try { input = JSON.parse(body.toString('utf8')); } catch { throw new ImageError(400, '素材格式无效。'); }
      const {bytes,design,stage,identity,technique}=await generateResult(input,{...opts,signal:controller.signal});
      if(res.destroyed)return;
      if(input.ruleVersion) {
        json(200,{ruleVersion:grammar.version,technique,planner:stage==='shape'||stage==='recolour'||(stage==='pattern'&&design)?planner:null,design,stage,identity,png:bytes.toString('base64')});
      } else {res.writeHead(200,{'Content-Type':'image/png','Cache-Control':'no-store'});res.end(bytes);}
    } catch (err) {
      if (!res.destroyed) json(err.status || 502, { error: err instanceof ImageError ? err.message : '生成服务连接中断或超时，请稍后重试。' });
    } finally { active = false; }
  };
}
module.exports = { createHandler, generate, model, configured, planner };
