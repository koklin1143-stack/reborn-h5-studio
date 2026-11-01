// A conservative image-space registration for monochrome single motifs.
// Compare against actual drawn strokes on an isotropic grid; preserve the
// original print if the proposed displacement does not improve both checks.
const {PNG}=require('pngjs');
const size=192,span=160,step=12;
function geometry(w,h,at){
  let l=w,r=-1,t=h,b=-1;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(at(x,y)){l=Math.min(l,x);r=Math.max(r,x);t=Math.min(t,y);b=Math.max(b,y);}
  if(r<=l||b<=t)return null;
  return {x:(l+r)/2,y:(t+b)/2,scale:span/Math.max(r-l,b-t)};
}
function normalise(w,h,at,g){
  const m=new Uint8Array(size*size);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(at(x,y)){
    const u=Math.round((x-g.x)*g.scale+96),v=Math.round((y-g.y)*g.scale+96);m[v*size+u]=1;
  }
  return m;
}
function edgeDistance(mask){
  const d=new Uint16Array(mask.length).fill(2000);
  for(let i=size+1;i<d.length-size-1;i++)if(mask[i]&&(!mask[i-1]||!mask[i+1]||!mask[i-size]||!mask[i+size]))d[i]=0;
  for(let i=size+1;i<d.length-size-1;i++)d[i]=Math.min(d[i],d[i-1]+3,d[i-size]+3,d[i-size-1]+4,d[i-size+1]+4);
  for(let i=d.length-size-2;i>size;i--)d[i]=Math.min(d[i],d[i+1]+3,d[i+size]+3,d[i+size+1]+4,d[i+size-1]+4);
  return d;
}
function measure(strokes,d){
  const values=strokes.map(i=>d[i]).sort((a,b)=>a-b);
  return {p90:values[Math.floor(values.length*.9)]/(3*span),mean:values.reduce((s,v)=>s+v,0)/(3*span*values.length)};
}
function registerSketch(field,bytes){
  if(!field||bytes.length<33||bytes.readUInt32BE(16)*bytes.readUInt32BE(20)>1536**2)return null;
  const png=PNG.sync.read(bytes),p=png.data,w=png.width,h=png.height;
  const ink=(x,y)=>{const i=(y*w+x)*4;return (255-Math.min(p[i],p[i+1],p[i+2]))*p[i+3]>80*255;};
  const drawn=(x,y)=>field.line[y*size+x]>.09;
  const a=geometry(size,size,drawn),b=geometry(w,h,ink);if(!a||!b)return null;
  const src=normalise(size,size,drawn,a),mask=normalise(w,h,ink,b),d=edgeDistance(mask);
  const strokes=[];for(let i=0;i<src.length;i++)if(src[i])strokes.push(i);
  const before=measure(strokes,d);
  const result={before:before.p90,after:before.p90,adjusted:false};
  if(before.p90<.016||before.p90>.085||strokes.length<35)return {result};
  const n=size/step+1,dx=new Float32Array(n*n),dy=new Float32Array(n*n);
  for(let row=1;row<n-1;row++)for(let col=1;col<n-1;col++){
    const x=col*step,y=row*step,patch=[];
    for(let v=Math.max(7,y-12);v<=Math.min(size-8,y+12);v++)for(let u=Math.max(7,x-12);u<=Math.min(size-8,x+12);u++)if(src[v*size+u])patch.push(v*size+u);
    if(patch.length<6)continue;
    let best=Infinity;
    for(let j=-6;j<=6;j++)for(let i=-6;i<=6;i++){
      const offset=j*size+i;
      const cost=patch.reduce((s,k)=>s+Math.min(24,d[k+offset]),0)/patch.length+.15*(Math.abs(i)+Math.abs(j));
      if(cost<best){best=cost;dx[row*n+col]=i;dy[row*n+col]=j;}
    }
  }
  for(const v of [dx,dy]){
    const copy=v.slice();
    for(let j=1;j<n-1;j++)for(let i=1;i<n-1;i++){const k=j*n+i;v[k]=(4*copy[k]+copy[k-n]+copy[k+n]+copy[k-1]+copy[k+1])/8;}
  }
  function shift(v,x,y){
    const u=x/step,t=y/step,i=Math.floor(u),j=Math.floor(t);
    if(i<0||j<0||i>=n-1||j>=n-1)return 0;
    const k=j*n+i,fx=u-i,fy=t-j;
    return (v[k]*(1-fx)+v[k+1]*fx)*(1-fy)+(v[k+n]*(1-fx)+v[k+n+1]*fx)*fy;
  }
  const proposal=new Uint8Array(mask.length);
  for(let y=1;y<size-1;y++)for(let x=1;x<size-1;x++)proposal[y*size+x]=mask[Math.round(y+shift(dy,x,y))*size+Math.round(x+shift(dx,x,y))]||0;
  const next=measure(strokes,edgeDistance(proposal));
  if(next.p90>before.p90-.004||next.mean>=before.mean*.92)return {result};
  const out=new PNG({width:w,height:h});
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const u=(x-b.x)*b.scale+96,v=(y-b.y)*b.scale+96;
    const px=Math.min(w-1,Math.max(0,x+shift(dx,u,v)/b.scale)),py=Math.min(h-1,Math.max(0,y+shift(dy,u,v)/b.scale));
    const ix=Math.floor(px),iy=Math.floor(py),fx=px-ix,fy=py-iy,o=(y*w+x)*4;
    let alpha=0,red=0,green=0,blue=0;
    for(let j=0;j<2;j++)for(let i=0;i<2;i++){
      const k=(Math.min(h-1,iy+j)*w+Math.min(w-1,ix+i))*4,weight=(i?fx:1-fx)*(j?fy:1-fy)*p[k+3];
      alpha+=weight;red+=weight*p[k];green+=weight*p[k+1];blue+=weight*p[k+2];
    }
    if(alpha){out.data[o]=Math.round(red/alpha);out.data[o+1]=Math.round(green/alpha);out.data[o+2]=Math.round(blue/alpha);out.data[o+3]=Math.round(alpha);}
  }
  const pixels=out.data;
  const outputInk=(x,y)=>{const i=(y*w+x)*4;return (255-Math.min(pixels[i],pixels[i+1],pixels[i+2]))*pixels[i+3]>80*255;};
  const actual=geometry(w,h,outputInk);if(!actual)return {result};
  const checked=measure(strokes,edgeDistance(normalise(w,h,outputInk,actual)));
  if(checked.p90>before.p90-.004||checked.mean>=before.mean*.92)return {result};
  return {result:{...result,after:checked.p90,adjusted:true},bytes:PNG.sync.write(out)};
}
module.exports={registerSketch};
