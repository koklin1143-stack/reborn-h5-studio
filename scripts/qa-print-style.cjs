/* Isolated browser session, no cloud generation. Exercise the shipped single-file UI. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs'),assert=require('node:assert/strict'),G=require('../prototype/pattern-grammar.js');
const {openStyle,pickReference}=require('./qa-print-style-helper.cjs');
(async()=>{
 const out='previews/print-style';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({channel:'msedge'});
 try{
  for(const [width,height,method] of [[375,812,'sketch'],[390,844,'image'],[320,640,'text'],[430,932,'motif']]){
   const ctx=await browser.newContext({viewport:{width,height},isMobile:true,hasTouch:true});
   try{
    const p=await ctx.newPage(),errors=[],sent=[];
    p.on('pageerror',e=>errors.push(e.message));
    await p.route('**/api/pattern/status',r=>r.fulfill({json:{available:true,model:'qwen-image-2.1-turbo',ruleVersion:G.version}}));
    await p.route('**/api/pattern',r=>{sent.push(r.request().postDataJSON());return r.fulfill({status:429,json:{error:'测试拦截，未发送'}})});
    const tap=(action,id)=>p.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
    const current=()=>p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId)});
    await p.goto('http://127.0.0.1:8879/index.html#discover');
    await tap('choose-start');await tap('start-method',method);
    const fold=p.locator('.print-style'),summary=fold.locator('summary');
    await p.locator('.inspiration-screen').waitFor();
    assert.equal(await fold.count(),method==='motif'?1:0);
    if(method==='text')await p.locator('#inspiration-prompt').fill('一条游鱼');
    if(method==='image'){
     await p.locator('#inspiration-file').setInputFiles('previews/print-transfer/test-input.png');
     await p.locator('#input-image-consent').check();await tap('in-upload-confirm');
     await p.locator('.start-art .input-preview').waitFor();
    }
    if(method==='sketch'){
     const pad=p.locator('#sketch-pad'),b=await pad.boundingBox();
     const lines=[[[.28,.52],[.38,.36],[.52,.33],[.62,.35],[.75,.49],[.66,.59],[.52,.66],[.4,.64],[.28,.52]],[[.28,.52],[.17,.36],[.19,.66],[.28,.52]],[[.44,.35],[.47,.24],[.56,.33]],[[.64,.45],[.65,.46]]];
     for(const line of lines){for(const [i,[x,y]] of line.entries()){await p.mouse.move(b.x+b.width*x,b.y+b.height*y);if(i===0)await p.mouse.down();}await p.mouse.up();}
    }
    if(method!=='motif'){
     assert.equal(await p.locator('.creation-options,[name=enamel-technique]').count(),0);
     await tap('in-ai');const dialog=p.locator('dialog[open]');assert.equal(await dialog.locator('img,[type=radio]').count(),0);
     const box=await dialog.boundingBox();assert.ok(box.width<=width+1);assert.equal(sent.length,0);
     await tap('in-ai-confirm');await p.locator('[data-ai-state=failed]').waitFor();
     assert.equal(sent[0].technique,'auto');assert.deepEqual(errors,[]);
     console.log(width+'px '+method+' compact consent, no style menu, preserved input');continue;
    }
    const original=await current();
    await openStyle(p);
    const dirs=p.locator('.treatment-choices button');
    assert.equal(await dirs.count(),3);
    const paths=async()=>dirs.evaluateAll(bs=>bs.map(b=>b.querySelector('path').getAttribute('d')));
    const outlines=await paths();assert.equal(new Set(outlines).size,3);
    for(const id of ['free','classic','modern']){
     await tap('in-direction',id);assert.equal(await p.locator('.treatment-choices [aria-pressed=true]').count(),1);
     assert.equal(await summary.locator('path').first().getAttribute('d'),await p.locator('.treatment-choices [aria-pressed=true] path').first().getAttribute('d'));
    }
    await summary.click();assert.match(await summary.innerText(),/现代转译/);
    assert.equal(sent.length,0);
    const saved=await current();assert.equal(saved.direction,'modern','selection written before reload');
    await p.reload();await summary.waitFor();assert.match(await summary.innerText(),/现代转译/);
    const d=await current();assert.equal(d.sourceObjectId,original.sourceObjectId);
    if(method==='image')assert.ok(d.inspirationImageId&&d.inspirationImageId===original.inspirationImageId);
    if(method==='text')assert.equal(d.prompt,'一条游鱼');
    if(method==='sketch')assert.equal(d.sketchStrokes.length,4);
    if(method!=='motif')assert.equal(d.sourceMotifId,'motif:enamel-happiness');
    if(width===375)await p.screenshot({path:out+'/folded-375.png'});
    await openStyle(p);
    await p.waitForFunction(()=>document.querySelector('.treatment-choices').getBoundingClientRect().bottom<=document.querySelector('.input-footer').getBoundingClientRect().top+1);
    // Check a touch point actually belongs to a visible control, including at the narrowest size.
    for(const b of await fold.locator('button:not(.btn)').all()){
     const rect=await b.boundingBox();assert.ok(rect.width>=44&&rect.height>=44&&rect.x>=0&&rect.x+rect.width<=width+1);
     await b.click({trial:true,timeout:2500});
    }
    assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    if([375,390].includes(width)){await p.screenshot({path:out+'/open-'+width+'.png'});if(width===375)await fold.screenshot({path:out+'/comparison-375.png'});}
    assert.equal(sent.length,0);
    await tap('in-continue');await p.waitForURL(/#editor/);assert.equal(sent.length,0);
    assert.deepEqual(errors,[]);console.log(width+'px '+method+': examples, touch, persistence and generation boundary OK');
   }finally{await ctx.close();}
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
