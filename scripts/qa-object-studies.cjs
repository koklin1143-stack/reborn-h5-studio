/* Real catalogue derivatives only. Playwright runs against an isolated local profile. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const E=require('../prototype/explore.js'),url='http://127.0.0.1:8879/index.html';
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const p=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
  p.setDefaultTimeout(8000);const errors=[];p.on('pageerror',e=>errors.push(e.message));
  const tap=(a,id)=>p.locator('[data-action="'+a+'"]:visible'+(id?'[data-id="'+id+'"]':'')).first().click();
  const shot=async name=>{if(process.env.QA_OUT){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await p.screenshot({path:path.join(process.env.QA_OUT,name+'.png'),animations:'disabled'});}};
  for(const o of E.items){
   for(const sample of o.photo.samples){
    const id='motif:'+o.photo.key+'-'+sample.key;
    await p.goto(url+'#discover');await tap('browse');await p.locator('dialog [data-id="'+o.id+'"]').click();await tap('start');
    await p.locator('.study-sheet').waitFor();
    const selected=await p.locator('[data-action=in-photo-toggle][aria-pressed=true]').evaluateAll(nodes=>nodes.map(b=>b.dataset.id));
    for(const current of selected)if(current!==id)await require('./qa-material-controls.cjs').toggleSample(p,current);
    if(!selected.includes(id))await require('./qa-material-controls.cjs').toggleSample(p,id);
    await p.waitForFunction(id=>{const chosen=document.querySelectorAll('[data-action=in-photo-toggle][aria-pressed=true]');return chosen.length===1&&chosen[0].dataset.id===id;},id);
    assert.doesNotMatch(await p.locator('.study-sheet').innerText(),/喜鹊花枝|牡丹花开|双喜记忆/);
    const preview=await p.locator('.study-print img').evaluate(async img=>{await img.decode();return [img.naturalWidth,img.naturalHeight];});
    if(sample.key==='number')await shot('德胜杯取样');
    await tap('in-continue');await p.waitForURL(/#editor$/);await p.locator('#work-preview').waitFor();
    await p.reload();await p.locator('#work-preview').waitFor();
    const d=await p.evaluate(async()=>{
     const s=await LocalStore.load(),d=s.drafts.find(row=>row.id===s.ui.activeDraftId);
     const im=await createImageBitmap(await LocalStore.getAsset(d.imageId));
     const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const ctx=c.getContext('2d');ctx.drawImage(im,0,0);const data=ctx.getImageData(0,0,c.width,c.height).data;
     let empty=0,ink=0;for(let i=3;i<data.length;i+=4){if(data[i]<15)empty++;if(data[i]>160)ink++;}
     const texture=await PatternTexture.export(d,{size:512,transparent:true});
     return {id:d.sourceMotifId,asset:d.imageId,source:d.sourceObjectId,origin:d.provenance.origin,empty,ink,dims:[im.width,im.height],size:texture.blob.size};
    });
    assert.equal(d.id,id);assert.equal(d.source,o.sourceObjectId);assert.equal(d.origin,'photo-study');assert.deepEqual(d.dims,preview);
    assert.ok(d.empty>0&&d.ink>20&&d.size>400);
    if(sample.key==='number'){
     await tap('wb-tool','sample');await tap('resample-photo','motif:desheng-mark');
     await p.locator('.study-print img[alt*="德胜铭字"]').waitFor();await tap('in-continue');await p.waitForURL(/#editor$/);
     assert.equal(await p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(x=>x.id===s.ui.activeDraftId).imageName;}),'德胜铭字');
     await tap('wb-tool','sample');await tap('resample-photo',id);await tap('in-continue');await p.waitForURL(/#editor$/);
     await tap('finish');await tap('finish-preview');await p.locator('#editor-object-status[data-state=ready]').waitFor();await shot('德胜杯纹样试贴');
     await tap('finish');await p.locator('#work-title').fill('杯身编号的再创作');await tap('complete');await p.waitForURL(/#result/);
     const result=await p.evaluate(async()=>{const s=await LocalStore.load(),w=s.works.at(-1);return {id:w.sourceMotifId,license:s.sources.find(row=>row.id===w.sourceId)?.rights,tex:w.patternVersion.imageAssetId};});
     assert.equal(result.id,id);assert.match(result.license,/Uuongkinghe.*CC BY-SA/);assert.equal(result.tex,d.asset);
     await tap('regeneration');assert.match(await p.locator('dialog').innerText(),/实物照片分色/);await tap('close');
    }
   }
  }
  assert.deepEqual(errors,[]);console.log('All '+E.items.length+' objects, all '+E.items.reduce((n,o)=>n+o.photo.samples.length,0)+' motifs: matched thumbnails, alpha, IndexedDB reload and texture export. Real 3D, completed work and source trace passed.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
