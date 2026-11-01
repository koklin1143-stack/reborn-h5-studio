const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');

async function main(){
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  const tap=(action,id)=>page.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
  const saved=()=>page.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
  const touch=await page.context().newCDPSession(page);
  async function drag(from,to){
   const r=await page.locator('#work-preview').boundingBox();
   const point=([x,y])=>[{id:1,x:r.x+x*r.width,y:r.y+y*r.height}];
   await touch.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:point(from)});
   for(let i=1;i<=4;i++)await touch.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:point(from.map((n,k)=>n+(to[k]-n)*i/4))});
   await touch.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await saved();
  }
  // Compare actual exported RGB pixels against the preceding export on the same page.
  async function difference(){return page.evaluate(async()=>{
   const s=await LocalStore.load(),d=s.drafts.find(v=>v.id===s.ui.activeDraftId);
   const img=await createImageBitmap((await PatternTexture.export(d,{size:512,transparent:false})).blob);
   const c=document.createElement('canvas');c.width=c.height=128;
   const ctx=c.getContext('2d');ctx.drawImage(img,0,0,128,128);img.close();
   const pixels=ctx.getImageData(0,0,128,128).data,prev=window.qaPixels;window.qaPixels=pixels;
   if(d.patternLayout==='hexflower'){
    if(!window.qaStrip){window.qaStrip=document.createElement('canvas');window.qaStrip.width=524;window.qaStrip.height=128;window.qaFrame=0;}
    window.qaStrip.getContext('2d').drawImage(c,132*window.qaFrame++,0);
   }
   if(!prev)return 0;let visible=0;
   for(let i=0;i<pixels.length;i+=4){if([0,1,2].some(k=>Math.abs(pixels[i+k]-prev[i+k])>=24))visible++;}
   return +(100*visible/(128*128)).toFixed(1);
  });}
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const url=process.env.QA_URL||'http://127.0.0.1:8879/prototype/index.html';
  await page.goto(url+'#mine');await page.locator('.my-tabs').waitFor();
  // Flower and bird are editable parts of the vector magpie used by the RGB checks.
  await page.evaluate(async()=>{
   const s=await LocalStore.load(),d=Studio.addDraft(s,'enamel-magpie');
   d.editorSurface='pattern';await LocalStore.commit(s);
  });
  await page.goto(url+'#editor');await page.reload();await saved();
  const history=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId).past.length;});
  for(const layout of ['single','hexflower','kaleido']){
   if(layout!=='single'){await tap('wb-layout',layout);await saved();}
   await difference();
   const start=await history(),deltas=[];
   for(let i=0;i<3;i++){
    await drag([.30,.52],[.58,.52]);deltas.push(await difference());
   }
   console.log(layout,deltas);
   if(!process.env.BASELINE)assert.ok(deltas.every(x=>x>2),'drag must still affect the rendered image after successive swipes');
   while(await history()>start){await tap('undo');await saved();}
  }
  if(process.env.BASELINE)return;
  const strip=await page.evaluate(()=>qaStrip.toDataURL().split(',')[1]);
  require('node:fs').writeFileSync('previews/drag-sequence.png',Buffer.from(strip,'base64'));
  const draft=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
  assert.ok(await page.locator('#save-status').isHidden());
  await tap('wb-layout','single');await saved();await tap('wb-tool','sampling');await tap('reset');await saved();await tap('wb-collapse');
  await tap('wb-tool','effects');
  await tap('wb-ink-target','flower');await tap('wb-spot-paint');
  await page.getByRole('dialog',{name:'局部配色'}).waitFor();await tap('close');
  assert.equal(await page.locator('[data-id="flower"][data-action="wb-ink-target"]').getAttribute('aria-pressed'),'true');
  await tap('wb-tool','effects-detail');await tap('wb-part-color','blue');await saved();await tap('wb-collapse');
  const inks=(await draft()).motifInks;assert.equal(inks['magpie/flower'],'#355b68');
  const fills=await page.evaluate(()=>Array.from(document.querySelectorAll('#work-preview [fill]'),el=>el.getAttribute('fill')));
  assert.ok(fills.includes('#245b71')&&fills.includes('#748879')&&fills.includes('#355b68')&&!fills.includes('#ba6555'));
  await tap('wb-ink-target','bird');await tap('wb-tool','effects-detail');await tap('wb-part-color','gold');await saved();await tap('wb-collapse');
  assert.equal((await draft()).motifInks['magpie/bird'],'#c5a067');
  await tap('undo');await saved();assert.deepEqual((await draft()).motifInks,inks);
  await page.reload();await saved();assert.deepEqual((await draft()).motifInks,inks);
  await tap('wb-tool','effects');await tap('wb-ink-target','flower');await tap('wb-ink-picker');
  await page.locator('[data-swatch="#986cb0"]').click();await page.locator('[data-apply]').click();await saved();
  assert.equal((await draft()).motifInks['magpie/flower'],'#986cb0');
  await tap('wb-ink-target','all');await tap('wb-tool','effects-detail');await tap('pattern-ink','red');await saved();await tap('wb-collapse');
  assert.deepEqual((await draft()).motifInks,{});
  const flat=await page.evaluate(async()=>{
   const s=await LocalStore.load(),d=s.drafts.find(d=>d.id===s.ui.activeDraftId);
   const raster=async d=>{
    const image=await createImageBitmap((await PatternTexture.export(d,{size:512})).blob);
    const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d');
    ctx.drawImage(image,0,0);image.close();return ctx.getImageData(0,0,512,512).data;
   };
   const orig=await raster({...d,patternInk:'original'}),old=await raster(d);
   const next=await raster({...d,motifInks:{'magpie/flower':'#986cb0'}});
   let flower=0,bird=0,otherDelta=0;
   for(let i=0;i<orig.length;i+=4){
    if(orig[i+3]!==255)continue;
    if(orig[i]===186&&orig[i+1]===101&&orig[i+2]===85&&next[i]===152)flower++;
    if(orig[i]===36&&orig[i+1]===91&&orig[i+2]===113){
     bird++;otherDelta=Math.max(otherDelta,...[0,1,2].map(k=>Math.abs(old[i+k]-next[i+k])));
    }
   }
   return {flower,bird,otherDelta};
  });
  assert.ok(flat.flower>100&&flat.bird>100&&flat.otherDelta<=2,JSON.stringify(flat));
  await tap('wb-restore-color');await saved();await tap('wb-ink-target','flower');
  await page.evaluate(()=>{
   const original=LocalStore.commit;
   LocalStore.commit=async(...args)=>{LocalStore.commit=original;throw Error('本地存储暂不可用');};
  });
  await tap('wb-tool','effects-detail');await tap('wb-part-color','blue');
  await page.locator('#storage-banner').waitFor({state:'visible'});
  assert.ok(!(await draft()).motifInks['magpie/flower']);
  await tap('retry');await saved();await tap('wb-collapse');assert.ok(await page.locator('#storage-banner').isHidden());
  assert.equal((await draft()).motifInks['magpie/flower'],'#355b68');
  for(const width of [320,375,390,430]){
   await page.setViewportSize({width,height:width===320?640:812});
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
   const target=page.locator('.ink-targets button').last(),last=page.locator('.inline-spectrum .ink-spectrum');
   for(const el of [target,last]){const r=await el.boundingBox();assert.ok(r.x>=0&&r.x+r.width<=width&&r.height>=44);}
   if(width===375)await page.screenshot({path:'previews/direct-edit-color-375.png'});
  }
  assert.deepEqual(errors,[]);
  console.log('PASS: part-only pigment and numeric pixel check, intact original and tinted bird; undo, reload, picker, four widths, failed write and retry.');
 }finally{await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
