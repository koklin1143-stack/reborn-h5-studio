const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const cases={cup:['enamel',{body:'杯身正面',back:'杯身背面',whole:'杯身整圈',band:'杯口环带'}],plate:['enamel',{center:'盘面',rim:'盘沿',back:'盘背'}],bowl:['enamel',{center:'碗内',outer:'碗身外壁',rim:'碗口边缘'}],basin:['enamel',{center:'盆内',outer:'盆身外壁',rim:'盆口边缘'}],cushion:['textile',{front:'正面',back:'背面'}],pillow:['textile',{front:'正面',back:'背面'}],duvet:['textile',{front:'正面',back:'背面',border:'正面边缘'}],backpack:['bags',{front:'主包正面',pocket:'前袋',back:'背面'}],tote:['bags',{front:'正面',back:'背面'}],notebook:['daily',{front:'封面',back:'封底'}],phonecase:['daily',{front:'壳背'}]};
(async()=>{const mode=process.env.QA_MODE||'local',b=await chromium.launch({channel:'msedge',...(mode==='live'?{proxy:{server:'http://127.0.0.1:7897'}}:{})});try{
 const p=await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),errors=[],dir='work/qa/placement-v9';fs.mkdirSync(dir,{recursive:true});p.on('pageerror',e=>errors.push(e.message));
 p.on('console',m=>{if(/shader error|VALIDATE_STATUS false|INVALID_OPERATION/i.test(m.text()))errors.push(m.text());});
 const base=mode==='offline'?pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href:mode==='live'?'https://koklin1143-stack.github.io/reborn-h5-studio/?v=20261106-placement-v9':process.env.QA_URL||'http://127.0.0.1:8879/index.html';
 if(mode==='offline')await p.route(/^https?:/,r=>r.abort());else await p.route('**/favicon.ico',r=>r.fulfill({status:204}));
 await p.goto(base+'#mine');assert.equal(await p.locator('meta[name=reborn-release]').getAttribute('content'),'2026-11-06-placement-v9');await p.locator('.mine-example').first().waitFor();
 await p.evaluate(async()=>{const s=await LocalStore.load(),d=Studio.addDraft(s,'enamel-peony');Object.assign(d,{inputStage:true,editorFormat:'pattern-v1',editorSurface:'object'});await LocalStore.commit(s);});await p.goto(base+'#editor');await p.reload();
 const ready=()=>p.locator('#editor-object-status[data-state=ready]').waitFor({state:'attached'}),saved=()=>p.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
 const zone=async expected=>{await ready();await p.waitForFunction(expected=>Cup3D.diagnostics()?.zone===expected,expected);};
 const closePanel=async()=>{const close=p.locator('[data-action=wb-collapse]');if(await close.isVisible())await close.click();};
 const selectObject=async(type,family)=>{await closePanel();await p.locator('[data-action=cup-picker]').click();await p.locator(`[data-action=cup-family][data-id=${family}]`).click();await p.locator(`[data-action=cup-pick][data-id=${type}]`).click();await ready();assert.equal(await p.evaluate(()=>Cup3D.diagnostics().vesselType),type);};
 const assertPosition=async id=>{const select=p.locator('[data-print-zone]');if(await select.count())assert.equal(await select.inputValue(),id);else assert.equal(await p.locator('[data-print-position]').getAttribute('data-print-position'),id);};
 await ready();
 for(const [type,[family,positions]]of Object.entries(cases)){
  await selectObject(type,family);const keys=Object.keys(positions);
  if(keys.length===1){assert.equal(await p.locator('[data-print-zone]').count(),0);assert.equal(await p.locator('[data-print-position]').innerText(),'壳背');}
  else assert.deepEqual(await p.locator('[data-print-zone] option').evaluateAll(es=>Object.fromEntries(es.map(e=>[e.value,e.textContent]))),positions);
  for(const id of keys){
   if(keys.length>1)await p.locator('[data-print-zone]').selectOption(id);await ready();await assertPosition(id);
   if(!(await p.evaluate(()=>Cup3D.diagnostics().printEnabled))){await p.locator('[data-action=cup-print-add]').click();await ready();}
   const full=p.locator('[data-action=cup-coverage][data-id=full]'),canFill=await full.count();
   if(canFill){
    const expected=['cup','bowl','basin'].includes(type)&&id!=='center'?'outerFill':['plate','bowl','basin'].includes(type)?'innerFill':id+'Fill';
    await full.click();await zone(expected);await assertPosition(id);assert.equal(await full.getAttribute('aria-pressed'),'true');
    if((type==='cushion'&&id==='front')||(type==='basin'&&id==='center'))await p.screenshot({path:`${dir}/${mode}-${type}-${id}-full.png`});
    await p.locator('[data-action=cup-coverage][data-id=local]').click();await zone(id);await closePanel();await assertPosition(id);
   }else{
    await p.locator('[data-action=cup-coverage][data-id=custom]').click();await zone(type==='cup'&&id==='whole'?'outerFill':id);await closePanel();await assertPosition(id);
   }
  }
  console.log('PASS positions:',type);
 }
 await selectObject('cushion','textile');await p.locator('[data-print-zone]').selectOption('front');await p.locator('[data-action=cup-coverage][data-id=full]').click();await zone('frontFill');
 await p.locator('[data-print-zone]').selectOption('back');await zone('back');await assertPosition('back');
 await p.locator('[data-action=undo]').click();await zone('frontFill');await assertPosition('front');await p.locator('[data-action=redo]').click();await zone('back');
 await p.locator('[data-action=cup-coverage][data-id=full]').click();await zone('backFill');
 await p.locator('[data-action=cup-coverage][data-id=custom]').click();await zone('backFill');
 await p.locator('[data-cover-field=coverWidth]').evaluate(e=>{e.value='62';e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}));});await saved();await closePanel();await assertPosition('back');
 assert.deepEqual(await p.locator('[data-print-zone] option').allTextContents(),['正面','背面']);
 for(const width of [320,390,430]){await p.setViewportSize({width,height:width===320?568:844});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.ok(await p.locator('[data-print-zone]').isVisible());await p.screenshot({path:`${dir}/${mode}-cushion-${width}.png`});}
 await p.setViewportSize({width:390,height:844});await p.locator('[data-action=cup-open]').click();await p.locator('#cup-status[data-state=ready]').waitFor({state:'attached'});await assertPosition('back');assert.deepEqual(await p.locator('[data-print-zone] option').allTextContents(),['正面','背面']);
 await p.locator('[data-action=finish]').click();await p.locator('#work-title').fill('双面抱枕 QA');await p.locator('[data-action=complete]').click();await p.locator('.result-screen').waitFor();assert.ok(await p.locator('.result-art .saved-vessel-preview').count());
 await p.locator('[data-action=edit-work]').first().click();await p.locator('[data-action=editor-surface][data-id=object]').click();await zone('backFill');await saved();await p.reload();await zone('backFill');await assertPosition('back');
 const stored=await p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});assert.equal(stored.vesselPlacement.coverWidth,62);assert.deepEqual(errors,[]);
 console.log(`PASS ${mode}: 11 carriers, physical positions only, correct local/full scope, stable labels, face mode, undo/redo, mobile/fullscreen and save/reload.`);
 }finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
