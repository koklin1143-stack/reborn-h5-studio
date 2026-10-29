/* Application coordinator: routes, atomic actions, editor gestures and recovery. */
(() => {
'use strict';
const M=window.Studio,S=window.LocalStore,V=window.Views,$=s=>document.querySelector(s);
let state,page='discover',tool='compose',resultId=null,saveLabel='已保存到本机',error='',loaded=false,busy=false,dirty=false,revision=0,saveTimer,toastTimer,dialogTrigger,modal='',parent='discover',detailParent='discover',resultParent='mine',uploadFromHome=false,scrolls={},rangeStart=null,drag=null,swipe=null,suppressClick=false;
const draft=()=>state?.drafts.find(d=>d.id===state.ui.activeDraftId);
const selected=()=>{const group=M.items.filter(i=>i.category===state.ui.category);return group.find(i=>i.id===state.ui.positions[state.ui.category])||group[0]||M.items[0];};
const context=()=>({s:state,page,tool,item:selected(),d:draft(),w:state.works.find(w=>w.id===resultId),saveLabel});
function toast(message){$('#toast').textContent=message;$('#toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').hidden=true,3500);}
function status(label){saveLabel=label;if($('#save-status'))$('#save-status').textContent=label;}
function report(e){error=e?.message||String(e);if(!error.includes('本地')&&!error.includes('浏览器'))error='未能保存到本机。请保留页面，释放空间或恢复浏览器存储权限后重试。';$('#storage-banner span').textContent=error;$('#storage-banner').hidden=false;status('保存失败 · 请重试');if($('#dialog').open)dialogError(error);}
function clearError(){error='';$('#storage-banner').hidden=true;}
async function save(){clearTimeout(saveTimer);if(!loaded)return false;const rev=revision;status('正在保存…');try{await S.commit(state);if(rev===revision){dirty=false;status('已保存到本机');clearError();}return true;}catch(e){report(e);return false;}}
function changed(delay=250){revision++;dirty=true;status('正在保存…');clearTimeout(saveTimer);if(delay===0)save();else saveTimer=setTimeout(save,delay);}
async function atomic(action){if(busy)return null;busy=true;$('.app').dataset.busy='true';clearTimeout(saveTimer);const candidate=M.copy(state);try{const value=action(candidate);await S.commit(candidate);state=candidate;revision++;dirty=false;status('已保存到本机');clearError();return {value};}catch(e){report(e);return null;}finally{busy=false;$('.app').dataset.busy='false';}}
function render(){if(!loaded)return;window.Frame3D?.detach();window.FilmOptics?.reset();$('.app').classList.toggle('is-editor',page==='editor');$('#header').innerHTML=V.header(context());$('#main').className=page==='discover'?'home-main':page==='editor'?'editor-main':'';$('#main').innerHTML=({discover:V.home,detail:V.detail,editor:V.editor,result:V.result,points:V.points,mine:V.mine}[page]||V.home)(context());$('#nav').hidden=page==='editor';$('#nav').innerHTML=V.nav(['discover','points','mine'].includes(page)?page:page==='result'?'mine':'discover');if(page==='discover'){window.FilmHome?.layout(context());}if(page==='discover')$('.category-scroll [aria-pressed=true]')?.scrollIntoView({block:'nearest',inline:'nearest'});if(draft()?.imageId&&!S.image(draft().imageId)&&page==='editor')toast('此草稿的图片未能恢复，可在“纹样”中重新上传。');}
function routeString(p=page){return p==='result'?'result/'+encodeURIComponent(resultId||''):p;}
function navigate(p,{replace=false,skipSave=false}={}){if(busy)return;close();scrolls[page]=$('#main').scrollTop;page=p;state.ui.route=routeString();if(!skipSave)changed(0);const hash='#'+routeString();if(location.hash!==hash){if(replace)location.replace(hash);else location.hash=hash;}render();$('#main').scrollTop=scrolls[page]||0;$('#main').focus({preventScroll:true});}
async function back(){if(page==='editor'){if(!await save())return;return navigate(parent);}if(page==='detail')return navigate(detailParent);if(page==='result')return navigate(resultParent);navigate('discover');}
function selectItem(id){const i=M.getItem(id);state.ui.category=i.category;state.ui.positions[i.category]=i.id;changed(0);}
function cycle(delta){const i=selected(),g=M.items.filter(item=>item.category===i.category);if(g.length<2){window.FilmHome.layout(context());return;}selectItem(g[(g.indexOf(i)+delta+g.length)%g.length].id);window.FilmHome.sync(context(),delta);}
function open(title,body,type='generic'){if(!$('#dialog').open)dialogTrigger=document.activeElement;modal=type;$('#dialog').innerHTML=`<div class="dialog-head"><h2 id="dialog-title">${title}</h2>${V.ib('close','close','关闭')}</div><div class="dialog-body">${body}<p class="dialog-error" role="alert" hidden></p></div>`;if(!$('#dialog').open)$('#dialog').showModal();}
function close(){if($('#dialog').open)$('#dialog').close();modal='';if(dialogTrigger?.isConnected)dialogTrigger.focus({preventScroll:true});}
function dialogError(msg){const el=$('.dialog-error');if(el){el.textContent=msg;el.hidden=false;}}
function showSearch(){open('问一问，找件喜欢的物品',`<p>在当前素材库内，按名称、颜色与图案关键词查找。</p><label class="field"><span>描述你想找的物件</span><div class="search-top"><input class="input" id="search-query" placeholder="例如：带牡丹的搪瓷盘" value="${V.esc(state.ui.query)}">${V.ib('close','clear-search','清空搜索')}</div></label><div class="search-examples">${['带牡丹的搪瓷盘','蓝色的鸟','喜糖包装'].map(q=>V.btn(q,'example','',`data-query="${q}"`)).join('')}</div><div id="search-results">${V.searchResults(state.ui.query)}</div><p class="footer-note">本地关键词匹配，未接入 AI 服务。</p>`,'search');}
function showUpload(home=false){uploadFromHome=home;open('用自己的图像共创',`<p>选择你拥有合法使用权的图像，放进当前${M.category(home?selected().category:draft().category).name}画布。</p><p class="notice">支持 JPG、PNG、WebP，最大 12 MB。图片仅保存在本机，不上传服务器。</p><label class="check-row"><input type="checkbox" id="image-consent"><span>我确认拥有这张图像的合法使用权；后续投稿授权将单独确认。</span></label>${V.btn('选择图像','pick-file','primary full')}${V.btn('暂时不用','close','text full')}`,'upload');}
async function start(itemId=selected().id,own=false){const source=page==='detail'?'detail':page==='mine'?'mine':'discover';const res=await atomic(s=>M.addDraft(s,itemId));if(!res)return false;parent=source;tool='compose';navigate('editor');if(own)showUpload(false);return true;}
function update(changes){const d=draft();if(!d)return;M.edit(d,changes);changed();render();}
function previewUpdate(next){$('#work-preview').innerHTML=V.art(next);for(const key of ['scale','rotation','x','y']){const output=$(`[data-output="${key}"]`);if(output)output.textContent=next[key]+(key==='scale'?'%':key==='rotation'?'°':'');}}
function showFinish(){const d=draft();open('保存这次创作',`<label class="field"><span>作品名称 <small>必填 · 最多 24 字</small></span><input class="input" id="work-title" maxlength="24" value="${V.esc(d.title)}" placeholder="给这件作品取个名字"></label><label class="field"><span>创作想法 <small>选填</small></span><textarea class="input" id="work-idea" maxlength="180" rows="3" placeholder="想留下什么样的记忆？">${V.esc(d.idea)}</textarea></label><p>保存后可在“我的”中查看或继续编辑，投稿由你另外决定。</p>${V.btn('保存到我的作品','complete','primary full')}${V.btn('继续调整','close','text full')}`,'finish');}
function showSubmission(id){const sub=state.submissions.find(x=>x.id===id);if(!sub)return;open('演示投稿记录',`<span class="state-badge">${sub.status}</span><div class="large-preview">${V.art(sub.snapshot)}</div><h3>${V.esc(sub.snapshot.title)}</h3><p>${V.date(sub.createdAt)} · 记录 ${V.esc(sub.id.slice(-8))}</p><p class="notice">已保留本地作品快照。没有发送至馆方，也没有进行审核、入选或生产。</p><p>继续修改作品会新建副本，保留本次投稿的原始版本。</p>${V.btn('关闭记录','close','primary full')}${V.btn('删除这条演示记录','delete','text danger full',`data-kind="submissions" data-id="${sub.id}"`)}`,'submission');}
function confirmDelete(kind,id){const record=state[kind]?.find(x=>x.id===id);if(!record)return;const title=record.title||record.snapshot?.title||'未命名草稿';open('确认删除'+({drafts:'草稿',works:'作品',submissions:'演示投稿记录'}[kind]),`<p>将从此浏览器删除“${V.esc(title)}”。此操作无法撤销。</p><p>其他草稿、作品与成长记录会保留。${kind==='works'&&state.submissions.some(x=>x.workId===id)?'已留存的演示投稿快照也会保留。':''}</p>${V.btn('确认删除','confirm-delete','danger full',`data-kind="${kind}" data-id="${id}"`)}${V.btn('保留，返回','close','secondary full')}`,'delete');}
async function handle(action,el){if(busy&&action!=='close')return;const id=el?.dataset.id;
switch(action){
case 'navigate':return navigate(el.dataset.page);
case 'home':return navigate('discover');
case 'mine':state.ui.filter='works';return navigate('mine');
case 'back':return back();
case 'close':return close();
case 'retry':if(!loaded)return boot();if(await save()){toast('本地记录已保存');render();}return;
case 'prev':return cycle(-1);
case 'next':return cycle(1);
case 'category':state.ui.category=id;changed(0);return window.FilmHome.sync(context());
case 'film-select':if(M.getItem(id).category!==selected().category)return;selectItem(id);return window.FilmHome.sync(context(),Number(el.dataset.offset)||0);
case 'detail':detailParent=page;return navigate('detail');
case 'favorite':{const item=selected();state.favorites=state.favorites.includes(item.id)?state.favorites.filter(x=>x!==item.id):[...state.favorites,item.id];changed(0);return page==='discover'?window.FilmHome.sync(context()):render();}
case 'choose':selectItem(id);return navigate('discover');
case 'browse':return open('全部物件',`<p>四类示意画布，共 ${M.items.length} 件创作起点。选择后回到物件主舞台。</p>${V.catalog()}`,'browse');
case 'search':return showSearch();
case 'clear-search':case 'example':state.ui.query=action==='example'?el.dataset.query:'';$('#search-query').value=state.ui.query;$('#search-results').innerHTML=V.searchResults(state.ui.query);changed();$('#search-query').focus();return;
case 'start':return start();
case 'upload-home':return showUpload(true);
case 'upload':return showUpload(false);
case 'pick-file':if(!$('#image-consent').checked)return dialogError('请先确认图像使用权。');$('#image-file').value='';$('#image-file').click();return;
case 'tool':tool=id;return render();
case 'color':return update({color:id});
case 'canvas':return update({canvas:id});
case 'replace':M.replace(draft(),id);changed();return render();
case 'undo':M.undo(draft());changed();return render();
case 'redo':M.redo(draft());changed();return render();
case 'reset':return update({scale:100,x:0,y:0,rotation:0});
case 'swap':return open('换一件物品，继续创作',`<p>同类更换会保留构图并支持撤销。跨类别时先保存当前草稿，再建立新草稿。</p>${V.catalog('swap')}`,'swap');
case 'swap-select':if(M.getItem(id).category===draft().category){M.replace(draft(),id);changed();close();render();return;}{const res=await atomic(s=>M.addDraft(s,id));if(res){close();tool='compose';render();toast('原草稿已保留，新画布已建立');}}return;
case 'exit':return open('暂时结束创作？',`<p>你可以保存进度，下次从“我的 · 草稿”继续。</p>${V.btn('保存草稿并退出','save-exit','primary full')}${V.btn('继续创作','close','secondary full')}${V.btn('放弃本次草稿','discard','text danger full')}`,'exit');
case 'save-exit':if(await save())navigate(parent);return;
case 'discard':return confirmDelete('drafts',draft().id);
case 'preview':return open('数字作品预览',`<div class="large-preview">${V.art(draft())}</div><p class="notice">这是视觉设计预览。实体制作仍需授权、设计与工艺审核。</p>${V.btn('返回调整','close','primary full')}`,'preview');
case 'finish':return showFinish();
case 'complete':{const name=$('#work-title').value.trim();if(!name){dialogError('请为作品取个名字。');$('#work-title').focus();return;}M.edit(draft(),{title:name,idea:$('#work-idea').value});const res=await atomic(s=>M.complete(s,s.ui.activeDraftId,name));if(res){resultId=res.value.id;resultParent='mine';navigate('result');toast('作品与成长记录已保存');}return;}
case 'resume':{const d=state.drafts.find(x=>x.id===id);if(!d)return;state.ui.activeDraftId=id;parent='mine';tool='compose';navigate('editor');return;}
case 'view-work':resultId=id;resultParent='mine';return navigate('result');
case 'edit-work':{const res=await atomic(s=>M.resumeWork(s,id));if(res){parent='result';tool='compose';navigate('editor');}return;}
case 'filter':state.ui.filter=id;changed(0);return render();
case 'delete':return confirmDelete(el.dataset.kind,id);
case 'confirm-delete':{const kind=el.dataset.kind,wasCurrent=kind==='drafts'&&id===state.ui.activeDraftId;const res=await atomic(s=>M.remove(s,kind,id));if(res){close();if(wasCurrent)navigate(parent==='result'?'mine':parent);else render();toast('已删除，其他记录已保留');}return;}
case 'submit':return open('参加演示投稿',`<p>本次操作只在当前浏览器建立投稿记录与作品快照，不向馆方传输。</p><p class="notice">正式展示、署名、改编或实体化须另行确认授权范围，并完成馆方与工艺审核。</p><label class="check-row"><input type="checkbox" id="submission-consent"><span>我确认图像使用权，并同意在本机保存这次演示投稿快照；这不构成对外发布授权。</span></label>${V.btn('确认演示投稿','confirm-submit','primary full',`data-id="${id}"`)}${V.btn('暂不投稿','close','text full')}`,'submit');
case 'confirm-submit':if(!$('#submission-consent').checked)return dialogError('请先阅读并确认演示授权说明。');{const res=await atomic(s=>M.submit(s,id,true));if(res){render();showSubmission(res.value.id);toast('演示投稿已保存，未发送馆方');}}return;
case 'submission':return showSubmission(id);
case 'rules':return open('演示积分规则',`<p>积分仅用于演示成长记录，尚未形成馆方规则。</p>${Object.values(M.rules).map(r=>`<div class="rule-row"><span>${r.name}</span><strong>+${r.points}</strong></div>`).join('')}<p class="notice">每个设计首次完成和首次投稿分别记一次。重复保存、重复投稿不重复发分；删除记录不重置已计分事件。</p>${V.btn('明白了','close','primary full')}`);
case 'rights':return open('文化权益 · 待馆方确认',`<p>创作记录是参与过程的留存。未来的署名展示、文化活动或实体化机会，需由馆方明确规则和授权。</p><p class="notice">当前没有已开放的兑换权益，也不以本地演示积分承诺任何奖品或资格。</p>${V.btn('返回积分','close','primary full')}`);
case 'about':return open('关于物之再生',`<p>面向上海工业博物馆语境的工业文化共创设计研究，以老搪瓷为首个示范，探索从文化记忆到数字作品的转化。</p><p>当前素材为自绘示意，参考图只用于设计方向。对应馆藏、年代、版权和工艺仍需核实。</p><p class="notice">本地可操作原型：草稿、作品、图片、积分和投稿保存在当前浏览器，不进行云同步或实际馆方审核。正式文化权益尚未开放。</p><p>本轮为可持续调整的阶段性方案。共创之外的资料征集和价值评定另行设计。</p>${V.btn('继续体验','close','primary full')}`);
}}
document.addEventListener('click',e=>{const el=e.target.closest('[data-action]');if(!el)return;if(suppressClick&&el.closest('#object-stage')){e.preventDefault();return;}handle(el.dataset.action,el).catch(report);});
document.addEventListener('input',e=>{if(!loaded||busy)return;const el=e.target;if(el.id==='search-query'){state.ui.query=el.value;$('#search-results').innerHTML=V.searchResults(el.value);changed();}if(el.id==='work-title'||el.id==='work-idea'){M.edit(draft(),{[el.id==='work-title'?'title':'idea']:el.value});changed();}if(el.dataset.field){const d=draft();if(!rangeStart)rangeStart=M.snapshot(d);const candidate={...d,[el.dataset.field]:Number(el.value)};previewUpdate(candidate);}});
document.addEventListener('change',e=>{if(e.target.dataset.field){M.edit(draft(),{[e.target.dataset.field]:Number(e.target.value)});rangeStart=null;changed();render();}});
document.addEventListener('pointerdown',e=>{if(busy||!loaded)return;if(e.target.closest('#work-preview')){drag={startX:e.clientX,startY:e.clientY,draft:M.snapshot(draft()),target:e.target.closest('#work-preview'),next:null};drag.target.setPointerCapture(e.pointerId);e.preventDefault();}else if(e.target.closest('#object-stage')){swipe={x:e.clientX,y:e.clientY,time:performance.now(),id:e.pointerId,target:e.target.closest('#object-stage')};}});
document.addEventListener('pointermove',e=>{if(swipe&&page==='discover'){const dx=e.clientX-swipe.x,dy=e.clientY-swipe.y;if(Math.abs(dx)>6&&Math.abs(dx)>Math.abs(dy)){if(!swipe.target.hasPointerCapture(swipe.id))swipe.target.setPointerCapture(swipe.id);window.FilmHome.layout(context(),Math.max(-160,Math.min(160,dx)));}}if(!drag)return;const rect=drag.target.getBoundingClientRect(),factor=340/Math.max(200,rect.width);drag.next={...draft(),x:Math.max(-60,Math.min(60,Math.round(drag.draft.x+(e.clientX-drag.startX)*factor))),y:Math.max(-60,Math.min(60,Math.round(drag.draft.y+(e.clientY-drag.startY)*factor)))};previewUpdate(drag.next);});
document.addEventListener('pointerup',e=>{if(drag){if(drag.next){M.edit(draft(),{x:drag.next.x,y:drag.next.y});changed();}drag=null;render();}if(swipe){const dx=e.clientX-swipe.x,dy=e.clientY-swipe.y;if((Math.abs(dx)>35||(Math.abs(dx)>16&&Math.abs(dx)/Math.max(1,performance.now()-swipe.time)>.35))&&Math.abs(dx)>Math.abs(dy)*1.4){suppressClick=true;cycle(dx<0?1:-1);setTimeout(()=>suppressClick=false,250);}else window.FilmHome.layout(context());swipe=null;}});
document.addEventListener('pointercancel',()=>{drag=null;swipe=null;if(loaded&&page==='editor')render();if(loaded&&page==='discover')window.FilmHome.layout(context());});
$('#dialog').addEventListener('cancel',e=>{if(busy){e.preventDefault();return;}modal='';});
async function compress(file){if(!['image/jpeg','image/png','image/webp'].includes(file.type))throw Error('请选择 JPG、PNG 或 WebP 图片。');if(file.size>12*1024*1024)throw Error('图片超过 12 MB，请换一张较小的图片。');const url=URL.createObjectURL(file);try{const image=new Image();image.src=url;try{await image.decode();}catch{throw Error('这张图片无法解码，可能已损坏。请重新选择 JPG、PNG 或 WebP。');}if(!image.width||!image.height)throw Error('无法读取这张图片，请重新选择。');const ratio=Math.min(1,1400/Math.max(image.width,image.height));const canvas=document.createElement('canvas');canvas.width=Math.round(image.width*ratio);canvas.height=Math.round(image.height*ratio);canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);return await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('无法处理图片，请重试。')),'image/png'));}finally{URL.revokeObjectURL(url);}}
$('#image-file').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;const home=uploadFromHome;busy=true;$('.app').dataset.busy='true';dialogError('正在读取图片…');try{const blob=await compress(file);const imageId=await S.saveImage(blob);busy=false;const res=await atomic(s=>{const d=home?M.addDraft(s,selected().id):s.drafts.find(x=>x.id===s.ui.activeDraftId);M.edit(d,{imageId,imageName:file.name});return d;});if(res){parent=home?'discover':parent;tool='compose';navigate('editor');toast('图像已保存到本机');}}catch(err){dialogError(err.message||'图片读取失败，请重新选择。');}finally{busy=false;$('.app').dataset.busy='false';}});
window.addEventListener('hashchange',async()=>{if(!loaded||location.hash==='#'+routeString())return;if(page==='editor'&&!await save()){history.replaceState({},'','#editor');return;}close();scrolls[page]=$('#main').scrollTop;readRoute();render();$('#main').scrollTop=scrolls[page]||0;});
function readRoute(){const [route,id]=location.hash.slice(1).split('/');page=['discover','detail','editor','result','points','mine'].includes(route)?route:'discover';if(page==='editor'&&!draft())page='mine';if(page==='result')resultId=decodeURIComponent(id||state.ui.resultId||'');state.ui.route=routeString();if(resultId)state.ui.resultId=resultId;}
document.addEventListener('visibilitychange',()=>{if(document.hidden&&dirty)save();});window.addEventListener('pagehide',()=>{if(dirty)save();});window.addEventListener('beforeunload',e=>{if(dirty||busy){e.preventDefault();e.returnValue='';}});
async function boot(){try{state=await S.load();await S.preload(state);loaded=true;clearError();readRoute();render();if(state.legacyImported&&!state.ui.legacyNotice){state.ui.legacyNotice=true;changed();toast('已导入旧版作品，旧数据仍保留');}}catch(e){loaded=false;report(e);$('#main').innerHTML='<div class="loading"><strong>暂时无法打开档案</strong><p>为保护原有记录，已暂停写入。请保留此页面，恢复浏览器存储权限后点击上方“重试”。</p></div>';}}
window.addEventListener('resize',()=>{if(loaded&&page==='discover')window.FilmHome.layout(context());});
document.addEventListener('keydown',e=>{if(page==='discover'&&e.target.closest('.film-gallery')&&['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();cycle(e.key==='ArrowRight'?1:-1);}});
boot();
})();
