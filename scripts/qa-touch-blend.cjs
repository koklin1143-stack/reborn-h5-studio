/* Touch gestures, nondestructive blending, and the real printed artwork, online and offline. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{for(const entry of ['http://127.0.0.1:8879/index.html',pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href]){
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});page.setDefaultTimeout(10000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const tap=(a,id)=>page.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')+':visible').first().tap();
  const field=k=>page.locator('[data-layer-field="'+k+'"]'),blend=k=>page.locator('[data-layer-blend="'+k+'"]').tap();
  const edge=k=>page.locator('[data-layer-edge="'+k+'"]').tap(),hist=k=>page.locator('[data-layout-history="'+k+'"]').tap();
  const draft=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
  const open=async()=>{await tap('in-photo-layout');await page.locator('.layout-apply:enabled').waitFor();};
  const apply=async()=>{await page.locator('.layout-apply').tap();await page.locator('dialog').waitFor({state:'hidden'});};
  const shot=async name=>{if(entry.startsWith('http')&&process.env.QA_OUT){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await page.screenshot({path:path.join(process.env.QA_OUT,name+'.png')});}};
  await page.goto(entry+'#discover');await tap('browse');await page.locator('dialog [data-id=enamel-plate-01]').tap();await tap('start');
  const flower='motif:westlake-rosette',garden='motif:westlake-garden',letter='motif:westlake-crane';
  await require('./qa-material-controls.cjs').toggleSample(page,garden);await open();
  const samples=await page.evaluate(()=>{
   const color=(r,g,b)=>{const c=document.createElement('canvas');c.width=c.height=80;const ctx=c.getContext('2d');ctx.fillStyle='rgb('+[r,g,b]+')';ctx.fillRect(0,0,80,80);return c;};
   const base=color(80,140,200),top=color(200,100,60),out=document.createElement('canvas');out.width=out.height=100;
   const ctx=out.getContext('2d',{willReadFrequently:true}),pix=(x,y)=>Array.from(ctx.getImageData(x,y,1,1).data);
   const data={};for(const mode of ['source-over','multiply','screen','overlay','soft-light','unknown']){
    PhotoLayout.draw(ctx,[{size:.6,x:.35,y:.5},{size:.6,x:.65,y:.5,blend:mode}],[base,top]);data[mode]=pix(50,50);
    data.outside=[pix(13,50),pix(85,50),pix(99,2)];
   }
   for(const e of ['left','right','soft','none']){
    PhotoLayout.draw(ctx,[{x:.5,y:.5,size:1,edge:e,opacity:60}],[top]);data[e]=[pix(2,50)[3],pix(50,50)[3],pix(97,50)[3]];
   }
   return data;
  });
  const B=[80,140,200],S=[200,100,60];
  const funcs={'source-over':(b,t)=>t,multiply:(b,t)=>b*t,screen:(b,t)=>1-(1-b)*(1-t),overlay:(b,t)=>b<=.5?2*b*t:1-2*(1-b)*(1-t),'soft-light':(b,t)=>t<=.5?b-(1-2*t)*b*(1-b):b+(2*t-1)*((b<=.25?((16*b-12)*b+4)*b:Math.sqrt(b))-b)};
  for(const [mode,fn] of Object.entries(funcs))B.forEach((b,i)=>assert.ok(Math.abs(samples[mode][i]-255*fn(b/255,S[i]/255))<3,mode+' '+samples[mode]));
  assert.deepEqual(samples.unknown,samples['source-over']);assert.deepEqual(samples.outside,[[...B,255],[...S,255],[0,0,0,0]]);
  assert.ok(samples.soft[0]<38&&samples.soft[1]===153&&samples.soft[2]<38);assert.ok(samples.left[0]===0&&samples.left[2]===153&&samples.right[0]===153&&samples.right[2]===0);
  assert.equal(await page.locator('.placement-more').getAttribute('open'),null);assert.ok(!await field('size').isVisible());
  const surface=page.locator('.layout-stage canvas'),handle=page.locator('.layer-handle');
  const session=await page.context().newCDPSession(page),touch=(type,touchPoints)=>session.send('Input.dispatchTouchEvent',{type,touchPoints});
  await page.locator('[data-layer="0"]').tap();await page.locator('.pair-materials').tap();assert.equal(await page.locator('.pair-targets').isVisible(),false);
  await hist('undo');await hist('redo');
  await blend('multiply');await field('opacity').fill('68');await page.locator('.blend-edges summary').tap();await edge('left');await page.locator('.blend-edges summary').tap();
  // Size and rotation work in the canvas, with the secondary controls still closed.
  const at=async()=>{const box=await handle.boundingBox();return {x:box.x+box.width/2,y:box.y+box.height/2,id:1};};
  const start=await at();const oldSize=await require('./qa-material-controls.cjs').currentSize(page);
  await touch('touchStart',[start]);await touch('touchMove',[{...start,x:start.x-18,y:start.y-18}]);await touch('touchEnd',[]);
  assert.ok(await require('./qa-material-controls.cjs').currentSize(page)<oldSize-4);await hist('undo');assert.equal(await require('./qa-material-controls.cjs').currentSize(page),oldSize);await hist('redo');
  const again=await at();await touch('touchStart',[again]);await touch('touchMove',[{...again,x:again.x-5,y:again.y-5}]);await touch('touchEnd',[]);
  await blend('screen');assert.equal(await page.locator('[data-layer-blend=screen]').getAttribute('aria-pressed'),'true');await blend('multiply');
  await apply();await page.waitForURL(/#editor$/);const two=await draft(),fg=two.provenance.parts.at(-1);
  assert.equal(fg.id,flower);assert.equal(fg.blend,'multiply');assert.equal(fg.edge,'left');assert.equal(fg.opacity,68);
  await page.reload();await open();assert.equal(await page.locator('[data-layer-blend=multiply]').getAttribute('aria-pressed'),'true');
  await blend('screen');await hist('undo');assert.equal(await page.locator('[data-layer-blend=multiply]').getAttribute('aria-pressed'),'true');
  await tap('manage-photo-picks');await require('./qa-material-controls.cjs').toggleSample(page,letter);await open();await page.locator('.pair-materials').tap();
  assert.equal(await page.locator('[data-stack-on]').count(),2);await page.locator('[data-stack-on="'+garden+'"]').tap();await blend('soft-light');await field('opacity').fill('75');
  await page.locator('.blend-edges summary').tap();await edge('soft');await page.locator('.blend-edges summary').tap();
  for(const [w,h] of [[320,568],[375,812],[430,932]]){
   await page.setViewportSize({width:w,height:h});assert.ok(await page.locator('.material-layout').evaluate(el=>el.scrollWidth<=el.clientWidth+1));
   const box=await page.locator('.layout-apply').boundingBox();assert.ok(box.height>=44&&box.y+box.height<=h+1);
   if(w===375)await shot('手机触屏融图');
  }
  await apply();await page.waitForURL(/#editor$/);const final=await draft(),parts=final.provenance.parts;
  assert.deepEqual(parts.map(p=>p.id),[garden,letter,flower]);assert.equal(parts[0].x,parts[1].x);assert.equal(parts[0].y,parts[1].y);assert.equal(parts[1].edge,'soft');assert.equal(parts[2].edge,'left');
  const images=await page.evaluate(async d=>{
   const shapes=d.provenance.parts,imgs=await Promise.all(shapes.map(async p=>createImageBitmap(await LocalStore.getAsset(p.assetId))));
   const flattened=await createImageBitmap(await LocalStore.getAsset(d.imageId));
   // Use a fresh drawing surface as the live preview and PNG exporter do. A
   // readback-optimised context can use a different interpolation backend.
   function pixels(paint){const c=document.createElement('canvas');c.width=c.height=768;const ctx=c.getContext('2d');paint(ctx);return ctx.getImageData(0,0,768,768).data;}
   const saved=pixels(ctx=>ctx.drawImage(flattened,0,0));
   const expected=pixels(ctx=>PhotoLayout.draw(ctx,shapes,imgs));
   const plain=pixels(ctx=>PhotoLayout.draw(ctx,shapes.map(p=>({...p,blend:'source-over',edge:'none'})),imgs));
   let error=0,changed=0;for(let i=0;i<saved.length;i+=4){
    if(Math.abs(saved[i+3]-expected[i+3])>3||saved[i+3]>60&&[0,1,2].some(k=>Math.abs(saved[i+k]-expected[i+k])>3))error++;
    if(Math.abs(expected[i]-plain[i])>5&&plain[i+3]>30)changed++;
   }
   flattened.close();imgs.forEach(im=>im.close());return {error,changed};
  },final);
  assert.ok(images.error<10&&images.changed>500,JSON.stringify(images));await tap('editor-surface','object');await page.locator('#editor-object-status[data-state=ready]').waitFor({state:'attached'});
  await tap('finish');await page.locator('#work-title').fill('叠印试样');await tap('complete');await page.waitForURL(/#result/);
  const work=await page.evaluate(async()=>(await LocalStore.load()).works.at(-1));assert.deepEqual(work.provenance.parts,parts);assert.ok(work.previewAssetId);assert.deepEqual(errors,[]);
  console.log(entry.startsWith('http')?'Online':'Standalone',images);await page.close();
 }}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
