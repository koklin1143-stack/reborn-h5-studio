/* Mobile workbench extensions; reuse the existing draft, history and storage transaction. */
(()=>{
 const V=window.Views,M=window.Studio,P=window.PatternTexture;let api,panel=null,exportBusy=false,imageReturnPanel=null,railScroll=0,activeDraft=null,focusLayout=false;
 const layouts=[['single','单幅'],['repeat','整齐重复'],['brick','横向错位'],['drop','纵向错位'],['mirror','镜像对称'],['quarter','四向旋转'],['honeycomb','蜂窝排列'],['wrap','环形花冠'],['weave','镜面织网'],['kaleido','万花拼花'],['diamond','菱格交织'],['echo','回纹层叠'],['hexflower','六瓣镶花'],['chevron','鱼骨折线']];
 const slider=(label,key,value,min,max,unit='')=>`<label class="range-field"><span>${label}<output data-output="${key}" data-unit="${unit}">${value}${unit}</output></span><input type="range" data-field="${key}" aria-label="${label}" min="${min}" max="${max}" value="${value}"></label>`;
 const color=(label,key,value)=>`<label class="wb-color"><span>${label}</span><input type="color" data-wb-color="${key}" aria-label="${label}" value="${/^#[0-9a-f]{6}$/i.test(value)?value:'#355b68'}"></label>`;
 const range=(d,key,def,label,min,max,unit)=>slider(label,key,d[key]??def,min,max,unit);
 const continuous=id=>window.PatternLayouts.isContinuous(id);
 const patchFor=(d,id)=>({patternLayout:id,...(continuous(id)&&!continuous(d.patternLayout)&&d.sampleWidth===100&&d.sampleHeight===100?{sampleWidth:38,sampleHeight:38,sampleX:0,sampleY:0}:{} )});
 const thumb=(d,id)=>P.svg({...d,...patchFor(d,id)});
 function flowSettings(d){
  const kinds=[['wave','水波'],['swirl','回旋']].map(([kind,label])=>
   V.btn(label,'wb-flow-kind','secondary',`data-id="${kind}" aria-pressed="${d.flowKind===kind}"`));
  return `<div class="wb-flow-params"><div>${kinds.join('')}</div>${range(d,'flowStrength',45,'变形强度',0,100,'%')}</div>`;
 }
 function flowControls(d){
  const enabled=d.flowEnabled===true;
  const edit=enabled?V.btn('调整','wb-tool','text','data-id="flow"'):'';
  return `<div class="wb-flow"><button data-action="wb-flow-toggle" role="switch" aria-checked="${enabled}"><span>整幅变形</span><b>${enabled?(d.flowKind==='swirl'?'回旋':'水波')+' · '+d.flowStrength+'%':'开启'}</b></button>${edit}</div>`;
 }
 let inkTarget='all',inkRole='inkDark';
 function colorTarget(d){if(inkTarget==='glaze'&&window.EditorObject.enabled(d))return 'glaze';return !d.imageId&&!d.spotPaint&&window.Art.inkParts[d.pattern]?.find(p=>p.key===inkTarget)||null;}
 const pigments={blue:'#355b68',red:'#a85545',green:'#748879',gold:'#c5a067',graphite:'#252925'};
 const pigmentNames={original:'原色',blue:'搪瓷蓝',red:'砖红',green:'灰绿',gold:'赭金',graphite:'石墨',bw:'黑白',duotone:'双色'};
 const tintId=d=>d.patternInk==='custom'?(Object.keys(pigments).find(id=>pigments[id]===d.inkColor)||'custom'):d.patternInk;
 function colorTargets(d){
  const parts=d.imageId||d.spotPaint?[]:window.Art.inkParts[d.pattern]||[];
  const part=parts.find(p=>p.key===inkTarget);
  const body=window.EditorObject.enabled(d);
  const targets=[...(body?[['glaze','器身']]:[]),['all',body?'纹样':'整幅'],...parts.map(p=>[p.key,p.name])];
  return parts.length||body?`<div class="ink-targets" role="group" aria-label="要改变的部位">${targets.map(([id,name])=>`<button data-action="wb-ink-target" data-id="${id}" aria-pressed="${id===(inkTarget==='glaze'&&body?'glaze':part?.key||'all')}">${name}</button>`).join('')}</div>`:'<span class="whole-ink-label">整图颜色</span>';
 }
 function colorPanel(d){
  const part=colorTarget(d);
  const glaze=part==='glaze',duo=!glaze&&!part&&d.patternInk==='duotone';
  const roles=duo?['inkDark','inkLight'].map((id,i)=>V.btn(i?'浅色':'深色','wb-ink-role','text',`data-id="${id}" aria-pressed="${inkRole===id}"`)).join(''):'';
  return colorTargets(d)+window.InkPicker.spectrumField()+`<div class="spectrum-actions">${roles}${V.btn(glaze?(window.Vessels.surface(d.canvas)?'恢复原色':'恢复白釉'):'原色','wb-restore-color','text')}${V.btn('色板与数值','wb-ink-picker','text')}${glaze?'':V.btn('效果','wb-tool','text','data-id="effects-detail"')}</div>`;
 }
 function extraColors(d){
  const parts=d.imageId||d.spotPaint?[]:window.Art.inkParts[d.pattern]||[];
  const part=parts.find(p=>p.key===inkTarget);
  const key=part&&d.pattern+'/'+part.key;
  const chosen=d.motifInks?.[key];
  let active=tintId(d);
  if(part&&chosen){
   active=chosen===part.colors[0]?'original':Object.keys(pigments).find(id=>pigments[id]===chosen)||'custom';
  }else if(!part&&Object.keys(d.motifInks||{}).some(k=>k.startsWith(d.pattern+'/'))){
   active='mixed';
  }
  const ids=part?['original','blue','red','green','gold','graphite']:['original','blue','red','graphite','bw','duotone'];
  const safe=(value,fallback)=>/^#[0-9a-f]{6}$/i.test(value)?value:fallback;
  const colors={...pigments,original:part?part.colors[0]:'conic-gradient(#355b68 0 33%,#ba6555 33% 66%,#748879 66% 100%)',bw:'linear-gradient(90deg,#282b29 50%,#e8e7e0 50%)',duotone:'linear-gradient(90deg,'+safe(d.inkDark,'#1f4557')+' 50%,'+safe(d.inkLight,'#c7b085')+' 50%)'};
  const swatches=ids.map(id=>`<button data-action="${part?'wb-part-color':'pattern-ink'}" data-id="${id}" aria-pressed="${id===active}"><i style="background:${colors[id]}" aria-hidden="true"></i><span>${pigmentNames[id]}</span></button>`).join('');
  return `<div class="wb-color-choices quick-inks ink-swatches" role="group" aria-label="${part?.name||'整幅'}颜色">${swatches}</div><div class="quick-ink-links">${V.btn('自选颜色','wb-ink-picker','text')}</div>`;
 }
 const oldTools=V.tools;
 V.tools=c=>{const d=c.d;
 if(c.tool==='coverage')return window.CupView.coverageControls(d);  if(c.tool==='sample'&&window.Explore.fromSource(d.sourceObjectId)?.photo){
  const layers=window.PhotoMaterials.parts(d);
  if(layers.length>1)return `<p class="wb-material-names">${layers.map(p=>V.esc(p.name)).join(' · ')}</p><div class="wb-material-actions">${V.btn('摆放与融合','in-photo-layout','secondary')}${V.btn('增减素材','manage-photo-picks','secondary')}</div>`;
  const samples=M.motifs.filter(m=>m.sourceObjectId===d.sourceObjectId);
  return `<div class="wb-object-samples" role="group" aria-label="取自同一实物的纹样">${samples.map(m=>V.btn('<img src="'+window.EnamelArt.photoUrl(m.fileKey)+'" alt=""><span>'+V.esc(m.name)+'</span>','resample-photo','',`data-id="${m.id}" aria-pressed="${d.imageId===m.assetId}"`)).join('')}</div>
  <div class="wb-source-caption">${V.btn('增减素材','manage-photo-picks','text')}${V.btn('裁取局部','wb-crop','text')}${V.btn('换其他素材','edit-inspiration','text')}</div>`;
 }
 if(c.tool==='sampling')return `<div class="wb-style-sample-row"><div id="wb-style-sample" data-sampler aria-label="纹样取景框">${P.samplePreview(d)}</div><label class="range-field"><span>取样范围</span><input type="range" data-lab-zoom aria-label="放大素材细节" min="15" max="100" value="${115-d.sampleWidth}"><small>取全图</small><small>取局部</small></label></div><div class="wb-sampling-controls">${d.patternLayout==='single'?'':range(d,'repeatDensity',4,'重复疏密',2,8,'')}${!continuous(d.patternLayout)&&d.patternLayout!=='single'?range(d,'repeatGap',12,'图案间距',0,60,'%'):''}${d.patternLayout==='chevron'?range(d,'foldSlope',50,'折线倾斜',10,90,'%'):''}${d.patternLayout==='echo'?range(d,'echoIterations',3,'层叠次数',1,6,'层')+range(d,'echoRatio',65,'层间比例',30,90,'%'):''}</div>${flowControls(d)}<div class="wb-panel-links">${V.btn('调整摆放','wb-tool','text','data-id="compose"')}${V.btn('重置纹样','reset','text')}</div>`;
 if(c.tool==='sample')return `<div class="wb-source-caption">${V.btn('裁取局部','wb-crop','text')}</div>${oldTools({...c,tool:'motif'})}${d.inputStage?V.btn('文字、手绘与创作方向','edit-inspiration','text full'):''}`;
 if(c.tool==='crop')return `<div class="wb-crop-inline"><div id="wb-inline-sample" data-sampler aria-label="拖动或双指缩放取样范围">${P.samplePreview(d)}</div><div><strong>拖动选框，看器物变化</strong><p>双指调整取样范围</p><div class="wb-crop-sizes">${[[100,'完整'],[65,'局部'],[35,'细节']].map(([n,label])=>V.btn(label,'wb-sample-size','secondary',`data-id="${n}" aria-pressed="${d.sampleWidth===n}"`)).join('')}</div>${V.btn('精确取样参数','wb-sample','text')}</div></div>`;
 if(c.tool==='flow')return flowSettings(d);
 if(c.tool==='effects')return colorPanel(d);
 if(c.tool==='effects-detail')return extraColors(d)+`<div class="wb-panel-links">${V.btn(window.EditorObject.enabled(d)?'换'+window.Vessels.materialLabel(d.canvas):'换画布底色','wb-tool','text','data-id="material"')}${d.patternInk==='duotone'?V.btn('编辑双色','wb-ink-picker','text'):''}</div><div class="range-grid">${range(d,'brightness',100,'亮度',30,180,'%')}${range(d,'contrast',100,'对比度',30,200,'%')}${range(d,'saturation',100,'饱和度',0,200,'%')}${range(d,'hue',0,'色相',-180,180,'°')}${range(d,'patternOpacity',100,'不透明度',0,100,'%')}${range(d,'borderWidth',0,'单元边框',0,8,'')}</div>${color('边框颜色','borderColor',d.borderColor)}${V.btn('重置颜色与效果','wb-reset-effects','text full')}`;
 if(c.tool==='compose')return oldTools(c)+`<div class="pattern-flips">${V.btn('水平翻转','pattern-flip','secondary',`data-id="flipX" aria-pressed="${!!d.flipX}"`)}${V.btn('垂直翻转','pattern-flip','secondary',`data-id="flipY" aria-pressed="${!!d.flipY}"`)}</div><div class="wb-align">${V.btn('居中','wb-center','secondary')}${V.btn('左转90°','wb-turn','secondary','data-id="-90"')}${V.btn('右转90°','wb-turn','secondary','data-id="90"')}</div><div class="range-grid">${range(d,'cropWidth',100,'可见宽度',20,100,'%')}${range(d,'cropHeight',100,'可见高度',20,100,'%')}</div>`;
 if(c.tool==='motif')return oldTools(c)+V.btn('裁取这份素材的局部','wb-sample','secondary full');
 return oldTools(c);
 };
 const names={coverage:'调整印花范围',flow:'整幅变形',sampling:'当前花样',sample:'选择素材',motif:'更换素材',crop:'裁取素材局部',effects:'调色','effects-detail':'精细调色',material:'选择底色',compose:'纹样精细调整'};
 const parentPanels={crop:'sample',flow:'sampling','effects-detail':'effects',material:'effects-detail',compose:'sampling'};
 function styleRail(d){
  const order=['single','hexflower','chevron','wrap','weave','kaleido','echo','diamond','repeat','brick','drop','mirror','quarter','honeycomb'];
  const buttons=order.map(id=>{
   const label=layouts.find(entry=>entry[0]===id)[1],selected=d.patternLayout===id;
   const preview=`<span class="wb-style-picture" aria-hidden="true">${thumb(d,id)}</span>`;
   if(selected)return `<button class="wb-current-style" data-action="wb-tool" data-id="sampling" data-layout="${id}" aria-pressed="true" aria-label="调整${label}">${preview}<span>${label} · 调整</span></button>`;
   return `<button data-action="wb-layout" data-id="${id}" data-layout="${id}" aria-pressed="false" aria-label="${label}">${preview}<span>${label}</span></button>`;
  });
  return `<div class="wb-style-rail" role="group" aria-label="选择花样，点已选花样可调整">${buttons.join('')}</div>`;
 }
 function patternStage(d){
  const original=d.patternLayout==='single'&&d.sampleWidth===100&&d.sampleHeight===100;
  const panelHints={sample:'',effects:'',compose:'拖动摆放 · 双指缩放旋转'};
  const hint=panelHints[panel]??(original&&!panel?'拖动取样，或选下方花样':'拖动取样 · 双指缩放旋转');
  return `<div class="canvas-stage pattern-stage"><div id="work-preview">${P.svg(d,{surface:true})}</div><div class="wb-source-map" aria-label="取样位置">${P.samplePreview(d)}</div><span class="canvas-note">${hint}</span></div>`;
 }
 function objectStage(d){
  return `${window.CupView.vesselPicker(d,true)}${window.CupView.zoneControl(d)}${window.CupView.coverageBar(d,panel==='coverage')}${window.EditorObject.stage(d)}`;
 }
 function tray(c){
  if(!panel)return styleRail(c.d);
  const parent=parentPanels[panel],back=parent?'返回'+({sample:'换图',effects:'调色',sampling:'花样','effects-detail':'明暗调整'}[parent]):(panel==='sample'&&imageReturnPanel?'返回调整':'回到画布');
  return `<div class="wb-panel-head">${panel==='effects'?window.SpotPaint.entry(c.d):'<span>'+(panel==='sampling'?'调整'+(layouts.find(([id])=>id===c.d.patternLayout)?.[1]||'花样'):names[panel])+'</span>'}${panel==='effects'?V.ib('check','wb-collapse','完成调色'):V.btn(back,'wb-collapse','text')}</div><div class="tool-panel" role="region" aria-label="${names[panel]}">${V.tools({...c,tool:panel})}</div>`;
 }
 function actionBar(d){
  return `<div class="editor-footer wb-actions" role="group" aria-label="创作操作">${window.PhotoMaterials.parts(d).length>1?V.btn('摆放与融合','in-photo-layout','text'):V.btn('换图','wb-tool','text',`data-id="sample" aria-expanded="${['sample','crop'].includes(panel)}"`)}${V.btn('调色','wb-tool','text',`data-id="effects" aria-expanded="${['effects','effects-detail','material'].includes(panel)}"`)}${V.btn('完成作品','finish','primary')}</div>`;
 }
 V.editor=c=>{
  const d=c.d;
  if(!d)return V.empty('没有正在编辑的草稿','从共创或我的中继续。');
  if(activeDraft!==d.id){inkTarget='all';panel=null;imageReturnPanel=null;railScroll=0;focusLayout=true;activeDraft=d.id;}
  const onObject=window.EditorObject.enabled(d);
  return `<section class="editor-screen pattern-editor wb-editor wb-live wb-easy ${onObject&&panel==='coverage'?'wb-cover-open':''} ${panel?'wb-panel-open':''} ${onObject?'':'wb-pattern-focus'}">
   <div class="editor-meta">${window.EditorObject.switcher(d)}<div>${V.ib('undo','undo','撤销',d.past.length?'':'disabled')}${V.ib('redo','redo','重做',d.future.length?'':'disabled')}${V.btn('版本','versions','text','aria-label="保存或查看版本"')}</div></div>
   ${onObject?objectStage(d):patternStage(d)}
   <div class="editor-tools">${tray(c)}</div>${actionBar(d)}</section>`;
 };
 V.versions=d=>`${window.PatternEditor.hasConfirmedPrint(d)?V.btn('恢复确认稿 · 全图原色','wb-confirmed-print','secondary full'):''}<label class="field"><span>版本名称（选填）</span><input id="version-name" class="input" maxlength="24" placeholder="例如：蓝白环绕"></label>${V.btn('留住当前版本','version-save','primary full')}<div class="version-list">${d.versions.length?d.versions.slice().reverse().map(v=>`<article class="wb-version"><div class="wb-version-thumb">${P.svg({...d,...window.PatternEditor.defaults,...v.snapshot})}</div><div><strong>${V.esc(v.name)}</strong><small>${V.date(v.createdAt)} · ${V.esc(layouts.find(([id])=>id===v.snapshot.patternLayout)?.[1]||'单幅')}</small></div>${V.btn('对比','wb-compare','text',`data-id="${v.id}"`)}${V.btn('切换','version-restore','secondary',`data-id="${v.id}"`)}${V.ib('trash','version-delete','删除版本'+V.esc(v.name),`data-id="${v.id}"`)}</article>`).join(''):'<p class="search-empty">还没有存过版本。</p>'}</div>`;
 function sampler(){const d=api.draft();api.open('素材取样',`<p class="wb-explain">拖动选框，或用滑条选择局部。原素材不变，操作可撤销。长方形取样会拉伸至方形单元。</p><div id="wb-sample-preview" data-sampler>${P.samplePreview(d)}</div><div class="range-grid">${range(d,'sampleWidth',100,'取样宽度',15,100,'%')}${range(d,'sampleHeight',100,'取样高度',15,100,'%')}${range(d,'sampleX',0,'取样水平位置',-50,50,'')}${range(d,'sampleY',0,'取样垂直位置',-50,50,'')}${continuous(d.patternLayout)?range(d,'sampleRotation',0,'取样旋转',-180,180,'°'):''}</div>${V.btn('恢复完整素材','wb-sample-reset','secondary full')}${V.btn('完成取样','close','primary full')}`,'sample');mountSampler();}
 function exportPanel(){api.open('导出纹样',`<label class="field"><span>导出内容</span><select class="input" id="wb-export-target"><option value="surface">当前完整画布</option><option value="tile" ${!api.draft().flowEnabled&&P.canTile(api.draft().patternLayout)?'':'disabled'}>重复单元（当前支持的排布）</option></select></label><label class="field"><span>格式</span><select class="input" id="wb-export-format"><option value="png">PNG 图片</option><option value="svg">SVG（上传位图将内嵌，不自动矢量化）</option></select></label><label class="field"><span>像素尺寸</span><select class="input" id="wb-export-size"><option>512</option><option selected>1024</option><option>2048</option></select></label><label class="check-row"><input id="wb-export-alpha" type="checkbox" checked><span>透明背景（取消则使用画布底色）</span></label><p class="wb-explain">整幅变形请导出完整画布。重复单元保留取样、配色、单元缩放与旋转；不包含整幅位移、裁切和重复密度；拼花单元不包含整幅缩放与旋转。请先检查平铺。输出为设计素材，非工厂生产文件。</p>${!api.draft().flowEnabled&&P.canTile(api.draft().patternLayout)?V.btn('检查平铺效果','wb-tile-check','text full'):''}${V.btn('下载纹样','wb-export-download','primary full')}`,'export');}
 async function handle(action,el){const d=api.draft();if(!d)return;switch(action){
 case 'wb-confirmed-print':
  if(!window.PatternEditor.hasConfirmedPrint(d))return;
  if(await api.atomic(state=>{
   const target=state.drafts.find(row=>row.id===d.id);
   M.edit(target,window.PatternEditor.confirmedSettings(target));
  })){api.close();api.render();}
  return;
 case 'wb-layout':if(d.patternLayout===el.dataset.id)return;focusLayout=true;return api.update(patchFor(d,el.dataset.id));
 case 'wb-crop':panel='crop';if(d.sampleWidth===100&&d.sampleHeight===100)return api.update({sampleWidth:65,sampleHeight:65});return api.render();
 case 'wb-sample-size':return api.update({sampleWidth:Number(el.dataset.id),sampleHeight:Number(el.dataset.id),...(el.dataset.id==='100'?{sampleMirror:false,sampleX:0,sampleY:0,sampleRotation:0}:{})});
 case 'wb-tool':{
  const next=el.dataset.id;
  if(next==='sample'){
   if(panel==='sample'||panel==='crop')restoreImagePanel();
   else {imageReturnPanel=panel;panel='sample';}
  }else{
   imageReturnPanel=null;panel=panel===next?null:next;
  }
  return api.render();
 }
 case 'wb-collapse':if(panel==='sample')restoreImagePanel();else panel=parentPanels[panel]||null;return api.render();
 case 'wb-vessel':if(d.canvas===el.dataset.id)return;M.switchVessel(d,el.dataset.id);api.changed();return api.render();
 case 'wb-sample':return sampler();
 case 'wb-sample-reset':api.update({sampleMirror:false,sampleX:0,sampleY:0,sampleWidth:100,sampleHeight:100,sampleRotation:0});return sampler();
 case 'wb-center':return api.update({x:0,y:0});
 case 'wb-turn':return api.update({rotation:((d.rotation+Number(el.dataset.id)+540)%360)-180});
 case 'wb-reset-effects':return api.applyInk({spotPaint:null,motifInks:{},brightness:100,contrast:100,saturation:100,hue:0,patternOpacity:100,borderWidth:0,patternInk:'original',inkColor:'#355b68',inkDark:'#1f4557',inkLight:'#c7b085',borderColor:'#355b68'});
 case 'wb-compare':{const v=d.versions.find(v=>v.id===el.dataset.id);if(!v)return;return api.open('版本对比',`<div class="wb-compare"><figure>${P.svg(d)}<figcaption>当前编辑</figcaption></figure><figure>${P.svg({...d,...window.PatternEditor.defaults,...v.snapshot})}<figcaption>${V.esc(v.name)}</figcaption></figure></div><p>仅预览，不改变草稿；恢复版本后仍可撤销。</p>${V.btn('恢复此版本','version-restore','primary full',`data-id="${v.id}"`)}${V.btn('保留当前','close','text full')}`,'compare');}
 case 'wb-ink-target':inkTarget=el.dataset.id;return api.render();
 case 'wb-part-color':{
  const part=!d.imageId&&window.Art.inkParts[d.pattern]?.find(p=>p.key===inkTarget);
  if(!part)return;
  const key=d.pattern+'/'+part.key,inks={...d.motifInks},id=el.dataset.id;
  if(id==='original'){if(d.patternInk==='original')delete inks[key];else inks[key]=part.colors[0];}else if(pigments[id])inks[key]=pigments[id];else return;
  return api.update({motifInks:inks});
 }
 case 'wb-glaze':inkTarget='glaze';panel='effects';return api.render();
 case 'wb-ink-role':inkRole=el.dataset.id;return api.render();
 case 'wb-restore-color':{
  const target=colorTarget(d);
  if(target==='glaze')return api.update({cupMaterial:{...d.cupMaterial,color:'white'}});
  if(target){const inks={...d.motifInks},key=d.pattern+'/'+target.key;if(d.patternInk==='original')delete inks[key];else inks[key]=target.colors[0];return api.update({motifInks:inks});}
  return api.applyInk(P.wholeInkPatch(d,{patternInk:'original'}));
 }
 case 'wb-spot-paint':return window.SpotPaint.open(api,d);
 case 'wb-ink-picker':return window.InkPicker.open(api,colorTarget(d));
 case 'wb-flow-toggle':panel=d.flowEnabled?'sampling':'flow';return api.update({flowEnabled:!d.flowEnabled});
 case 'wb-flow-kind':return api.update({flowKind:el.dataset.id});
 case 'wb-tile-check':if(d.flowEnabled)return api.open('平铺检查','<p>整幅变形已开启，可导出完整画布。关闭变形后可检查支持的重复单元。</p>'+V.btn('返回编辑','close','primary full'));if(!P.canTile(d.patternLayout))return api.open('平铺检查','<p>当前排布暂不支持重复单元。可使用完整画布导出，或切换镜面织网、万花拼花、回纹层叠。</p>'+V.btn('返回编辑','close','primary full'));return api.open('3 × 3 平铺检查',`<div class="wb-tile-grid">${Array.from({length:9},()=>P.svg(d,{tile:true})).join('')}</div><p>按可重复单元排列；不包含整幅位移、裁切与密度。检查边缘衔接和文字方向。</p>${V.btn('导出这个重复单元','wb-export-tile','primary full')}${V.btn('返回编辑','close','text full')}`,'tile');
 case 'wb-export':return exportPanel();
 case 'wb-export-tile':exportPanel();document.getElementById('wb-export-target').value='tile';return;
 case 'wb-export-download':{if(exportBusy)return;const options={format:document.getElementById('wb-export-format').value,size:Number(document.getElementById('wb-export-size').value),tile:document.getElementById('wb-export-target').value==='tile',transparent:document.getElementById('wb-export-alpha').checked};exportBusy=true;el.disabled=true;el.textContent='正在准备…';try{const result=await P.export(M.copy(d),options),url=URL.createObjectURL(result.blob),a=document.createElement('a');a.href=url;a.download=`物之再生-${options.tile?'重复单元':'纹样'}-${options.size}.${options.format}`;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);el.textContent='再次下载';}catch(e){api.dialogError(e.message);el.textContent='重试导出';}finally{exportBusy=false;el.disabled=false;}return;}
 }}
 document.addEventListener('change',e=>{if(!api)return;if(e.target.dataset.wbColor){const key=e.target.dataset.wbColor;if(['inkDark','inkLight','borderColor'].includes(key)&&/^#[0-9a-f]{6}$/i.test(e.target.value))api.update({[key]:e.target.value});}if(e.target.dataset.field?.startsWith('sample')){const preview=document.getElementById('wb-sample-preview');if(preview)preview.innerHTML=P.samplePreview(api.draft());}});
 document.addEventListener('input',e=>{if(api&&e.target.dataset.field?.startsWith('sample')){const preview=document.getElementById('wb-sample-preview');if(preview)preview.innerHTML=P.samplePreview({...api.draft(),[e.target.dataset.field]:Number(e.target.value)});}});
 document.addEventListener('input',e=>{if(!api||!e.target.matches('[data-lab-zoom]'))return;const n=115-Number(e.target.value),next={...api.draft(),sampleWidth:n,sampleHeight:n};api.previewUpdate(next);const pad=document.querySelector('#wb-style-sample');if(pad)pad.innerHTML=P.samplePreview(next);});
 document.addEventListener('change',e=>{if(api&&e.target.matches('[data-lab-zoom]')){const n=115-Number(e.target.value);api.update({sampleWidth:n,sampleHeight:n});}});
 // The mirrored source has a two-image period. Keep panning across either edge
 // and convert legacy, margin-relative positions only when the gesture begins.
 function bindSample(el,onCanvas){
  const G=window.TouchTransform;
  let hideTimer;
  const wrap=n=>((n+50)%100+100)%100-50;
  function read(){const d=api.draft();return {sampleMirror:d.sampleMirror===true,sampleX:d.sampleX,sampleY:d.sampleY,sampleWidth:d.sampleWidth,sampleHeight:d.sampleHeight,sampleRotation:d.sampleRotation||0};}
  function pan(base,dx,dy){
   const box=P.sampleBox(base),travel=onCanvas?210:(base.sampleMirror?220:180);
   const direction=onCanvas?-1:1;
   return {sampleMirror:true,sampleX:wrap((box.x+box.width/2+direction*dx*travel)/3.4),sampleY:wrap((box.y+box.height/2+direction*dy*travel)/3.4)};
  }
  function preview(patch){
   const d={...api.draft(),...patch};api.previewUpdate(d);
   for(const target of document.querySelectorAll('[data-sampler]'))target.innerHTML=P.samplePreview(d);
   const map=document.querySelector('.wb-source-map');
   if(map&&onCanvas){map.innerHTML=P.samplePreview(d);map.classList.add('is-active');clearTimeout(hideTimer);hideTimer=setTimeout(()=>map.classList.remove('is-active'),950);}
   const zoom=document.querySelector('[data-lab-zoom]');if(zoom)zoom.value=115-d.sampleWidth;
   for(const key of Object.keys(patch)){
    const input=document.querySelector(`[data-field="${key}"]`),out=document.querySelector(`[data-output="${key}"]`);
    if(input)input.value=patch[key];if(out)out.textContent=Math.round(patch[key])+(out.dataset.unit||'');
   }
  }
  G.bind(el,{read,preview,commit:patch=>api.update(patch),
   drag:(base,a,b)=>{
    const dx=(b.x-a.x)/el.clientWidth,dy=(b.y-a.y)/el.clientHeight;
    if(!dx&&!dy)return base;
    const inset=base.sampleWidth===100&&base.sampleHeight===100?55*(1-Math.exp(-Math.hypot(dx,dy)*5)):0;
    return {...base,...pan(base,dx,dy),sampleWidth:base.sampleWidth-inset,sampleHeight:base.sampleHeight-inset};
   },
   transform:(base,a,b)=>{
    const dx=(b.x-a.x)/el.clientWidth,dy=(b.y-a.y)/el.clientHeight;
    const ratio=a.distance/Math.max(1,b.distance);
    return {...base,...(Math.hypot(dx,dy)>.005?pan(base,dx,dy):{}),sampleWidth:G.clamp(base.sampleWidth*ratio,15,100),sampleHeight:G.clamp(base.sampleHeight*ratio,15,100),
     sampleRotation:((base.sampleRotation+(b.angle-a.angle)*180/Math.PI+540)%360)-180};
   }});
 }
 function mountSampler(){for(const el of document.querySelectorAll('[data-sampler]')){if(el.dataset.bound)continue;el.dataset.bound='true';bindSample(el,false);}}
 function mount(){const d=api.draft(),target=colorTarget(d);window.InkPicker.mountSpectrum(document.querySelector('.inline-spectrum'),api,target,!target&&d.patternInk==='duotone'?inkRole:undefined);mountSampler();const rail=document.querySelector('.wb-style-rail');if(rail){rail.scrollLeft=railScroll;if(focusLayout){const active=rail.querySelector('[aria-pressed=true]');if(active)rail.scrollLeft=Math.max(0,active.offsetLeft-rail.offsetLeft-rail.clientWidth/2+active.clientWidth/2);focusLayout=false;}rail.addEventListener('scroll',()=>{railScroll=rail.scrollLeft;},{passive:true});}const el=document.getElementById('work-preview');if(!el)return;const G=window.TouchTransform;if(panel!=='compose'){bindSample(el,true);return;}G.bind(el,{read:()=>{const d=api.draft();return {x:d.x,y:d.y,scale:d.scale,rotation:d.rotation};},preview:patch=>api.previewUpdate({...api.draft(),...patch}),commit:patch=>api.update(patch),drag:(base,a,b)=>{const f=340/Math.max(200,el.getBoundingClientRect().width);return {...base,x:Math.round(G.clamp(base.x+(b.x-a.x)*f,-60,60)),y:Math.round(G.clamp(base.y+(b.y-a.y)*f,-60,60))};}});}
 function restoreImagePanel(){
  if(panel==='sample'||panel==='crop')panel=imageReturnPanel;
  imageReturnPanel=null;
 }
 function focusEditor(){
  const target=document.querySelector('.wb-panel-head button')||document.querySelector('#work-preview, #editor-cup-host');
  if(target){if(!target.matches('button'))target.tabIndex=-1;target.focus({preventScroll:true});}
 }
 window.Workbench={layoutName:id=>layouts.find(([key])=>key===id)?.[1],init:a=>api=a,handle,mount,restoreImagePanel,focusEditor,setCoveragePanel:open=>{panel=open?'coverage':null;imageReturnPanel=null;},closePanel:()=>{panel=null;imageReturnPanel=null;}};
})();
