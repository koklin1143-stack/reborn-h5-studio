const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
async function main(){
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(/shader error|VALIDATE_STATUS false|INVALID_OPERATION/i.test(m.text()))errors.push(m.text());});
  const tap=(a,id)=>page.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
  const ready=()=>page.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
  const saved=()=>page.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
  const draft=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(x=>x.id===s.ui.activeDraftId);});
  const choose=async zone=>{await page.locator('[data-print-zone]').selectOption(zone);await ready();await saved();};
  async function renderAngles(name){
   const results=await page.evaluate(async()=>{
    const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId),out=[];
    async function render(next){
     const bmp=await createImageBitmap(await Cup3D.capture(next)),c=document.createElement('canvas');c.width=c.height=320;
     const ctx=c.getContext('2d');ctx.drawImage(bmp,0,0,320,320);bmp.close();return {rgb:ctx.getImageData(0,0,320,320).data,c};
    }
    Cup3D.control('reset');
    for(let i=0;i<4;i++){
     const bare=await render({...d,patternOpacity:0}),art=await render(d);let changed=0;
     for(let j=0;j<bare.rgb.length;j+=4){if([0,1,2].some(c=>Math.abs(bare.rgb[j+c]-art.rgb[j+c])>10))changed++;}
     out.push({changed,image:art.c.toDataURL().split(',')[1]});for(let j=0;j<(i%2?5:4);j++)Cup3D.control('right');
    }
    Cup3D.control('reset');return out;
   });
   results.forEach(({image},i)=>fs.writeFileSync('previews/'+name+'-'+i+'.png',Buffer.from(image,'base64')));
   console.log(name,results.map(x=>x.changed));return results.map(x=>x.changed);
  }
  await page.goto(process.env.QA_URL||'http://127.0.0.1:8879/prototype/index.html');
  await tap('start');await tap('in-continue');await tap('editor-surface','object');await ready();
  await tap('wb-vessel','bowl');await choose('outer');
  const partial=await renderAngles('bowl-local-'+(process.env.BASELINE?'before':'after'));
  assert.ok(partial[0]>100&&partial[2]<30);
  if(process.env.BASELINE)return;
  await choose('outerFill');const all=await renderAngles('bowl-full');assert.ok(all.every(n=>n>500));
  await tap('editor-gesture','place');
  const density=page.locator('[data-fill-count]');
  await density.selectOption('1');await saved();assert.equal((await draft()).vesselPlacement.scale,160);
  await density.selectOption('12');await saved();const base=(await draft()).vesselPlacement;
  const touch=await page.context().newCDPSession(page);
  async function swipe(segments){
   const rect=await page.locator('#editor-cup-host canvas').boundingBox();
   for(let i=0;i<segments.length;i++){
    const pts=segments[i].map(([u,v],n)=>({id:n+1,x:rect.x+u*rect.width,y:rect.y+v*rect.height}));
    await touch.send('Input.dispatchTouchEvent',{type:i?'touchMove':'touchStart',touchPoints:pts});
   }
   await touch.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await saved();
  }
  await swipe([[[.43,.52]],[[.52,.55]]]);const shifted=(await draft()).vesselPlacement;
  assert.notEqual(shifted.x,base.x);
  await swipe([[[.4,.51],[.59,.51]],[[.35,.44],[.66,.56]]]);const pinched=(await draft()).vesselPlacement;
  assert.notEqual(pinched.scale,base.scale);assert.notEqual(pinched.rotation,base.rotation);
  await tap('undo');await saved();assert.deepEqual((await draft()).vesselPlacement,shifted);
  await tap('redo');await saved();assert.deepEqual((await draft()).vesselPlacement,pinched);
  await choose('outer');await choose('outerFill');
  assert.equal((await draft()).vesselPlacement.rotation,pinched.rotation);
  await page.reload();await ready();await saved();assert.equal((await draft()).vesselPlacement.x,pinched.x);
  // A real opaque photographic input covers the entire texture. Compare local
  // geometry probes against an unprinted capture at the identical camera pose.
  const mask=await page.evaluate(async()=>{
   const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId);
   const c=document.createElement('canvas');c.width=c.height=128;
   const g=c.getContext('2d');g.fillStyle='#173948';g.fillRect(0,0,128,128);
   const id=await LocalStore.saveImage(await new Promise(resolve=>c.toBlob(resolve)));
   const next={...d,imageId:id,patternLayout:'single',scale:160,patternInk:'original'};
   Cup3D.control('reset');const cam=Cup3D.diagnostics().camera;
   async function raster(d){
    const image=await createImageBitmap(await Cup3D.capture(d)),c=document.createElement('canvas');
    c.width=c.height=640;const ctx=c.getContext('2d');ctx.drawImage(image,0,0,640,640);image.close();
    return ctx.getImageData(0,0,640,640).data;
   }
   const blank=await raster({...next,patternOpacity:0}),ink=await raster(next);
   function delta(x,y,z){
    const cp=Math.cos(cam.pitch),sp=Math.sin(cam.pitch),cy=Math.cos(cam.yaw),sy=Math.sin(cam.yaw);
    const depth=(cam.distance-(x*sy+z*cy)*cp-y*sp)*Math.tan(19*Math.PI/180);
    const col=Math.round(320*(1+(x*cy-z*sy)/depth)),row=Math.round(320*(1-(y*cp-(x*sy+z*cy)*sp)/depth));
    const i=4*(row*640+col);return Math.max(...[0,1,2].map(k=>Math.abs(ink[i+k]-blank[i+k])));
   }
   const points={};
   for(const [label,radius,y] of [['low',.61,-.45],['middle',.955,.02],['high',1.135,.43],['foot',.43,-.631],['lip',1.16,.678]]){
    // The seam is on +Z. Sample on both sides and on its shared edge.
    points[label]=[-.025,0,.025].map(angle=>delta(radius*Math.sin(angle),y,radius*Math.cos(angle)));
   }
   await Cup3D.capture(d);return points;
  });
  console.log('Bowl ink mask across seam',mask);
  for(const label of ['low','middle','high'])assert.ok(mask[label].every(x=>x>35),label);
  for(const label of ['foot','lip'])assert.ok(mask[label].every(x=>x<=5),label);
  for(const [type,zones] of Object.entries({cup:['outerFill'],plate:['innerFill'],basin:['outerFill','innerFill'],bowl:['innerFill','outerFill']})){
   await tap('wb-vessel',type);await ready();await saved();
   for(const z of zones){
    await choose(z);
    const result=await page.evaluate(async()=>{
     const s=await LocalStore.load(),d=s.drafts.find(v=>v.id===s.ui.activeDraftId);
     const canvas=document.createElement('canvas');canvas.width=canvas.height=160;
     const ctx=canvas.getContext('2d');
     async function pixels(o){
      const bmp=await createImageBitmap(await Cup3D.capture(o));ctx.drawImage(bmp,0,0,160,160);bmp.close();
      return ctx.getImageData(0,0,160,160).data;
     }
     const blank=await pixels({...d,patternOpacity:0}),ink=await pixels(d);let n=0;
     for(let i=0;i<blank.length;i+=4)if(Math.abs(blank[i]-ink[i])>12)n++;
     return n;
    });assert.ok(result>80,type+'/'+z+': '+result);
   }
  }
  await tap('editor-gesture','place');
  for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
   await page.setViewportSize({width,height});
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
   for(const sel of ['[data-print-zone]','[data-fill-count]','[data-action=finish]']){
    const r=await page.locator(sel).filter({visible:true}).first().boundingBox();
    assert.ok(r&&r.x>=0&&r.x+r.width<=width+1&&r.y+r.height<=height+1,sel+JSON.stringify(r));
   }
   if(width===375)await page.screenshot({path:'previews/full-wrap-375.png'});
  }
  await tap('cup-open');await page.waitForFunction(()=>document.querySelector('#cup-status')?.dataset.state==='ready');
  await page.locator('.cup-settings-fold summary').click();await tap('cup-static');
  await page.waitForFunction(()=>document.querySelector('#cup-status')?.dataset.state==='fallback');
  assert.match(await page.locator('.cup-static>svg').getAttribute('aria-label'),/外壁满铺/);
  const still=await page.evaluate(async()=>{
   const s=await LocalStore.load(),d=s.drafts.find(v=>v.id===s.ui.activeDraftId);
   const blob=await WorkResult.staticPreview(d),b=await createImageBitmap(blob),c=document.createElement('canvas');
   c.width=c.height=360;const g=c.getContext('2d');g.drawImage(b,0,0,360,360);b.close();return c.toDataURL().split(',')[1];
  });fs.writeFileSync('previews/bowl-fill-static.png',Buffer.from(still,'base64'));
  await tap('cup-retry');await page.waitForFunction(()=>document.querySelector('#cup-status')?.dataset.state==='ready');
  await tap('back');await ready();await tap('editor-surface','flat');await tap('wb-layout','hexflower');await saved();
  await tap('editor-surface','object');await ready();await tap('editor-gesture','place');
  await density.selectOption('3');await saved();
  assert.ok((await renderAngles('bowl-flower-wrap')).every(n=>n>1000));
  await tap('finish');await page.locator('#work-title').fill('六瓣满花碗');await tap('complete');await page.waitForURL(/#result/);
  const work=await page.evaluate(async()=>(await LocalStore.load()).works.at(-1));
  assert.equal(work.appliedVessel.placement.zone,'outerFill');assert.equal(work.patternLayout,'hexflower');assert.ok(work.previewAssetId);
  console.log('PASS fill counts, drag/pinch, undo/redo, reopen, six fill surfaces, four widths, static rendering and saved digital work.');
  assert.deepEqual(errors,[]);
 }finally{await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1});
