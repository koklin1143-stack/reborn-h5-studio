import * as T from 'three';

const v=(x,y,z)=>new T.Vector3(x,y,z),clamp=x=>Math.max(0,Math.min(1,x));
// A regular set-in-sleeve cut. The front neck is lower than the back neck.
const neck=(t,side,out=0)=>new T.Vector2(-( .35+out)*Math.cos(Math.PI*t),1.51-((side===1?.43:.09)+out)*Math.sin(Math.PI*t));
function cut(side){
 const shape=new T.Shape(),start=neck(0,side);shape.moveTo(start.x,start.y);
 for(let i=1;i<=40;i++){const p=neck(i/40,side);shape.lineTo(p.x,p.y);}
 shape.bezierCurveTo(.53,1.48,.72,1.42,.85,1.33);shape.bezierCurveTo(1.02,1.21,1.13,.96,1.23,.78);shape.lineTo(1.47,.36);shape.lineTo(1.08,.105);shape.quadraticCurveTo(1.015,.18,.965,.30);
 shape.bezierCurveTo(.965,-.22,.975,-.95,.99,-1.49);shape.quadraticCurveTo(.1,-1.52,-.99,-1.49);shape.bezierCurveTo(-.975,-.95,-.965,-.22,-.965,.30);shape.quadraticCurveTo(-1.015,.18,-1.08,.105);shape.lineTo(-1.47,.36);shape.lineTo(-1.23,.78);shape.bezierCurveTo(-1.13,.96,-1.02,1.21,-.85,1.33);shape.bezierCurveTo(-.72,1.42,-.53,1.48,-.35,1.51);shape.closePath();return shape;
}
function cloth(x,y,side){
 const halfWidth=.965+.025*clamp(-y/1.49),torso=Math.pow(Math.max(0,1-(x/halfWidth)**2),.6),sleeve=.047*Math.exp(-Math.pow((Math.abs(x)-1.17)/.28,2))*clamp((y-.05)/.35);
 const depth=.002+.11*torso+sleeve,fall=clamp((1.5-y)/1.8);
 // Small, long vertical folds follow gravity; the chest stays quiet for artwork.
 const folds=.012*Math.sin(x*9.5+y*.65)*fall+.005*Math.sin(x*17-y*1.1)*fall*fall;
 const seam=.006*Math.sin(y*8+Math.abs(x)*5)*Math.exp(-Math.pow((Math.abs(x)-.9)/.15,2))*Math.exp(-Math.pow((y-.35)/.4,2));
 return side*depth+folds+seam;
}
function seam(points,r,material,closed=false){
 return new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points,closed,'centripetal'),Math.max(48,points.length*2),r,5,closed),material);
}
function denseBoundary(shape){const points=shape.getPoints(10),dense=[];for(let i=0;i<points.length-1;i++){const a=points[i],b=points[i+1],n=Math.ceil(a.distanceTo(b)/.025);for(let j=0;j<n;j++)dense.push(a.clone().lerp(b,j/n));}return dense;}
export function buildTshirt({group,glaze,trim,stitch,add,face}){
 group.name='studio-daily-tshirt-v2';
 for(const side of [1,-1]){
  const shape=cut(side),name=side===1?'front':'back';
  face(name,shape,2.94,3.10,(x,y)=>cloth(x,y,side),side,[.5,.55,.58,.70],4);
  // The neckline is a bound U, not an oval cut out of a flat chest panel.
  const pos=[],uv=[],idx=[],n=64;
  for(let i=0;i<=n;i++)for(const out of [0,.055]){const p=neck(i/n,side,out);pos.push(p.x,p.y,cloth(p.x,p.y,side)+side*.0035);uv.push(i/n,out/.055);if(i<n&&out===0){const k=i*2;idx.push(k,k+1,k+2,k+1,k+3,k+2);}}
  const collar=new T.BufferGeometry();collar.setAttribute('position',new T.Float32BufferAttribute(pos,3));collar.setAttribute('uv',new T.Float32BufferAttribute(uv,2));collar.setIndex(idx);collar.computeVertexNormals();add(collar,trim,'tshirt-'+name+'-rib-neck');
  const outer=Array.from({length:65},(_,i)=>{const p=neck(i/64,side,.052);return v(p.x,p.y,cloth(p.x,p.y,side)+side*.006);});group.add(seam(outer,.0015,stitch));
  const hem=Array.from({length:65},(_,i)=>{const x=-.985+i/64*1.97,y=-1.455-.012*(1-x*x);return v(x,y,cloth(x,y,side)+side*.003);});group.add(seam(hem,.0018,stitch));
  for(const sign of [-1,1]){
   const cuff=Array.from({length:25},(_,i)=>{const t=i/24,x=sign*(1.44-.36*t),y=.40-.24*t;return v(x,y,cloth(x,y,side)+side*.003);});group.add(seam(cuff,.0018,stitch));
   const arm=Array.from({length:41},(_,i)=>{const t=i/40,x=sign*(.84+.12*t+.022*Math.sin(t*Math.PI)),y=1.33-1.02*t;return v(x,y,cloth(x,y,side)+side*.003);});group.add(seam(arm,.0016,trim));
  }
 }
 const boundary=denseBoundary(cut(1)),positions=[],idx=[];
 for(let i=0;i<boundary.length;i++){
  const a=boundary[i],b=boundary[(i+1)%boundary.length],mid=a.clone().add(b).multiplyScalar(.5);
  // Neck, bottom and sleeve openings remain open; only sewn edges join the panels.
  const sleeve=Math.abs(mid.x)>1.07&&mid.y<.38&&Math.abs(b.x-a.x)>Math.abs(b.y-a.y)*1.25;
  if(Math.abs(mid.x)<.351&&mid.y>1.05||mid.y< -1.48||sleeve)continue;
  const k=positions.length/3;for(const [p,side]of [[a,1],[b,1],[a,-1],[b,-1]])positions.push(p.x,p.y,cloth(p.x,p.y,side));idx.push(k,k+1,k+2,k+1,k+3,k+2);
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setIndex(idx);g.computeVertexNormals();add(g,glaze,'tshirt-sewn-shoulders-and-sides');
 group.rotation.z=0;
}
