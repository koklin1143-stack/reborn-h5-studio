const {PNG}=require('pngjs');
const {enclosedRegions,regionDistance}=require('./sketch-ink-guide.cjs');
const {linePlate}=require('../prototype/pattern-grammar.js');

// Smooth a mask at study resolution. Soft values are used only to locate the
// contour: the finished plate has hard ink, rounded ends and antialiased edges.
function smooth(mask,size,passes){
  let src=Float32Array.from(mask),dst=new Float32Array(mask.length);
  for(let pass=0;pass<passes;pass++)for(const step of [1,size]){
    for(let y=2;y<size-2;y++)for(let x=2;x<size-2;x++){
      const i=y*size+x;
      dst[i]=(src[i-step*2]+4*src[i-step]+6*src[i]+4*src[i+step]+src[i+step*2])/16;
    }
    [src,dst]=[dst,src];
  }
  return src;
}
function roundLineStudy(field){
  if(!field)return null;
  const {size,d}=field,fill=new Uint8Array(d.length),parts=[];
  // A foot may close before a broad body with an open end. Accumulate the
  // actual compartments across gap sizes; skip curls, eye dots and hatching.
  for(const radius of [1,2,3,4,5,6]){
    const regions=enclosedRegions(d,radius);
    if(regions.length>16)return null;
    for(const reg of regions){
      if(reg.points.length<38||reg.points.some(i=>fill[i]))continue;
      const dist=regionDistance(reg);parts.push({points:reg.points,dist,radius});
      for(let i=0;i<fill.length;i++)if(dist[i]<=radius)fill[i]=1;
    }
  }
  if(parts.length<3||parts.length>14)return null;
  const largest=parts.reduce((a,b)=>a.points.length>b.points.length?a:b);
  if(largest.points.length<260)return null;
  const joined=new Set([largest]);
  for(const a of joined)for(const b of parts){
    if(!joined.has(b)&&b.points.some(i=>a.dist[i]<=a.radius+b.radius+10))joined.add(b);
  }
  if(joined.size!==parts.length)return null;
  const pen=smooth(d.map(v=>v<=1?1:0),size,2);
  const face=smooth(fill,size,4);
  const channel=smooth(d.map(v=>v<=3?1:0),size,2);
  const rgb=linePlate.ink.slice(1).match(/../g).map(v=>parseInt(v,16));
  const out=new PNG({width:size*2,height:size*2});
  function sample(layer,x,y){
    const ix=Math.floor(x),iy=Math.floor(y),dx=x-ix,dy=y-iy,i=iy*size+ix;
    return (layer[i]*(1-dx)+layer[i+1]*dx)*(1-dy)+(layer[i+size]*(1-dx)+layer[i+size+1]*dx)*dy;
  }
  out.data.fill(255);
  for(let y=2;y<out.height-2;y++)for(let x=2;x<out.width-2;x++){
    const u=x/2-.25,v=y/2-.25,stroke=(sample(pen,u,v)-.52)*8;
    const mass=Math.min((sample(face,u,v)-.45)*8,(.57-sample(channel,u,v))*8);
    const coverage=Math.min(1,Math.max(0,stroke,mass)),i=(y*out.width+x)*4;
    for(let k=0;k<3;k++)out.data[i+k]=255-(255-rgb[k])*coverage;
  }
  return 'data:image/png;base64,'+PNG.sync.write(out).toString('base64');
}

// Follow both sides of each printed stroke (including the inside of a loop).
// Smoothing along those paths rounds a corner without blurring across a white cut.
function fairContours(png){
  const {width:w,height:h,data}=png,stride=w+1;
  if(Math.min(w,h)<96||w*h>1536*1536)return;
  const edges=new Map();
  function add(a,b){const next=edges.get(a);if(next)next.push(b);else edges.set(a,[b]);}
  let minX=w,maxX=0,minY=h,maxY=0;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const k=(y*w+x)*4+3;if(data[k]<128)continue;
    const a=y*stride+x;
    if(!y||data[k-4*w]<128)add(a,a+1);
    if(x===w-1||data[k+4]<128)add(a+1,a+stride+1);
    if(y===h-1||data[k+4*w]<128)add(a+stride+1,a+stride);
    if(!x||data[k-4]<128)add(a+stride,a);
    minX=Math.min(x,minX);maxX=Math.max(x,maxX);minY=Math.min(y,minY);maxY=Math.max(y,maxY);
    if(edges.size>80000)return;
  }
  if(!edges.size)return;
  const span=Math.max(maxX-minX,maxY-minY),sub=4;
  const rows=Array.from({length:h*sub},()=>[]);
  function edge(a,b){
    if(a[1]>b[1])[a,b]=[b,a];
    for(let row=Math.ceil(a[1]*sub-.5);row<b[1]*sub-.5;row++){
      const y=(row+.5)/sub;
      if(row>=0&&row<rows.length)rows[row].push(a[0]+(y-a[1])*(b[0]-a[0])/(b[1]-a[1]));
    }
  }
  // Use a single live iterator: restarting Map.keys() for every tiny mark
  // would repeatedly traverse the deleted edges on a textured return.
  for(const start of edges.keys())while(edges.has(start)){
    const loop=[];let id=start;
    do{
      loop.push([id%stride,Math.floor(id/stride)]);
      const next=edges.get(id),v=next.pop();if(!next.length)edges.delete(id);id=v;
    }while(id!==start);
    const n=loop.length,rad=Math.min(Math.round(span*.034),Math.floor(n/16),42);
    const points=[];
    for(let i=0;i<n;i+=rad>2?2:1){
      let x=0,y=0;
      for(let j=-rad;j<=rad;j++){const p=loop[(i+j+n)%n],weight=rad+1-Math.abs(j);x+=p[0]*weight;y+=p[1]*weight;}
      const [px,py]=loop[i],sum=(rad+1)**2,dx=x/sum-px,dy=y/sum-py;
      const gain=Math.min(1,span*.009/(Math.hypot(dx,dy)||1));
      points.push([px+gain*dx,py+gain*dy]);
    }
    for(let i=0;i<points.length;i++)edge(points[i],points[(i+1)%points.length]);
  }
  const coverage=new Uint16Array(w*h);
  for(let r=0;r<rows.length;r++){
    const xs=rows[r].sort((a,b)=>a-b),base=Math.floor(r/sub)*w;
    for(let j=1;j<xs.length;j+=2){
      const l=xs[j-1],right=xs[j];
      for(let x=Math.max(0,Math.floor(l));x<Math.min(w,right);x++)
        coverage[base+x]+=Math.round(64*(Math.min(x+1,right)-Math.max(x,l)));
    }
  }
  for(let i=0;i<coverage.length;i++)data[4*i+3]=Math.min(255,coverage[i]);
}
// The image model supplies the finished drawing. Quantize its single ink
// and let the substrate show through the cuts, including *enclosed* ones.
function separateLineInk(bytes,hex){
  if(bytes.length<33||bytes.readUInt32BE(16)*bytes.readUInt32BE(20)>4096*4096)throw Error('Invalid print dimensions');
  const png=PNG.sync.read(bytes),p=png.data,rgb=hex.slice(1).match(/../g).map(x=>parseInt(x,16));
  for(let i=0;i<p.length;i+=4){
    const depth=1-Math.min(p[i],p[i+1],p[i+2])/255;
    const a=Math.round(p[i+3]*Math.min(1,Math.max(0,(depth-.22)/.42)));
    p[i+3]=a;
  }
  fairContours(png);
  for(let i=0;i<p.length;i+=4)for(let k=0;k<3;k++)p[i+k]=p[i+3]?rgb[k]:0;
  return PNG.sync.write(png);
}
module.exports={roundLineStudy,separateLineInk};
