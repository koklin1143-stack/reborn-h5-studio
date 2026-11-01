/* Uses the real saved project sample as a replay. No additional provider requests. */
const fs=require('node:fs'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const version=require('../prototype/pattern-grammar.js').version;
const folder='previews/bailian-live',raw=fs.readFileSync(folder+'/cherry.png');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const errors=[],calls=[];
  page.on('pageerror',e=>errors.push(e.message));
  let response='quota',release;
  const internalNote='下版从颈部打开一片露底。';
  await page.route('**/api/pattern',async route=>{
    const body=route.request().postDataJSON();calls.push(body);
    assert.equal(body.consent,true);assert.equal(body.reference,'motif:enamel-magpie');
    if(response==='quota')return route.fulfill({status:429,contentType:'application/json',body:JSON.stringify({error:'百炼限流或额度不足，请稍后重试。'})});
    if(response==='wait')await new Promise(resolve=>release=resolve);
    await route.fulfill({json:{ruleVersion:version,technique:body.technique==='auto'?'softSpray':body.technique,stage:body.stage,identity:body.method==='sketch'?{subject:'鱼',family:'aquatic',pose:'游动',facing:'向右',cue:'未指定',count:1}:null,planner:'fixture',design:{...(body.method==='sketch'?{refinement:internalNote}:{}),subject:'测试的果实',traits:['双果','相连'],redraw:'归并',unit:'果梗',arrangement:'偏心',void:'右上留底'},png:raw.toString('base64')}}).catch(()=>{});
  });
  const tap=(action,id)=>page.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
  const getDraft=()=>page.evaluate(async()=>{const state=await LocalStore.load();return state.drafts.find(d=>d.id===state.ui.activeDraftId)});
  await page.goto('http://127.0.0.1:8879/index.html#discover');
  await tap('choose-start');await tap('start-method','image');
  await page.locator('#inspiration-file').setInputFiles('previews/print-transfer/test-input.png');
  await page.locator('dialog[open] #input-image-consent').check();await tap('in-upload-confirm');
  await page.locator('.input-footer .primary[data-action=in-ai]').waitFor();
  await tap('in-ai');assert.equal(calls.length,0);await tap('close');assert.equal(calls.length,0);
  await tap('in-ai');await tap('in-ai-confirm');
  await page.locator('[data-ai-state=failed]').waitFor();assert.match(await page.locator('.input-feedback').innerText(),/额度/);
  response='ok';await tap('in-ai');await tap('in-ai-confirm');
  await page.locator('.transfer-preview[data-ai-state=success]').waitFor();
  assert.equal(await page.getByText('看这份纹样怎样转化').count(),0);
  if(process.env.QA_OUT)await page.screenshot({path:require('node:path').join(process.env.QA_OUT,'pattern-result-375.png')});
  assert.equal(calls[1].technique,'auto');assert.equal(calls[1].method,'image');assert.ok(calls[1].image.startsWith('data:image/'));
  let d=await getDraft();assert.equal(d.aiVariants.length,1);assert.equal(d.patternConversion.engine,'qwen-image-2.1-turbo');
  assert.equal(d.patternConversion.removedPaper,true);const printed=d.selectedVariantId;
  const sample=await page.evaluate(async id=>{
   const b=await LocalStore.getAsset(id);const image=await createImageBitmap(b);const c=document.createElement('canvas');c.width=image.width;c.height=image.height;
   const ctx=c.getContext('2d');ctx.drawImage(image,0,0);const corner=ctx.getImageData(0,0,1,1).data[3];
   return {png:c.toDataURL().split(',')[1],corner};
  },printed);assert.equal(sample.corner,0);fs.writeFileSync(folder+'/cherry-print.png',Buffer.from(sample.png,'base64'));
  for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
   await page.setViewportSize({width,height});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   const button=page.locator('[data-action=in-continue]');await button.scrollIntoViewIfNeeded();const box=await button.boundingBox();
   assert.ok(box&&box.x>=0&&box.x+box.width<=width+1);
  }
  await page.setViewportSize({width:375,height:812});await page.screenshot({path:folder+'/preview-375.png'});
  await page.reload();await page.locator('.transfer-preview').waitFor();assert.equal(calls.length,2);
  await tap('in-revise');assert.equal(await page.locator('.print-style').count(),0);
  await page.locator('.pattern-history summary').click();await tap('in-use-variant',printed);
  assert.equal((await getDraft()).patternConversion.assetId,printed);assert.equal(calls.length,2);
  // Reproduce the reported handoff: a reused draft with an off-centre 48% sample and dark monochrome ink.
  const stale={sampleWidth:48,sampleHeight:48,sampleX:36,sampleY:-15,scale:74,patternInk:'custom',inkColor:'#ffffff',brightness:30,rotation:12};
  async function seedEdits(){await page.evaluate(async patch=>{
   const s=await LocalStore.load(),draft=s.drafts.find(row=>row.id===s.ui.activeDraftId);
   Studio.edit(draft,{...patch,cupMaterial:{color:'#48c8bb',finish:'gloss'}});await LocalStore.commit(s);
  },stale);await page.reload();}
  await seedEdits();
  await tap('in-continue');await page.waitForURL(/#editor/);
  d=await getDraft();assert.equal(d.imageId,printed);assert.equal(d.provenance.aiGenerated,true);
  assert.equal(d.sampleWidth,100);assert.equal(d.sampleX,0);assert.equal(d.patternInk,'original');assert.equal(d.brightness,100);assert.equal(d.cupMaterial.color,'#48c8bb');
  await seedEdits();await page.locator('#work-preview').waitFor();
  await tap('versions');await tap('wb-confirmed-print');await page.locator('dialog[open]').waitFor({state:'hidden'});
  const neutral=()=>page.locator('#work-preview svg[aria-label="可编辑二维纹样"] defs g svg').first().getAttribute('viewBox');
  assert.equal(await neutral(),'-85 -85 170 170');
  assert.equal((await getDraft()).sampleWidth,100);
  await tap('undo');assert.notEqual(await neutral(),'-85 -85 170 170');
  await page.waitForFunction(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId).brightness===30});
  await tap('redo');assert.equal(await neutral(),'-85 -85 170 170');
  await page.waitForFunction(async()=>{const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId);return d.brightness===100&&d.sampleWidth===100});
  await page.reload();await page.locator('#work-preview').waitFor();assert.equal(await neutral(),'-85 -85 170 170');
  const tex=await page.evaluate(async()=>{const s=await LocalStore.load(),d=s.drafts.find(d=>d.id===s.ui.activeDraftId);return (await PatternTexture.export(d)).blob.size});
  assert.ok(tex>1024);await page.screenshot({path:folder+'/editor-375.png'});
  await tap('finish');await tap('complete');await page.waitForURL(/#result/);
  const work=await page.evaluate(async()=>(await LocalStore.load()).works.at(-1));assert.equal(work.imageId,printed);assert.equal(work.visibility,'private');assert.ok(work.sourceId.startsWith('ai:'));
  await page.goto('http://127.0.0.1:8879/index.html#discover');await tap('choose-start');await tap('start-method','text');
  await page.locator('#inspiration-prompt').fill('一枝玉兰边花');
  response='wait';await tap('in-ai');assert.equal(await page.locator('dialog [type=radio]').count(),0);await tap('in-ai-confirm');await page.waitForFunction(()=>document.querySelector('[data-ai-state=generating]')!==null);
  for(let i=0;i<100&&!release;i++)await new Promise(r=>setTimeout(r,15));assert.ok(release);
  await tap('in-ai-cancel');release();await page.locator('[data-ai-state=failed]').waitFor();
  assert.equal(calls.at(-1).image,null);assert.equal(calls.at(-1).prompt,'一枝玉兰边花');assert.equal(calls.at(-1).layout,'border');
  assert.equal((await getDraft()).aiVariants.length,0);
  await page.locator('#inspiration-prompt').fill('团圆');await tap('in-ai');assert.equal(await page.locator('[data-action=in-ai-confirm]').isDisabled(),true);await page.locator('#pattern-reading').selectOption({index:1});assert.equal(await page.locator('[data-action=in-ai-confirm]').isEnabled(),true);await tap('close');
  await tap('in-options');await tap('in-tab','sketch');const canvas=await page.locator('#sketch-pad').boundingBox();
  await page.mouse.move(canvas.x+45,canvas.y+35);await page.mouse.down();await page.mouse.move(canvas.x+85,canvas.y+80,{steps:5});await page.mouse.up();
  await page.locator('#sketch-subject').fill('一条鱼');response='ok';await tap('in-ai');await tap('in-ai-confirm');await page.locator('.transfer-preview').waitFor();
  assert.equal(calls.at(-1).subject,'一条鱼');assert.equal(calls.at(-1).method,'sketch');assert.equal(calls.at(-1).prompt,'');assert.equal(calls.at(-1).ruleVersion,version);assert.ok(!calls.at(-1).prompt.includes('玉兰'));assert.ok(calls.at(-1).image.startsWith('data:image/png;base64,'));
  const rendered=await getDraft(),last=calls.at(-1);
  assert.equal(last.stage,'pattern');assert.equal(last.technique,'auto');assert.equal(last.gestureImage,undefined);
  const sketchPng=Buffer.from(last.image.split(',')[1],'base64');
  assert.equal(sketchPng.readUInt32BE(16),768);assert.equal(sketchPng.readUInt32BE(20),768);
  assert.equal(rendered.patternConversion.recipe.technique,'softSpray');assert.ok(!rendered.sketchForm);
  const count=calls.length;await page.reload();await page.locator('[data-ai-state=success]').waitFor();assert.equal(calls.length,count);
  assert.equal(await page.locator('body').innerText().then(text=>text.includes(internalNote)),false);
  assert.equal(calls.length,count);
  await tap('in-ai');assert.equal(calls.length,count);response='quota';await tap('in-ai-confirm');
  await page.locator('[data-ai-state=failed]').waitFor();
  assert.equal(calls.at(-1).refinement,internalNote);
  assert.equal((await getDraft()).selectedVariantId,rendered.selectedVariantId);
  await page.locator('[data-action=in-continue]').filter({visible:true}).waitFor();
  response='ok';await tap('in-ai');
  await Promise.all([page.waitForResponse(r=>r.url().endsWith('/api/pattern')&&r.status()===200),tap('in-ai-confirm')]);
  await page.waitForFunction(n=>document.querySelectorAll('.pattern-history [data-action="in-use-variant"]').length===n,rendered.aiVariants.length+1);
  assert.equal(calls.length,count+2);assert.notEqual((await getDraft()).selectedVariantId,rendered.selectedVariantId);
  // A saved v9 form remains usable even though new personal inputs bypass that intermediate step.
  await page.evaluate(async()=>{const state=await LocalStore.load(),draft=state.drafts.find(d=>d.id===state.ui.activeDraftId),old=draft.patternConversion;
   draft.sketchForm={assetId:old.assetId,key:old.key,sourceAssetId:old.sourceAssetId,recipe:{...old.recipe,version:'enamel-ornament-9',technique:'cobalt'},identity:{subject:'鱼',family:'aquatic',pose:'游动',facing:'向右',cue:'未指定',count:1}};draft.patternConversion=null;await LocalStore.commit(state);});
  await page.reload();await page.locator('[data-ai-state=shape]').waitFor();assert.equal(await page.locator('[name=form-technique]').count(),0);
  await tap('in-decorate');await page.locator('[data-ai-state=success]').waitFor();assert.equal(calls.at(-1).stage,'decorate');assert.equal(calls.at(-1).approved,true);
  // This raster contains one surviving mark; the earlier left-hand mark was fully erased.
  response='quota';
  await page.evaluate(async()=>{
   const canvas=document.createElement('canvas');canvas.width=640;canvas.height=400;
   const ctx=canvas.getContext('2d');ctx.fillRect(315,180,12,60);
   const sketch=await new Promise(ok=>canvas.toBlob(ok));
   const recipe=PatternGrammar.makePlan({method:'sketch',reference:'motif:enamel-magpie',direction:'classic'});
   await Services.request('ai',{consent:true,method:'sketch',stage:'shape',recipe,sourceMotifId:recipe.reference,direction:'classic',sketch,
    strokes:[{tool:'pen',points:[[275,180],[275,240]]},{tool:'eraser',points:[[275,175],[275,245]]},{tool:'pen',points:[[320,180],[320,240]]}]},
    {signal:new AbortController().signal});
  });
  const guide=calls.at(-1).gestureImage;assert.ok(guide);
  assert.ok(await page.evaluate(async src=>{
   const img=new Image();img.src=src;await img.decode();
   const canvas=document.createElement('canvas');canvas.width=img.width;canvas.height=img.height;
   const ctx=canvas.getContext('2d');ctx.drawImage(img,0,0);
   const px=ctx.getImageData(0,0,img.width,img.height).data;
   let ink=0;
   for(let i=0;i<px.length;i+=4){if(px[i]>200)continue;ink++;if(Math.abs((i/4)%img.width-img.width/2)>img.width*.12)return false;}
   return ink>0;
  },guide),'erased line must not reappear in the gesture reference');
  const offline=await browser.newPage({viewport:{width:390,height:844}});let enabled=false,paid=0;
  try{
   await offline.route('**/api/pattern/status',r=>r.fulfill({json:{available:enabled,model:'qwen-image-2.1-turbo',ruleVersion:version}}));
   await offline.route('**/api/pattern',r=>{paid++;return r.fulfill({status:503})});
   await offline.goto('http://127.0.0.1:8879/index.html#discover');
   const act=a=>offline.locator('[data-action="'+a+'"]').filter({visible:true}).first().click();
   await act('choose-start');await offline.locator('[data-action=start-method][data-id=text]').click();
   await offline.locator('#inspiration-prompt').fill('牡丹团花');
   await offline.locator('.input-feedback[data-ai-state=unconfigured]').waitFor();
   assert.equal(await offline.locator('.input-footer .primary').getAttribute('data-action'),'in-reconnect');
   await act('in-convert');await offline.locator('.transfer-preview').waitFor();assert.equal(paid,0);
   await act('in-revise');enabled=true;await act('in-reconnect');await offline.locator('.input-footer .primary[data-action=in-ai]').waitFor();
   assert.equal(await offline.locator('#inspiration-prompt').inputValue(),'牡丹团花');
   assert.equal(paid,0);
  }finally{await offline.close();}
  assert.deepEqual(errors,[]);console.log('Real PNG replay passed: consent, limit, retry, alpha trim, four widths, refresh, editor/export, private work and cancel.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
