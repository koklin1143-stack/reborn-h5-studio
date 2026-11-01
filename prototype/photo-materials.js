/* Source-space selections stay editable. Commit the composite and its sources together. */
(()=>{
 'use strict';
 const M=window.Studio,V=window.Views,S=window.LocalStore,limit=6;
 const object=d=>window.Explore.fromSource(d.sourceObjectId);
 const esc=V.esc, url=key=>window.EnamelArt.photoUrl(key);
 const clamp=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
 const parts=d=>d.provenance?.origin==='photo-study'&&d.provenance.sourceObjectId===d.sourceObjectId&&Array.isArray(d.provenance.parts)?d.provenance.parts:[];
 function choices(d){
  const list=new Map(M.motifs.filter(m=>m.origin==='photo-study'&&m.sourceObjectId===d.sourceObjectId).map(m=>[m.id,m]));
  for(const entry of [...parts(d),...(d.photoLibrary||[]),...(d.photoSelection||[])]){
   const item=list.get(entry.id);
   if(!item&&!(entry.custom&&entry.sourceObjectId===d.sourceObjectId))continue;
   const source=entry.custom?{...item,...entry}:item;
   list.set(entry.id,{...source,tint:window.MaterialColor.valid(entry.tint)});
  }
  return [...list.values()];
 }
 function picked(d,list=choices(d)){
  const ids=Array.isArray(d.photoSelection)?d.photoSelection.map(p=>p.id):parts(d).length?parts(d).map(p=>p.id):[d.pickedPhotoMotif||d.sourceMotifId];
  const byId=new Map(list.map(m=>[m.id,m])),result=ids.map(id=>byId.get(id)).filter(Boolean);
  return !result.length&&(!Array.isArray(d.photoSelection)||d.photoSelection.length)?list.slice(0,1):result;
 }
 function spec(m){
  const s=m.custom?{custom:true,id:m.id,sourceObjectId:m.sourceObjectId,name:m.name,region:m.region,ink:m.ink||null,...(m.recipe?{recipe:m.recipe}:{})}:{id:m.id};
  if(window.MaterialColor.valid(m.tint))s.tint=m.tint;return s;
 }
 function writeSelection(d,items,focus,stored=[]){
  const library=new Map(choices(d).map(m=>[m.id,m]));
  for(const m of [...items,...stored])library.set(m.id,m);
  d.photoLibrary=[...library.values()].map(spec);
  return M.edit(d,{photoSelection:items.map(spec),pickedPhotoMotif:focus});
 }
 async function setSelection(d,items,focus,api,stored=[]){
  const saved=await api.atomic(state=>writeSelection(state.drafts.find(row=>row.id===d.id),items,focus,stored));
  if(saved&&api.draft()?.id===d.id)api.render();
  return Boolean(saved);
 }
 function toggle(d,id,api){
  const list=choices(d),items=picked(d,list),m=list.find(v=>v.id===id);if(!m)return;
  const index=items.findIndex(v=>v.id===id);if(index<0&&items.length>=limit)return;
  const next=index<0?[...items,m]:items.filter(v=>v.id!==id);
  const focusId=index<0?id:next.find(v=>v.id===d.pickedPhotoMotif)?.id||next[Math.min(index,next.length-1)]?.id||null;
  writeSelection(d,next,focusId);api.changed(0);api.render();
  const button=document.querySelector('[data-action=in-photo-toggle][data-id="'+CSS.escape(id)+'"]');
  if(button&&!button.disabled)button.focus({preventScroll:true});
 }
 const canvas=(w,h)=>Object.assign(document.createElement('canvas'),{width:w,height:h});
 const png=c=>new Promise((ok,fail)=>c.toBlob(b=>b?ok(b):fail(Error('素材保存失败，请重试。')),'image/png'));
 const images=new Map();
 function load(key){
  if(!images.has(key)){
   const image=new Image();image.src=url(key);
   images.set(key,image.decode().then(()=>image).catch(()=>{images.delete(key);throw Error('原照或取样暂时打不开，请重新选择。');}));
   if(images.size>24)images.delete(images.keys().next().value);
  }
  return images.get(key);
 }
 function crop(source,region,ink,maxSize=Infinity){
  const [x,y,rw,rh]=region,ratio=Math.min(1,maxSize/Math.max(rw,rh));
  const w=Math.max(1,Math.round(rw*ratio)),h=Math.max(1,Math.round(rh*ratio)),c=canvas(w,h),ctx=c.getContext('2d',{willReadFrequently:true});
  ctx.drawImage(source,x,y,rw,rh,0,0,w,h);
  if(ink){
   const rgb=ink.match(/\w\w/g).map(v=>parseInt(v,16)),im=ctx.getImageData(0,0,w,h);
   for(let i=0;i<im.data.length;i+=4){
    const dist=Math.hypot(im.data[i]-rgb[0],im.data[i+1]-rgb[1],im.data[i+2]-rgb[2]);
    im.data[i+3]=Math.round(255*clamp((78-dist)/30,0,1));
    for(let j=0;j<3;j++)im.data[i+j]=rgb[j];
   }
   ctx.putImageData(im,0,0);
  }
  return c;
 }
 async function customCanvas(d,m,maxSize){
  const p=object(d).photo;
  if(m.recipe?.version===2)return window.PhotoExtraction.render(await load(p.studyKey||p.key),p,m.region,m.ink,m.recipe);
  return crop(await load(p.key),m.region,m.ink,maxSize);
 }
 async function makeBlob(d,m){
  if(m.custom)return png(await customCanvas(d,m));
  const response=await fetch(url(m.fileKey));
  if(!response.ok)throw Error('无法读取选中的纹样，请重试。');
  const blob=await response.blob();
  if(!blob.size||blob.type!=='image/webp')throw Error('纹样文件无法读取，请刷新后重试。');
  return blob;
 }
 async function sourceBlob(d,m){return (await S.getAsset(m.assetId))||makeBlob(d,m);}
 function record(m){
  return {...spec(m),name:m.name,region:m.region,sourceObjectId:m.sourceObjectId,
   assetId:m.custom?'photo-print:'+m.id:m.assetId,...(!m.custom?{fileKey:m.fileKey,treatment:m.treatment,shape:m.shape}:{})};
 }
 function layout(items,previous){
  return items.map((m,i)=>{
   const n=items.length,cols=n===1?1:n<=4?2:3,rows=Math.ceil(n/cols);
   const row=Math.floor(i/cols),count=Math.min(cols,n-row*cols),size=n===1?1:.86/Math.max(cols,rows);
   const retained=(previous.length>1)===(n>1)&&previous.find(p=>p.id===m.id);
   const pos=retained||{x:(i%cols+.5+(cols-count)/2)/cols,y:(row+.5)/rows,size};
   const layer={...retained,...record(m),x:pos.x,y:pos.y,size:pos.size};if(!m.tint)delete layer.tint;return layer;
  });
 }
 async function commit(d,items,layers,api,valid){
  if(!items.length||!valid())return false;
  const assets=[];
  const blobs=await Promise.all(layers.map(async p=>{
   const existing=await S.getAsset(p.assetId);
   if(existing)return existing;
   const blob=await makeBlob(d,p);assets.push({id:p.assetId,blob});return blob;
  }));
  const single=layers.length===1&&layers[0].size===1&&layers[0].x===.5&&layers[0].y===.5&&!layers[0].rotation&&!layers[0].flipX&&!layers[0].flipY&&(layers[0].opacity??100)===100&&(!layers[0].edge||layers[0].edge==='none');
  let imageId=layers[0].assetId;
  const unchanged=JSON.stringify(layers)===JSON.stringify(parts(d));
  if(!single||layers[0].tint){
   if(unchanged&&await S.getAsset(d.imageId))imageId=d.imageId;
   else {
    const bitmaps=await Promise.all(blobs.map(b=>createImageBitmap(b)));
    try{const c=single?window.MaterialColor.paint(bitmaps[0],layers[0]):canvas(768,768);
     if(!single)window.PhotoLayout.draw(c.getContext('2d'),layers,bitmaps);
     imageId=M.uid('photo-composition');assets.push({id:imageId,blob:await png(c)});
    }finally{bitmaps.forEach(b=>b.close());}
   }
  }
  if(!valid())return false;
  const source=object(d).source,first=layers[0];
  return api.atomic(state=>{
   const target=state.drafts.find(v=>v.id===d.id);
   const preserve=target.imageId===imageId||api.page()==='editor'||(state.ui.inputsFromEditor&&parts(target).length>0);
   M.edit(target,{...(preserve?{}:window.PatternEditor.confirmedSettings(target)),imageId,
    imageName:layers.map(m=>m.name).join(' · '),sourceMotifId:first.id,pickedPhotoMotif:first.id,
    photoSelection:items.map(spec),selectedVariantId:null,provenance:{origin:'photo-study',aiGenerated:false,
    motifId:first.id,sourceObjectId:d.sourceObjectId,credit:source.creator,license:source.license,url:source.url,
    licenseUrl:source.licenseUrl,region:first.region,parts:layers}});
  },assets);
 }
 async function adopt(d,api){
  const items=picked(d),ids=items.map(m=>m.id).join('|');
  const valid=()=>api.page()==='inspiration'&&api.draft().id===d.id&&api.draft().inputTab==='motif'&&picked(api.draft()).map(m=>m.id).join('|')===ids;
  if(await commit(d,items,layout(items,parts(d)),api,valid))api.toEditor();
 }
 function thumb(m){
  if(m.custom||m.tint)return `<canvas data-cut-thumb="${esc(m.id)}" role="img" aria-label="${esc(m.name)}"></canvas>`;
  return `<img src="${url(m.fileKey)}" alt="${esc(m.name)}" draggable="false">`;
 }
 async function original(d,m){return m.custom?customCanvas(d,m,480):load(m.fileKey);}
 function drawPreview(target,source){
  const scale=Math.min(1,480/Math.max(source.width,source.height));target.width=Math.max(1,Math.round(source.width*scale));target.height=Math.max(1,Math.round(source.height*scale));
  target.getContext('2d').drawImage(source,0,0,target.width,target.height);
 }
 function hydrate(d,root=document.querySelector('.study-sheet')){
  if(!root)return;
  const list=new Map(choices(d).map(m=>[m.id,m])),renders=new Map();
  for(const target of root.querySelectorAll('canvas[data-cut-thumb]')){
   const m=list.get(target.dataset.cutThumb);if(!m)continue;
   if(!renders.has(m.id))renders.set(m.id,original(d,m).then(image=>window.MaterialColor.paint(image,m)));
   renders.get(m.id).then(c=>{if(target.isConnected)drawPreview(target,c);}).catch(()=>{if(target.isConnected)target.setAttribute('aria-label','素材预览未能打开');});
  }
 }
 const pageSize=4;
 let filters={};
 function viewFor(d){
  if(filters.draft!==d.id)filters={draft:d.id,query:'',group:'all',page:0};
  return filters;
 }
 function mount(d){
  const root=document.querySelector('.sample-selector');if(!root)return;
  const all=choices(d),items=picked(d,all),ids=new Set(items.map(v=>v.id)),view=viewFor(d);
  const list=[...all.filter(m=>!m.custom),...all.filter(m=>m.custom).reverse()];
  const search=root.querySelector('[type=search]'),filter=root.querySelector('select'),results=root.querySelector('.sample-list'),pages=root.querySelector('.sample-pages');
  if(search){search.value=view.query;filter.value=view.group;}else{view.query='';view.group='all';view.page=0;}
  function paint(){
   const q=view.query.trim().toLowerCase(),rows=list.filter(v=>(view.group==='all'||(view.group==='selected'?ids.has(v.id):(view.group==='custom')===!!v.custom))&&v.name.toLowerCase().includes(q));
   const count=Math.max(1,Math.ceil(rows.length/pageSize));view.page=clamp(view.page,0,count-1);
   results.innerHTML=rows.length?rows.slice(view.page*pageSize,(view.page+1)*pageSize).map(v=>{
    const on=ids.has(v.id);return V.btn(thumb(v)+'<span>'+esc(v.name)+'</span><i aria-hidden="true">'+(on?'✓':'+')+'</i>','in-photo-toggle','material-choice',`data-id="${esc(v.id)}" aria-pressed="${on}" ${!on&&items.length>=limit?'disabled':''}`);
   }).join(''):'<p class="library-empty">'+(q?'没有匹配的素材':view.group==='selected'?'还没有选中的素材':'这里还没有取样')+'</p>';
   pages.innerHTML=count>1?`<button type="button" data-pg="-1" ${view.page===0?'disabled':''} aria-label="上一页素材">‹</button><span>${view.page+1} / ${count}</span><button type="button" data-pg="1" ${view.page===count-1?'disabled':''} aria-label="下一页素材">›</button>`:'';
   hydrate(d,results);
  }
  if(search){
   search.oninput=()=>{view.query=search.value;view.page=0;paint();};
   filter.onchange=()=>{view.group=filter.value;view.page=0;paint();};
  }
  pages.onclick=e=>{const b=e.target.closest('[data-pg]');if(b){view.page+=Number(b.dataset.pg);paint();}};
  paint();hydrate(d,document.querySelector('.sample-proof'));
 }
 function sheet(d){
  const o=object(d),p=o.photo,list=choices(d),items=picked(d,list),m=items.find(v=>v.id===d.pickedPhotoMotif)||items[0];
  function mark(v){
   const [x,y,w,h]=v.region,shape=v.recipe?.shape||v.shape;
   const tag=shape==='circle'?`circle cx="${x+w/2}" cy="${y+h/2}" r="${Math.min(w,h)/2}"`:shape==='ellipse'?`ellipse cx="${x+w/2}" cy="${y+h/2}" rx="${w/2}" ry="${h/2}"`:shape==='lasso'?`polygon points="${v.recipe.points.map(([u,t])=>[x+u*w,y+t*h].join(',')).join(' ')}"`:`rect x="${x}" y="${y}" width="${w}" height="${h}"`;
   return `<${tag} fill="none" stroke="white" stroke-width="4" vector-effect="non-scaling-stroke"/><${tag} fill="none" stroke="#294e60" stroke-width="1.5" vector-effect="non-scaling-stroke"/>`;
  }
  const pos=items.indexOf(m);
  const step=(delta,label,icon)=>V.btn(V.icon(icon,16),'in-photo-focus','sample-step',`data-id="${esc(items[(pos+delta+items.length)%items.length].id)}" aria-label="${label}"`);
  const navigator=items.length>1?`<div class="sample-preview-nav" role="group" aria-label="切换已选素材预览">${step(-1,'预览上一份已选素材','back')}<span>${pos+1}/${items.length}</span>${step(1,'预览下一份已选素材','arrow')}</div>`:'';
  const preview=m?`<figure class="sample-proof"><div class="study-print">${thumb(m)}</div><button type="button" class="study-original" data-action="in-photo-inspect" aria-label="放大原照取样位置"><svg viewBox="0 0 ${p.width} ${p.height}"><image href="${url(p.key)}" width="${p.width}" height="${p.height}"/>${mark(m)}</svg><span>看原照 ↗</span></button></figure>
   <div class="sample-caption"><strong>${esc(m.name)}</strong>${navigator}${V.btn('<i style="--tint:'+ (m.tint||'#dedad2')+'"></i> 改色','in-photo-color','sample-color-button',`data-id="${esc(m.id)}"`)}</div>`:
   '<div class="sample-empty">点选下方素材即可预览</div>';
  const filter=list.length>pageSize?`<div class="sample-search"><input type="search" aria-label="搜索素材名称" placeholder="搜索素材名称"><select aria-label="筛选素材"><option value="all">全部素材</option><option value="selected">已选素材</option><option value="preset">器物取样</option><option value="custom">我的取样</option></select></div>`:'';
  return `<div class="study-sheet sample-desk">${preview}
   <section class="sample-set sample-selector"><div class="sample-set-head"><h2>选择素材 <small>可多选</small></h2><span class="sample-count" aria-live="polite" data-count="${items.length}">已选 ${items.length} / ${limit}</span></div>
   ${filter}<div class="sample-list" role="group" aria-label="点选素材，可多选"></div><div class="sample-pages"></div>
   <div class="sample-actions">${V.btn(V.icon('plus',15)+' 从原照取样','in-photo-crop','text')}${items.length>1?V.btn('摆放与融合 '+V.icon('arrow',14),'in-photo-layout','text'):''}</div></section></div>`;
 }
 function focus(d,id,api,trigger){
  if(d.pickedPhotoMotif===id||!picked(d).some(m=>m.id===id))return;
  const label=trigger.getAttribute('aria-label');d.pickedPhotoMotif=id;api.changed(0);api.render();
  document.querySelector('.sample-preview-nav [aria-label="'+CSS.escape(label)+'"]')?.focus({preventScroll:true});
 }
 async function openColor(d,id,api){
  const items=picked(d),m=items.find(x=>x.id===id);if(!m)return;
  api.open('素材改色',`<div class="sample-recolor"><figure><canvas aria-label="改色预览"></canvas><figcaption>${esc(m.name)}</figcaption></figure>${window.MaterialColor.controls()}<button type="button" class="btn primary full apply-color" disabled>使用这个颜色</button></div>`);
  const root=document.querySelector('.sample-recolor'),button=root.querySelector('.apply-color');
  const source=await original(d,m);if(!root.isConnected||!root.closest('dialog').open)return;
  let tint=m.tint||null;
  const preview=color=>{tint=color;drawPreview(root.querySelector('canvas'),window.MaterialColor.paint(source,{...m,tint}));};
  window.MaterialColor.bind(root.querySelector('.sample-colors'),tint,preview);preview(tint);button.disabled=false;
  button.onclick=async()=>{button.disabled=true;try{
   const latest=api.draft();if(latest.id!==d.id)return;
   if(await setSelection(latest,picked(latest).map(v=>v.id===id?{...v,tint}:v),id,api)&&root.isConnected)api.close();
  }finally{button.disabled=false;}};
 }
 async function openCrop(d,api,tool='circle'){
  const list=choices(d),o=object(d),selected=picked(d,list),current=list.find(v=>v.id===d.pickedPhotoMotif)||selected[0];

  await window.PhotoPicker.open({p:o.photo,choices:list,load,api,tool,focus:tool==='inspect'?current:null,
   count:list.filter(v=>v.custom).length,canAdd:selected.length<limit,add:async sample=>{
    if(api.page()!=='inspiration'||api.draft().id!==d.id)return false;
    const items=picked(api.draft()).filter(v=>v.id!==sample.id);

    const m={...sample,custom:true,sourceObjectId:d.sourceObjectId};
    Object.assign(viewFor(d),{group:'custom',page:0,query:''});
    if(items.length>=limit){const saved=await setSelection(api.draft(),items,api.draft().pickedPhotoMotif,api,[m]);if(saved)api.toast('已存入我的取样');return saved;}
    return setSelection(api.draft(),[...items,m],m.id,api);
   }});
 }
 async function openLayout(d,api){
  const from=api.page(),preparing=from==='inspiration';
  const layers=preparing?layout(picked(d),parts(d)):M.copy(parts(d));
  if(layers.length<2)return;
  return window.PhotoLayout.open({layers,preferred:preparing?d.pickedPhotoMotif:null,preparing,api,loadBlob:p=>sourceBlob(d,p),
   save:async(arranged,manage,open)=>{
    const valid=()=>open()&&from===api.page()&&api.draft()?.id===d.id;
    if(!valid())return;
    if(!manage||JSON.stringify(arranged)!==JSON.stringify(parts(d))){
     const result=M.copy(arranged);if(!await commit(d,result,result,api,valid))return;
    }
    if(!valid())return;
    api.close();if(manage)api.managePicks();else if(preparing)api.toEditor();else api.render();
   }});
 }
 window.PhotoMaterials={choices,picked,parts,sheet,mount,toggle,focus,openColor,adopt,openCrop,openLayout};
})();
