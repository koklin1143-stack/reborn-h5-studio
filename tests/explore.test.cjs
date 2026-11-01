const test=require('node:test'),assert=require('node:assert/strict'),E=require('../prototype/explore.js');
test('photographs have licensed sources distinct from historical draft identities',()=>{
 const s={ui:{positions:{enamel:'enamel-peony'}}};
 assert.equal(new Set(E.items.map(o=>o.id)).size,E.items.length);
 assert.equal(new Set(E.items.map(o=>o.type)).size,4);
 for(const o of E.items){
  assert.equal(E.fromSource(o.sourceObjectId),o);assert.match(o.source.url,/commons\.wikimedia\.org\/wiki\/File:/);
  assert.match(o.source.licenseUrl,/creativecommons\.org\/(licenses\/by-sa|publicdomain\/zero)/);assert.ok(o.source.creator);
  const old=E.fromSource('object:'+o.id);if(old){assert.equal(old.source.verified,false);assert.notEqual(old.name,o.name);}
 }
 for(const o of E.exhibits){assert.equal(E.featured(s).id,o.id);E.cycle(s,1);}
 assert.equal(E.featured(s).id,E.exhibits[0].id);assert.equal(E.cycle(s,-1).id,E.exhibits.at(-1).id);
 const archived=E.items.find(o=>!E.exhibits.includes(o));if(archived){
  E.select(s,archived.id);assert.equal(E.selected(s),archived);assert.equal(E.featured(s),E.exhibits[0]);
 }
 assert.equal(s.ui.positions.enamel,'enamel-peony');
});
test('local search respects photographed features and does not match the previous fictional motifs',()=>{
 assert.deepEqual(E.search('西湖纪念盘').map(o=>o.type),['plate']);assert.deepEqual(E.search('蓝色杯子').map(o=>o.id),['enamel-cup-01','enamel-cup-02']);
 assert.deepEqual(E.search('平海盆').map(o=>o.type),['basin']);
 for(const q of ['双喜盆','牡丹盘','双喜牡丹杯','飞机','  '])assert.deepEqual(E.search(q),[]);
});
test('only enamel opens in the twelve-category home rail',()=>{
 assert.equal(E.categories.length,12);
 assert.deepEqual(E.categories.filter(c=>c.open).map(c=>c.id),['enamel']);
 assert.equal(new Set(E.categories.map(c=>c.id)).size,E.categories.length);
});
test('spoken flower and vessel descriptions match only available objects',()=>{
 assert.deepEqual(E.search('给我找一个有人物的盘子').map(o=>o.type),['plate']);
 assert.deepEqual(E.search('有数字的杯子').map(o=>o.type),['cup']);
 assert.deepEqual(E.search('有小鸟的碗'),[]);
 assert.deepEqual(E.search('带牡丹花纹的邮票'),[]);
});
