/* Real touch-size layouts, isolated browser storage and both production entry points. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const picker=require('./qa-picker-controls.cjs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  for(const entry of ['http://127.0.0.1:8879/index.html',pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href]){
   const p=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});p.setDefaultTimeout(12000);
   const errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',e=>{if(/shader error|VALIDATE_STATUS false|INVALID_OPERATION/i.test(e.text()))errors.push(e.text());});
   const act=(action,id)=>p.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')+':visible').first();
   const tap=(action,id)=>act(action,id).click();
   const draft=()=>p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
   const saved=(key,val)=>p.waitForFunction(async([key,val])=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId).vesselPlacement[key]===val;},[key,val]);
   const shot=async name=>{if(entry.startsWith('http')&&process.env.QA_OUT){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await p.screenshot({path:path.join(process.env.QA_OUT,name+'.png'),animations:'disabled'});}};
   await p.goto(entry+'#discover');await tap('browse');await p.locator('dialog [data-id="enamel-bowl-01"]').click();await tap('start');
   const red='motif:blue-enamel-redglaze';await require('./qa-material-controls.cjs').toggleSample(p,red);await act('in-photo-layout').waitFor();
   const round=await p.locator('.study-print img').evaluate(async im=>{await im.decode();const c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;const ctx=c.getContext('2d');ctx.drawImage(im,0,0);return [c.width,c.height,ctx.getImageData(0,0,1,1).data[3],ctx.getImageData(Math.floor(c.width/2),Math.floor(c.height/2),1,1).data[3]];});
   assert.equal(round[0],round[1]);assert.deepEqual(round.slice(2),[0,255]);assert.ok(await p.locator('.study-original circle').count());
   await tap('in-photo-crop');await picker.selection(p);
   assert.equal(await p.locator('[data-shape="circle"]').getAttribute('aria-pressed'),'true');
   const board=p.locator('.crop-source');await board.scrollIntoViewIfNeeded();const rect=await board.boundingBox();
   await p.mouse.move(rect.x+rect.width*.32,rect.y+rect.height*.49);await p.mouse.down();await p.mouse.move(rect.x+rect.width*.63,rect.y+rect.height*.54,{steps:8});await p.mouse.up();
   await picker.name(p,'圆形试样');await p.locator('.crop-apply').click();await p.locator('dialog').waitFor({state:'hidden'});
   await tap('in-photo-layout');await p.locator('.layout-apply:enabled').waitFor();await p.locator('[data-layer="0"]').click();
   await p.locator('.placement-more summary').click();await p.locator('.layer-front').click();await p.locator('.layer-handle').press('ArrowDown');await p.locator('.layer-handle').press('ArrowDown');await p.locator('.layout-apply').click();await p.waitForURL(/#editor/);
   let d=await draft();assert.equal(d.provenance.parts.length,3);assert.equal(d.provenance.parts.at(-1).id,'motif:blue-enamel-scroll');assert.equal(d.provenance.parts.at(-1).size,.39);
   const custom=d.provenance.parts.find(x=>x.custom);assert.equal(custom.recipe.shape,'circle');assert.equal(custom.region[2],custom.region[3]);
   await tap('editor-surface','object');await tap('wb-vessel','basin');await p.locator('#editor-object-status[data-state=ready]').waitFor();
   await tap('in-photo-layout');await p.locator('.layout-apply:enabled').waitFor();await p.locator('dialog [data-action=close]').click();
   await tap('cup-coverage','full');await saved('zone','outerFill');await shot('整圈外壁');
   async function pigment(staticMode=false){
    return p.evaluate(async useStatic=>{const s=await LocalStore.load(),d=s.drafts.find(d=>d.id===s.ui.activeDraftId);
     const capture=useStatic?WorkResult.staticPreview:Cup3D.capture;
     async function image(config){const bmp=await createImageBitmap(await capture(config));const c=document.createElement('canvas');c.width=c.height=320;const ctx=c.getContext('2d');ctx.drawImage(bmp,0,0,320,320);bmp.close();return ctx.getImageData(0,0,320,320).data;}
     async function count(){const bare=await image({...d,patternOpacity:0}),ink=await image(d);let pixels=0;for(let i=0;i<ink.length;i+=4){if(Math.max(...[0,1,2].map(j=>Math.abs(ink[i+j]-bare[i+j])))>14)pixels++;}return pixels;}
     Cup3D.control('reset');const front=await count();if(useStatic)return front;
     for(let i=0;i<9;i++)Cup3D.control('right');const back=await count();Cup3D.control('reset');return [front,back];
    },staticMode);
   }
   const all=await pigment(),staticAll=await pigment(true);assert.ok(all[0]>700&&all[1]>700,JSON.stringify(all));
   await tap('cup-coverage','custom');
   const width=p.locator('[data-cover-field="coverWidth"]'),height=p.locator('[data-cover-field="coverHeight"]'),count=p.locator('[data-cover-field="count"]');
   assert.equal(await width.inputValue(),'100');await width.fill('28');await height.fill('49');await count.fill('8');
   await saved('coverHeight',49);const current=await draft();assert.equal(current.vesselPlacement.coverWidth,28);assert.equal(await count.inputValue(),'8');
   const part=await pigment(),staticPart=await pigment(true);
   assert.ok(part[0]>60&&part[0]<all[0]*.78&&part[1]<30,JSON.stringify({all,part}));
   assert.ok(staticPart>40&&staticPart<staticAll*.77,JSON.stringify({staticAll,staticPart}));
   await shot('调覆盖范围');
   for(const [w,h] of [[320,640],[375,667],[430,932]]){
    await p.setViewportSize({width:w,height:h});
    const sizes=await p.evaluate(()=>{const host=document.querySelector('#editor-cup-host').getBoundingClientRect(),actions=document.querySelector('.wb-actions').getBoundingClientRect(),bar=document.querySelector('.coverage-bar');return {host:host.height,overflow:bar.scrollWidth-bar.clientWidth,bottom:actions.bottom};});
    assert.ok(sizes.host>100&&sizes.overflow<2&&sizes.bottom<h+2,JSON.stringify({w,h,sizes}));
    if(h<=740){await p.locator('[data-cover-tab=coverHeight]').click();assert.ok(await height.isVisible());await p.locator('[data-cover-tab=count]').click();assert.ok(await count.isVisible());await p.locator('[data-cover-tab=coverWidth]').click();}
   }
   await tap('wb-vessel','bowl');await tap('wb-vessel','basin');await saved('coverWidth',28);
   await p.reload();await p.locator('#editor-object-status[data-state=ready]').waitFor();assert.equal((await draft()).vesselPlacement.coverHeight,49);
   await tap('cup-coverage','full');await saved('coverWidth',100);await tap('undo');await saved('coverWidth',28);await tap('redo');await saved('coverWidth',100);
   await tap('cup-open');await p.waitForURL(/#cup/);await tap('cup-coverage','custom');await p.locator('[data-cover-field=coverHeight]').fill('64');await saved('coverHeight',64);
   await tap('cup-flat');await p.waitForURL(/#editor/);await tap('finish');await p.locator('#work-title').fill('环绕印花盆');await tap('complete');await p.waitForURL(/#result/);
   const work=await p.evaluate(async()=>(await LocalStore.load()).works.at(-1));assert.equal(work.appliedVessel.placement.coverHeight,64);assert.equal(work.provenance.parts.length,3);
   console.log(entry.startsWith('http')?'Online':'Offline',{all,part,staticAll,staticPart});assert.deepEqual(errors,[]);await p.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});

