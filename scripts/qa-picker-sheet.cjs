/* Fixed mobile actions, retained edits, and full selected social controls. Isolated storage only. */
const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const picker=require('./qa-picker-controls.cjs');
(async()=>{
 const engine=process.env.QA_ENGINE==='webkit'?webkit:chromium;
 const browser=await engine.launch(engine===chromium?{channel:'msedge'}:{});
 try{
  const p=await browser.newPage({viewport:{width:390,height:740},isMobile:true,hasTouch:true});
  p.setDefaultTimeout(10000);const errors=[];p.on('pageerror',e=>errors.push(e.message));
  const tap=action=>p.locator('[data-action="'+action+'"]:visible').first().tap();
  const paint=()=>p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
  const shot=async name=>{if(process.env.QA_OUT){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await p.screenshot({path:path.join(process.env.QA_OUT,name+'.png'),animations:'disabled'});}};
  const visible=async selector=>{
   const m=await p.locator(selector).evaluate(el=>{const b=el.getBoundingClientRect();return {x:b.x,y:b.y,w:b.width,h:b.height,bottom:b.bottom,vh:innerHeight,vw:innerWidth};});
   assert.ok(m.x>=-.1&&m.y>=-.1&&m.x+m.w<=m.vw+1&&m.bottom<=m.vh+1&&m.h>=43.9,selector+': '+JSON.stringify(m));
  };
  const bounded=async()=>{
   for(const sel of ['dialog[open]','.dialog-body','.photo-picker']){
    const m=await p.locator(sel).evaluate(el=>[el.scrollHeight,el.clientHeight,el.scrollWidth,el.clientWidth]);
    assert.ok(m[0]<=m[1]+1&&m[2]<=m[3]+1,sel+': '+m);
   }
   await visible('.picker-footer .primary:visible');await visible('[data-picker-step=select]');
  };
  const entry=process.env.QA_ENTRY||'http://127.0.0.1:8879/index.html';
  await p.goto(entry+'#gallery/edition%3Atide');
  const like=p.locator('.detail-action-bar [data-action=gallery-like]'),collect=p.locator('.detail-action-bar [data-action=gallery-collect]');
  const count=async el=>Number((await el.innerText()).match(/\d+/)?.[0]);
  const before=[await count(like),await count(collect)];await like.tap();await collect.tap();
  await p.waitForFunction(()=>document.querySelector('.detail-action-bar [data-action=gallery-collect]')?.getAttribute('aria-pressed')==='true');
  const style=el=>el.evaluate(b=>{const s=getComputedStyle(b),i=getComputedStyle(b.querySelector('.like-mark'));return [s.backgroundColor,s.color,s.borderRadius,i.backgroundColor];});
  assert.deepEqual(await style(like),await style(collect));assert.equal((await style(collect))[3],'rgba(0, 0, 0, 0)');
  assert.deepEqual([await count(like),await count(collect)],before.map(n=>n+1));await shot('收藏完整选中');
  await p.reload();await collect.waitFor();assert.equal(await collect.getAttribute('aria-pressed'),'true');
  await collect.tap();await p.waitForFunction(()=>document.querySelector('.detail-action-bar [data-action=gallery-collect]')?.getAttribute('aria-pressed')==='false');assert.equal(await count(collect),before[1]);
  await p.goto(entry+'#discover');await tap('browse');await p.locator('dialog [data-id=enamel-cup-02]').tap();await tap('start');await tap('in-photo-crop');
  await p.locator('.picker-next:enabled').waitFor();
  for(const [width,height] of [[390,740],[375,667],[320,568]]){
   await p.setViewportSize({width,height});await paint();await bounded();
   const source=await p.locator('.crop-source').evaluate(c=>{const b=c.getBoundingClientRect();return [b.width,b.height,c.width/c.height];});
   assert.ok(source[1]>=120&&Math.abs(source[0]/source[1]-source[2])<.01,JSON.stringify(source));
   await shot('选范围-'+width);await picker.adjust(p);await paint();await bounded();
   for(const key of ['extract','tint','name']){
    await picker.setting(p,key);await paint();await bounded();await visible('[data-picker-setting='+key+']');
    const preview=await p.locator('.crop-result canvas').boundingBox();assert.ok(preview.height>=70,'Preview '+width+' '+key+' '+preview.height);
   }
   await picker.setting(p,'extract');await p.locator('[name=extract]').selectOption('line');await paint();await bounded();
   await visible('[name=ink-range]');assert.ok((await p.locator('.crop-result canvas').boundingBox()).height>=90,'Ink preview remains usable at '+width);await shot('提取线纹-'+width);
   await p.locator('[name=extract]').selectOption('photo');await paint();await picker.setting(p,'tint');await shot('改色-'+width);
   await picker.selection(p);
  }
  await p.setViewportSize({width:390,height:740});await picker.setting(p,'tint');await p.locator('[data-tint="#33466c"]').tap();
  await picker.name(p,'两步取样验证');await picker.selection(p);await picker.setting(p,'name');assert.equal(await p.locator('[name=crop-name]').inputValue(),'两步取样验证');
  await picker.setting(p,'tint');assert.equal(await p.locator('[data-tint="#33466c"]').getAttribute('aria-pressed'),'true');await shot('调效果');
  await p.locator('.crop-apply').tap();await p.locator('dialog').waitFor({state:'hidden'});
  const draft=()=>p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
  assert.ok((await draft()).photoSelection.some(m=>m.name==='两步取样验证'&&m.tint==='#33466c'));await p.reload();await p.locator('.study-sheet').waitFor();
  assert.ok((await draft()).photoLibrary.some(m=>m.name==='两步取样验证'&&m.tint==='#33466c'));
  assert.deepEqual(errors,[]);console.log(engine===webkit?'WebKit':'Chromium','bounded 320/375/390 sheets, retained crop/tint/name, save/reload, selected controls passed.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
