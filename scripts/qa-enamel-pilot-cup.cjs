/* Replay two genuine pilot rasters through the H5 adoption and save paths.
   Isolated browser profiles. The response metadata is a fixture, not a museum reference. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
const cases={'blue-study':[['text',375],['photo',390]],'mask-study':[['seated',375],['sprig',375],['bow',390]],'animal-proof':[['print',375],['loose',390]],'selected':[['warm-line',375],['blue',390]],'subject-study':[['flower',375],['bicycle',390],['wheel',390]]};
const study=process.argv.slice(2).map(value=>value.slice(2)).find(value=>Object.hasOwn(cases,value));
const folder='previews/enamel-pilot'+(study?'/'+study:'');
const version=require('../prototype/pattern-grammar.js').version;
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  for(const [rule,width] of (cases[study]||[['blue',375],['spray',390]])){
   const ctx=await browser.newContext({viewport:{width,height:812},isMobile:true,hasTouch:true});
   try{
    const p=await ctx.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));
    const originalBlue=study==='selected'&&rule==='blue';
    const png=fs.readFileSync(originalBlue?'previews/enamel-pilot/sketch-blue.png':folder+'/'+(study?'':'sketch-')+rule+'.png').toString('base64');
    let replay=0;
    const subjects={flower:['山茶',['半开花朵','斜向花苞']],bicycle:['自行车',['轮圈','菱形车架']],wheel:['自行车',['三弧轮','菱形车架']]};
    const [subject,traits]=subjects[rule]||['比格犬',['姿态','垂耳']];
    await p.route('**/api/pattern',r=>{replay++;return r.fulfill({json:{png,technique:rule==='blue'?'cobalt':'vermilion',ruleVersion:version,stage:'pattern',planner:'本地验收回放',design:{subject,traits,redraw:'回放数字试样',unit:'主体',arrangement:'单幅',void:'留白'}}})});
    const tap=(a,id)=>p.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
    await p.goto('http://127.0.0.1:8879/index.html#discover');await tap('choose-start');await tap('start-method','text');
    await p.locator('#inspiration-prompt').fill(subject+'，作品保存路径测试');await tap('in-ai');await tap('in-ai-confirm');
    await p.locator('[data-ai-state=success]').waitFor();await tap('in-continue');await p.waitForURL(/#editor/);
    await tap('editor-surface','object');await p.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
    await p.locator('#editor-cup-host canvas').screenshot({path:(originalBlue?'previews/enamel-pilot':folder)+'/cup-'+rule+'.png'});
    if(study==='mask-study'||study==='animal-proof'){
     await tap('wb-vessel','basin');
     await p.waitForFunction(()=>window.Cup3D.diagnostics()?.vesselType==='basin'&&document.querySelector('#editor-object-status')?.dataset.state==='ready');
     await p.locator('#editor-cup-host canvas').screenshot({path:folder+'/basin-'+rule+'.png'});
     await tap('cup-open');await p.waitForURL(/#cup/);
     await p.locator('[data-print-zone]').selectOption('center');
     await p.waitForFunction(()=>document.querySelector('#cup-status')?.dataset.state==='ready');
     await p.locator('.cup-settings-fold summary').click();
     const size=p.locator('[data-cup-field=scale]');
     const targetScale=study==='animal-proof'?'125':'155';
     await size.fill(targetScale);await size.dispatchEvent('change');
     await p.waitForFunction(n=>document.querySelector('[data-cup-output=scale]')?.textContent===n,targetScale);
     await p.locator('#cup-host canvas').screenshot({path:folder+'/center-'+rule+'.png'});
     await tap('cup-vessel','cup');
     await p.waitForFunction(()=>window.Cup3D.diagnostics()?.vesselType==='cup'&&document.querySelector('#cup-status')?.dataset.state==='ready');
    }
    await tap('finish');await p.locator('#work-title').fill('测试杯 · '+rule);await tap('complete');await p.waitForURL(/#result/);
    await p.reload();const w=await p.evaluate(async()=>(await LocalStore.load()).works.at(-1));
    assert.equal(w.visibility,'private');assert.equal(w.canvas,'cup');assert.equal(w.imageId,w.patternVersion.imageAssetId);
    await p.goto('http://127.0.0.1:8879/index.html#mine');await tap('filter','works');await tap('regeneration',w.id);
    assert.match(await p.locator('dialog').innerText(),/AI 辅助制纹/);assert.equal(replay,1);assert.deepEqual(errors,[]);
    console.log(width,rule,'3D ready, saved private cup, reload and archive passed');
   } finally {await ctx.close();}
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e.message);process.exitCode=1;});
