const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');

function geometryOnly(type){
 const raw=fs.readFileSync(require.resolve('../prototype/media/models/'+type+'.glb')),n=raw.readUInt32LE(12),json=JSON.parse(raw.subarray(20,20+n)),bin=raw.subarray(28+n);
 // Node has no image decoder; preserve the actual meshes, UVs and material extras.
 const strip=o=>{if(!o||typeof o!=='object')return;for(const k of Object.keys(o)){if(k.endsWith('Texture')||k==='extensions')delete o[k];else strip(o[k]);}};
 strip(json.materials);delete json.images;delete json.textures;delete json.extensionsUsed;delete json.extensionsRequired;
 const text=Buffer.from(JSON.stringify(json)),padded=Math.ceil(text.length/4)*4,out=Buffer.alloc(28+padded+bin.length);
 out.writeUInt32LE(0x46546c67,0);out.writeUInt32LE(2,4);out.writeUInt32LE(out.length,8);out.writeUInt32LE(padded,12);out.writeUInt32LE(0x4e4f534a,16);out.fill(32,20,20+padded);text.copy(out,20);out.writeUInt32LE(bin.length,20+padded);out.writeUInt32LE(0x004e4942,24+padded);bin.copy(out,28+padded);
 return out.toString('base64');
}

test('authored bag files preserve cloth detail UVs and independent artwork picking UVs',async()=>{
 const {loadBag,disposeBag}=await import('../source/imported-bags.mjs'),{bindTextileInk}=await import('../source/textile-ink.mjs'),V=require('../prototype/vessels.js'),T=await import('three');
 const old=global.window;global.window={CarrierModelData:Object.fromEntries(['backpack','tote'].map(t=>[t,geometryOnly(t)]))};
 try{for(const type of ['backpack','tote']){
  const model=await loadBag(type),box=new T.Box3().setFromObject(model.group);assert.ok(box.max.z-box.min.z>.1);assert.ok(box.max.y-box.min.y>2.5);
  assert.deepEqual(model.surfaces.map(s=>s.userData.fabricFace),type==='backpack'?['front','back','pocket']:['front','back']);
  for(const mesh of model.surfaces){const a=mesh.geometry.attributes;assert.equal(a.position.count,a.uv.count);assert.equal(a.position.count,a.printUv.count);assert.notDeepEqual(a.uv.array,a.printUv.array);assert.ok([...a.position.array,...a.normal.array,...a.printUv.array].every(Number.isFinite));assert.ok(mesh.userData.fabricSize.every(n=>n>0));}
  const ink=bindTextileInk(model);ink.setPlacement(V.placement(type));
  assert.deepEqual(ink.hitUV({object:model.surfaces[0],uv:{x:.03,y:.09},uv1:{x:.4,y:.6}}),{x:.4,y:.6});
  const second=await loadBag(type);assert.notEqual(model.body.geometry,second.body.geometry);assert.notEqual(model.body.material,second.body.material);let disposed=0;second.body.geometry.addEventListener('dispose',()=>disposed++);disposeBag(model.group);assert.equal(disposed,0);disposeBag(second.group);assert.equal(disposed,1);
 }}finally{global.window=old;}
});
