/* Focused cross-engine regression for the mobile walkthrough. Uses isolated local records. */
const assert=require('node:assert/strict');
const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
async function check(engine){
 const browser=await engine.launch(engine===chromium?{channel:'msedge'}:{});
 try{
  const page=await browser.newPage({viewport:{width:320,height:568},hasTouch:true,isMobile:true,reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));page.setDefaultTimeout(8000);
  const base='http://127.0.0.1:8879/index.html';
  const tap=(name,id)=>page.locator('[data-action="'+name+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().tap();
  const work=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(x=>x.id===s.ui.activeDraftId)});
  await page.goto(base+'#mine');await page.locator('.my-tabs').waitFor();
  const ids=await page.evaluate(async()=>{
   const s=await LocalStore.load(),d=Studio.addDraft(s,'enamel-magpie'),w=Studio.complete(s,d.id,'公开样碗');
   const pub=Studio.publish(s,w.id,{rights:true,display:true,inspiration:true});
   const sketch=Studio.addDraft(s,'enamel-magpie');InspirationModel.init(sketch);
   Object.assign(sketch,{inputTab:'sketch',primaryInput:'sketch',lastWorkspace:'inspiration',sketchSubject:'一座小山',sketchStrokes:[{tool:'pen',points:[[110,270],[230,110],[430,270],[110,270]]}]});
   const ink=Studio.addDraft(s,'enamel-magpie');ink.editorSurface='object';ink.canvas='bowl';
   ink.spotPaint={source:'motif:'+ink.itemId,count:3,colors:['#345b68','#b64e32','#dd9944'],strokes:[{slot:2,width:70,points:[[500,500],[600,600]]}]};
   s.ui.activeDraftId=ink.id;s.ui.filter='works';await LocalStore.commit(s);return {work:w.id,pub:pub.id,sketch:sketch.id,ink:ink.id};
  });
  await page.reload();await page.getByRole('button',{name:/已在本机广场展示/}).tap();await page.waitForURL(/#gallery\//);
  assert.equal(decodeURIComponent(page.url().split('#gallery/')[1]),ids.pub);await tap('back');
  await tap('filter','drafts');const sketchCard=page.locator('.work-card').filter({hasText:'一座小山'});
  assert.ok(await sketchCard.locator('.work-cover img').evaluate(el=>el.complete&&el.naturalWidth>0));
  await sketchCard.locator('[data-action=resume]').first().tap();await page.locator('#sketch-pad').waitFor();assert.equal(await page.locator('#sketch-subject').inputValue(),'一座小山');
  const before=await page.locator('#sketch-pad').evaluate(c=>c.toDataURL());await tap('in-ai');await page.locator('.recipe-sheet').waitFor();
  await page.goBack();await page.locator('dialog[open]').waitFor({state:'hidden'});assert.match(page.url(),/#inspiration$/);
  assert.equal(await page.locator('#sketch-pad').evaluate(c=>c.toDataURL()),before);
  await page.goForward();await page.locator('.recipe-sheet').waitFor();await page.getByRole('button',{name:'返回修改'}).tap();
  await page.waitForFunction(()=>!history.state?.generationSheet);await page.goBack();await page.locator('.my-tabs').waitFor();
  const assetId=await page.evaluate(async id=>(await LocalStore.load()).drafts.find(d=>d.id===id).sketchAssetId,ids.sketch);
  assert.ok(assetId);
  await page.reload();await page.locator('.my-tabs').waitFor();
  assert.equal(await page.evaluate(async id=>(await LocalStore.getAsset(id)).type,assetId),'image/png');
  const savedThumb=sketchCard.locator('.work-cover img');
  assert.ok(await savedThumb.evaluate(i=>i.complete&&i.naturalWidth>0));

  await page.locator('[data-action=resume][data-id="'+ids.ink+'"]').first().tap();await page.locator('.wb-editor').waitFor();await tap('wb-tool','effects');
  for(const [w,h] of [[320,568],[375,667]]){
   await page.setViewportSize({width:w,height:h});await page.waitForTimeout(200);
   const d=await page.evaluate(()=>{const rect=s=>document.querySelector(s).getBoundingClientRect();return {preview:rect('#editor-cup-host').height,footer:rect('.wb-actions').bottom,height:innerHeight,scroll:document.querySelector('#main').scrollTop}});
   assert.ok(d.preview>=150&&d.footer<=h+1&&d.scroll===0,JSON.stringify(d));console.log(engine.name(),w,d);
  }
  const spectrum=page.locator('.tool-panel .ink-spectrum');const original=(await work()).spotPaint;
  await spectrum.tap({position:{x:100,y:28}});await page.getByRole('dialog',{name:'替换局部配色？'}).waitFor();
  assert.deepEqual((await work()).spotPaint,original);await page.getByRole('button',{name:'保留局部配色'}).tap();assert.deepEqual((await work()).spotPaint,original);
  await spectrum.tap({position:{x:102,y:27}});await page.getByRole('button',{name:'替换局部配色',exact:true}).tap();
  await page.waitForFunction(async()=>{const s=await LocalStore.load();return !s.drafts.find(x=>x.id===s.ui.activeDraftId).spotPaint});
  await tap('undo');await page.waitForFunction(async()=>{const s=await LocalStore.load();return !!s.drafts.find(x=>x.id===s.ui.activeDraftId).spotPaint});
  assert.deepEqual((await work()).spotPaint,original);await tap('wb-collapse');assert.ok(await page.locator('.wb-vessels').isVisible());
  await tap('editor-surface','flat');const canvas=page.locator('#work-preview');const box=await canvas.boundingBox();const cx=box.x+box.width/2,cy=box.y+box.height/2;
  if(engine===chromium){
   const cdp=await page.context().newCDPSession(page);
   const send=(type,points)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points.map(([id,x,y])=>({id,x,y}))});
   const previous=await work();await send('touchStart',[[1,cx-35,cy],[2,cx+35,cy]]);await send('touchMove',[[1,cx-55,cy-20],[2,cx+55,cy+20]]);await send('touchEnd',[]);
   await page.waitForTimeout(500);const result=await work();assert.notEqual(result.sampleWidth,previous.sampleWidth);assert.notEqual(result.sampleRotation,previous.sampleRotation);await tap('undo');
  }
  assert.deepEqual(errors,[]);console.log(engine.name(),'five fixes passed');
 }finally{await browser.close()}
}
(async()=>{for(const engine of [chromium,webkit])await check(engine)})().catch(e=>{console.error(e);process.exitCode=1});
