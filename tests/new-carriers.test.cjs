const test=require('node:test'),assert=require('node:assert/strict');
const V=require('../prototype/vessels.js'),M=require('../prototype/foundation.js');
test('daily objects use surface printing without inheriting fabric material and expose appropriate zones',()=>{
 for(const type of ['notebook','phonecase','tshirt']){assert.equal(V.surface(type),true);assert.equal(V.textile(type),type==='tshirt');}
 assert.equal(V.materialLabel('notebook'),'封面颜色');assert.equal(V.materialShort('phonecase'),'壳色');assert.equal(V.region('notebook','back').label,'封底');assert.deepEqual(Object.keys(V.regions.phonecase),['front','frontFill']);
 for(const type of ['notebook','tshirt']){const d=M.fresh();M.switchVessel(d,type);M.edit(d,{vesselPlacement:{...d.vesselPlacement,x:16}});M.edit(d,V.zonePatch(d,'backFill'));M.edit(d,{vesselPlacement:{...d.vesselPlacement,coverWidth:70}});const faces=V.facePlacements(type,d.vesselPlacement);assert.equal(faces.front.x,16);assert.equal(faces.back.coverWidth,70);M.switchVessel(d,'phonecase');M.switchVessel(d,type);assert.equal(d.vesselPlacement.zone,'backFill');assert.equal(d.vesselPlacement.coverWidth,70);}
});
test('phone camera and T-shirt neck remain real openings, including in full-print surfaces',async()=>{
 const {createVessel}=await import('../source/vessel-geometry.mjs'),T=await import('three');
 for(const [type,x,y]of [['phonecase',-.275,1.02],['tshirt',0,1.48]]){
  const item=createVessel(type);item.group.updateMatrixWorld(true);
  const origin=item.group.localToWorld(new T.Vector3(x,y,3)),direction=new T.Vector3(0,0,-1).transformDirection(item.group.matrixWorld);
  assert.equal(new T.Raycaster(origin,direction).intersectObjects(item.group.children,true).length,0,type+' opening must not be a painted dark patch');
  const body=item.group.localToWorld(new T.Vector3(0,-.4,3));assert.ok(new T.Raycaster(body,direction).intersectObjects(item.surfaces,true).length);
 }
});
test('new models have valid independent print surfaces and notebook paper stays untinted',async()=>{
 const {createVessel}=await import('../source/vessel-geometry.mjs'),{bindTextileInk}=await import('../source/textile-ink.mjs');
 for(const type of ['notebook','phonecase','tshirt']){
  const item=createVessel(type),ink=bindTextileInk(item);ink.setPlacement(V.placement(type));assert.equal(item.surfaces.length,type==='phonecase'?1:2);
  for(const surface of item.surfaces){const {position:p,uv,normal:n}=surface.geometry.attributes;for(let i=0;i<p.count;i++){assert.ok(Number.isFinite(p.getZ(i))&&Number.isFinite(n.getX(i)));assert.ok(uv.getX(i)>=0&&uv.getX(i)<=1&&uv.getY(i)>=0&&uv.getY(i)<=1);}}
  if(type==='notebook'){const paper=item.group.getObjectByName('notebook-paper-block').material,before=paper.color.getHex();item.glaze.color.set('#116655');ink.syncFinish();assert.equal(paper.color.getHex(),before);assert.equal(item.surfaces[0].material.color.getHex(),0x116655);}
 }
});
test('regular T-shirt has a lower front neckline, higher back neck and naturally dropped sleeves',async()=>{
 const {createVessel}=await import('../source/vessel-geometry.mjs'),T=await import('three');const shirt=createVessel('tshirt');shirt.group.updateMatrixWorld(true);
 const ray=new T.Raycaster(new T.Vector3(0,1.2,2),new T.Vector3(0,0,-1));
 assert.equal(ray.intersectObject(shirt.surfaces[0]).length,0,'front U-neck opens below the back neckline');assert.ok(ray.intersectObject(shirt.surfaces[1]).length,'back collar is visible inside the lower front neck');
 const g=shirt.surfaces[0].geometry;g.computeBoundingBox();const box=g.boundingBox,size=box.getSize(new T.Vector3());assert.ok(size.x/size.y<1.02,'regular sleeves must not span wider than the garment length');
 const p=g.attributes.position;for(let i=0;i<p.count;i++)if(Math.abs(p.getX(i))>1.4)assert.ok(p.getY(i)<.55,'sleeve tips fall below the shoulders');
});
test('backpack hardware is a thin slotted tab and cloth curvature remains smooth',async()=>{
 const {createVessel}=await import('../source/vessel-geometry.mjs');const bag=createVessel('backpack');
 for(const name of ['main-zip','pocket-zip']){const pull=bag.group.getObjectByName(name+'-flat-pull');assert.ok(pull);pull.geometry.computeBoundingBox();const b=pull.geometry.boundingBox;assert.ok(b.max.z-b.min.z<.015);assert.ok(b.max.y-b.min.y>.08);assert.equal(pull.geometry.parameters.shapes.holes.length,1);}
 const front=bag.surfaces[0].geometry.attributes.position;let max=-Infinity,min=Infinity;for(let i=0;i<front.count;i++){max=Math.max(max,front.getZ(i));min=Math.min(min,front.getZ(i));}assert.ok(max-min>.12,'bag face must bulge away from its sewn perimeter');
 // Adjacent curved gussets share every corner vertex, including their middle depth.
 const edges=[0,1,2,3].map(i=>bag.group.getObjectByName('backpack-joined-edge-'+i).geometry.attributes.position);
 for(let i=0;i<4;i++)for(let row=0;row<=16;row++)for(const axis of ['getX','getY','getZ'])assert.ok(Math.abs(edges[i][axis](row*57+56)-edges[(i+1)%4][axis](row*57))<1e-6,'gusset corners must meet');
});
