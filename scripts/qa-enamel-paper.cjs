/* Reproduce mixed-alpha paper on a dark vessel, then reopen the same result as a v10 draft. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {PNG}=require('pngjs'),{chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const grammar=require('../prototype/pattern-grammar.js');
(async()=>{
 const raw=PNG.sync.read(fs.readFileSync(process.argv[2]||'previews/enamel-pilot/selected/warm-line.png'));
 raw.data[3]=120;
 const input=PNG.sync.write(raw).toString('base64'),browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});let calls=0;
  await page.route('**/api/pattern/status',r=>r.fulfill({json:{available:true,model:'qwen-image-2.1-turbo',ruleVersion:grammar.version}}));
  await page.route('**/api/pattern',r=>{calls++;return r.fulfill({json:{stage:'pattern',ruleVersion:grammar.version,technique:'vermilion',png:input,design:{subject:'侧面印花',traits:['朝向','轮廓'],redraw:'归为色块',unit:'留白',arrangement:'单幅',void:'内部露釉'}}});});
  const tap=(action,id)=>page.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
  await page.goto('http://127.0.0.1:8879/index.html#discover');await tap('choose-start');await tap('start-method','text');
  await page.locator('#inspiration-prompt').fill('侧面印花');await tap('in-ai');await tap('in-ai-confirm');await page.locator('[data-ai-state=success]').waitFor();
  await tap('in-continue');await page.waitForURL(/#editor/);
  // The existing asset on disk stays immutable. Only its print rendition is repaired.
  await page.evaluate(async(data)=>{
   const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId),id=d.imageId;
   if(d.patternConversion.recipe.paperVersion!==1)throw Error('new asset not separated');
   for(const rec of [d.patternConversion,...d.aiVariants,...d.aiVariants.map(v=>v.record)]){
    delete rec.recipe.paperVersion;rec.recipe.version='enamel-ornament-10';
   }
   const blob=new Blob([Uint8Array.from(atob(data),c=>c.charCodeAt(0))],{type:'image/png'});
   await LocalStore.commit(s,[{id,blob}]);
  },input);
  await page.reload();await tap('editor-surface','object');await page.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
  const samples=await page.evaluate(async()=>{
   const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId),db=createArchiveDB(indexedDB);
   const original=await db.read('images',d.imageId);db.close();
   const brokenId=await LocalStore.saveImage(original);
   const rgba=async(blob)=>{const img=await createImageBitmap(blob),cv=document.createElement('canvas');cv.width=img.width;cv.height=img.height;const ctx=cv.getContext('2d');ctx.drawImage(img,0,0);img.close();return ctx.getImageData(0,0,cv.width,cv.height).data;};
   const raw=await rgba(original),fixed=await rgba(await LocalStore.getAsset(d.imageId)),texture=await rgba((await PatternTexture.export(d,{size:512})).blob);
   const opaque=data=>{let n=0;for(let i=3;i<data.length;i+=4)if(data[i]>190)n++;return n;};
   const dark={...d,cupMaterial:{...d.cupMaterial,color:'#181a1c'}};
   const missing=await Cup3D.capture({...dark,patternOpacity:0});
   const before=await Cup3D.capture({...dark,imageId:brokenId});
   const after=await Cup3D.capture(dark);
   const base=await rgba(missing);
   async function patch(blob){const pixels=await rgba(blob);let paper=0,ink=0;for(let i=0;i<base.length;i+=4){
     if(Math.max(base[i],base[i+1],base[i+2])>110)continue;
     if(Math.min(pixels[i],pixels[i+1],pixels[i+2])>140&&Math.max(pixels[i],pixels[i+1],pixels[i+2])-Math.min(pixels[i],pixels[i+1],pixels[i+2])<38)paper++;
     if(pixels[i]>base[i]+24&&pixels[i]>pixels[i+2]+30)ink++;
    }return {paper,ink};}
   const url=blob=>new Promise(resolve=>{const r=new FileReader();r.onload=()=>resolve(r.result.split(',')[1]);r.readAsDataURL(blob);});
   return {snapshot:[await url(before),await url(after)],rawOpaque:opaque(raw),fixedOpaque:opaque(fixed),originalCorner:raw[7],fixedCorner:fixed[7],textureOpaque:opaque(texture),before:await patch(before),after:await patch(after)};
  });
  assert.equal(calls,1);assert.equal(samples.originalCorner,255);assert.equal(samples.fixedCorner,0);
  assert.ok(samples.fixedOpaque<samples.rawOpaque*.65&&samples.textureOpaque>30);
  assert.ok(samples.before.paper>800,'negative control did not show the paper');assert.ok(samples.after.paper<samples.before.paper*.005,'visible paper remained');assert.ok(samples.after.ink>150);
  if(process.argv[3])for(const [i,name] of ['before','after'].entries())fs.writeFileSync(path.join(process.argv[3],'background-'+name+'.png'),Buffer.from(samples.snapshot[i],'base64'));
  delete samples.snapshot;console.log(JSON.stringify(samples));
 }finally{await browser.close();}
})().catch(e=>{console.error(e.message);process.exitCode=1;});
