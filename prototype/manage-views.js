(()=>{
 const V=window.Views,M=window.Studio,S=window.LocalStore,oldMine=V.mine,oldResult=V.result,oldArt=window.Art.object;
 const attr=(kind,id)=>`data-kind="${kind}" data-id="${V.esc(id)}"`;
 const missing=w=>[w.patternConversion?.assetId,w.imageId,w.inspirationImageId,w.sketchAssetId,w.sketchForm?.assetId,w.previewAssetId,...(w.aiVariants||[]).flatMap(a=>[a.assetId,a.formAssetId])].filter(id=>id&&!S.image(id));
 window.Art.object=(w,...args)=>w?.recordType==='work'&&w.previewAssetId&&!S.image(w.previewAssetId)?'<div class="asset-empty">预览文件缺失<br><small>作品参数仍保留</small></div>':oldArt(w,...args);
 V.mine=c=>{let html=oldMine(c);const kind=c.s.ui.filter||'works';if(['works','drafts'].includes(kind))html=html.replace(/<article class="work-card">[\s\S]*?<\/article>/g,card=>{const id=card.match(/data-id="([^"]+)"/)?.[1],w=c.s[kind].find(w=>w.id===id);if(!w)return card;return card.replace('</article>',`${missing(w).length?'<p class="record-warning">部分文件缺失 · 可查看档案并重新上传</p>':''}<div class="manage-actions">${kind==='works'?V.btn('继续编辑','edit-work','text',attr(kind,id)):''}${V.btn('再生档案','regeneration','text',attr(kind,id))}${V.btn('复制新版本','duplicate-record','text',attr(kind,id))}</div></article>`);});return html;};
 V.result=c=>{let html=oldResult(c);if(c.w)html=html.replace('<div class="two-actions">',`<div class="manage-result">${V.btn('再生档案','regeneration','secondary',attr('works',c.w.id))}${V.btn('复制新版本','duplicate-record','secondary',attr('works',c.w.id))}</div><div class="two-actions">`);return html;};
 const row=(label,value)=>value?`<div><dt>${label}</dt><dd>${V.esc(value)}</dd></div>`:'';
 const thumb=(id,label)=>id&&S.image(id)?`<img src="${V.esc(S.image(id))}" alt="${label}">`:'';
 function archive(s,kind,id){
  const entry=s[kind]?.find(item=>item.id===id),w=kind==='submissions'?entry?.snapshot:entry;
  if(!w)return '<p>找不到这条记录，请返回列表。</p>';
  const source=M.heritageObjects.find(o=>o.id===w.sourceObjectId);
  const motif=M.motifs.find(m=>m.id===w.sourceMotifId);
  const vessel=M.vessels.find(v=>v.type===w.canvas);
  const used=w.imageId&&(w.aiVariants||[]).find(v=>v.assetId===w.imageId);
  const conversion=used?.record||(w.imageId&&w.patternConversion?.assetId===w.imageId?w.patternConversion:null);
  const selection=used?.selection;
  const study=window.PatternGrammar.references[conversion?.recipe?.reference];
  const studyLink=study?.url&&study.url===conversion.recipe.sourceUrl&&study.accession===conversion.recipe.accession
   ?`<div><dt>画法参考</dt><dd><a href="${V.esc(study.url)}" target="_blank" rel="noopener noreferrer">${V.esc(study.source)} ↗</a></dd></div>`:'';
  const activeDraft=kind==='drafts'&&!w.imageId;
  const method=conversion?.method||w.provenance?.method||(w.imageId&&w.provenance?.origin==='personal-image'?'image':activeDraft?w.inputTab:'motif');
  const from=conversion?.sourceAssetId||w.provenance?.sourceAssetId;
  const original=method==='image'?from||w.inspirationImageId||w.userImageAssetId:method==='sketch'?from||w.sketchAssetId:null;
  const idea=method==='text'?(selection?.prompt??w.prompt):method==='sketch'?(selection?.sketchSubject??w.sketchSubject):'';
  const medium=method==='image'&&original?'我的图片':method==='sketch'&&(original||w.sketchStrokes?.length)?'我的手绘':method==='text'&&idea?'我的文字':'';
  const sourceArt=thumb(original,'创作原稿');
  const words=value=>value.length>100?`<details><summary>查看全文</summary><p>${V.esc(value)}</p></details>`:`<p>${V.esc(value)}</p>`;
  const note=w.idea?.trim();
  const ai=Boolean(used||conversion?.aiGenerated||w.provenance?.aiGenerated);
  const process=ai?(conversion?.recipe?.technique==='regionInk'?'AI 辅助制纹与配色':'AI 辅助制纹'):w.provenance?.origin==='photo-study'?(w.provenance.parts?.length>1?'实物取样组合':w.provenance.parts?.[0]?.custom?'自选原照局部':w.provenance.parts?.[0]?.treatment==='colour'?'原照原色取样':'实物照片分色'):w.provenance?.origin==='local-print'?'本地转化':'';
  const image=thumb(w.previewAssetId,'保存的作品');
  const status=kind==='drafts'?'草稿':kind==='works'?(s.publications?.some(p=>p.workId===w.id&&p.state==='published')?'私有原稿 · 已在本机广场展示':'私有作品'):'演示投稿快照 · 未发送馆方';
  const time=w.savedAt||w.updatedAt||w.createdAt;
  const title=w.title||(vessel?'我的'+vessel.name:'我的创作');
  const reference=source?.name?(source.name+(source.provenance?.verified?'':' · 项目示意')):'';
  const action=kind==='submissions'?'duplicate-record':kind==='drafts'?'resume':'edit-work';
  const object=window.Explore.fromSource(w.sourceObjectId);
  const tile=(label,picture,caption)=>`<figure><div class="origin-sample">${picture}</div><figcaption><strong>${V.esc(label)}</strong>${caption?'<small>'+V.esc(caption)+'</small>':''}</figcaption></figure>`;
  const stages=[];
  if(medium&&(sourceArt||idea))stages.push(tile(!sourceArt&&method==='sketch'?'手绘描述':medium,sourceArt||`<span class="origin-quote">${V.esc(idea.length>28?idea.slice(0,28)+'…':idea)}</span>`,sourceArt&&idea&&idea.length<=28?idea:''));
  else if(object)stages.push(tile('灵感物件',window.EnamelArt.art(object),object.name+(object.photo?' · 实物摄影':' · 项目示意')));
  const studyArt=motif?.origin==='photo-study'?`<img src="${window.EnamelArt.photoUrl(motif.fileKey)}" alt="实物取样">`:'';
  const print=w.imageId?thumb(w.imageId,'采用的纹样'):studyArt||(motif?.pattern?window.Art.panel(motif.pattern):'');
  if(print&&(w.imageId?original!==w.imageId:!medium))stages.push(tile(w.imageId?'采用的纹样':studyArt?'原物取样':object?.photo?'项目参考纹样':'参考纹样',print,w.imageId?process:motif.name));
  const samples=stages.length?`<div class="origin-sequence">${stages.join('<span class="origin-arrow" aria-hidden="true">→</span>')}</div>`:'';
  const inputText=medium&&idea&&idea.length>28?words(idea):'';
  return `<article class="origin-card"><header class="origin-heading"><div><small>${status}</small><h3>${V.esc(title)}</h3>
   <span>${vessel&&!title.includes(vessel.name)?V.esc(vessel.name)+' · ':''}${time?V.date(time):''}</span></div>${image?`<div class="origin-thumb">${image}</div>`:''}</header>
   ${samples}${inputText}
   <dl class="origin-facts">${!object||medium?row('灵感物件',reference):''}${w.imageId||medium?row('参考纹样',w.provenance?.parts?.map(m=>m.name).join(' · ')||motif?.name):''}${process&&(!w.imageId||!print||original===w.imageId)?row('制作方式',process):''}${object?.photo?`<div><dt>实物摄影</dt><dd><a href="${object.source.url}" target="_blank" rel="noopener noreferrer">${V.esc(object.source.creator)} · ${object.source.license} ↗</a></dd></div>`:''}${studyLink}${w.versions?.length?row('保存的版本',String(w.versions.length)+' 个'):''}</dl>
   ${note&&note!==idea?`<section class="origin-input"><div><strong>创作手记</strong>${words(note)}</div></section>`:''}
   ${missing(w).length?`<aside class="origin-recovery"><p>部分文件暂时打不开，仍可继续编辑。</p>${V.btn('重新检查文件','check-record-assets','text',attr(kind,id))}</aside>`:''}
   ${V.btn(kind==='submissions'?'从快照复制草稿':'继续编辑',action,'secondary full',attr(kind,id))}</article>`;
 }
 V.regeneration=archive;
})();
