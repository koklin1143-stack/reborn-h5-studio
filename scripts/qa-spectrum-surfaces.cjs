const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');

async function main(){
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(/shader error|VALIDATE_STATUS false|INVALID_OPERATION/i.test(m.text()))errors.push(m.text());});
  const tap=(a,id)=>page.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
  const saved=()=>page.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
  const ready=()=>page.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
  const draft=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
  const diag=()=>page.evaluate(()=>Cup3D.diagnostics());
  const cdp=await page.context().newCDPSession(page);
  async function finger(sel){
   const r=await page.locator(sel).boundingBox();
   return (type,x=0,y=0)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:/End|Cancel/.test(type)?[]:[{id:1,x:r.x+r.width*x,y:r.y+r.height*y}]});
  }
  await page.goto(process.env.QA_URL||'http://127.0.0.1:8879/prototype/index.html');await tap('start');await tap('in-continue');await saved();
  await tap('wb-tool','effects');await tap('wb-ink-target','flower');const base=await draft();
  let move=await finger('.inline-spectrum .ink-spectrum');await move('touchStart',.12,.84);await page.waitForTimeout(90);
  const picture=()=>page.locator('#work-preview').screenshot();
  const first=await picture();await move('touchMove',.68,.65);await page.waitForTimeout(90);assert.notDeepEqual(await picture(),first);
  assert.deepEqual((await draft()).motifInks,base.motifInks);
  await move('touchEnd');await saved();assert.equal((await draft()).past.length,base.past.length+1);
  const ink=(await draft()).motifInks;assert.match(ink['magpie/flower'],/^#[0-9a-f]{6}$/);
  move=await finger('.inline-spectrum .ink-spectrum');await move('touchStart',.88,.77);await move('touchCancel');assert.deepEqual((await draft()).motifInks,ink);
  await tap('undo');await saved();assert.deepEqual((await draft()).motifInks,base.motifInks);await tap('redo');await saved();
  await tap('editor-surface','object');await ready();await tap('wb-vessel','basin');await ready();await saved();await tap('wb-glaze');
  assert.equal((await diag()).zone,'outer');
  const canvas=page.locator('#editor-cup-host canvas');
  move=await finger('.inline-spectrum .ink-spectrum');const starting=(await draft()).past.length;
  await move('touchStart',.34,.62);await page.waitForTimeout(120);const green=await canvas.screenshot();await move('touchMove',.54,.68);await page.waitForTimeout(120);
  const glaze=(await diag()).glaze;assert.ok(glaze!=='#f5f1e6');assert.notDeepEqual(await canvas.screenshot(),green);
  assert.equal((await draft()).cupMaterial.color,'white');await move('touchEnd');await saved();
  assert.equal((await draft()).cupMaterial.color,glaze);assert.equal((await draft()).past.length,starting+1);assert.deepEqual((await draft()).motifInks,ink);
  await page.screenshot({path:'previews/spectrum-basin-375.png'});await tap('wb-collapse');
  await tap('editor-gesture','place');const pos=(await draft()).vesselPlacement;
  move=await finger('#editor-cup-host canvas');await move('touchStart',.46,.54);await move('touchMove',.56,.54);await move('touchEnd');await saved();
  const placed=(await draft()).vesselPlacement;assert.notEqual(placed.x,pos.x);
  const choose=async value=>{await page.locator('[data-print-zone]').selectOption(value);await ready();await saved();assert.equal((await diag()).zone,value);};
  await choose('center');await choose('outer');assert.equal((await draft()).vesselPlacement.x,placed.x);
  const counts={};
  for(const [type,zones] of Object.entries({cup:['body','back','band'],plate:['center','rim','back'],bowl:['center','outer','rim'],basin:['center','outer','rim']})){
   await tap('wb-vessel',type);await ready();await saved();const mesh=(await diag()).modelId;
   for(const zone of zones){
    await choose(zone);assert.equal((await diag()).modelId,mesh);
    const result=await page.evaluate(async()=>{
     const s=await LocalStore.load(),d=s.drafts.find(d=>d.id===s.ui.activeDraftId);
     const render=async draw=>{
      const image=await createImageBitmap(await Cup3D.capture(draw));const c=document.createElement('canvas');c.width=c.height=240;
      const ctx=c.getContext('2d');ctx.drawImage(image,0,0,240,240);image.close();return {c,pixels:ctx.getImageData(0,0,240,240).data};
     };
     const blank=await render({...d,patternOpacity:0}),painted=await render(d);let n=0;
     for(let i=0;i<blank.pixels.length;i+=4){if([0,1,2].some(k=>Math.abs(blank.pixels[i+k]-painted.pixels[i+k])>10))n++;}
     return {count:n,image:painted.c.toDataURL().split(',')[1]};
    });
    counts[type+'/'+zone]=result.count;
    if(result.count<=5)throw Error('No visible pigment '+type+'/'+zone+' '+result.count+' '+errors.join(' '));
    if(type==='basin'||type==='plate')fs.writeFileSync('previews/print-'+type+'-'+zone+'.png',Buffer.from(result.image,'base64'));
   }
  }
  console.log('Printed pixels on 12 real surfaces',counts);
  await choose('outer');await page.reload();await ready();await saved();
  assert.equal((await diag()).zone,'outer');assert.equal((await diag()).glaze,glaze);assert.equal((await draft()).vesselPlacement.x,placed.x);
  await tap('wb-glaze');
  for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
   await page.setViewportSize({width,height});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
   for(const selector of ['[data-print-zone]','.glaze-shortcut','.inline-spectrum .ink-spectrum','.wb-actions [data-action=finish]']){
    const r=await page.locator(selector).boundingBox();assert.ok(r.x>=0&&r.x+r.width<=width+1&&r.y>=0&&r.y+r.height<=height+1,selector+JSON.stringify(r));
   }
  }
  await page.setViewportSize({width:375,height:812});
  await tap('cup-open');await page.waitForFunction(()=>document.querySelector('#cup-status')?.dataset.state==='ready');
  await page.locator('.cup-settings-fold summary').click();
  const full=page.locator('.full-glaze .inline-spectrum .ink-spectrum');await full.scrollIntoViewIfNeeded();
  move=await finger('.full-glaze .inline-spectrum .ink-spectrum');
  await move('touchStart',.09,.95);await page.waitForTimeout(70);
  assert.notEqual((await diag()).glaze,glaze);await move('touchCancel');assert.equal((await diag()).glaze,glaze);
  await tap('cup-static');await page.waitForFunction(()=>document.querySelector('#cup-status')?.dataset.state==='fallback');
  const staticArt=page.locator('.cup-static>svg');
  assert.match(await staticArt.getAttribute('aria-label'),/盆身外壁/);
  assert.ok((await staticArt.innerHTML()).includes(glaze));
  await page.locator('[data-print-zone]').selectOption('rim');assert.match(await staticArt.getAttribute('aria-label'),/盆口花边/);
  await page.locator('[data-print-zone]').selectOption('outer');await tap('cup-retry');
  await page.waitForFunction(()=>document.querySelector('#cup-status')?.dataset.state==='ready');
  await tap('back');await ready();
  await tap('finish');await page.locator('#work-title').fill('蓝釉盆外壁');await tap('complete');await page.waitForURL(/#result/);
  const work=await page.evaluate(async()=>(await LocalStore.load()).works.at(-1));assert.equal(work.appliedVessel.placement.zone,'outer');assert.equal(work.appliedVessel.material.color,glaze);assert.ok(work.previewAssetId);
  assert.deepEqual(errors,[]);console.log('PASS continuous ink/glaze before release, one undo, cancel, exterior dragging, per-zone memory, reload, four widths, fullscreen, static/retry, saved work.');
 }finally{await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1});
