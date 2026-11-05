const fs=require('node:fs'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{const b=await chromium.launch({channel:'msedge'});try{
 const p=await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),errors=[];
 await p.route('**/favicon.ico',r=>r.fulfill({status:204}));p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text()+' '+m.location().url);});
 const base=process.env.QA_URL||'http://127.0.0.1:8881/index.html',dir='work/qa/carriers-v2';fs.mkdirSync(dir,{recursive:true});
 await p.goto(base+'#mine');await p.locator('.mine-example').first().waitFor();await p.evaluate(async()=>{const s=await LocalStore.load(),d=Studio.addDraft(s,'enamel-peony');d.inputStage=true;d.editorFormat='pattern-v1';d.editorSurface='object';Studio.switchVessel(d,'backpack');await LocalStore.commit(s);});await p.goto(base+'#editor');await p.reload();
 const ready=()=>p.locator('#editor-object-status[data-state=ready]').waitFor({state:'attached'});await ready();
 await p.locator('[data-action=cup-picker]').click();assert.equal(await p.locator('.carrier-choices section').count(),3);assert.equal(await p.locator('[data-action=cup-pick]').count(),9);await p.locator('#dialog').evaluate(e=>Promise.all(e.getAnimations().map(a=>a.finished)));await p.screenshot({path:dir+'/picker.png'});await p.keyboard.press('Escape');assert.equal(await p.locator('#dialog').evaluate(e=>e.open),false);assert.equal(await p.evaluate(()=>document.activeElement?.dataset.action),'cup-picker');

 await p.locator('[data-print-zone]').selectOption('pocketFill');await ready();await p.screenshot({path:dir+'/backpack-pocket.png'});
 await p.locator('[data-print-zone]').selectOption('back');await ready();await p.screenshot({path:dir+'/backpack-back.png'});
 await p.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');assert.equal(await p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts[0].vesselPlacement.zone;}),'back');await p.reload();await ready();assert.equal(await p.locator('[data-print-zone]').inputValue(),'back');
 await p.locator('[data-print-zone]').selectOption('front');await ready();
 for(const type of ['cushion','pillow','duvet','backpack','tote']){
  const out=await p.evaluate(async type=>{const s=await LocalStore.load(),d=Studio.copy(s.drafts[0]);Studio.switchVessel(d,type);const result=await WorkResult.capture({...d,cupPreviewMode:'static'},{isolated:true});return {kind:result.kind,data:Array.from(new Uint8Array(await result.asset.blob.arrayBuffer()))};},type);assert.equal(out.kind,'static');assert.ok(out.data.length>3000);fs.writeFileSync(dir+'/'+type+'-static.png',Buffer.from(out.data));
 }
 for(const [width,height]of [[320,568],[375,667],[390,844],[430,932]]){
  await p.setViewportSize({width,height});await ready();
  const boxes=await p.evaluate(()=>{const box=s=>{const r=document.querySelector(s).getBoundingClientRect();return {top:r.top,bottom:r.bottom,height:r.height};};return {screen:innerHeight,overflow:document.documentElement.scrollWidth>innerWidth,model:box('#editor-cup-host'),footer:box('.wb-actions')};});console.log(width,JSON.stringify(boxes));assert.ok(!boxes.overflow);assert.ok(boxes.footer.bottom<=height+1);assert.ok(boxes.model.height>=80);
  await p.screenshot({path:dir+'/layout-'+width+'.png'});
  await p.locator('[data-action=cup-picker]').click();assert.ok(await p.locator('[data-action=cup-pick][data-id=backpack]').isVisible());await p.locator('[data-action=cup-pick][data-id=backpack]').click();await ready();assert.equal(await p.locator('[data-print-zone]').inputValue(),'front');

 }
 await p.setViewportSize({width:390,height:844});await p.locator('[data-action=cup-coverage][data-id=custom]').click();await ready();await p.screenshot({path:dir+'/coverage.png'});
 await p.locator('[data-action=cup-open]').click();await p.locator('#cup-status[data-state=ready]').waitFor({state:'attached'});assert.equal(await p.locator('.carrier-current-name strong').innerText(),'书包');await p.screenshot({path:dir+'/fullscreen.png'});
 await p.locator('[data-action=finish]').click();await p.locator('#work-title').fill('我的花书包');await p.locator('[data-action=complete]').click();await p.locator('.result-screen').waitFor();assert.ok((await p.locator('.result-screen').innerText()).includes('书包'));assert.ok(await p.locator('.result-art .saved-vessel-preview').count());const fits=await p.evaluate(()=>{const a=document.querySelector('.result-art').getBoundingClientRect(),b=document.querySelector('.result-art img').getBoundingClientRect();return b.top>=a.top&&b.bottom<=a.bottom&&b.width<=a.width;});assert.ok(fits,'saved portrait preview must stay inside its frame');await p.screenshot({path:dir+'/saved-result.png'});
 await p.locator('[data-action=edit-work]').first().click();await p.locator('[data-action=editor-surface][data-id=object]').click();await ready();assert.equal(await p.evaluate(()=>Cup3D.diagnostics().vesselType),'backpack');
 await p.locator('[data-action=cup-picker]').click();await p.locator('[data-action=cup-pick][data-id=tote]').click();await ready();await p.locator('[data-action=editor-gesture][data-id=rotate]').click();const canvas=p.locator('#editor-cup-host canvas'),box=await canvas.boundingBox();const yaw=await p.evaluate(()=>Cup3D.diagnostics().camera.yaw);await p.mouse.move(box.x+box.width*.45,box.y+box.height*.4);await p.mouse.down();await p.mouse.move(box.x+box.width*.7,box.y+box.height*.45,{steps:10});await p.mouse.up();assert.notEqual(await p.evaluate(()=>Cup3D.diagnostics().camera.yaw),yaw);await p.screenshot({path:dir+'/tote-rotated.png'});
 assert.deepEqual(errors,[]);console.log('PASS static export for five textiles, 320–430px layout, full screen, refresh, actual saved work and resumed editing, pointer rotation.');
 }finally{await b.close();}})().catch(e=>{console.error(e.stack);process.exitCode=1;});
