/* Keep a few original pen passages in their original positions on a white field. */
const {PNG}=require('pngjs');

function inkReference(dataUrl,anchors){
  if(!dataUrl.startsWith('data:image/png;base64,'))return null;
  const bytes=Buffer.from(dataUrl.slice('data:image/png;base64,'.length),'base64');
  // The H5 normalizes the user drawing to this square before either model reads it.
  if(bytes.length<33||bytes.readUInt32BE(16)!==768||bytes.readUInt32BE(20)!==768)return null;
  const {width,height,data}=PNG.sync.read(bytes);
  const marks=[];
  let left=width,right=0,top=height,bottom=0;
  for(let y=0;y<height;y+=3)for(let x=0;x<width;x+=3){
    const i=(y*width+x)*4;
    if(data[i+3]<128||Math.min(data[i],data[i+1],data[i+2])>180)continue;
    marks.push([x,y]);left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);
  }
  if(!marks.length)return null;
  const targets=anchors?.length?anchors.map(([x,y])=>[x*width/1000,y*height/1000]):
    [[left,top],[(left+right)/2,top],[right,bottom]];
  const radius=Math.max(12,Math.min(84,Math.max(right-left,bottom-top)*.14));
  const windows=[];
  for(const [tx,ty] of targets){
    let nearest=null,min=Infinity;
    for(const [x,y] of marks){
      const dist=(tx-x)**2+(ty-y)**2;
      if(dist<min){min=dist;nearest=[x,y];}
    }
    if(windows.every(([x,y])=>Math.hypot(x-nearest[0],y-nearest[1])>radius))windows.push(nearest);
  }
  const out=new PNG({width,height});out.data.fill(255);
  for(const [cx,cy] of windows){
    for(let y=Math.max(0,Math.floor(cy-radius));y<=Math.min(height-1,cy+radius);y++){
      for(let x=Math.max(0,Math.floor(cx-radius));x<=Math.min(width-1,cx+radius);x++){
        const gain=Math.max(0,Math.min(1,(1-Math.hypot(x-cx,y-cy)/radius)*4));
        const i=(y*width+x)*4;
        for(let c=0;c<3;c++)out.data[i+c]=Math.min(out.data[i+c],255-(255-data[i+c])*gain*data[i+3]/255);
      }
    }
  }
  return 'data:image/png;base64,'+PNG.sync.write(out).toString('base64');
}
module.exports={inkReference};
