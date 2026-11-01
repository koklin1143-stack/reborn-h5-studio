/* Exercise the opening card, engineering report and actual transparent product for
   an edition, a published local design, and a pre-transparent publication. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{for(const entry of ['http://127.0.0.1:8879/index.html',pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href]){
  const p=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});p.setDefaultTimeout(13000);
  const errors=[];p.on('pageerror',e=>errors.push(e.message));
  const tap=(a,id)=>p.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')+':visible').first().tap();
  const shot=async name=>{if(process.env.QA_OUT&&entry.startsWith('http')){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await p.screenshot({path:path.join(process.env.QA_OUT,name+'.png')});}};
  const openFile=async key=>{
   const hit=await p.locator('.doc-open[data-id="'+key+'"]').evaluate(el=>{
    const rect=el.getBoundingClientRect();
    for(let y=rect.top+18;y<rect.bottom-18;y+=7)for(let x=rect.left+18;x<rect.right-18;x+=7){
     if([[0,0],[-16,-16],[-16,16],[16,-16],[16,16]].every(([a,b])=>document.elementFromPoint(x+a,y+b)===el))return {x,y};
    }
   });assert.ok(hit,'Exposed paper '+key+' at '+JSON.stringify(p.viewportSize()));await p.touchscreen.tap(hit.x,hit.y);await p.waitForURL(new RegExp('/'+key+'$'));await p.locator('.folio-reader').waitFor();
  };
  const checkPNG=async()=>{
   await openFile('product');const link=p.locator('.product-save[download]');await link.waitFor();
   const pixels=await link.evaluate(async a=>{const res=await fetch(a.href),blob=await res.blob(),im=await createImageBitmap(blob),c=document.createElement('canvas');c.width=im.width;c.height=im.height;
    const ctx=c.getContext('2d');ctx.drawImage(im,0,0);const data=ctx.getImageData(0,0,c.width,c.height).data;
    let solid=0,clear=0;for(let i=3;i<data.length;i+=4){if(data[i]>235)solid++;if(data[i]===0)clear++;}
    im.close();return [blob.type,data[3],data.at(-1),solid/data.length*4,clear/data.length*4];});
   assert.deepEqual(pixels.slice(0,3),['image/png',0,0]);assert.ok(pixels[3]>.11&&pixels[4]>.08,JSON.stringify(pixels));
   const [download]=await Promise.all([p.waitForEvent('download'),link.click()]);assert.match(download.suggestedFilename(),/-成品\.png$/);
   await tap('back');await p.locator('.folio-stage').waitFor();return pixels;
  };
  const background=selector=>p.locator(selector).first().evaluate(el=>getComputedStyle(el).backgroundColor);
  const assertNeutral=async selector=>{
   const colors=await p.locator(selector).evaluateAll(els=>els.flatMap(el=>{
    const s=getComputedStyle(el);return [s.color,s.backgroundColor,s.borderTopColor];
   }));
   for(const color of colors){const [r,g,b]=color.match(/[\d.]+/g).map(Number);assert.ok(r===g&&g===b,'Neutral interface ink and stock: '+color);}
  };
  await p.goto(entry+'#points');await p.locator('.growth-screen').waitFor();const base=await background('.growth-screen');
  await p.goto(entry+'#mine');await p.locator('.mine-screen').waitFor();assert.equal(await background('.mine-screen'),base);
  await p.goto(entry+'#gallery');await p.locator('.edition-feature .file-art img').evaluate(im=>im.decode());assert.equal(await background('.gallery-content'),base);await shot('器物图录');
  await assertNeutral('.gallery-filter-bar,.file-picture,.tile-register,.file-caption,.like-mark,.cover-sample .pattern-mount');
  await tap('gallery-detail','edition:tide');await p.locator('.drawing-title h1').waitFor();await p.waitForFunction(()=>!document.querySelector('.unfolding-file'));
  assert.equal(await p.locator('.drawing-title h1').textContent(),'潮线');assert.equal(await background('.publication-file'),base);
  const board=await p.locator('.folio-desk').innerText();for(const text of ['蓝地纪念搪瓷盖盆','器身釉色','白釉折线边饰','印在外壁环带'])assert.ok(board.includes(text),text);
  assert.equal(await p.locator('.doc-sample .pattern-mount>svg').count(),1);
  const [swatch,product,origin,title,note]=await Promise.all(['.doc-sample','.doc-product','.folio-origin','.drawing-title h1','.board-note'].map(s=>p.locator(s).boundingBox()));
  assert.ok(title.y<origin.y&&origin.y<swatch.y&&swatch.x+swatch.width<=product.x+1&&Math.abs(product.y-swatch.y)<1);
  assert.ok(note.y>=swatch.y+swatch.height&&note.width>=swatch.width+product.width-1,'Chinese description uses the full text measure');
  assert.equal(await background('.folio-stage'),base);
  await assertNeutral('.folio-stage,.plate-art,.drawing-title,.doc-report,.folio-colophon,.folio-return,.detail-action-bar .primary');
  const mount=await background('.doc-sample .pattern-mount');assert.equal(mount,'rgb(70, 70, 70)');
  assert.equal(await p.locator('#nav').isVisible(),false);assert.equal(await p.locator('.folio-stage .doc-open').count(),4);
  await shot('案头');await openFile('report');await shot('设计依据');
  assert.equal(await background('.folio-reader'),base);const report=await p.locator('.sheet-report').innerText();for(const text of ['100% / 62%','7 组'])assert.ok(report.includes(text),text);
  await p.locator('[data-mag=more]').tap();assert.equal(await p.locator('[data-mag=fit]').textContent(),'150%');
  await p.locator('[data-mag=fit]').tap();
  const session=await p.context().newCDPSession(p),field=await p.locator('.read-field').boundingBox();
  const cx=Math.round(field.x+field.width/2),cy=Math.round(field.y+field.height/2);
  const touch=(type,points)=>session.send('Input.dispatchTouchEvent',{type,touchPoints:points.map(([id,x,y])=>({id,x,y}))});
  await touch('touchStart',[[1,cx-34,cy],[2,cx+34,cy]]);
  await touch('touchMove',[[1,cx-68,cy],[2,cx+68,cy]]);await touch('touchEnd',[]);
  assert.equal(await p.locator('[data-mag=fit]').textContent(),'200%');
  await touch('touchStart',[[1,cx,cy]]);await touch('touchMove',[[1,cx+28,cy]]);await touch('touchEnd',[]);
  const shift=await p.locator('.read-surface').evaluate(el=>new DOMMatrix(getComputedStyle(el).transform).m41);assert.ok(Math.abs(shift-28)<=1,'Dragged sheet by '+shift);
  await session.detach();await p.locator('[data-mag=fit]').tap();await p.keyboard.press('Escape');await p.locator('.folio-stage').waitFor();
  assert.equal(await p.evaluate(()=>document.activeElement.dataset.id),'report');
  await openFile('product');assert.equal(await p.locator('.body-section polygon').count(),1);await p.goBack();await p.locator('.folio-stage').waitFor();
  assert.equal(await p.evaluate(()=>document.activeElement.dataset.id),'product');
  await openFile('sample');await p.reload();await p.locator('.folio-reader .contact-strip').waitFor();assert.match(await p.locator('.sample-spec').innerText(),/白釉折线边饰/);await p.goBack();await p.locator('.folio-stage').waitFor();
  await openFile('color');assert.ok((await p.locator('.ink-ledger').innerText()).includes('#225069'));await tap('back');await p.locator('.folio-stage').waitFor();
  const edition=await checkPNG();await tap('gallery-inspire','edition:tide');await p.waitForURL(/#editor$/);await tap('cup-coverage','custom');
  await p.locator('[data-cover-field=coverHeight]').fill('45');await tap('finish');await p.locator('#work-title').fill('秋潮试印');
  const idea='留下蓝釉素边，把折线收进杯带。把原来散在边缘的白线接成一圈，旋转器物时可以沿着同一条线看下去。'.repeat(2);
  await p.locator('#work-idea').evaluate(el=>el.closest('details').open=true);await p.locator('#work-idea').fill(idea);
  await tap('complete');await p.waitForURL(/#result/);await tap('publish-open');for(const id of ['rights','display','inspire'])await p.locator('#publish-'+id).check();await tap('publish-confirm');
  const id=await p.evaluate(async()=>{const s=await LocalStore.load();return s.publications.at(-1)?.id;});assert.ok(id);await tap('gallery-detail',id);await p.waitForURL(/#gallery\//);
  assert.equal(await p.locator('.drawing-title h1').textContent(),'秋潮试印');assert.match(await p.locator('.folio-desk').innerText(),/留下蓝釉素边/);
  assert.equal(await p.locator('.doc-sample .pattern-mount>svg').count(),1,'Published snapshot exposes its applied pattern');
  await openFile('report');assert.match(await p.locator('.sheet-report').innerText(),/100% \/ 45%/);
  const firstNote=await p.locator('.paper-note').textContent();assert.match(firstNote,/。$/);await p.locator('[data-step="1"]').tap();
  assert.equal(firstNote+await p.locator('.paper-note').textContent(),idea);
  await tap('back');await p.locator('.folio-stage').waitFor();const local=await checkPNG();
  // Remove the new format flag in this isolated test store to exercise old saved snapshots.
  await p.evaluate(async id=>{const s=await LocalStore.load();delete s.publications.find(x=>x.id===id).snapshot.previewTransparent;await LocalStore.commit(s);},id);
  await p.reload();await p.locator('[data-render-file] img').waitFor();const legacy=await checkPNG();
  await tap('back');await p.waitForURL(/#result/);await p.getByRole('navigation',{name:'主导航'}).getByText('广场').tap();await tap('gallery-sort','latest');await p.locator('.gallery-form').selectOption('basin');assert.ok(await p.locator('.gallery-card').count()>=2);
  await p.emulateMedia({reducedMotion:'reduce'});await tap('gallery-detail',id);assert.ok(!await p.locator('.unfolding-file').count());
  for(const [width,height] of [[320,568],[375,812],[430,932],[667,375],[568,320]]){
   await p.setViewportSize({width,height});
   await p.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
   assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth&&document.querySelector('#main').scrollHeight<=document.querySelector('#main').clientHeight+1));
   assert.ok(await p.locator('.board-panel').evaluateAll(els=>els.every(el=>el.clientHeight>=44&&el.clientWidth>=44&&el.scrollHeight<=el.clientHeight+1)),'All four panels fit '+width+'×'+height);
   for(const file of ['report','sample','color','product']){await openFile(file);await tap('back');await p.locator('.folio-stage').waitFor();}
   const ret=await p.locator('[data-action=gallery-inspire]').boundingBox();assert.ok(ret.height>=44&&ret.y+ret.height<=height+1);
  }
  await tap('back');await p.waitForURL(/#gallery$/);assert.equal(await p.locator('.gallery-form').inputValue(),'basin');assert.equal(await p.locator('[data-id=latest][data-action=gallery-sort]').getAttribute('aria-pressed'),'true');
  await p.goto(entry+'#gallery/edition%3Atide/report');await p.locator('.folio-reader').waitFor();await tap('back');await p.locator('.folio-stage').waitFor();
  await tap('back');await p.waitForURL(/#gallery$/);
  assert.deepEqual(errors,[]);console.log(entry.startsWith('http')?'Online':'Standalone',{edition,local,legacy});await p.close();
 }}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
