const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{const mode=process.env.QA_MODE||'local',browser=await chromium.launch({channel:'msedge',...(mode==='live'?{proxy:{server:'http://127.0.0.1:7897'}}:{})});try{
 const p=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),errors=[],dir='work/qa/carriers-v6';fs.mkdirSync(dir,{recursive:true});p.on('pageerror',e=>errors.push(e.message));
 const base=mode==='offline'?pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href:mode==='live'?'https://koklin1143-stack.github.io/reborn-h5-studio/?v=20261105-carriers-v6':process.env.QA_URL||'http://127.0.0.1:8879/index.html';
 if(mode==='offline')await p.route(/^https?:/,r=>r.abort());else await p.route('**/favicon.ico',r=>r.fulfill({status:204}));
 await p.goto(base+'#mine');assert.equal(await p.locator('meta[name=reborn-release]').getAttribute('content'),'2026-11-05-carriers-v6');await p.locator('.mine-example').first().waitFor();
 await p.evaluate(async()=>{const s=await LocalStore.load(),d=Studio.addDraft(s,'enamel-peony');d.inputStage=true;d.editorFormat='pattern-v1';d.editorSurface='object';Studio.switchVessel(d,'backpack');await LocalStore.commit(s);});await p.goto(base+'#editor');await p.reload();
 const ready=()=>p.locator('#editor-object-status[data-state=ready]').waitFor({state:'attached'});await ready();assert.equal(await p.evaluate(()=>Cup3D.diagnostics().meshName),'studio-sewn-backpack-v6');
 for(const width of [320,390]){
  await p.setViewportSize({width,height:width===320?568:844});await p.locator('[data-action=cup-picker]').click();
  for(const [family,count]of [['enamel',4],['textile',3],['bags',2],['daily',2],['apparel',1]]){
   await p.locator(`[data-action=cup-family][data-id=${family}]`).click();assert.equal(await p.locator('[data-action=cup-pick]').count(),count);await p.waitForFunction(()=>Array.from(document.querySelectorAll('.carrier-choice-art img')).every(e=>e.complete&&e.naturalWidth>0));assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   if(['daily','apparel'].includes(family)){await p.locator('#dialog').evaluate(e=>Promise.all(e.getAnimations().map(a=>a.finished)));await p.screenshot({path:`${dir}/${mode}-${width}-${family}.png`});}
  }
  await p.keyboard.press('Escape');
 }
 for(const [type,family,zone,label]of [['notebook','daily','back','封面色'],['phonecase','daily','front','壳色'],['tshirt','apparel','back','布色']]){
  await p.locator('[data-action=cup-picker]').click();await p.locator(`[data-action=cup-family][data-id=${family}]`).click();await p.locator(`[data-action=cup-pick][data-id=${type}]`).click();await ready();assert.equal(await p.evaluate(()=>Cup3D.diagnostics().vesselType),type);assert.ok((await p.locator('.glaze-shortcut').innerText()).includes(label));
  await p.locator('[data-print-zone]').selectOption(zone);await ready();await p.locator('[data-action=cup-coverage][data-id=full]').click();await ready();assert.equal(await p.locator('[data-print-zone]').inputValue(),zone+'Fill');
  await p.setViewportSize({width:320,height:568});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth&&document.querySelector('.wb-actions').getBoundingClientRect().bottom<=innerHeight+1));await p.setViewportSize({width:390,height:844});
  await p.locator('[data-action=cup-open]').click();await p.locator('#cup-status[data-state=ready]').waitFor({state:'attached'});await p.locator('.cup-settings-fold').evaluate(e=>e.open=true);await p.locator('#cup-material').selectOption('blue');await p.waitForTimeout(350);
  await p.locator('[data-action=finish]').click();await p.locator('#work-title').fill('QA '+type);await p.locator('[data-action=complete]').click();await p.locator('.result-screen').waitFor();assert.ok(await p.locator('.result-art .saved-vessel-preview').count());await p.screenshot({path:`${dir}/${mode}-${type}-saved.png`});
  await p.locator('[data-action=edit-work]').first().click();await p.locator('[data-action=editor-surface][data-id=object]').click();await ready();assert.equal(await p.evaluate(()=>Cup3D.diagnostics().vesselType),type);assert.equal(await p.locator('[data-print-zone]').inputValue(),zone+'Fill');
  await p.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');await p.reload();await ready();const saved=await p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId)||s.drafts.at(-1);});assert.equal(saved.canvas,type);assert.equal(saved.cupMaterial.color,'blue');
 }
 assert.deepEqual(errors,[]);console.log(`PASS ${mode}: v6, 12 thumbnails, all five categories at 320/390px, new objects printed, recoloured, saved, resumed and reloaded.`);
 }finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
