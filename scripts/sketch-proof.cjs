const {PNG}=require('pngjs');

// Compare at a fixed print size. Sparse ink is legitimate on a linear subject
// such as a bicycle frame, so this check applies only to a planned solid motif.
function proofIssue(bytes) {
  if(bytes.length<33||bytes.readUInt32BE(16)*bytes.readUInt32BE(20)>4096*4096)throw Error('Invalid print dimensions');
  const {data,width,height}=PNG.sync.read(bytes);
  function ink(x,y){
    const offset=(y*width+x)*4;
    return (255-Math.min(data[offset],data[offset+1],data[offset+2]))*data[offset+3]/255;
  }
  let left=width,top=height,right=-1,bottom=-1;
  for(let y=0;y<height;y+=2)for(let x=0;x<width;x+=2){
    if(ink(x,y)<78)continue;
    left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);
  }
  if(right<=left||bottom<=top)return '没有可辨认的印花色面';
  const scale=Math.max(right-left+1,bottom-top+1)/128;
  const cols=Math.ceil((right-left+1)/scale),rows=Math.ceil((bottom-top+1)/scale);
  const mask=new Uint8Array(cols*rows),runs=new Array(rows+cols).fill(0);
  let area=0,edges=0;
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
    let sum=0;
    for(const dy of [.2,.7])for(const dx of [.2,.7]){
      sum+=ink(Math.min(width-1,Math.floor(left+(x+dx)*scale)),Math.min(height-1,Math.floor(top+(y+dy)*scale)));
    }
    if(sum<=320)continue;
    const i=y*cols+x;mask[i]=1;area++;
    if(x===0||!mask[i-1]){runs[y]++;edges++;}
    if(y===0||!mask[i-cols]){runs[rows+x]++;edges++;}
  }
  runs.sort((a,b)=>a-b);
  if(area/(rows*cols)<.14&&edges/area>.28)return '这次主要是空心描线，色面过少';
  if(runs[Math.floor(runs.length*.9)]>=12&&edges/area>.30)return '这次细线过密，缩小后会糊成一片';
  return '';
}
module.exports={proofIssue};
