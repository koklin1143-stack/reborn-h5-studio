const fs=require('node:fs'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{const b=await chromium.launch({channel:'msedge'});try{
 const p=await b.newPage({viewport:{width:640,height:640}}),errors=[],base=process.env.QA_URL||'http://127.0.0.1:8879/index.html',dir='work/qa/carriers-v6';fs.mkdirSync(dir,{recursive:true});
 p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});await p.route('**/favicon.ico',r=>r.fulfill({status:204}));await p.goto(base+'#mine');await p.locator('.mine-example').first().waitFor();
 for(const type of ['notebook','phonecase','backpack'])for(const [view,yaw,pitch,zone]of [['front',.23,.15,'front'],['side',1.25,.22,'front'],['inside',Math.PI+.4,.3,type==='phonecase'?'front':'back'],['full',.25,.18,'frontFill']]){
  const result=await p.evaluate(async({type,yaw,pitch,zone})=>{
   const s=await LocalStore.load(),d=Studio.addDraft(s,'enamel-peony');Studio.switchVessel(d,type);Studio.edit(d,Vessels.zonePatch(d,zone));d.cupCamera={...Vessels.get(type).camera,yaw,pitch};d.cupMaterial.color=type==='backpack'?'#b4b9ad':type==='phonecase'?'#a8bbaf':'#e5ddd0';
   const viewer=Cup3D.createViewer(),host=document.createElement('div');host.style.cssText='position:fixed;inset:0;width:640px;height:640px';document.body.append(host);
   try{await new Promise((ok,no)=>viewer.mount(host,d,()=>{},(state,msg)=>{if(state==='ready')ok();if(['fallback','error'].includes(state))no(Error(msg));},{force:true}));return {data:Array.from(new Uint8Array(await(await viewer.capture(d)).arrayBuffer())),diag:viewer.diagnostics()};}finally{viewer.dispose();host.remove();}
  },{type,yaw,pitch,zone});assert.equal(result.diag.vesselType,type);fs.writeFileSync(`${dir}/${type}-${view}.png`,Buffer.from(result.data));
 }
 for(const type of ['notebook','phonecase']){const out=await p.evaluate(async type=>{const d=Studio.fresh();Studio.switchVessel(d,type);const blob=await WorkResult.staticPreview(d,{transparent:true});return Array.from(new Uint8Array(await blob.arrayBuffer()));},type);assert.ok(out.length>2500);fs.writeFileSync(`${dir}/${type}-static.png`,Buffer.from(out));}
 assert.deepEqual(errors,[]);console.log('PASS new carrier WebGL front/side/back/full print and static raster exports.');
 }finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
