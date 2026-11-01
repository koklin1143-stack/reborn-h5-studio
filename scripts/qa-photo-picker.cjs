/* Exercise the actual 12 printed marks, irregular masks and the saved output through the H5. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  for(const entry of ['http://127.0.0.1:8879/index.html',pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href]){
   const p=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
   const errors=[];p.on('pageerror',e=>errors.push(e.message));p.setDefaultTimeout(9000);
   const tap=key=>p.locator('[data-action="'+key+'"]:visible').first().click();
   const paint=()=>p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
   const shot=async(name,el)=>{if(entry.startsWith('http')&&process.env.QA_OUT){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await (el||p).screenshot({path:path.join(process.env.QA_OUT,name+'.png'),animations:'disabled'});}};
   const board=p.locator('.crop-source'),proof=p.locator('.crop-result canvas');
   const clickAt=async(el,x,y)=>{await el.scrollIntoViewIfNeeded();const b=await el.boundingBox();await el.click({position:{x:b.width*x,y:b.height*y}});await paint();};
   const fillColor=async ink=>{await p.locator('.crop-ink input').fill(ink);await paint();};
   const meta=()=>p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
   const fingerprint=()=>proof.evaluate(c=>c.toDataURL());
   await p.goto(entry+'#discover');await tap('browse');await p.locator('dialog [data-id="enamel-plate-01"]').click();await tap('start');
   await tap('in-photo-inspect');await p.locator('.crop-apply:enabled').waitFor();assert.equal(await p.locator('.source-zoom').innerText(),'看全图');await p.locator('dialog [data-action=close]').click();
   await tap('in-photo-crop');await p.locator('.crop-apply:enabled').waitFor();await p.locator('[data-shape=smart]').click();await p.locator('.picker-found:visible').waitFor();
   const seen=new Set();
   for(const [x,y] of [[.297,.651],[.25,.503],[.267,.358],[.351,.254],[.453,.202],[.567,.205],[.68,.264],[.748,.372],[.769,.516],[.706,.66],[.561,.752],[.416,.75]]){
    await clickAt(board,x,y);const label=await p.locator('.picker-found span').innerText();assert.match(label,/候选 \d+ \/ \d+/);seen.add(label);
    assert.equal(await p.locator('.crop-apply').isEnabled(),true);
   }
   assert.equal(seen.size,12);
   await clickAt(board,.68,.264);await p.locator('[name=crop-name]').fill('远端淡字');
   await p.locator('[data-zoom="2"]').click();await paint();await shot('盘沿淡字实时放大',p.locator('.proof-panel'));
   const a=await fingerprint();await p.locator('[data-zoom="4"]').click();await paint();assert.notEqual(await fingerprint(),a);
   await p.locator('[data-proof="source"]').click();await paint();const b=await fingerprint();
   await clickAt(proof,.52,.50);assert.equal(await p.locator('[data-proof="result"]').getAttribute('aria-pressed'),'true');assert.notEqual(await fingerprint(),b);
   await p.locator('.picker-found [data-step="1"]').click();await paint();
   await clickAt(board,.68,.264);await p.locator('[data-zoom="1"]').click();await paint();await p.locator('.crop-apply').click();await p.locator('dialog').waitFor({state:'hidden'});
   await tap('in-photo-crop');await p.locator('.crop-apply:enabled').waitFor();await p.locator('[data-shape=smart]').click();await p.locator('.picker-found:visible').waitFor();await clickAt(board,.25,.503);
   await fillColor('#17317b');const neutral=await fingerprint();
   await p.locator('[name=ink-range]').fill('83');await paint();assert.notEqual(await fingerprint(),neutral);await p.locator('[name=ink-range]').fill('45');await paint();
   await p.locator('.picked-palette button').first().click();await paint();assert.notEqual(await fingerprint(),neutral);await fillColor('#17317b');
   await p.locator('[name=crop-name]').fill('盘缘蓝字');await paint();
   await shot('图3蓝字实时预览',p.locator('.proof-panel'));
   const proofSnapshot=await fingerprint();
   await p.locator('.crop-apply').click();await p.locator('dialog').waitFor({state:'hidden'});
   async function drawShape(tool,points,name){
    await tap('in-photo-crop');await p.locator('.crop-apply:enabled').waitFor();await p.locator('[data-shape="'+tool+'"]').click();
    await board.scrollIntoViewIfNeeded();const b=await board.boundingBox();
    const screen=([x,y])=>[b.x+b.width*x,b.y+b.height*y];await p.mouse.move(...screen(points[0]));await p.mouse.down();
    for(const pt of points.slice(1))await p.mouse.move(...screen(pt),{steps:6});await p.mouse.up();await paint();
    await p.locator('[name=crop-name]').fill(name);assert.ok(await p.locator('.crop-apply').isEnabled());
    await p.locator('.crop-apply').click();await p.locator('dialog').waitFor({state:'hidden'});
   }
   await drawShape('ellipse',[[.30,.30],[.67,.62]],'椭圆庭院');
   await drawShape('lasso',[[.30,.30],[.67,.30],[.30,.62],[.30,.30]],'套索庭院');
   await tap('in-photo-crop');await p.locator('.crop-apply:enabled').waitFor();await p.locator('[name=extract]').selectOption('line');await paint();
   await p.locator('.proof-panel').scrollIntoViewIfNeeded();
   const alphaHash=()=>proof.evaluate(c=>{const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;let n=0;for(let i=3;i<d.length;i+=4)n=(n*31+d[i])|0;return n;});
   const alphaBefore=await alphaHash(),beforeColour=await fingerprint();await fillColor('#963928');
   assert.equal(await alphaHash(),alphaBefore);assert.notEqual(await fingerprint(),beforeColour);
   await shot('盘心人物明暗线纹',p.locator('.proof-panel'));
   for(const width of [320,430]){await p.setViewportSize({width,height:812});assert.ok(await p.locator('.photo-picker').evaluate(el=>el.scrollWidth<=el.clientWidth+1));}
   await p.locator('[name=crop-name]').fill('庭院人物线纹');await p.locator('.crop-apply').click();await p.locator('dialog').waitFor({state:'hidden'});
   await p.reload();await p.locator('.study-sheet').waitFor();assert.equal(Number(await p.locator('.sample-count').getAttribute('data-count')),6);
   await require('./qa-material-controls.cjs').focusSample(p,(await meta()).photoSelection.find(m=>m.name==='套索庭院').id);assert.equal(await p.locator('.study-original polygon').count(),2);assert.equal(await p.locator('.study-original ellipse').count(),0);
   await require('./qa-material-controls.cjs').focusSample(p,(await meta()).photoSelection.find(m=>m.name==='椭圆庭院').id);assert.equal(await p.locator('.study-original ellipse').count(),2);
   await tap('in-continue');await p.waitForURL(/#editor/);const d=await meta(),parts=d.provenance.parts;
   const edge=parts.find(s=>s.name==='远端淡字'),front=parts.find(s=>s.name==='盘缘蓝字'),ellipse=parts.find(s=>s.name==='椭圆庭院'),lasso=parts.find(s=>s.name==='套索庭院');
   assert.equal(parts.find(s=>s.name==='庭院人物线纹').recipe.method,'line');
   assert.ok(edge.region[0]>580&&edge.region[1]<215&&edge.region[2]>40&&edge.region[3]>40);
   assert.equal(front.ink,'#17317b');assert.equal(front.recipe.range,45);assert.equal(ellipse.recipe.shape,'ellipse');assert.equal(lasso.recipe.shape,'lasso');assert.ok(lasso.recipe.points.length>=3);
   assert.notEqual(ellipse.assetId,lasso.assetId);
   const metrics=await p.evaluate(async({front,ellipse,lasso,proofSnapshot})=>{
    async function pixels(id){const img=await createImageBitmap(await LocalStore.getAsset(id)),c=document.createElement('canvas');c.width=img.width;c.height=img.height;const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(img,0,0);img.close();return {c,data:ctx.getImageData(0,0,c.width,c.height).data};}
    const e=await pixels(ellipse.assetId),l=await pixels(lasso.assetId),m=await pixels(front.assetId);
    const alpha=(v,x,y)=>v.data[4*(Math.floor(y*v.c.height)*v.c.width+Math.floor(x*v.c.width))+3];
    const original=new Image();original.src=EnamelArt.photoUrl('westlake-study');await original.decode();const c=document.createElement('canvas');c.width=m.c.width;c.height=m.c.height;
    const ctx=c.getContext('2d');const [x,y,w,h]=front.region;ctx.drawImage(original,x*original.width/960,y*original.height/746,w*original.width/960,h*original.height/746,0,0,c.width,c.height);
    const data=ctx.getImageData(0,0,c.width,c.height).data;let ink=0,found=0,paper=0,noise=0,old=0;
    for(let i=0;i<data.length;i+=4){const [r,g,b]=data.subarray(i,i+3);if(b-r>20&&b-g>6&&(r+g+b)/3<135){ink++;if(m.data[i+3]>70)found++;if(Math.hypot(r-23,g-49,b-123)<67)old++;}if(Math.min(r,g,b)>144&&r>=b-3){paper++;if(m.data[i+3]>30)noise++;}}
    const live=new Image();live.src=proofSnapshot;await live.decode();const check=document.createElement('canvas');check.width=live.width;check.height=live.height;
    const compare=check.getContext('2d',{willReadFrequently:true});compare.drawImage(live,0,0);const expected=compare.getImageData(0,0,check.width,check.height).data;
    compare.clearRect(0,0,check.width,check.height);const ratio=Math.min(check.width/m.c.width,check.height/m.c.height),ww=m.c.width*ratio,hh=m.c.height*ratio;
    compare.drawImage(m.c,(check.width-ww)/2,(check.height-hh)/2,ww,hh);const saved=compare.getImageData(0,0,check.width,check.height).data;
    let alphaError=0;for(let i=3;i<saved.length;i+=4)alphaError+=Math.abs(saved[i]-expected[i]);
    return {ellipse:[alpha(e,.01,.01),alpha(e,.5,.5)],lasso:[alpha(l,.8,.8),alpha(l,.25,.25)],kept:found/ink,paper:noise/paper,old:old/ink,ink,previewError:alphaError/(check.width*check.height)};
   },{front,ellipse,lasso,proofSnapshot});
   assert.ok(metrics.previewError<.6,JSON.stringify(metrics));
   assert.deepEqual(metrics.ellipse,[0,255]);assert.deepEqual(metrics.lasso,[0,255]);assert.ok(metrics.ink>100&&metrics.kept>.88&&metrics.paper<.045,JSON.stringify(metrics));
   await p.reload();await p.locator('.editor-screen').waitFor();assert.deepEqual((await meta()).provenance.parts,parts);
   const legacy=await p.evaluate(async()=>{
    const state=await LocalStore.load(),draft=state.drafts.find(d=>d.id===state.ui.activeDraftId),id='crop:westlake:402-145-32-24:rgb';
    draft.inputTab='motif';draft.pickedPhotoMotif=id;draft.photoSelection=[{custom:true,id,sourceObjectId:draft.sourceObjectId,name:'旧版局部',ink:null,region:[402,145,32,24]}];
    const captured=[];await PhotoMaterials.adopt(draft,{page:()=>'inspiration',draft:()=>draft,atomic:(fn,assets)=>{fn(state);captured.push(...assets);return true;},toEditor:()=>{}});
    const bmp=await createImageBitmap(captured.find(f=>f.id==='photo-print:'+id).blob);const size=[bmp.width,bmp.height];bmp.close();return size;
   });assert.deepEqual(legacy,[32,24]);
   console.log(entry.startsWith('http')?'Online':'Offline',seen.size,'distinct marks',metrics);
   assert.deepEqual(errors,[]);await p.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});

