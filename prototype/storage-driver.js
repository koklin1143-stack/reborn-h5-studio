/* Small IndexedDB driver. Existing database name/stores remain unchanged. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory;else root.createArchiveDB=factory;})(globalThis,(idb,{name='reborn-studio'}={})=>{
 let opening=null,db=null;
 let useImageBuffers=false;
 function open(){if(opening)return opening;opening=new Promise((resolve,reject)=>{if(!idb)return reject(Error('当前浏览器无法使用本地数据库。'));const req=idb.open(name,1);req.onupgradeneeded=()=>{for(const store of ['state','images'])if(!req.result.objectStoreNames.contains(store))req.result.createObjectStore(store);};req.onsuccess=()=>{db=req.result;db.onversionchange=()=>{db.close();db=null;opening=null;};resolve(db);};req.onerror=()=>reject(req.error);req.onblocked=()=>reject(Error('请关闭其他打开的原型窗口，再重试。'));});opening.catch(()=>opening=null);return opening;}
 async function read(store,key){const database=await open();return new Promise((resolve,reject)=>{const tx=database.transaction(store,'readonly'),req=tx.objectStore(store).get(key);req.onsuccess=()=>{const v=req.result;resolve(store==='images'&&v?.imageBytes instanceof ArrayBuffer?new Blob([v.imageBytes],{type:v.type}):v);};req.onerror=()=>reject(req.error);});}
 async function transaction(rows){const database=await open();return new Promise((resolve,reject)=>{const tx=database.transaction([...new Set(rows.map(row=>row.store))],'readwrite');tx.oncomplete=()=>resolve();tx.onerror=e=>reject(e.target?.error||tx.error||Error('本地写入失败'));tx.onabort=()=>reject(tx.error||Error('本地写入被中断'));try{for(const row of rows)tx.objectStore(row.store).put(row.value,row.key);}catch(error){tx.abort();reject(error);}});}
 async function writeMany(rows){
  const hasImage=rows.some(row=>row.store==='images'&&row.value instanceof Blob);
  if(!hasImage)return transaction(rows);
  if(!useImageBuffers){
   try{return await transaction(rows);}
   catch(e){if(e.name!=='DataCloneError'&&e.name!=='NotSupportedError'&&!(e.name==='UnknownError'&&/blob|file/i.test(e.message)))throw e;}
  }
  // Some WebKit contexts can persist bytes but cannot prepare Blob backing files.
  const encoded=await Promise.all(rows.map(async row=>row.store==='images'&&row.value instanceof Blob
   ?{...row,value:{type:row.value.type,imageBytes:await row.value.arrayBuffer()}}:row));
  await transaction(encoded);
  useImageBuffers=true;
 }
 const write=(store,key,value)=>writeMany([{store,key,value}]);
 const commit=(state,assets=[])=>writeMany([...assets.map(a=>({store:'images',key:a.id,value:a.blob})),{store:'state',key:'current',value:state}]);
 return {open,read,write,commit,close:()=>{db?.close();db=null;opening=null;}};
});
