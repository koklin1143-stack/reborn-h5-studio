const test=require('node:test'),assert=require('node:assert/strict');
const M=require('../prototype/foundation.js'),V=require('../prototype/vessels.js');

test('coverage changes stay inside the chosen physical area on every available carrier',()=>{
 for(const type of Object.keys(V.data).filter(V.available))for(const [id,area]of Object.entries(V.positions[type])){
  const d=M.fresh();M.switchVessel(d,type);M.edit(d,V.positionPatch(d,id));
  for(const mode of ['full','custom','local']){
   M.edit(d,V.coverPatch(d,mode));assert.equal(V.position(type,d.vesselPlacement).id,id,`${type}/${id}/${mode}`);
   assert.equal(d.vesselPlacement.zone,mode==='local'?area.local:area.full||area.local);
  }
 }
});

test('inner bowl/basin full print stays inside and edge/plate-reverse adjustments never jump surfaces',()=>{
 for(const type of ['bowl','basin']){
  const d=M.fresh();M.switchVessel(d,type);M.edit(d,V.positionPatch(d,'center'));M.edit(d,V.coverPatch(d,'full'));
  assert.equal(d.vesselPlacement.zone,'innerFill');assert.equal(d.cupCamera.pitch,V.get(type).camera.pitch);
  M.edit(d,V.positionPatch(d,'outer'));assert.equal(d.vesselPlacement.zone,'outerFill');
  M.edit(d,V.positionPatch(d,'rim'));M.edit(d,V.coverPatch(d,'custom'));assert.equal(d.vesselPlacement.zone,'rim');
 }
 const d=M.fresh();M.switchVessel(d,'plate');M.edit(d,V.positionPatch(d,'back'));M.edit(d,V.coverPatch(d,'custom'));assert.equal(d.vesselPlacement.zone,'back');assert.ok(d.cupCamera.pitch<0);
});

test('front/back keeps coverage and distinct saved settings through undo, saved works and reload',()=>{
 const s=M.blank(),d=M.addDraft(s);M.switchVessel(d,'cushion');M.edit(d,V.coverPatch(d,'full'));
 M.edit(d,{vesselPlacement:{...d.vesselPlacement,coverWidth:64,coverHeight:77,rotation:24,scale:119}});
 M.edit(d,V.positionPatch(d,'back'));assert.equal(d.vesselPlacement.zone,'backFill');assert.equal(d.vesselPlacement.coverWidth,64);assert.equal(d.vesselPlacement.rotation,24);assert.ok(d.cupCamera.yaw>Math.PI);
 M.edit(d,{vesselPlacement:{...d.vesselPlacement,coverWidth:83,x:6}});
 M.edit(d,V.positionPatch(d,'front'));assert.equal(d.vesselPlacement.zone,'frontFill');assert.equal(d.vesselPlacement.coverWidth,64);assert.equal(d.vesselPlacement.x,0);
 M.undo(d);assert.equal(d.vesselPlacement.zone,'backFill');assert.equal(d.vesselPlacement.coverWidth,83);M.redo(d);assert.equal(d.vesselPlacement.zone,'frontFill');
 const w=M.complete(s,d.id,'双面抱枕'),loaded=M.validate(M.copy(s)),resumed=M.resumeWork(loaded,w.id);M.edit(resumed,V.positionPatch(resumed,'back'));
 assert.equal(resumed.vesselPlacement.zone,'backFill');assert.equal(resumed.vesselPlacement.x,6);assert.equal(resumed.vesselPlacement.coverWidth,83);assert.equal(loaded.works[0].vesselPlacement.zone,'frontFill');
});

test('every legacy saved zone has one position and preserves its layout when read',()=>{
 for(const type of Object.keys(V.data).filter(V.available))for(const zone of Object.keys(V.regions[type])){
  const d=M.fresh();M.switchVessel(d,type);M.edit(d,V.zonePatch(d,zone));M.edit(d,{vesselPlacement:{...d.vesselPlacement,x:9,rotation:17}});
  const before=M.copy(d.vesselPlacement),loaded=M.validate({...M.blank(),drafts:[M.copy(d)]}).drafts[0];
  assert.deepEqual(loaded.vesselPlacement,before);const pos=V.position(type,before);assert.ok(V.positions[type][pos.id]);
  const matches=Object.values(V.positions[type]).filter(p=>[p.local,p.full,...(p.aliases||[])].includes(zone));assert.equal(matches.length,1,type+'/'+zone);
 }
 const d=M.fresh();M.edit(d,V.positionPatch(d,'back'));M.edit(d,V.coverPatch(d,'local'));assert.equal(d.vesselPlacement.zone,'back');M.edit(d,V.positionPatch(d,'whole'));assert.equal(d.vesselPlacement.zone,'outerFill');
});
