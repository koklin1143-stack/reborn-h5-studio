/* Browser regression: split a monochrome / translucent motif and keep its original coverage. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),{PNG}=require('pngjs'),assert=require('node:assert/strict');
const version=require('../prototype/pattern-grammar.js').version;
(async()=>{
 const b=await chromium.launch({channel:'msedge'});try{
  for(const width of [375,390]){
   const p=await b.newPage({viewport:{width,height:812},isMobile:true,hasTouch:true});const errors=[];p.on('pageerror',e=>errors.push(e.message));
   const tap=(a,id)=>p.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
   const img=new PNG({width:96,height:96});img.data.fill(0);
   for(let y=18;y<78;y++)for(let x=8;x<88;x++){
    if(x>43&&x<53&&y>38&&y<58)continue;
    img.data.set([174,50,36,y<23?114:255],4*(y*96+x));
   }
   let body,requests=0;
   await p.route('**/api/pattern/status',r=>r.fulfill({json:{available:true,model:'qwen-image-2.1-turbo',ruleVersion:version}}));
   await p.route('**/api/pattern',r=>{body=r.request().postDataJSON();requests++;return r.fulfill({json:{ruleVersion:version,stage:'pattern',technique:'vermilion',png:PNG.sync.write(img).toString('base64'),design:{subject:'色样',traits:[],redraw:'色面',unit:'留底',arrangement:'单幅',void:'中间露底'}}})});
   await p.goto('http://127.0.0.1:8879/index.html#discover');await tap('choose-start');await tap('start-method','text');await p.locator('#inspiration-prompt').fill('一朵花');
   await tap('in-ai');const palette=p.locator('.recipe-ink-intent');assert.equal(await palette.evaluate(e=>e.open),false);
   await palette.locator('summary').click();await palette.locator('select').selectOption('3');
   assert.equal(await palette.locator('input:visible').count(),3);await palette.locator('select').selectOption('2');
   assert.equal(await palette.locator('input:visible').count(),2);await tap('in-ai-confirm');await p.locator('[data-ai-state=success]').waitFor();
   assert.deepEqual(body.requestedInks,['#355b68','#bd4e39']);await tap('in-continue');await p.waitForURL(/#editor/);
   const get=()=>p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId)});
   const pixelStats=async()=>p.evaluate(async()=>{const s=await LocalStore.load(),d=s.drafts.find(d=>d.id===s.ui.activeDraftId);
    const pixels=async w=>{const bmp=await createImageBitmap((await PatternTexture.export(w,{size:512})).blob),c=document.createElement('canvas');c.width=c.height=512;const x=c.getContext('2d');x.drawImage(bmp,0,0);bmp.close();return x.getImageData(0,0,512,512).data;};
    const baseline=await pixels({...d,spotPaint:null}),now=await pixels(d),counts=[0,0,0];let alphaDelta=0;
    for(let i=0;i<now.length;i+=4){alphaDelta=Math.max(alphaDelta,Math.abs(now[i+3]-baseline[i+3]));if(now[i+3]<100)continue;const [r,g,b]=now.subarray(i,i+3);if(b>r+30)counts[1]++;else if(r>g+10&&g>b+32)counts[2]++;else if(r>g+35)counts[0]++;}
    return {counts,alphaDelta};});
   const open=async()=>{await tap('wb-spot-paint');await p.locator('.spot-sheet').waitFor();};
   await tap('wb-tool','effects');await open();const sheet=p.locator('.spot-sheet'),art=sheet.locator('.spot-art');
   const setColor=(v)=>sheet.locator('input[type=color]').evaluate((el,hex)=>{el.value=hex;el.dispatchEvent(new Event('input',{bubbles:true}))},v);
   const mark=async x=>{const z=await art.boundingBox();await p.mouse.move(z.x+z.width*x,z.y+z.height*.37);await p.mouse.down();await p.mouse.move(z.x+z.width*x,z.y+z.height*.63,{steps:8});await p.mouse.up();};
   await sheet.locator('[data-slot="0"]').click();await setColor('#b83c22');await sheet.locator('[data-slot="1"]').click();await setColor('#2056ad');await mark(.32);
   await sheet.locator('[data-count="3"]').click();await sheet.locator('[data-slot="2"]').click();await setColor('#d6a22d');await mark(.68);
   assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   await sheet.locator('[data-done]').click();await p.locator('dialog[open]').waitFor({state:'hidden'});
   async function saved(check){for(let i=0;i<80;i++){const d=await get();if(check(d))return d;await p.waitForTimeout(70);}throw Error('draft did not persist');}
   const colored=await saved(d=>d.spotPaint?.strokes.length===2);let stats=await pixelStats();
   assert.ok(stats.counts.every(n=>n>90),JSON.stringify(stats));assert.ok(stats.alphaDelta<=2,JSON.stringify(stats));
   await tap('undo');await saved(d=>!d.spotPaint);await tap('redo');await saved(d=>d.spotPaint?.count===3);
   await p.reload();await p.locator('.pattern-editor').waitFor();assert.deepEqual(await pixelStats(),stats);
   await tap('wb-tool','effects');
   const entry=p.getByRole('button',{name:/局部配色/});
   assert.match(await entry.innerText(),/继续编辑三色纹样/);
   assert.deepEqual(await entry.locator('.spot-entry-inks i').evaluateAll(inks=>inks.map(i=>i.style.backgroundColor)),['rgb(184, 60, 34)','rgb(32, 86, 173)','rgb(214, 162, 45)']);
   await open();await sheet.locator('[data-count="2"]').click();await sheet.locator('[data-done]').click();
   await saved(d=>d.spotPaint?.count===2);let two=await pixelStats();assert.equal(two.counts[2],0);assert.ok(two.counts[0]>0&&two.counts[1]>0);
   await open();await sheet.locator('[data-count="3"]').click();await sheet.locator('[data-done]').click();await saved(d=>d.spotPaint?.count===3);
   await tap('editor-surface','object');await p.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');assert.ok(await p.evaluate(()=>Cup3D.diagnostics().inkOnBody));
   await tap('wb-glaze');await open();await tap('close');
   assert.equal(await p.locator('.ink-targets [data-id="glaze"]').getAttribute('aria-pressed'),'true');
   await tap('finish');await tap('complete');await p.waitForURL(/#result/);const w=await p.evaluate(async()=>(await LocalStore.load()).works.at(-1));
   assert.equal(w.visibility,'private');assert.equal(w.imageId,colored.imageId);assert.deepEqual(w.spotPaint,colored.spotPaint);assert.equal(requests,1);assert.deepEqual(errors,[]);
   console.log(width,'two / three brush inks, transparent export, undo, refresh, 3D and private work passed',stats);
   await p.close();
  }
 }finally{await b.close()}
})().catch(e=>{console.error(e);process.exitCode=1;});
