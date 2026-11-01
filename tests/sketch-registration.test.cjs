const test=require('node:test'),assert=require('node:assert/strict'),{PNG}=require('pngjs');
const {registerSketch}=require('../scripts/sketch-registration.cjs');
function sample(offset){
 const p=new PNG({width:256,height:256});p.data.fill(255);
 for(let y=35;y<222;y++)for(let x=32;x<223;x++){
  if(x<135+offset&&x>107+offset&&y>100&&y<179)continue;
  p.data.set([157,54,27,255],(y*256+x)*4);
 }
 return p;
}
test('aligned source contours keep their print bytes; a local offset only changes a print when the rendered pixels measure closer',()=>{
 const base=sample(0),line=new Float32Array(192*192);
 for(let y=1;y<255;y++)for(let x=1;x<255;x++){
  const i=(y*256+x)*4;
  if(base.data[i]<200&&[-1024,1024,-4,4].some(k=>base.data[i+k]>210))line[Math.round(y*.7+4)*192+Math.round(x*.7+4)]=1;
 }
 const field={line},ref=registerSketch(field,PNG.sync.write(base));assert.equal(ref.result.adjusted,false);assert.equal(ref.bytes,undefined);
 const fit=registerSketch(field,PNG.sync.write(sample(8)));assert.equal(fit.result.adjusted,true);assert.ok(fit.result.after<fit.result.before);
 assert.equal(registerSketch(field,fit.bytes).result.before,fit.result.after);
});
