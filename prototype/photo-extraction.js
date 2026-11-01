/* Local print separation and grouping in the original photograph's coordinates. */
(()=>{
 'use strict';
 const clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),hex=rgb=>'#'+rgb.map(x=>Math.round(x).toString(16).padStart(2,'0')).join('');
 const rgb=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));
 const linear=Float32Array.from({length:256},(_,i)=>{const s=i/255;return s<=.04045?s/12.92:((s+.055)/1.055)**2.4;});
 // Oklab, in 0–100 lightness units. Chroma and lightness can be weighted independently.
 function lab(r,g,b){
  r=linear[r];g=linear[g];b=linear[b];
  const l=Math.cbrt(.4122214708*r+.5363325363*g+.0514459929*b),m=Math.cbrt(.2119034982*r+.6806995451*g+.1073969566*b),s=Math.cbrt(.0883024619*r+.2817188376*g+.6299787005*b);
  return [100*(.2104542553*l+.793617785*m-.0040720468*s),100*(1.9779984951*l-2.428592205*m+.4505937099*s),100*(.0259040371*l+.7827717662*m-.808675766*s)];
 }
 function palette(image){
  const bins=new Map(),data=image.data,step=Math.max(1,Math.floor(image.width*image.height/12000));
  for(let i=0;i<data.length;i+=4*step){
   if(data[i+3]<160)continue;
   const r=data[i],g=data[i+1],b=data[i+2],key=(r>>4)*256+(g>>4)*16+(b>>4);
   let v=bins.get(key);if(!v){v=[0,0,0,0];bins.set(key,v);}v[0]+=r;v[1]+=g;v[2]+=b;v[3]++;
  }
  const ranked=[...bins.values()].sort((a,b)=>b[3]-a[3]),result=[];
  for(const v of ranked){
   const color=v.slice(0,3).map(ch=>Math.round(ch/v[3])),q=lab(...color);
   if(result.every(other=>Math.hypot(q[0]-other.lab[0],q[1]-other.lab[1],q[2]-other.lab[2])>10)){
    result.push({hex:hex(color),lab:q});
    if(result.length===6)break;
   }
  }return result.map(o=>o.hex);
 }
 function affinity(ink,range,ground=null,hueReference=null){
  const [light,a,b]=lab(...rgb(ink)),chroma=Math.hypot(a,b),colored=chroma>=4.5;
  const lw=colored ? .52 : .8,axis=ground?[(light-ground[0])*lw,a-ground[1],b-ground[2]]:null;
  const length2=axis?axis[0]**2+axis[1]**2+axis[2]**2:0;
  const limit=4+range*.155,cache=new Int16Array(32768).fill(-1);
  return (r,g,bl)=>{
   const key=(r>>3)*1024+(g>>3)*32+(bl>>3);
   if(cache[key]>=0)return cache[key];
   const [l,u,v]=lab((r&248)+4,(g&248)+4,(bl&248)+4);
   if(hueReference){
    const along=u*hueReference[0]+v*hueReference[1];
    if(along<1.1||along<.64*Math.hypot(u,v)){cache[key]=0;return 0;}
   }
   let distance;
   if(colored){
    const along=(u*a+v*b)/chroma,across=(u*b-v*a)/chroma;
    distance=Math.hypot((l-light)*.31,across*1.12,(along-chroma)*.57);
    // Neutral glaze may be as dark as the ink. Only its hue projection
    // separates it from faded blue; keep a soft boundary for mixed pixels.
    const hueGate=clamp((along-(.13-range*.0009)*chroma)/Math.max(1.5,.15*chroma),0,1);
    cache[key]=Math.round(255*hueGate*clamp((limit+3.5-distance)/4,0,1));
   }else{
    distance=Math.hypot((l-light)*.83,u-a,v-b);
    cache[key]=Math.round(255*clamp((limit+3-distance)/4,0,1));
   }
   if(length2>95){
    // Mixed edge pixels lie between the local ground and the chosen pigment.
    // Estimate coverage before applying ink, so neighbouring strokes keep their gaps.
    const dl=(l-ground[0])*lw,du=u-ground[1],dv=v-ground[2];
    const t=(dl*axis[0]+du*axis[1]+dv*axis[2])/length2,k=clamp(t,0,1.4);
    const residual=Math.hypot(dl-k*axis[0],du-k*axis[1],dv-k*axis[2]);
    // Worn blue can approach the lightness of the glaze while retaining its hue.
    const chroma2=axis[1]**2+axis[2]**2;
    const tint=colored&&chroma2>64?(du*axis[1]+dv*axis[2])/chroma2:0;
    const coverage=clamp((Math.max(t,.9*tint)-(.45-range*.003))/(.61-range*.001),0,1);
    const onLine=255*clamp((4+range*.08-residual)/3,0,1);
    cache[key]=Math.round(Math.max(cache[key],onLine)*coverage*coverage*(3-2*coverage));
   }
   return cache[key];
  };
 }
 // 8-connected components. The callback receives a reusable buffer of pixel indices.
 function components(mask,w,h,visit){
  const seen=new Uint8Array(mask.length),queue=new Int32Array(mask.length);
  for(let start=0;start<mask.length;start++){
   if(!mask[start]||seen[start])continue;
   let read=0,end=1;queue[0]=start;seen[start]=1;
   while(read<end){
    const idx=queue[read++],x=idx%w,y=(idx-x)/w;
    for(let yy=Math.max(0,y-1);yy<=Math.min(h-1,y+1);yy++)for(let xx=Math.max(0,x-1);xx<=Math.min(w-1,x+1);xx++){
     const n=yy*w+xx;if(mask[n]&&!seen[n]){seen[n]=1;queue[end++]=n;}
    }
   }
   visit(queue,end);
  }
 }
 function separate(image,ink,range){
  const {width:w,height:h,data}=image,paint=rgb(ink),seed=lab(...paint);
  const swatches=palette(image).map(hex=>({hex,q:lab(...rgb(hex))}));
  const distance=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]);
  const ground=swatches.find(s=>distance(s.q,seed)>14)?.q;
  const match=affinity(ink,range,ground),active=new Uint8Array(w*h),seedChroma=Math.hypot(seed[1],seed[2]);
  // A picked navy and the actual weathered blue may differ in saturation.
  // Learn a supporting shade only when it is present in this region, of the
  // same hue, and clearly separate from the glaze.
  const worn=ground&&seedChroma>5&&range>=22&&swatches.filter(({q})=>{
   const c=Math.hypot(q[1],q[2]);
   return c>1.7&&c<seedChroma*.8&&(q[1]*seed[1]+q[2]*seed[2])>c*seedChroma*.72&&
    Math.abs(q[0]-seed[0])<25&&distance(q,ground)>18&&distance(q,seed)>7;
  }).sort((a,b)=>Math.abs(a.q[0]-(seed[0]+ground[0])/2)-Math.abs(b.q[0]-(seed[0]+ground[0])/2))[0];
  const support=worn?affinity(worn.hex,Math.max(8,range-20),ground,[seed[1]/seedChroma,seed[2]/seedChroma]):null;
  for(let i=0;i<active.length;i++){
   const o=i*4,r=data[o],g=data[o+1],b=data[o+2];
   const weight=Math.max(match(r,g,b),support ? support(r,g,b)*.78 : 0);
   const alpha=weight*data[o+3]/255;
   data[o]=paint[0];data[o+1]=paint[1];data[o+2]=paint[2];data[o+3]=alpha<12?0:alpha;active[i]=data[o+3]>0;
  }
  despeckle(active,data,w,h);
 }
 function despeckle(active,data,w,h){
  const minArea=Math.max(2,Math.min(28,Math.round(w*h*.000035)));
  components(active,w,h,(indices,n)=>{
   let peak=0;for(let i=0;i<n&&peak<120;i++)peak=Math.max(peak,data[indices[i]*4+3]);
   if(n<minArea||peak<72)for(let i=0;i<n;i++)data[indices[i]*4+3]=0;
  });
 }
 // Local mean and variance separate printed lines even when their colours differ.
 // Exclude transparent pixels from the window to keep freehand boundaries clean.
 function lines(image,ink,range){
  const {width:w,height:h,data}=image,stride=w+1,n=stride*(h+1);
  const sum=new Float64Array(n),squares=new Float64Array(n),counts=new Uint32Array(n),light=new Uint8Array(w*h),hist=new Uint32Array(256);
  let total=0;
  for(let y=0;y<h;y++){
   let s=0,s2=0,ct=0;
   for(let x=0;x<w;x++){const i=y*w+x,o=i*4,j=(y+1)*stride+x+1,v=Math.round(.213*data[o]+.715*data[o+1]+.072*data[o+2]);light[i]=v;
    if(data[o+3]>32){s+=v;s2+=v*v;ct++;hist[v]++;total++;}
    sum[j]=sum[j-stride]+s;squares[j]=squares[j-stride]+s2;counts[j]=counts[j-stride]+ct;
   }
  }
  function quantile(q){let count=0;for(let i=0;i<256;i++){count+=hist[i];if(count>=q*total)return i;}return 255;}
  const dark=quantile(.065),white=quantile(.82),span=white-dark,core=dark+span*(.045+.001*range);
  const paint=rgb(ink),active=new Uint8Array(w*h),radius=clamp(Math.round(Math.max(w,h)*.032),5,42),k=.28-.0021*range;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
   const i=y*w+x,o=4*i;if(!data[o+3])continue;
   const l=Math.max(0,x-radius),r=Math.min(w,x+radius+1),t=Math.max(0,y-radius)*stride,b=Math.min(h,y+radius+1)*stride;
   const samples=counts[b+r]-counts[t+r]-counts[b+l]+counts[t+l];
   const mean=(sum[b+r]-sum[t+r]-sum[b+l]+sum[t+l])/Math.max(1,samples);
   const variance=(squares[b+r]-squares[t+r]-squares[b+l]+squares[t+l])/Math.max(1,samples)-mean*mean;
   const threshold=mean*(1+k*(Math.sqrt(Math.max(0,variance))/128-1));
   const edge=clamp((threshold-light[i]+3)/11,0,1),solid=span>40?clamp((core-light[i])/12,0,1):0;
   data[o+3]*=Math.max(edge,solid);if(data[o+3]<12)data[o+3]=0;active[i]=data[o+3]>0;
   data[o]=paint[0];data[o+1]=paint[1];data[o+2]=paint[2];
  }
  despeckle(active,data,w,h);
 }
 // Join nearby strokes before measuring their original (undilated) extents.
 function regions(image,ink,radius,area){
  const {width:w,height:h,data}=image,match=affinity(ink,48);
  const raw=new Uint8Array(w*h),wide=new Uint8Array(w*h),stride=w+1,sum=new Int32Array(stride*(h+1));
  for(let y=0;y<h;y++){let row=0;for(let x=0;x<w;x++){
   const i=y*w+x,j=i*4,inside=!area||((x/w-area[0])/area[2])**2+((y/h-area[1])/area[3])**2<1;
   raw[i]=inside&&match(data[j],data[j+1],data[j+2])>105?1:0;
   row+=raw[i];sum[(y+1)*stride+x+1]=row+sum[y*stride+x+1];
  }}
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
   const l=Math.max(0,x-radius),r=Math.min(w,x+radius+1),t=Math.max(0,y-radius)*stride,b=Math.min(h,y+radius+1)*stride;
   wide[y*w+x]=sum[b+r]-sum[b+l]-sum[t+r]+sum[t+l]>0?1:0;
  }
  const boxes=[];
  components(wide,w,h,(q,n)=>{
   let x0=w,y0=h,x1=-1,y1=-1,count=0,r=0,g=0,b=0;
   for(let j=0;j<n;j++){const i=q[j];if(!raw[i])continue;const x=i%w,y=(i-x)/w;
    count++;r+=data[4*i];g+=data[4*i+1];b+=data[4*i+2];x0=Math.min(x,x0);x1=Math.max(x,x1);y0=Math.min(y,y0);y1=Math.max(y,y1);}
   const bw=x1-x0+1,bh=y1-y0+1;
   if(count>=Math.max(8,w*h*.000035)&&bw>=5&&bh>=4&&bw<w*.49&&bh<h*.54&&count/(bw*bh)>.048)
    boxes.push({x:x0,y:y0,w:bw,h:bh,ink:hex([r/count,g/count,b/count]),count});
  });
  return boxes;
 }
 function path(region,recipe){
  const [x,y,w,h]=region,p=new Path2D();
  if(recipe?.shape==='circle')p.arc(x+w/2,y+h/2,Math.min(w,h)/2,0,Math.PI*2);
  else if(recipe?.shape==='ellipse')p.ellipse(x+w/2,y+h/2,w/2,h/2,0,0,Math.PI*2);
  else if(recipe?.shape==='lasso'&&recipe.points?.length>=3){
   recipe.points.forEach(([u,v],i)=>i?p.lineTo(x+u*w,y+v*h):p.moveTo(x+u*w,y+v*h));p.closePath();
  }else p.rect(x,y,w,h);
  return p;
 }
 function render(source,p,region,ink,recipe){
  const [x,y,w,h]=region,sx=source.naturalWidth/p.width,sy=source.naturalHeight/p.height;
  const ratio=Math.min(sx,sy,1280/Math.max(w,h)),c=document.createElement('canvas');
  c.width=Math.max(1,Math.round(w*ratio));c.height=Math.max(1,Math.round(h*ratio));
  const ctx=c.getContext('2d',{willReadFrequently:true});
  ctx.clip(path([0,0,c.width,c.height],recipe));
  ctx.drawImage(source,x*sx,y*sy,w*sx,h*sy,0,0,c.width,c.height);
  if(ink){const data=ctx.getImageData(0,0,c.width,c.height);
   if(recipe.method==='line')lines(data,ink,recipe.range??45);else separate(data,ink,recipe.range??45);
   ctx.putImageData(data,0,0);
  }
  return c;
 }
 window.PhotoExtraction={palette,regions,path,render};
})();
