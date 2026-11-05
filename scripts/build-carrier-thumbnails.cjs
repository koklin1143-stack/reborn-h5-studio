// Run against a local built site after build:cup + build. No user storage is touched.
const fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{const browser=await chromium.launch({channel:'msedge'});try{
 const page=await browser.newPage({viewport:{width:640,height:640}});
 await page.goto((process.env.QA_URL||'http://127.0.0.1:8881/index.html')+'#mine');
 await page.waitForFunction(()=>window.WorkResult&&window.LocalStore);
 fs.mkdirSync('prototype/media/carriers',{recursive:true});
 for(const id of ['cup','plate','bowl','basin','cushion','pillow','duvet','backpack','tote']){
  const bytes=await page.evaluate(async type=>{
   const s=await LocalStore.load(),d=Studio.copy(Studio.addDraft(s,'enamel-peony'));Studio.switchVessel(d,type);d.cupMaterial=Vessels.material(type);d.cupCamera=Vessels.get(type).camera;d.cupPreviewMode='three';
   const original=PatternTexture.export,blank=document.createElement('canvas');blank.width=blank.height=32;
   const empty=await new Promise(resolve=>blank.toBlob(resolve));PatternTexture.export=async()=>({blob:empty});
   const viewer=Cup3D.createViewer(),host=document.createElement('div');host.style.cssText='position:fixed;inset:0;width:640px;height:640px';document.body.append(host);
   try{await new Promise((resolve,reject)=>viewer.mount(host,d,()=>{},(state,message)=>{if(state==='ready')resolve();if(['error','fallback'].includes(state))reject(Error(message+' '+viewer.diagnostics()?.error));},{force:true}));
    const image=await createImageBitmap(await viewer.capture(d,{transparent:true}));const canvas=document.createElement('canvas');canvas.width=canvas.height=320;canvas.getContext('2d').drawImage(image,0,0,320,320);image.close();
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/webp',.91));return Array.from(new Uint8Array(await blob.arrayBuffer()));
   }finally{viewer.dispose();host.remove();PatternTexture.export=original;}
  },id);fs.writeFileSync('prototype/media/carriers/'+id+'.webp',Buffer.from(bytes));console.log(id,bytes.length);
 }
 }finally{await browser.close();}})().catch(error=>{console.error(error);process.exitCode=1;});
