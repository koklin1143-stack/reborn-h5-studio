const {test}=require('node:test'),assert=require('node:assert/strict');
const M=require('../prototype/foundation.js'),T=require('../prototype/archive-transfer.js');
test('transfer retains works, image references and publications without exporting credentials or UI',async()=>{
 const source=M.blank(),draft=M.addDraft(source);draft.imageId='image:test';draft.previewAssetId='image:test';
 const work=M.complete(source,draft.id,'电脑作品');
 source.publications.push({id:'publication:test',kind:'local',state:'published',workId:work.id,snapshot:M.copy(work),title:work.title});
 source.ui.apiKey='must-not-export';
 const blob=new Blob(['image bytes'],{type:'image/png'}),text=await T.pack(source,async id=>id==='image:test'?blob:null);
 assert.ok(!text.includes('must-not-export'));assert.ok(!Object.hasOwn(JSON.parse(text).data,'ui'));
 const target=M.blank();M.complete(target,M.addDraft(target).id,'手机作品');
 const plan=T.prepare(text,target);assert.equal(plan.state.works.length,2);assert.equal(plan.state.publications.length,1);
 assert.equal(plan.added.works,1);assert.equal(plan.assets.length,1);assert.equal(await plan.assets[0].blob.text(),'image bytes');
 const imported=plan.state.works.find(w=>w.id===work.id);assert.equal(imported.imageId,plan.assets[0].id);assert.equal(plan.state.publications[0].snapshot.imageId,imported.imageId);
 const repeated=T.prepare(text,plan.state);assert.equal(repeated.added.works,0);assert.equal(repeated.state.works.length,2);
 assert.equal(target.works.length,1);
});
test('same-id local edits win and invalid packages cannot mutate the original archive',async()=>{
 const source=M.blank();M.complete(source,M.addDraft(source).id,'原版');const text=await T.pack(source,async()=>null);
 const target=M.copy(source);target.works[0].title='手机已修改';assert.equal(T.prepare(text,target).state.works[0].title,'手机已修改');
 for(const invalid of ['bad','{}',text.replace('reborn-transfer-v1','unknown')])assert.throws(()=>T.prepare(invalid,target));
 const bad=JSON.parse(text);bad.assets=[{id:'x',type:'text/html',data:'AAAA'}];assert.throws(()=>T.prepare(JSON.stringify(bad),target));assert.equal(target.works[0].title,'手机已修改');
});
