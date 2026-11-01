const test=require('node:test'),assert=require('node:assert/strict');
const {separate}=require('../prototype/enamel-paper.js');
test('a translucent ink speck cannot prevent white paper and enclosed white gaps from revealing the glaze',()=>{
 const n=20,pixels=new Uint8ClampedArray(n*n*4).fill(255);
 const set=(x,y,rgba)=>pixels.set(rgba,(y*n+x)*4);
 const pixel=(x,y)=>[...pixels.slice((y*n+x)*4,(y*n+x+1)*4)];
 for(let y=7;y<=11;y++)for(let x=7;x<=11;x++)set(x,y,[175,47,24,255]);
 set(9,9,[251,249,247,255]);set(7,11,[175,47,24,104]);set(6,8,[237,198,187,255]);
 const result=separate(pixels,n,n,30);
 assert.equal(result.coveredEdge,0);assert.equal(result.changed,true);
 assert.deepEqual(pixel(1,1),[0,0,0,0]);assert.deepEqual(pixel(9,9),[0,0,0,0]);
 assert.deepEqual(pixel(8,8),[175,47,24,255]);assert.deepEqual(pixel(7,11),[175,47,24,104]);
 const wash=pixel(6,8);
 assert.ok(wash[3]>0&&wash[3]<150);
 for(const [i,target] of [237,198,187].entries())assert.ok(Math.abs(wash[i]*wash[3]/255+255-wash[3]-target)<2);
});
test('warm paper with a transparent border is removed while a full coloured background is flagged',()=>{
 const n=16,data=new Uint8ClampedArray(n*n*4);
 for(let i=0;i<n*n;i++)data.set([239,233,229,i%n===0?0:255],4*i);
 data.set([225,190,158,255],(8*n+8)*4);
 assert.equal(separate(data,n,n,38).coveredEdge,0);assert.equal(data[7],0);
 assert.ok(data[(8*n+8)*4+3]>0);
 for(let i=0;i<n*n;i++)data.set([55,99,150,255],4*i);
 assert.equal(separate(data,n,n,30).coveredEdge,1);
});
