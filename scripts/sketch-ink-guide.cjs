const {PNG}=require('pngjs');
const {separate}=require('../prototype/enamel-paper.js');

// Work in the coordinate system of the full sketch. This is a second reference
// for the image model, never a replacement for the original or a finished print.
const size=192, count=size*size;
function distance(mask){
  const d=Uint16Array.from(mask,on=>on?0:2*size);
  for(let i=0;i<count;i++){
    if(i%size)d[i]=Math.min(d[i],d[i-1]+1);
    if(i>=size)d[i]=Math.min(d[i],d[i-size]+1);
  }
  for(let i=count-1;i>=0;i--){
    if(i%size<size-1)d[i]=Math.min(d[i],d[i+1]+1);
    if(i<count-size)d[i]=Math.min(d[i],d[i+size]+1);
  }
  return d;
}
function enclosedRegions(d,radius){
  const visited=new Uint8Array(count),queue=new Int32Array(count),regions=[];
  for(let start=0;start<count;start++){
    if(visited[start]||d[start]<=radius)continue;
    let end=1,exterior=false,left=size,right=0,top=size,bottom=0;
    queue[0]=start;visited[start]=1;
    function add(i){if(!visited[i]&&d[i]>radius){visited[i]=1;queue[end++]=i;}}
    for(let j=0;j<end;j++){
      const i=queue[j],x=i%size,y=Math.floor(i/size);
      if(!x||!y||x===size-1||y===size-1)exterior=true;
      left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);
      if(x>0)add(i-1);if(x<size-1)add(i+1);if(y>0)add(i-size);if(y<size-1)add(i+size);
    }
    if(!exterior&&end>=30)regions.push({points:queue.slice(0,end),left,right,top,bottom});
  }
  return regions.sort((a,b)=>b.points.length-a.points.length);
}
function regionDistance(region){
  const mask=new Uint8Array(count);
  for(const i of region.points)mask[i]=1;
  return distance(mask);
}
function bounds(width,height,visible){
  let left=width,right=-1,top=height,bottom=-1;
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    if(!visible(y*width+x))continue;
    left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);
  }
  return {left,top,w:right-left+1,h:bottom-top+1};
}
function readSketchField(source){
  if(!source?.startsWith('data:image/png;base64,'))return null;
  const bytes=Buffer.from(source.slice(22),'base64');
  if(bytes.length<33||bytes.readUInt32BE(16)!==768||bytes.readUInt32BE(20)!==768)return null;
  const original=PNG.sync.read(bytes),line=new Float32Array(count);
  for(let y=0;y<768;y++)for(let x=0;x<768;x++){
    const i=(y*768+x)*4,p=original.data;
    line[(y>>2)*size+(x>>2)]+=(255-Math.min(p[i],p[i+1],p[i+2]))*p[i+3]/(16*255*255);
  }
  return {line,size,d:distance(line.map(v=>v>.06?1:0))};
}
function sketchInkGuide(source,hex,field=readSketchField(source)){
  if(!field)return null;
  const {line,d}=field;
  // Small gaps in a finger stroke need not seal perfectly. Require two adjacent,
  // unequal, non-nested spaces. An eye inside a face is not a secondary shape.
  for(let radius=1;radius<=5;radius++){
    const regions=enclosedRegions(d,radius),[main,open]=regions;
    if(!open||main.points.length<220)continue;
    const ratio=open.points.length/main.points.length;
    if(ratio<.05||ratio>.55||regions[2]?.points.length>=main.points.length*.05)return null;
    if(open.right>=main.left&&open.left<=main.right&&open.bottom>=main.top&&open.top<=main.bottom)return null;
    const toOpen=regionDistance(open);
    let join=Infinity;for(const i of main.points)join=Math.min(join,toOpen[i]);
    if(join>radius*2+10)return null;
    const toMain=regionDistance(main),wash=Math.max(8,Math.sqrt(main.points.length)*.33);
    const pigment=hex.slice(1).match(/../g).map(v=>parseInt(v,16)),out=new PNG({width:size,height:size});
    for(let i=0;i<count;i++){
      const fill=Math.max(0,Math.min(1,radius+.45-toMain[i]));
      const fade=Math.max(0,Math.min(1,(toOpen[i]-join+1)/wash));
      const coverage=Math.max(fill*fade*.92,Math.min(1,line[i]*1.35));
      for(let c=0;c<3;c++)out.data[i*4+c]=Math.round(255+(pigment[c]-255)*coverage);
      out.data[i*4+3]=255;
    }
    const horizontal=Math.abs(open.left+open.right-main.left-main.right)>=Math.abs(open.top+open.bottom-main.top-main.bottom);
    const near=main.points.filter(i=>toOpen[i]<=join+1);
    const rootX=near.reduce((sum,i)=>sum+i%size,0)/near.length,rootY=near.reduce((sum,i)=>sum+Math.floor(i/size),0)/near.length;
    const smallFirst=horizontal?open.left<main.left:open.top<main.top;
    return {image:'data:image/png;base64,'+PNG.sync.write(out).toString('base64'),hex,horizontal,smallFirst,rootX,rootY,toMain,toOpen,line,radius,wash,
      bounds:bounds(size,size,i=>line[i]>.06)};
  }
  return null;
}
// Distance inside the registered silhouette. Padding keeps near-vertical edges
// and acute tips the same line weight as the long edges.
function rimDepth(lo,hi,height){
  const stride=lo.length+2,d=new Uint16Array(stride*(height+2));
  for(let u=0;u<lo.length;u++)for(let v=lo[u];v<=hi[u];v++)d[(v+1)*stride+u+1]=65535;
  for(let i=stride+1;i<d.length-stride-1;i++)if(d[i])d[i]=Math.min(d[i-1]+3,d[i-stride]+3,d[i-stride-1]+4,d[i-stride+1]+4);
  for(let i=d.length-stride-2;i>stride;i--)if(d[i])d[i]=Math.min(d[i],d[i+1]+3,d[i+stride]+3,d[i+stride-1]+4,d[i+stride+1]+4);
  return d;
}
// Fit a single continuous edge between the measured endpoints. The second
// coefficient lets its highest point sit to either side of centre. Keep a
// stepped or many-lobed edge if this simple curve would appreciably change it.
function fairEdge(edge,root,tip,height){
  const span=tip-root,out=Float32Array.from(edge);
  if(Math.abs(span)<height*1.2)return out;
  const start=edge[root],end=edge[tip];let aa=0,ab=0,bb=0,ay=0,by=0;
  const left=Math.min(root,tip),right=Math.max(root,tip);
  for(let u=left;u<=right;u++){
    const t=(u-root)/span,a=4*t*(1-t),b=a*(t-.5);
    const y=edge[u]-(start+(end-start)*t);
    aa+=a*a;ab+=a*b;bb+=b*b;ay+=a*y;by+=b*y;
  }
  const det=aa*bb-ab*ab;if(det<.001)return out;
  const A=(ay*bb-by*ab)/det,B=(by*aa-ay*ab)/det;let error=0;
  for(let u=left;u<=right;u++){
    const t=(u-root)/span,curve=start+(end-start)*t+4*t*(1-t)*(A+B*(t-.5));
    const delta=curve-edge[u];error+=delta*delta;
    out[u]+=Math.max(-height*.09,Math.min(height*.09,delta))*Math.min(1,t*15,(1-t)*15);
  }
  return Math.sqrt(error/(right-left+1))<=height*.09?out:edge;
}
// If the provider floods the planned opening, lift just that ink. Use the returned
// print's own outer edge for the fine rim, so this cannot paste a stock silhouette.
function reserveGlaze(bytes,guide){
  if(!guide||bytes.length<33||bytes.readUInt32BE(16)*bytes.readUInt32BE(20)>4096*4096)return null;
  const png=PNG.sync.read(bytes),p=png.data;
  const ink=i=>p[4*i+3]*(255-Math.min(p[4*i],p[4*i+1],p[4*i+2]))>64*255;
  const art=bounds(png.width,png.height,ink),src=guide.bounds;
  if(art.w<16||art.h<16)return null;
  const sx=(src.w-1)/(art.w-1),sy=(src.h-1)/(art.h-1);
  if(sx/sy<.8||sx/sy>1.25)return null;
  const marks=new Uint8Array(count);
  for(let y=0;y<art.h;y++)for(let x=0;x<art.w;x++){
    if(ink((y+art.top)*png.width+x+art.left))marks[(src.top+Math.round(y*sy))*size+src.left+Math.round(x*sx)]=1;
  }
  let spill=0,total=0,openInk=0,openSize=0,mainInk=0,mainSize=0;
  for(let i=0;i<count;i++){
    if(marks[i]){total++;if(Math.min(guide.toMain[i],guide.toOpen[i])>guide.radius+7)spill++;}
    if(guide.toOpen[i]===0){openSize++;openInk+=marks[i];}
    if(guide.toMain[i]===0){mainSize++;mainInk+=marks[i];}
  }
  if(spill>total*.09||openInk<openSize*.55||mainInk<mainSize*.55)return null;
  const clamp=v=>Math.max(0,Math.min(1,v));
  const pigment=guide.hex.slice(1).match(/../g).map(c=>parseInt(c,16));
  if(separate(p,png.width,png.height,Math.min(...pigment)).coveredEdge>.65)return null;
  // Locate the two outside edges at print resolution, across the axis joining the
  // two shapes. A white keyline *inside* the print is not its outside edge.
  const horizontal=guide.horizontal,length=horizontal?art.w:art.h,height=horizontal?art.h:art.w;
  const index=(u,v)=>horizontal?(art.top+v)*png.width+art.left+u:(art.top+u)*png.width+art.left+v;
  const lo=new Int32Array(length).fill(height),hi=new Int32Array(length).fill(-1);
  for(let u=0;u<length;u++)for(let v=0;v<height;v++)if(p[index(u,v)*4+3]>48){
    lo[u]=Math.min(lo[u],v);hi[u]=v;
  }
  const width=Math.max(1.5,Math.min(length*.015,height*.055));
  const depths=rimDepth(lo,hi,height);
  const root=horizontal?(guide.rootX-src.left)/sx:(guide.rootY-src.top)/sy;
  const rootIndex=Math.max(0,Math.min(length-1,Math.round(root)));
  const sign=guide.smallFirst?1:-1;
  const out=new PNG({width:png.width,height:png.height});p.copy(out.data);
  const tip=guide.smallFirst?length-1:0,lower=fairEdge(lo,rootIndex,tip,height),upper=fairEdge(hi,rootIndex,tip,height);
  for(let u=0;u<length;u++){
    if(hi[u]<=lo[u])continue;
    const along=(u-rootIndex)*sign;
    const low=lower[u],high=upper[u];
    const span=Math.max(1,high-low);
    const dst=out.data;
    for(let v=Math.max(0,Math.floor(Math.min(low,lo[u]))-1);v<=Math.min(height-1,Math.ceil(Math.max(high,hi[u]))+1);v++){
      const outIdx=index(u,v)*4,from=Math.round(lo[u]+(v-low)*(hi[u]-lo[u])/span);
      if(from<lo[u]||from>hi[u]){dst[outIdx+3]=0;continue;}
      const i=index(u,from)*4;for(let c=0;c<4;c++)dst[outIdx+c]=p[i+c];
      const gx=src.left+(horizontal?u:from)*sx,gy=src.top+(horizontal?from:u)*sy;
      const near=Math.hypot(gx-guide.rootX,gy-guide.rootY)/guide.wash;
      const onSmall=along<0;
      if(!onSmall&&near>=1)continue;
      const depth=depths[(from+1)*(length+2)+u+1]/3;
      const jointLine=guide.line[Math.round(gy)*size+Math.round(gx)]*clamp(1-near*2);
      const edge=Math.max(clamp(width+.5-depth),jointLine);
      let hash=Math.imul((i>>>2)^0x5bd1e995,0x85ebca6b);
      hash=Math.imul(hash^(hash>>>13),0xc2b2ae35);
      const noise=((hash^(hash>>>16))>>>0)/4294967296;
      const spray=onSmall?0:clamp((near-noise)*3+.45);
      if(edge>spray){
        dst[outIdx]=Math.round(pigment[0]*.90);dst[outIdx+1]=Math.round(pigment[1]*.88);dst[outIdx+2]=Math.round(pigment[2]*.88);
        dst[outIdx+3]=Math.round(255*edge);
      }else dst[outIdx+3]=Math.round(p[i+3]*spray);
    }
  }
  return PNG.sync.write(out);
}
module.exports={sketchInkGuide,reserveGlaze,readSketchField,enclosedRegions,regionDistance};
