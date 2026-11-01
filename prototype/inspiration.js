/* Optional inputs share the current draft; images and sketches remain independent. */
(()=>{
 const M=window.Studio,V=window.Views,S=window.LocalStore,I=window.InspirationModel;
 let api,pending=null,stroke=null,brush='pen',undo=[],job=I.createJob(window.Services),jobDraft=null;
 const esc=V.esc,oldHeader=V.header;
 const d=()=>api.draft();
 const src=id=>esc(S.image(id));
 const asset=(id,label)=>id&&S.image(id)?`<img class="input-preview" src="${src(id)}" alt="${label}">`:'<div class="input-empty">图片尚未添加或无法读取</div>';
 const transfer=window.EnamelTransfer;
 let conversionTask=null,adjusting=false,reviewingForm=false,connecting=false;
 const directionName=window.PrintStyle.name;
 const methods=[
  {id:'motif',label:'参考纹样',title:'选一份参考纹样',icon:'layers',hint:'从器物上的纹样开始'},
  {id:'image',label:'自己的图片',title:'选一张自己的图',icon:'upload',hint:'提取照片轮廓，重排为印花'},
  {id:'text',label:'文字想法',title:'写下你的想法',icon:'file',hint:'把主题、配色和构图写成纹样'},
  {id:'sketch',label:'画几笔',title:'画下你想到的形象',icon:'pen',hint:'保留你的姿态，把草线整理成纹样'}
 ];
 let advancedOpen=false;
 function sourceObject(d){
  return window.Explore.fromSource(d.sourceObjectId)||M.heritageObjects.find(o=>o.id===d.sourceObjectId);
 }
 function photoSamples(object){
  return object?.photo?M.motifs.filter(m=>m.sourceObjectId===object.sourceObjectId):[];
 }
 V.startWays=(object,action,selected='')=>{
  const reference=M.getItem(object?.legacyItemId),pattern=object?.pattern||reference.pattern;
  return `<div class="start-ways" role="group" aria-label="四种创作起点">${methods.map(m=>{
   const direct=m.id==='motif',sample=direct&&photoSamples(object)[0];
   const hint=direct?(sample?'取用「'+esc(object.name)+'」上的图形':'沿用「'+esc(reference.name)+'」'):m.hint;
   const icon=sample?`<img class="way-print" src="${window.EnamelArt.photoUrl(sample.fileKey)}" alt="">`:direct?window.Art.panel(pattern):V.icon(m.icon,19);
   const row=V.btn(`<span class="way-icon">${icon}</span><span class="way-copy"><strong>${direct?'直接用参考纹样':m.label}</strong><small>${hint}</small></span>${m.id===selected?'<span class="way-current">当前</span>':V.icon('chevron',14)}`,action,'way-row'+(direct?' way-reference':''),`data-id="${m.id}"`);
   return m.id==='image'?'<p class="way-section">转化自己的素材</p>'+row:row;
  }).join('')}</div>`;
 };
 function choose(){api.open('用什么开始？',V.startWays(sourceObject(d()),'in-tab',d().inputTab));}
 function material(d){
  if(d.inputTab==='text')return `<div class="thought-field"><label for="inspiration-prompt">想要什么纹样？</label>
   <textarea id="inspiration-prompt" class="input" rows="5" maxlength="1200" placeholder="例如：蓝白牡丹围成团花，或让红色双喜沿着边缘排列。">${esc(d.prompt||'')}</textarea>
   <small id="idea-count">${(d.prompt||'').length} / 1200</small></div>
`;
  if(d.inputTab==='image'){
   const ready=Boolean(d.inspirationImageId&&S.image(d.inspirationImageId));
   const preview=ready?`<figure class="start-card"><div class="start-art">${asset(d.inspirationImageId,'选用的个人图片')}</div><figcaption><strong>${esc(d.inputImageName||'我的图片')}</strong>${V.btn('更换图片','in-upload','text')}</figcaption></figure>`:
    `<button class="image-pick-zone" data-action="in-upload">${V.icon('upload',28)}<strong>${d.inspirationImageId?'重新选择图片':'从相册选择图片'}</strong><small>JPG、PNG 或 WebP · 最大 12 MB</small></button>
    <p class="input-note">${d.inspirationImageId?'上次保存的图片暂不可读。':'请选择你拥有使用权的图片。'}</p>`;
   return preview+'<input id="inspiration-file" type="file" accept="image/png,image/jpeg,image/webp" hidden>';
  }
  if(d.inputTab==='sketch')return `<div class="sketch-toolbar" role="group" aria-label="绘图工具">${V.btn('画笔','in-brush','',`data-id="pen" aria-pressed="${brush==='pen'}"`)}${V.btn('橡皮','in-brush','',`data-id="eraser" aria-pressed="${brush==='eraser'}"`)}${V.btn('撤销','in-sketch-undo','',!d.sketchStrokes.length&&!undo.length?'disabled':'')}${V.btn('清空','in-sketch-clear','',!d.sketchStrokes.length?'disabled':'')}</div>
   <div class="sketch-sheet"><canvas id="sketch-pad" width="640" height="400" aria-label="手绘画板"></canvas>${!d.sketchStrokes.length?'<span>随手画几笔就可以开始</span>':''}</div>
   <label class="sketch-subject" for="sketch-subject"><span>我画的是 <small>选填</small></span><input class="input" id="sketch-subject" maxlength="80" placeholder="例如：一条向右游的鱼" value="${esc(d.sketchSubject||'')}"></label>
   <div class="sketch-bottom">${V.btn('导出 PNG','in-export','text',!d.sketchStrokes.length?'disabled':'')}</div>`;
  if(sourceObject(d)?.photo)return window.PhotoMaterials.sheet(d);
  return `<figure class="start-card"><div class="start-art">${window.Art.panel(d.pattern)}</div><figcaption><small>项目配用的示意纹样</small><strong>${esc(M.getItem(d.itemId).name)}</strong></figcaption></figure>
    <div class="input-motifs" role="group" aria-label="选择参考纹样">${M.items.filter(i=>i.category==='enamel').map(i=>`<button data-action="in-motif" data-id="${i.id}" aria-pressed="${i.id===d.itemId}">${esc(i.name)}</button>`).join('')}</div>`;
 }
 function options(d,busy,configured) {
  if(d.inputTab!=='motif'||sourceObject(d)?.photo)return '';
  const extra=d.inputTab==='motif'?V.btn(configured?'用 AI 改编参考纹样':'AI 生成待接入','in-ai','text full',busy||!configured?'disabled':''):'';
  return window.PrintStyle.render(d,{busy,open:advancedOpen,extra});
 }
 function footer(d,result,form,configured,state,busy){
  const ready=I.canContinue(d)&&(d.inputTab!=='image'||Boolean(S.image(d.inspirationImageId)));
  const primary=(label,action,disabled=false)=>V.btn(label,action,'primary full',disabled?'disabled':'');
  const other=(label,action,disabled=false)=>V.btn(label,action,'text full alternate-input',disabled?'disabled':'');
  if(cloudRequest||state==='generating')return `<p class="input-progress" role="status" data-ai-state="generating">${cloudRequest?.stage==='recolour'?'正在定位配色部位…':cloudRequest?.stage==='shape'?'正在辨认草图并重新塑形…':cloudRequest?.stage==='decorate'?'正在为选定的造型制纹…':'AI 正在制作纹样…'}</p>${other('取消等待','in-ai-cancel')}`;
  if(conversionTask)return primary('正在本机预览…','in-convert',true);
  const problem=state==='failed'?'<p class="input-feedback" data-ai-state="failed" role="alert">'+esc(job.job.message)+'</p>':'';
  if(result){
   const reuse=configured&&(!result.aiGenerated||d.inputTab==='sketch')?other(result.aiGenerated?'用原画再试一版':'用原素材生成 AI 纹样','in-ai',!ready):'';
   const colour=configured&&result.aiGenerated&&d.inputTab==='sketch'?other('保留造型换色','in-recolour'):'';
   return problem+primary(result.aiGenerated?'使用这份纹样':'使用这份本地纹样','in-continue')+(colour?'<div class="result-choices">'+colour+reuse+'</div>':reuse);
  }
  if(form) {
   const offline=configured?'':'<p class="input-feedback" role="status">AI 服务未连接，素形已保留。</p>';
   const action=configured?primary('用这个造型制纹','in-decorate',busy):primary('重新连接 AI','in-reconnect',connecting);
   return problem+offline+action+other('重新设计一个造型','in-ai',busy||!configured);
  }
  if(d.inputTab==='motif'&&sourceObject(d)?.photo){
   const count=window.PhotoMaterials.picked(d).length;
   return problem+primary(count?'进入工作台':'请选择素材','in-continue',busy||!count);
  }
  if(d.inputTab==='motif')return problem+primary('用这份纹样进入工作台','in-continue',busy);
  const returnToForm=adjusting&&matchForm(d)?other('返回已生成的造型','in-show-form'):'';
  const local=d.inputTab==='sketch'?'':other('仅用本地规则预览','in-convert',!ready||busy);
  if(!configured){
   const status=connecting?'正在连接 AI…':'AI 服务未连接，素材已保留';
   return '<p class="input-feedback" role="status" data-ai-state="unconfigured">'+status+'</p>'+primary('重新连接 AI','in-reconnect',connecting)+other('连接生成服务','ai-connection',connecting)+returnToForm+local;
  }
  return problem+primary(state==='failed'?'重试 AI 生成':'生成搪瓷纹样','in-ai',!ready||busy)+returnToForm+local;
 }
 const grammar=window.PatternGrammar;
 function draftPlan(draft,layout='auto',reading=''){
  return grammar.makePlan({method:draft.inputTab,reference:draft.sourceMotifId,direction:draft.direction,layout,reading,
   technique:draft.inputTab==='motif'?undefined:'auto',
   prompt:draft.inputTab==='text'?draft.prompt||'':'',subject:draft.inputTab==='sketch'?draft.sketchSubject||'':''});
 }
 function selectedPlan(){
  const sheet=document.querySelector('.recipe-sheet');
  const plan=draftPlan(d(),sheet.querySelector('[name=pattern-layout]:checked')?.value,sheet.querySelector('#pattern-reading')?.value||'');
  const count=Number(sheet.querySelector('[name=ink-count]')?.value)||0;
  if(count)plan.requestedInks=[...sheet.querySelectorAll('[data-plate-color]')].slice(0,count).map(el=>el.value);
  return plan;
 }
 function paletteField(draft){
  const saved=matchResult(draft)?.recipe?.requestedInks||[],defaults=['#355b68','#bd4e39','#c8a24d'];
  return '<details class="recipe-ink-intent"><summary>指定配色 <small>选填</small></summary><label>色数 <select name="ink-count">'+
   [[0,'自动'],[2,'双色'],[3,'三色']].map(([n,label])=>'<option value="'+n+'" '+(saved.length===n?'selected':'')+'>'+label+'</option>').join('')+'</select></label><div class="recipe-plate-colors">'+
   ['主色','辅色','点色'].map((label,i)=>'<label '+(i>=saved.length?'hidden':'')+'><input type="color" data-plate-color aria-label="'+label+'" value="'+(/^#[0-9a-f]{6}$/i.test(saved[i])?saved[i]:defaults[i])+'">'+label+'</label>').join('')+'</div></details>';
 }
 function confirmAI(colourOnly=false){
  const draft=d();
  if(cloudRequest||!I.canContinue(draft)||window.Services.status('ai').state!=='configured')return;
  const base=draft.patternConversion;
  const sameSketch=draft.inputTab==='sketch'&&base?.aiGenerated&&base.method==='sketch'&&base.sourceAssetId&&base.sourceAssetId===draft.sketchAssetId&&base.sourceMotifId===draft.sourceMotifId&&base.direction===draft.direction&&S.image(base.assetId);
  if(colourOnly&&!(base?.aiGenerated&&S.image(base.assetId))){notify('请先从已生成的纹样中选回一版。');return;}
  if(colourOnly||(sameSketch&&!matchResult(draft)&&grammar.isBoundPalette(grammar.partAssignments(draft.sketchSubject||'')))){
   const previous=colourOnly?base.recipe?.colourRequest||'':draft.sketchSubject;
   api.open('保留造型换色',`<div class="recipe-sheet" data-recolour="${esc(base.assetId)}"><label class="field" for="part-colours">哪里想换什么颜色？</label><textarea class="input" id="part-colours" rows="2" maxlength="160" placeholder="例如：角和眼睛是白色，身体是绿色">${esc(previous)}</textarea><p class="recipe-consent">将选中的纹样和这句话发送给百炼定位部位，配色在本机完成。新配色会另存一版。</p>${V.btn('确认换色','in-ai-confirm','primary full')}${V.btn('返回','close','text full')}</div>`,'recolour-consent');
   return;
  }
  const plan=draftPlan(draft,draft.inputTab==='motif'?matchResult(draft)?.recipe?.layout:undefined);
  const candidates=draft.inputTab==='text'?grammar.choices(draft.prompt):[];
  const reading=candidates.length?`<label class="recipe-field">用什么表达「${esc(draft.prompt.trim())}」<select id="pattern-reading"><option value="">请选择</option>${candidates.map(v=>`<option ${plan.reading===v?'selected':''}>${esc(v)}</option>`).join('')}</select></label>`:'';
  if(draft.inputTab!=='motif'){
   const material={sketch:'这张草图和你写的描述',text:'这段文字',image:'这张图片'}[draft.inputTab];
   api.open('生成搪瓷纹样',`<div class="recipe-sheet">${reading}${paletteField(draft)}<p class="recipe-consent">将${material}发送给阿里云百炼，生成一张可继续编辑的纹样。</p>${V.btn('同意并生成','in-ai-confirm','primary full',plan.needsReading?'disabled':'')}${V.btn('返回修改','close','text full')}</div>`,'generation-consent');
   return;
  }
  api.open('选择纹样排法',`<div class="recipe-sheet">${window.PrintStyle.recipeChoices(plan)}
   <p class="recipe-source">${esc(plan.colorStudy)}　/　${esc(directionName(draft.direction))}</p>
   <details><summary>查看参考器物</summary><p>${esc(grammar.references[plan.reference].observed)}</p><a href="${plan.sourceUrl}" target="_blank" rel="noopener noreferrer">${esc(plan.source)} · ${esc(plan.accession)}</a></details>
   <p class="recipe-consent">将项目示意纹样和构图发给阿里云百炼，生成一张纹样。</p>${V.btn('同意并生成','in-ai-confirm','primary full')}${V.btn('返回修改','close','text full')}</div>`,'generation-consent');
 }
 async function reconnect(){
  if(connecting)return;
  connecting=true;
  if(api.page()==='inspiration')api.render();
  try{await window.BailianPatterns.connect();}
  finally{connecting=false;if(api.page()==='inspiration'&&!stroke)api.render();}
 }
 function history(d){
  const variants=(d.aiVariants||[]).filter(v=>v.selection&&S.image(v.assetId));
  if(!variants.length)return '';
  return '<details class="pattern-history"><summary>已生成的纹样（'+variants.length+'）</summary><div>'+variants.map((v,i)=>V.btn('<img src="'+src(v.assetId)+'" alt=""><span>方案 '+(i+1)+'</span>','in-use-variant','',`data-id="${esc(v.id)}"`)).reverse().join('')+'</div></details>';
 }
 function matchResult(d){
  const record=d.patternConversion;
  return record&&(d.inputTab!=='motif'||record.aiGenerated)&&record.key===I.conversionKey(d)&&S.image(record.assetId)?record:null;
 }
 function matchForm(d){
  const f=d.sketchForm;
  return d.inputTab==='sketch'&&[grammar.version,'enamel-ornament-16','enamel-ornament-15','enamel-ornament-14','enamel-ornament-13','enamel-ornament-12','enamel-ornament-11','enamel-ornament-10','enamel-ornament-9','enamel-ornament-8','enamel-ornament-7','enamel-ornament-6','enamel-ornament-5','enamel-ornament-4','enamel-ornament-3'].includes(f?.recipe?.version)&&f.key===I.conversionKey(d)&&S.image(f.assetId)?f:null;
 }
 function formPreview(f){
  const identity=f.identity;
  const compare=S.image(f.sourceAssetId)?V.btn('对照我的草图','in-compare-form','text','aria-pressed="false" aria-controls="sketch-form-view"'):'';
  return `<figure class="transfer-preview" data-ai-state="shape"><img id="sketch-form-view" src="${src(f.assetId)}" alt="${esc(identity.subject)}的黑白稿"><figcaption><small data-form-label aria-live="polite">黑白稿</small><strong>${esc(identity.subject)}</strong>${compare}</figcaption></figure>
   <p class="input-note">采用后，将这张确认稿发送给百炼生成纹样。</p>
   ${V.btn('修改草图或描述','in-revise','text transfer-edit')}`;
 }

 // Saved drafts may contain free-form review notes from earlier generators.
 // Only surface checks that the person can act on in the editor.
 const printNotices=new Map([
  ['这张图保留了完整底色，请在器物上检查。','图案带底色，可在器物上查看效果。'],
  ['图案延伸到了边缘，请检查主体是否完整。','图案贴近边缘，可在工作台调整大小。'],
  ['旧稿的底色未能分离，可用原素材重新生成。','原图带底色，可用原素材重新生成。'],
  ['新造型已保存。局部配色尚未核实，可在工作台点选部位上色。','可在工作台调整局部配色。'],
  ['有一处点色很少，可在工作台的「局部配色」里补上。','可在工作台调整局部配色。'],
  ['可在工作台调整局部配色。','可在工作台调整局部配色。']
 ]);
 function preview(record,d){
  const proofNote=printNotices.get(S.printNote(record.assetId)??record.proofNote);
  const repeatProof=record.recipe?.layout==='border'?'<div class="repeat-proof" aria-label="同一纹样横向接续三次">'+Array.from({length:3},()=>'<img src="'+src(record.assetId)+'" alt="">').join('')+'</div><small>横向接续预览 · 导出时保留一个单元</small>':'';
  return `<figure class="transfer-preview" ${record.aiGenerated?'data-ai-state="success"':''}><img src="${src(record.assetId)}" alt="${esc(record.label)}，转化后的平面纹样"><figcaption><small>${record.recipe?.technique==='regionInk'?'部位分色':record.aiGenerated?'AI 转译':'本地规则转化'} · ${record.recipe?esc(record.recipe.layoutName):'参考「'+esc(M.getItem(d.itemId).name)+'」'}</small><strong>${esc(record.label)}</strong></figcaption></figure>${proofNote?'<p class="input-note">'+esc(proofNote)+'</p>':''}${repeatProof}${record.formAssetId&&matchForm(d)?.assetId===record.formAssetId?V.btn('回到素形，重新制纹','in-show-form','text transfer-edit'):''}${V.btn('调整素材或参考纹样','in-revise','text transfer-edit')}`;
 }
 async function convert(){
  if(conversionTask||!['image','text'].includes(d().inputTab)||!I.canContinue(d()))return;
  const task={draftId:d().id};conversionTask=task;
  const onPage=()=>conversionTask===task&&api.page()==='inspiration'&&d()?.id===task.draftId;
  try{
   if(!onPage())return;
   if(matchResult(d())&&!d().patternConversion.aiGenerated){adjusting=false;return;}
   const input=M.copy(d()),signature=I.conversionKey(input);
   api.render();
   const assetId=input.inputTab==='image'?input.inspirationImageId:null;
   const out=await transfer.generate(input,assetId?S.image(assetId):null);
   if(!onPage()||signature!==I.conversionKey(d()))return;
   const id=M.uid('print');
   const record={assetId:id,key:signature,engine:'local-print-v1',method:input.inputTab,
    sourceAssetId:assetId,sourceMotifId:input.sourceMotifId,direction:input.direction,label:out.label,layout:out.layout,createdAt:M.now()};
   const ok=await api.atomic(s=>M.edit(s.drafts.find(x=>x.id===task.draftId),{patternConversion:record}),[{id,blob:out.blob}]);
   if(ok&&onPage()){adjusting=false;reviewingForm=false;}
  }catch(e){task.message=e.message||'转化未完成，可以重试。';}
  finally{if(onPage()){conversionTask=null;api.render();if(task.message)notify(task.message);}}
 }
 V.inspiration=c=>{
  const d=I.init(c.d),object=sourceObject(d),method=methods.find(m=>m.id===d.inputTab)||methods[0];
  const current=jobDraft===d.id?job.job:null,configured=window.Services.status('ai').state==='configured';
  const state=configured?(current?.state||'idle'):'unconfigured',busy=Boolean(cloudRequest||conversionTask)||state==='generating';

  const result=adjusting||reviewingForm?null:matchResult(d),form=!adjusting&&!result?matchForm(d):null;

  return `<section class="inspiration-screen" data-method="${method.id}">
   <div class="input-heading"><span class="archive-eyebrow" lang="en">MATERIAL STUDY</span><h1 tabindex="-1">${result?'看看转化的纹样':form?'这枚纹样合适吗？':method.id==='motif'&&object?.photo?'从器物上取样':method.title}</h1>
    <p class="input-source">来源物件 · ${esc(object?.name||'待补来源')}</p></div>
   <fieldset class="inspiration-fields input-content" ${busy?'disabled':''}>${result?preview(result,d):form?formPreview(form):material(d)}</fieldset>

   ${result||form?'':options(d,busy,configured)}
   ${busy?'':history(d)}
   <p id="input-error" role="alert" class="input-error"></p>
   <div class="input-footer"><span id="save-status" role="status"></span>${footer(d,result,form,configured,state,busy)}</div>
  </section>`;
 };
 V.header=c=>c.page==='inspiration'?`${V.ib('back','back','保存并返回')}<strong class="header-center">共创 · 素材</strong>${V.btn('换方式','in-options','text',cloudRequest||conversionTask?'disabled':'')}`:oldHeader(c);
 function notify(message){if(document.querySelector('#dialog')?.open){api.dialogError(message);return;}const el=document.querySelector('#input-error');if(el)el.textContent=message;}
 const strokePaths=new WeakMap();
 function drawStroke(ctx,line,active){
  const erasing=line.tool==='eraser';
  ctx.globalCompositeOperation=erasing?'destination-out':'source-over';
  if(line.ink==='handline-v1'&&!erasing){
   let path=active?null:strokePaths.get(line);
   if(!path){
    const outline=PerfectFreehand.getStroke(line.points,{size:5.5,thinning:.42,streamline:0,smoothing:.06,
     simulatePressure:!line.penPressure,last:true});
    path=new Path2D();
    if(outline.length){
     path.moveTo(...outline[0]);
     for(let i=1;i<outline.length;i++)path.lineTo(...outline[i]);
     path.closePath();
    }
    if(!active)strokePaths.set(line,path);
   }
   ctx.fillStyle='#355b68';ctx.fill(path);return;
  }
  ctx.strokeStyle='#355b68';ctx.lineWidth=erasing?30:5;ctx.lineCap=ctx.lineJoin='round';ctx.beginPath();
  line.points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));
  if(line.points.length===1)ctx.lineTo(line.points[0][0]+.1,line.points[0][1]);
  ctx.stroke();
 }
 function paint(canvas=document.querySelector('#sketch-pad'),lines=d().sketchStrokes){
  if(!canvas)return;
  const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);
  for(const line of lines||[])drawStroke(ctx,line,false);
  ctx.globalCompositeOperation='source-over';
 }
 function bindDisclosure(fold){
  if(!fold)return;
  fold.ontoggle=()=>{
   if(!fold.isConnected)return;
   const opening=fold.open&&!advancedOpen;
   advancedOpen=fold.open;
   if(!opening)return;
   // The sticky action bar can cover the last choice even when it is inside the scrollport.
   const main=document.querySelector('#main'),footer=document.querySelector('.input-footer');
   const rect=fold.getBoundingClientRect(),room=footer.getBoundingClientRect().top;
   const by=Math.min(rect.bottom-room+4,rect.top-main.getBoundingClientRect().top);
   if(by>0)main.scrollTop+=by;
  };
 }
 function mount(){
  if(d().inputTab==='motif'&&sourceObject(d())?.photo)window.PhotoMaterials.mount(d());
  bindDisclosure(document.querySelector('.creation-options'));
  const canvas=document.querySelector('#sketch-pad');
  if(canvas){
   const settled=document.createElement('canvas');settled.width=canvas.width;settled.height=canvas.height;
   const layer=settled.getContext('2d'),screen=canvas.getContext('2d');
   let pointer=null,frame=0;
   function display(){
    frame=0;
    if(!canvas.isConnected)return;
    screen.globalCompositeOperation='copy';screen.drawImage(settled,0,0);
    if(stroke)drawStroke(screen,stroke,true);
    screen.globalCompositeOperation='source-over';
   }
   paint(settled);display();
   const append=(event,rect)=>{
    const x=Math.max(0,Math.min(640,(event.clientX-rect.left)*640/rect.width));
    const y=Math.max(0,Math.min(400,(event.clientY-rect.top)*400/rect.height));
    const prev=stroke.points.at(-1);
    if(stroke.ink&&event.pointerType==='pen'&&event.pressure>0&&!stroke.penPressure){
     stroke.penPressure=true;
     for(const pt of stroke.points)pt[2]=event.pressure;
    }
    const pressure=event.pressure>0?Math.min(1,event.pressure):(prev?.[2]??.5);
    if(prev&&x===prev[0]&&y===prev[1]&&(!stroke.penPressure||pressure===prev[2]))return;
    if(stroke.points.length<1500)stroke.points.push(stroke.penPressure?[x,y,pressure]:[x,y]);
   };
   canvas.onpointerdown=e=>{
    if(stroke||e.button>0)return;
    pointer=e.pointerId;
    stroke={tool:brush,points:[],...(brush==='pen'?{ink:'handline-v1',penPressure:e.pointerType==='pen'&&e.pressure>0}:{})};
    append(e,canvas.getBoundingClientRect());canvas.setPointerCapture(pointer);display();e.preventDefault();
   };
   canvas.onpointermove=e=>{
    if(!stroke||pointer!==e.pointerId)return;
    const rect=canvas.getBoundingClientRect();
    for(const sample of e.getCoalescedEvents?.()||[])append(sample,rect);
    append(e,rect);if(!frame)frame=requestAnimationFrame(display);
   };
   const finish=e=>{
    if(!stroke||pointer!==e.pointerId)return;
    if(e.type==='pointerup')append(e,canvas.getBoundingClientRect());
    if(frame)cancelAnimationFrame(frame);
    const prior=d().sketchStrokes,ready=I.canContinue(d());
    undo.push(prior);undo=undo.slice(-30);
    M.edit(d(),{sketchStrokes:[...d().sketchStrokes,stroke].slice(-200),sketchAssetId:null,primaryInput:'sketch'});
    if(prior.length>=200)paint(settled);else drawStroke(layer,stroke,false);
    stroke=null;pointer=null;display();api.changed();
    if(!prior.length||I.canContinue(d())!==ready)api.render();
   };
   canvas.onpointerup=finish;canvas.onpointercancel=finish;
  }
 const file=document.querySelector('#inspiration-file');if(file)file.onchange=async()=>{if(!file.files[0])return;try{I.validateImage(file.files[0]);const name=file.files[0].name,blob=await api.compress(file.files[0]);if(!file.isConnected||api.page()!=='inspiration')return;cancelUpload();pending={blob,name,url:URL.createObjectURL(blob)};api.open('确认图片',`<img class="input-preview" src="${esc(pending.url)}" alt="待确认图片"><p>${esc(name)}</p><label class="check-row"><input id="input-image-consent" type="checkbox">我有权使用这张图片。此步保存到本机。</label>${V.btn('使用这张图片','in-upload-confirm','primary full')}${V.btn('取消替换','in-upload-cancel','text full')}`);}catch(e){notify(e.message);}finally{file.value='';}};
 }
 let cloudRequest=null;
 async function generateAI(decorate=false){
  if(cloudRequest||!I.canContinue(d()))return;
  const form=decorate?matchForm(d()):null;
  const previousSketch=!decorate&&d().inputTab==='sketch'&&matchResult(d());
  if(decorate?!form||adjusting:!document.querySelector('dialog[open] [data-action="in-ai-confirm"]'))return;
  const lockedId=document.querySelector('dialog[open] [data-recolour]')?.dataset.recolour;
  const locked=lockedId&&d().patternConversion?.assetId===lockedId?d().patternConversion:null;
  if(lockedId&&!locked)return;
  const words=locked?document.querySelector('#part-colours').value.trim():'';
  if(locked&&!grammar.partAssignments(words).length){api.dialogError('请写明部位和颜色，例如“耳朵蓝色”。');return;}
  const stage=locked?'recolour':decorate?'decorate':'pattern';
  const recipe=locked?{...draftPlan(d(),locked.recipe?.layout),colourRequest:words,baseAssetId:locked.assetId}:form?{...form.recipe,version:grammar.version,printInks:form.recipe.printInks||grammar.printPalette(form.recipe.reference),formRuleVersion:form.recipe.formRuleVersion||form.recipe.version}:selectedPlan();
  if(form?.recipe.technique){
   const id=d().enamelTechnique||form.recipe.technique;
   Object.assign(recipe,{formTechnique:form.recipe.formTechnique||form.recipe.technique,technique:id,colorStudy:grammar.techniques[id].name,printInks:grammar.techniques[id].inks});
  }
  if(recipe.needsReading)return;
  if(recipe.requestedInks&&new Set(recipe.requestedInks).size!==recipe.requestedInks.length){api.dialogError('请给每版选不同的颜色。');return;}
  if(!decorate)api.close();
  if(stage==='pattern')adjusting=true;
  const token={draftId:d().id,stage};cloudRequest=token;
  api.render();
  const here=()=>cloudRequest===token&&api.page()==='inspiration'&&d()?.id===token.draftId;
  try{
   if(!decorate&&d().inputTab==='sketch')await exportSketch();
   if(!here())return;
   const draft=M.snapshot(d()),method=draft.inputTab,key=I.conversionKey(draft);
   const id=method==='image'?draft.inspirationImageId:method==='sketch'?draft.sketchAssetId:null;
   const file=locked?await S.getAsset(locked.assetId):form?await S.getAsset(form.assetId):id?await S.getAsset(id):null;
   if(!here()||key!==I.conversionKey(d()))return;
   if(id&&!file)throw Error('素材文件暂时不可读，请重新选择。');
   const selection={inputTab:method,primaryInput:method,sourceMotifId:draft.sourceMotifId,direction:draft.direction};
   if(method==='image')Object.assign(selection,{inspirationImageId:id,inputImageName:draft.inputImageName});
   if(method==='sketch')Object.assign(selection,{sketchAssetId:id,sketchStrokes:draft.sketchStrokes,sketchSubject:draft.sketchSubject||''});
   if(method==='text')selection.prompt=draft.prompt;
   const input={method,consent:true,recipe,sourceObjectId:draft.sourceObjectId,sourceMotifId:draft.sourceMotifId,
    stage,refinement:locked?undefined:previousSketch?.recipe?.design?.refinement,strokes:method==='sketch'&&!decorate?draft.sketchStrokes:null,form:decorate?file:null,identity:form?.identity,direction:draft.direction,prompt:method==='text'?draft.prompt:'',sketchSubject:locked?words:method==='sketch'?draft.sketchSubject||'':'',image:method==='image'?file:null,sketch:!decorate&&method==='sketch'?file:null};
   jobDraft=token.draftId;const pending=job.run(input);api.render();
   const output=await pending;
   if(!output||!here()||key!==I.conversionKey(d()))return;
   const assets=[],variants=[];
   for(const variant of output.variants){
    const assetId=M.uid('ai'),record={assetId,key,method,aiGenerated:true,engine:output.model||'configured-adapter',
     provider:output.provider||'已配置服务',sourceAssetId:id,sourceMotifId:draft.sourceMotifId,direction:draft.direction,
     ...(output.recipe?{recipe:output.recipe}:{}),...(form?{formAssetId:form.assetId,identity:form.identity}:{}),
     label:locked?.label||output.recipe?.design?.subject||form?.identity.subject||output.recipe?.colorStudy||M.getItem(draft.itemId).name,createdAt:M.now(),removedPaper:!!variant.removedPaper,proofNote:variant.proofNote||''};
    assets.push({id:assetId,blob:variant.blob});
    variants.push({id:assetId,...record,model:output.model||'',selection,record});
   }
   const ok=await api.atomic(state=>{
    const target=state.drafts.find(row=>row.id===token.draftId);
    M.edit(target,{aiVariants:[...(target.aiVariants||[]),...variants],patternConversion:variants[0].record,selectedVariantId:variants[0].id});
   },assets);
   if(!ok)throw Error('纹样未保存成功，请检查本机存储后重试。');
   adjusting=false;reviewingForm=false;
  }catch(error){jobDraft=token.draftId;Object.assign(job.job,{state:'failed',message:error.message});}
  finally{if(here()){if(previousSketch&&job.job.state==='failed')adjusting=false;cloudRequest=null;api.render();}}
 }
 function cancelUpload(){if(pending){URL.revokeObjectURL(pending.url);pending=null;}}
 async function exportSketch(download=false){if(!d()?.sketchStrokes?.length)return null;if(!d().sketchAssetId){let canvas=document.querySelector('#sketch-pad');if(!canvas){const temp=document.createElement('canvas');temp.id='sketch-pad';temp.width=640;temp.height=400;temp.hidden=true;document.body.append(temp);paint();canvas=temp;}const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(canvas.hidden)canvas.remove();if(!blob)throw Error('手绘图像导出失败，请重试。');const id=M.uid('sketch');const ok=await api.atomic(s=>{M.edit(s.drafts.find(x=>x.id===s.ui.activeDraftId),{sketchAssetId:id});},[{id,blob}]);if(!ok)throw Error('手绘未保存，请重试。');}if(download){const a=document.createElement('a');a.href=S.image(d().sketchAssetId);a.download='物之再生-我的手绘.png';a.click();}return d().sketchAssetId;}
 async function handle(action,el){if(!action.startsWith('in-'))return false;try{I.init(d());const id=el.dataset.id;
 if(action==='in-convert'){await convert();return true;}
 if(action==='in-revise'){reviewingForm=false;jobDraft=null;adjusting=true;api.render();return true;}
 if(action==='in-show-form'){adjusting=false;reviewingForm=true;jobDraft=null;api.render();return true;}
 if(action==='in-options'){choose();return true;}
 if(action==='in-tab'){reviewingForm=false;jobDraft=null;conversionTask=null;adjusting=false;await exportSketch();M.edit(d(),I.methodPatch(d(),id));api.changed();api.close();advancedOpen=false;api.render();document.querySelector('#main').scrollTop=0;document.querySelector('.input-heading h1').focus({preventScroll:true});}
 if(action==='in-direction'||action==='in-reference'){
  if(action==='in-direction'?!I.directions.includes(id):!Object.hasOwn(grammar.references,id))return true;
  const field=action==='in-direction'?'direction':'sourceMotifId';
  if(d()[field]===id)return true;
  M.edit(d(),{[field]:id});api.changed(0);
  // Only refresh the comparison. Keep pen strokes, photo, text focus and page position intact.
  if(!adjusting&&(matchResult(d())||matchForm(d()))){api.render();return true;}
  const fold=el.closest('.print-style');
  if(fold){
   fold.outerHTML=options(d(),false,window.Services.status('ai').state==='configured');
   const next=document.querySelector('.print-style');
   next.open=advancedOpen=true;bindDisclosure(next);
   next.querySelector('[data-action="'+action+'"][aria-pressed="true"]').focus({preventScroll:true});
  }
  return true;
 }
 if(action==='in-photo-toggle'){window.PhotoMaterials.toggle(d(),id,api);return true;}
 if(action==='in-photo-focus'){window.PhotoMaterials.focus(d(),id,api,el);return true;}
 if(action==='in-photo-color'){await window.PhotoMaterials.openColor(d(),id,api);return true;}
 if(action==='in-photo-crop'){await window.PhotoMaterials.openCrop(d(),api);return true;}
 if(action==='in-photo-smart'||action==='in-photo-inspect'){await window.PhotoMaterials.openCrop(d(),api,action==='in-photo-smart'?'smart':'inspect');return true;}
 if(action==='in-photo-layout'){await window.PhotoMaterials.openLayout(d(),api);return true;}
 if(action==='in-motif'){M.edit(d(),{sourceMotifId:'motif:'+id,primaryInput:'motif'});api.changed();api.render();}
 if(action==='in-upload')document.querySelector('#inspiration-file').click();
 if(action==='in-upload-cancel'){cancelUpload();api.close();}
 if(action==='in-upload-confirm'){if(!pending)return true;if(!document.querySelector('#input-image-consent').checked){api.dialogError('请先确认图片使用权。');return true;}const {blob,name}=pending,id=M.uid('input-image');const ok=await api.atomic(s=>M.edit(s.drafts.find(x=>x.id===s.ui.activeDraftId),{inspirationImageId:id,inputImageName:name,primaryInput:'image'}),[{id,blob}]);if(ok){api.close();cancelUpload();api.render();}}
 if(action==='in-brush'){brush=id;api.render();}
 if(action==='in-sketch-clear'){undo.push(d().sketchStrokes);undo=undo.slice(-30);M.edit(d(),{sketchStrokes:[],sketchAssetId:null,primaryInput:d().primaryInput==='sketch'?'motif':d().primaryInput});api.changed();api.render();}
 if(action==='in-sketch-undo'){const prev=undo.pop()??d().sketchStrokes.slice(0,-1);M.edit(d(),{sketchStrokes:prev,sketchAssetId:null,primaryInput:prev.length?'sketch':d().primaryInput==='sketch'?'motif':d().primaryInput});api.changed();api.render();}
 if(action==='in-export'){await exportSketch(true);notify('手绘已保存到草稿，并导出 PNG。');}
 if(action==='in-continue'){
  const record=matchResult(d());
  if(d().inputTab==='motif'&&sourceObject(d())?.photo&&(!record||adjusting)){
   await window.PhotoMaterials.adopt(d(),api);return true;
  }
  if(!record&&!I.canContinue(d()))return true;
  if(d().inputTab!=='motif'&&!record){notify('请先转化素材并确认预览。');return true;}
  if(d().inputTab==='motif'&&adjusting&&record?.aiGenerated)M.edit(d(),{patternConversion:null,selectedVariantId:null});
  const source=I.editorInput(d());
  const settings=source.imageId&&record?.assetId===source.imageId?window.PatternEditor.confirmedSettings(d()):{};
  M.edit(d(),{...settings,...source});if(await api.save())api.toEditor();
 }
 if(action==='in-ai-cancel'){cloudRequest=null;job.cancel();if(d().inputTab==='sketch'&&matchResult(d()))adjusting=false;api.render();}
 if(action==='in-ai')confirmAI();
 if(action==='in-recolour')confirmAI(true);
 if(action==='in-ai-confirm')await generateAI();
 if(action==='in-compare-form'){
  const form=matchForm(d());if(!form)return true;
  const original=el.getAttribute('aria-pressed')!=='true',figure=el.closest('figure'),img=figure.querySelector('img');
  img.src=S.image(original?form.sourceAssetId:form.assetId);
  img.alt=original?'我的原草图':form.identity.subject+'的单色素形';
  el.setAttribute('aria-pressed',String(original));
  figure.querySelector('[data-form-label]').textContent=original?'我的原草图':'黑白稿';
  const adopt=document.querySelector('[data-action="in-decorate"]');
  if(adopt)adopt.textContent=original?'采用 AI 素形制纹':'用这个造型制纹';
  return true;
 }
 if(action==='in-decorate')await generateAI(true);
 if(action==='in-reconnect')await reconnect();
 if(action==='in-use-variant'){
  const v=d().aiVariants.find(v=>v.id===id);
  if(!v?.selection||!S.image(v.assetId))throw Error('候选文件暂时不可用。');
  if(v.sourceAssetId&&!S.image(v.sourceAssetId))await S.imageURL(v.sourceAssetId);
  const restoredForm=v.formAssetId&&v.identity?{assetId:v.formAssetId,key:v.key,sourceAssetId:v.sourceAssetId,identity:v.identity,recipe:v.recipe,model:v.model}:null;
  reviewingForm=false;
  M.edit(d(),{...(restoredForm?{sketchForm:restoredForm}:{}),...(v.method==='sketch'?{sketchSubject:''}:{}),...v.selection,patternConversion:v.record,selectedVariantId:v.id});api.changed(0);adjusting=false;api.render();
 }
 }catch(e){notify(e.message);}return true;}
 document.addEventListener('input',e=>{if(!api||api.page()!=='inspiration')return;if(e.target.id==='sketch-subject'){M.edit(d(),{sketchSubject:e.target.value});api.changed();return;}if(e.target.id==='inspiration-prompt'){M.edit(d(),{prompt:e.target.value});api.changed();document.querySelector('#idea-count').textContent=e.target.value.length+' / 1200';for(const button of document.querySelectorAll('[data-action=in-convert],[data-action=in-ai]'))button.disabled=!I.canContinue(d())||(button.dataset.action==='in-ai'&&window.Services.status('ai').state!=='configured');}});
 document.addEventListener('change',e=>{if(api?.page()!=='inspiration')return;
  if(e.target.name==='ink-count'){
   const count=Number(e.target.value);e.target.closest('details').querySelectorAll('[data-plate-color]').forEach((el,i)=>el.parentElement.hidden=i>=count);
   return;
  }
  if(e.target.id==='pattern-reading'){
  const plan=selectedPlan();
  document.querySelector('[data-action=in-ai-confirm]').disabled=plan.needsReading;return;
 }});
 function sketchThumbnail(draft){
  const saved=draft.sketchAssetId&&S.image(draft.sketchAssetId);
  if(saved||!draft.sketchStrokes?.length)return saved||'';
  const canvas=document.createElement('canvas');
  canvas.width=192;canvas.height=120;
  canvas.getContext('2d').scale(.3,.3);
  paint(canvas,draft.sketchStrokes);
  return canvas.toDataURL('image/png');
 }
 window.Inspiration={confirmAI,sketchThumbnail,init:ctx=>{api=ctx;void reconnect();},mount,handle,cancelUpload,choose,async leave(){cloudRequest=null;conversionTask=null;job.cancel();cancelUpload();await exportSketch();return api.save();},reset(editing=false){jobDraft=null;cloudRequest=null;job=I.createJob(window.Services);conversionTask=null;adjusting=editing;reviewingForm=false;undo=[];stroke=null;brush='pen';advancedOpen=false;},prepare:I.init};
})();
