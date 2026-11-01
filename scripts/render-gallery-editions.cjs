/* Re-render the gallery's original project designs with the actual workbench materials. */
const fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:840,height:840},deviceScaleFactor:1});
  await page.goto((process.env.PREVIEW_URL||'http://127.0.0.1:8879')+'/prototype/index.html');
  await page.waitForFunction(()=>window.Cup3D&&window.GalleryEditions&&document.querySelector('.enamel-home'));
  await page.addStyleTag({content:'html,body{background:transparent!important}.app{visibility:hidden}#edition-stage{position:fixed;inset:0;width:840px;height:840px;}#edition-stage canvas{display:block;width:100%;height:100%}'});
  const requested=process.argv.slice(2);
  const keys=await page.evaluate(()=>GalleryEditions.filter(p=>!p.sourceWorkId).map(p=>p.coverKey));
  for(const key of keys){
   if(requested.length&&!requested.includes(key))continue;
   await page.evaluate(async key=>{
    const p=GalleryEditions.find(p=>p.coverKey===key),d=Studio.normalizeRecord(Studio.copy(p.snapshot)),part=d.provenance.parts[0];
    const res=await fetch(EnamelArt.photoUrl(part.fileKey));if(!res.ok)throw Error(part.fileKey);
    await LocalStore.saveImage(await res.blob(),part.assetId);
    const host=document.querySelector('#edition-stage')||document.body.appendChild(document.createElement('div'));host.id='edition-stage';
    await new Promise((ok,fail)=>Cup3D.mount(host,d,()=>{},(s,m)=>{if(s==='ready')ok();if(s==='fallback'||s==='error')fail(Error(m));}));
    await new Promise(ok=>requestAnimationFrame(()=>requestAnimationFrame(ok)));
   },key);
   const shot=await page.locator('#edition-stage').screenshot({omitBackground:true});
   const base64=await page.evaluate(async src=>{
    const img=await createImageBitmap(await (await fetch('data:image/png;base64,'+src)).blob());
    const c=document.createElement('canvas');c.width=img.width;c.height=img.height;
    const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(img,0,0);
    const frame=ctx.getImageData(0,0,c.width,c.height),data=frame.data;let x0=c.width,y0=c.height,x1=0,y1=0;
    for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++)if(data[(y*c.width+x)*4+3]>180){x0=Math.min(x,x0);x1=Math.max(x,x1);y0=Math.min(y,y0);y1=Math.max(y,y1);}
    if(x1-x0<100||x0<2||y0<2||x1>c.width-3||y1>c.height-3)throw Error('Invalid gallery framing');
    // The scene's broad floor shadow belongs to its viewport. Keep the antialiased silhouette for a transparent mount.
    const stride=frame.width;
    for(let y=1;y<frame.height-1;y++)for(let x=1;x<stride-1;x++){
     const a=4*(y*stride+x)+3;
     if(data[a]&&data[a]<180&&![a-4,a+4,a-4*stride,a+4*stride].some(i=>data[i]>=180))data[a]=0;
    }
    const pad=Math.ceil((x1-x0)*.055);c.width=x1-x0+2*pad;c.height=y1-y0+2*pad;ctx.putImageData(frame,pad-x0,pad-y0);img.close();
    return c.toDataURL('image/webp',.94).split(',')[1];
   },shot.toString('base64'));
   fs.writeFileSync(path.resolve(__dirname,'../prototype/media/enamel',key+'.webp'),Buffer.from(base64,'base64'));console.log(key);
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
