/* Touch-size UI, original pixels, recolouring across draft lifecycles, and a large shelf. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),{toggleSample,focusSample}=require('./qa-material-controls.cjs');
const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{for(const url of ['http://127.0.0.1:8879/index.html',pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href]){
  const p=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});p.setDefaultTimeout(10000);
  const errors=[];p.on('pageerror',e=>errors.push(e.message));
  const action=(a,id)=>p.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')+':visible').first(),tap=(...args)=>action(...args).tap();
  const getDraft=()=>p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
  const shot=async name=>{if(process.env.QA_OUT&&url.startsWith('http')){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await p.screenshot({path:path.join(process.env.QA_OUT,name+'.png')});}};
  const endDialog=()=>p.locator('dialog').waitFor({state:'hidden'}),red='#ae493a',green='#467365';
  const tint=async color=>{await tap('in-photo-color');await p.locator('.apply-color:enabled').waitFor();await p.locator('[data-tint="'+color+'"]').tap();await p.locator('.apply-color').tap();await endDialog();};
  await p.goto(url+'#discover');await tap('browse');await p.locator('dialog [data-id=enamel-bowl-01]').tap();await tap('start');
  const scroll='motif:blue-enamel-scroll',redglaze='motif:blue-enamel-redglaze';
  assert.equal(await p.locator('.sample-search,.sample-credit,[data-action=in-photo-library]').count(),0);
  assert.doesNotMatch(await p.locator('.sample-desk').innerText(),/DoubleEyeDesign|CC BY|摄影/);
  assert.equal(await p.locator('[data-action=in-photo-toggle]').count(),2);
  await tap('in-photo-toggle',redglaze);assert.equal(await p.locator('.sample-count').getAttribute('data-count'),'2');assert.ok(!await p.locator('dialog').isVisible());assert.ok(await action('in-photo-layout').isVisible());
  await focusSample(p,scroll);assert.equal(await p.locator('[data-action=in-photo-toggle][aria-pressed=true]').count(),2);
  await tap('in-photo-toggle',scroll);await tap('in-photo-toggle',redglaze);assert.ok(await action('in-continue').isDisabled());
  await tap('in-photo-toggle',redglaze);await shot('蓝釉碗直接多选');await tap('in-photo-toggle',scroll);
  await p.waitForFunction(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId).photoSelection?.length===2;});
  await p.reload();await p.locator('.sample-count[data-count="2"]').waitFor();
  await p.goto(url+'#discover');await tap('browse');await p.locator('dialog [data-id=enamel-plate-01]').tap();await tap('start');await p.locator('.sample-count').waitFor();
  const flower='motif:westlake-rosette',garden='motif:westlake-garden';
  await tint(red);await p.reload();await p.locator('.sample-count').waitFor();assert.equal((await getDraft()).photoSelection[0].tint,red);
  await tap('in-continue');await p.waitForURL(/#editor$/);
  const single=await getDraft();assert.ok(single.imageId!==single.provenance.parts[0].assetId);assert.equal(single.provenance.parts[0].tint,red);
  const solid=await p.evaluate(async d=>{const original=await createImageBitmap(await LocalStore.getAsset(d.provenance.parts[0].assetId)),coloured=await createImageBitmap(await LocalStore.getAsset(d.imageId));
   const pix=im=>{const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const ctx=c.getContext('2d');ctx.drawImage(im,0,0);return ctx.getImageData(0,0,c.width,c.height).data;};
   const a=pix(original),b=pix(coloured);let count=0,bad=0,alpha=0;for(let i=0;i<a.length;i+=4){if(a[i+3]!==b[i+3])alpha++;if(a[i+3]>253){count++;if(Math.abs(b[i]-174)>2||Math.abs(b[i+1]-73)>2||Math.abs(b[i+2]-58)>2)bad++;}}
   const dims=[original.width,original.height,coloured.width,coloured.height];original.close();coloured.close();return {dims,count,bad,alpha};
  },single);assert.equal(solid.dims[0],solid.dims[2]);assert.equal(solid.dims[1],solid.dims[3]);assert.ok(solid.count>100&&solid.bad===0&&solid.alpha===0,JSON.stringify(solid));
  await tap('wb-tool','sample');await tap('manage-photo-picks');await toggleSample(p,garden);await tint(green);
  assert.deepEqual((await getDraft()).photoSelection.map(v=>v.tint),[red,green]);
  await tap('in-photo-crop');await p.locator('.crop-apply:enabled').waitFor();await p.locator('.crop-tint summary').tap();await p.locator('.crop-tint [data-tint="#33466c"]').tap();
  await p.locator('[name=crop-name]').fill('我的庭院局部');await p.locator('.crop-apply').tap();await endDialog();const custom=(await getDraft()).photoSelection.at(-1).id;
  await toggleSample(p,custom);await p.reload();await p.locator('.sample-count').waitFor();assert.ok((await getDraft()).photoLibrary.some(m=>m.id===custom&&m.tint==='#33466c'));
  await toggleSample(p,custom);await focusSample(p,garden);
  // Many saved source regions must not grow the main page or the number of rendered catalogue tiles.
  await p.evaluate(async custom=>{const s=await LocalStore.load(),d=s.drafts.find(d=>d.id===s.ui.activeDraftId),seed=d.photoLibrary.find(m=>m.id===custom);
   d.photoLibrary.push(...Array.from({length:48},(_,i)=>({...seed,id:'crop:westlake:qa-'+i,name:'留存样片 '+String(i).padStart(2,'0'),tint:null})));
   await LocalStore.commit(s);
  },custom);await p.reload();await p.locator('.sample-count').waitFor();assert.equal(Number(await p.locator('.sample-count').getAttribute('data-count')),3);assert.equal(await p.locator('[data-action=in-photo-toggle]').count(),4);
  for(const width of [320,375,430]){
   await p.setViewportSize({width,height:width===320?568:812});assert.ok(await p.locator('.sample-desk').evaluate(el=>el.scrollWidth<=el.clientWidth+1));
   if(width===375){await p.locator('.study-print canvas').waitFor();await shot('手机取样页');}
  }
  const search=p.locator('.sample-search input'),filter=p.locator('.sample-search select');
  await filter.selectOption('custom');assert.equal(await p.locator('[data-action=in-photo-toggle]').count(),4);await p.locator('[data-pg="1"]').tap();
  await search.fill('样片 47');assert.equal(await p.locator('[data-action=in-photo-toggle]').count(),1);
  const extra=['46','45','44'].map(n=>'crop:westlake:qa-'+n);
  async function changeExtra(){await filter.selectOption('custom');for(const id of extra){await search.fill('样片 '+id.slice(-2));await tap('in-photo-toggle',id);}await search.fill('');}
  await changeExtra();assert.equal(Number(await p.locator('.sample-count').getAttribute('data-count')),6);await tap('in-photo-crop');assert.equal(await p.locator('.crop-apply:enabled').innerText(),'存入素材库');
  await p.locator('[data-shape=rect]').tap();await p.locator('[name=crop-name]').fill('满组选外新增');await p.locator('.crop-apply').tap();await endDialog();
  assert.ok((await getDraft()).photoLibrary.some(v=>v.name==='满组选外新增'));assert.equal(Number(await p.locator('.sample-count').getAttribute('data-count')),6);await changeExtra();assert.equal(Number(await p.locator('.sample-count').getAttribute('data-count')),3);
  await tap('in-photo-layout');await p.locator('.layout-apply:enabled').waitFor();await p.locator('.placement-more summary').tap();assert.equal(await p.locator('[data-layout-tab],[data-layer-command=turn],[data-layer-field=size],[data-layer-field=rotation]').count(),0);
  await p.locator('[data-layer="0"]').tap();await p.locator('.layer-front').tap();await p.locator('.layer-handle').press('Shift+ArrowRight');await p.locator('.layout-apply').tap();await p.waitForURL(/#editor$/);
  const dd=await getDraft();assert.equal(dd.provenance.parts.at(-1).id,flower);assert.equal(dd.provenance.parts.at(-1).rotation,5);
  await tap('in-photo-layout');await p.locator('.layout-apply:enabled').waitFor();await tap('manage-photo-picks');await focusSample(p,flower);await tint('');await tap('in-continue');await p.waitForURL(/#editor$/);
  const final=await getDraft();assert.ok(!final.provenance.parts.at(-1).tint);assert.equal(final.provenance.parts.at(-1).rotation,5);assert.equal(final.provenance.parts.find(m=>m.id===garden).tint,green);assert.equal(final.provenance.parts.find(m=>m.id===custom).tint,'#33466c');
  const graded=await p.evaluate(()=>{const c=document.createElement('canvas');c.width=3;c.height=1;const ctx=c.getContext('2d'),im=ctx.createImageData(3,1);im.data.set([25,25,25,255,120,120,120,255,210,210,210,255]);ctx.putImageData(im,0,0);
   return Array.from(MaterialColor.paint(c,{tint:'#467365',treatment:'colour'}).getContext('2d').getImageData(0,0,3,1).data);
  });assert.ok(graded[0]<graded[4]&&graded[4]<graded[8]&&graded[5]>graded[4]);await tap('editor-surface','object');await p.locator('#editor-object-status[data-state=ready]').waitFor({state:'attached'});
  await tap('finish');await p.locator('#work-title').fill('三色取样');await tap('complete');await p.waitForURL(/#result/);const work=await p.evaluate(async()=>(await LocalStore.load()).works.at(-1));
  assert.deepEqual(work.provenance.parts,final.provenance.parts);assert.ok(work.previewAssetId);assert.deepEqual(errors,[]);console.log(url.startsWith('http')?'Online':'Standalone',solid);await p.close();
 }}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
