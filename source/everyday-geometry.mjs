import * as T from 'three';
import {buildTshirt} from './tshirt-geometry.mjs';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';

const vec=(x,y,z)=>new T.Vector3(x,y,z);
export function roundedShape(x,y,w,h,r){
 const s=new T.Shape();s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s;
}
function pipe(points,r,material,closed=false){return new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points,closed,'centripetal'),Math.max(40,points.length*2),r,6,closed),material);}
// Subdivision keeps a garment's curved cloth (and print) continuous between seams.
function skin(shape,w,h,z,side=1,levels=0){
 let g=new T.ShapeGeometry(shape,10).toNonIndexed();
 for(let pass=0;pass<levels;pass++){
  const a=g.attributes.position,points=[];
  for(let i=0;i<a.count;i+=3){const p=[0,1,2].map(n=>vec(a.getX(i+n),a.getY(i+n),0)),m=p.map((q,n)=>q.clone().add(p[(n+1)%3]).multiplyScalar(.5));for(const q of [p[0],m[0],m[2],m[0],p[1],m[1],m[2],m[1],p[2],m[0],m[1],m[2]])points.push(q.x,q.y,0);}
  g.dispose();g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(points,3));
 }
 const a=g.attributes.position,uv=[];
 for(let i=0;i<a.count;i++){const x=a.getX(i),y=a.getY(i);a.setZ(i,z(x,y));uv.push(Math.max(0,Math.min(1,.5+side*x/w)),Math.max(0,Math.min(1,.5+y/h)));}
 g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));const merged=mergeVertices(g);g.dispose();merged.computeVertexNormals();
 if(side<0){const idx=merged.index;for(let i=0;i<idx.count;i+=3){const b=idx.getX(i+1);idx.setX(i+1,idx.getX(i+2));idx.setX(i+2,b);}}
 // Analytic cloth normals avoid lighting seams between differently shaped triangles.
 const normals=merged.attributes.normal,points=merged.attributes.position,e=.0005;
 for(let i=0;i<points.count;i++){const x=points.getX(i),y=points.getY(i),n=vec(-(z(x+e,y)-z(x-e,y))/(2*e),-(z(x,y+e)-z(x,y-e))/(2*e),1).normalize().multiplyScalar(side);normals.setXYZ(i,n.x,n.y,n.z);}
 return merged;
}
export function createEveryday(type){
 const group=new T.Group(),surfaces=[],tints=[];group.name='studio-daily-'+type+'-v1';
 const cloth=type==='tshirt',glaze=new T.MeshPhysicalMaterial({color:'#f5f1e6',roughness:cloth?.94:type==='notebook'?.83:.64,metalness:0,clearcoat:0,sheen:cloth?.2:0,sheenRoughness:.9,side:T.DoubleSide,shadowSide:T.FrontSide});
 const tint=factor=>{const material=glaze.clone();material.color.multiplyScalar(factor);tints.push({material,factor});return material;},trim=tint(.9),stitch=tint(.74);
 const add=(g,m,name)=>{const mesh=new T.Mesh(g,m);mesh.name=name;group.add(mesh);return mesh;};
 const solid=(shape,depth,z,material,name,bevel=.006)=>{const g=new T.ExtrudeGeometry(shape,{depth,bevelEnabled:bevel>0,bevelSegments:3,steps:1,bevelSize:bevel,bevelThickness:bevel,curveSegments:12});g.translate(0,0,z);return add(g,material,name);};
 const face=(name,shape,w,h,z,side=1,box=[.5,.5,1,1],levels=0)=>{const mesh=add(skin(shape,w,h,z,side,levels),glaze.clone(),type+'-'+name);mesh.userData={fabricFace:name,fabricSize:[w,h],localPrintBox:box};surfaces.push(mesh);return mesh;};
 if(type==='notebook'){
  const cover=roundedShape(-1.02,-1.43,2.04,2.86,.09),paper=roundedShape(-.98,-1.385,1.955,2.77,.055);
  const ivory=new T.MeshStandardMaterial({color:'#f2eee0',roughness:1}),edge=new T.MeshStandardMaterial({color:'#c7c1af',roughness:1});
  solid(paper,.25,-.125,ivory,'notebook-paper-block',.006);
  solid(cover,.027,.136,glaze,'notebook-front-cover');solid(cover,.027,-.163,glaze,'notebook-back-cover');
  face('front',cover,2.04,2.86,()=>.170,1,[.52,.5,.88,.94]);face('back',cover,2.04,2.86,()=>-.170,-1,[.48,.5,.88,.94]);
  // Rounded cloth spine joins the two covers, leaving all three paper edges visible.
  const spineShape=roundedShape(-1.045,-1.422,.16,2.844,.055);solid(spineShape,.294,-.147,trim,'notebook-bound-spine',.018);
  for(let i=0;i<20;i++){const z=-.119+i*.0125,line=pipe([vec(.985,-1.33,z),vec(.985,0,z),vec(.985,1.33,z)],.0012,edge);line.userData.noShadow=true;group.add(line);}
  for(const y of [-1.394,1.394])for(let i=0;i<13;i++){const line=pipe([vec(-.89,y,-.118+i*.019),vec(.45,y,-.118+i*.019),vec(.94,y,-.118+i*.019)],.001,edge);line.userData.noShadow=true;group.add(line);}
  for(const side of [-1,1])group.add(pipe([vec(-.88,-1.36,side*.171),vec(-.88,0,side*.171),vec(-.88,1.36,side*.171)],.0025,trim));
  const ribbon=roundedShape(.54,-1.55,.065,.20,.005);solid(ribbon,.006,-.035,stitch,'notebook-ribbon',.001);
 }
 if(type==='phonecase'){
  const shape=roundedShape(-.76,-1.53,1.52,3.06,.23),camera=roundedShape(-.635,.66,.72,.72,.16);shape.holes.push(new T.Path(camera.getPoints(12)));
  solid(shape,.042,.018,glaze,'phonecase-back-shell',.004);
  face('front',shape,1.52,3.06,()=>.065,1,[.5,.405,.92,.67]);
  const rim=roundedShape(-.76,-1.53,1.52,3.06,.23);rim.holes.push(new T.Path(roundedShape(-.695,-1.465,1.39,2.93,.19).getPoints(12)));
  solid(rim,.20,-.15,trim,'phonecase-protective-rim',.009);
  const lip=roundedShape(-.663,.632,.776,.776,.18);lip.holes.push(new T.Path(camera.getPoints(12)));solid(lip,.034,.06,trim,'phonecase-camera-lip',.004);
  for(const [side,y,h]of [[1,.38,.34],[-1,.48,.23],[-1,.12,.23]]){const button=roundedShape(-.022,-h/2,.044,h,.015),mesh=solid(button,.046,-.023,glaze,'phonecase-button',.003);mesh.rotation.y=Math.PI/2;mesh.position.set(side*.767,y,-.055);}
  // A recessed port mark on the bottom edge; the camera opening is real geometry.
  const port=add(new T.BoxGeometry(.22,.005,.067),new T.MeshStandardMaterial({color:'#807d75',roughness:.9}),'phonecase-port');port.position.set(0,-1.54,-.065);
 }
 if(type==='tshirt')buildTshirt({group,glaze,trim,stitch,add,face});
 const print=add(new T.BufferGeometry(),glaze,'hidden-print-contract');print.visible=false;
 return {type,group,body:surfaces[0],print,glaze,surfaces,trim,tints};
}
