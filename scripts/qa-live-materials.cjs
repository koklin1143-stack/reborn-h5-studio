/* Manual opt-in with project-drawn fixtures. A sketch makes two paid image calls. */
const fs=require('node:fs'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const dirs=['sketch','image','text'];
const methods=process.argv.slice(3);
if(process.argv[2]!=='--live'||!methods.length||new Set(methods).size!==methods.length||methods.some(m=>!dirs.includes(m))){
 console.error('Specify --live and the test methods. Sketch makes two real images, image/text one.');process.exit(2);
}
const fishPrint=process.env.QA_SERIES==='fish-print';
const redesign=process.env.QA_SERIES==='fish-redesign';
const study=process.env.QA_SERIES==='ornament';
const inkStudy=['ink-before','ink-after'].includes(process.env.QA_SERIES);
const poseStudy=inkStudy||['gesture-low','gesture-sit'].includes(process.env.QA_SERIES);
const sitting=process.env.QA_SERIES==='gesture-sit';
const dog=(poseStudy||process.env.QA_SERIES==='rough-dog')&&methods.length===1&&methods[0]==='sketch';
const folder=redesign?'previews/fish-redesign':fishPrint?'previews/fish-print':inkStudy?'previews/handline/'+process.env.QA_SERIES:poseStudy?'previews/sketch-gesture/'+(sitting?'sit':'low'):dog?'previews/sketch-redesign':study?'previews/pattern-rules':'previews/ai-materials';
async function fish(page, context){
 const pad=page.locator('#sketch-pad');await pad.scrollIntoViewIfNeeded();const r=await pad.boundingBox();
 const cdp=await context.newCDPSession(page);
 const fishStrokes=[
  [[.28,.5],[.35,.38],[.46,.31],[.58,.31],[.68,.38],[.77,.48],[.72,.56],[.61,.65],[.47,.68],[.36,.62],[.28,.5]],
  [[.28,.5],[.15,.34],[.16,.68],[.28,.5]],
  [[.43,.33],[.40,.18],[.56,.30]],[[.49,.52],[.46,.61],[.56,.54]],[[.65,.43],[.66,.44]]
 ];
 const fruit=(cx,cy,rx,ry)=>Array.from({length:21},(_,i)=>{
  const a=(i/20)*2*Math.PI;return [cx+rx*Math.cos(a),cy+ry*Math.sin(a)];});
 const cherryStrokes=[fruit(.37,.64,.085,.12),fruit(.64,.7,.095,.13),
  [[.38,.55],[.43,.45],[.5,.32],[.55,.18]],[[.64,.60],[.65,.48],[.61,.31],[.55,.18]],
  [[.55,.18],[.62,.13],[.74,.13],[.69,.20],[.62,.23],[.55,.18]]];
 // Loose side view. Open lines, legs of uneven length, one long stick tail, no written hint.
 const dogStrokes=[
  [[.09,.45],[.105,.42],[.17,.40],[.206,.36],[.21,.29],[.197,.17],[.276,.289],[.287,.243],[.30,.34]],
  [[.30,.34],[.337,.41],[.38,.42],[.56,.39],[.69,.41],[.718,.45],[.737,.51],[.718,.58],[.62,.59],[.45,.58],[.34,.60],[.30,.55],[.25,.49],[.218,.47],[.158,.51],[.105,.49],[.09,.45]],
  [[.332,.573],[.342,.682],[.327,.807],[.36,.81]],[[.411,.59],[.4,.735],[.423,.744]],
  [[.645,.589],[.60,.68],[.626,.802],[.661,.795]],[[.696,.58],[.738,.684],[.75,.759]],
  [[.719,.46],[.775,.447],[.817,.421],[.857,.371],[.894,.351]],[[.205,.372],[.209,.377]],[[.092,.442],[.12,.445],[.1,.452]]
 ];
 // Same subject and facing. This dog leans back on its haunch, lifts its nose and curves its tail upward.
 const sittingStrokes=[
  [[.19,.23],[.175,.185],[.195,.168],[.23,.185],[.286,.24],[.321,.219],[.355,.229],[.392,.253],[.416,.309]],
  [[.19,.23],[.216,.288],[.257,.34],[.291,.361],[.32,.365],[.333,.399],[.358,.487],[.372,.561],[.385,.641],[.391,.747],[.381,.804],[.349,.821],[.338,.852],[.419,.856],[.443,.831],[.45,.729]],
  [[.416,.309],[.44,.371],[.47,.423],[.519,.491],[.557,.551],[.601,.63],[.62,.706],[.615,.764],[.595,.81],[.57,.834],[.475,.854],[.42,.848]],
  [[.508,.635],[.477,.66],[.45,.71],[.462,.757],[.492,.783],[.469,.809],[.433,.822]],
  [[.603,.79],[.665,.791],[.716,.755],[.742,.699],[.739,.637],[.716,.597],[.682,.586],[.658,.617],[.663,.658]],
  [[.395,.27],[.441,.306],[.459,.375],[.431,.392],[.394,.348],[.384,.31]],
  [[.307,.268],[.313,.27]],[[.18,.19],[.191,.195]]
 ];
 if(inkStudy) {
  dogStrokes[0]=[[.09,.45],[.105,.42],[.13,.409],[.149,.416],[.17,.40],[.195,.382],[.206,.36],[.207,.299],[.195,.248],[.199,.213],[.184,.134],[.202,.149],[.224,.211],[.24,.226],[.253,.266],[.278,.29],[.29,.245],[.305,.222],[.30,.34]];
  dogStrokes[1].splice(0,5,[.315,.356],[.35,.409],[.38,.408],[.40,.392],[.43,.41],[.45,.398],[.47,.412],[.51,.4],[.55,.414],[.58,.401],[.63,.414],[.665,.402],[.695,.427]);
  dogStrokes[2]=[[.332,.573],[.34,.618],[.328,.658],[.344,.68],[.336,.732],[.34,.758],[.327,.81],[.36,.81]];
  dogStrokes.push([[.21,.213],[.228,.245],[.226,.252],[.242,.269]],[[.292,.445],[.32,.477]],[[.294,.461],[.309,.489]]);
 }
 for(const stroke of sitting?sittingStrokes:dog?dogStrokes:study?cherryStrokes:fishStrokes){
  for(const [i,[x,y]] of stroke.entries())await cdp.send('Input.dispatchTouchEvent',{type:i?'touchMove':'touchStart',touchPoints:[{x:r.x+r.width*x,y:r.y+r.height*y}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
 }
}
(async()=>{
 fs.mkdirSync(folder,{recursive:true});
 const browser=await chromium.launch({channel:'msedge'});
 try{
  for(const method of methods){
   const context=await browser.newContext({viewport:{width:method==='text'||sitting?390:375,height:method==='text'||sitting?844:812},isMobile:true,hasTouch:true});
   try{
    const page=await context.newPage();
    // Revisit the archived, genuinely generated proof to check a new colour treatment.
    const reuseForm=(fishPrint||dog&&(!poseStudy||process.env.QA_SERIES==='ink-after'))&&process.env.QA_REUSE_FORM==='1';
    if(reuseForm)await page.route('**/api/pattern',route=>{
     if(route.request().postDataJSON().stage!=='shape')return route.continue();
     return route.fulfill({json:{stage:'shape',ruleVersion:require('../prototype/pattern-grammar.js').version,
      planner:'qwen3.6-flash',identity:JSON.parse(fs.readFileSync(folder+'/sketch-identity.json','utf8')),
      png:fs.readFileSync(folder+'/sketch-form.png').toString('base64')}});
    });
    const tap=(action,id)=>page.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
    await page.goto('http://127.0.0.1:8879/index.html#discover');
    await tap('choose-start');await tap('start-method',method);
    if(method==='sketch'){await fish(page,context);if(process.env.QA_SKETCH_SUBJECT)await page.locator('#sketch-subject').fill(process.env.QA_SKETCH_SUBJECT);}
    if(method==='image'){
     await page.locator('#inspiration-file').setInputFiles(study?folder+'/input-cherries.jpg':'previews/print-transfer/test-input.png');
     await page.locator('dialog[open] #input-image-consent').check();await tap('in-upload-confirm');await page.locator('dialog[open]').waitFor({state:'hidden'});await page.locator('.input-content .input-preview').waitFor();
    }
    if(method==='text')await page.locator('#inspiration-prompt').fill(study?'两枚樱桃共用一枝果梗，一高一低，叶片顺枝梗回转，留出一弯月牙形的空地。':'两只相向的小燕子围着一枝玉兰，朱红花蕊、钴蓝羽毛和灰绿叶片，横向团花。');
    await require('./qa-print-style-helper.cjs').pickReference(page,study||method==='image'?'enamel-peony':'enamel-magpie');
    await page.locator('.input-footer .primary[data-action=in-ai]').waitFor();
    let posted=0;
    page.on('request',req=>{
     if(req.method()!=='POST'||new URL(req.url()).pathname!=='/api/pattern')return;
     posted++;const payload=req.postDataJSON();
     if(poseStudy&&payload.stage==='shape'){
      assert.notEqual(payload.gestureImage,payload.image);
      fs.writeFileSync(folder+'/gesture-guide.png',Buffer.from(payload.gestureImage.split(',')[1],'base64'));
     }
    });
    const name=method==='sketch'&&process.env.QA_SKETCH_SUBJECT?'sketch-guided':method;
   await page.screenshot({path:folder+'/'+name+'-input.png'});
    // Replay the same legacy pen in both runs (same coordinates and original bitmap).
    if(inkStudy&&process.env.QA_SERIES==='ink-after'){
     const strokes=JSON.parse(fs.readFileSync('previews/handline/ink-before/strokes.json','utf8'));
     await page.evaluate(async strokes=>{const st=await LocalStore.load(),d=st.drafts.find(x=>x.id===st.ui.activeDraftId);d.sketchStrokes=strokes;d.sketchAssetId=null;await LocalStore.commit(st);},strokes);
     await page.reload();await page.locator('#sketch-pad').waitFor();
    }
    if(dog||fishPrint||redesign)await page.locator('#sketch-pad').screenshot({path:folder+'/rough-sketch.png'});
    await tap('in-ai');assert.equal(posted,0);
    if(redesign){
     await page.getByText('搪瓷式重绘',{exact:true}).click();
     for(const [width,height] of [[320,640],[390,844],[375,812]]){
      await page.setViewportSize({width,height});
      assert.ok(await page.locator('input[value=redesign]').isChecked());
      for(const label of ['聚成一簇','围成一团','排成一带'])await page.getByText(label,{exact:true}).click();
      await page.getByText('聚成一簇',{exact:true}).click();
      await page.locator('[data-action=in-ai-confirm]').click({trial:true});
      assert.ok(await page.locator('dialog').evaluate(el=>el.scrollWidth<=el.clientWidth+1));
     }
     assert.equal(posted,0);
    }
    if(study)await page.locator('label').filter({has:page.locator('input[name=pattern-layout][value=sprig]')}).click();
    await page.locator('dialog').evaluate(el=>Promise.allSettled(el.getAnimations({subtree:true}).map(a=>a.finished)));await page.screenshot({path:folder+'/'+name+'-brief.png',animations:'disabled'});
    const network=page.waitForResponse(r=>r.request().method()==='POST'&&new URL(r.url()).pathname==='/api/pattern',{timeout:285000});
    await tap('in-ai-confirm');const response=await network;assert.equal(response.status(),200,await (response.status()===200?Promise.resolve(''):response.text()));
    if(method==='sketch'){
     await page.locator('[data-ai-state=shape]').waitFor({timeout:25000});
     const form=await page.evaluate(async()=>{const state=await LocalStore.load(),d=state.drafts.find(x=>x.id===state.ui.activeDraftId);
      const blob=await LocalStore.getAsset(d.sketchForm.assetId);const reader=new FileReader();
      const png=await new Promise(ok=>{reader.onload=()=>ok(reader.result.split(',')[1]);reader.readAsDataURL(blob)});
      return {id:d.sketchForm.assetId,identity:d.sketchForm.identity,png};});
     fs.writeFileSync(folder+'/'+name+'-form.png',Buffer.from(form.png,'base64'));
     fs.writeFileSync(folder+'/'+name+'-identity.json',JSON.stringify(form.identity,null,2));
     if(inkStudy){
      const original=await page.evaluate(async()=>{const st=await LocalStore.load(),d=st.drafts.find(x=>x.id===st.ui.activeDraftId),blob=await LocalStore.getAsset(d.sketchAssetId);const f=new FileReader();const png=await new Promise(ok=>{f.onload=()=>ok(f.result.split(',')[1]);f.readAsDataURL(blob)});return {strokes:d.sketchStrokes,png};});
      fs.writeFileSync(folder+'/original.png',Buffer.from(original.png,'base64'));
      if(process.env.QA_SERIES==='ink-before')fs.writeFileSync(folder+'/strokes.json',JSON.stringify(original.strokes));
      else assert.deepEqual(fs.readFileSync(folder+'/original.png'),fs.readFileSync('previews/handline/ink-before/original.png'));
     }
     console.log('Recognized:',form.identity.subject);
     if(dog)assert.match(form.identity.subject,/狗|犬/);
     if(fishPrint||redesign)assert.match(form.identity.subject,/鱼|魚/);
     if(poseStudy)assert.ok(form.identity.gesture?.axis);
     await page.reload();await page.locator('[data-ai-state=shape]').waitFor();assert.equal(posted,1);
     if(poseStudy){
      await tap('in-compare-form');assert.equal(await page.locator('#sketch-form-view').getAttribute('alt'),'我的原草图');
      await tap('in-compare-form');assert.match(await page.locator('#sketch-form-view').getAttribute('alt'),/素形/);
      assert.equal(posted,1);
     }
     await page.screenshot({path:folder+'/'+name+'-review-'+(sitting?'390':'375')+'.png'});
     const finished=page.waitForResponse(r=>r.request().method()==='POST'&&new URL(r.url()).pathname==='/api/pattern',{timeout:285000});
     await tap('in-decorate');const second=await finished;
     assert.equal(second.status(),200,await (second.ok()?Promise.resolve(''):second.text()));
    }
    await page.locator('.transfer-preview[data-ai-state=success]').waitFor({timeout:25000});
    const result=await page.evaluate(async()=>{
     const state=await LocalStore.load(),d=state.drafts.find(d=>d.id===state.ui.activeDraftId),r=d.patternConversion;
     const blob=await LocalStore.getAsset(r.assetId);
     const data=await new Promise(resolve=>{const f=new FileReader();f.onload=()=>resolve(f.result.split(',')[1]);f.readAsDataURL(blob);});
     return {ai:r.aiGenerated,method:r.method,engine:r.engine,id:r.assetId,recipe:r.recipe,data};
    });
    assert.equal(posted,method==='sketch'?2:1);assert.equal(result.method,method);assert.equal(result.engine,'qwen-image-2.1-turbo');assert.equal(result.ai,true);
    assert.equal(result.recipe.version,require('../prototype/pattern-grammar.js').version);
    if(redesign)assert.equal(result.recipe.sketchMode,'redesign');
    if(study){assert.equal(result.recipe.reference,'motif:enamel-peony');assert.equal(result.recipe.layout,'sprig');assert.ok(result.recipe.design?.traits.length===2);fs.writeFileSync(folder+'/'+name+'-plan.json',JSON.stringify(result.recipe,null,2));}
    fs.writeFileSync(folder+'/'+name+'-ai.png',Buffer.from(result.data,'base64'));
    await tap('in-continue');await page.waitForURL(/#editor/);await page.reload();await page.locator('#work-preview').waitFor();
    const saved=await page.evaluate(async()=>{const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId);return d.imageId;});
    assert.equal(saved,result.id);console.log(method+': '+(reuseForm?'saved proof and one live colour request':posted+' live pattern requests')+', editor and reload passed');
   }finally{await context.close();}
  }
 }finally{await browser.close();}
})().catch(error=>{console.error(error.message);process.exitCode=1;});
