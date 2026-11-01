const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');

async function main(){
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true,deviceScaleFactor:1});
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(/shader error|VALIDATE_STATUS false|INVALID_OPERATION/i.test(m.text()))errors.push(m.text());});
  const tap=(action,id)=>page.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
  await page.goto(process.env.QA_URL||'http://127.0.0.1:8879/prototype/index.html');
  await tap('start');await tap('in-continue');
  await page.waitForFunction(()=>document.querySelector('#save-status')?.textContent==='已保存到本机');
  // Fixed orbit for both builds, in an isolated browser context.
  await page.evaluate(async()=>{const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId);d.cupCamera={yaw:.22,pitch:.46,distance:4.8};await LocalStore.commit(s);});
  await page.reload();await tap('editor-surface','object');
  await page.waitForFunction(()=>document.querySelector('#editor-object-status')?.dataset.state==='ready');
  await tap('wb-glaze');
  const version=process.env.BASELINE?'before':'after';
  await page.screenshot({path:'previews/pigment-picker-'+version+'.png'});
  if(!process.env.BASELINE){
   const plane=page.locator('.inline-spectrum .ink-spectrum'),rect=await plane.boundingBox();
   const positions=[[.13,.24],[.46,.53],[.72,.76]];
   const pixels=await page.evaluate(async({png,positions})=>{
    const image=new Image();image.src='data:image/png;base64,'+png;await image.decode();
    const c=document.createElement('canvas');c.width=image.width;c.height=image.height;const ctx=c.getContext('2d');ctx.drawImage(image,0,0);
    return positions.map(([x,y])=>Array.from(ctx.getImageData(Math.floor(x*c.width),Math.floor(y*c.height),1,1).data).slice(0,3));
   },{png:(await plane.screenshot()).toString('base64'),positions});
   const cdp=await page.context().newCDPSession(page);
   for(const [i,[x,y]] of positions.entries()){
    await cdp.send('Input.dispatchTouchEvent',{type:i?'touchMove':'touchStart',touchPoints:[{id:1,x:rect.x+rect.width*x,y:rect.y+rect.height*y}]});
    await page.waitForTimeout(70);
    const selected=await page.evaluate(()=>Cup3D.diagnostics().glaze);
    const rgb=selected.slice(1).match(/../g).map(h=>parseInt(h,16));
    assert.ok(rgb.every((n,k)=>Math.abs(n-pixels[i][k])<=7),JSON.stringify({selected,pixel:pixels[i]}));
    if(i===1){
     assert.equal(await page.locator('.inline-spectrum').getAttribute('data-picking'),'true');
     await page.screenshot({path:'previews/pigment-picker-drag-375.png'});
    }
   }
   await cdp.send('Input.dispatchTouchEvent',{type:'touchCancel',touchPoints:[]});
   assert.equal(await page.locator('.inline-spectrum').getAttribute('data-picking'),null);
  }
  const data=await page.evaluate(async()=>{
   const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId);
   const cases=[['ivory','white'],['celadon','#87af9b'],['blue','#347aab']];
   const images=[];
   const shot=async next=>{
    const bmp=await createImageBitmap(await Cup3D.capture(next)),c=document.createElement('canvas');
    c.width=bmp.width;c.height=bmp.height;const g=c.getContext('2d');g.drawImage(bmp,0,0);bmp.close();
    return {c,data:g.getImageData(0,0,c.width,c.height).data};
   };
   for(const [name,color] of cases){
    const next={...d,cupMaterial:{color,finish:'gloss'}};
    const {data:bare}=await shot({...next,patternOpacity:0});
    const {c,data:ink}=await shot(next);
    let contrast=0,area=0;
    for(let i=0;i<bare.length;i+=4){
     const change=Math.max(...[0,1,2].map(k=>Math.abs(ink[i+k]-bare[i+k])));
     if(change>15){area++;contrast+=change;}
    }
    images.push({name,color,area,contrast:Math.round(contrast/Math.max(area,1)),img:c.toDataURL().split(',')[1]});
   }
   return images;
  });
  for(const {img,...stats} of data){
   fs.writeFileSync('previews/enamel-study-'+version+'-'+stats.name+'.png',Buffer.from(img,'base64'));
   assert.ok(stats.area>2000,JSON.stringify(stats));console.log(stats);
  }
  assert.deepEqual(errors,[]);
 }finally{await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1});
