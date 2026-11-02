/* Application coordinator: routes, atomic actions, editor gestures and recovery. */
(() => {
'use strict';
const M=window.Studio,S=window.LocalStore,V=window.Views,G=window.ArchiveService,$=s=>document.querySelector(s);
let state,page='discover',folioLeaf='',tool='compose',resultId=null,saveLabel='已保存到本机',error='',loaded=false,busy=false,dirty=false,revision=0,saveTimer,toastTimer,dialogTrigger,modal='',parent='discover',detailParent='discover',resultParent='mine',uploadFromHome=false,scrolls={},rangeStart=null,drag=null,swipe=null,suppressClick=false;
const draft=()=>state?.drafts.find(d=>d.id===state.ui.activeDraftId);
const selected=()=>{if(window.Explore&&["discover","detail"].includes(page))return (page==='discover'&&window.Explore.featured(state))||window.Explore.selected(state);const group=M.items.filter(i=>i.category===state.ui.category);return group.find(i=>i.id===state.ui.positions[state.ui.category])||group[0]||M.items[0];};
let selectedWorkIds=null;
const context=()=>({s:state,page,selectedWorkIds,folioLeaf,tool,item:selected(),d:draft(),w:state.works.find(w=>w.id===resultId),saveLabel});
function toast(message){$('#toast').textContent=message;$('#toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').hidden=true,3500);}
let slowSaveTimer,writeStarted=0;
function showSaveStatus(){
 const el=$('#save-status');if(!el)return;
 el.textContent=saveLabel;
 el.hidden=saveLabel!=='正在保存…'||Date.now()-writeStarted<800;
}
function status(label){
 if(label==='正在保存…'&&label!==saveLabel)writeStarted=Date.now();
 saveLabel=label;clearTimeout(slowSaveTimer);showSaveStatus();
 if(label==='正在保存…')slowSaveTimer=setTimeout(showSaveStatus,Math.max(0,810-(Date.now()-writeStarted)));
}
function report(e){error=e?.message||String(e);if(!error.includes('本地')&&!error.includes('浏览器'))error='未能保存到本机。请保留页面，释放空间或恢复浏览器存储权限后重试。';$('#storage-banner span').textContent=error;$('#storage-banner').hidden=false;status('保存失败 · 请重试');if($('#dialog').open)dialogError(error);}
function clearError(){error='';$('#storage-banner').hidden=true;}
async function save(){clearTimeout(saveTimer);if(!loaded)return false;const rev=revision;status('正在保存…');try{await S.commit(state);if(rev===revision){dirty=false;status('已保存到本机');clearError();}return true;}catch(e){report(e);return false;}}
function changed(delay=250){revision++;dirty=true;status('正在保存…');clearTimeout(saveTimer);if(delay===0)save();else saveTimer=setTimeout(save,delay);}
async function atomic(action,assets=[]){if(busy)return null;busy=true;$('.app').dataset.busy='true';clearTimeout(saveTimer);const candidate=M.copy(state);try{const value=action(candidate);await S.commit(candidate,assets);state=candidate;revision++;dirty=false;status('已保存到本机');clearError();return {value};}catch(e){report(e);return null;}finally{busy=false;$('.app').dataset.busy='false';}}
function render(){if(!loaded)return;
 if(page!=='mine'||(state.ui.filter||'works')!=='works'||!state.works.length)selectedWorkIds=null;
 $('.app').dataset.view=page;if(page==='editor'&&draft())draft().editorFormat='pattern-v1';const kept=page==='editor'&&window.EditorObject.enabled(draft())&&window.Cup3D?.diagnostics()?.vesselType===draft().canvas?$('#editor-cup-host'):null;if(!kept)window.Cup3D?.dispose();window.Frame3D?.detach();window.FilmOptics?.reset();$('.app').classList.toggle('is-editor',page==='editor');$('#header').innerHTML=V.header(context());$('#main').className=page==='discover'?'home-main':page==='gallery'?'gallery-main':page==='editor'?'editor-main':page==='cup'?'cup-main':'';$('#main').innerHTML=({discover:V.home,detail:V.detail,editor:V.editor,cup:V.cup,inspiration:V.inspiration,result:V.result,points:V.points,mine:V.mine,gallery:V.gallery,galleryDetail:V.galleryDetail}[page]||V.home)(context());syncWorkSelection();$('#nav').hidden=selectedWorkIds!==null||['editor','inspiration','cup','galleryDetail'].includes(page);showSaveStatus();window.GalleryFolio?.mount(context());if(page==='inspiration')window.Inspiration.mount();if(page==='cup')window.CupView.mount();if(page==='editor'&&window.EditorObject.enabled(draft()))window.EditorObject.mount(kept);if(page==='editor')window.Workbench?.mount();$('#nav').innerHTML=V.nav(page==='galleryDetail'?'gallery':page==='result'?'mine':page==='detail'?'discover':page);if(page==='discover'){window.FilmHome?.layout(context());window.FilmHome?.mountRail?.();}if(page==='discover'&&state.ui.coView==='explore')$('.category-scroll [aria-pressed=true]')?.scrollIntoView({block:'nearest',inline:'nearest'});if(draft()?.imageId&&!S.image(draft().imageId)&&page==='editor')toast('此草稿的图片未能恢复，可在“纹样”中重新上传。');}
function routeString(p=page){if(p==='galleryDetail')return 'gallery/'+encodeURIComponent(state.ui.galleryId||'')+(folioLeaf?'/'+folioLeaf:'');return p==='result'?'result/'+encodeURIComponent(resultId||''):p;}
function navigate(p,{replace=false,skipSave=false,folioReturn=null}={}){
 if(busy)return;
 close();scrolls[page]=$('#main').scrollTop;
 if(page==='gallery')state.ui.gallery.scroll=scrolls[page];
 page=p;
 if(draft()&&['editor','inspiration'].includes(p))draft().lastWorkspace=p;
 if(p==='result')state.ui.resultId=resultId;
 state.ui.route=routeString();if(!skipSave)changed(0);
 const hash='#'+state.ui.route;
 if(location.hash!==hash){
  if(replace)location.replace(hash);else location.hash=hash;
  if(p==='galleryDetail')history.replaceState({folioReturn,folioParent:state.ui.galleryParent},'',location.href);
 }
 render();$('#main').scrollTop=page==='gallery'?state.ui.gallery.scroll:page==='discover'?0:(scrolls[page]||0);
 $('#main').focus({preventScroll:true});
}
async function back(){if(page==='cup'){if(!await save())return;navigate('editor');document.querySelector('[data-action=cup-open]')?.focus({preventScroll:true});return;}if(page==='inspiration'){if(!await window.Inspiration.leave())return;if(state.ui.inputsFromEditor){state.ui.inputsFromEditor=false;parent=state.ui.editorParent||'mine';return navigate('editor');}return navigate(state.ui.inspirationParent||'discover');}if(page==='galleryDetail'){
 const id=state.ui.galleryId,leaf=folioLeaf;
 if(history.state?.folioReturn){history.back();return;}
 folioLeaf='';navigate(leaf?'galleryDetail':state.ui.galleryParent||'gallery',{replace:true});restoreFileFocus(id,leaf);return;
}if(page==='editor'){if(!await save())return;return navigate(parent);}if(page==='detail')return navigate(state.ui.detailParent||detailParent);if(page==='result'){navigate(resultParent);if(resultParent==='points'&&dayReturn?.workId===resultId)openDay(dayReturn);dayReturn=null;return;}navigate('discover');}
function restoreFileFocus(id,leaf){
 const selector=page==='galleryDetail'&&!folioLeaf&&leaf?'.doc-open[data-id="'+CSS.escape(leaf)+'"]':page!=='galleryDetail'?'[data-action=gallery-detail][data-id="'+CSS.escape(id)+'"]':'';
 if(selector)document.querySelector(selector)?.focus({preventScroll:true});
}
function selectItem(id){const i=M.getItem(id);state.ui.category=i.category;state.ui.positions[i.category]=i.id;changed(0);}
function cycle(delta){if(window.Explore&&page==="discover"){window.Explore.cycle(state,delta);window.FilmHome.sync(context(),delta);changed(350);return;}const i=selected(),g=M.items.filter(item=>item.category===i.category);if(g.length<2){window.FilmHome.layout(context());return;}selectItem(g[(g.indexOf(i)+delta+g.length)%g.length].id);window.FilmHome.sync(context(),delta);}
function open(title,body,type='generic'){if(['generation-consent','recolour-consent'].includes(type)&&!history.state?.generationSheet){
  history.pushState({...history.state,generationSheet:type,draftId:draft().id},'',location.href);
 }
 if(!$('#dialog').open)dialogTrigger=document.activeElement;modal=type;$('#dialog').innerHTML=`<div class="dialog-head"><h2 id="dialog-title">${title}</h2>${V.ib('close','close','关闭')}</div><div class="dialog-body">${body}<p class="dialog-error" role="alert" hidden></p></div>`;if(!$('#dialog').open)$('#dialog').showModal();}
function close(popSheet=true){
 if(popSheet&&$('#dialog').open&&history.state?.generationSheet===modal)history.back();
 window.SearchAssistant?.cancel();if($('#dialog').open)$('#dialog').close();modal='';if(dialogTrigger?.isConnected)dialogTrigger.focus({preventScroll:true});}
function dialogError(msg){const el=$('.dialog-error');if(el){el.textContent=msg;el.hidden=false;}}
let openedDay=null,dayReturn=null;
function openDay(day){
 openedDay=day;
 const link=day.fromAll?V.btn('返回全部足迹','archive-history','text full',`data-id="growth" data-top="${day.top}" data-origin="${V.esc(day.day)}"`):'';
 open('当天的创作',V.archiveHistory(context(),'growth',day.day)+link,'growth-day');
}
function showSearch(){
 open('找物',`<div class="voice-search-sheet">
  <div class="object-query"><span class="query-lens" aria-hidden="true">${V.icon('search',18)}</span><input id="search-query" aria-label="输入器物、花纹或用途" type="text" enterkeyhint="search" maxlength="160" placeholder="描述器物、花纹或用途" value="${V.esc(state.ui.query)}">${V.ib('close','clear-search','清空搜索')}${window.SearchAssistant.voiceControls()}</div>
  <p id="voice-status" role="status"></p>
  <div class="query-samples"><h3>试试这样找</h3>${['带数字的杯子','小时候洗脸用的','西湖纪念盘'].map(q=>V.btn('<span>'+q+'</span>'+V.icon('arrow',14),'example','query-sample',`data-query="${q}"`)).join('')}</div>
  ${window.SearchAssistant.controls()}
  <div id="search-results">${V.searchResults(state.ui.query)}</div></div>`,'search');
 window.SearchAssistant.mount(query=>{state.ui.query=query;changed();});
}
function showUpload(home=false){uploadFromHome=home;open('用自己的图像共创',`<p>选择你拥有合法使用权的图像，放进当前${M.category(home?selected().category:draft().category).name}画布。</p><p class="notice">支持 JPG、PNG、WebP，最大 12 MB。图片仅保存在本机，不上传服务器。</p><label class="check-row"><input type="checkbox" id="image-consent"><span>我确认拥有这张图像的合法使用权；后续投稿授权将单独确认。</span></label>${V.btn('选择图像','pick-file','primary full')}${V.btn('暂时不用','close','text full')}`,'upload');}
async function start(itemId=selected().id,method=null){if(M.getItem(itemId).category!=='enamel'){open('类别待开放',V.statePanel({state:'unavailable',title:'该类别尚未开放',description:'可返回搪瓷继续创作。旧版草稿仍可在“我的”中恢复。',action:'home',label:'返回共创'}));return false;}const source=page==='detail'?'detail':page==='mine'?'mine':'discover';const object=window.Explore?.get(itemId);const res=await atomic(s=>{const existing=s.drafts.find(d=>d.inputStage&&object&&d.sourceObjectId===object.sourceObjectId);const d=existing||M.addDraft(s,object?.legacyItemId||itemId);s.ui.activeDraftId=d.id;if(object)d.sourceObjectId=object.sourceObjectId;if(!existing&&object?.photo&&(!method||method==='motif'))d.sourceMotifId='motif:'+object.photo.key+'-'+object.photo.samples[0].key;window.Inspiration.prepare(d);if(method||object?.photo)M.edit(d,window.InspirationModel.methodPatch(d,method||"motif"));return d;});if(!res)return false;parent='inspiration';state.ui.inputsFromEditor=false;state.ui.inspirationParent=source;state.ui.editorParent=parent;window.Inspiration.reset();tool='compose';navigate('inspiration');return true;}
function update(changes){const d=draft();if(!d)return;M.edit(d,changes);changed();render();}
function applyInk(changes){
 const d=draft();
 if(!d?.spotPaint||changes.spotPaint!==null)return update(changes);
 previewUpdate({...d,...changes});
 open('替换局部配色？',`<p>画布正在预览整图颜色。替换后会移除当前的局部涂色，可用「撤销」恢复。</p>${V.btn('保留局部配色','close','secondary full')}<button class="btn primary full" data-replace-ink>替换局部配色</button>`,'replace-ink');
 const dialog=$('#dialog');
 dialog.querySelector('[data-replace-ink]').onclick=()=>{close();if(draft()===d)update(changes);};
 dialog.addEventListener('close',()=>{if(page==='editor'&&draft()===d)render();},{once:true});
}
function previewUpdate(next){if(!window.EditorObject.preview(next))$('#work-preview').innerHTML=window.PatternTexture?window.PatternTexture.svg(next,{guides:false,surface:true}):V.art(next);for(const output of document.querySelectorAll('[data-output]')){const key=output.dataset.output;output.textContent=(next[key]??0)+(output.dataset.unit??(['scale','cropWidth','cropHeight','repeatGap'].includes(key)?'%':key==='rotation'?'°':''));}}
function showFinish(){
 const d=draft();
 const source=window.Explore.fromSource(d.sourceObjectId)||M.heritageObjects.find(o=>o.id===d.sourceObjectId);
 const vessel=window.Vessels.data[d.canvas]?.name||M.category(d.category).name;
 const motifName=d.imageId?(d.imageName||'我的图案').replace(/\.[a-z0-9]{1,5}$/i,''):M.getItem(d.itemId).name;
 const suggested=motifName.slice(0,Math.max(1,21-vessel.length))+' · '+vessel;
 const viewButton=window.Vessels.data[d.canvas]?V.btn(window.EditorObject.enabled(d)?'调整器型':'试到器物上','finish-preview','text'):'';
 const summary=`<div class="finish-review"><div class="finish-texture" aria-label="当前纹样">${window.PatternTexture.svg(d)}</div><div><small>来源 · ${V.esc(source?.name||'待补来源')}</small><strong>${V.esc(vessel)}</strong>${viewButton}</div></div>`;
 open('保存到我的作品',`${summary}<label class="field"><span>作品名称</span><input class="input" id="work-title" maxlength="24" value="${V.esc(d.title||suggested)}"></label><details class="finish-note" ${d.idea?'open':''}><summary>给看作品的人留句话（选填）</summary><textarea class="input" id="work-idea" placeholder="为什么挑这个花纹？做的时候，有没有一个让你改了主意的小细节？" maxlength="180" rows="2">${V.esc(d.idea)}</textarea></details><p>私有作品保存在本机，可在「我的」继续编辑。</p>${V.btn('保存到我的作品','complete','primary full')}${V.btn('导出纹样图片','wb-export','text full')}${V.btn('继续调整','close','text full')}`,'finish');
}

function showSubmission(id){const sub=state.submissions.find(x=>x.id===id);if(!sub)return;open('演示投稿记录',`<span class="state-badge">${sub.status}</span><div class="large-preview">${V.art(sub.snapshot)}</div><h3>${V.esc(sub.snapshot.title)}</h3><p>${V.date(sub.createdAt)} · 记录 ${V.esc(sub.id.slice(-8))}</p><div class="status-register"><span>审核 <b>未接入馆方</b></span><span>入选 <b>未评定</b></span><span>量产 <b>未启动</b></span></div><p class="notice">已保留本地作品快照。没有发送至馆方，也没有进行审核、入选或生产。</p><p>继续修改作品会新建副本，保留本次投稿的原始版本。</p>${V.btn('再生档案','regeneration','secondary full',`data-kind="submissions" data-id="${sub.id}"`)}${V.btn('关闭记录','close','primary full')}${V.btn('删除这条演示记录','delete','text danger full',`data-kind="submissions" data-id="${sub.id}"`)}`,'submission');}
function syncWorkSelection(){
 const bar=$('#work-batch-bar');
 bar.hidden=!selectedWorkIds;
 if(!selectedWorkIds)return;
 const count=selectedWorkIds.size,all=$('#works-select-all');
 all.checked=count===state.works.length;
 all.indeterminate=count>0&&!all.checked;
 $('#work-selection-count').textContent='已选 '+count+' 件';
 const remove=bar.querySelector('button');
 remove.textContent=count?`删除 ${count} 件`:'删除';
 remove.disabled=count===0;
}
function toggleWorkSelection(){
 if(page!=='mine'||(state.ui.filter||'works')!=='works'||!state.works.length)return;
 selectedWorkIds=selectedWorkIds?null:new Set();
 render();
 $('#header [data-action="toggle-work-selection"]')?.focus({preventScroll:true});
}
function confirmWorkSelection(){
 if(!selectedWorkIds?.size)return;
 const works=state.works.filter(w=>selectedWorkIds.has(w.id)).reverse();
 const names=works.map(w=>`<li>${V.esc(w.title||'未命名作品')}</li>`).join('');
 const published=state.publications.some(p=>p.state==='published'&&selectedWorkIds.has(p.workId));
 open(`删除这 ${works.length} 件作品？`,`<ul class="batch-delete-list">${names}</ul><p>删除后无法恢复。${published?'所选作品在本机广场的展示也会撤回。':''}</p>${V.btn('确认删除','confirm-work-selection','danger full')}${V.btn('取消','close','secondary full')}`,'work-batch-delete');
}
function confirmDelete(kind,id){const record=state[kind]?.find(x=>x.id===id);if(!record)return;const title=record.title||record.snapshot?.title||'未命名草稿';open('确认删除'+({drafts:'草稿',works:'作品',submissions:'演示投稿记录'}[kind]),`<p>将从此浏览器删除“${V.esc(title)}”。此操作无法撤销。</p><p>其他草稿、作品与成长记录会保留。${kind==='works'&&state.submissions.some(x=>x.workId===id)?'已留存的演示投稿快照也会保留。':''}</p>${V.btn('确认删除','confirm-delete','danger full',`data-kind="${kind}" data-id="${id}"`)}${V.btn('保留，返回','close','secondary full')}`,'delete');}
document.addEventListener('change',e=>{if(page==='gallery'&&e.target.matches('.gallery-form'))handle('gallery-category',{dataset:{id:e.target.value}});});
async function handle(action,el){if(busy&&action!=='close')return;const id=el?.dataset.id;
if(action==='ai-connection'){
 const returnToSearch=modal==='search';
 window.SearchAssistant?.cancel();
 const address=window.AIConnection.selected()||(/^https?:$/.test(location.protocol)&&!location.hostname.endsWith('.github.io')?location.origin:'');
 open('连接 AI',`<form id="ai-connect-form"><p>连接一次，即可使用智能找物、语音和纹样生成。也可以直接打开测试邀请链接完成连接。</p><label class="field">测试访问码<input name="access" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="256" placeholder="粘贴测试访问码"></label><label class="check-row"><input name="remember" type="checkbox" checked><span>在这台设备记住连接<small>不自动过期；共用设备请取消勾选。</small></span></label><details class="ai-address"${address?'':' open'}><summary>服务地址</summary><label class="field">AI 服务地址<input name="endpoint" type="url" required placeholder="https://…" value="${V.esc(address)}" autocomplete="url"></label></details><button class="btn primary full" type="submit">连接 AI</button>${window.AIConnection.hasAccess()?V.btn('清除此设备的连接','ai-forget','text full'):''}<p id="ai-connect-note" role="status"></p></form>`,'ai-connection');
 const form=$('#ai-connect-form');
 form.onsubmit=async e=>{
  e.preventDefault();const button=form.querySelector('button'),note=form.querySelector('#ai-connect-note');
  button.disabled=true;note.textContent='正在连接，首次唤醒服务可能需要约一分钟…';
  try{
   const target=form.elements.endpoint.value.trim();
   const code=form.elements.access.value.trim()||(target===address?window.AIConnection.headers(address+'/api/pattern').Authorization?.replace(/^Bearer /,''):'')||'';
   await window.AIConnection.configure(form.elements.endpoint.value.trim(),code,{remember:form.elements.remember.checked});
   if(!form.isConnected||!$('#dialog').open)return;
   if(!await window.BailianPatterns.connect())throw Error('服务规则版本不一致或暂不可用，请更新后端后重试。');
   if(!form.isConnected||!$('#dialog').open)return;
   close();render();if(returnToSearch)showSearch();toast(window.AIConnection.remembered()?'AI 已连接，这台设备已记住':'AI 已连接，本次会话有效');
  }catch(e){if(form.isConnected)note.textContent=e.name==='TimeoutError'?'服务启动较慢，请稍后重试。':e.message==='Failed to fetch'?'连接失败，请检查服务地址与网络。':e.message;}
  finally{if(form.isConnected)button.disabled=false;}
 };
 form.oninput=()=>{form.querySelector('#ai-connect-note').textContent='';};
 return;
}
if(action==='ai-forget'){window.AIConnection.forget();window.Services.configure('ai',null);close();render();toast('已清除此设备的 AI 连接');return;}
if(action.startsWith('wb-'))return window.Workbench.handle(action,el);
if(window.Inspiration&&action.startsWith('in-'))return window.Inspiration.handle(action,el);
if(window.EditorObject.handle(action,el))return;
if(window.CupView&&action.startsWith('cup-')&&action!=='cup-open')return window.CupView.handle(action,el);
switch(action){
case 'cup-open':if(draft()?.category!=='enamel')return toast('此类别的三维模型待接入。');if(!await save())return;return navigate('cup');
case 'regeneration':return open('再生档案',V.regeneration(state,el.dataset.kind,id),'regeneration');
case 'check-record-assets':await S.preload(state,true);render();return open('再生档案',V.regeneration(state,el.dataset.kind,id),'regeneration');
case 'duplicate-record':case 'repair-record':{const res=await atomic(s=>window.Management.duplicate(s,el.dataset.kind,id,action==='repair-record'));if(res){state.ui.filter='drafts';navigate('mine');toast('独立副本已保存，原记录保留');}return;}
case 'open-gallery':return navigate('gallery');
case 'foundation-services':return open('功能接入状态',Object.keys({ai:1,images:1,models:1}).map(kind=>{const info=window.Services.status(kind);return V.statePanel({state:'unavailable',title:({ai:'AI 生成',images:'馆藏影像',models:'器型 3D'})[kind],description:info.message});}).join(''));
case 'co-view':return navigate(id==='gallery'?'gallery':'discover');
case 'gallery-sort':case 'gallery-category':state.ui.gallery[action==='gallery-sort'?'sort':'category']=id;state.ui.gallery.scroll=0;changed(0);render();$('#main').scrollTop=0;return;
case 'gallery-reset':state.ui.gallery={sort:'latest',category:'all',scroll:0};changed(0);render();$('#main').scrollTop=0;return;
case 'gallery-detail':return window.GalleryFolio.unfold(el,()=>{
 folioLeaf='';state.ui.galleryParent=['mine','result'].includes(page)?page:'gallery';
 if(page==='result')state.ui.gallery={sort:'latest',category:'all',scroll:0};
 state.ui.galleryId=id;scrolls.galleryDetail=0;navigate('galleryDetail',{folioReturn:location.hash});
});
case 'gallery-back':return navigate('gallery');
case 'gallery-like':case 'gallery-collect':{const top=$('#main').scrollTop,res=await atomic(s=>G.toggle(s,action==='gallery-like'?'galleryLikes':'galleryCollections',id));if(res){render();$('#main').scrollTop=top;}return;}
case 'gallery-sheet':{
 if(page!=='galleryDetail'||folioLeaf||!window.GalleryFolio.hasLeaf(id))return;
 folioLeaf=id;navigate('galleryDetail',{folioReturn:location.hash});return;
}
case 'gallery-inspire':{
 const publication=G.get(state,id);
 if(publication?.snapshot.category!=='enamel')return open('类别待开放',V.statePanel({state:'unavailable',title:'这一类别的创作尚未开放',description:'可以先从广场里的搪瓷作品开始。',action:'open-gallery',label:'去作品广场'}));
 const assets=[];
 if(publication.patternKey){
  const assetId=publication.snapshot.imageId;
  try{
   if(!await S.imageURL(assetId)){
    const response=await fetch(window.EnamelArt.photoUrl(publication.patternKey));
    if(!response.ok)throw Error();
    const blob=await response.blob();
    if(!blob.size||blob.type!=='image/webp')throw Error();
    assets.push({id:assetId,blob});
   }
  }catch{return toast('纹样暂时未能打开，请重试。');}
  if(page!=='galleryDetail'||state.ui.galleryId!==id)return;
 }
 const res=await atomic(s=>G.inspire(s,id),assets);
 if(res){parent='galleryDetail';state.ui.editorParent=parent;tool='compose';navigate('editor');toast('已创建私有草稿');}return;
}
case 'publish-open':return open('模拟公开到作品广场',`<div class="consent-scope">只在此浏览器生成展示快照，不会上传服务器或对其他人可见。真实公开、版权审核及多人共享尚未接入。</div><label class="check-row"><input type="checkbox" id="publish-rights"><span>我确认拥有作品和图像的合法使用权；此声明未经馆方或第三方核验。</span></label><label class="check-row"><input type="checkbox" id="publish-display"><span>我主动选择在本机演示广场展示作品、作者留言及素材来源。</span></label><label class="check-row"><input type="checkbox" id="publish-inspire"><span>允许在本原型中以此为灵感创建独立草稿；不授予对外展示、商业使用或量产授权。</span></label><label class="check-row"><input type="checkbox" id="publish-theme"><span>加入「${M.theme.title}」演示主题（选填，非正式征集）。</span></label>${V.btn('确认模拟公开','publish-confirm','primary full',`data-id="${id}"`)}${V.btn('保持私有','close','text full')}`,'publish');
case 'publish-confirm':if(!$('#publish-rights').checked||!$('#publish-display').checked||!$('#publish-inspire').checked)return dialogError('请先确认使用权、本机展示和灵感再创作三项说明。');{const consent={rights:true,display:true,inspiration:true,theme:$('#publish-theme').checked};const res=await atomic(s=>G.publish(s,id,consent));if(res){close();render();toast('已生成本机展示快照；未上传或共享');}return;}
case 'gallery-withdraw':return open('撤回本机展示',`<p>撤回后不会出现在广场，私有作品与已记积分保留。之后可以再次确认展示。</p>${V.btn('确认撤回','withdraw-confirm','primary full',`data-id="${id}"`)}${V.btn('继续保留','close','text full')}`);
case 'withdraw-confirm':{const res=await atomic(s=>G.withdraw(s,id));if(res){navigate('gallery');toast('已撤回本机展示');}return;}
case 'ledger-source':{
 const e=state.ledger.find(row=>row.id===id);if(!e)return;
 const source=e.source?.kind==='work'?state.works.find(w=>w.id===e.source.id):e.source?.kind==='submission'?state.submissions.find(s=>s.id===e.source.id):null;
 const fromHistory=modal==='ledger-history',top=fromHistory?$('#dialog .dialog-body').scrollTop:0;
 const link=source?V.btn(e.source.kind==='work'?'查看对应作品':'查看投稿记录',e.source.kind==='work'?'view-work':'submission','secondary full',`data-id="${V.esc(source.id)}"`):'';
 return open('积分来源',`<div class="point-receipt"><small>演示积分</small><strong>${e.points>0?'+':''}${e.points}</strong>
   <h3>${V.esc(e.title||'未命名作品')}</h3><p>${V.esc(e.label)} · ${V.date(e.createdAt)}</p>
   ${e.snapshot?'<div class="receipt-art">'+V.art(e.snapshot)+'</div>':''}${source?'':'<p>原记录已移除，积分流水仍保留。</p>'}
   ${link}${fromHistory?V.btn('返回全部明细','archive-history','text full',`data-id="ledger" data-top="${top}" data-origin="${V.esc(id)}"`):''}</div>`);
}
case 'growth-day':return openDay({day:id,fromAll:el.dataset.history==='all',top:$('#dialog .dialog-body')?.scrollTop||0});
case 'archive-history':{
 open(id==='growth'?'全部成长足迹':'全部积分明细',V.archiveHistory(context(),id),id==='ledger'?'ledger-history':'growth-history');
 if(el.dataset.origin)$('#dialog .dialog-body').querySelector(`[data-id="${CSS.escape(el.dataset.origin)}"]`)?.focus({preventScroll:true});
 $('#dialog .dialog-body').scrollTop=Number(el.dataset.top)||0;return;
}
case 'growth-stat':if(id==='selection')return open('入选作品',`<p>暂无馆方评定记录。作品的保存、投稿与点赞均不等于正式入选。</p>${V.btn('知道了','close','primary full')}`);state.ui.filter=id;return navigate('mine');
case 'gallery-info':return open('关于作品广场',`<p>这期广场收录两件工作室原作和十件社区示范作品。示范作品的作者昵称、留言和起始互动人数用于模拟多人广场。</p><p>你可以喜欢、收藏或借一件作品开始创作。你的选择保存在当前浏览器，新增作品也可以在本机发布。</p>${V.btn('知道了','close','primary full')}`);
case 'navigate':if(el.dataset.page==='discover')state.ui.coView='explore';return navigate(el.dataset.page);
case 'home':state.ui.category='enamel';state.ui.coView='explore';return navigate('discover');
case 'mine':state.ui.filter='works';return navigate('mine');
case 'back':return back();
case 'close':window.Inspiration?.cancelUpload();return close();
case 'retry':if(!loaded)return boot();if(await save())render();return;
case 'explore-select':{
 const item=window.Explore.select(state,id);
 if(!window.Explore.exhibits.includes(item)){detailParent='discover';state.ui.detailParent=detailParent;scrolls.detail=0;return navigate('detail');}
 changed(0);if(page==='discover'&&!$('#dialog').open)return window.FilmHome.sync(context());return navigate('discover');
}
case 'prev':return cycle(-1);
case 'next':return cycle(1);
case 'category':{const category=window.Explore.categories.find(c=>c.id===id);if(!category)return;if(!category.open)return open(category.name+' · 即将开放','<p>目前可以用搪瓷系列开始创作。</p>'+V.btn('继续浏览','close','secondary full'));}state.ui.category=id;changed(0);return window.FilmHome.sync(context());
case 'film-select':if(M.getItem(id).category!==selected().category)return;selectItem(id);return window.FilmHome.sync(context(),Number(el.dataset.offset)||0);
case 'object-evidence':{
 const frame=$('#dossier-image');if(!frame)return;
 const zoom=el.getAttribute('aria-pressed')!=='true';
 frame.querySelector('img').hidden=zoom;frame.querySelector('svg').toggleAttribute('hidden',!zoom);
 el.setAttribute('aria-pressed',String(zoom));
 const caption=frame.closest('figure').querySelector('.photo-caption');
 if(!caption.dataset.original)caption.dataset.original=caption.textContent;
 caption.textContent=zoom?'原照局部':caption.dataset.original;
 el.textContent=zoom?'看全貌':frame.querySelector('svg').getAttribute('aria-label');return;
}
case 'detail':if(page==='discover')window.Explore.select(state,selected().id);detailParent=page;state.ui.detailParent=page;scrolls.detail=0;return navigate('detail');
case 'favorite':{const item=selected();state.favorites=state.favorites.includes(item.id)?state.favorites.filter(x=>x!==item.id):[...state.favorites,item.id];changed(0);return page==='discover'?window.FilmHome.sync(context()):render();}
case 'choose':if(window.Explore){const obj=window.Explore.items.find(o=>o.legacyItemId===id);if(obj)window.Explore.select(state,obj.id);}if(M.getItem(id).category!=='enamel')return open('类别待开放',V.statePanel({state:'unavailable',title:'该类别即将开放',description:'目前可选搪瓷。'}));state.ui.coView='explore';selectItem(id);return navigate('discover');
case 'browse':return open('全部物件',`${V.catalog()}`,'browse');
case 'search':return showSearch();
case 'clear-search':case 'example':state.ui.query=action==='example'?el.dataset.query:'';$('#search-query').value=state.ui.query;window.SearchAssistant.local(state.ui.query);changed();$('#search-query').focus();if(action==='example')void window.SearchAssistant.run();return;
case 'start':return start();
case 'choose-start':return open('用什么开始？',V.startWays(selected(),'start-method'));
case 'start-method':return start(selected().id,id);
case 'upload':{
 if(page!=='editor'||draft()?.category!=='enamel')return showUpload(false);
 window.Inspiration.prepare(draft());M.edit(draft(),{inputTab:'image'});state.ui.inputsFromEditor=true;
 window.Inspiration.reset(true);return navigate('inspiration');
}
case 'pick-file':if(!$('#image-consent').checked)return dialogError('请先确认图像使用权。');$('#image-file').value='';$('#image-file').click();return;
case 'search-voice':return window.SearchAssistant.voice();
case 'search-ai':return window.SearchAssistant.run();
case 'search-stop':return window.SearchAssistant.stop();
case 'pattern-flip':if(['flipX','flipY'].includes(id))return update({[id]:!draft()[id]});return;
case 'pattern-layout':return update({patternLayout:id});
case 'pattern-ink':{
 const colors={blue:'#355b68',red:'#a85545',graphite:'#252925'};
 const patch=colors[id]?{patternInk:'custom',inkColor:colors[id]}:{patternInk:id};
 return applyInk(window.PatternTexture.wholeInkPatch(draft(),patch));
}
case 'versions':return open('我的版本',V.versions(draft()),'versions');
case 'version-save':{const name=$('#version-name').value.trim()||'版本 '+(draft().versions.length+1);if(draft().versions.length>=12)return dialogError('最多保存12个版本，请先删除一个。');const res=await atomic(s=>window.PatternEditor.saveVersion(s.drafts.find(d=>d.id===s.ui.activeDraftId),name));if(res){render();open('我的版本',V.versions(draft()),'versions');toast('版本已存到本机');}return;}
case 'version-restore':{const res=await atomic(s=>window.PatternEditor.restoreVersion(s.drafts.find(d=>d.id===s.ui.activeDraftId),id));if(res){await S.preload(state);close();render();toast('已切换版本，可撤销这次切换');}return;}
case 'version-delete':return open('删除这个关键版本？','<p>只删除此版本记录，当前草稿与其他版本保留。</p>'+V.btn('确认删除版本','version-delete-confirm','danger full',`data-id="${id}"`)+V.btn('保留版本','close','secondary full'));
case 'version-delete-confirm':{const res=await atomic(s=>window.PatternEditor.removeVersion(s.drafts.find(d=>d.id===s.ui.activeDraftId),id));if(res){render();open('我的版本',V.versions(draft()),'versions');}return;}
case 'texture-export':{try{const result=await window.PatternTexture.export(M.copy(draft()));const url=URL.createObjectURL(result.blob),a=document.createElement('a');a.href=url;a.download='物之再生-纹样贴图-1024.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);toast('已导出透明PNG纹样；不是工厂生产文件');}catch(e){open('贴图暂未导出',V.statePanel({state:'error',title:'请恢复素材后重试',description:e.message}));}return;}
case 'tool':tool=id;return render();
case 'color':return update({color:id});
case 'editor-glaze':return update({cupMaterial:{color:id,finish:'gloss'}});
case 'canvas':return update({canvas:id});
case 'replace':{
 const d=draft();
 if(d.imageId||d.itemId!==id){M.replace(d,id);changed();}
 window.Workbench.restoreImagePanel();render();window.Workbench.focusEditor();return;
}
case 'undo':M.undo(draft());changed(0);return render();
case 'redo':M.redo(draft());changed(0);return render();
case 'reset':return update(window.PatternEditor?.defaults||{scale:100,x:0,y:0,rotation:0});
case 'swap':return open('换一件物品，继续创作',`<p>同类更换会保留构图并支持撤销。跨类别时先保存当前草稿，再建立新草稿。</p>${V.catalog('swap')}`,'swap');
case 'swap-select':if(M.getItem(id).category!=='enamel')return dialogError('该类别即将开放，请继续使用搪瓷纹样。');if(M.getItem(id).category===draft().category){M.replace(draft(),id);changed();close();render();return;}{const res=await atomic(s=>M.addDraft(s,id));if(res){close();tool='compose';render();toast('原草稿已保留，新画布已建立');}}return;
case 'exit':return open('暂时结束创作？',`<p>你可以保存进度，下次从“我的 · 草稿”继续。</p>${V.btn('保存草稿并退出','save-exit','primary full')}${V.btn('继续创作','close','secondary full')}${V.btn('放弃本次草稿','discard','text danger full')}`,'exit');
case 'save-exit':if(await save()){state.ui.filter='drafts';navigate('mine');}return;
case 'discard':return confirmDelete('drafts',draft().id);
case 'preview':return open('数字作品预览',`<div class="large-preview">${V.art(draft())}</div><p class="notice">这是视觉设计预览。实体制作仍需授权、设计与工艺审核。</p>${V.btn('返回调整','close','primary full')}`,'preview');
case 'finish':return showFinish();
case 'edit-inspiration':state.ui.inputsFromEditor=true;navigate('inspiration');return window.Inspiration.choose();
case 'manage-photo-picks':
 M.edit(draft(),{inputTab:'motif'});state.ui.inputsFromEditor=true;
 window.Inspiration.reset(true);return navigate('inspiration');
case 'resample-photo':{
 const d=draft(),m=M.motifs.find(m=>m.id===id&&m.sourceObjectId===d.sourceObjectId&&m.origin==='photo-study');
 if(!m)return;
 M.edit(d,{inputTab:'motif',pickedPhotoMotif:id,photoSelection:[{id}]});state.ui.inputsFromEditor=true;
 window.Inspiration.reset(true);return navigate('inspiration');
}
case 'finish-preview':close();return window.EditorObject.handle('editor-surface',{dataset:{id:'object'}});
case 'complete':{const name=$('#work-title').value.trim();if(!name){dialogError('请为作品取个名字。');$('#work-title').focus();return;}M.edit(draft(),{title:name,idea:$('#work-idea').value});let preview=null;const design=M.copy(draft());if(design.category==='enamel'){busy=true;$('.app').dataset.busy='true';clearTimeout(saveTimer);dialogError('正在生成器物预览并保存…');try{preview=await window.WorkResult.capture(design);}catch(e){dialogError('未保存：'+e.message+'。请重试，草稿仍保留。');return;}finally{busy=false;$('.app').dataset.busy='false';}}const res=await atomic(s=>{const d=s.drafts.find(x=>x.id===design.id);if(preview)window.WorkResult.apply(d,preview);return M.complete(s,design.id,name);},preview?[preview.asset]:[]);if(res){resultId=res.value.id;resultParent='mine';navigate('result');toast('作品与成长记录已保存');}return;}
case 'resume':{const d=state.drafts.find(x=>x.id===id);if(!d)return open('草稿无法恢复','<p>记录不存在，请返回我的刷新列表。</p>'+V.btn('返回我的','mine','primary'));if(!window.Management.valid(d))return open('草稿参数无法恢复','<p>原草稿已保留。可以建立修复副本，重置无法读取的编辑参数，保留来源与素材引用。</p>'+V.btn('建立修复副本','repair-record','primary',`data-kind="drafts" data-id="${id}"`)+V.btn('返回','close','text'));state.ui.activeDraftId=id;state.ui.inputsFromEditor=false;const resumeAt=d.lastWorkspace||(d.inputStage?'inspiration':'editor');parent=resumeAt==='editor'?'mine':'inspiration';state.ui.editorParent=parent;state.ui.inspirationParent='mine';tool='compose';window.Inspiration?.reset();navigate(resumeAt==='inspiration'?'inspiration':'editor');return;}
case 'view-work':dayReturn=page==='points'&&modal==='growth-day'?{...openedDay,workId:id}:null;resultId=id;resultParent=page==='points'?'points':'mine';return navigate('result');
case 'edit-work':{const res=await atomic(s=>M.resumeWork(s,id));if(res){parent='result';state.ui.editorParent='result';tool='compose';navigate('editor');}return;}
case 'toggle-work-selection':return toggleWorkSelection();
case 'delete-selected-works':return confirmWorkSelection();
case 'confirm-work-selection':{
 if(modal!=='work-batch-delete'||!selectedWorkIds?.size)return;
 const ids=[...selectedWorkIds];
 const res=await atomic(s=>{for(const workId of ids)M.remove(s,'works',workId);});
 if(res){selectedWorkIds=null;close();render();($('#header [data-action="toggle-work-selection"]')||$('.my-tabs [aria-pressed="true"]'))?.focus({preventScroll:true});toast(`已删除 ${ids.length} 件作品`);}
 return;
}
case 'filter':state.ui.filter=id;changed(0);return render();
case 'delete':return confirmDelete(el.dataset.kind,id);
case 'confirm-delete':{const kind=el.dataset.kind,wasCurrent=kind==='drafts'&&id===state.ui.activeDraftId;const res=await atomic(s=>M.remove(s,kind,id));if(res){close();if(wasCurrent)navigate('mine');else render();toast('已删除，其他记录已保留');}return;}
case 'submit':return open('参加演示投稿',`<p>本次操作只在当前浏览器建立投稿记录与作品快照，不向馆方传输。</p><p class="notice">正式展示、署名、改编或实体化须另行确认授权范围，并完成馆方与工艺审核。</p><label class="check-row"><input type="checkbox" id="submission-consent"><span>我确认图像使用权，并同意在本机保存这次演示投稿快照；这不构成对外发布授权。</span></label>${V.btn('确认演示投稿','confirm-submit','primary full',`data-id="${id}"`)}${V.btn('暂不投稿','close','text full')}`,'submit');
case 'confirm-submit':if(!$('#submission-consent').checked)return dialogError('请先阅读并确认演示授权说明。');{const res=await atomic(s=>M.submit(s,id,true));if(res){render();showSubmission(res.value.id);toast('演示投稿已保存，未发送馆方');}}return;
case 'submission':return showSubmission(id);
case 'rules':return open('演示积分规则',`<p>积分仅用于演示成长记录，尚未形成馆方规则。</p>${['complete','submit'].map(k=>state.pointsPolicy[k]).map(r=>`<div class="rule-row"><span>${r.name}</span><strong>+${r.points}</strong></div>`).join('')}<p class="notice">每个设计首次保存和首次主题演示投稿分别记一次。重复保存、编辑副本、重复投稿不重复发分；删除记录不重置已计分事件。点赞、收藏和模拟公开不计分。</p>${V.btn('明白了','close','primary full')}`);
case 'rights':return open('文化权益 · 待馆方确认',`<p>创作记录是参与过程的留存。未来的署名展示、文化活动或实体化机会，需由馆方明确规则和授权。</p><p class="notice">真实奖励、现金激励和馆方权益均待确认。当前没有已开放的兑换权益，也不以本地演示积分承诺任何奖品、资格或官方入选。</p>${V.btn('返回积分','close','primary full')}`);
case 'about':return open('关于物之再生',`<p>面向上海工业博物馆语境的工业文化共创设计研究，以老搪瓷为首个示范，探索从文化记忆到数字作品的转化。</p><p>首页展示开放授权的同类实物照片，详情可查来源与许可。共创可取用实物照片中标出的纹样局部；上海工业博物馆及中华珐琅厂的馆藏影像待补。</p><p class="notice">本地可操作原型：草稿、作品、图片、积分和投稿保存在当前浏览器，不进行云同步或实际馆方审核。正式文化权益尚未开放。</p><p>本轮为可持续调整的阶段性方案。共创之外的资料征集和价值评定另行设计。</p>${V.btn('查看服务接入状态','foundation-services','text full')}${V.btn('继续体验','close','primary full')}`);
}}
document.addEventListener('click',e=>{const el=e.target.closest('[data-action]');if(!el)return;if(suppressClick&&el.closest('#object-stage')){e.preventDefault();return;}handle(el.dataset.action,el).catch(report);});
document.addEventListener('input',e=>{if(!loaded||busy)return;const el=e.target;if(el.id==='search-query'){state.ui.query=el.value;window.SearchAssistant.local(el.value);changed();}if(el.id==='work-title'||el.id==='work-idea'){M.edit(draft(),{[el.id==='work-title'?'title':'idea']:el.value});changed();}if(el.dataset.field){const d=draft();if(!rangeStart)rangeStart=M.snapshot(d);const candidate={...d,[el.dataset.field]:Number(el.value)};previewUpdate(candidate);}});
document.addEventListener('change',e=>{
 if(!selectedWorkIds||busy||$('#dialog').open)return;
 const input=e.target;
 if(input.id==='works-select-all'){
  selectedWorkIds=new Set(input.checked?state.works.map(w=>w.id):[]);
  for(const pick of document.querySelectorAll('[data-work-pick]'))pick.checked=input.checked;
 }else if(input.matches('[data-work-pick]')){
  if(input.checked)selectedWorkIds.add(input.value);else selectedWorkIds.delete(input.value);
 }else return;
 syncWorkSelection();
});
document.addEventListener('change',e=>{if(e.target.dataset.field){M.edit(draft(),{[e.target.dataset.field]:Number(e.target.value)});rangeStart=null;changed();render();}});
document.addEventListener('pointerdown',e=>{if(busy||!loaded)return;if(swipe&&e.pointerId!==swipe.id){swipe=null;window.FilmHome.layout(context());return;}if(e.isPrimary===false||e.button>0)return;if(e.target.closest('#work-preview')){drag={startX:e.clientX,startY:e.clientY,draft:M.snapshot(draft()),target:e.target.closest('#work-preview'),next:null};drag.target.setPointerCapture(e.pointerId);e.preventDefault();}else if(e.target.closest('#object-stage')){swipe={x:e.clientX,y:e.clientY,time:Date.now(),id:e.pointerId,target:e.target.closest('#object-stage'),axis:null,moved:false};window.FilmHome.begin?.();}});
document.addEventListener('pointermove',e=>{if(swipe&&page==='discover'&&e.pointerId===swipe.id){const dx=e.clientX-swipe.x,dy=e.clientY-swipe.y;if(!swipe.axis&&Math.max(Math.abs(dx),Math.abs(dy))>6)swipe.axis=Math.abs(dx)>Math.abs(dy)*1.2?'x':'y';if(swipe.axis==='x'){swipe.moved=true;if(!swipe.target.hasPointerCapture(swipe.id))swipe.target.setPointerCapture(swipe.id);window.FilmHome.layout(context(),dx);}}if(!drag)return;const rect=drag.target.getBoundingClientRect(),factor=340/Math.max(200,rect.width);drag.next={...draft(),x:Math.max(-60,Math.min(60,Math.round(drag.draft.x+(e.clientX-drag.startX)*factor))),y:Math.max(-60,Math.min(60,Math.round(drag.draft.y+(e.clientY-drag.startY)*factor)))};previewUpdate(drag.next);});
document.addEventListener('pointerup',e=>{if(drag){if(drag.next){M.edit(draft(),{x:drag.next.x,y:drag.next.y});changed();}drag=null;render();}if(swipe&&e.pointerId===swipe.id){if(swipe.moved){suppressClick=true;setTimeout(()=>suppressClick=false,250);}const dx=e.clientX-swipe.x,dy=e.clientY-swipe.y;if(swipe.axis==='x'&&(Math.abs(dx)>35||(Math.abs(dx)>16&&Math.abs(dx)/Math.max(1,Date.now()-swipe.time)>.35))&&Math.abs(dx)>Math.abs(dy)*1.4){cycle(dx<0?1:-1);}else window.FilmHome.layout(context());swipe=null;}});
document.addEventListener('pointercancel',()=>{drag=null;swipe=null;if(loaded&&page==='editor'&&!window.EditorObject.enabled(draft()))render();if(loaded&&page==='discover')window.FilmHome.layout(context());});
$('#dialog').addEventListener('cancel',e=>{window.Inspiration?.cancelUpload();if(busy){e.preventDefault();return;}if(history.state?.generationSheet===modal){e.preventDefault();close();return;}modal='';window.SearchAssistant?.cancel();});
async function compress(file){if(!['image/jpeg','image/png','image/webp'].includes(file.type))throw Error('请选择 JPG、PNG 或 WebP 图片。');if(file.size>12*1024*1024)throw Error('图片超过 12 MB，请换一张较小的图片。');const url=URL.createObjectURL(file);try{const image=new Image();image.src=url;try{await image.decode();}catch{throw Error('这张图片无法解码，可能已损坏。请重新选择 JPG、PNG 或 WebP。');}if(!image.width||!image.height)throw Error('无法读取这张图片，请重新选择。');const ratio=Math.min(1,1400/Math.max(image.width,image.height));const canvas=document.createElement('canvas');canvas.width=Math.round(image.width*ratio);canvas.height=Math.round(image.height*ratio);canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);return await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('无法处理图片，请重试。')),'image/png'));}finally{URL.revokeObjectURL(url);}}
$('#image-file').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;const home=uploadFromHome;busy=true;$('.app').dataset.busy='true';dialogError('正在读取图片…');try{const blob=await compress(file);const imageId=M.uid('image');busy=false;const res=await atomic(s=>{const d=home?M.addDraft(s,selected().id):s.drafts.find(x=>x.id===s.ui.activeDraftId);M.edit(d,{imageId,imageName:file.name,...(d.inputStage?{inspirationImageId:imageId,inputImageName:file.name,primaryInput:'image'}:{})});return d;},[{id:imageId,blob}]);if(res){
 if(!home&&page==='editor'){
  close();window.Workbench.restoreImagePanel();render();window.Workbench.focusEditor();
 }else{
  parent=home?'discover':parent;state.ui.editorParent=parent;tool='compose';navigate('editor');
 }
}}catch(err){dialogError(err.message||'图片读取失败，请重新选择。');}finally{busy=false;$('.app').dataset.busy='false';}});
window.addEventListener('popstate',event=>{
 if(modal==='generation-consent'||modal==='recolour-consent')close(false);
 const sheet=event.state?.generationSheet;
 if(sheet&&page==='inspiration'&&location.hash==='#inspiration'&&event.state.draftId===draft()?.id){
  window.Inspiration.confirmAI(sheet==='recolour-consent');
 }
});
window.addEventListener('hashchange',async()=>{if(location.hash.startsWith('#ai-invite=')){await finishInvitation(window.AIConnection.receiveInvitation());return;}if(!loaded||location.hash==='#'+routeString())return;const oldFile=page==='galleryDetail'?state.ui.galleryId:null,oldLeaf=folioLeaf;if(page==='inspiration'&&!await window.Inspiration.leave()){history.replaceState({},'','#inspiration');return;}if(['editor','cup'].includes(page)&&!await save()){history.replaceState({},'','#'+page);return;}close();scrolls[page]=$('#main').scrollTop;if(page==='gallery')state.ui.gallery.scroll=$('#main').scrollTop;readRoute();render();$('#main').scrollTop=page==='gallery'?state.ui.gallery.scroll:page==='discover'?0:(scrolls[page]||0);if(oldFile)restoreFileFocus(oldFile,oldLeaf);});
function readRoute(){const [route,id,leaf]=location.hash.slice(1).split('/');folioLeaf=route==='gallery'&&id&&window.GalleryFolio?.hasLeaf(leaf)?leaf:'';page=['discover','detail','editor','inspiration','cup','result','points','mine','gallery'].includes(route)?route:'discover';if(['editor','inspiration','cup'].includes(page)&&!draft())page='mine';if(page==='cup'&&draft()?.category!=='enamel')page='editor';if(route==='gallery'&&id){page='galleryDetail';state.ui.galleryParent=history.state?.folioParent||'gallery';state.ui.galleryId=decodeURIComponent(id);}if(route==='discover'&&id==='gallery')page='gallery';state.ui.coView='explore';if(['editor','cup'].includes(page)){parent=state.ui.editorParent||'discover';if(parent==='result')resultId=state.ui.resultId||null;}if(page==='galleryDetail'&&state.ui.galleryParent==='result')resultId=state.ui.resultId||null;if(page==='result')resultId=decodeURIComponent(id||state.ui.resultId||'');state.ui.route=routeString();if(resultId)state.ui.resultId=resultId;}
document.addEventListener('visibilitychange',()=>{if(document.hidden&&dirty)save();});window.addEventListener('pagehide',()=>{if(dirty)save();});window.addEventListener('beforeunload',e=>{if(dirty||busy){e.preventDefault();e.returnValue='';}});
async function boot(){try{state=await S.load();await S.preload(state);loaded=true;clearError();readRoute();if(page==='discover')state.ui.category='enamel';render();if(page==='gallery')$('#main').scrollTop=state.ui.gallery.scroll;if(state.legacyImported&&!state.ui.legacyNotice){state.ui.legacyNotice=true;changed();toast('已导入旧版作品，旧数据仍保留');}}catch(e){loaded=false;report(e);$('#main').innerHTML='<div class="loading"><strong>暂时无法打开档案</strong><p>为保护原有记录，已暂停写入。请保留此页面，恢复浏览器存储权限后点击上方“重试”。</p></div>';}}
window.addEventListener('resize',()=>{if(loaded&&page==='discover')window.FilmHome.layout(context());});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&selectedWorkIds&&!$('#dialog').open&&!busy){e.preventDefault();toggleWorkSelection();return;}if((page==='cup'||page==='galleryDetail')&&e.key==='Escape'&&!$('#dialog').open){e.preventDefault();back();return;}if(page==='discover'&&e.target.closest('.film-gallery')&&['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();cycle(e.key==='ArrowRight'?1:-1);}});
window.CupView?.init({draft,changed,page:()=>page,render,toEditor:back});
window.EditorObject?.init({draft,changed,render,history:()=>{const d=draft();const u=$('[data-action=undo]'),r=$('[data-action=redo]');if(u)u.disabled=!d.past.length;if(r)r.disabled=!d.future.length;}});
window.Inspiration?.init({draft,changed,render,atomic,save,compress,open,close,dialogError,toast,managePicks:()=>handle('manage-photo-picks'),page:()=>page,toEditor:()=>{if(state.ui.inputsFromEditor)window.Workbench.restoreImagePanel();parent=state.ui.inputsFromEditor?(state.ui.editorParent||'mine'):'inspiration';state.ui.inputsFromEditor=false;state.ui.editorParent=parent;tool='compose';navigate('editor');}});
window.Workbench?.init({draft,update,applyInk,render,atomic,open,close,dialogError,previewUpdate,changed,toast});
async function finishInvitation(promise){
 const invitation=await promise;if(!loaded||!invitation)return;
 if(invitation.ok){await window.BailianPatterns.connect();render();toast(invitation.remembered?'测试邀请已连接，这台设备下次可直接使用':'AI 已连接；浏览器未允许记住，下次请重开邀请链接');}
 else {await handle('ai-connection');const note=$('#ai-connect-note');if(note)note.textContent=invitation.message;}
}
boot().then(()=>finishInvitation(window.AIConnection.ready));
})();
