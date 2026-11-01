/* No cloud calls. Check the pad, pen pressure, erasing, undo and stored paths. */
const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge'});
 try{
  for(const width of [375,390]){
   const isPen=width===375;
   const context=await browser.newContext({viewport:{width,height:812},isMobile:true,hasTouch:true});
   const page=await context.newPage(),cdp=await context.newCDPSession(page);
   const tap=(action,id)=>page.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
   await page.goto('http://127.0.0.1:8879/index.html#discover');
   await tap('choose-start');await tap('start-method','sketch');
   const pad=page.locator('#sketch-pad');await pad.scrollIntoViewIfNeeded();
   const box=await pad.boundingBox();
   async function draw(points){
    for(const [i,[x,y,force]] of points.entries()){
     const loc={x:box.x+x*box.width,y:box.y+y*box.height};
     if(isPen)await cdp.send('Input.dispatchMouseEvent',{type:i?'mouseMoved':'mousePressed',pointerType:'pen',button:'left',buttons:1,clickCount:i?0:1,force,...loc});
     else await cdp.send('Input.dispatchTouchEvent',{type:i?'touchMove':'touchStart',touchPoints:[{...loc,force:.5}]});
    }
    const [x,y]=points.at(-1);
    if(isPen)await cdp.send('Input.dispatchMouseEvent',{type:'mouseReleased',pointerType:'pen',button:'left',buttons:0,x:box.x+x*box.width,y:box.y+y*box.height});
    else await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
   }
   const signature=()=>pad.evaluate(async c=>{const pixels=c.getContext('2d').getImageData(0,0,c.width,c.height).data;return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',pixels))).join('.');});
   await draw(Array.from({length:71},(_,i)=>[.15+i*.01,.45,i<32?.12:.92]));
   const before=await signature();
   const widths=await pad.evaluate(c=>[190,450].map(x=>{const data=c.getContext('2d').getImageData(x,0,1,c.height).data;let n=0;for(let i=3;i<data.length;i+=4)if(data[i]>100)n++;return n;}));
   assert.ok(widths.every(x=>x>0));
   if(isPen)assert.ok(widths[1]>widths[0],JSON.stringify(widths));
   await tap('in-brush','eraser');await draw([[.5,.41,.5],[.5,.48,.5]]);
   assert.notEqual(await signature(),before);
   await tap('in-sketch-undo');assert.equal(await signature(),before,'undo pixel signature');
   await page.waitForFunction(async()=>{const s=await LocalStore.load(),d=s.drafts.find(x=>x.id===s.ui.activeDraftId);return d?.sketchStrokes?.length===1&&d.sketchStrokes[0].ink==='handline-v1'});
   const ink=()=>pad.evaluate(c=>Array.from(c.getContext('2d').getImageData(0,0,c.width,c.height).data.filter((_,i)=>i%4===3)));
   const savedPixels=await ink();
   await page.reload();await pad.waitFor();
   const recovered=await ink();
   let mass=0,difference=0;
   for(let i=0;i<savedPixels.length;i++){mass+=savedPixels[i];difference+=Math.abs(savedPixels[i]-recovered[i]);}
   assert.ok(difference/mass<.015,'reload ink difference '+difference/mass);
   console.log(width+'px '+(isPen?'pen':'touch')+' widths '+widths+'; erase, undo and reload passed.');
   await context.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
