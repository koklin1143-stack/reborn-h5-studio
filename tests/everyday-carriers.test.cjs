const test=require('node:test'),assert=require('node:assert/strict');
const M=require('../prototype/foundation.js'),V=require('../prototype/vessels.js');
const soft=['cushion','pillow','duvet','backpack','tote'];
test('all nine carriers keep separate settings through undo and a saved work round trip',()=>{
 const s=M.blank(),d=M.addDraft(s,'enamel-peony'),source=d.sourceObjectId;
 for(const [i,type]of Object.keys(V.data).entries()){
  M.switchVessel(d,type);M.edit(d,{vesselPlacement:{...d.vesselPlacement,x:i+5,rotation:i*11},cupMaterial:{...V.material(type),color:'#445566'}});
 }
 for(const [i,type]of Object.keys(V.data).entries()){
  M.switchVessel(d,type);assert.equal(d.sourceObjectId,source);assert.equal(d.vesselPlacement.x,i+5);assert.equal(d.vesselPlacement.rotation,i*11);assert.equal(d.cupMaterial.color,'#445566');assert.equal(d.vesselId,'vessel:'+V.get(type).family+':'+type);
 }
 const w=M.complete(s,d.id,'生活里的花纹');const loaded=M.validate(JSON.parse(JSON.stringify(s)));assert.equal(loaded.works[0].canvas,'tote');assert.equal(loaded.works[0].vesselId,'vessel:bags:tote');
 const resumed=M.resumeWork(loaded,w.id);M.switchVessel(resumed,'pillow');M.undo(resumed);assert.equal(resumed.canvas,'tote');M.redo(resumed);assert.equal(resumed.canvas,'pillow');assert.equal(resumed.cupMaterial.finish,'matte');assert.equal(loaded.works[0].canvas,'tote');
});
test('front, back and pocket preserve simultaneous printing and their own local/full settings',()=>{
 const d=M.fresh();M.switchVessel(d,'backpack');
 M.edit(d,{vesselPlacement:{...d.vesselPlacement,x:13}});M.edit(d,V.zonePatch(d,'pocket'));M.edit(d,{vesselPlacement:{...d.vesselPlacement,rotation:45,scale:65}});
 M.edit(d,V.coverPatch(d,'full'));assert.equal(d.vesselPlacement.zone,'pocketFill');M.edit(d,{vesselPlacement:{...d.vesselPlacement,coverWidth:75}});
 M.edit(d,V.zonePatch(d,'back'));M.edit(d,{vesselPlacement:{...d.vesselPlacement,y:21}});
 let faces=V.facePlacements(d.canvas,d.vesselPlacement);assert.equal(faces.front.x,13);assert.equal(faces.pocket.zone,'pocketFill');assert.equal(faces.pocket.coverWidth,75);assert.equal(faces.back.y,21);
 M.edit(d,V.zonePatch(d,'pocket'));assert.equal(d.vesselPlacement.rotation,45);assert.equal(d.vesselPlacement.scale,65);faces=V.facePlacements(d.canvas,d.vesselPlacement);assert.equal(faces.pocket.zone,'pocket');assert.equal(faces.back.y,21);
 M.switchVessel(d,'cup');M.switchVessel(d,'backpack');assert.equal(V.facePlacements(d.canvas,d.vesselPlacement).front.x,13);
 M.switchVessel(d,'duvet');M.edit(d,V.zonePatch(d,'border'));assert.equal(V.isFill(V.region(d.canvas,d.vesselPlacement.zone)),true);M.edit(d,V.coverPatch(d,'local'));assert.equal(d.vesselPlacement.zone,'front');
});
test('textile models have volume, finite UV surfaces and an independently printable pocket',async()=>{
 const {createVessel}=await import('../source/vessel-geometry.mjs'),T=await import('three');
 for(const type of soft){
  const m=createVessel(type),box=new T.Box3().setFromObject(m.group);assert.ok(box.max.z-box.min.z>.1);assert.ok(box.max.y-box.min.y>1.7);assert.equal(m.surfaces.length,type==='backpack'?3:2);
  for(const mesh of m.surfaces){const p=mesh.geometry.attributes.position,uv=mesh.geometry.attributes.uv,n=mesh.geometry.attributes.normal;assert.equal(p.count,uv.count);assert.ok(mesh.material.roughness>.9);assert.equal(mesh.material.clearcoat,0);for(let i=0;i<p.count;i++){assert.ok(Number.isFinite(p.getZ(i))&&Number.isFinite(n.getZ(i)));assert.ok(uv.getX(i)>=0&&uv.getX(i)<=1&&uv.getY(i)>=0&&uv.getY(i)<=1);}}
  const front=m.surfaces[0].geometry.attributes.position;assert.ok(front.getZ(Math.floor(front.count/2))>front.getZ(0)+.03);
 }
});

test('open tote mouth reaches its bottom and folded bedding keeps a continuous printable surface',async()=>{
 const {createVessel}=await import('../source/vessel-geometry.mjs'),T=await import('three');
 const tote=createVessel('tote');tote.group.updateMatrixWorld(true);
 const ray=new T.Raycaster(new T.Vector3(0,2.4,0),new T.Vector3(0,-1,0));
 const hits=ray.intersectObjects(tote.group.children,true);assert.ok(hits.length);assert.ok(hits[0].point.y<-.9,'bag mouth must be open, with a closed bottom');
 const duvet=createVessel('duvet'),front=duvet.surfaces[0].geometry,uv=front.attributes.uv,p=front.attributes.position;
 const middle=[];for(let i=0;i<p.count;i++)if(Math.abs(uv.getX(i)-.5)<.001)middle.push([uv.getY(i),p.getY(i),p.getZ(i)]);
 assert.ok(middle.some((v,i)=>i&&v[0]>middle[i-1][0]&&v[1]<middle[i-1][1]-.015),'cloth turns over at the top instead of staying a flat rectangle');
 const pillow=createVessel('pillow'),box=new T.Box3().setFromObject(pillow.group);assert.ok(box.max.z-box.min.z>1,'laid pillow retains depth');
});
test('fabric shader keeps distinct layouts on multiple panels and ignores ray hits on other regions',async()=>{
 const {createVessel}=await import('../source/vessel-geometry.mjs'),{bindTextileInk}=await import('../source/textile-ink.mjs');
 const m=createVessel('backpack'),ink=bindTextileInk(m),d=M.fresh();M.switchVessel(d,'backpack');M.edit(d,{vesselPlacement:{...d.vesselPlacement,x:12}});M.edit(d,V.zonePatch(d,'pocketFill'));M.edit(d,{vesselPlacement:{...d.vesselPlacement,scale:140}});ink.setPlacement(d.vesselPlacement);
 const uniforms=m.surfaces.map(mesh=>{const shader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'#include <color_fragment>'};mesh.material.onBeforeCompile(shader);return shader.uniforms;});
 assert.equal(uniforms[0].fabricActive.value,1);assert.equal(uniforms[1].fabricActive.value,0);assert.equal(uniforms[2].fabricActive.value,1);assert.equal(uniforms[0].fabricMode.value,0);assert.equal(uniforms[2].fabricMode.value,1);assert.equal(uniforms[0].fabricTransform.value.x,.1);
 assert.equal(ink.hitUV({object:m.surfaces[0],uv:{x:.5,y:.5}}),null);assert.deepEqual(ink.hitUV({object:m.surfaces[2],uv:{x:.2,y:.3}}),{x:.2,y:.3});
});
