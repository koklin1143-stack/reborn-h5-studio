async function test(){
 const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),assert=require('node:assert/strict');
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(/shader error|VALIDATE_STATUS false|INVALID_OPERATION/i.test(m.text()))errors.push(m.text());});
  const tap=(a,id)=>page.locator(`[data-action="${a}"]${id?`[data-id="${id}"]`:''}`).filter({visible:true}).first().click();
  const ready=()=>page.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
  await page.goto(process.env.QA_URL||'http://127.0.0.1:8879/prototype/index.html');
  await tap('start');await tap('in-continue');await tap('editor-surface','object');await ready();
  for(const type of ['cup','plate','bowl','basin']){
   await tap('wb-vessel',type);await ready();
   const diagnostics=await page.evaluate(()=>Cup3D.diagnostics());
   assert.equal(diagnostics.vesselType,type);
   if(!process.env.BEFORE)assert.ok(diagnostics.inkOnBody);
   const canvas=page.locator('#editor-cup-host canvas');
   await page.waitForTimeout(200);
   await canvas.screenshot({path:`previews/glaze-${process.env.BEFORE?'before':'after'}-${type}.png`});
  }
  if(!process.env.BEFORE){
   await tap('wb-vessel','plate');await ready();
   const canvas=page.locator('#editor-cup-host canvas'),before=await canvas.screenshot();
   const revision=()=>page.locator('#editor-cup-host').evaluate(el=>Number(el.dataset.textureRevision));
   const updated=last=>page.waitForFunction(n=>Number(document.querySelector('#editor-cup-host')?.dataset.textureRevision)>n,last);
   const last=await revision();
   await tap('wb-layout','hexflower');await updated(last);
   assert.notDeepEqual(await canvas.screenshot(),before);
   const draft=()=>page.evaluate(async()=>{const state=await LocalStore.load();return state.drafts.find(d=>d.id===state.ui.activeDraftId);});
   const saved=()=>page.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
   const touch=await page.context().newCDPSession(page);
   async function drag(target,from,to,onMoved){
    const rect=await target.boundingBox();
    const point=([x,y])=>[{id:1,x:rect.x+rect.width*x,y:rect.y+rect.height*y}];
    await touch.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:point(from)});
    await touch.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:point(to)});
    if(onMoved)await onMoved();
    await touch.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    await saved();
   }
   await tap('wb-tool','sampling');await ready();await saved();
   const initial=await draft(),sampleRevision=await revision();
   await drag(page.locator('#wb-style-sample'),[.4,.4],[.64,.58],()=>updated(sampleRevision));
   assert.notEqual((await draft()).sampleX,initial.sampleX);
   assert.equal((await draft()).patternLayout,initial.patternLayout);
   await tap('wb-collapse');await tap('editor-gesture','place');await ready();await saved();
   const pos=(await draft()).vesselPlacement;
   await drag(canvas,[.46,.51],[.53,.54]);
   const placed=(await draft()).vesselPlacement;
   assert.notEqual(placed.x,pos.x);
   await page.reload();await ready();assert.deepEqual((await draft()).vesselPlacement,placed);
  }
  assert.deepEqual(errors,[]);console.log('PASS: four glazed vessel renders, pattern change, live source sampling, surface drag and restored placement.');
 }finally{await browser.close();}
}
test().catch(error=>{console.error(error);process.exitCode=1;});
