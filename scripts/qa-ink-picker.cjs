const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
 const assert=require('node:assert/strict');
 async function test(){
  const browser=await chromium.launch({channel:'msedge'});
  try{
   const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
   const errors=[];page.on('pageerror',err=>errors.push(err.message));
   const click=(action,id)=>page.locator(`[data-action="${action}"]${id?`[data-id="${id}"]`:''}`).filter({visible:true}).first().click();
   const saved=()=>page.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
   const draft=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
   const openPicker=()=>click('wb-ink-picker');
   const tab=id=>page.locator(`[data-tab="${id}"]`).click();
   const setHex=async hex=>{await tab('rgb');await page.locator('[data-hex]').fill(hex);};
   const hash=()=>page.evaluate(async()=>{
    const s=await LocalStore.load(),d=s.drafts.find(d=>d.id===s.ui.activeDraftId);
    const {blob}=await PatternTexture.export(d,{size:512});
    return String(new Uint8Array(await crypto.subtle.digest('SHA-256',await blob.arrayBuffer())));
   });
   await page.goto(process.env.QA_URL||'http://127.0.0.1:8879/prototype/index.html');
   await click('start');await click('in-continue');await saved();const initial=await draft(),initialHash=await hash();
   await click('wb-tool','effects');await openPicker();
   await page.locator('[data-swatch="#974d40"]').click();
   assert.equal((await draft()).patternInk,initial.patternInk);
   await page.keyboard.press('Escape');await page.locator('dialog[open]').waitFor({state:'hidden'});
   assert.equal((await draft()).past.length,initial.past.length);assert.equal(await hash(),initialHash);
   await openPicker();await tab('spectrum');
   const cdp=await page.context().newCDPSession(page),plane=await page.locator('.ink-picker .ink-spectrum').boundingBox();
   for(const [type,x,y] of [['touchStart',.3,.3],['touchMove',.62,.76],['touchEnd',0,0]]){
    await cdp.send('Input.dispatchTouchEvent',{type,touchPoints:type==='touchEnd'?[]:[{id:1,x:plane.x+x*plane.width,y:plane.y+y*plane.height}]});
   }
   const fromPlane=(await page.locator('.ink-picker').evaluate(el=>el.style.getPropertyValue('--selected-ink'))).toUpperCase();
   await tab('rgb');assert.equal(await page.locator('[data-hex]').inputValue(),fromPlane);
   await page.locator('[data-channel="0"]').fill('250');assert.match(await page.locator('.ink-value').innerText(),/^#FA/);
   await setHex('BADHEX');assert.ok(await page.locator('[data-apply]').isDisabled());
   await setHex('#6B3590');await page.locator('[data-apply]').click();await saved();
   const applied=await draft();assert.equal(applied.inkColor,'#6b3590');assert.equal(applied.patternInk,'custom');assert.equal(applied.past.length,initial.past.length+1);
   const customHash=await hash();assert.notEqual(customHash,initialHash);
   await click('undo');await saved();assert.equal(await hash(),initialHash);
   await click('redo');await saved();assert.equal(await hash(),customHash);
   await page.reload();await page.locator('#work-preview').waitFor();assert.equal((await draft()).inkColor,'#6b3590');
   await click('versions');await click('version-save');await saved();await click('close');const version=(await draft()).versions.at(-1);
   await click('wb-tool','effects');await click('wb-tool','effects-detail');await click('pattern-ink','duotone');await saved();await openPicker();await setHex('#19445C');
   await page.locator('[data-role="inkLight"]').click();await page.locator('[data-hex]').fill('#FFD892');
   await page.locator('[data-apply]').click();await saved();const duo=await draft();
   assert.equal(duo.inkDark,'#19445c');assert.equal(duo.inkLight,'#ffd892');assert.notEqual(await hash(),customHash);
   await click('versions');await click('version-restore',version.id);await saved();assert.equal(await hash(),customHash);
   await click('editor-surface','object');await click('wb-vessel','plate');
   await page.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
   await click('wb-tool','effects');await openPicker();
   await page.locator('[data-swatch="#5098ba"]').click();
   for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
    await page.setViewportSize({width,height});
    for(const mode of ['grid','spectrum','rgb']){
     await tab(mode);
     const rect=await page.locator('[data-apply]').boundingBox();
     assert.ok(rect.y+rect.height<=height+1,JSON.stringify({width,height,mode,rect}));
     assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
     if(width===375&&mode!=='rgb')await page.screenshot({path:`previews/ink-picker-${mode}-375.png`});
    }
   }
   await page.locator('[data-apply]').click();await saved();await click('finish');
   await page.locator('#work-title').fill('湖蓝纹样');await click('complete');await page.waitForURL(/#result/);
   const work=await page.evaluate(async()=>(await LocalStore.load()).works.at(-1));
   assert.equal(work.patternVersion.parameters.inkColor,'#5098ba');assert.equal(work.patternVersion.parameters.patternInk,'custom');
   assert.equal(work.appliedVessel.type,'plate');assert.deepEqual(errors,[]);
   console.log('PASS: grid, spectrum touch, RGB and HEX validation; cancel, single-step undo/redo, refresh, two-tone endpoints, snapshot restore, PNG colour change, 3D plate and saved work; 320/375/390/430px.');
  }finally{await browser.close();}
 }
 test().catch(error=>{console.error(error);process.exitCode=1;});
