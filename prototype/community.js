/* Local archive domain. Immutable publications are separate from private editing records. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require('./model.js'),require('./gallery-editions.js'));else factory(root.Studio,root.GalleryEditions);})(globalThis,(M,editions)=>{
 'use strict';
 const base={blank:M.blank,validate:M.validate,complete:M.complete,resume:M.resumeWork,submit:M.submit,remove:M.remove};
 const policy={version:'local-demo-v2',complete:{points:20,name:'首次保存数字作品'},submit:{points:5,name:'首次主题演示投稿'}};
 const theme={id:'everyday-reborn',title:'日常再生',description:'本月演示主题 · 从旧物纹样里，重新安排一种日常。非馆方正式征集。'};
 const creators=[{id:'project-demo',name:'项目示例',kind:'example'},{id:'local-self',name:'本机创作者',kind:'local'}];
 const sourceFor=item=>({id:'source:'+item.id,kind:'project-svg',name:item.name+' · 项目自绘 SVG',rights:'原创练习素材，馆藏对应与年代待核实；可在本原型中尝试再创作。',verified:false});
 const statusDefaults={reviewState:'not_connected',selectionState:'not_assessed',productionState:'not_started'};
 const legacyExamples=M.items.map((item,i)=>({id:'example:'+item.id,archived:true,kind:'example',creatorId:'project-demo',title:['枝头的早晨','花开一隅','留住喜字','一封旧时光','花开的邮程','喜糖旧事','花间留白','转动的回声'][i],idea:['将喜鹊与花枝留在杯身的一侧，用留白衬出日常器物上的一小段春意。','把牡丹从圆盘的中心移向杯身，让花朵成为日常视线中的一角。','保留双喜纹样的对称结构，让旧日的祝福重新回到一只日用杯上。','借邮票的小幅面收住一枝喜鹊，边缘留白像一封尚未寄出的信。','把花朵放进邮票的齿孔边界，尝试在微小的纸面上保留完整的花枝。','将双喜纹样安放在糖纸中心，让折叠与展开都能看见祝福。','在糖纸的折边之间保留一朵花，让包装展开后也像一张可以留下的小画。','以齿轮的圆形结构围住双喜，尝试把机械秩序与日常祝福放在同一画面。'][i],sourceId:'source:'+item.id,themeId:i%2===0?theme.id:null,featured:i%3===0||i===1,createdAt:`2026-10-${String(12+i).padStart(2,'0')}T08:00:00Z`,snapshot:{itemId:item.id,category:item.category,canvas:M.category(item.category).canvas,pattern:item.pattern,color:i%2?'blue':'white',scale:80+i*4,x:i%2?12:-8,y:0,rotation:0,imageId:null},...statusDefaults}));
 const examples=[...editions,...legacyExamples];
 function trace(s,type,title,source){const e={id:M.uid('growth'),type,title,source,createdAt:M.now()};s.growth.push(e);return e;}
 function enrichWork(s,w){
  w.rewardRootId=w.rewardRootId||w.lineageId;w.creatorId='local-self';w.visibility='private';w.saveState='private_draft';
  const derived=w.imageId&&w.provenance?.origin==='local-print';
  const ai=w.imageId&&w.provenance?.origin==='ai-pattern';
  const study=w.imageId&&w.provenance?.origin==='photo-study';
  w.sourceId=study?w.imageId:ai?'ai:'+w.imageId:derived?'print:'+w.imageId:w.imageId?'personal:'+w.imageId:'source:'+w.itemId;
  if(study&&!s.sources.some(x=>x.id===w.sourceId))s.sources.push({id:w.sourceId,kind:'photo-study',name:w.imageName,rights:'实物照片取样 · '+w.provenance.credit+' · '+w.provenance.license,url:w.provenance.url,licenseUrl:w.provenance.licenseUrl,verified:true});
  if(ai&&!s.sources.some(x=>x.id===w.sourceId))s.sources.push({id:w.sourceId,kind:'ai-pattern',name:w.imageName+' · AI 转译',rights:'参考素材与创作者输入经 AI 转译；馆方授权与工艺审核待确认。',verified:false});
  if(derived&&!s.sources.some(x=>x.id===w.sourceId))s.sources.push({id:w.sourceId,kind:'local-print',name:w.imageName+' · 本地规则转化',rights:'以个人输入与项目示意纹样转化。尚未经馆方或工艺审核。',verified:false});
  if(w.imageId&&!s.sources.some(x=>x.id===w.sourceId))s.sources.push({id:w.sourceId,kind:'personal-image',name:w.imageName||'个人图像',rights:'本机创作者声明拥有合法使用权，尚无第三方核验。',verified:false});
  return w;
 }
 function upgrade(input){
  if(!input||![6,7].includes(input.version))throw Error('本地档案格式无法识别，已停止写入以保护原数据。');
  base.validate({...input,version:6});const s=M.copy(input);
  if(input.version===7&&['publications','creators','sources','growth','galleryLikes','galleryCollections'].some(k=>!Array.isArray(s[k])))throw Error('本地成长档案不完整，已停止写入。');
  s.version=7;s.publications??=[];s.creators??=M.copy(creators);s.sources??=M.items.map(sourceFor);s.growth??=[];s.galleryLikes??=[];s.galleryCollections??=[];s.pointsPolicy??=M.copy(policy);
  for(const type of ['complete','submit'])if(!Number.isInteger(s.pointsPolicy[type]?.points)||s.pointsPolicy[type].points<0||s.pointsPolicy[type].points>1000)throw Error('本地积分规则格式无法识别，已停止写入。');
  s.ui={...s.ui,coView:s.ui.coView||'explore',gallery:{sort:'featured',category:'all',scroll:0,...s.ui.gallery},galleryId:s.ui.galleryId||null};
  for(const w of s.works)enrichWork(s,w);
  for(const d of s.drafts)d.rewardRootId??=d.lineageId;
  for(const sub of s.submissions){Object.assign(sub,{...statusDefaults,...sub,themeId:sub.themeId||theme.id});sub.status='已留存 · 主题演示投稿';}
  if(input.version===6)for(const e of s.ledger){const w=s.works.find(w=>(w.rewardRootId||w.lineageId)===e.sourceId);e.ruleVersion??='legacy-local-v1';e.source??={kind:e.type==='submit'?'submission':'work',id:e.type==='submit'?s.submissions.find(x=>x.workId===w?.id)?.id||e.sourceId:w?.id||e.sourceId};e.snapshot??=w?M.copy(w):null;trace(s,e.type,e.label+' · '+e.title,e.source);s.growth.at(-1).createdAt=e.createdAt;}
  return s;
 }
 function complete(s,id,title){const d=s.drafts.find(x=>x.id===id),before=s.ledger.length;if(d?.workId&&s.publications.some(p=>p.workId===d.workId&&p.state==='published'))throw Error('本地展示快照已锁定，请从作品页建立编辑副本。');const w=base.complete(s,id,title);enrichWork(s,w);const entry=s.ledger[before];if(entry){entry.ruleVersion=s.pointsPolicy.version;entry.source={kind:'work',id:w.id};entry.snapshot=M.copy(w);}trace(s,'save','保存私有作品 · '+w.title,{kind:'work',id:w.id});return w;}
 function resume(s,id){const w=s.works.find(x=>x.id===id);if(!w)throw Error('本地作品不存在。');const published=s.publications.some(p=>p.workId===id&&p.state==='published');if(!published)return base.resume(s,id);const existing=s.drafts.find(d=>d.editOf===id);if(existing){s.ui.activeDraftId=existing.id;return existing;}const d={...M.copy(w),id:M.uid('draft'),lineageId:M.uid('design'),rewardRootId:w.rewardRootId||w.lineageId,workId:null,editOf:id,past:[],future:[],createdAt:M.now(),updatedAt:M.now()};s.drafts.push(d);s.ui.activeDraftId=d.id;return d;}
 function submit(s,id,consent){const before=s.ledger.length,exists=s.submissions.some(x=>x.workId===id),sub=base.submit(s,id,consent);Object.assign(sub,statusDefaults,{themeId:theme.id,status:'已留存 · 主题演示投稿'});const entry=s.ledger[before];if(entry){entry.ruleVersion=s.pointsPolicy.version;entry.source={kind:'submission',id:sub.id};entry.snapshot=M.copy(sub.snapshot);}if(!exists)trace(s,'submit','留存主题演示投稿 · '+sub.snapshot.title,{kind:'submission',id:sub.id});return sub;}
 function all(s){return [...examples,...s.publications.filter(p=>p.state==='published')];}
 function find(s,id){return all(s).find(p=>p.id===id)||null;}
 function galleryAuthor(s,p){
  if(p.kind==='local'||(p.sourceWorkId&&s.works.some(w=>w.id===p.sourceWorkId)))return '我';
  return p.authorName||s.creators.find(x=>x.id===p.creatorId)?.name||'社区作者';
 }
 function engagement(s,p,kind){
  const like=kind==='like',active=s[like?'galleryLikes':'galleryCollections'].includes(p.id);
  return {active,count:(like?p.simulatedLikes||0:p.simulatedSaves||0)+Number(active)};
 }
 function query(s,{sort='featured',category='all'}={}){
  let rows=all(s).filter(p=>!p.archived&&(category==='all'||p.snapshot.category===category||p.snapshot.canvas===category));
  if(sort==='featured')return rows.filter(p=>p.featured).sort((a,b)=>a.communityOrder-b.communityOrder);
  if(sort==='theme')rows=rows.filter(p=>p.themeId===theme.id);
  return rows.sort((a,b)=>b.createdAt.localeCompare(a.createdAt)||a.id.localeCompare(b.id));
 }
 function publish(s,id,consent){
  const w=s.works.find(w=>w.id===id);if(!w)throw Error('请先保存本地作品。');if(!consent?.rights||!consent?.display||!consent?.inspiration)throw Error('请完整确认图像使用权、本机模拟公开及灵感再创作说明。');
  const existing=s.publications.find(p=>p.workId===id&&p.state==='published');if(existing)return existing;
  const p={id:M.uid('publication'),workId:w.id,kind:'local',creatorId:'local-self',title:w.title,idea:w.idea||'创作者暂未填写创作说明。',sourceId:w.sourceId,themeId:consent.theme?theme.id:null,createdAt:M.now(),snapshot:M.copy(w),state:'published',featured:false,consent:{version:'local-gallery-v1',rights:true,display:true,inspiration:true,scope:'this-browser-only',createdAt:M.now()},...statusDefaults};s.publications.push(p);trace(s,'publish','模拟公开作品 · '+w.title,{kind:'publication',id:p.id});return p;
 }
 function withdraw(s,id){const p=s.publications.find(p=>p.id===id);if(!p)throw Error('本机展示记录不存在。');p.state='withdrawn';trace(s,'withdraw','撤回本机展示 · '+p.title,{kind:'publication',id});}
 function toggle(s,kind,id){if(!['galleryLikes','galleryCollections'].includes(kind)||!find(s,id))throw Error('广场作品不存在。');s[kind]=s[kind].includes(id)?s[kind].filter(x=>x!==id):[...s[kind],id];}
 function inspire(s,id){const p=find(s,id);if(!p)throw Error('这件作品已不可用，请返回广场。');const d=M.addDraft(s,p.snapshot.itemId);Object.assign(d,M.copy(M.snapshot(p.snapshot)),{title:'',idea:'',inspiration:{publicationId:p.id,title:p.title,creatorId:p.creatorId,sourceId:p.sourceId,kind:p.kind},sourceId:p.sourceId});if(p.coverKey){d.cupCamera=M.copy(p.snapshot.cupCamera);d.editorSurface='object';}if(p.kind==='local')d.rewardRootId=p.snapshot.rewardRootId||p.snapshot.lineageId;trace(s,'inspire','以此为灵感 · '+p.title,{kind:'publication',id:p.id});return d;}
 function remove(s,kind,id){if(kind==='works')for(const p of s.publications.filter(p=>p.workId===id))p.state='withdrawn';base.remove(s,kind,id);}
 function stats(s){return {balance:s.ledger.reduce((sum,e)=>sum+e.points,0),works:s.works.length,submissions:s.submissions.length,selected:s.submissions.filter(x=>x.selectionState==='selected').length};}
 function configure(s,next){for(const type of ['complete','submit'])if(!Number.isInteger(next[type]?.points)||next[type].points<0||next[type].points>1000)throw Error('演示积分规则必须为 0–1000 的整数。');s.pointsPolicy=M.copy(next);}
 Object.assign(M,{blank:()=>upgrade(base.blank()),validate:upgrade,complete,resumeWork:resume,submit,remove,theme,examples,allPublications:all,findPublication:find,queryGallery:query,galleryAuthor,engagement,publish,withdraw,toggleGallery:toggle,inspire,stats,configurePoints:configure});
 return M;
});
