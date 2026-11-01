const {PNG}=require('pngjs');

// A low-resolution working sketch, never a user-facing result. Keep the user's
// landmarks while giving the image model a visible mass and unprinted opening.
function validPlane(points){
 if(!Array.isArray(points)||points.length<3||points.length>10||!points.every(p=>
  Array.isArray(p)&&p.length===2&&p.every(n=>Number.isFinite(n)&&n>=0&&n<=1000)))return false;
 const area=points.reduce((sum,[x,y],i)=>{
  const [nextX,nextY]=points[(i+1)%points.length];
  return sum+x*nextY-y*nextX;
 },0);
 return Math.abs(area)>500;
}
function contains(points,x,y){
 let inside=false;
 for(let i=0,j=points.length-1;i<points.length;j=i++){
  const [a,b]=points[i],[c,d]=points[j];
  if((b>y)!==(d>y)&&x<(c-a)*(y-b)/(d-b)+a)inside=!inside;
 }
 return inside;
}
function inkPlan(source,planes,hex){
 if(!source.startsWith('data:image/png;base64,')||!planes)return null;
 const bytes=Buffer.from(source.slice(22),'base64');
 if(bytes.length<33||bytes.readUInt32BE(16)!==768||bytes.readUInt32BE(20)!==768)return null;
 const sketch=PNG.sync.read(bytes),size=288,out=new PNG({width:size,height:size});
 const pigment=hex.slice(1).match(/../g).map(pair=>parseInt(pair,16));
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const u=(x+.5)/size,v=(y+.5)/size;
  const i=(Math.floor(v*sketch.height)*sketch.width+Math.floor(u*sketch.width))*4;
  const mark=(1-Math.min(...sketch.data.subarray(i,i+3))/255)*sketch.data[i+3]/255;
  const painted=contains(planes.mass,u*1000,v*1000)&&!contains(planes.reserve,u*1000,v*1000);
  let coverage=painted ? .79 : 0;
  coverage=Math.max(coverage,mark*.72);
  const k=(y*size+x)*4;
  for(let c=0;c<3;c++)out.data[k+c]=Math.round(255+(pigment[c]-255)*coverage);
  out.data[k+3]=255;
 }
 return 'data:image/png;base64,'+PNG.sync.write(out).toString('base64');
}
module.exports={inkPlan,validPlane};
