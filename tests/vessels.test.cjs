const test=require('node:test'),assert=require('node:assert/strict'),M=require('../prototype/foundation.js'),V=require('../prototype/vessels.js');
test('four vessel states restore independent placement/camera/material without altering motif or source',()=>{const d=M.fresh('enamel-peony');M.edit(d,{scale:125,x:18,patternInk:'blue',imageId:'personal-image'});const source=d.sourceObjectId;for(const [i,type] of ['cup','plate','bowl','basin'].entries()){M.switchVessel(d,type);M.edit(d,{vesselPlacement:{...d.vesselPlacement,x:i*10,scale:90+i*10,rotation:i*15},cupMaterial:{color:i%2?'blue':'white',finish:'gloss'}});d.cupCamera={yaw:i*.2,pitch:.8,distance:5};}for(const [i,type] of ['cup','plate','bowl','basin'].entries()){M.switchVessel(d,type);assert.equal(d.vesselPlacement.x,i*10);assert.equal(d.vesselPlacement.scale,90+i*10);assert.equal(d.cupCamera.yaw,i*.2);assert.equal(d.sourceObjectId,source);assert.equal(d.imageId,'personal-image');assert.equal(d.scale,125);assert.equal(d.x,18);assert.equal(d.patternInk,'blue');}const migrated=M.validate({...M.blank(),drafts:[d]}).drafts[0];assert.equal(Object.keys(migrated.vesselStates).length,4);});
test('switching vessels is undoable without mutating historical placement',()=>{const d=M.fresh();M.edit(d,{vesselPlacement:{...d.vesselPlacement,x:17}});M.switchVessel(d,'bowl');M.edit(d,{vesselPlacement:{...d.vesselPlacement,x:-30}});M.undo(d);assert.equal(d.vesselPlacement.x,0);M.undo(d);assert.equal(d.canvas,'cup');assert.equal(d.vesselPlacement.x,17);assert.equal(d.cupCamera.distance,4.8);M.redo(d);assert.equal(d.canvas,'bowl');assert.equal(d.vesselPlacement.x,0);});
test('plate, bowl and basin are hollow volumetric meshes with independent surface UVs',async()=>{const {createVessel}=await import('../source/vessel-geometry.mjs');const shapes=[];for(const type of ['plate','bowl','basin']){const m=createVessel(type),p=m.print.geometry.attributes.position,uv=m.print.geometry.attributes.uv;m.body.geometry.computeBoundingBox();const box=m.body.geometry.boundingBox;shapes.push([box.max.x-box.min.x,box.max.y-box.min.y]);assert.ok(box.max.y-box.min.y>.3);assert.equal(m.body.material.map,null);assert.notEqual(m.print.material,m.body.material);for(let i=0;i<p.count;i++){const r=Math.hypot(p.getX(i),p.getZ(i));assert.ok(r<=V.get(type).printRadius+1e-6);assert.ok(Math.abs(p.getY(i)-V.height(type,r)-.004)<1e-5);assert.ok(Math.abs(uv.getX(i)-(.5+p.getX(i)/(2*V.get(type).printRadius)))<1e-6);assert.ok(Math.abs(uv.getY(i)-(.5-p.getZ(i)/(2*V.get(type).printRadius)))<1e-6);}assert.ok(m.print.geometry.attributes.normal.getY(97*8+3)>0);}assert.equal(new Set(shapes.map(JSON.stringify)).size,3);});
test('completed vessel work gets own identity and immutable source/version metadata',()=>{const s=M.blank(),d=M.addDraft(s);M.switchVessel(d,'basin');d.patternVersion={id:'version-A',parameters:{scale:110}};d.previewAssetId='preview-A';d.appliedVessel={type:'basin',placement:M.copy(d.vesselPlacement)};const id=d.id,w=M.complete(s,id,'盆中花枝');assert.notEqual(w.id,id);assert.equal(w.visibility,'private');assert.equal(w.previewAssetId,'preview-A');const resumed=M.resumeWork(s,w.id);resumed.patternVersion.parameters.scale=55;assert.equal(w.patternVersion.parameters.scale,110);assert.equal(w.appliedVessel.type,'basin');assert.equal(s.publications.length,0);});
test('old basin centre draft stays inside and separate printing areas retain their own placement',()=>{
 const V=require('../prototype/vessels.js'),s=M.blank(),d=M.addDraft(s);
 M.switchVessel(d,'basin');assert.equal(d.vesselPlacement.zone,'outer');
 M.edit(d,{vesselPlacement:{...d.vesselPlacement,x:23,rotation:17,scale:132},cupMaterial:{color:'#3ca29b',finish:'gloss'}});
 M.edit(d,V.zonePatch(d,'rim'));assert.equal(d.vesselPlacement.x,0);
 M.edit(d,{vesselPlacement:{...d.vesselPlacement,y:-7}});
 M.edit(d,V.zonePatch(d,'outer'));assert.equal(d.vesselPlacement.x,23);assert.equal(d.vesselPlacement.rotation,17);assert.equal(d.vesselPlacement.scale,132);
 M.undo(d);assert.equal(d.vesselPlacement.zone,'rim');assert.equal(d.vesselPlacement.y,-7);
 M.redo(d);M.switchVessel(d,'plate');M.switchVessel(d,'basin');assert.equal(d.cupMaterial.color,'#3ca29b');assert.equal(d.vesselPlacement.zone,'outer');
 const legacy=JSON.parse(JSON.stringify(s));legacy.drafts[0].vesselPlacement={zone:'center',x:9,y:2,rotation:0,scale:100};
 assert.equal(M.validate(legacy).drafts[0].vesselPlacement.zone,'center');
 assert.throws(()=>V.zonePatch(d,'missing'),/印花位置/);
});
test('wall coverage closes around the UV seam at every size and rotation',()=>{
 const V=require('../prototype/vessels.js');
 for(const type of ['cup','bowl','basin']){
  const r=V.regions[type].outerFill;
  for(let n=1;n<=24;n++){
   const scale=V.fillScale(r,n);assert.equal(V.fillCount(r,scale),n);
   for(const rotation of [0,33,87,126,-161]){
    const [x,y]=V.fillBasis(r,{scale,rotation});
    assert.ok(Number.isInteger(x)&&Number.isInteger(y)&&Math.hypot(x,y)>0);
    const arc=V.fillAspect(r,[x,y],1.4);
    if(rotation===0)assert.ok(Math.abs(arc*x-Math.round(arc*x))<1e-8);
   }
  }
 }
});
test('spun profiles retain foot, rim and original print landmarks after smoothing',async()=>{
 const V=require('../prototype/vessels.js'),{createVessel}=await import('../source/vessel-geometry.mjs');
 for(const type of ['bowl','basin','plate']){
  const c=V.get(type),g=createVessel(type).body.geometry,logical=g.userData.designRows,pts=g.parameters.points;
  assert.ok(pts.length>c.profile.length);
  c.profile.forEach(([x,y],i)=>{const p=pts[logical.indexOf(i)];assert.equal(p.x,x);assert.equal(p.y,y);});
  logical.forEach((row,j)=>{const a=c.profile[Math.floor(row)][1],b=c.profile[Math.ceil(row)][1];
   assert.ok(pts[j].y>=Math.min(a,b)-1e-8&&pts[j].y<=Math.max(a,b)+1e-8);});
 }
});
