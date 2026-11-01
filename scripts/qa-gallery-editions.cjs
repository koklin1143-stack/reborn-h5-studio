/* Check both gallery entry points in isolated browser storage. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const b=await chromium.launch({channel:'msedge'});
 try{for(const entry of ['http://127.0.0.1:8879/index.html',pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href]){
  const page=await b.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});page.setDefaultTimeout(10000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const tap=(a,id)=>page.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')+':visible').first().click();
  const shot=async name=>{if(process.env.QA_OUT&&entry.startsWith('http')){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await page.screenshot({path:path.join(process.env.QA_OUT,name+'.png')});}};
  const state=()=>page.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId);});
  await page.goto(entry+'#discover');const nav=page.locator('#nav');await nav.locator('button').first().waitFor();
  const typeOf=selector=>page.locator(selector).first().evaluate(el=>{
   const s=getComputedStyle(el);return [s.fontFamily,s.fontSize,s.fontWeight,s.letterSpacing,s.lineHeight];
  });
  const widths=[320,375,430],reference=new Map();
  for(const width of widths){
   await page.setViewportSize({width,height:812});
   reference.set(width,await Promise.all(['.enamel-heading h1','.object-title','.object-register','.category-scroll button[aria-pressed=true]'].map(typeOf)));
  }
  await page.setViewportSize({width:375,height:812});
  assert.deepEqual(await nav.locator('button').allTextContents(),['共创','广场','积分','我的']);
  await nav.getByText('广场').click();await page.waitForURL(/#gallery$/);
  assert.equal(await nav.locator('[aria-current=page]').textContent(),'广场');
  await page.locator('.edition-feature .file-art img').evaluate(img=>img.decode());await shot('作品广场');
  for(const w of widths){
   await page.setViewportSize({width:w,height:w===320?568:812});
   assert.deepEqual(await Promise.all(['.app-page-title','.catalogue-lead .file-caption strong','.file-spec','.gallery-sorts button[aria-pressed=true]'].map(typeOf)),reference.get(w),'Shared type at '+w);
   await page.waitForFunction(()=>document.querySelectorAll('.tile-art img.fitted-thumbnail').length===11);
   const tiles=await page.locator('.tile-art img').evaluateAll(images=>images.map(img=>{
    const box=img.closest('.file-picture').getBoundingClientRect(),r=img.getBoundingClientRect();
    const canvas=document.createElement('canvas');canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;
    const ctx=canvas.getContext('2d');ctx.drawImage(img,0,0,canvas.width,canvas.height);
    const rgba=ctx.getImageData(0,0,canvas.width,canvas.height).data;
    let mass=0,xx=0,left=canvas.width,right=0,top=canvas.height,bottom=0;
    for(let n=0;n<rgba.length/4;n++){
     const a=rgba[n*4+3]/255,x=n%canvas.width,y=Math.floor(n/canvas.width);
     if(a<.125)continue;
     mass+=a;xx+=a*(x+.5);left=Math.min(left,x);right=Math.max(right,x+1);
     top=Math.min(top,y);bottom=Math.max(bottom,y+1);
    }
    return {id:img.closest('.file-deck').dataset.id,kind:img.closest('.tile-art').dataset.vessel,width:box.width,height:box.height,
     cx:r.left-box.left+r.width*xx/(canvas.width*mass),cy:r.top-box.top+r.height*(top+bottom)/(2*canvas.height),
     visibleHeight:r.height*(bottom-top)/canvas.height,visibleWidth:r.width*(right-left)/canvas.width,
     titleY:img.closest('article').querySelector('strong').getBoundingClientRect().y};
   }));
   for(const tile of tiles){
    assert.ok(Math.abs(tile.width-tiles[0].width)<1&&Math.abs(tile.height-tiles[0].height)<1,'Equal mounts');
    assert.ok(Math.abs(tile.cx-tile.width/2)<1.5&&Math.abs(tile.cy-tile.height/2)<1.5,'Silhouette centre: '+tile.id);
   }
   for(const kind of ['cup','bowl','plate','basin']){
    const sameForm=tiles.filter(t=>t.kind===kind);
    const size=sameForm.map(t=>kind==='cup'?t.visibleHeight:t.visibleWidth);
    assert.ok(size.length>=2&&Math.max(...size)-Math.min(...size)<1.5,'Consistent size for '+kind+' at '+w);
   }
   const bowl=tiles.find(t=>t.id==='edition:grain');assert.ok(bowl.visibleWidth/bowl.width<.80,'Dense bowl has breathing room');
   for(let i=1;i<tiles.length;i+=2)assert.ok(Math.abs(tiles[i].titleY-tiles[i-1].titleY)<1,'Aligned captions');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth&&[...document.querySelectorAll('#nav button')].every(el=>el.getBoundingClientRect().width>=44)));
   assert.ok(await page.locator('.file-art img').evaluateAll(images=>images.every(img=>{
    const rect=img.getBoundingClientRect(),frame=img.closest('.file-picture').getBoundingClientRect();
    return rect.top>=frame.top-1&&rect.bottom<=frame.bottom+1&&rect.left>=frame.left-1&&rect.right<=frame.right+1;
   })),'Entire products must fit at '+w);
  }
  const card=page.locator('.register-grid .file-slot').first(),like=card.locator('[data-action=gallery-like]'),collect=card.locator('[data-action=gallery-collect]');
  const start=Number(await like.locator('b').textContent()),saves=Number(await collect.locator('b').textContent());
  await like.tap();await page.waitForFunction(()=>document.querySelector('.register-grid [data-action=gallery-like]')?.getAttribute('aria-pressed')==='true');
  assert.equal(Number(await like.locator('b').textContent()),start+1);assert.equal(Number(await collect.locator('b').textContent()),saves);
  await page.reload();assert.equal(await like.getAttribute('aria-pressed'),'true');await like.tap();
  await page.waitForFunction(()=>document.querySelector('.register-grid [data-action=gallery-like]')?.getAttribute('aria-pressed')==='false');assert.equal(Number(await like.locator('b').textContent()),start);
  await page.locator('.gallery-form').selectOption('cup');assert.equal(await page.locator('.register-grid .tile-art[data-vessel=cup]').count(),4);assert.equal(await page.locator('.catalogue-lead').count(),0);
  await page.locator('.gallery-form').selectOption('bowl');assert.equal(await page.locator('.gallery-card').count(),2);
  await page.reload();assert.equal(await page.locator('.gallery-form').inputValue(),'bowl');await page.locator('.gallery-form').selectOption('all');
  const samples=await page.evaluate(()=>GalleryEditions.map(x=>[x.id,x.snapshot.canvas,x.snapshot.imageId]));
  for(const [id,type,imageId] of samples){
   await tap('gallery-detail',id);await page.locator('.doc-product .folio-product img').evaluate(im=>im.decode());
   assert.equal(await nav.locator('[aria-current=page]').textContent(),'广场');
   if(id===samples[0][0]){await tap('gallery-like');await tap('gallery-collect');}
   await tap('gallery-inspire',id);await page.waitForURL(/#editor$/);
   await page.locator('#editor-object-status[data-state=ready]').waitFor({state:'attached'});
   const d=await state();assert.equal(d.editorSurface,'object');assert.equal(d.canvas,type);assert.equal(d.imageId,imageId);assert.equal(d.inspiration.publicationId,id);
   assert.ok(await page.evaluate(id=>LocalStore.getAsset(id).then(x=>x?.size>0),imageId));
   if(id==='edition:tide'){
    await page.setViewportSize({width:320,height:568});await tap('cup-open');await page.waitForURL(/#cup$/);await tap('cup-coverage','custom');
    await page.locator('[data-cover-tab=coverHeight]').click();await page.locator('[data-cover-field=coverHeight]').fill('42');await page.locator('.cup-settings-fold summary').click();await page.locator('.cup-footer').scrollIntoViewIfNeeded();
    const ret=page.getByRole('button',{name:'返回工作台',exact:true}),rect=await ret.boundingBox();assert.ok(rect&&rect.y>=0&&rect.y+rect.height<=568&&rect.height>=44);
    await page.locator('.cup-settings-fold summary').click();await page.locator('#main').evaluate(el=>{el.scrollTop=0});await page.locator('#toast').waitFor({state:'hidden'});await shot('全屏返回');await ret.click();await page.waitForURL(/#editor$/);assert.equal((await state()).vesselPlacement.coverHeight,42);assert.equal((await state()).editorSurface,'object');
    await tap('cup-open');await page.waitForURL(/#cup$/);await page.keyboard.press('Escape');await page.waitForURL(/#editor$/);await page.setViewportSize({width:375,height:812});
   }
   await tap('back');await page.waitForURL(/#gallery\//);await tap('back');await page.waitForURL(/#gallery$/);
  }
  await tap('gallery-sort','latest');assert.equal(await page.locator('.gallery-card').count(),samples.length);
  await nav.getByText('我的').click();await tap('filter','favorites');await page.locator('.gallery-cover img').evaluate(im=>im.decode());
  await page.goto(entry+'#gallery/example%3Astamp-magpie');assert.ok(await page.locator('.gallery-detail').count());assert.deepEqual(errors,[]);console.log(entry.startsWith('http')?'Online passed':'Standalone passed');await page.close();
 }}finally{await b.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
