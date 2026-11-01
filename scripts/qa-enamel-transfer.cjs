const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
const out='previews/print-transfer',base=process.env.QA_URL||'http://127.0.0.1:8879/prototype/index.html';
async function main(){
 fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const tap=(a,id)=>page.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
  const draft=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
  const convert=async()=>{await tap('in-convert');await page.locator('.transfer-preview img').waitFor();};
  async function way(id){await tap('in-options');await tap('in-tab',id);}
  async function pixels(id){
   return page.evaluate(async id=>{
    const blob=await LocalStore.getAsset(id),im=await createImageBitmap(blob),c=document.createElement('canvas');
    c.width=c.height=128;const g=c.getContext('2d');g.drawImage(im,0,0,128,128);im.close();
    const p=g.getImageData(0,0,128,128).data;let blank=0,ink=0,red=0,blue=0,hash=2166136261;
    for(let i=0;i<p.length;i+=4){
     if(p[i+3]<12)blank++;else{ink++;red+=p[i]>p[i+2]*1.18;blue+=p[i+2]>p[i]*1.18;}
     for(let k=0;k<4;k++)hash=Math.imul(hash^p[i+k],16777619);
    }
    return {hash,blank,ink,red,blue};
   },id);
  }
  async function fixture(kind){
   return Buffer.from(await page.evaluate(kind=>{
    const c=document.createElement('canvas');c.width=200;c.height=160;const g=c.getContext('2d');
    g.fillStyle='#f7f4e8';g.fillRect(0,0,200,160);g.fillStyle='#af3e44';
    if(kind==='cherries'){
     for(const [x,y,r] of [[63,103,24],[126,111,29]]){g.beginPath();g.arc(x,y,r,0,Math.PI*2);g.fill();}
     g.strokeStyle='#586b45';g.lineWidth=5;g.beginPath();g.moveTo(62,84);g.quadraticCurveTo(88,65,94,28);g.quadraticCurveTo(123,43,125,86);g.stroke();
     g.fillStyle='#748b58';g.beginPath();g.ellipse(111,25,21,8,-.5,0,Math.PI*2);g.fill();
    }else{g.fillRect(38,50,115,31);g.fillRect(50,50,24,74);}
    return c.toDataURL().split(',')[1];
   },kind),'base64');
  }
  async function upload(bytes){
   await page.locator('#inspiration-file').setInputFiles({name:'测试素材.png',mimeType:'image/png',buffer:bytes});
   await page.locator('dialog[open] #input-image-consent').check();await tap('in-upload-confirm');await page.locator('dialog').waitFor({state:'hidden',timeout:4000}).catch(async e=>{throw Error(e.message+' '+await page.locator('dialog').innerText());});
  }
  await page.goto(base+'#discover');await page.locator('.enamel-home').waitFor();
  assert.equal(await page.locator('.enamel-navigation,.object-counter').count(),0);
  await page.screenshot({path:out+'/home.png'});await tap('choose-start');
  assert.equal(await page.locator('.way-row').count(),4);
  const layout=await page.locator('.way-row').last().evaluate(el=>[getComputedStyle(el).display,el.offsetWidth,el.parentElement.clientWidth]);
  assert.equal(layout[0],'grid');assert.equal(layout[1],layout[2]);await page.screenshot({path:out+'/methods.png',animations:'disabled'});
  await tap('start-method','image');const source=await fixture('cherries');fs.writeFileSync(out+'/test-input.png',source);
  await upload(source);await convert();const first=(await draft()).patternConversion;
  const a=await pixels(first.assetId);assert.ok(a.blank>1800&&a.ink>130);assert.notEqual(a.hash,(await pixels(first.sourceAssetId)).hash);
  await tap('in-revise');await require('./qa-print-style-helper.cjs').pickReference(page,'enamel-peony');await convert();
  const second=(await draft()).patternConversion;assert.notEqual(a.hash,(await pixels(second.assetId)).hash);
  await page.locator('.transfer-preview img').screenshot({path:out+'/image-pattern.png'});
  await tap('in-revise');await upload(await fixture('angular'));await convert();const third=(await draft()).patternConversion;
  assert.notEqual((await pixels(third.assetId)).hash,(await pixels(second.assetId)).hash);
  await page.reload();await page.locator('.transfer-preview img').waitFor();assert.equal((await draft()).patternConversion.assetId,third.assetId);
  await tap('in-continue');await page.waitForURL(/#editor/);
  let d=await draft();assert.equal(d.imageId,third.assetId);assert.notEqual(d.imageId,d.inspirationImageId);
  assert.equal(d.provenance.origin,'local-print');assert.equal(d.provenance.aiGenerated,false);
  const texture=await page.evaluate(async()=>{const s=await LocalStore.load();const d=s.drafts.find(d=>d.id===s.ui.activeDraftId);return (await PatternTexture.export(d,{size:512})).blob.size;});assert.ok(texture>1000);
  await tap('editor-surface','object');await page.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
  await tap('back');await way('text');await page.locator('#inspiration-prompt').fill('不在词库里的潜水艇');await tap('in-convert');
  await page.getByText(/本地转化还读不出/).waitFor();assert.equal(await page.locator('.transfer-preview').count(),0);
  await page.locator('#inspiration-prompt').fill('蓝白牡丹团花');await convert();const blue=(await draft()).patternConversion;
  assert.match(blue.label,/牡丹团花/);const bp=await pixels(blue.assetId);
  await page.locator('.transfer-preview img').screenshot({path:out+'/text-pattern.png'});await page.screenshot({path:out+'/review.png'});
  await tap('in-revise');await page.locator('#inspiration-prompt').fill('红色双喜边饰');await convert();
  const red=(await draft()).patternConversion,rp=await pixels(red.assetId);assert.match(red.label,/双喜边饰/);
  assert.ok(bp.blue>rp.blue&&rp.red>bp.red);assert.notEqual(bp.hash,rp.hash);
  await way('sketch');const r=await page.locator('#sketch-pad').boundingBox();
  await page.mouse.move(r.x+r.width*.2,r.y+r.height*.75);await page.mouse.down();
  for(const [x,y] of [[.24,.45],[.42,.22],[.52,.31],[.64,.17],[.79,.42],[.68,.63],[.2,.75]])await page.mouse.move(r.x+r.width*x,r.y+r.height*y,{steps:5});
  await page.mouse.up();await page.locator('#sketch-pad').screenshot({path:out+'/sketch-input.png'});await convert();d=await draft();const sketch=d.patternConversion;
  assert.equal(sketch.sourceAssetId,d.sketchAssetId);assert.notEqual(sketch.assetId,d.sketchAssetId);
  assert.notEqual((await pixels(sketch.assetId)).hash,(await pixels(d.sketchAssetId)).hash);
  await page.locator('.transfer-preview img').screenshot({path:out+'/sketch-pattern.png'});
  for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
   await page.setViewportSize({width,height});const box=await page.locator('[data-action=in-continue]').boundingBox();
   assert.ok(box.y>=0&&box.y+box.height<=height+1);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  }
  await tap('in-continue');await page.waitForURL(/#editor/);await tap('finish');await tap('complete');await page.waitForURL(/#result/);
  await page.reload();const work=await page.evaluate(async()=>(await LocalStore.load()).works.at(-1));
  assert.equal(work.imageId,sketch.assetId);assert.equal(work.patternVersion.imageAssetId,sketch.assetId);assert.equal(work.provenance.origin,'local-print');assert.equal(work.sourceId,'print:'+sketch.assetId);assert.deepEqual(errors,[]);
  console.log('PASS real image/reference/shape pixel differences; text theme, colour and composition; hand-drawn source vs derivative; transparent output; unsupported text; preview recovery; 2D/3D and saved work; four widths.');
 }finally{await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
