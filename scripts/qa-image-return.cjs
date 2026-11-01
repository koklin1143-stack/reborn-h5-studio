async function run(){
 const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
 const assert=require('node:assert/strict');
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const button=(action,id)=>page.locator(`[data-action="${action}"]${id?`[data-id="${id}"]`:''}`).filter({visible:true}).first();
  const click=(action,id)=>button(action,id).click();
  const saved=()=>page.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
  const draft=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
  const upload=file=>page.locator('#inspiration-file').setInputFiles(file);
  await page.goto(process.env.QA_URL||'http://127.0.0.1:8879/prototype/index.html');
  await click('start');await click('in-continue');await click('wb-layout','echo');await saved();
  const first=await draft();
  assert.equal(await button('wb-tool','sampling').getAttribute('aria-label'),'调整回纹层叠');
  await click('wb-tool','sample');await click('replace','enamel-peony');await saved();
  assert.ok(await page.locator('.wb-style-rail').isVisible());assert.equal((await draft()).patternLayout,'echo');
  await click('undo');await saved();assert.equal((await draft()).itemId,first.itemId);
  await click('wb-tool','sampling');await click('wb-tool','sample');await click('replace','enamel-happiness');await saved();
  assert.ok(await page.locator('[data-field=echoRatio]').isVisible());
  await page.locator('[data-field=echoRatio]').fill('46');await saved();
  await click('wb-tool','sample');await click('upload');
  await upload({name:'bad.txt',mimeType:'text/plain',buffer:Buffer.from('bad')});
  await page.waitForFunction(()=>document.querySelector('#input-error')?.textContent.includes('JPG'));
  assert.equal((await draft()).imageId,null);await click('back');await page.waitForURL(/#editor/);await button('replace','enamel-peony').waitFor();
  await click('upload');
  const png=await page.evaluate(()=>{const c=document.createElement('canvas');c.width=c.height=60;const g=c.getContext('2d');g.fillStyle='#864263';g.fillRect(0,0,32,60);g.fillStyle='#b78541';g.fillRect(30,0,30,40);return c.toDataURL().split(',')[1];});
  await upload({name:'my-flower.png',mimeType:'image/png',buffer:Buffer.from(png,'base64')});
  await page.locator('dialog[open] #input-image-consent').check();await click('in-upload-confirm');await click('in-convert');await page.locator('.transfer-preview').waitFor();await click('in-continue');
  await page.waitForFunction(()=>!document.querySelector('#dialog').open&&document.querySelector('[data-field=echoRatio]'));
  const personal=await draft();assert.ok(personal.imageId);assert.equal(personal.inputImageName,'my-flower.png');assert.equal(personal.imageId,personal.patternConversion.assetId);assert.equal(personal.echoRatio,46);assert.equal(personal.sourceObjectId,first.sourceObjectId);
  await click('wb-collapse');await click('editor-surface','object');await click('wb-vessel','plate');
  const ready=()=>page.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
  await ready();const mesh=await page.evaluate(()=>Cup3D.diagnostics().modelId);
  await click('wb-tool','effects');
  assert.ok(await page.locator('.inline-spectrum').isVisible());assert.equal(await page.locator('.ink-targets button').count(),2);
  assert.equal(await page.locator('.tool-panel [data-field=contrast],.tool-panel [data-action=wb-flow-toggle]').count(),0);
  await click('wb-tool','effects-detail');await click('pattern-ink','red');await saved();await click('wb-collapse');await click('wb-tool','sample');await click('replace','enamel-peony');
  await saved();await ready();assert.ok(await page.locator('.inline-spectrum').isVisible());assert.equal(await page.evaluate(()=>Cup3D.diagnostics().modelId),mesh);
  const current=await draft();assert.equal(current.patternInk,'custom');assert.equal(current.inkColor,'#a85545');assert.equal(current.echoRatio,46);assert.equal(current.canvas,'plate');assert.equal(current.id,first.id);
  await click('undo');await saved();assert.equal((await draft()).imageId,personal.imageId);
  for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
   await page.setViewportSize({width,height});const chips=page.locator('.spectrum-actions button');
   const right=await chips.last().boundingBox(),left=await chips.first().boundingBox();
   assert.ok(right.x+right.width<=width&&left.x>=0);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
   if(width===375)await page.screenshot({path:'previews/quick-color-375.png'});
  }
  await page.reload();await ready();assert.equal((await draft()).imageId,personal.imageId);assert.deepEqual(errors,[]);
  console.log('PASS: template replacement → canvas; settings → replacement/upload → same settings; failed upload/cancel keeps source; plate and colour tray restored; undo, reload, continuous colour panel on four widths.');
 }finally{await browser.close();}
}
run().catch(error=>{console.error(error);process.exitCode=1;});
