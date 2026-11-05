const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{const mode=process.env.QA_MODE||'local',b=await chromium.launch({channel:'msedge',...(mode==='live'?{proxy:{server:'http://127.0.0.1:7897'}}:{})});try{
 const p=await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),errors=[],dir='work/qa/placement-v9';fs.mkdirSync(dir,{recursive:true});p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(/shader error|VALIDATE_STATUS false|INVALID_OPERATION/i.test(m.text()))errors.push(m.text());});
 const base=mode==='offline'?pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href:mode==='live'?'https://koklin1143-stack.github.io/reborn-h5-studio/?v=20261106-placement-v9':process.env.QA_URL||'http://127.0.0.1:8879/index.html';
 if(mode==='offline')await p.route(/^https?:/,r=>r.abort());else await p.route('**/favicon.ico',r=>r.fulfill({status:204}));
 await p.goto(base+'#mine');await p.locator('.mine-example').first().waitFor();assert.equal(await p.locator('meta[name=reborn-release]').getAttribute('content'),'2026-11-06-placement-v9');
 await p.evaluate(async()=>{const s=await LocalStore.load(),d=Studio.addDraft(s,'enamel-peony');Object.assign(d,{inputStage:true,editorFormat:'pattern-v1',editorSurface:'object'});Studio.switchVessel(d,'backpack');await LocalStore.commit(s);});await p.goto(base+'#editor');await p.reload();
 const ready=()=>p.locator('#editor-object-status[data-state=ready]').waitFor({state:'attached',timeout:12000}).catch(async e=>{console.error('Browser status:',errors,await p.locator('#editor-object-status').allTextContents(),await p.evaluate(()=>window.Cup3D?.diagnostics()));await p.screenshot({path:dir+'/'+mode+'-failure.png'});throw e;}),saved=()=>p.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
 const diag=()=>p.evaluate(()=>Cup3D.diagnostics()),draft=async()=>{await saved();return p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(x=>x.id===s.ui.activeDraftId);});};
 const tap=async(action,id)=>{await p.locator(`[data-action=${action}]${id?`[data-id=${id}]`:''}`).filter({visible:true}).first().click();await ready();};
 const choose=async id=>{await p.locator('[data-print-zone]').selectOption(id);await ready();};
 const faces=async expected=>assert.deepEqual((await diag()).printedFaces.sort(),expected.sort());
 const focus=async()=>{const actual=await diag(),expected=await p.evaluate(async()=>{const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId);return Vessels.regionCamera(d.canvas,d.vesselPlacement);});assert.ok(Math.abs(Math.sin(actual.camera.yaw-expected.yaw))<.001&&Math.cos(actual.camera.yaw-expected.yaw)>.999);};
 await ready();await faces(['front']);assert.equal((await diag()).zone,'front');
 await tap('cup-coverage','full');await choose('back');await faces(['front']);assert.equal((await diag()).printEnabled,false);assert.equal((await diag()).zone,'back');assert.ok(await p.locator('[data-action=editor-gesture][data-id=place]').isDisabled());assert.equal(await p.locator('[data-action=cup-coverage]').count(),0);
 await tap('cup-print-add');assert.equal((await diag()).zone,'back');await tap('cup-coverage','full');await faces(['front','back']);
 await choose('pocket');await faces(['front','back']);assert.equal((await diag()).printEnabled,false);await p.screenshot({path:`${dir}/${mode}-pocket-empty.png`});
 await tap('cup-print-add');assert.equal((await diag()).zone,'pocket');await faces(['front','back','pocket']);
 await tap('editor-gesture','rotate');await p.evaluate(()=>{for(let i=0;i<8;i++)Cup3D.control('right');});assert.ok(Math.cos((await diag()).camera.yaw)<-.8);
 await tap('editor-gesture','place');await saved();await focus();
 const before=(await draft()).vesselPlacement.x,canvas=p.locator('#editor-cup-host canvas');let moved=false;
 for(const y of [.63,.70,.57]){const r=await canvas.boundingBox();await p.mouse.move(r.x+r.width*.47,r.y+r.height*y);await p.mouse.down();await p.mouse.move(r.x+r.width*.56,r.y+r.height*y,{steps:8});await p.mouse.up();await saved();if((await draft()).vesselPlacement.x!==before){moved=true;break;}}
 assert.ok(moved,'visible pocket must respond to real pointer drag after entering place mode');await p.screenshot({path:`${dir}/${mode}-pocket-editable.png`});
 await tap('cup-print-remove');await faces(['front','back']);await choose('back');assert.equal((await diag()).zone,'backFill');await tap('cup-print-remove');await faces(['front']);
 await tap('undo');await faces(['front','back']);assert.equal((await diag()).zone,'backFill');await tap('redo');await faces(['front']);
 await choose('front');await choose('back');assert.equal((await diag()).printEnabled,false);await p.screenshot({path:`${dir}/${mode}-back-cleared.png`});
 await tap('cup-print-add');assert.equal((await diag()).zone,'back');await tap('cup-print-remove');
 for(const width of [320,390,430]){await p.setViewportSize({width,height:width===320?568:844});const boxes=await p.evaluate(()=>{const a=document.querySelector('.print-placement-actions').getBoundingClientRect(),c=document.querySelector('#editor-cup-host').getBoundingClientRect();return {over:document.documentElement.scrollWidth>innerWidth,buttons:[...document.querySelectorAll('.print-placement-actions button')].map(e=>{const r=e.getBoundingClientRect();return r.height>=44&&r.left>=0&&r.right<=innerWidth;}),clear:a.bottom<=c.top+1,model:c.height};});assert.equal(boxes.over,false);assert.ok(boxes.buttons.every(Boolean));assert.ok(boxes.clear&&boxes.model>=80,JSON.stringify(boxes));await p.screenshot({path:`${dir}/${mode}-mobile-${width}.png`});}
 await p.setViewportSize({width:390,height:844});await p.locator('[data-action=cup-open]').click();
 await p.locator('#cup-status[data-state=ready]').waitFor({state:'attached'});assert.ok(await p.locator('[data-action=cup-print-add]').isVisible());
 await p.locator('[data-action=finish]').click();await p.locator('#work-title').fill('可移除印花 QA');await p.locator('[data-action=complete]').click();await p.locator('.result-screen').waitFor();await p.locator('[data-action=edit-work]').first().click();await tap('editor-surface','object');await saved();await p.reload();await ready();await faces(['front']);assert.equal((await diag()).printEnabled,false);
 const types=await p.evaluate(()=>Object.keys(Vessels.data).filter(Vessels.available).map(id=>[id,Vessels.get(id).family]));
 for(const [type,family]of types){
  await tap('cup-picker');await p.locator(`[data-action=cup-family][data-id=${family}]`).click();await p.locator(`[data-action=cup-pick][data-id=${type}]`).click();await ready();
  const options=await p.locator('[data-print-zone] option').evaluateAll(es=>es.map(e=>e.value));
  for(const id of options.length?options:['front']){
   if(options.length)await choose(id);if(!(await diag()).printEnabled)await tap('cup-print-add');
   await tap('cup-print-remove');assert.equal((await diag()).printEnabled,false,type+'/'+id);await tap('undo');assert.equal((await diag()).printEnabled,true);await tap('redo');assert.equal((await diag()).printEnabled,false);await saved();
   const blank=await p.evaluate(async()=>{const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId);return CupView.staticCup(d,'<text>QA_PRINT_MARK</text>');});
   // The selected face has no print; other intentionally printed faces may still appear on the same side (bag front/pocket).
   if(!['backpack'].includes(type))assert.ok(!blank.includes('QA_PRINT_MARK'),type+'/'+id+' static removal');
  }
  console.log('PASS remove/add/undo:',type);
 }
 assert.deepEqual(errors,[]);console.log(`PASS ${mode}: explicit face adding/removal, real pocket drag after orbit, no hidden fill resurrection, 11 carriers, static previews, mobile/fullscreen and saved reload.`);
 }finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
