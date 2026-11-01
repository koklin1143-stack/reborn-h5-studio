/* Unframed, code-drawn enamel studies; never presented as archival photographs. */
(()=>{
 const E=window.Explore,V=window.Views,A=window.Art,M=window.Studio;
 let serial=0;
 const bundledPhotos=null;
 const photoFolder='media/enamel/';
 const photoUrls=new Map();
 function photoUrl(key){
  if(!bundledPhotos)return photoFolder+key+'.webp';
  if(!photoUrls.has(key)){
   const bytes=Uint8Array.from(atob(bundledPhotos[key]),c=>c.charCodeAt(0));
   photoUrls.set(key,URL.createObjectURL(new Blob([bytes],{type:'image/webp'})));
  }
  return photoUrls.get(key);
 }
 function photoArt(o,stage){
  const key=o.photo.key,display=window.ObjectDisplay?.[key],src=photoUrl(display?.asset||key),alt=V.esc(o.name)+'，实物摄影';
  if(stage)return `<img class="object-photo isolated-photo" style="--optical-x:${100*(display?.opticalX||0)}%" src="${photoUrl(key+'-cut')}" alt="${alt}" draggable="false">`;
  return `<svg class="object-photo" viewBox="0 0 100 100" role="img" aria-label="${alt}"><image href="${src}" width="100" height="100"/></svg>`;
 }
 function art(o,inReel=false){if(o.photo)return photoArt(o,inReel);const k='enamel-study-'+serial++,u=id=>`url(#${k}-${id})`;const defs=`<defs><linearGradient id="${k}-glaze" x1="0" y1="0" x2="1" y2=".2"><stop stop-color="#c9cbc0"/><stop offset=".2" stop-color="#fffef4"/><stop offset=".52" stop-color="#f5f3e7"/><stop offset=".86" stop-color="#d4d8d0"/><stop offset="1" stop-color="#9aa9a5"/></linearGradient><radialGradient id="${k}-inside" cx=".5" cy=".3" r=".7"><stop stop-color="#fffef5"/><stop offset=".62" stop-color="#e8e9dc"/><stop offset=".87" stop-color="#bdc7c0"/><stop offset="1" stop-color="#e4e8df"/></radialGradient><linearGradient id="${k}-rim" x2="0" y2="1"><stop stop-color="#7296a1"/><stop offset=".35" stop-color="#294e60"/><stop offset=".7" stop-color="#203e4b"/><stop offset="1" stop-color="#6c8e96"/></linearGradient></defs>`;
 const flower=(x,y,scale)=>`<g transform="translate(${x} ${y}) scale(${scale})" opacity=".88">${A.motif(o.pattern)}</g>`;
 let shape='';
 if(o.type==='cup')shape=`<path d="M291 141 C392 112 393 278 297 267" fill="none" stroke="#81969a" stroke-width="25"/><path d="M294 142 C375 125 376 262 299 258" fill="none" stroke="#f7f5e9" stroke-width="16"/><path d="M99 112 L109 302 Q199 351 300 301 L308 112Z" fill="${u('glaze')}" stroke="#b5bbb0"/><ellipse cx="203" cy="112" rx="105" ry="31" fill="${u('rim')}"/><ellipse cx="203" cy="110" rx="97" ry="24" fill="${u('inside')}"/><path d="M116 135 L125 293" stroke="white" stroke-width="9" opacity=".55"/><path d="M111 300 Q201 339 298 299" fill="none" stroke="#a2b5b1" stroke-width="3"/>${flower(206,221,.64)}`;
 else if(o.type==='plate')shape=`<ellipse cx="210" cy="207" rx="154" ry="153" fill="${u('rim')}"/><ellipse cx="210" cy="203" rx="147" ry="146" fill="${u('glaze')}"/><ellipse cx="210" cy="204" rx="120" ry="119" fill="none" stroke="#c9cfc0" stroke-width="2"/><ellipse cx="210" cy="204" rx="114" ry="113" fill="${u('inside')}"/>${flower(210,204,.94)}<path d="M96 124 A145 145 0 0 1 318 106" fill="none" stroke="white" stroke-width="4" opacity=".7"/>`;
 else {const bowl=o.type==='bowl',top=bowl?157:168,base=bowl?303:280;shape=`<path d="M50 ${top} Q65 ${base} 145 ${base+22} Q210 ${base+42} 276 ${base+22} Q355 ${base} 370 ${top}" fill="${u('glaze')}" stroke="#acb8b0"/><ellipse cx="210" cy="${top}" rx="164" ry="${bowl?65:90}" fill="${u('rim')}"/><ellipse cx="210" cy="${top-2}" rx="156" ry="${bowl?57:82}" fill="${u('glaze')}"/><ellipse cx="210" cy="${top+2}" rx="${bowl?143:132}" ry="${bowl?47:63}" fill="${u('inside')}"/>${bowl?flower(214,262,.44):`<g transform="translate(210 176) scale(.65 .42)">${A.motif(o.pattern)}</g>`}<path d="M66 ${top-13} Q205 ${top-100} 353 ${top-17}" fill="none" stroke="#fefef6" stroke-width="3" opacity=".85"/>`;}
 return `<svg viewBox="${inReel&&o.type==='cup'?'43 4 392 395':'0 0 420 410'}" role="img" aria-label="${o.name}，代码绘制的示意器物">${defs}${shape}</svg>`;
 }
 function row(o){
  const onStage=E.exhibits.includes(o),p=o.photo,sample=p.samples[0];
  const src=photoUrl(onStage?p.key+'-cut':M.motifs.find(m=>m.id==='motif:'+p.key+'-'+sample.key).fileKey);
  return `<button class="catalog-row" data-action="explore-select" data-id="${o.id}"><img class="object-photo" src="${src}" alt="${V.esc(onStage?o.name:sample.name)}" loading="lazy"><span><strong>${V.esc(o.name)}</strong><small>${onStage?'搪瓷'+o.typeName+' · 实物摄影':V.esc(sample.name)+' · 查看器物档案'}</small></span>${V.icon('arrow',16)}</button>`;
 }
 const catalogueIds=E.exhibits.map(item=>item.id);
 const coCreateLabel=o=>`用「${o.photo.short}」共创 ${V.icon('chevron',15)}`;
 let queue=[],phase=0,dragOrigin=0,frame=0,settling=null,stageBox=null,resizeObserver=null;
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function stopMotion(){cancelAnimationFrame(frame);frame=0;settling=null;}
 function stage(o){
  stopMotion();phase=0;stageBox=null;resizeObserver?.disconnect();
  queue=window.FilmQueue.create(catalogueIds,o.id);
  return queue.map(({key,offset,itemId})=>{
   const item=E.get(itemId);
   return `<button class="enamel-object" data-key="${key}" data-offset="${offset}" data-id="${itemId}" data-action="${offset?'explore-select':'detail'}" tabindex="${Math.abs(offset)>1?-1:0}" aria-label="${offset?'选择':'查看'}${item.name}"><span class="print-paper"></span>${art(item,true)}</button>`;
  }).join('');
 }
 function caption(o){
  return `<div class="object-register">搪瓷系列 <i>/</i> 实物摄影</div><button class="object-title" data-action="detail" aria-label="查看${o.name}的来源与介绍">${o.name}${V.icon('chevron',13)}</button>`;
 }
 function home(c){
  const o=E.featured(c.s);
  if(!o)return `<section class="page-content"><h1>从一件旧物开始</h1>${V.btn('浏览全部器物','browse','primary full')}</section>`;
  return `<section class="enamel-home">
   <div class="enamel-heading"><h1>从一件旧物开始</h1>${V.btn(V.icon('grid',15)+'目录','browse','object-directory','aria-label="物件目录，浏览全部物件"')}</div>
   <div class="exhibit-spread"><div id="object-stage" class="enamel-stage film-gallery" tabindex="0" role="region" aria-label="搪瓷系列，左右轻划浏览杯、盘、碗、盆">${stage(o)}</div><div class="object-plaque" aria-live="polite">${caption(o)}</div></div>
   <div class="explore-category-bar"><div class="category-scroll" role="group" aria-label="物件类别">${E.categories.map(cat=>`<button data-action="category" data-id="${cat.id}" aria-pressed="${cat.open}" aria-label="${cat.name}${cat.open?'':'，未开放'}">${cat.name}</button>`).join('')}</div>${V.btn(V.icon('mic',18)+'<span>找物</span>','search','category-voice','aria-label="语音找物，说出器型或花纹" title="语音找物"')}</div>
   <div class="enamel-cta">${V.btn(coCreateLabel(o),'start','primary full')}${V.btn('用图片、文字或手绘开始','choose-start','text')}</div>
  </section>`;
 }
 const oldDetail=V.detail,oldCatalog=V.catalog;
 V.home=home;
 V.detail=c=>{
  const o=E.get(c.item.id);if(!o)return oldDetail(c);
  const p=o.photo,s=o.source,record=window.ObjectRecords[p.key]||{},url=photoUrl(p.key);
  const link=(label,href)=>`<a href="${V.esc(href)}" target="_blank" rel="noopener noreferrer">${V.esc(label)} ↗</a>`;
  const cite=(record.refs||[]).map(([name,href])=>link(name,href)).join('');
  return `<article class="page-content photo-detail dossier">
   <header class="dossier-title"><h1>${V.esc(o.name)}</h1>
    <dl class="dossier-facts"><div><dt>${V.esc(record.dateKind||'年代')}</dt><dd>${V.esc(record.period||'年代待考')}</dd></div>
     ${record.origin?`<div><dt>${p.collection?'收藏单位':V.esc(record.originLabel||'来源')}</dt><dd>${V.esc(record.origin.replace(/馆藏$/,'馆'))}</dd></div>`:''}</dl></header>
   <figure class="dossier-figure"><div id="dossier-image"><img src="${url}" alt="${V.esc(o.name)}原照">
    ${record.detail?`<svg viewBox="${record.detail[1].join(' ')}" role="img" aria-label="${V.esc(record.detail[0])}" hidden><image href="${url}" width="${p.width}" height="${p.height}"/></svg>`:''}</div>
    <figcaption><span class="photo-caption">${V.esc(record.photoCaption||'器物全貌')}</span>
     ${record.detail?V.btn(record.detail[0],'object-evidence','detail-zoom','aria-controls="dossier-image" aria-pressed="false"'):''}</figcaption></figure>
   <section class="dossier-story"><h2>器物来历</h2><p class="dossier-history">${V.esc(record.history||o.description)}</p></section>
   ${record.view?`<section class="dossier-value"><h2>${V.esc(record.viewLabel)}</h2><p>${V.esc(record.view)}</p><small>${V.esc(record.by)}</small></section>`:''}
   <details class="dossier-sources"><summary>估值与资料<span aria-hidden="true">＋</span></summary><div>
    <p class="dossier-estimate"><strong>本件估值</strong>${V.esc(record.estimate||'尚无可核实的公开估价')}</p>
    ${record.market?`<section class="market-comparison"><h3>${V.esc(record.market.label)}</h3><p>${V.esc(record.market.text)}</p>${link(record.market.source,record.market.url)}</section>`:''}
    <h3>资料与图像署名</h3>${cite}${link('实物原照 · '+s.creator,s.url)}${link(s.license,s.licenseUrl)}<small>档案保留全幅照片。${window.ObjectDisplay?.[p.key]?.mode==='cutout'?'首页展示图经过背景分离'+(p.exhibit?.roll?'与角度校正':'')+'。':''}</small></div></details>
   ${V.btn('从这件物品开始共创','start','primary full')}</article>`;
 };
 V.catalog=mode=>mode==='swap'?oldCatalog(mode):E.items.map(row).join('');
 V.searchResults=(q,results=E.search(q))=>!q.trim()?'':results.length?results.map(row).join(''):`<div class="search-empty"><h3>没有匹配的实物</h3><p>试试器型、颜色或纹样名称。</p>${V.btn('清空搜索','clear-search','secondary')}</div>`;
 // Keep positions on compositor transforms. No layout reads, image replacement or
 // whole-state persistence takes place inside a drag frame.
 function measure(){
  const el=document.querySelector('.enamel-stage');if(!el)return null;
  stageBox={el,width:el.clientWidth,height:el.clientHeight,
   cards:queue.map(row=>{const card=el.querySelector('[data-key="'+row.key+'"]');return {key:row.key,card,paper:card.querySelector('.print-paper')};})};
  return stageBox;
 }
 function paint(){
  const box=stageBox;if(!box?.el.isConnected)return;
  const xs=[0,.24,.34,.43,.54],ys=[0,.07,.16,.27,.36],scales=[1,.225,.215,.195,.17],alphas=[1,.68,.4,.2,0],turns=[0,10,18,27,32];
  for(const row of queue){
   const {card,paper}=box.cards.find(c=>c.key===row.key),d=row.offset+phase,a=Math.min(4,Math.abs(d)),i=Math.min(3,Math.floor(a)),t=a-i;
   const mix=values=>values[i]+(values[i+1]-values[i])*t;
   card.style.transform='translate3d(calc(-50% + '+(Math.sign(d)*mix(xs)*box.width)+'px),calc(-50% + '+(mix(ys)*box.height)+'px),0) rotate('+(Math.sign(d)*mix(turns))+'deg) scale('+mix(scales)+')';
   card.style.opacity=String(mix(alphas));card.style.zIndex=String(Math.round((4-a)*100));
   paper.style.opacity=String(clamp((a-.15)*1.5,0,1));
  }
 }
 function schedule(){if(!frame)frame=requestAnimationFrame(()=>{frame=0;paint();});}
 function settle(){
  stopMotion();stageBox?.el.classList.remove('dragging');
  if(Math.abs(phase)<.001||matchMedia('(prefers-reduced-motion: reduce)').matches){phase=0;paint();return;}
  settling={from:phase,start:performance.now()};
  const tick=now=>{
   const t=clamp((now-settling.start)/240,0,1);phase=settling.from*Math.pow(1-t,3);paint();
   if(t<1)frame=requestAnimationFrame(tick);else{phase=0;frame=0;settling=null;}
  };
  frame=requestAnimationFrame(tick);
 }
 function begin(){
  stopMotion();measure();dragOrigin=phase;
 }
 function layout(c,drag){
  if(!stageBox?.el.isConnected)measure();if(!stageBox)return;
  if(drag!==undefined){
   phase=clamp(dragOrigin+drag/(stageBox.width*.24),-1,1);
   stageBox.el.classList.add('dragging');schedule();
  }else settle();
 }
 function sync(c,step){
  const o=E.featured(c.s),root=document.querySelector('.enamel-home');
  if(!o||!root)return;
  const previous=queue.find(row=>row.offset===0)?.itemId;
  if(previous!==o.id){
   const size=catalogueIds.length,delta=(catalogueIds.indexOf(o.id)-catalogueIds.indexOf(previous)+size)%size;
   const shift=step||(delta>size/2?delta-size:delta);
   stopMotion();phase+=shift;
   queue=window.FilmQueue.advance(queue,catalogueIds,o.id,shift);
   for(const row of queue){
    const el=root.querySelector(`.enamel-object[data-key="${row.key}"]`),item=E.get(row.itemId);
    if(el.dataset.id!==item.id){const photo=el.querySelector('img');photo.src=photoUrl(item.photo.key+'-cut');photo.alt=item.name+'，实物摄影';photo.style.setProperty('--optical-x',100*(window.ObjectDisplay?.[item.photo.key]?.opticalX||0)+'%');el.dataset.id=item.id;}
    el.dataset.offset=row.offset;el.dataset.action=row.offset?'explore-select':'detail';
    el.tabIndex=Math.abs(row.offset)>1?-1:0;
    el.setAttribute('aria-label',(row.offset?'选择':'查看')+item.name);
   }
   const plaque=root.querySelector('.object-plaque');plaque.innerHTML=caption(o);
   if(!matchMedia('(prefers-reduced-motion: reduce)').matches)plaque.animate([{opacity:0,transform:'translateY(5px)'},{opacity:1,transform:'none'}],{duration:260});
   root.querySelector('.enamel-cta .primary').innerHTML=coCreateLabel(o);
  }
  layout(c);
 }
 // Touch and trackpad use native scrolling. A mouse drag pans the same strip.
 function mountRail(){
  measure();paint();resizeObserver?.disconnect();
  if(stageBox){resizeObserver=new ResizeObserver(()=>{measure();paint();});resizeObserver.observe(stageBox.el);}
  const rail=document.querySelector('.explore-category-bar .category-scroll');
  if(!rail)return;
  let start=null,moved=false;
  rail.onpointerdown=e=>{
   if(e.pointerType!=='mouse'||e.button!==0)return;
   start={id:e.pointerId,x:e.clientX,left:rail.scrollLeft};moved=false;
  };
  rail.onpointermove=e=>{
   if(!start||e.pointerId!==start.id)return;
   if(!(e.buttons&1)){start=null;return;}
   const dx=e.clientX-start.x;
   if(!moved&&Math.abs(dx)<5)return;
   if(!moved){rail.setPointerCapture(e.pointerId);rail.classList.add('is-panning');moved=true;}
   rail.scrollLeft=start.left-dx;
  };
  rail.onpointerup=rail.onpointercancel=()=>{start=null;rail.classList.remove('is-panning');};
  rail.addEventListener('click',e=>{
   if(moved&&e.detail){e.preventDefault();e.stopPropagation();moved=false;}
  },true);
  rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')moved=false;});
 }
 window.FilmHome={layout,sync,mountRail,begin};window.EnamelArt={art,photoUrl};
 for(const o of [...E.illustrations,...E.items])M.heritageObjects.push({id:o.sourceObjectId||'object:'+o.id,legacyItemId:o.legacyItemId,name:o.name,category:'enamel',physicalForm:o.type,assetId:null,provenance:{...o.source,kind:o.photo?'external-photo':'illustration',verified:Boolean(o.photo),collectionNumber:null,manufacturer:null,year:null,photographer:o.photo?.credit||null,license:o.source.license},motifIds:o.photo?o.photo.samples.map(s=>'motif:'+o.photo.key+'-'+s.key):['motif:'+o.legacyItemId]});
})();
