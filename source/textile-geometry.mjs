import * as T from 'three';
import V from '../prototype/vessels.js';

const vec=(x,y,z)=>new T.Vector3(x,y,z),sq=x=>x*x;
// UVs follow the cut cloth, including the folded duvet flap.
function grid(point,side=1,n=48,m=n){
 const p=[],uv=[],idx=[];
 for(let j=0;j<=m;j++)for(let i=0;i<=n;i++){
  const q=point(i/n*2-1,j/m*2-1);p.push(q.x,q.y,q.z);uv.push(side===1?i/n:1-i/n,j/m);
  if(i<n&&j<m){const a=j*(n+1)+i,b=a+1,c=a+n+1,d=c+1;idx.push(...(side===1?[a,b,c,b,d,c]:[a,c,b,b,c,d]));}
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;
}
function boundary(fn,inset=1){const p=[];for(let e=0;e<4;e++)for(let i=0;i<40;i++){const t=(i/40*2-1)*inset;p.push(fn(e===0?t:e===1?inset:e===2?-t:-inset,e===0?-inset:e===1?t:e===2?inset:-t));}return p;}
function tube(points,r,mat,closed=false){const c=new T.CatmullRomCurve3(points,false,'centripetal');c.closed=closed;return new T.Mesh(new T.TubeGeometry(c,Math.max(24,points.length*2),r,6,closed),mat);}
function stuffed(u,v,w,h,d){
 const full=Math.pow(Math.max(0,(1-u*u)*(1-v*v)),.43);
 const x=u*w/2*(1-.12*(1-v*v)*Math.pow(Math.abs(u),6));
 const y=v*h/2*(1-.10*(1-u*u)*Math.pow(Math.abs(v),6));
 const folds=(Math.cos(u*21+v*3)*Math.exp(-sq((Math.abs(v)-.83)*12))+Math.cos(v*19-u*2)*Math.exp(-sq((Math.abs(u)-.83)*12)))*.010*full;
 return vec(x,y,.012+d/2*full+folds);
}
function quilt(u,v,side){
 let y,z;
 if(v<=.62){y=v*1.6;z=.04*Math.sin(u*4+v*2)+.022*Math.cos(v*8-u*3);}
 else if(v<.80){const a=(v-.62)/.18*Math.PI;y=.992+.15*Math.sin(a);z=.15*(1-Math.cos(a));}
 else{y=.992-(v-.80)*2.45;z=.30+.035*Math.sin(u*5);}
 const edge=Math.pow(Math.max(0,(Math.abs(u)-.72)/.28),2);
 z-=edge*.20+Math.pow(Math.max(0,(-v-.45)/.55),2)*.38;
 y+=.025*Math.sin(u*5)*Math.pow(Math.abs(v),3);z+=side*.045;
 return vec(u*1.37*(1-.025*Math.cos(v*4)),y,z);
}
export function createTextile(type){
 const c=V.get(type),[w,h,d]=c.size,group=new T.Group(),surfaces=[],tints=[];group.name='sewn-'+type+'-v2';
 const glaze=new T.MeshPhysicalMaterial({color:'#f5f1e6',roughness:.94,metalness:0,clearcoat:0,sheen:.28,sheenRoughness:.85,sheenColor:'#fff',side:T.DoubleSide,shadowSide:T.FrontSide});
 const trim=glaze.clone();trim.color.multiplyScalar(.88);
 const shade=factor=>{const material=glaze.clone();material.color.multiplyScalar(factor);tints.push({material,factor});return material;};
 const stitch=shade(.78);
 const add=(mesh,name)=>{if(name)mesh.name=name;group.add(mesh);return mesh;};
 function printFace(face,fn,width,height,side=1){const mesh=add(new T.Mesh(grid(fn,side,64),glaze.clone()),type+'-'+face);mesh.userData.fabricFace=face;mesh.userData.fabricSize=[width,height];surfaces.push(mesh);return mesh;}
 function edgeBridge(front,back,open=false,material=glaze){
  // No top cap on a tote: only two gussets and a closed bottom.
  for(const edge of open?[0,1,3]:[0,1,2,3]){
   const fn=(u,v)=>{const a=edge===0?front(u,-1):edge===1?front(1,u):edge===2?front(-u,1):front(-1,-u),b=edge===0?back(u,-1):edge===1?back(1,u):edge===2?back(-u,1):back(-1,-u);return a.lerp(b,(v+1)/2);};
   add(new T.Mesh(grid(fn,1,48,8),material),open?'tote-gusset-'+edge:'sewn-gusset-'+edge);
  }
 }
 if(type==='cushion'||type==='pillow'){
  const front=(u,v)=>stuffed(u,v,w,h,d),back=(u,v)=>{const p=front(u,v);p.z=-p.z;return p;};
  printFace('front',front,w,h);printFace('back',back,w,h,-1);edgeBridge(front,back);
  add(tube(boundary((u,v)=>{const p=front(u,v);p.z=0;return p;}),type==='cushion'?.011:.008,trim,true),'stitched-perimeter');
  for(const side of [-1,1])add(tube(boundary((u,v)=>{const p=stuffed(u,v,w,h,d);p.z*=side;return p;},.985),.0035,stitch,true),'fine-seam');
  if(type==='pillow'){group.rotation.x=-.82;group.rotation.z=-.06;}else group.rotation.z=-.065;
 }
 if(type==='duvet'){
  const front=(u,v)=>quilt(u,v,1),back=(u,v)=>quilt(u,v,-1);
  printFace('front',front,w,h);printFace('back',back,w,h,-1);edgeBridge(front,back);
  add(tube(boundary((u,v)=>quilt(u,v,0)),.008,trim,true),'bound-duvet-edge');add(tube(boundary(front,.985),.003,stitch,true),'duvet-hem-stitch');
  group.rotation.x=-1.04;group.rotation.z=-.045;
 }
 const print=add(new T.Mesh(new T.BufferGeometry(),glaze));print.visible=false;
 return {type,group,body:surfaces[0],print,glaze,surfaces,trim,tints,floor:new T.Box3().setFromObject(group).min.y};
}
