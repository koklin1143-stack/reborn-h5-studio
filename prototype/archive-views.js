/* Local archive views for the gallery, works and points. */
(() => {
 const M=window.Studio,V=window.Views,{esc,btn,tag,art,date,icon}=V;
 const oldResult=V.result,oldHeader=V.header;
 const data=id=>`data-id="${esc(id)}"`;
 const glyph=(name,size=20)=>name==='bookmark'?`<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z"/></svg>`:icon(name,size);
 function social(c,p,kind){
  const like=kind==='like',label=like?'喜欢':'收藏',{active,count}=M.engagement(c.s,p,kind);
  const mark=like?`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="${active?'m3 8 3 3 7-7':'M8 3v10M3 8h10'}"/></svg>`:glyph('bookmark',14);
  const caption=active?(like?'已喜欢':'已收藏'):label;
  return btn(`<span class="like-mark">${mark}<span>${caption}</span><b>${count}</b></span>`,'gallery-'+kind,'card-like',`${data(p.id)} aria-pressed="${active}" aria-label="${active?'取消':''}${label}《${esc(p.title)}》，${count}人${label}"`);
 }
 function cards(c,rows,withCover=false){
  const make=(p,lead)=>`<article class="gallery-card file-slot${lead?' catalogue-lead':''}">${window.GalleryFolio.card(p,lead,M.galleryAuthor(c.s,p))}<div class="work-reactions">${social(c,p,'like')}${social(c,p,'collect')}</div></article>`;
  const first=withCover&&rows[0],rest=first?rows.slice(1):rows;
  return `<div class="gallery-grid file-grid">${first?make(first,true):''}${rest.length?'<div class="register-grid">'+rest.map(p=>make(p,false)).join('')+'</div>':''}</div>`;
 }
 function gallery(c){
  const f=c.s.ui.gallery,rows=window.ArchiveService.list(c.s,f);
  const sorts=[['featured','精选'],['latest','最新'],['theme','本月主题']];
  const forms=new Map([['all','全部器型'],...Object.entries(window.Vessels.data).filter(([key])=>window.Vessels.available(key)).map(([key,v])=>[key,v.short])]);
  for(const p of M.queryGallery(c.s,{sort:'latest'}))if(p.snapshot.category!=='enamel')forms.set(p.snapshot.category,M.category(p.snapshot.category).name);
  if(!forms.has(f.category))forms.set(f.category,window.Vessels.data[f.category]?.short||M.category(f.category).name);
  return `<section class="gallery-content">
   <div class="gallery-filter-bar"><div class="gallery-sorts" role="group" aria-label="作品排序">${sorts.map(([id,t])=>btn(t,'gallery-sort','text',`data-id="${id}" aria-pressed="${f.sort===id}"`)).join('')}</div>
   <select aria-label="按器型筛选" class="gallery-form">${[...forms].map(([k,t])=>`<option value="${esc(k)}" ${f.category===k?'selected':''}>${esc(t)}</option>`).join('')}</select></div>
   ${f.category!=='all'?`<div class="gallery-active-filter" role="status"><span>仅看：${esc(forms.get(f.category))} · ${rows.length} 件</span>${btn('查看全部器型','gallery-clear-category','text')}</div>`:''}
   <div class="catalogue-rubric"><h2>${f.sort==='theme'?esc(M.theme.title):f.sort==='latest'?'新近发布':'社区精选'}</h2><span>${rows.length} 件作品 · 互动模拟</span></div>
   ${rows.length?cards(c,rows,f.sort==='featured'&&f.category==='all'):`<div class="archive-empty"><h2>还没有这类作品</h2><p>换个器型看看。</p>${btn('查看全部作品','gallery-reset','secondary')}</div>`}</section>`;
 }

 function galleryDetail(c){
  const p=window.ArchiveService.get(c.s,c.s.ui.galleryId);
  if(!p)return `<section class="page-content archive-empty"><h1>作品已撤回展示</h1>${btn('返回作品广场','gallery-back')}</section>`;
  if(c.folioLeaf)return window.GalleryFolio.reader(p,c);
  return `<section class="gallery-detail publication-file">${window.GalleryFolio.spread(p,c)}
   <div class="detail-action-bar">${social(c,p,'like')}${social(c,p,'collect')}${p.kind==='local'?btn('撤回','gallery-withdraw','file-withdraw',data(p.id)):''}${btn('以此共创 '+icon('arrow',15),'gallery-inspire','primary',data(p.id))}</div></section>`;
 }
 const dayKey=d=>[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
 const newest=list=>[...list].reverse().sort((a,b)=>Date.parse(b.createdAt)-Date.parse(a.createdAt));
 const signed=n=>n>0?'+'+n:String(n);
 function groups(rows,keyOf){
  const result=new Map();
  for(const row of rows){const key=keyOf(row);if(!result.has(key))result.set(key,[]);result.get(key).push(row);}
  return result;
 }
 function ledgerRows(entries,limit=Infinity){
  const months=groups(entries,e=>dayKey(new Date(e.createdAt)).slice(0,7));
  let html='';
  for(const [month,rows] of months){
   if(limit<=0)break;
   const net=rows.reduce((sum,e)=>sum+e.points,0);
   html+=`<section class="account-month"><h3><span>${month.replace('-',' 年 ')} 月</span><small>合计 ${signed(net)} 分</small></h3>${rows.slice(0,limit).map(e=>`<button class="account-line" data-action="ledger-source" ${data(e.id)}><span><strong>${esc(e.title||'未命名作品')}</strong><small>${esc(e.label)} · ${date(e.createdAt)}</small></span><b>${signed(e.points)}</b>${icon('arrow',14)}</button>`).join('')}</section>`;
   limit-=rows.length;
  }
  return html;
 }
 // Events stay untouched. A day in the journal groups actions by their recorded source.
 function creationDays(s){
  const index=rows=>new Map(rows.map(row=>[row.id,row]));
  const works=index(s.works), submissions=index(s.submissions), publications=index([...M.examples,...s.publications]);
  const days=new Map();
  for(const e of newest(s.growth)){
   const {id,kind}=e.source||{}, inspiration=e.type==='inspire';
   const linked=kind==='submission'?submissions.get(id):kind==='publication'?publications.get(id):null;
   const workId=inspiration?null:kind==='work'?id:linked?.workId;
   const group=workId?'work:'+workId:id?(inspiration?'inspiration':kind)+':'+id:'event:'+e.id;
   const day=dayKey(new Date(e.createdAt));
   if(!days.has(day))days.set(day,new Map());
   const records=days.get(day);
   if(!records.has(group)){
    const title=e.title||'',separator=title.indexOf(' · '),work=works.get(workId);
    records.set(group,{title:separator<0?title:title.slice(separator+3),workId:work?.id,
     snapshot:work||linked?.snapshot,inspiration,types:new Set()});
   }
   records.get(group).types.add(e.type);
  }
  return days;
 }
 function dayName(day){
  const d=new Date(day+'T12:00:00');
  return d.toLocaleDateString('zh-CN',{...(d.getFullYear()!==new Date().getFullYear()?{year:'numeric'}:{}),month:'long',day:'numeric',weekday:'short'});
 }
 function daySummary(rows){
  const inspirations=[...rows.values()].filter(r=>r.inspiration).length;
  return [rows.size>inspirations?(rows.size-inspirations)+' 件作品':'',inspirations?inspirations+' 个灵感':''].filter(Boolean).join(' · ');
 }
 function creationRow(r){
  const saved=r.types.has('save')||r.types.has('complete');
  const display=[...r.types].find(t=>t==='publish'||t==='withdraw');
  const description=[r.inspiration?'用作创作灵感':'',saved?'保存作品':'',r.types.has('submit')?'演示投稿':'',
   display==='publish'?'在本机展示':display==='withdraw'?'撤回展示':''].filter(Boolean).join(' · ');
  const preview=r.snapshot?.previewAssetId&&window.LocalStore.image(r.snapshot.previewAssetId);
  const image=preview?`<img src="${esc(preview)}" alt="">`:icon(r.inspiration?'spark':'layers',20);
  const content=`<span class="day-thumb">${image}</span><span class="day-copy"><strong>${esc(r.title||'未命名作品')}</strong><small>${esc(description||'创作记录')}</small></span>`;
  return '<li>'+(r.workId?`<button class="day-piece" data-action="view-work" ${data(r.workId)}>${content}${icon('chevron',14)}</button>`:`<div class="day-piece">${content}</div>`)+'</li>';
 }
 function archiveHistory(c,view,day){
  if(view==='ledger')return ledgerRows(newest(c.s.ledger));
  const days=creationDays(c.s);
  if(!day)return [...days].map(([key,records])=>{
   const titles=[...records.values()].slice(0,2).map(r=>r.title).filter(Boolean).join('、');
   return `<button class="day-index" data-action="growth-day" data-history="all" ${data(key)}><span><strong>${dayName(key)}</strong><span class="day-titles">${esc(titles)}</span></span><small>${daySummary(records)}</small>${icon('chevron',13)}</button>`;
  }).join('');
  const records=days.get(day);
  return records?`<section class="journey-day"><header><h3>${dayName(day)}</h3><span>${daySummary(records)}</span></header><ul>${[...records.values()].map(creationRow).join('')}</ul></section>`:'<p>当天还没有创作记录。</p>';
 }
 function weekChart(recordsByDay){
  const today=new Date(),start=new Date(today);
  start.setDate(start.getDate()-6); start.setHours(0,0,0,0);
  const latest=new Date(recordsByDay.keys().next().value+'T12:00:00');
  const end=latest&&latest<start?latest:today;
  const days=Array.from({length:7},(_,i)=>{const d=new Date(end);d.setDate(d.getDate()+i-6);const key=dayKey(d);return {key,count:recordsByDay.get(key)?.size||0};});
  const max=Math.max(1,...days.map(d=>d.count));
  const period=days[0].key.slice(5).replace('-','/')+' — '+days[6].key.slice(5).replace('-','/');
  const activeDays=days.filter(d=>d.count).length;
  return `<div class="week-card"><div class="week-caption"><strong>这七天里，有 <b>${activeDays}</b> 天在创作</strong><small>${end.getFullYear()} · ${period}</small></div>
   <div class="week-plot" role="group" aria-label="每天涉及的作品和灵感数量">${days.map(({key,count})=>{
    const bars=`<span class="plot-track"><span class="plot-count">${count}</span><i style="--height:${count/max*44}px"></i></span><span class="plot-date">${Number(key.slice(-2))}日</span>`;
    return count?`<button class="plot-day" data-action="growth-day" ${data(key)} aria-label="${key}，${count} 条创作足迹，查看作品与灵感">${bars}</button>`:`<div class="plot-day idle" aria-label="${key}，没有创作足迹">${bars}</div>`;
   }).join('')}</div></div>`;
 }
 function points(c){
  const st=M.stats(c.s),ledger=newest(c.s.ledger),growth=creationDays(c.s);
  const historyLink=(id,label)=>btn(label+' '+icon('arrow',13),'archive-history','text',data(id));
  const empty=(label,start=false)=>`<div class="record-empty"><p>${label}</p>${start?btn('去共创','home','text'):''}</div>`;
  return `<section class="page-content growth-screen"><div class="points-hero"><div class="points-card-top"><span>演示积分余额</span>${btn('积分规则 '+icon('info',13),'rules','text')}</div>
   <strong>${st.balance}<small>分</small></strong><div class="growth-stats">${[['数字作品',st.works,'works'],['主题投稿',st.submissions,'submissions'],['入选作品',st.selected,'selection']].map(([label,n,filter])=>`<button data-action="growth-stat" data-id="${filter}"><strong>${n}</strong><span>${label}</span></button>`).join('')}</div></div>
   <section><div class="journal-heading"><h2>成长足迹</h2>${growth.size?historyLink('growth','全部足迹'):''}</div>${growth.size?weekChart(growth):empty('完成第一件作品，留下第一笔足迹。',true)}</section>
   <section><div class="journal-heading"><h2>积分明细</h2>${ledger.length>3?historyLink('ledger','全部 '+ledger.length+' 笔'):''}</div>${ledger.length?ledgerRows(ledger,3):empty('首次保存作品后，可以在这里查看积分来源。')}</section>
   <div class="rights-entry"><button data-action="rights"><span>${icon('gift',20)}<strong>文化权益</strong></span><span>待开放 ${icon('arrow',14)}</span></button></div><p class="archive-footnote">本地演示 · 积分与入选均不代表官方权益</p></section>`;
 }
 V.nav=p=>[['discover','layers','共创'],['gallery','gallery','广场'],['points','award','积分'],['mine','user','我的']].map(([id,ic,label])=>`<button data-action="navigate" data-page="${id}" aria-current="${p===id?'page':'false'}">${ic==='gallery'?'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="6" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/><rect x="14" y="13" width="7" height="8" rx="1"/></svg>':icon(ic,20)}<span>${label}</span></button>`).join('');
 function fileHeader(c){
  const from=c.folioLeaf?'档案':({mine:'我的',result:'作品'})[c.s.ui.galleryParent]||'广场';
  const back=btn(icon('back',16)+'<span>返回'+from+'</span>','back','folio-return');
  const hint=c.folioLeaf?'文件 '+window.GalleryFolio.fileNumber(c.folioLeaf)+' / 04':'社区作品 · 互动模拟';
  return back+'<small class="folio-hint">'+hint+'</small>';
 }
 V.header=c=>c.page==='galleryDetail'?fileHeader(c):c.page==='gallery'?`<h1 class="app-page-title">作品广场</h1>${V.ib('info','gallery-info','广场说明')}`:c.page==='points'?`<h1 class="app-page-title">创作成长档案</h1>`:oldHeader(c);
 V.result=c=>{let html=oldResult(c);if(!c.w)return html;const p=c.s.publications.find(p=>p.workId===c.w.id&&p.state==='published');html=html.replace('已保存到此浏览器','私有草稿 · 已保存到此浏览器');const block=`<div class="publication-block"><h2>作品广场 · 可选</h2><p>${p?'已留存本机展示快照，尚无云端共享。':'这份作品当前私有。确认图像权利与展示说明后，才会进入本机广场。'}</p>${btn(p?'查看本机展示':'模拟公开到作品广场',p?'gallery-detail':'publish-open','secondary full',data(p?.id||c.w.id))}</div>`;return html.replace('<p class="footer-note">',block+'<p class="footer-note">');};
 Object.assign(V,{points,gallery,galleryDetail,archiveHistory,galleryCards:cards,savedGallery:c=>cards(c,M.allPublications(c.s).filter(p=>c.s.galleryCollections.includes(p.id)))});
})();
