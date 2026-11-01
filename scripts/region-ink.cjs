const {PNG}=require('pngjs');
const {isBody}=require('../prototype/pattern-grammar.js');
const digits=['111101101101111','010110010010111','111001111100111','111001111001111','101101111001001','111100111001111','111100111101111','111001010010010','111101111101111','111101111001111'];
const rgb=hex=>hex.slice(1).match(/../g).map(c=>parseInt(c,16));
function distance(mask,w,h,seed){
  const d=Uint16Array.from(mask,v=>v===seed?0:8190);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const i=y*w+x;if(x)d[i]=Math.min(d[i],d[i-1]+3);
    if(y){d[i]=Math.min(d[i],d[i-w]+3);if(x)d[i]=Math.min(d[i],d[i-w-1]+4);if(x+1<w)d[i]=Math.min(d[i],d[i-w+1]+4);}
  }
  for(let y=h-1;y>=0;y--)for(let x=w-1;x>=0;x--){
    const i=y*w+x;if(x+1<w)d[i]=Math.min(d[i],d[i+1]+3);
    if(y+1<h){d[i]=Math.min(d[i],d[i+w]+3);if(x)d[i]=Math.min(d[i],d[i+w-1]+4);if(x+1<w)d[i]=Math.min(d[i],d[i+w+1]+4);}
  }
  return d;
}
function neighbours(i,w,h,visit){
  const x=i%w;if(x)visit(i-1);if(x+1<w)visit(i+1);if(i>=w)visit(i-w);if(i+w<w*h)visit(i+w);
}
function components(mask,w,h,minArea){
  const seen=new Uint8Array(mask.length),q=new Int32Array(mask.length),out=[];
  for(let i=0;i<mask.length;i++)if(!seen[i]&&mask[i]){
    let end=1,border=false;q[0]=i;seen[i]=1;
    for(let j=0;j<end;j++){const k=q[j],x=k%w;if(!x||x===w-1||k<w||k+w>=mask.length)border=true;
      neighbours(k,w,h,n=>{if(!seen[n]&&mask[n]){seen[n]=1;q[end++]=n;}});}
    if(!border&&end>=minArea)out.push(q.slice(0,end));
  }
  return out.sort((a,b)=>b.length-a.length);
}
// Number actual pigment islands and small enclosed openings. Thin bridges are
// split at study resolution and the labels are grown back within the source ink.
function regionMap(bytes,materials){
  if(bytes.length<33||bytes.readUInt32BE(16)*bytes.readUInt32BE(20)>4096**2)throw Error('纹样尺寸无效。');
  const png=PNG.sync.read(bytes),p=png.data;
  let l=png.width,t=png.height,r=-1,b=-1;
  for(let i=3;i<p.length;i+=4)if(p[i]>48){const n=(i-3)/4,x=n%png.width,y=Math.floor(n/png.width);l=Math.min(l,x);r=Math.max(r,x);t=Math.min(t,y);b=Math.max(b,y);}
  if(r<=l||b<=t)throw Error('这份纹样没有可分色的形状。');
  const scale=300/Math.max(r-l+1,b-t+1),w=Math.ceil((r-l+1)*scale)+12,h=Math.ceil((b-t+1)*scale)+12;
  const mask=new Uint8Array(w*h),codes=new Uint8Array(w*h),proof=new PNG({width:w,height:h});proof.data.fill(255);
  for(let y=6;y<h-6;y++)for(let x=6;x<w-6;x++){
    const px=Math.min(r,l+Math.floor((x-5.5)/scale)),py=Math.min(b,t+Math.floor((y-5.5)/scale)),n=(py*png.width+px)*4,i=y*w+x;
    mask[i]=p[n+3]>=105?1:0;
    if(materials&&mask[i])codes[i]=1+materials.findIndex(m=>m.color.every((v,k)=>v===p[n+k]));
    for(let c=0;c<3;c++)proof.data[i*4+c]=255+((materials?65:p[n+c])-255)*p[n+3]/255;
  }
  const depth=distance(mask,w,h,0),toInk=distance(mask,w,h,1),labels=new Uint16Array(w*h),regions=[];
  function register(points,hole,field,part){
    const id=regions.length+1;let best=points[0];
    for(const n of points){labels[n]=id;if(field[n]>field[best])best=n;}
    regions.push({id,hole,anchor:best,part});
  }
  if(materials){
    for(const [k,mat] of materials.entries()){
      const group=Uint8Array.from(codes,v=>v===k+1?1:0),inGroup=distance(group,w,h,0);
      for(const a of components(group,w,h,5).slice(0,12))register(a,false,inGroup,mat.part);
    }
  }else for(const a of components(Uint8Array.from(depth,v=>v>=8),w,h,12).slice(0,36))register(a,false,depth);
  const q=new Int32Array(w*h);let end=0;for(let i=0;i<labels.length;i++)if(labels[i])q[end++]=i;
  for(let j=0;j<end;j++){const i=q[j];neighbours(i,w,h,n=>{if(mask[n]&&!labels[n]&&(!materials||codes[n]===codes[i])){labels[n]=labels[i];q[end++]=n;}});}
  for(const a of components(Uint8Array.from(toInk,v=>v>4),w,h,16).slice(0,24)){
    register(a,true,toInk);
    for(const i of a)neighbours(i,w,h,n=>{if(!mask[n]&&!labels[n])labels[n]=regions.length;});
  }
  if(!regions.length)throw Error('未分出可定位的部件。');
  const chart=new PNG({width:w*2,height:h*2}),cw=chart.width;
  const paints=regions.map(({id})=>[70+(id*89)%152,80+(id*67)%135,76+(id*129)%146]);
  for(let y=0;y<chart.height;y++)for(let x=0;x<cw;x++){
    const n=Math.floor(y/2)*w+Math.floor(x/2),id=labels[n],i=(y*cw+x)*4;
    chart.data.set(id?paints[id-1]:mask[n]?[58,58,58]:[243,243,243],i);chart.data[i+3]=255;
  }
  for(const {id,anchor} of regions){
    const s=String(id),x0=Math.max(1,Math.min(cw-s.length*12-2,(anchor%w)*2-s.length*6)),y0=Math.max(1,Math.min(chart.height-17,Math.floor(anchor/w)*2-7));
    for(let y=-1;y<16;y++)for(let x=-1;x<s.length*12;x++){
      const digit=digits[Number(s[Math.floor(x/12)])],on=y>=0&&y<15&&x>=0&&x%12<9&&digit?.[Math.floor(y/3)*3+Math.floor(x%12/3)]==='1';
      chart.data.fill(on?255:25,((y0+y)*cw+x0+x)*4,((y0+y)*cw+x0+x)*4+3);
    }
  }
  const url=img=>'data:image/png;base64,'+PNG.sync.write(img).toString('base64');
  return {png,w,h,l,t,scale,labels,regions,proof:url(proof),chart:url(chart)};
}
function markedParts(map,groups){
  const {data}=PNG.sync.read(Buffer.from(map.proof.split(',')[1],'base64')),cols=Math.min(3,groups.length);
  const panel=new PNG({width:(map.w+4)*cols,height:(map.h+4)*Math.ceil(groups.length/cols)});panel.data.fill(255);
  for(const [k,ids] of groups.entries())for(let i=0;i<map.labels.length;i++){
    const x=k%cols*(map.w+4)+i%map.w,y=Math.floor(k/cols)*(map.h+4)+Math.floor(i/map.w),j=(y*panel.width+x)*4;
    if(ids.includes(map.labels[i]))panel.data.set([229,25,135],j);
    else{const grey=Math.round(100+Math.min(data[4*i],data[4*i+1],data[4*i+2])*.55);panel.data.fill(grey,j,j+3);}
  }
  return 'data:image/png;base64,'+PNG.sync.write(panel).toString('base64');
}

function recolour(map,targets,choices){
  if(!Array.isArray(choices)||choices.length!==targets.length)throw Error('部位定位不完整。');
  const {png,w,h,l,t,scale,labels,regions}=map,selected=new Map();
  const base=targets.find(x=>isBody(x.part));
  for(const [index,target] of targets.entries()){
    const ids=choices[index];
    if(!Array.isArray(ids)||(!ids.length&&target!==base)||ids.some(id=>!Number.isInteger(id)||id<1||id>regions.length))throw Error('未能唯一定位「'+target.part+'」。');
    for(const id of ids){
      if(selected.has(id))throw Error('两个配色部位发生重叠。');
      selected.set(id,target.hex);
    }
  }
  const out=new PNG({width:png.width,height:png.height});png.data.copy(out.data);
  const p=out.data,colours=new Map(targets.map(v=>[v.hex,rgb(v.hex)])),body=base&&colours.get(base.hex);
  const lightMask=new Uint8Array(w*h);
  for(let i=0;i<labels.length;i++){const c=colours.get(selected.get(labels[i]));if(c&&Math.min(...c)>217)lightMask[i]=1;}
  const rim=distance(lightMask,w,h,0),keyline=body&&Math.min(...body)<175?body:[54,74,68];
  for(let y=0;y<png.height;y++)for(let x=0;x<png.width;x++){
    const i=(y*png.width+x)*4,gx=Math.floor((x-l+.5)*scale)+6,gy=Math.floor((y-t+.5)*scale)+6;
    const n=gx>=0&&gy>=0&&gx<w&&gy<h?gy*w+gx:-1,id=n>=0?labels[n]:0,local=colours.get(selected.get(id));
    const hole=id&&regions[id-1].hole;if(!p[i+3]&&!(local&&hole))continue;
    const c=local||body;if(!c)continue;
    // Only an explicitly assigned interior opening may acquire pigment.
    if(local&&hole)p[i+3]=255;
    const edge=local&&lightMask[n]&&!hole?Math.min(1,Math.max(0,(7-rim[n])/4)):0;
    for(let k=0;k<3;k++)p[i+k]=Math.round(c[k]*(1-edge)+keyline[k]*edge);
  }
  return PNG.sync.write(out);
}
module.exports={regionMap,markedParts,recolour};
