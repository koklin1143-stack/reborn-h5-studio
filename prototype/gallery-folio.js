/* A publication is an immutable design snapshot. Build its plates and notes from that snapshot. */
(()=>{
 const V=window.Views,M=window.Studio,S=window.LocalStore,v=window.Vessels,esc=V.esc;
 const number=n=>String(n).padStart(2,'0');
 const name=p=>v.data[p.snapshot.canvas]?.name||M.category(p.snapshot.category).name;
 const img=(url,label,cls='edition-object')=>'<img class="'+cls+'" src="'+esc(url)+'" alt="'+esc(label)+'" draggable="false">';
 const cache=new Map();
 let observer,queue=Promise.resolve();
 function plateUrl(p){
  if(p.coverKey)return window.EnamelArt.photoUrl(p.coverKey);
  return (p.snapshot.previewTransparent&&S.image(p.snapshot.previewAssetId))||cache.get(p.id)?.url||'';
 }
 let downloadURL='',sizer=null;
 async function prepareDownload(p,reader){
  const link=reader.querySelector('.product-save'),url=plateUrl(p);
  if(!link||!url||link.dataset.preparing)return;
  link.dataset.preparing='true';
  try{
   const im=new Image();im.src=url;await im.decode();const c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;c.getContext('2d').drawImage(im,0,0);
   const blob=await new Promise(resolve=>c.toBlob(resolve,'image/png'));
   if(!reader.isConnected||!blob)return;
   downloadURL=URL.createObjectURL(blob);link.href=downloadURL;link.download=p.title.replace(/[<>:"/\\|?*]/g,'')+'-成品.png';link.hidden=false;
  }catch{if(reader.isConnected)link.remove();}
 }
 function oldCover(p){return V.art(p.snapshot);}
 function cover(p){
  const w=p.snapshot,alt=p.title+' · '+name(p);
  if(p.coverKey)return img(window.EnamelArt.photoUrl(p.coverKey),alt);
  if(w.previewTransparent&&S.image(w.previewAssetId))return img(S.image(w.previewAssetId),alt);
  if(!v.data[w.canvas]||p.archived)return oldCover(p);
  if(w.imageId&&!S.image(w.imageId))return S.image(w.previewAssetId)?img(S.image(w.previewAssetId),'留存预览 · '+alt):'<small>成品图暂不可用</small>';
  return '<span class="folio-render" data-render-file="'+esc(p.id)+'">'+(cache.get(p.id)?.url?img(cache.get(p.id).url,alt):'<small>正在显影…</small>')+'</span>';
 }
 async function renderOld(p){
  const w=M.normalizeRecord(M.copy(p.snapshot),'work'),preview=await window.WorkResult.capture(w,{isolated:true});
  return URL.createObjectURL(preview.asset.blob);
 }
 // Measure the silhouette once; each vessel type supplies its own catalogue scale in CSS.
 const thumbnailMetrics=new Map();
 function measureThumbnail(im){
  const downsample=Math.min(1,224/Math.max(im.naturalWidth,im.naturalHeight));
  const canvas=document.createElement('canvas');
  const w=canvas.width=Math.max(1,Math.round(im.naturalWidth*downsample));
  const h=canvas.height=Math.max(1,Math.round(im.naturalHeight*downsample));
  const ctx=canvas.getContext('2d');ctx.drawImage(im,0,0,w,h);
  const bytes=ctx.getImageData(0,0,w,h).data;
  let opacity=0,xMoment=0,left=w,right=0,top=h,bottom=0;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
   const alpha=bytes[(y*w+x)*4+3]/255;
   if(alpha<.1)continue;
   opacity+=alpha;xMoment+=(x+.5)*alpha;
   left=Math.min(left,x);right=Math.max(right,x+1);top=Math.min(top,y);bottom=Math.max(bottom,y+1);
  }
  if(!opacity||opacity>=w*h-.01)return null;
  const cx=xMoment/opacity,cy=(top+bottom)/2,aspect=im.naturalWidth/im.naturalHeight;
  const widthRatio=w/(right-left),heightRatio=aspect*h/(bottom-top);
  const safeWidth=46*w/Math.max(cx-left,right-cx);
  return {width:`min(calc(var(--body-width) * ${widthRatio}),calc(var(--body-height) * ${heightRatio}),${safeWidth}cqw)`,
   x:-100*cx/w+'%',y:-100*cy/h+'%'};
 }
 function fitThumbnail(im){
  if(!im.matches('.tile-art img')||!im.naturalWidth)return;
  const src=im.currentSrc||im.src;
  if(!thumbnailMetrics.has(src)){
   let result=null;
   try{result=measureThumbnail(im);}catch{/* An unreadable preview uses the standard contain fit. */}
   if(thumbnailMetrics.size>=64)thumbnailMetrics.delete(thumbnailMetrics.keys().next().value);
   thumbnailMetrics.set(src,result);
  }
  const fit=thumbnailMetrics.get(src);if(!fit)return;
  im.style.setProperty('--plate-width',fit.width);im.style.setProperty('--plate-x',fit.x);
  im.style.setProperty('--plate-y',fit.y);im.classList.add('fitted-thumbnail');
 }
 function mount(c){
  observer?.disconnect();sizer?.disconnect();if(downloadURL){URL.revokeObjectURL(downloadURL);downloadURL='';}
  const grid=document.querySelector('.file-grid');
  if(grid){
   grid.addEventListener('load',e=>{if(e.target instanceof HTMLImageElement)fitThumbnail(e.target);},true);
   grid.querySelectorAll('.tile-art img').forEach(im=>{if(im.complete)fitThumbnail(im);});
  }
  const reader=document.querySelector('.folio-reader');
  if(reader){
   const p=M.findPublication(c.s,c.s.ui.galleryId);
   if(p){fitPages(reader,bindReader(reader,p,c));if(c.folioLeaf==='product')prepareDownload(p,reader);}
  }
  const targets=[...document.querySelectorAll('[data-render-file]')];if(!targets.length)return;
  function request(el){
   const id=el.dataset.renderFile;
   queue=queue.then(async()=>{
    if(!el.isConnected)return;
    const p=M.findPublication(c.s,id);if(!p)return;
    let row=cache.get(id);
    if(!row){
     try{row={url:await renderOld(p)};}catch{row={fallback:true};}
     if(row.url)cache.set(id,row);
    }
    if(el.isConnected){
     el.innerHTML=row.url?img(row.url,p.title+' · '+name(p)):oldCover(p);
     if(row.url&&el.closest('.folio-reader'))prepareDownload(p,el.closest('.folio-reader'));
    }
    for(const [key,value] of cache){
     if(cache.size<=16)break;
     if(![...document.querySelectorAll('[data-render-file]')].some(n=>n.dataset.renderFile===key)){URL.revokeObjectURL(value.url);cache.delete(key);}
    }
   }).catch(()=>{});
  }
  if(!('IntersectionObserver' in window)){targets.forEach(request);return;}
  observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){observer.unobserve(e.target);request(e.target);}},{root:document.getElementById('main'),rootMargin:'160px'});
  targets.forEach(el=>observer.observe(el));
 }
 function unfold(trigger,navigate){
  const front=trigger.querySelector('.file-face')||trigger.closest('.file-face'),motion=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!front||!motion)return navigate();
  const shell=document.querySelector('.app');
  if(shell.classList.contains('unfolding-file'))return;
  if(!document.startViewTransition)return navigate();
  front.classList.add('file-origin');shell.classList.add('unfolding-file');
  const transition=document.startViewTransition(navigate);
  transition.finished.catch(()=>{}).finally(()=>{front.classList.remove('file-origin');shell.classList.remove('unfolding-file');});
 }
 function swatchGround(colors){
  function brightness(hex){
   const [r,g,b]=hex.slice(1).match(/../g).map(value=>parseInt(value,16));
   return .2126*r+.7152*g+.0722*b;
  }
  const inks=colors.filter(([label])=>label!=='器身釉色');
  if(inks.length&&inks.every(([,hex])=>brightness(hex)>180))return 'dark';
  if(inks.length&&inks.every(([,hex])=>brightness(hex)<100))return 'light';
  const glaze=colors.find(([label])=>label==='器身釉色')?.[1];
  return glaze&&brightness(glaze)<110?'dark':'light';
 }
 function card(p,lead,author){
  const process=technique(p),print=lead?appliedPattern(p):'';
  return `<button type="button" class="file-deck gallery-cover ${lead?'edition-feature':''}" data-action="gallery-detail" data-id="${esc(p.id)}" aria-label="展开《${esc(p.title)}》共创档案"><span class="file-face">
   ${lead?'':'<span class="tile-register">作者&ensp;'+esc(author)+'</span>'}
   <span class="file-picture${print?' has-print':''}"><span class="file-art${lead?'':' tile-art'}" data-vessel="${esc(p.snapshot.canvas)}">${cover(p)}</span>
    ${lead?'<span class="file-id">作者&ensp;'+esc(author)+'</span>':''}
    ${print?`<span class="cover-sample" aria-hidden="true"><span class="pattern-mount ${swatchGround(palette(p.snapshot))}">${print}</span><small>纹样</small></span>`:''}
   </span><span class="file-caption"><strong>${esc(p.title)}${lead?'<span class="cover-chevron" aria-hidden="true">›</span>':''}</strong><span class="file-spec">${esc([name(p),process].filter(Boolean).join(' · '))}</span></span></span></button>`;
 }
 const zoneName=(r,p)=>v.isFill(r)&&(v.coveragePercent(p.coverWidth)<100||v.coveragePercent(p.coverHeight)<100)?(r.mode==='wrap'?'外壁环带':'内侧局部'):r.label;
 function palette(w){
  const glaze=w.appliedVessel?.material?.color||w.cupMaterial?.color,inks=[];
  if(v.data[w.canvas]&&glaze)inks.push(['器身釉色',v.glazeHex(glaze)]);
  if(w.patternInk==='duotone')inks.push(['深色印墨',w.inkDark],['浅色印墨',w.inkLight]);
  else if(w.patternInk==='custom')inks.push(['纹样印色',w.inkColor]);
  else if(({blue:1,red:1,graphite:1})[w.patternInk])inks.push(['纹样印色',window.PatternTexture.basePigment(w,'#ffffff')]);
  for(const part of w.provenance?.parts||[])if(part.tint)inks.push([part.name,part.tint]);
  return inks.filter(([,hex])=>/^#[\da-f]{6}$/i.test(hex));
 }
 function evidence(p){
  const w=p.snapshot,photo=w.provenance?.origin==='photo-study'?window.Explore.fromSource(w.sourceObjectId):null;
  const parts=w.provenance?.parts||[],placement=w.appliedVessel?.placement||w.vesselPlacement;
  const r=placement&&v.regions[w.canvas]?.[placement.zone],fields=[];
  const layout=window.Workbench?.layoutName(w.patternLayout);
  if(layout)fields.push(['纹样构成',layout+(parts.length>1?' · '+parts.length+' 份取样':'')]);
  if(r){
   fields.push(['印花位置',zoneName(r,placement)]);
   if(v.isFill(r)){
    fields.push([r.mode==='wrap'?'环绕宽度 / 高度':'覆盖宽度 / 高度',v.coveragePercent(placement.coverWidth)+'% / '+v.coveragePercent(placement.coverHeight)+'%']);
    fields.push([r.mode==='wrap'?'整圈重复':'横向重复',v.fillCount(r,placement.scale)+' 组']);
   }else if(Number.isFinite(placement.scale))fields.push(['单幅比例',Math.round(placement.scale)+'%']);
  }
  return {photo,parts,fields,colors:palette(w)};
 }
 function appliedPattern(p){
  const w=p.snapshot,href=p.patternKey?window.EnamelArt.photoUrl(p.patternKey):S.image(w.imageId);
  return (!w.imageId||href)?window.PatternTexture.svg(w,{imageHref:href,transparent:true}):'';
 }
 function samplePlate(p,info){
  const {photo,parts}=info,pattern=appliedPattern(p);
  if(!pattern&&!photo?.photo)return '<p class="sample-spec">未留存取样图</p>';
  let source='';
  if(photo?.photo){
   const f=photo.photo;
   const boxes=parts.filter(m=>Array.isArray(m.region)&&m.region.length===4&&m.region.every(Number.isFinite)).map(m=>{
    const [x,y,width,height]=m.region;return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="none" stroke="#fff" stroke-width="3" vector-effect="non-scaling-stroke"/><rect x="${x}" y="${y}" width="${width}" height="${height}" fill="none" stroke="#454545" stroke-width="1.25" vector-effect="non-scaling-stroke"/>`;
   }).join('');
   source=`<figure><div class="contact-window"><svg viewBox="0 0 ${f.width} ${f.height}" role="img" aria-label="原物及取样位置"><image href="${esc(window.EnamelArt.photoUrl(f.key))}" width="${f.width}" height="${f.height}"/>${boxes}</svg></div><figcaption>原物取样</figcaption></figure>`;
  }
  return `<div class="contact-strip">${source}${pattern?`<figure><div class="contact-window print-window" data-ground="${swatchGround(info.colors)}">${pattern}</div><figcaption>应用纹样</figcaption></figure>`:''}</div>`;
 }
 function coverageDiagram(w){
  const placement=w.appliedVessel?.placement||w.vesselPlacement,r=v.regions[w.canvas]?.[placement?.zone];
  if(r?.mode!=='wrap')return '';
  const [u,y,halfWidth,halfHeight]=v.fillWindow(r,placement);
  const areas=[-1,0,1].map(turn=>{
   const start=Math.max(0,.5+u+turn-halfWidth),end=Math.min(1,.5+u+turn+halfWidth);
   return end>start?`<rect x="${100*start}%" y="${100*(1-y-halfHeight)}%" width="${100*(end-start)}%" height="${200*halfHeight}%" fill="#737373"/>`:'';
  }).join('');
  return `<figure class="wrap-diagram"><figcaption><span>外壁展开示意</span><span><i></i>印花区域</span></figcaption><svg role="img" aria-label="圆周覆盖 ${v.coveragePercent(placement.coverWidth)}%，高度 ${v.coveragePercent(placement.coverHeight)}%" width="100%" height="34">${areas}<path d="M0 0H1000" stroke="#777"/></svg><div><span>背面</span><span>正面</span><span>背面</span></div></figure>`;
 }
 const files={product:{title:'成品图版',size:[360,495]},report:{title:'作者留言',size:[360,390]},sample:{title:'取样记录',size:[390,290]},color:{title:'配色记录',size:[330,310]}};
 const hasLeaf=key=>Object.hasOwn(files,key);
 const fileNumber=k=>number(Object.keys(files).indexOf(k)+1);
 function note(p){const value=(p.snapshot.idea||p.idea||'').trim();return value==='创作者暂未填写创作说明。'?'':value;}
 function notePages(value){
  const sentences=value.match(/[^。！？；\n]*[。！？；\n]+[”’」』）】]*|[^。！？；\n]+$/gu)||[];
  const pages=[];
  for(const sentence of sentences){
   const last=pages.length-1;
   if(last>=0&&Array.from(pages[last]+sentence).length<=80)pages[last]+=sentence;
   else pages.push(sentence);
  }
  return pages;
 }
 function pageCount(p,k,info){
  if(k==='report')return Math.max(1,notePages(note(p)).length);
  if(k==='color')return Math.max(1,Math.ceil(info.colors.length/3));
  if(k==='sample')return Math.max(1,Math.ceil(info.parts.length/2));
  return 1;
 }
 const title=(p,k,info)=>k==='color'&&!info.colors.length?'材料记录':files[k].title;
 const dateOf=p=>(p.snapshot.savedAt||p.createdAt||'').slice(0,10).replace(/^(\d{4})-(\d{2})-(\d{2})$/,(_,y,m,d)=>`${y}年${Number(m)}月${Number(d)}日`);
 const technique=p=>p.technique||window.Workbench?.layoutName(p.snapshot.patternLayout)||'';
 const sourceName=(p,c,info)=>info.photo?.name||p.snapshot.imageName||c.s.sources.find(x=>x.id===p.sourceId)?.name||M.getItem(p.snapshot.itemId)?.name||'';
 function register(p,k,info){
  return `<div class="paper-register"><span><i>${fileNumber(k)}</i>${title(p,k,info)}</span><b>共创作品</b></div>`;
 }
 function pageFoot(p,k,n,info){
  return `<div class="paper-foot"><time>${esc(dateOf(p))}</time><span>${number(n+1)} / ${number(pageCount(p,k,info))}</span></div>`;
 }
 function fieldTable(fields){
  return `<dl class="spec-table">${fields.map(([label,value])=>`<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`;
 }
 // Section through the axis of the enamel body, perpendicular to the cup handle.
 // Mirror the actual lathe profile. Drawing units are relative, as in the workbench.
 function bodySection(p){
  const model=v.data[p.snapshot.canvas],profile=model?.profile;if(!profile)return '';
  const radius=Math.max(...profile.map(point=>point[0])),ys=profile.map(point=>point[1]),low=Math.min(...ys),high=Math.max(...ys);
  const s=Math.min(61/radius,47/(high-low)),middle=(high+low)/2;
  const wall=[...profile,...[...profile].reverse().map(([x,y])=>[-x,y])];
  const points=wall.map(([x,y])=>(76+x*s).toFixed(2)+','+(29-(y-middle)*s).toFixed(2)).join(' ');
  const outer=model.rimRadius?model.rimRadius+model.rimTube:radius;
  const inner=model.rimRadius?model.rimRadius-model.rimTube:Math.min(...profile.filter(([,y])=>y===high).map(([x])=>x));
  const plan=`<figure class="body-plan"><svg viewBox="0 0 152 87" role="img" aria-label="器身俯视与截面位置"><circle cx="76" cy="43" r="35"/><circle cx="76" cy="43" r="${35*inner/outer}"/>
   ${model.foot?`<circle class="hidden-edge" cx="76" cy="43" r="${35*model.foot/outer}"/>`:''}<path class="axis" d="M76 2v82M26 43h100"/><path class="cut-mark" d="M29 38v6h6m82 0h6v-6"/><text x="23" y="33">A</text><text x="120" y="33">A</text></svg><figcaption>器身俯视</figcaption></figure>`;
  return `<div class="model-views">${plan}<figure class="body-section"><svg viewBox="0 0 152 58" role="img" aria-label="${esc(name(p))}的器身轴截面"><path class="axis" d="M76 0v58"/><polygon points="${points}"/></svg><figcaption><b>A–A</b> 器身截面</figcaption></figure></div>`;
 }
 function productView(p){
  return `<div class="product-view gallery-detail-art"><div class="folio-product">${cover(p)}</div>${bodySection(p)}</div>`;
 }
 function inkLedger(inks){
  return `<div class="ink-ledger">${inks.map(([label,h])=>`<div><i style="--chip:${h}"></i><span><b class="ink-label">${esc(label)}</b><small>${h.toUpperCase()}</small></span></div>`).join('')}</div>`;
 }
 function inkNote(p,info){
  if((!p.snapshot.patternInk||p.snapshot.patternInk==='original')&&p.snapshot.imageId)return '纹样沿用素材原色';
  return info.colors.length?'':'未单独记录色值';
 }
 function reportPaper(p,info,n){
  const idea=notePages(note(p))[n];
  return `${register(p,'report',info)}<h1>${esc(p.title)}</h1><div class="object-type">${esc([name(p),technique(p)].filter(Boolean).join(' · '))}</div>
   ${p.snapshot.inspiration?.title?'<p class="prior-file">灵感来自《'+esc(p.snapshot.inspiration.title)+'》</p>':''}
   <p class="paper-note">${idea?esc(idea):'作者还没留言。'}</p>${fieldTable(info.fields)}${coverageDiagram(p.snapshot)}${pageFoot(p,'report',n,info)}`;
 }
 function productPaper(p,info){
  return `${register(p,'product',info)}<h1>${esc(p.title)}</h1><div class="object-type">${esc(name(p))}</div>${productView(p)}${pageFoot(p,'product',0,info)}`;
 }
 function samplePaper(p,c,info,n){
  const parts=info.parts.slice(n*2,n*2+2),blends={multiply:'叠印',screen:'提亮','soft-light':'柔光',overlay:'叠加'},edges={soft:'柔边',left:'左侧渐隐',right:'右侧渐隐'};
  const labels=parts.map(part=>[part.name,blends[part.blend],edges[part.edge],Number.isFinite(part.opacity)&&part.opacity<100?part.opacity+'%':''].filter(Boolean).join(' · '));
  return `${register(p,'sample',info)}<h1>${esc(sourceName(p,c,info)||p.title)}</h1>${samplePlate(p,info)}
   <p class="sample-spec">${esc(labels.join('　/　')||p.snapshot.imageName||'')}</p>${pageFoot(p,'sample',n,info)}`;
 }
 function colorPaper(p,info,n){
  return `${register(p,'color',info)}<h1>${esc(p.title)}</h1><p class="object-type">${esc(name(p))}</p>
   ${inkLedger(info.colors.slice(n*3,n*3+3))}<p class="ink-note">${inkNote(p,info)}</p>${pageFoot(p,'color',n,info)}`;
 }
 function pageArt(p,c,k,info,n=0){
  const body=k==='report'?reportPaper(p,info,n):k==='product'?productPaper(p,info):k==='sample'?samplePaper(p,c,info,n):colorPaper(p,info,n);
  const [w,h]=files[k].size;
  return `<div class="paper-sheet sheet-${k}" style="--pw:${w};--ph:${h}" data-size="${w} ${h}"><div class="paper-ink">${body}</div></div>`;
 }
 function folioPanel(p,key,info,content){
  return `<section class="board-panel doc-${key}">${content}<button type="button" class="doc-open" data-action="gallery-sheet" data-id="${key}" aria-label="查看${title(p,key,info)}"></button></section>`;
 }
 function spread(p,c){
  const info=evidence(p),pattern=appliedPattern(p),origin=sourceName(p,c,info);
  const zone=info.fields.find(([label])=>label==='印花位置')?.[1],process=technique(p);
  const motif=info.parts.map(part=>part.name).filter(Boolean).join('、')||p.snapshot.imageName||'';
  const statement=note(p),swatches=info.colors.slice(0,3);
  const figureCaption=(label,detail)=>`<div class="plate-caption"><span>${esc(label)}<i aria-hidden="true">›</i></span>${detail?`<small>${esc(detail)}</small>`:''}</div>`;
  const sample=`<div class="plate-art"><div class="pattern-mount ${swatchGround(info.colors)}">${pattern||'<small>未留存纹样图</small>'}</div></div>${figureCaption('纹样',motif)}`;
  const product=`<div class="plate-art"><span class="folio-product">${cover(p)}</span></div>${figureCaption('成品',zone?'印在'+zone:name(p))}`;
  const report=`<div class="folio-subhead">作者留言<i aria-hidden="true">›</i></div><p class="board-note">${statement?esc(statement):'作者还没留言。'}</p>`;
  const color=`<div class="folio-subhead">${info.colors.length?'用色':'材料'}<i aria-hidden="true">›</i></div><div class="folio-colors">${swatches.map(([label,hex])=>`<span title="${esc(label)} ${hex.toUpperCase()}"><i style="--chip:${hex}"></i>${esc(label)}</span>`).join('')||esc(inkNote(p,info))}${info.colors.length>3?`<small>另${info.colors.length-3}色</small>`:''}</div>`;
  return `<div class="folio-desk"><article class="folio-stage" aria-labelledby="publication-title" lang="zh-CN">
   <header class="drawing-title"><h1 id="publication-title">${esc(p.title)}</h1><p class="folio-kind">${esc([name(p),process].filter(Boolean).join(' · '))}</p>
   ${origin?`<p class="folio-origin"><span>${p.snapshot.provenance?.origin==='ai-pattern'?'纹样素材':'取样自'}</span>${esc(origin)}</p>`:''}</header>
   ${folioPanel(p,'sample',info,sample)}${folioPanel(p,'product',info,product)}
   ${folioPanel(p,'report',info,report)}${folioPanel(p,'color',info,color)}
   <footer class="folio-colophon"><span>作者&ensp;${esc(M.galleryAuthor(c.s,p))}</span><time>${esc(dateOf(p))}</time></footer>
   </article></div>`;
 }
 function reader(p,c){
  const k=c.folioLeaf,info=evidence(p),count=pageCount(p,k,info),source=info.photo?.source;
  return `<section class="folio-reader" aria-label="${title(p,k,info)}阅读器"><div class="read-field" tabindex="0" aria-label="文件，可双指放大或使用下方缩放按钮"><div class="read-surface">${pageArt(p,c,k,info)}</div></div>
   <div class="reader-bar"><div class="reader-caption"><strong>${title(p,k,info)}</strong>
   ${k==='product'?'<a class="product-save" hidden>保存透明 PNG ↓</a>':''}
   ${k==='sample'&&source?`<span class="source-credit"><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.creator)} ↗</a> · <a href="${esc(source.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(source.license)}</a></span>`:''}
   ${count>1?`<div class="leaf-pager"><button type="button" data-step="-1" aria-label="上一张" disabled>‹</button><span>1/${count}</span><button type="button" data-step="1" aria-label="下一张">›</button></div>`:''}</div>
   <div class="lens-controls" role="group" aria-label="文件缩放"><button type="button" data-mag="less" aria-label="缩小">−</button><button type="button" data-mag="fit" aria-label="适合屏幕">100%</button><button type="button" data-mag="more" aria-label="放大">＋</button></div></div></section>`;
 }
 function fitPages(root,onFit){
  const frames=root.querySelectorAll('.read-field');
  function fit(el){
   const sheet=el.querySelector('.paper-sheet');if(!sheet)return;
   const [w,minHeight]=sheet.dataset.size.split(' ').map(Number),margin=28;
   sheet.style.setProperty('--ph',minHeight);const ink=sheet.querySelector('.paper-ink'),h=Math.max(minHeight,ink.scrollHeight+(ink.scrollHeight>minHeight?12:0));sheet.style.setProperty('--ph',h);
   const scale=Math.min((el.clientWidth-margin)/w,(el.clientHeight-margin)/h);
   if(scale>0){sheet.style.setProperty('--fit',scale);onFit?.();}
  }
  sizer=new ResizeObserver(entries=>entries.forEach(e=>fit(e.target)));
  frames.forEach(el=>{fit(el);sizer.observe(el);});
 }
 function bindReader(root,p,c){
  const scene=root.querySelector('.read-field'),surface=root.querySelector('.read-surface'),fit=root.querySelector('[data-mag=fit]');
  let zoom=1,dx=0,dy=0,n=0,start=null,lastTap=null;
  const points=new Map(),clamp=(x,limit)=>Math.max(-limit,Math.min(limit,x));
  function paint(){
   const sheet=surface.querySelector('.paper-sheet'),s=Number(sheet.style.getPropertyValue('--fit'))||1,w=sheet.offsetWidth,h=sheet.offsetHeight;
   dx=clamp(dx,Math.max(0,(w*s*zoom-scene.clientWidth+28)/2));dy=clamp(dy,Math.max(0,(h*s*zoom-scene.clientHeight+28)/2));
   surface.style.transform='translate('+dx+'px,'+dy+'px) scale('+zoom+')';fit.textContent=Math.round(zoom*100)+'%';
   root.querySelector('[data-mag=less]').disabled=zoom<=1;root.querySelector('[data-mag=more]').disabled=zoom>=4;
  }
  function at(e){const r=scene.getBoundingClientRect();return {x:e.clientX-r.left-r.width/2,y:e.clientY-r.top-r.height/2};}
  function scale(z,anchor={x:0,y:0}){
   const next=Math.max(1,Math.min(4,z)),ratio=next/zoom;dx=anchor.x+(dx-anchor.x)*ratio;dy=anchor.y+(dy-anchor.y)*ratio;zoom=next;paint();
  }
  function segment(){const pts=[...points.values()];if(!pts.length)return null;if(pts.length===1)return {...pts[0],distance:0};
   return {x:(pts[0].x+pts[1].x)/2,y:(pts[0].y+pts[1].y)/2,distance:Math.hypot(pts[1].x-pts[0].x,pts[1].y-pts[0].y)};}
  function rebase(moved){const a=segment();start=a?{a,dx,dy,zoom,moved}:null;}
  scene.onpointerdown=e=>{if(e.button!==0||points.size>=2)return;points.set(e.pointerId,at(e));scene.setPointerCapture(e.pointerId);rebase(points.size>1);};
  scene.onpointermove=e=>{if(!points.has(e.pointerId)||!start)return;points.set(e.pointerId,at(e));const a=segment(),old=start.a;
   if(Math.hypot(a.x-old.x,a.y-old.y)>4||a.distance)start.moved=true;
   zoom=old.distance?Math.max(1,Math.min(4,start.zoom*a.distance/old.distance)):start.zoom;
   dx=a.x+(start.dx-old.x)*zoom/start.zoom;dy=a.y+(start.dy-old.y)*zoom/start.zoom;paint();};
  scene.onpointerup=e=>{if(!points.has(e.pointerId)||!start)return;
   const a=at(e),moved=start.moved;points.delete(e.pointerId);
   if(!moved&&!points.size){const time=performance.now();if(lastTap&&time-lastTap.time<350&&Math.hypot(a.x-lastTap.x,a.y-lastTap.y)<24){scale(zoom>1?1:2,a);lastTap=null;}else lastTap={...a,time};}else lastTap=null;
   rebase(true);};
  scene.onpointercancel=scene.onlostpointercapture=e=>{if(points.delete(e.pointerId)){lastTap=null;rebase(true);}};
  scene.onkeydown=e=>{if(['+','=','-','0','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();
   if(e.key.startsWith('Arrow')){dx+=e.key==='ArrowLeft'?40:e.key==='ArrowRight'?-40:0;dy+=e.key==='ArrowUp'?40:e.key==='ArrowDown'?-40:0;paint();}else scale(e.key==='0'?1:e.key==='-'?zoom/1.5:zoom*1.5);}};
  root.onclick=e=>{const b=e.target.closest('button');if(!b)return;
   if(b.dataset.mag)scale(b.dataset.mag==='fit'?1:b.dataset.mag==='more'?zoom*1.5:zoom/1.5);
   if(b.dataset.step){
    const info=evidence(p),count=pageCount(p,c.folioLeaf,info);n=Math.max(0,Math.min(count-1,n+Number(b.dataset.step)));
    surface.innerHTML=pageArt(p,c,c.folioLeaf,info,n);sizer?.disconnect();fitPages(root,paint);
    root.querySelector('.leaf-pager span').textContent=(n+1)+'/'+count;root.querySelector('[data-step="-1"]').disabled=n===0;root.querySelector('[data-step="1"]').disabled=n===count-1;scale(1);
   }
  };
  return paint;
 }
 window.GalleryFolio={card,spread,mount,unfold,reader,hasLeaf,fileNumber};
})();
