/* Compare the actual saved pixels with the transformed source in both distributions. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{for(const entry of ['http://127.0.0.1:8879/index.html',pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href]){
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});page.setDefaultTimeout(10000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const tap=(a,id)=>page.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')+':visible').first().click();
  const choose=i=>page.locator('[data-layer="'+i+'"]').click(),cmd=k=>page.locator('[data-layer-command="'+k+'"]').click();
  const field=k=>page.locator('[data-layer-field="'+k+'"]'),history=k=>page.locator('[data-layout-history="'+k+'"]').click();
  const draft=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
  const open=async()=>{await tap('in-photo-layout');await page.locator('.layout-apply:enabled').waitFor();await page.locator('.placement-more summary').click();};
  const shot=async name=>{if(process.env.QA_OUT&&entry.startsWith('http')){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await page.screenshot({path:path.join(process.env.QA_OUT,name+'.png')});}};
  await page.goto(entry+'#discover');await tap('browse');await page.locator('dialog [data-id=enamel-plate-01]').click();await tap('start');
  await require('./qa-material-controls.cjs').toggleSample(page,'motif:westlake-letter');await require('./qa-material-controls.cjs').toggleSample(page,'motif:westlake-garden');await open();
  const status=page.locator('.layer-status');
  await choose(0);await cmd('up');assert.match(await status.textContent(),/第 2 层/);
  await cmd('front');assert.match(await status.textContent(),/顶层/);await cmd('down');await cmd('back');assert.match(await status.textContent(),/底层/);
  await history('undo');assert.match(await status.textContent(),/第 2 层/);await history('redo');assert.match(await status.textContent(),/底层/);
  for(const name of ['点花','「立」']){await page.locator('.layout-parts button').filter({hasText:name}).click();await page.locator('.pair-materials').click();await page.locator('[data-stack-on="motif:westlake-garden"]').click();}
  // Even when all motifs overlap, dragging the lower one after selecting its thumbnail keeps the upper two in place.
  await page.locator('.layout-parts button').filter({hasText:'盘心庭院人物'}).click();const canvas=page.locator('.layout-stage canvas');let b=await canvas.boundingBox();
  await page.mouse.move(b.x+b.width*.5,b.y+b.height*.75);await page.mouse.down();await page.mouse.move(b.x+b.width*.37,b.y+b.height*.68,{steps:4});await page.mouse.up();
  assert.match(await status.textContent(),/底层/);
  await page.locator('.layout-apply').click();await page.waitForURL(/#editor$/);
  let d=await draft();assert.ok(d.provenance.parts[0].x<.42);assert.equal(d.provenance.parts[2].x,.5);
  const original=d.imageId;await open();
  // A two-finger rotation/zoom is a single in-sheet undo step.
  await choose(2);const session=await page.context().newCDPSession(page);b=await canvas.boundingBox();
  const finger=(id,x,y)=>({id,x:b.x+b.width*x,y:b.y+b.height*y});
  const touch=(type,touchPoints)=>session.send('Input.dispatchTouchEvent',{type,touchPoints});
  await touch('touchStart',[finger(1,.40,.75),finger(2,.60,.75)]);await touch('touchMove',[finger(1,.37,.69),finger(2,.63,.81)]);await touch('touchEnd',[]);
  assert.ok(Number((await page.locator('.layer-handle').getAttribute('aria-label')).match(/旋转 (-?\d+)/)[1])>=20);assert.ok(await require('./qa-material-controls.cjs').currentSize(page)>50);
  await history('undo');assert.equal(await require('./qa-material-controls.cjs').currentSize(page),43);
  await history('redo');await page.getByRole('button',{name:'关闭',exact:true}).click();assert.equal((await draft()).imageId,original);
  // Load a pre-touch-only draft with a 90° mirrored layer. Opening and applying it
  // must preserve the original transform, even though those old controls are gone.
  await page.evaluate(async()=>{const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId),parts=d.provenance.parts;
   const p=parts[1],im=await createImageBitmap(await LocalStore.getAsset(p.assetId)),scale=.4/Math.max(im.width,im.height);
   Object.assign(p,{rotation:90,flipX:true,size:.4,x:im.height*scale/2,y:1-im.width*scale/2});im.close();
   await LocalStore.commit(s);
  });
  await page.reload();await open();
  assert.equal(await page.locator('[data-layout-tab],[data-layer-field=size],[data-layer-field=rotation]').count(),0);
  for(const i of [0,2]){await choose(i);await field('opacity').fill('0');}
  await choose(1);await field('opacity').fill('47');
  for(const [width,height] of [[320,568],[430,932],[375,812]]){
   await page.setViewportSize({width,height});assert.ok(await page.locator('.material-layout').evaluate(el=>el.scrollWidth<=el.clientWidth+1));
  }
  await shot('保留旧版镜像排布');await page.locator('.layout-apply').click();await page.locator('dialog').waitFor({state:'hidden'});
  d=await draft();const transformed=d.provenance.parts[1];assert.equal(transformed.rotation,90);assert.equal(transformed.flipX,true);assert.equal(transformed.opacity,47);assert.equal(transformed.size,.4);
  const pixels=await page.evaluate(async d=>{
   const p=d.provenance.parts[1],read=async id=>createImageBitmap(await LocalStore.getAsset(id)),im=await read(p.assetId),out=await read(d.imageId),n=out.width;
   const canvas=(w,h)=>Object.assign(document.createElement('canvas'),{width:w,height:h});
   const s=canvas(im.width,im.height),c=canvas(n,n);const a=s.getContext('2d'),b=c.getContext('2d');a.drawImage(im,0,0);b.drawImage(out,0,0);
   const src=a.getImageData(0,0,s.width,s.height).data,pix=b.getImageData(0,0,n,n).data;
   const scale=n*.4/Math.max(s.width,s.height),w=s.width*scale,h=s.height*scale;
   let count=0,hits=0,max=0,off=0;
   // After a horizontal mirror and a clockwise quarter turn, x follows -sourceY and y follows -sourceX.
   for(let y=2;y<s.height-2;y+=2)for(let x=2;x<s.width-2;x+=2){
    const i=(y*s.width+x)*4+3;if(src[i]<250||src[i+4]<250||src[i-4]<250||src[i+s.width*4]<250||src[i-s.width*4]<250)continue;
    const xx=Math.floor(h-(y+.5)*scale),yy=Math.floor(n-(x+.5)*scale);count++;if(Math.abs(pix[4*(yy*n+xx)+3]-120)<4)hits++;
   }
   for(let i=3;i<pix.length;i+=4){max=Math.max(max,pix[i]);if(pix[i]&&((i>>2)%n>h+2||Math.floor((i>>2)/n)<n-w-2))off++;}
   im.close();out.close();return {count,hits,max,off};
  },d);
  assert.ok(pixels.count>20&&pixels.hits>pixels.count*.96&&pixels.max>=119&&pixels.max<=121&&pixels.off===0,JSON.stringify(pixels));
  await page.reload();await open();await choose(1);assert.equal(await field('opacity').inputValue(),'47');
  await page.locator('.layer-handle').press('Shift+ArrowRight');await tap('manage-photo-picks');await page.locator('.study-sheet').waitFor();await tap('in-continue');await page.waitForURL(/#editor$/);
  const finalParts=(await draft()).provenance.parts;assert.equal(finalParts[1].rotation,95);await tap('editor-surface','object');await page.locator('#editor-object-status[data-state=ready]').waitFor({state:'attached'});
  await tap('finish');await page.locator('#work-title').fill('层叠试印');await tap('complete');await page.waitForURL(/#result/);
  const work=await page.evaluate(async()=>(await LocalStore.load()).works.at(-1));assert.deepEqual(work.provenance.parts,finalParts);
  assert.equal(work.provenance.parts[1].opacity,47);assert.equal(work.provenance.parts[1].rotation,95);assert.ok(work.previewAssetId);assert.deepEqual(errors,[]);
  console.log(entry.startsWith('http')?'Online':'Standalone',pixels);await page.close();
 }}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
