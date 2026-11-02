/* User-selected portable archive. No connection credentials or browser settings are exported. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require('./foundation.js'));else root.ArchiveTransfer=factory(root.Studio);})(globalThis,M=>{
 const lists=['drafts','works','submissions','publications','ledger','growth','sources','creators','favorites','galleryLikes','galleryCollections'];
 const limit=120*1024*1024;
 const visit=(value,fn)=>{if(Array.isArray(value))return value.map(v=>visit(v,fn));if(value&&typeof value==='object'){const out={};for(const [k,v]of Object.entries(value)){if(['__proto__','constructor','prototype'].includes(k))throw Error('作品包包含无效字段。');out[k]=visit(v,fn);}return out;}return typeof value==='string'?fn(value):value;};
 async function pack(state,getAsset){
  const data={};for(const name of lists)data[name]=M.copy(state[name]||[]);
  const strings=new Set();visit(data,s=>{strings.add(s);return s;});const assets=[];let bytes=0;
  for(const id of strings){const blob=await getAsset(id);if(!blob)continue;
   if(!/^image\/(png|jpeg|webp)$/.test(blob.type))throw Error('有素材格式暂不支持迁移，请先导出作品图片。');
   bytes+=blob.size;if(bytes>80*1024*1024)throw Error('素材总量超过 80 MB，请先整理作品后再导出。');
   const array=new Uint8Array(await blob.arrayBuffer());let raw='';for(let i=0;i<array.length;i+=32768)raw+=String.fromCharCode(...array.subarray(i,i+32768));
   assets.push({id,type:blob.type,data:btoa(raw)});
  }
  return JSON.stringify({format:'reborn-transfer-v1',id:M.uid('transfer'),createdAt:new Date().toISOString(),data,assets});
 }
 function prepare(text,current){
  if(text.length>limit)throw Error('作品包过大，暂不支持导入。');
  let input;try{input=JSON.parse(text);}catch{throw Error('无法读取作品包，请选择导出的 JSON 文件。');}
  if(input?.format!=='reborn-transfer-v1'||!/^transfer-[a-z0-9-]+$/i.test(input.id)||!Array.isArray(input.assets)||input.assets.length>2000)throw Error('这不是有效的物之再生作品包。');
  for(const name of lists)if(!Array.isArray(input.data?.[name]))throw Error('作品包记录不完整。');
  const mapping=new Map(),assets=[],namespace=M.uid('import');let bytes=0;
  for(const a of input.assets){
   if(typeof a.id!=='string'||a.id.length>250||mapping.has(a.id)||!/^image\/(png|jpeg|webp)$/.test(a.type)||typeof a.data!=='string'||!a.data||!/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a.data))throw Error('作品包素材无效。');
   const raw=atob(a.data);bytes+=raw.length;if(bytes>80*1024*1024)throw Error('作品包素材超过 80 MB。');
   const id=namespace+':'+mapping.size;mapping.set(a.id,id);assets.push({id,blob:new Blob([Uint8Array.from(raw,c=>c.charCodeAt(0))],{type:a.type})});
  }
  const incoming=visit(input.data,s=>mapping.get(s)||s),next=M.copy(current),added={};
  for(const name of lists){const existing=new Set((next[name]||[]).map(x=>typeof x==='string'?x:x.id));added[name]=0;next[name]??=[];
   for(const row of incoming[name]){const id=typeof row==='string'?row:row?.id;if(typeof id!=='string')throw Error('作品包包含缺少编号的记录。');if(!existing.has(id)){next[name].push(row);existing.add(id);added[name]++;}}
  }
  return {state:M.validate(next),assets,added};
 }
 return {pack,prepare,limit};
});
