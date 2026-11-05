const test=require('node:test'),assert=require('node:assert/strict');
const M=require('../prototype/foundation.js'),V=require('../prototype/vessels.js');

test('independent position toggles retain active face, camera and previous adjustments',()=>{
 const s=M.blank(),d=M.addDraft(s);M.switchVessel(d,'backpack');M.edit(d,V.coverPatch(d,'full'));
 M.edit(d,{vesselPlacement:{...d.vesselPlacement,x:17,coverHeight:63}});const camera=M.copy(d.cupCamera);
 M.edit(d,V.positionPrintPatch(d,'back',true));M.edit(d,V.positionPrintPatch(d,'pocket',true));
 assert.equal(d.vesselPlacement.zone,'frontFill');assert.equal(d.vesselPlacement.x,17);assert.deepEqual(d.cupCamera,camera);assert.deepEqual(Object.keys(V.facePlacements('backpack',d.vesselPlacement)).sort(),['back','front','pocket']);
 M.edit(d,V.positionPrintPatch(d,'front',false));M.edit(d,V.positionPrintPatch(d,'back',false));M.edit(d,V.positionPrintPatch(d,'pocket',false));assert.deepEqual(V.facePlacements('backpack',d.vesselPlacement),{});
 M.edit(d,V.positionPrintPatch(d,'front',true));assert.equal(d.vesselPlacement.zone,'frontFill');assert.equal(d.vesselPlacement.coverHeight,63);assert.equal(d.vesselPlacement.x,17);
 M.undo(d);assert.equal(V.hasPrint(d.vesselPlacement),false);M.redo(d);const restored=M.validate(M.copy(s)).drafts[0];assert.equal(restored.vesselPlacement.coverHeight,63);assert.deepEqual(Object.keys(V.facePlacements('backpack',restored.vesselPlacement)),['front']);
});

test('enamel hit selection uses actual visible regions even when the print is disabled',async()=>{
 const {Vector3}=await import('three'),{createVessel}=await import('../source/vessel-geometry.mjs'),{bindEnamelInk}=await import('../source/enamel-ink.mjs');
 for(const [type,cases]of [
  ['cup',[[5,0,0,.98,'body'],[5,0,0,-.98,'back'],[5,0,.75,.98,'band']]],
  ['plate',[[11,0,.1,.5,'center'],[11,0,.1,1.2,'rim'],[5,0,-.1,.5,'back']]],
  ['basin',[[10,0,0,.5,'center'],[10,0,0,1.5,'rim'],[5,0,0,1.4,'outer']]]
 ]){
  const item=createVessel(type),ink=bindEnamelInk(item);ink.setPlacement({...V.placement(type),enabled:false});
  const rows=item.body.geometry.userData.designRows||item.body.geometry.parameters.points.map((_,i)=>i);
  for(const [row,x,y,z,expected]of cases){const i=rows.indexOf(row);assert.ok(i>=0);const hit={object:item.body,face:{a:i,b:i,c:i},point:new Vector3(x,y,z)};assert.equal(ink.positionAt(hit),expected,type+'/'+expected);assert.equal(ink.hitUV(hit),null);assert.equal(ink.positionAt({...hit,object:{}}),null,'occluding trim cannot select the body');}
  ink.dispose();
 }
});

test('enamel selection feedback is independent of printing and can be cleared for captures',async()=>{
 const {createVessel}=await import('../source/vessel-geometry.mjs'),{bindEnamelInk}=await import('../source/enamel-ink.mjs');
 const item=createVessel('basin'),ink=bindEnamelInk(item),shader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'#include <color_fragment>'};item.body.material.onBeforeCompile(shader);
 ink.setPlacement({...V.placement('basin'),enabled:false});ink.setHighlight(1);assert.equal(shader.uniforms.regionHighlight.value,1);assert.equal(shader.uniforms.printEnabled.value,0);ink.setHighlight(0);assert.equal(shader.uniforms.regionHighlight.value,0);ink.dispose();
});

test('duvet edge and centre share one physical face; enamel single selection can restart after none',()=>{
 const d=M.fresh();M.switchVessel(d,'duvet');M.edit(d,V.positionPatch(d,'border'));M.edit(d,V.positionPrintPatch(d,'border',false));M.edit(d,V.positionPrintPatch(d,'border',true));
 assert.deepEqual(Object.keys(V.facePlacements('duvet',d.vesselPlacement)),['front']);assert.equal(d.vesselPlacement.zone,'border');
 M.switchVessel(d,'cup');M.edit(d,V.printPatch(d,false));M.edit(d,V.positionPrintPatch(d,'back',true));assert.equal(d.vesselPlacement.zone,'back');assert.equal(V.hasPrint(d.vesselPlacement),true);
});

test('coverage changes stay inside the chosen physical area on every available carrier',()=>{
 for(const type of Object.keys(V.data).filter(V.available))for(const [id,area]of Object.entries(V.positions[type])){
  const d=M.fresh();M.switchVessel(d,type);M.edit(d,V.positionPatch(d,id));if(!V.hasPrint(d.vesselPlacement))M.edit(d,V.printPatch(d,true));
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

test('new face is blank until explicitly added; previously edited faces restore independently',()=>{
 const s=M.blank(),d=M.addDraft(s);M.switchVessel(d,'cushion');M.edit(d,V.coverPatch(d,'full'));
 M.edit(d,{vesselPlacement:{...d.vesselPlacement,coverWidth:64,coverHeight:77,rotation:24,scale:119}});
 M.edit(d,V.positionPatch(d,'back'));assert.equal(d.vesselPlacement.zone,'back');assert.equal(V.hasPrint(d.vesselPlacement),false);assert.deepEqual(Object.keys(V.facePlacements('cushion',d.vesselPlacement)),['front']);assert.ok(d.cupCamera.yaw>Math.PI);
 M.edit(d,V.printPatch(d,true));assert.equal(d.vesselPlacement.zone,'back');assert.equal(d.vesselPlacement.rotation,0);M.edit(d,V.coverPatch(d,'full'));
 M.edit(d,{vesselPlacement:{...d.vesselPlacement,coverWidth:83,x:6}});
 M.edit(d,V.positionPatch(d,'front'));assert.equal(d.vesselPlacement.zone,'frontFill');assert.equal(d.vesselPlacement.coverWidth,64);assert.equal(d.vesselPlacement.x,0);
 M.undo(d);assert.equal(d.vesselPlacement.zone,'backFill');assert.equal(d.vesselPlacement.coverWidth,83);M.redo(d);assert.equal(d.vesselPlacement.zone,'frontFill');
 const w=M.complete(s,d.id,'双面抱枕'),loaded=M.validate(M.copy(s)),resumed=M.resumeWork(loaded,w.id);M.edit(resumed,V.positionPatch(resumed,'back'));
 assert.equal(resumed.vesselPlacement.zone,'backFill');assert.equal(resumed.vesselPlacement.x,6);assert.equal(resumed.vesselPlacement.coverWidth,83);assert.equal(loaded.works[0].vesselPlacement.zone,'frontFill');
});

test('selection alone never stamps a new fabric or daily face, even after full print',()=>{
 for(const type of Object.keys(V.data).filter(t=>V.available(t)&&V.surface(t))){
  const d=M.fresh();M.switchVessel(d,type);M.edit(d,V.coverPatch(d,'full'));
  for(const id of Object.keys(V.positions[type]).filter(id=>!['front','border'].includes(id))){
   M.edit(d,V.positionPatch(d,id));assert.equal(V.hasPrint(d.vesselPlacement),false,type+'/'+id);assert.deepEqual(Object.keys(V.facePlacements(type,d.vesselPlacement)),['front']);
  }
 }
});

test('per-face removal survives switching, coverage, reload and undo without erasing other prints',()=>{
 const s=M.blank(),d=M.addDraft(s);M.switchVessel(d,'backpack');M.edit(d,V.coverPatch(d,'full'));
 for(const face of ['back','pocket']){M.edit(d,V.positionPatch(d,face));M.edit(d,V.printPatch(d,true));M.edit(d,V.coverPatch(d,'full'));}
 assert.deepEqual(Object.keys(V.facePlacements('backpack',d.vesselPlacement)).sort(),['back','front','pocket']);
 M.edit(d,V.printPatch(d,false));assert.equal(V.hasPrint(d.vesselPlacement),false);assert.deepEqual(Object.keys(V.facePlacements('backpack',d.vesselPlacement)).sort(),['back','front']);
 M.undo(d);assert.equal(V.hasPrint(d.vesselPlacement),true);M.redo(d);assert.equal(V.hasPrint(d.vesselPlacement),false);
 M.edit(d,V.positionPatch(d,'back'));assert.equal(d.vesselPlacement.zone,'backFill');M.edit(d,V.positionPatch(d,'pocket'));assert.equal(V.hasPrint(d.vesselPlacement),false);
 M.edit(d,V.coverPatch(d,'local'));assert.equal(V.hasPrint(d.vesselPlacement),false);M.edit(d,V.coverPatch(d,'full'));assert.equal(V.hasPrint(d.vesselPlacement),false);
 const loaded=M.validate(M.copy(s));assert.equal(V.hasPrint(loaded.drafts[0].vesselPlacement),false);M.edit(loaded.drafts[0],V.printPatch(loaded.drafts[0],true));assert.equal(loaded.drafts[0].vesselPlacement.zone,'pocket');assert.equal(loaded.drafts[0].vesselPlacement.scale,100);
});

test('legacy retained back print remains removable without reviving a suppressed front',()=>{
 const d=M.fresh();M.switchVessel(d,'backpack');M.edit(d,V.coverPatch(d,'full'));M.edit(d,V.zonePatch(d,'backFill'));M.edit(d,V.zonePatch(d,'pocketFill'));
 assert.deepEqual(Object.keys(V.facePlacements('backpack',d.vesselPlacement)).sort(),['back','pocket']);
 M.edit(d,V.positionPatch(d,'back'));assert.equal(d.vesselPlacement.zone,'backFill');M.edit(d,V.printPatch(d,false));M.edit(d,V.positionPatch(d,'front'));
 assert.equal(V.hasPrint(d.vesselPlacement),false);assert.deepEqual(Object.keys(V.facePlacements('backpack',d.vesselPlacement)),['pocket']);
 M.edit(d,V.positionPatch(d,'back'));assert.equal(V.hasPrint(d.vesselPlacement),false);
});

test('removing enamel print leaves the chosen area blank and can be undone',async()=>{
 const {createVessel}=await import('../source/vessel-geometry.mjs'),{bindEnamelInk}=await import('../source/enamel-ink.mjs');
 const d=M.fresh();M.switchVessel(d,'basin');const item=createVessel('basin'),ink=bindEnamelInk(item),shader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'#include <color_fragment>'};item.body.material.onBeforeCompile(shader);
 M.edit(d,V.printPatch(d,false));ink.setPlacement(d.vesselPlacement);assert.equal(shader.uniforms.printEnabled.value,0);
 M.edit(d,V.positionPatch(d,'center'));assert.equal(V.hasPrint(d.vesselPlacement),false);M.edit(d,V.printPatch(d,true));ink.setPlacement(d.vesselPlacement);assert.equal(shader.uniforms.printEnabled.value,1);M.undo(d);assert.equal(V.hasPrint(d.vesselPlacement),false);ink.dispose();
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
