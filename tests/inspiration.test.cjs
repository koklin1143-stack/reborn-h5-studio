const test=require('node:test'),assert=require('node:assert/strict'),I=require('../prototype/inspiration-model.js'),S=require('../prototype/services.js'),M=require('../prototype/foundation.js');
test('optional inputs survive choosing the original motif and draft migration',()=>{const d=I.init(M.fresh('enamel-peony'));M.edit(d,{inspirationImageId:'photo',prompt:'蓝白',sketchStrokes:[{tool:'pen',points:[[1,2],[3,4]]}],sketchAssetId:'sketch',direction:'modern'});M.edit(d,I.editorInput(d));const state=M.blank();state.drafts.push(d);const next=M.validate(state).drafts[0];assert.equal(next.imageId,null);assert.equal(next.userImageAssetId,'photo');assert.equal(next.prompt,'蓝白');assert.equal(next.sketchAssetId,'sketch');assert.equal(next.direction,'modern');next.inputTab='sketch';assert.throws(()=>I.editorInput(next),/先转化/);});
test('file validation rejects oversized, empty and unsupported images',()=>{for(const f of [{type:'image/png',size:13*1024*1024},{type:'image/gif',size:20},{type:'image/jpeg',size:0}])assert.throws(()=>I.validateImage(f));assert.doesNotThrow(()=>I.validateImage({type:'image/webp',size:12*1024*1024}));});
test('AI states include unconfigured, generating, failure, retry and success without default fake outputs',async()=>{S.configure('ai',null);const runner=I.createJob(S);assert.equal(await runner.run({prompt:'x'}),null);assert.equal(runner.job.state,'unconfigured');S.configure('ai',{run:async()=>{throw Error('网络失败')}});await runner.run({});assert.equal(runner.job.state,'failed');let resolve;S.configure('ai',{run:()=>new Promise(r=>resolve=r)});const pending=runner.run({});assert.equal(runner.job.state,'generating');resolve({variants:[{blob:new Blob(['test-fixture'],{type:'image/png'})}]});assert.ok(await pending);assert.equal(runner.job.state,'success');S.configure('ai',null);});
test('cancel ignores a late provider response and invalid results fail instead of claiming success',async()=>{let resolve;S.configure('ai',{run:()=>new Promise(r=>resolve=r)});const r=I.createJob(S),pending=r.run({});r.cancel();resolve({variants:[{blob:new Blob(['test'],{type:'image/png'})}]});assert.equal(await pending,null);assert.equal(r.job.state,'failed');S.configure('ai',{run:async()=>({variants:[]})});await r.run({});assert.equal(r.job.state,'failed');S.configure('ai',null);});
test('picking a method selects its editable material and keeps the other contributions',()=>{
 const d=I.init(M.fresh('enamel-magpie'));
 Object.assign(d,{inspirationImageId:'photo',prompt:'保留花枝',sketchAssetId:'sketch',sketchStrokes:[{tool:'pen',points:[[2,4]]}]});
 for(const method of ['image','text','sketch','text','motif']){
  M.edit(d,I.methodPatch(d,method));
  assert.equal(I.canContinue(d),true);
  if(method==='motif')assert.equal(I.editorInput(d).imageId,null);
  else{
   assert.throws(()=>I.editorInput(d),/转化/);
   d.patternConversion={key:I.conversionKey(d),assetId:'printed-'+method,label:'测试纹样',method};
   assert.equal(I.editorInput(d).imageId,'printed-'+method);
  }
 }
 assert.equal(d.prompt,'保留花枝');assert.equal(d.inspirationImageId,'photo');assert.equal(d.sketchAssetId,'sketch');
});
test('a different prompt, reference, direction or image invalidates the reviewed print',()=>{
 const d=I.init(M.fresh('enamel-magpie'));Object.assign(d,{inputTab:'text',prompt:'蓝白牡丹团花'});
 d.patternConversion={key:I.conversionKey(d),assetId:'print',label:'牡丹团花',method:'text',engine:'local-print-v1'};
 assert.equal(I.editorInput(d).imageId,'print');assert.equal(I.editorInput(d).provenance.aiGenerated,false);
 for(const change of [{prompt:'双喜边饰'},{sourceMotifId:'motif:enamel-peony'},{direction:'modern'},{inputTab:'image',inspirationImageId:'new'}]){
  assert.throws(()=>I.editorInput({...d,...change}),/先转化/);
 }
});
test('an empty photo, thought or drawing cannot accidentally continue with the source motif',()=>{
 const d=I.init(M.fresh('enamel-magpie'));
 for(const method of ['image','text','sketch']){
  M.edit(d,I.methodPatch(d,method));assert.equal(I.canContinue(d),false);
 }
 d.sketchStrokes=[{tool:'eraser',points:[[1,1]]}];assert.equal(I.canContinue(d),false);
 M.edit(d,I.methodPatch(d,'motif'));assert.equal(I.canContinue(d),true);
});
