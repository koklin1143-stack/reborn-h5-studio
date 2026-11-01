/* White is unprinted glaze. Black, red and (optionally) blue encode the ink plates. */
const {PNG}=require('pngjs');

function applySpotInks(bytes,colors){
  if(bytes.length<33||bytes.readUInt32BE(16)*bytes.readUInt32BE(20)>4096*4096)throw Error('Invalid print dimensions');
  const png=PNG.sync.read(bytes);
  const [main,accent]=colors.map(c=>c.slice(1).match(/../g).map(part=>parseInt(part,16)));
  const pixels=png.data;
  let mainArea=0,accentArea=0;
  for(let i=0;i<pixels.length;i+=4){
    const r=pixels[i],g=pixels[i+1],b=pixels[i+2];
    const darkness=255-Math.min(r,g,b);
    // Blank paper and mild compression noise become unprinted glaze. Preserve antialiasing.
    const coverage=Math.min(1,Math.max(0,(darkness-22)/218));
    const alpha=Math.round(pixels[i+3]*coverage);
    if(!alpha){pixels.fill(0,i,i+4);continue;}
    const redAmount=Math.max(0,r-Math.max(g,b))/darkness;
    const isAccent=redAmount>.38,ink=isAccent?accent:main;
    if(isAccent)accentArea+=alpha/255;else mainArea+=alpha/255;
    pixels[i]=ink[0];pixels[i+1]=ink[1];pixels[i+2]=ink[2];pixels[i+3]=alpha;
  }
  if(mainArea>256&&accentArea<mainArea*.008)accentSeparateShape(png,accent,mainArea);
  return PNG.sync.write(png);
}
const rgb=hex=>hex.slice(1).match(/../g).map(pair=>parseInt(pair,16));
const codes=[['纯黑','#000000'],['鲜红','#ff0000'],['柠黄','#ffff00'],['鲜绿','#00ff00'],['青蓝','#00ffff'],['纯蓝','#0000ff'],['洋红','#ff00ff']];
function colourPlates(palette){
  const remaining=codes.slice();
  return palette.map(({hex,part,region})=>{
    const color=rgb(hex),min=Math.min(...color),span=Math.max(...color)-min;
    const hue=span<18?[0,0,0]:color.map(v=>(v-min)*255/span);
    const distance=code=>rgb(code[1]).reduce((sum,v,i)=>sum+(v-hue[i])**2,0);
    remaining.sort((a,b)=>distance(a)-distance(b));
    const [name,code]=remaining.shift();
    return {name,code,mark:rgb(code),color,part,region};
  });
}
function printPlates(bytes,plates){
  if(bytes.length<33||bytes.readUInt32BE(16)*bytes.readUInt32BE(20)>4096*4096)throw Error('Invalid print dimensions');
  const png=PNG.sync.read(bytes),p=png.data,labels=new Uint8Array(png.width*png.height);
  const area=plates.map(()=>0);
  let left=png.width,right=-1,top=png.height,bottom=-1;
  for(let i=0;i<p.length;i+=4){
    const depth=255-Math.min(p[i],p[i+1],p[i+2]);
    const alpha=Math.round(p[i+3]*Math.max(0,Math.min(1,(depth-12)/235)));
    if(!alpha){p.fill(0,i,i+4);continue;}
    let nearest=0,best=Infinity;
    // Compare distances along each ink-to-white ramp so the faded area of a
    // sprayed tail stays on the same plate as its saturated centre.
    for(let k=0;k<plates.length;k++){
      const plate=plates[k];
      let error=0;
      for(let c=0;c<3;c++)error+=(p[i+c]-(plate.mark[c]===0?255-depth:255))**2;
      if(error<best){best=error;nearest=k;}
    }
    labels[i/4]=nearest;p[i+3]=alpha;area[nearest]+=alpha/255;
    if(alpha>48){const x=i/4%png.width,y=Math.floor(i/4/png.width);left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}
  }
  const total=area.reduce((a,b)=>a+b,0),completed=[];
  // If a spot was omitted, reuse ink in its planned component. Never paint
  // outside the original alpha, never manufacture a decorative element.
  for(let target=1;target<plates.length;target++){
    const box=plates[target].region;
    if(!box||!total||area[target]>=.012*total||right<=left||bottom<=top)continue;
    const cx=left+(box[0]+box[2])*(right-left)/2000,cy=top+(box[1]+box[3])*(bottom-top)/2000;
    const rx=(box[2]-box[0])*(right-left)/2000,ry=(box[3]-box[1])*(bottom-top)/2000;
    const hits=[],inside=plates.map(()=>0);
    for(let y=Math.max(0,Math.floor(cy-ry));y<=Math.min(png.height-1,Math.ceil(cy+ry));y++)for(let x=Math.max(0,Math.floor(cx-rx));x<=Math.min(png.width-1,Math.ceil(cx+rx));x++){
      const j=y*png.width+x,a=p[j*4+3]/255;
      if(a&&((x-cx)/rx)**2+((y-cy)/ry)**2<=1){hits.push(j);inside[labels[j]]+=a;}
    }
    // A whole small plate may already represent this part under the wrong ink.
    const misplaced=inside.findIndex((a,k)=>k!==0&&k!==target&&area[k]>0&&a>area[k]*.68&&area[k]<total*.32&&area[k]>total*.012);
    const recolor=j=>{const a=p[j*4+3]/255;area[labels[j]]-=a;labels[j]=target;area[target]+=a;};
    if(misplaced!==-1){for(let j=0;j<labels.length;j++)if(labels[j]===misplaced&&p[j*4+3])recolor(j);}
    else if(hits.length&&inside.reduce((a,b)=>a+b,0)<total*.32){for(const j of hits)recolor(j);}
    if(area[target]>=.012*total)completed.push(plates[target].part);
  }
  for(let j=0;j<labels.length;j++)if(p[j*4+3])p.set(plates[labels[j]].color,4*j);
  return {bytes:PNG.sync.write(png),coverage:area.map(a=>total?a/total:0),completed};
}
// Some providers return a single ink. Reassign an existing small, disconnected shape;
 // its silhouette, negative space and the approved drawing all stay in register.
function accentSeparateShape({width,height,data},ink,mainArea){
  const count=width*height,visited=new Uint8Array(count),queue=new Int32Array(count);
  let selected=[],best=Infinity;
  for(let start=0;start<count;start++){
    if(visited[start]||data[start*4+3]===0)continue;
    let tail=1,area=0;queue[0]=start;visited[start]=1;
    for(let head=0;head<tail;head++){
      const p=queue[head],x=p%width;
      area+=data[p*4+3]/255;
      if(x>0)add(p-1);if(x+1<width)add(p+1);
      if(p>=width)add(p-width);if(p+width<count)add(p+width);
    }
    const fraction=area/mainArea,score=Math.abs(fraction-.075);
    if(fraction>=.015&&fraction<=.20&&score<best){best=score;selected=queue.slice(0,tail);}
    function add(p){
      if(visited[p]||data[p*4+3]===0)return;
      visited[p]=1;queue[tail++]=p;
    }
  }
  for(const p of selected)data.set(ink,p*4);
}
module.exports={applySpotInks,colourPlates,printPlates};
