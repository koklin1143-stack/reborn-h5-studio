const assert=require('node:assert/strict');
const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 for(const engine of [chromium,webkit]){
  const browser=await engine.launch(engine===chromium?{channel:'msedge'}:{});
  try{
   const page=await browser.newPage({viewport:{width:390,height:844},hasTouch:true,isMobile:true});
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto('http://127.0.0.1:8879/index.html#discover');
   await page.locator('.object-title').waitFor();
   await page.locator('.enamel-object img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode())));
   const title=()=>page.locator('.object-title').innerText(),first=await title();
   const stage=page.locator('#object-stage'),box=await stage.boundingBox(),x=box.x+box.width/2,y=box.y+box.height/2;
   const key=await page.locator('.enamel-object[data-offset="0"]').getAttribute('data-key');
   const position=()=>page.locator('[data-key="'+key+'"]').evaluate(el=>new DOMMatrix(getComputedStyle(el).transform).m41);
   const start=await position();
   // Trusted Chromium touch events; WebKit uses pointer dispatch to exercise the same controller.
   const cdp=engine===chromium?await page.context().newCDPSession(page):null;
   if(cdp)await cdp.send('Performance.enable');
   const layoutCount=async()=>cdp?(await cdp.send('Performance.getMetrics')).metrics.find(m=>m.name==='LayoutCount').value:0;
   async function point(type,px,py=y){
    if(cdp)return cdp.send('Input.dispatchTouchEvent',{type:{pointerdown:'touchStart',pointermove:'touchMove',pointerup:'touchEnd',pointercancel:'touchCancel'}[type],touchPoints:/up|cancel/.test(type)?[]:[{id:1,x:px,y:py}]});
    await stage.dispatchEvent(type,{pointerId:1,pointerType:'touch',isPrimary:true,clientX:px,clientY:py,buttons:type==='pointerup'?0:1,bubbles:true});
   }
   // Synthetic WebKit events cannot acquire native pointer capture.
   if(!cdp)await stage.evaluate(el=>{el.setPointerCapture=()=>{};el.hasPointerCapture=()=>true;});
   await point('pointerdown',x);const beforeLayout=await layoutCount();
   for(const dx of [10,20,30,40]){await point('pointermove',x-dx);await page.waitForTimeout(32);}
   assert.ok(Math.abs((await position())-start+40)<2,'hero follows the finger at full distance');
   assert.equal(await layoutCount(),beforeLayout,'drag causes no layout');
   assert.equal(await title(),first,'selection changes only on release');
   await point('pointerup',x-40);await page.waitForTimeout(330);assert.notEqual(await title(),first);
   const second=await title();
   await point('pointerdown',x);await point('pointermove',x+22);await page.waitForTimeout(35);await point('pointercancel',x+22);await page.waitForTimeout(300);
   assert.equal(await title(),second);
   await point('pointerdown',x);await point('pointermove',x+4,y+30);await point('pointerup',x+4,y+30);
   assert.equal(await title(),second);
   // Start the next gesture while the previous transition is still moving.
   for(let n=0;n<8;n++){await point('pointerdown',x);await point('pointermove',x-75);await page.waitForTimeout(35);await point('pointerup',x-75);await page.waitForTimeout(70);}
   await page.waitForTimeout(300);
   assert.equal(await page.locator('.enamel-object').count(),7);
   assert.equal(await page.locator('.enamel-object[data-offset="0"]').getAttribute('data-id'),
    await page.evaluate(async()=>(await LocalStore.load()).ui.exploreObjectId));
   await page.locator('.enamel-object[data-offset="-1"]').tap();await page.waitForTimeout(300);
   const selected=await title();await page.reload();await page.locator('.object-title').waitFor();assert.equal(await title(),selected);
   if(process.env.QA_OUT&&engine===chromium)await page.screenshot({path:process.env.QA_OUT+'/home-motion.png'});
   assert.deepEqual(errors,[]);console.log(engine.name()+': full-distance drag, zero drag layouts, cancellation, vertical intent, rapid interruption, tap and reload passed');
  }finally{await browser.close();}
 }
})().catch(e=>{console.error(e);process.exitCode=1});
