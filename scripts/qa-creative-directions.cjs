const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');

async function checkWorkbench() {
 const browser = await chromium.launch({channel:'msedge'});
 try {
  const page = await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const errors = [];
  page.on('pageerror',error=>errors.push(error.message));
  const click = (action,id) => page.locator(`[data-action="${action}"]${id === undefined ? '' : `[data-id="${id}"]`}`).filter({visible:true}).first().click();
  const saved = () => page.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
  const getDraft = () => page.evaluate(async()=>{
   const state=await LocalStore.load();
   return state.drafts.find(draft=>draft.id===state.ui.activeDraftId);
  });
  await page.goto(process.env.QA_URL || 'http://127.0.0.1:8879/prototype/index.html');
  await click('start'); await click('in-continue'); await saved();
  assert.deepEqual(await page.locator('.wb-actions button').allTextContents(),['换图','调色','完成作品']);
  assert.equal(await page.getByRole('button',{name:'更多',exact:true}).count(),0);
  const surface=page.locator('#work-preview'), box=await surface.boundingBox();
  const touch=await page.context().newCDPSession(page);
  const points=(x)=>[{x:box.x+box.width*x,y:box.y+box.height*.5,id:1}];
  await touch.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:points(.4)});
  await touch.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:points(.65)});
  await touch.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await saved(); assert.ok((await getDraft()).sampleWidth<100);
  await click('undo'); await saved(); assert.equal((await getDraft()).sampleWidth,100);
  await click('wb-tool','sample');await click('wb-crop');await click('wb-collapse');
  assert.ok(await page.locator('[data-action=wb-crop]').isVisible());
  await click('wb-collapse'); await click('undo'); await saved();
  await page.screenshot({path:'previews/simple-start-375.png'});
  const original=await getDraft();
  assert.equal(await page.locator('.wb-style-rail button').count(),14);
  assert.equal(await page.getByRole('button',{name:'试三种构图'}).count(),0);
  for(const [layout,label] of [['wrap','环形花冠'],['chevron','鱼骨折线'],['hexflower','六瓣镶花']]){
   await click('wb-layout',layout);await saved();
   const current=await getDraft();
   assert.equal(current.patternLayout,layout);assert.equal(current.sourceObjectId,original.sourceObjectId);
   await page.getByRole('button',{name:'调整'+label,exact:true}).click();
   assert.match(await page.locator('.wb-panel-head').innerText(),new RegExp('调整'+label));
   assert.ok(await page.locator('#wb-style-sample').isVisible());
   if(layout==='hexflower')await page.screenshot({path:'previews/current-style-375.png'});
   await click('wb-collapse');
   if(layout!=='hexflower'){
    await click('undo');await saved();assert.equal((await getDraft()).patternLayout,original.patternLayout);
   }
  }
  await click('wb-tool','sampling'); await click('wb-flow-toggle'); await click('wb-flow-kind','swirl');
  await page.locator('[data-field=flowStrength]').fill('62'); await saved();
  await click('wb-collapse'); await click('wb-tool','effects'); await click('wb-tool','effects-detail'); await click('pattern-ink','duotone'); await saved(); await click('wb-collapse'); await click('wb-collapse'); await click('wb-tool','sampling');
  await click('wb-flow-toggle'); await saved(); assert.equal((await getDraft()).flowStrength,62);
  await click('wb-flow-toggle'); await saved();
  await click('wb-collapse'); await click('wb-collapse'); await click('versions'); await click('version-save'); await saved(); await click('close');
  await page.reload(); await page.locator('#work-preview').waitFor();
  const restored=await getDraft();
  assert.equal(restored.versions.at(-1).snapshot.flowKind,'swirl');
  assert.equal(restored.flowEnabled,true); assert.equal(restored.patternInk,'duotone');
  for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
   await page.setViewportSize({width,height}); await click('wb-tool','effects');
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
   const footer=await page.locator('.editor-footer').boundingBox(); assert.ok(footer.y+footer.height<=height+1);
   if(width===375)await page.screenshot({path:'previews/creative-effects-375.png'});
   await click('wb-collapse');
  }
  await click('finish'); await click('wb-export');
  assert.equal(await page.locator('#wb-export-target option[value=tile]').evaluate(option=>option.disabled),true);
  await click('close');
  await click('editor-surface','object'); await click('wb-vessel','plate');
  await page.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
  await click('finish'); await page.locator('#work-title').fill('六瓣盘心'); await click('complete');
  await page.waitForURL(/#result/);
  const work=await page.evaluate(async()=>(await LocalStore.load()).works.at(-1));
  assert.equal(work.patternVersion.parameters.flowStrength,62);
  assert.equal(work.patternVersion.parameters.patternLayout,'hexflower');
  assert.deepEqual(errors,[]);
  console.log('PASS: contextual style strip, source sampler, apply/undo, combined surface and colour effects, snapshot/reload, four widths, tile restriction, 3D plate and completed work.');
 } finally {await browser.close();}
}
checkWorkbench().catch(e=>{console.error(e);process.exitCode=1;});

