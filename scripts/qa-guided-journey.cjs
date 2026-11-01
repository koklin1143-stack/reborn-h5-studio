async function main(){
 const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
 const assert=require('node:assert/strict'),browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  const click=(action,id)=>page.locator(`[data-action="${action}"]${id?`[data-id="${id}"]`:''}`).filter({visible:true}).first().click();
  const state=()=>page.evaluate(()=>LocalStore.load());
  await page.goto(process.env.QA_URL||'http://127.0.0.1:8879/index.html');
  await click('start');
  assert.equal(await page.locator('.inspiration-screen').getAttribute('data-method'),'motif');
  assert.match(await page.locator('.input-source').innerText(),/德胜号白搪瓷杯/);
  await page.screenshot({path:'previews/journey-start-375.png'});
  await click('in-continue');await page.locator('#work-preview').waitFor();
  await click('wb-layout','hexflower');await click('wb-tool','sampling');
  assert.ok(await page.locator('[data-field=repeatDensity]').isVisible());
  await click('wb-collapse');await click('exit');await click('save-exit');
  await page.waitForURL(/#mine/);
  const id=(await state()).drafts[0].id;
  await click('resume',id);await page.waitForURL(/#editor/);
  assert.equal(await page.locator('.wb-style-rail [aria-pressed=true]').getAttribute('data-layout'),'hexflower');
  await click('wb-tool','sample');await click('edit-inspiration');
  assert.equal(await page.locator('dialog .start-ways button').count(),4);
  await click('in-tab','text');await page.locator('#inspiration-prompt').fill('保留花枝的一段线条');
  await click('in-convert');await page.locator('.transfer-preview').waitFor();
  await click('in-continue');await page.waitForURL(/#editor/);
  await click('finish');
  assert.match(await page.locator('.finish-review').innerText(),/德胜号白搪瓷杯/);
  assert.ok((await page.locator('#work-title').inputValue()).includes((await state()).drafts[0].patternConversion.label));
  await click('finish-preview');await click('wb-vessel','plate');
  await page.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
  await click('finish');assert.match(await page.locator('.finish-review').innerText(),/搪瓷盘/);
  for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
   await page.setViewportSize({width,height});
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
   const button=page.locator('[data-action=complete]');
   await button.scrollIntoViewIfNeeded();const rect=await button.boundingBox();
   assert.ok(rect.y>=0&&rect.y+rect.height<=height+1);
   if(width===375)await page.screenshot({path:'previews/journey-review-375.png'});
  }
  await click('complete');await page.waitForURL(/#result/);
  const work=(await state()).works.at(-1);
  assert.equal(work.canvas,'plate');assert.equal(work.patternLayout,'hexflower');
  assert.equal(work.prompt,'保留花枝的一段线条');assert.equal(work.sourceObjectId,'object:photo-desheng');
  assert.match(work.title,/搪瓷盘/);assert.deepEqual(errors,[]);
  console.log('PASS: one-tap start, optional inputs, style adjustment, exit/reopen same draft, source and vessel review, suggested title, saved work, four viewport sizes');
 }finally{await browser.close();}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
