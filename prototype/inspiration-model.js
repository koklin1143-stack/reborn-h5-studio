(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.InspirationModel=api;})(globalThis,()=>{
 const directions=['classic','modern','free'];
 function init(d){d.inputStage=true;d.direction??='classic';d.inspirationImageId??=d.userImageAssetId||null;d.sketchStrokes??=[];d.inputTab??='motif';d.primaryInput??=d.inspirationImageId?'image':'motif';return d;}
 function methodPatch(d,method){
  if(!['motif','image','text','sketch'].includes(method))throw Error('请选择一种创作方式。');
  const patch={inputTab:method};
  if(method!=='motif'&&d.sourceMotifId&&d.sourceMotifId!=='motif:'+d.itemId){
   patch.sourceMotifId='motif:'+d.itemId;
  }
  if(method==='motif'||(method==='image'&&d.inspirationImageId)||(method==='sketch'&&d.sketchStrokes.length))patch.primaryInput=method;
  return patch;
 }
 function canContinue(d){
  if(d.inputTab==='text')return Boolean(d.prompt?.trim());
  if(d.inputTab==='image')return Boolean(d.inspirationImageId);
  if(d.inputTab==='sketch')return d.sketchStrokes.some(s=>s.tool==='pen'&&s.points.length>0);
  return true;
 }
 function validateImage(file){if(!['image/png','image/jpeg','image/webp'].includes(file.type))throw Error('请选择 JPG、PNG 或 WebP 图片。');if(!file.size)throw Error('图片为空，请重新选择。');if(file.size>12*1024*1024)throw Error('图片超过 12 MB，请换一张较小的图片。');}
 function conversionKey(d){
  const source=d.inputTab==='text'?d.prompt.trim():d.inputTab==='image'?d.inspirationImageId:d.inputTab==='sketch'?d.sketchAssetId:null;
  const parts=['print-1',d.inputTab,source,d.sourceMotifId,d.direction];
  if(d.inputTab==='sketch'&&d.sketchSubject?.trim())parts.push(d.sketchSubject.trim());
  return JSON.stringify(parts);
 }
 function editorInput(d){
  const converted=d.patternConversion;
  if(converted?.aiGenerated && converted.key===conversionKey(d))return {
   imageId:converted.assetId,imageName:converted.label,selectedVariantId:converted.assetId,
   provenance:{origin:'ai-pattern',aiGenerated:true,method:converted.method,engine:converted.engine,
    label:converted.label,sourceAssetId:converted.sourceAssetId,sourceMotifId:converted.sourceMotifId,direction:converted.direction}
  };
  if(d.inputTab==='motif')return {imageId:null,imageName:'',selectedVariantId:null,provenance:{origin:'project-demo',aiGenerated:false}};
  const r=d.patternConversion;
  if(!r?.assetId||r.key!==conversionKey(d))throw Error('请先转化当前素材并确认预览。');
  return {imageId:r.assetId,imageName:r.label,selectedVariantId:null,provenance:{origin:'local-print',aiGenerated:false,method:r.method,
   engine:r.engine,label:r.label,sourceAssetId:r.sourceAssetId,sourceMotifId:r.sourceMotifId,direction:r.direction}};
 }
 function createJob(service){let controller=null,token=0;const job={state:'idle',message:'',data:null};return {job,cancel(){token++;controller?.abort();controller=null;if(job.state==='generating'){job.state='failed';job.message='已停止等待。百炼已接收的任务可能仍会计费。';}},async run(input){if(job.state==='generating')return null;if(service.status('ai').state==='unavailable'){Object.assign(job,{state:'unconfigured',message:'AI 生成待接入',data:null});return null;}const id=++token;controller=new AbortController();Object.assign(job,{state:'generating',message:'正在生成…',data:null});const result=await service.request('ai',input,{signal:controller.signal});if(id!==token)return null;controller=null;if(!result.ok){Object.assign(job,{state:'failed',message:result.message||'生成失败，请重试。'});return null;}const variants=result.data?.variants;if(!Array.isArray(variants)||!variants.length||variants.some(v=>!(v.blob instanceof Blob)||!['image/png','image/jpeg','image/webp'].includes(v.blob.type)||v.blob.size===0||v.blob.size>12*1024*1024)){Object.assign(job,{state:'failed',message:'服务没有返回有效图片，请重试。'});return null;}Object.assign(job,{state:'success',message:'生成成功',data:result.data});return result.data;}};}
 return {init,directions,methodPatch,canContinue,validateImage,conversionKey,editorInput,createJob};
});
