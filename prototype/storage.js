/* IndexedDB commits are atomic. Images are separate blobs, never large localStorage strings. */
(() => {
 'use strict';
 const M=window.Studio,db=window.createArchiveDB(window.indexedDB);let queue=Promise.resolve();const urls=new Map();
 const open=db.open,read=db.read,write=db.write;
 const recoveredPrints=new Map();
 function cache(id,blob){if(recoveredPrints.get(id)?.blob!==blob)recoveredPrints.delete(id);if(urls.has(id))URL.revokeObjectURL(urls.get(id));urls.set(id,URL.createObjectURL(blob));}
 function commit(state,assets=[]){const saved=M.validate(state);const run=async()=>{await db.commit(saved,assets);for(const a of assets)cache(a.id,a.blob);};queue=queue.catch(()=>{}).then(run);return queue;}
 async function saveImage(blob,id=M.uid('image')){await write('images',id,blob);cache(id,blob);return id;}
 async function imageURL(id){if(!id)return '';if(urls.has(id))return urls.get(id);const blob=await read('images',id);if(!blob)return '';cache(id,blob);return urls.get(id);}
 const getAsset=async id=>recoveredPrints.get(id)?.blob||read('images',id);
 async function recoverPrints(records){
  const pending=new Map();
  for(const root of records){
   const history=[root,...(root.versions||[]).map(v=>v.snapshot),...(root.past||[]),...(root.future||[])];
   for(const snap of history){
    for(const print of [snap?.patternConversion,...(snap?.aiVariants||[])]){
     const record=print?.record||print,recipe=record?.recipe;
     if(record?.aiGenerated&&recipe&&!recipe.paperVersion&&Object.hasOwn(window.PatternGrammar.techniques,recipe.technique)&&!recoveredPrints.has(record.assetId))
      pending.set(record.assetId,recipe.technique);
    }
   }
  }
  for(const [id,technique] of pending){
   const original=await read('images',id);
   if(!original)continue;
   let print;
   try{print=await window.BailianPatterns.preparePrint(original,technique);}
   catch{print={blob:original,proofNote:'旧稿的底色未能分离，可用原素材重新生成。'};}
   recoveredPrints.set(id,print);cache(id,print.blob);
  }
 }
 async function saveDraft(draft,assets=[]){const run=async()=>{const raw=await read('state','current'),state=raw?M.validate(raw):M.blank();const record=M.normalizeRecord(M.copy(draft));const at=state.drafts.findIndex(d=>d.id===record.id);if(at<0)state.drafts.push(record);else state.drafts[at]=record;state.ui.activeDraftId=record.id;await db.commit(state,assets);for(const a of assets)cache(a.id,a.blob);return record;};queue=queue.catch(()=>{}).then(run);return queue;}
 async function getDraft(id){const state=await read('state','current');return state?M.validate(state).drafts.find(d=>d.id===id)||null:null;}
 function fromDataURL(data){const [header,body]=data.split(',');const bytes=Uint8Array.from(atob(body),c=>c.charCodeAt(0));return new Blob([bytes],{type:header.match(/data:([^;]+)/)?.[1]||'image/jpeg'});}
 async function migrate(state){let raw;try{raw=localStorage.getItem('studio3.h5.iteration3');}catch{return state;}if(!raw)return state;const old=JSON.parse(raw);if(old.version!==3||!Array.isArray(old.works))throw Error('旧版记录无法读取；原数据已保留。');const convert=async w=>{const d=M.fresh('enamel-'+(w.pattern||'magpie'));d.id='legacy-'+(w.id||M.uid());d.lineageId=d.id;Object.assign(d,{title:w.title||'',idea:w.story||'',color:w.cup||'white',scale:w.scale||100,x:w.offset||0,imageName:w.imageName||''});if(w.image&&w.source==='own')d.imageId=await saveImage(fromDataURL(w.image));return d;};for(const w of old.works){const d=await convert(w);if(w.kind==='draft')state.drafts.push(d);else{delete d.past;delete d.future;d.savedAt=w.createdAt||M.now();state.works.push(d);if(w.submission){const snap=await convert(w.submission.snapshot||w);state.submissions.push({id:'legacy-'+w.submission.id,workId:d.id,status:'已提交 · 演示',createdAt:w.submission.createdAt||M.now(),snapshot:snap,consentVersion:'legacy-local'});}}}if(old.current&&(old.current.image||old.current.title||old.current.id)){const d=await convert(old.current);d.id=M.uid('draft');state.drafts.push(d);state.ui.activeDraftId=d.id;}state.favorites=(old.favorites||[]).map(x=>'enamel-'+x).filter(id=>M.items.some(i=>i.id===id));state.legacyImported=true;return state;}
 // JSON-era saves stored a fresh copy of every previous pen stroke in each undo entry.
 // Completed strokes are immutable. Restore sharing without changing the paths or history.
 function shareStoredStrokes(record){
  if(!record)return;
  const known=[],visited=new WeakSet();
  function share(lines){
   if(!Array.isArray(lines)||visited.has(lines))return;
   visited.add(lines);
   for(let i=0;i<lines.length;i++){
    const line=lines[i],prior=known[i];if(line===prior)continue;
    if(prior&&line&&line.tool===prior.tool&&line.points?.length===prior.points?.length&&JSON.stringify(line)===JSON.stringify(prior))lines[i]=prior;
    else known[i]=line;
   }
  }
  for(const snap of [record,...(record.past||[]),...(record.future||[]),...(record.versions||[]).map(v=>v.snapshot)]){
   share(snap?.sketchStrokes);
   for(const variant of snap?.aiVariants||[])share(variant.selection?.sketchStrokes);
  }
 }
 async function load(){
  await open();const stored=await read('state','current');
  if(stored){
   if(Array.isArray(stored.drafts))for(const record of stored.drafts)shareStoredStrokes(record);
   const upgraded=M.validate(stored);if(stored.version!==upgraded.version)await commit(upgraded);return upgraded;
  }
  const s=await migrate(M.blank());await commit(s);return s;
 }
 async function preload(state,refresh=false){if(refresh){for(const url of urls.values())URL.revokeObjectURL(url);urls.clear();recoveredPrints.clear();}const records=[...state.drafts,...state.works,...state.submissions.map(x=>x.snapshot),...(state.publications||[]).map(x=>x.snapshot),...state.ledger.map(x=>x.snapshot).filter(Boolean)];await recoverPrints(records);const ids=new Set(records.flatMap(w=>[...(w.versions||[]).flatMap(v=>[v.snapshot.imageId,v.snapshot.patternConversion?.assetId,v.snapshot.inspirationImageId,v.snapshot.sketchAssetId,v.snapshot.sketchForm?.assetId,...(v.snapshot.aiVariants||[]).flatMap(a=>[a.assetId,a.formAssetId])]),w.patternConversion?.assetId,w.provenance?.sourceAssetId,w.previewAssetId,w.patternVersion?.imageAssetId,w.imageId,w.inspirationImageId,w.sketchAssetId,w.sketchForm?.assetId,...(w.aiVariants||[]).flatMap(v=>[v.assetId,v.formAssetId]),...[...(w.past||[]),...(w.future||[])].flatMap(x=>[x.imageId,x.patternConversion?.assetId,x.sketchForm?.assetId,x.patternConversion?.formAssetId])]).filter(Boolean));await Promise.all([...ids].map(async id=>{try{await imageURL(id);}catch{if(urls.has(id)){URL.revokeObjectURL(urls.get(id));urls.delete(id);}}}));}
 function image(id){return urls.get(id)||'';}
 window.LocalStore={load,commit,preload,saveImage,imageURL,image,getAsset,printNote:id=>recoveredPrints.get(id)?.proofNote,saveDraft,getDraft,close:()=>{db.close();for(const u of urls.values())URL.revokeObjectURL(u);urls.clear();recoveredPrints.clear();}};
})();
