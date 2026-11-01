const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const E=require('../prototype/explore.js');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));page.setDefaultTimeout(6500);
  const tap=a=>page.locator('[data-action="'+a+'"]:visible').first().click();
  const shot=async name=>{if(process.env.QA_OUT){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await page.screenshot({path:path.join(process.env.QA_OUT,name+'.png'),animations:'disabled'});}};
  const http='http://127.0.0.1:8879/';
  for(const entry of [http+'prototype/index.html',http+'index.html',pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href]){
   await page.goto(entry+'#discover');await page.locator('.enamel-object[data-offset="0"]').waitFor();
   await tap('browse');await page.locator('dialog [data-id="enamel-cup-01"]').click();
   const cdp=await page.context().newCDPSession(page);
   const others=E.items.filter(o=>!E.exhibits.includes(o));
   for(const [i,o] of [...E.exhibits,...others].entries()){
    const name=o.name,onStage=E.exhibits.includes(o);
    if(onStage){
     await page.waitForFunction(n=>document.querySelector('.object-title')?.textContent===n,name);
     assert.equal(await page.locator('.enamel-object img:not(.isolated-photo)').count(),0);
     const image=page.locator('.enamel-object[data-offset="0"] img.object-photo');
     const alpha=await image.evaluate(async img=>{await img.decode();const c=document.createElement('canvas');c.width=c.height=64;const ctx=c.getContext('2d');ctx.drawImage(img,0,0,64,64);const data=ctx.getImageData(0,0,64,64).data;return {width:img.naturalWidth,empty:[0,63,4032,4095].every(i=>data[4*i+3]===0),centre:data[(32*64+32)*4+3]};});
     assert.ok(alpha.width>=640&&alpha.width<=1600&&alpha.empty&&alpha.centre>220);
     const expected=await page.evaluate(key=>EnamelArt.photoUrl(key+'-cut'),o.photo.key);
     assert.equal(await image.getAttribute('src'),expected);
     if(entry===http+'index.html'){await page.locator('.enamel-heading h1').tap();await page.waitForTimeout(560);await shot(name);}
     if(o.photo.key==='anniversary'&&entry===http+'index.html'&&process.env.QA_OUT)
      await page.locator('#object-stage').screenshot({path:path.join(process.env.QA_OUT,'盖盆-首页实测.png')});
     await page.locator('.object-title').click();
    }else{
     await tap('browse');await page.locator('dialog [data-id="'+o.id+'"]').click();
    }
    await page.locator('.dossier-title').waitFor();
    assert.equal(await page.locator('.dossier-title h1').innerText(),name);
    assert.equal(await page.locator('#main').evaluate(main=>main.scrollTop),0);
    assert.ok(await page.locator('.dossier-history').innerText());assert.ok(await page.locator('.dossier-value').innerText());
    assert.equal(await page.locator('.dossier-estimate').isVisible(),false);
    assert.equal(await page.locator('.photo-detail img').evaluate(async im=>{await im.decode();return im.naturalWidth}),960);
    if((name.includes('放射纹')||i===0)&&entry===http+'index.html')await shot(name+'档案');
    await tap('object-evidence');assert.equal(await page.locator('#dossier-image svg').isVisible(),true);
    assert.equal(await page.locator('.photo-caption').innerText(),'原照局部');
    if(name.includes('盖盆')&&entry===http+'index.html')await shot('盖盆纪年款');
    await tap('object-evidence');assert.equal(await page.locator('#dossier-image img').isVisible(),true);
    const sources=page.locator('.dossier-sources');assert.equal(await sources.getAttribute('open'),null);
    await sources.locator('summary').click();assert.match(await sources.innerText(),/CC BY-SA|CC0/);
    assert.equal(await sources.locator('a[href*="commons.wikimedia.org"]').count(),1);
    assert.match(await page.locator('.dossier-estimate').innerText(),/本件估值/);
    if(name==='蓝白斑纹搪瓷杯')assert.match(await page.locator('.market-comparison').innerText(),/七件/);
    await sources.locator('summary').click();
    await tap('back');
    if(!onStage){assert.equal(await page.locator('.enamel-object[data-id="'+o.id+'"]').count(),0);continue;}
    if(entry===http+'index.html'){
     const rect=await page.locator('#object-stage').boundingBox(),y=rect.y+rect.height/2;
     await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:280,y}]});
     for(const x of [230,180,120,80])await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y}]});
     await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    }else await page.locator('#object-stage').press('ArrowRight');
   }
  }
  await page.goto(http+'index.html#discover');await tap('browse');await page.locator('dialog [data-id="enamel-basin-01"]').click();
  await tap('start');await page.locator('.inspiration-screen').waitFor();assert.match(await page.locator('.input-source').innerText(),/平海铭文/);
  assert.equal(await page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId).sourceObjectId}),'object:photo-pinghai');
  await tap('back');await page.waitForURL(/#detail/);assert.match(await page.locator('.dossier-title').innerText(),/平海/);
  await tap('back');await page.waitForURL(/#discover/);
  await page.reload();await page.locator('.object-title').waitFor();
  assert.equal(await page.locator('.enamel-object[data-id="enamel-basin-01"]').count(),0);
  await tap('detail');assert.equal(await page.locator('.dossier-title h1').innerText(),E.exhibits[0].name);await tap('back');
  for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
   await page.setViewportSize({width,height});await tap('browse');await page.locator('dialog [data-id="enamel-plate-01"]').click();
   assert.ok(await page.evaluate(()=>{const t=document.querySelector('.object-title').getBoundingClientRect(),c=document.querySelector('[data-action="start"]').getBoundingClientRect();return t.x>=0&&t.right<=innerWidth+1&&c.height<55&&c.bottom<=innerHeight&&document.documentElement.scrollWidth<=innerWidth+1;}));
   await tap('detail');await page.locator('.dossier-story').waitFor();
   assert.ok(await page.evaluate(()=>{const w=document.querySelector('#main');return w.scrollWidth<=w.clientWidth+1&&document.querySelector('.detail-zoom').offsetHeight>=44;}));
   await tap('back');
  }
  assert.deepEqual(errors,[]);console.log('All catalogue photos and credits: prototype, built HTML and standalone file. New draft source and 320/375/390/430px passed.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
