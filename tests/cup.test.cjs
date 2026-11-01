const test=require('node:test'),assert=require('node:assert/strict');
test('cup is volumetric, hollow and has independent unprinted handle',async()=>{
 const {createCup}=await import('../source/cup-geometry.mjs');const c=createCup();
 c.body.geometry.computeBoundingBox();const box=c.body.geometry.boundingBox;
 assert.ok(box.max.x-box.min.x>1.9);assert.ok(box.max.z-box.min.z>1.9);assert.ok(box.max.y-box.min.y>1.9);
 const profile=c.body.geometry.parameters.points;assert.ok(profile.some(p=>p.x===.91&&p.y===.93));assert.ok(profile.some(p=>p.x===.001&&p.y===-.84));
 assert.equal(c.handle.material.map,null);assert.equal(c.body.material.map,null);assert.notEqual(c.print.material,c.handle.material);
 assert.ok(c.group.getObjectByName('rolled-blue-rim'));assert.ok(c.handle.geometry.index.count>1000);assert.equal(c.handle.geometry.attributes.color.getX(0),1);assert.equal(c.handle.geometry.attributes.color.count,c.handle.geometry.attributes.position.count);
});
test('print UV is oriented, outside the wall and clear of handle/rim/base',async()=>{
 const {printGeometry,PRINT_REGION}=await import('../source/cup-geometry.mjs'),g=printGeometry(),p=g.attributes.position,u=g.attributes.uv;
 assert.ok(PRINT_REGION.thetaMax<Math.PI/2);assert.ok(PRINT_REGION.yMax<.93);assert.ok(PRINT_REGION.yMin>-.90);
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),r=Math.hypot(x,z);assert.ok(Math.abs(r-(.97+(y+.90)/1.83*.03+.003))<1e-6);assert.ok(z>0);assert.ok(u.getX(i)>=0&&u.getX(i)<=1);assert.ok(u.getY(i)>=0&&u.getY(i)<=1);}
 assert.equal(u.getX(0),0);assert.equal(u.getY(0),0);assert.equal(u.getX(p.count-1),1);assert.equal(u.getY(p.count-1),1);
 assert.ok(p.getX(64)>p.getX(0));assert.ok(p.getY(p.count-1)>p.getY(0));
 const a=g.index.getX(0),b=g.index.getX(1),c=g.index.getX(2),ab=[p.getX(b)-p.getX(a),p.getY(b)-p.getY(a),p.getZ(b)-p.getZ(a)],ac=[p.getX(c)-p.getX(a),p.getY(c)-p.getY(a),p.getZ(c)-p.getZ(a)];
 const cross=[ab[1]*ac[2]-ab[2]*ac[1],ab[2]*ac[0]-ab[0]*ac[2],ab[0]*ac[1]-ab[1]*ac[0]];
 assert.ok(cross[0]*p.getX(a)+cross[2]*p.getZ(a)>0);
});
test('camera bounds reject invalid/extreme values and normalize rotations',async()=>{
 const {clampCamera}=await import('../source/cup-geometry.mjs');assert.deepEqual(clampCamera({yaw:Infinity,pitch:99,distance:-10}),{yaw:.28000000000000114,pitch:1.15,distance:3.7});
 const c=clampCamera({yaw:1000,pitch:-99,distance:999});assert.ok(c.yaw>=-Math.PI&&c.yaw<=Math.PI);assert.equal(c.pitch,-.65);assert.equal(c.distance,8);
});
test('draft camera/material persist and material undo does not reset camera',()=>{
 const M=require('../prototype/foundation.js'),s=M.blank(),d=M.addDraft(s);d.cupCamera={yaw:1,pitch:.5,distance:5.5};M.edit(d,{cupMaterial:{color:'blue',finish:'gloss'}});M.undo(d);assert.equal(d.cupMaterial.color,'white');assert.equal(d.cupCamera.yaw,1);M.redo(d);const r=M.validate(JSON.parse(JSON.stringify(s))).drafts[0];assert.equal(r.cupMaterial.color,'blue');assert.deepEqual(r.cupCamera,d.cupCamera);assert.equal(M.vessels.find(v=>v.type==='cup').modelStatus,'procedural');
});
