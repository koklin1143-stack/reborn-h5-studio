const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{const mode=process.env.QA_MODE||'local',b=await chromium.launch({channel:'msedge',...(mode==='live'?{proxy:{server:'http://127.0.0.1:7897'}}:{})});try{
 const p=await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),errors=[],dir='work/qa/layout-v12';fs.mkdirSync(dir,{recursive:true});p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(/shader error|VALIDATE_STATUS false|INVALID_OPERATION/i.test(m.text()))errors.push(m.text());});
 const base=mode==='offline'?pathToFileURL(path.resolve('物之再生-H5-单文件.html')).href:mode==='live'?'https://koklin1143-stack.github.io/reborn-h5-studio/?v=20261106-layout-v12':process.env.QA_URL||'http://127.0.0.1:8879/index.html';
 if(mode==='offline')await p.route(/^https?:/,r=>r.abort());else await p.route('**/favicon.ico',r=>r.fulfill({status:204}));
 await p.goto(base+'#gallery');await p.locator('.gallery-card').first().waitFor();assert.equal(await p.locator('meta[name=reborn-release]').getAttribute('content'),'2026-11-06-layout-v12');assert.equal(await p.locator('.gallery-card').count(),26);
 const editions=await p.evaluate(()=>GalleryEditions.map(e=>[e.id,e.snapshot.canvas,e.snapshot.vesselPlacement.zone,e.snapshot.imageId]));
 await p.locator('.gallery-form').selectOption('all');await p.locator('.gallery-card img').evaluateAll(es=>Promise.all(es.map(e=>e.decode())));await p.screenshot({path:dir+'/'+mode+'-gallery.png'});
 // A contact sheet uses actual published cover images, so all silhouettes and placements can be inspected together.
 const art=await p.evaluate(()=>GalleryEditions.map(e=>({title:e.title,type:Vessels.get(e.snapshot.canvas).name,url:EnamelArt.photoUrl(e.coverKey)})));
 if(mode!=='offline'){const sheet=await b.newPage({viewport:{width:1200,height:2100}});await sheet.goto(base);await sheet.setContent('<html><body style="margin:0;background:#f1f0ec;display:grid;grid-template-columns:repeat(4,1fr);font:16px sans-serif">'+art.map(e=>`<figure style="margin:12px;text-align:center"><img src="${new URL(e.url,base)}" style="width:260px;height:245px;object-fit:contain"><figcaption>${e.title} · ${e.type}</figcaption></figure>`).join('')+'</body></html>');await sheet.locator('img').evaluateAll(es=>Promise.all(es.map(e=>e.decode())));await sheet.screenshot({path:dir+'/'+mode+'-contact.png',fullPage:true});await sheet.close();}
 const ready=()=>p.locator('#editor-object-status[data-state=ready]').waitFor({state:'attached',timeout:12000}),saved=()=>p.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
 const tap=async(a,id)=>p.locator(`[data-action="${a}"]${id?`[data-id="${id}"]`:''}`).filter({visible:true}).first().click();
 const diag=()=>p.evaluate(()=>Cup3D.diagnostics());
 const choose=async id=>{await tap('cup-position-edit',id);await ready();assert.equal(await p.locator('#dialog').evaluate(e=>e.open),false);};
 const setPrint=async(id,on)=>{await choose(id);await p.locator('[data-position-print]').setChecked(on);await ready();};
 for(const type of [...new Set(editions.map(e=>e[1]))]){await p.locator('.gallery-form').selectOption(type);assert.equal(await p.locator('.gallery-card').count(),editions.filter(e=>e[1]===type).length);}await p.locator('.gallery-form').selectOption('all');
 for(const [id,type,zone,image]of editions){await tap('gallery-detail',id);await p.locator('.doc-product img').evaluate(im=>im.decode());await tap('gallery-inspire');await ready();await saved();const d=await p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(x=>x.id===s.ui.activeDraftId);});assert.equal(d.canvas,type);assert.equal(d.vesselPlacement.zone,zone);assert.equal(d.imageId,image);assert.equal(d.inspiration.publicationId,id);assert.ok(await p.evaluate(id=>LocalStore.getAsset(id).then(x=>x?.size>0),image));await tap('back');await tap('back');await p.locator('.gallery-card').first().waitFor();}
 console.log('PASS all 26 covers, 11 filters, detail and editable remixes');
 await tap('gallery-detail','edition:backpack-scroll');await tap('gallery-inspire');await ready();
 assert.equal(await p.locator('.print-placement-actions,.position-chooser,[data-action=cup-positions]').count(),0);
 assert.equal(await p.locator('.print-zone button').count(),3);
 // The image, name and action share a single native button, including keyboard use.
 await p.locator('.carrier-picker img').click();await p.locator('.carrier-choices').waitFor();await p.keyboard.press('Escape');
 await p.locator('.carrier-picker').focus();await p.keyboard.press('Enter');await p.locator('.carrier-choices').waitFor();await p.keyboard.press('Escape');
 await choose('pocket');assert.equal((await diag()).printEnabled,false);assert.deepEqual((await diag()).printedFaces,['front']);
 await p.locator('[data-position-print]').focus();await p.keyboard.press('Space');await ready();assert.deepEqual((await diag()).printedFaces.sort(),['front','pocket']);
 await setPrint('back',true);assert.ok(Math.cos((await diag()).camera.yaw)<-.8);
 await choose('pocket');assert.ok(Math.cos((await diag()).camera.yaw)>.8);
 await p.screenshot({path:dir+'/'+mode+'-pocket-highlight.png'});
 await p.waitForTimeout(1000);await p.screenshot({path:dir+'/'+mode+'-editor.png'});
 // Tap visible model parts; orbit movement, multi-touch and cancellation never change selection.
 const canvas=p.locator('#editor-cup-host canvas');let box=await canvas.boundingBox();
 await p.touchscreen.tap(box.x+box.width*.5,box.y+box.height*.30);await ready();assert.equal((await diag()).zone,'front','tap upper body selects front');
 await p.touchscreen.tap(box.x+box.width*.5,box.y+box.height*.67);await ready();assert.equal((await diag()).zone,'pocket','tap pocket selects pocket');
 let old=await diag();await p.mouse.move(box.x+box.width*.5,box.y+box.height*.5);await p.mouse.down();await p.mouse.move(box.x+box.width*.7,box.y+box.height*.5,{steps:8});await p.mouse.up();
 assert.equal((await diag()).zone,'pocket');assert.notEqual((await diag()).camera.yaw,old.camera.yaw);
 await choose('pocket');
 // Pinch through the browser touch protocol (real pointer capture and two pointers).
 const cdp=await p.context().newCDPSession(p),touch=(x,y,id)=>({x,y,id,radiusX:1,radiusY:1,force:1});
 const tx=box.x+box.width*.5,ty=box.y+box.height*.35;
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[touch(tx,ty,1)]});await cdp.send('Input.dispatchTouchEvent',{type:'touchCancel',touchPoints:[]});assert.equal((await diag()).zone,'pocket');
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[touch(tx-20,ty,1),touch(tx+20,ty,2)]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[touch(tx-28,ty,1),touch(tx+28,ty,2)]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});assert.equal((await diag()).zone,'pocket');await cdp.detach();
 await tap('editor-gesture','place');assert.ok(Math.cos((await diag()).camera.yaw)>.8);
 const readX=()=>p.evaluate(async()=>{const s=await LocalStore.load();return s.drafts.find(d=>d.id===s.ui.activeDraftId).vesselPlacement.x;});await saved();const before=await readX();box=await canvas.boundingBox();let moved=false;
 for(const y of [.64,.70,.57]){await p.mouse.move(box.x+box.width*.47,box.y+box.height*y);await p.mouse.down();await p.mouse.move(box.x+box.width*.58,box.y+box.height*y,{steps:8});await p.mouse.up();await saved();if(await readX()!==before){moved=true;break;}}assert.ok(moved,'selected pocket responds to pointer drag');assert.equal((await diag()).zone,'pocket');
 await setPrint('back',false);assert.deepEqual((await diag()).printedFaces.sort(),['front','pocket']);await tap('undo');await ready();assert.deepEqual((await diag()).printedFaces.sort(),['back','front','pocket']);await tap('redo');await ready();
 await setPrint('pocket',false);await setPrint('front',false);assert.deepEqual((await diag()).printedFaces,[]);await setPrint('pocket',true);assert.deepEqual((await diag()).printedFaces,['pocket']);
 for(const width of [320,390,430]){await p.setViewportSize({width,height:width===320?568:844});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.waitForTimeout(950);await p.screenshot({path:`${dir}/${mode}-editor-${width}.png`});const bounds=await p.locator('.print-zone button,.current-print,.carrier-picker').evaluateAll(es=>es.map(e=>{const r=e.getBoundingClientRect();return r.height>=44&&r.width>=44&&r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight;}));assert.ok(bounds.every(Boolean));assert.ok((await canvas.boundingBox()).height>=80);}
 await p.setViewportSize({width:390,height:844});await saved();await p.reload();await ready();assert.deepEqual((await diag()).printedFaces,['pocket']);await tap('cup-open');await p.locator('#cup-status[data-state=ready]').waitFor({state:'attached'});assert.ok(await p.locator('[data-position-print]').isChecked());await tap('cup-position-edit','back');assert.equal(await p.locator('#dialog').evaluate(e=>e.open),false);await tap('back');await ready();
 const types=await p.evaluate(()=>Object.keys(Vessels.data).filter(Vessels.available).map(id=>[id,Vessels.get(id).family,Object.keys(Vessels.positions[id])]));
 for(const [type,family,ids]of types){await tap('cup-picker');await tap('cup-family',family);await tap('cup-pick',type);await ready();
  await p.setViewportSize({width:320,height:568});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.ok((await p.locator('.print-zone button').evaluateAll(es=>es.map(e=>e.getBoundingClientRect().width))).every(w=>w>=44));await p.setViewportSize({width:390,height:844});
  for(const id of ids){await setPrint(id,true);
   const full=p.locator('[data-action=cup-coverage][data-id=full]');if(await full.count()){await full.click();await ready();await tap('cup-coverage','custom');await ready();await tap('wb-collapse');await tap('cup-coverage','local');await ready();await tap('wb-collapse');assert.equal(await p.locator('[data-print-position]').getAttribute('data-print-position'),id);}
   await setPrint(id,false);assert.equal((await diag()).printEnabled,false,type+'/'+id);await tap('undo');await ready();assert.equal((await diag()).printEnabled,true);await tap('redo');await ready();assert.equal((await diag()).printEnabled,false);
  }console.log('PASS inline region lifecycle:',type);
 }
 assert.deepEqual(errors,[]);console.log(`PASS ${mode}: model taps, orbit/print drag/pinch/cancel isolation, keyboard, undo/reload, fullscreen, 11 carriers and mobile layouts.`);
 }finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
