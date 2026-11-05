/* Capture an actual rendered result and persist it in the same transaction as the work. */
(()=>{
 const M=window.Studio,V=window.Views;
 async function staticPreview(d,{transparent=false}={}){const exported=await window.PatternTexture.export(d,{size:512,transparent:true}),data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(exported.blob);});const art=`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><image href="${data}" width="512" height="512"/></svg>`,svg=window.CupView.staticCup(d,art,{transparent}),url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));try{const image=new Image();image.src=url;await image.decode();const canvas=document.createElement('canvas');canvas.width=canvas.height=640;const ctx=canvas.getContext('2d');if(!transparent){ctx.fillStyle='#f4f3ef';ctx.fillRect(0,0,640,640);}ctx.drawImage(image,0,56,640,528);return await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('静态预览无法保存')),'image/png'));}finally{URL.revokeObjectURL(url);}}
 async function trimTransparent(blob){
  const im=await createImageBitmap(blob);
  try{
   const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(im,0,0);
   const data=ctx.getImageData(0,0,c.width,c.height).data;let left=c.width,right=-1,top=c.height,bottom=-1;
   for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++){
    if(data[(y*c.width+x)*4+3]===0)continue;
    left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);
   }
   if(right<left)throw Error('成品图没有可见内容，请重试');
   const pad=Math.ceil(Math.max(right-left+1,bottom-top+1)*.045);
   c.width=right-left+1+2*pad;c.height=bottom-top+1+2*pad;ctx.drawImage(im,pad-left,pad-top);
   return await new Promise((ok,fail)=>c.toBlob(b=>b?ok(b):fail(Error('无法保存成品图')),'image/png'));
  }finally{im.close();}
 }
 async function capture(d,{isolated=false}={}){
  let host,kind='webgl';const viewer=isolated?window.Cup3D.createViewer():window.Cup3D,live=viewer.diagnostics();
  try{
   if(d.cupPreviewMode==='static'||live?.mode==='static')kind='static';
   else if(!live||live.vesselType!==d.canvas){
    host=document.createElement('div');host.style.cssText='position:fixed;left:-10000px;top:0;width:640px;height:640px;pointer-events:none';document.body.append(host);
    await new Promise((resolve,reject)=>{viewer.mount(host,d,()=>{},(state,message)=>{if(state==='ready')resolve();if(state==='fallback'){kind='static';resolve();}if(state==='error')reject(Error(message));});});
   }
   const blob=kind==='static'?await staticPreview(d,{transparent:true}):await viewer.capture(d,{transparent:true});
   return {asset:{id:M.uid('preview'),blob:await trimTransparent(blob)},kind,capturedAt:M.now()};
  }finally{if(host){viewer.dispose();host.remove();}}
 }
 function apply(d,preview){d.previewAssetId=preview.asset.id;d.previewTransparent=true;d.previewKind=preview.kind;d.previewCapturedAt=preview.capturedAt;d.patternVersion={id:M.uid('pattern-version'),createdAt:M.now(),sourceObjectId:d.sourceObjectId,sourceMotifId:d.sourceMotifId,...(d.provenance?.parts?.length?{sourceMotifIds:d.provenance.parts.map(m=>m.id)}:{}),imageAssetId:d.imageId||null,parameters:M.copy(Object.fromEntries(['pattern','scale','x','y','rotation','sampleMirror','motifInks','sampleX','sampleY','sampleWidth','sampleHeight','sampleRotation','echoIterations','echoRatio','foldSlope','flowEnabled','flowKind','flowStrength','brightness','contrast','saturation','hue','patternOpacity','borderWidth','borderColor','inkColor','inkDark','inkLight','patternLayout','repeatDensity','repeatGap','flipX','flipY','cropWidth','cropHeight','patternInk','color'].map(k=>[k,d[k]])))};d.appliedVessel={id:d.vesselId,type:d.canvas,placement:M.copy(d.vesselPlacement),material:M.copy(d.cupMaterial),model:['backpack','tote'].includes(d.canvas)?'studio-sewn-'+d.canvas+'-v5':['notebook','phonecase','tshirt'].includes(d.canvas)?'studio-daily-'+d.canvas+'-v1':'authored-procedural-v1'};}
 const oldArt=window.Art.object;window.Art.object=(w,...args)=>w?.recordType==='work'&&w.previewAssetId&&window.LocalStore.image(w.previewAssetId)?`<img class="saved-vessel-preview" src="${V.esc(window.LocalStore.image(w.previewAssetId))}" alt="${V.esc(window.Vessels.get(w.canvas).name)} · ${w.previewKind==='static'?'静态示意':'三维渲染预览'}">`:window.Vessels.surface(w?.canvas)?window.TextilePreview.svg(w):oldArt(w,...args);
 const oldResult=V.result;
 V.result=c=>{
  const html=oldResult(c),w=c.w;
  if(!w)return html;
  const source=M.heritageObjects.find(o=>o.id===w.sourceObjectId);
  const vessel=M.vessels.find(v=>v.type===w.canvas);
  const record='<div class="work-record">'+(source?'<div><span>灵感物件</span><b>'+V.esc(source.name)+(source.provenance?.verified?'':' · 项目示意')+'</b></div>':'')+(vessel?'<div><span>应用器型</span><b>'+V.esc(vessel.name)+'</b></div>':'')+'</div>';
  return html.replace('私有草稿 · 已保存到此浏览器',c.s.publications?.some(p=>p.workId===c.w.id&&p.state==='published')?'私有原稿 · 已在本机广场展示':'私有作品').replace('<div class="two-actions">',record+'<div class="two-actions">');
 };
 window.WorkResult={capture,apply,staticPreview};
})();
