const assert=require('node:assert/strict'),path=require('node:path'),{pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{const b=await chromium.launch({channel:'msedge'});try{
 const page=await b.newPage({viewport:{width:390,height:844}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/models/backpack.glb',async r=>{await new Promise(ok=>setTimeout(ok,450));await r.continue();});
 await page.goto((process.env.QA_URL||'http://127.0.0.1:8883/index.html')+'#mine');await page.locator('.mine-example').first().waitFor();
 const result=await page.evaluate(async()=>{
  const s=await LocalStore.load(),d=Studio.addDraft(s,'enamel-peony');Studio.switchVessel(d,'backpack');
  const host=document.createElement('div');host.style.cssText='position:fixed;inset:0;width:390px;height:480px';document.body.append(host);const viewer=Cup3D.createViewer();
  let ready;const done=new Promise((resolve,reject)=>{ready=(state,message)=>{if(state==='ready')resolve();if(['fallback','error'].includes(state))reject(Error(message));};});
  viewer.mount(host,d,()=>{},ready,{force:true});viewer.update({...d,cupMaterial:{...d.cupMaterial,color:'#738b78'}});await done;
  const diag=viewer.diagnostics();viewer.dispose();
  let staleReady=0;const pending=viewer.mount(host,{...d,canvas:'tote'},()=>{},state=>{if(state==='ready')staleReady++;},{force:true});viewer.dispose();await pending;
  const canvases=host.querySelectorAll('canvas').length;host.remove();return {diag,staleReady,canvases};
 });assert.equal(result.diag.glaze,'#738b78');assert.equal(result.diag.meshName,'authored-backpack-v1');assert.equal(result.staleReady,0);assert.equal(result.canvases,0);
 const offline=await b.newPage({viewport:{width:390,height:844}}),remote=[];offline.on('pageerror',e=>errors.push(e.message));await offline.route(/^https?:/,r=>{remote.push(r.request().url());return r.abort();});
 await offline.goto(pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href+'#mine');await offline.locator('.mine-example').first().waitFor();
 const count=await offline.evaluate(async()=>{const s=await LocalStore.load(),d=Studio.addDraft(s,'enamel-peony');d.inputStage=true;d.editorFormat='pattern-v1';d.editorSurface='object';Studio.switchVessel(d,'tote');await LocalStore.commit(s);return Object.keys(CarrierImageData).length;});assert.equal(count,9);
 await offline.evaluate(()=>location.hash='editor');await offline.reload();await offline.locator('#editor-object-status[data-state=ready]').waitFor();assert.equal(await offline.evaluate(()=>Cup3D.diagnostics().meshName),'authored-tote-v1');
 await offline.locator('[data-action=cup-picker]').click();assert.equal(await offline.locator('.carrier-choice-art img').evaluateAll(es=>es.every(e=>e.complete&&e.naturalWidth>0)),true);
 await offline.screenshot({path:'work/qa/carriers-v3/offline-picker.png'});assert.equal(remote.filter(u=>/\.glb|carriers\/.*\.webp/.test(u)).length,0);assert.deepEqual(errors,[]);
 console.log('PASS pending-model colour updates, disposal during model loading, offline embedded model and all thumbnails.');
 }finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
