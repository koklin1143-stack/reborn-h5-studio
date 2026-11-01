const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs'),{pathToFileURL}=require('node:url');
const picker=require('./qa-picker-controls.cjs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  for(const entry of ['http://127.0.0.1:8879/index.html',pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href]){
   const p=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
   p.setDefaultTimeout(9500);const errors=[];p.on('pageerror',e=>errors.push(e.message));
   const tap=(action,id)=>p.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')+':visible').first().click();
   const draft=()=>p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId)});
   const screenshot=async(name,locator)=>{if(process.env.QA_OUT&&entry.startsWith('http')){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await (locator||p).screenshot({path:path.join(process.env.QA_OUT,name+'.png'),animations:'disabled'});}};
   await p.goto(entry+'#discover');await tap('browse');await p.locator('dialog [data-id="enamel-cup-02"]').click();
   await p.waitForTimeout(570);
   const centred=await p.locator('.enamel-object[data-offset="0"] img').evaluate(async im=>{
    await im.decode();const c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;
    const ctx=c.getContext('2d');ctx.drawImage(im,0,0);const rgba=ctx.getImageData(0,0,c.width,c.height).data;
    let mass=0,moment=0;for(let i=0;i<rgba.length;i+=4){const lum=(.2126*rgba[i]+.7152*rgba[i+1]+.0722*rgba[i+2])/255,w=rgba[i+3]*(1-.2*lum);mass+=w;moment+=w*((i/4)%c.width+.5);}
    const b=im.getBoundingClientRect(),stage=im.closest('#object-stage').getBoundingClientRect(),style=getComputedStyle(im),width=b.width-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight);
    return {error:b.left+b.width/2+(moment/mass-c.width/2)*width/Math.max(c.width,c.height)-(stage.left+stage.width/2),shift:parseFloat(style.translate)};
   });assert.ok(Math.abs(centred.error)<2&&centred.shift>6,JSON.stringify(centred));
   await screenshot('蓝斑杯居中',p.locator('#object-stage'));
   await tap('browse');await p.locator('dialog [data-id="enamel-plate-01"]').click();await tap('start');await p.locator('.study-sheet').waitFor();
   const first='motif:westlake-rosette',second='motif:westlake-letter',scene='motif:westlake-garden';
   await require('./qa-material-controls.cjs').toggleSample(p,first);await p.locator('[data-action=in-continue]:disabled').waitFor();
   for(const id of [first,second,scene])await require('./qa-material-controls.cjs').toggleSample(p,id);
   await p.waitForFunction(()=>Number(document.querySelector('.sample-count').dataset.count)===3);
   await p.reload();await p.locator('.study-sheet').waitFor();assert.equal(Number(await p.locator('.sample-count').getAttribute('data-count')),3);
   await screenshot('纪念盘多选');
   await tap('in-photo-crop');await picker.selection(p);const board=p.locator('.crop-source'),box=await board.boundingBox();
   await p.mouse.move(box.x+box.width*.28,box.y+box.height*.30);await p.mouse.down();await p.mouse.move(box.x+box.width*.63,box.y+box.height*.60,{steps:6});await p.mouse.up();
   await picker.name(p,'我的盘心局部');await p.locator('.crop-apply').click();
   await p.waitForFunction(()=>Number(document.querySelector('.sample-count').dataset.count)===4);
   await tap('in-continue');await p.waitForURL(/#editor/);const d=await draft(),original=d.imageId;
   assert.equal(d.provenance.parts.length,4);assert.equal(d.provenance.parts[3].custom,true);
   assert.ok(d.provenance.parts[3].region[2]>260);assert.equal(d.sourceMotifId,first);
   await tap('in-photo-layout');await p.locator('.layout-apply:enabled').waitFor();
   await p.locator('[data-layer="1"]').click();for(let step=0;step<6;step++)await p.locator('.layer-handle').press('ArrowDown');const canvas=p.locator('.material-layout canvas');await canvas.focus();await canvas.press('ArrowLeft');
   await screenshot('组合排布');await p.locator('.layout-apply').click();await p.locator('dialog').waitFor({state:'hidden'});
   const edited=await draft();assert.equal(edited.provenance.parts[1].size,.31);assert.ok(edited.provenance.parts[1].x<d.provenance.parts[1].x);
   assert.deepEqual(edited.provenance.parts[0],d.provenance.parts[0]);assert.notEqual(original,edited.imageId);
   const saved=id=>p.waitForFunction(async expected=>{const s=await LocalStore.load();return s.drafts.find(x=>x.id===s.ui.activeDraftId)?.imageId===expected;},id);
   await tap('undo');await saved(original);await tap('redo');await saved(edited.imageId);await p.reload();
   const fresh=await draft();assert.equal(fresh.imageId,edited.imageId);await p.locator('#work-preview').waitFor();
   assert.ok(await p.evaluate(async()=>{const s=await LocalStore.load(),d=s.drafts.find(i=>i.id===s.ui.activeDraftId);
    const exported=await PatternTexture.export(d,{size:512,transparent:true});return exported.blob.size>4000&&Boolean(await LocalStore.getAsset(d.provenance.parts[3].assetId));}));
   await tap('finish');await tap('finish-preview');await p.locator('#editor-object-status[data-state=ready]').waitFor();
   await tap('finish');await p.locator('#work-title').fill('纪念盘四份取样');await tap('complete');await p.waitForURL(/#result/);
   const work=await p.evaluate(async()=>(await LocalStore.load()).works.at(-1));assert.equal(work.patternVersion.imageAssetId,edited.imageId);assert.deepEqual(work.provenance.parts,edited.provenance.parts);
   assert.deepEqual(work.patternVersion.sourceMotifIds,edited.provenance.parts.map(m=>m.id));
   await tap('regeneration');assert.match(await p.locator('dialog').innerText(),/我的盘心局部/);
   await p.locator('dialog [data-action="edit-work"]').click();await p.waitForURL(/#editor/);await tap('in-photo-layout');await p.locator('dialog [data-action="manage-photo-picks"]').click();
   await p.locator('.study-sheet').waitFor();
   for(const button of await draft().then(d=>d.photoSelection.map(m=>m.id)))await require('./qa-material-controls.cjs').toggleSample(p,button);
   await p.locator('[data-action=in-continue]:disabled').waitFor();
   await tap('in-photo-crop');await picker.selection(p);
   const b=await p.locator('.crop-source').boundingBox();
   await p.mouse.move(b.x+b.width*.24,b.y+b.height*.57);await p.mouse.down();await p.mouse.move(b.x+b.width*.36,b.y+b.height*.72,{steps:4});await p.mouse.up();
   await picker.adjust(p);await p.locator('[name=extract]').selectOption('ink');await picker.name(p,'自取蓝色点花');await p.locator('.crop-apply').click();
   await p.locator('.sample-count[data-count="1"]').waitFor();await tap('in-continue');await p.waitForURL(/#editor/);await p.reload();await p.locator('.editor-screen').waitFor();
   const solo=await draft();assert.equal(solo.provenance.parts.length,1);assert.match(solo.sourceMotifId,/^crop:westlake:/);
   assert.equal(solo.provenance.parts[0].ink,'#17317b');
   assert.ok(await p.evaluate(async id=>{const im=await createImageBitmap(await LocalStore.getAsset(id)),c=document.createElement('canvas');c.width=im.width;c.height=im.height;const ctx=c.getContext('2d');ctx.drawImage(im,0,0);const a=ctx.getImageData(0,0,c.width,c.height).data;return a.some((v,i)=>i%4===3&&v===0)&&a.some((v,i)=>i%4===3&&v===255);},solo.imageId));
   await tap('wb-tool','sample');await tap('manage-photo-picks');
   for(const id of [first,second,scene,'motif:westlake-crane'])await require('./qa-material-controls.cjs').toggleSample(p,id);
   await p.waitForFunction(()=>Number(document.querySelector('.sample-count').dataset.count)===5);
   await tap('in-photo-crop');await picker.adjust(p);await p.locator('.crop-apply:enabled').click();await p.locator('dialog').waitFor({state:'hidden'});assert.equal(Number(await p.locator('.sample-count').getAttribute('data-count')),6);await tap('in-photo-crop');assert.equal(await p.locator('.crop-apply:enabled').innerText(),'存入素材库');await p.locator('dialog [data-action=close]').click();
   for(const width of [320,430]){
    await p.setViewportSize({width,height:740});assert.ok(await p.locator('.study-sheet').evaluate(el=>el.scrollWidth<=el.clientWidth+1));
   }
   await tap('in-continue');await p.waitForURL(/#editor/);assert.equal((await draft()).provenance.parts.length,6);
   assert.deepEqual(errors,[]);await p.close();
  }
  console.log('Optical centring, presets and custom crop, per-part transforms, reload, undo/redo, export, 3D and saved archive passed online and offline.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});

