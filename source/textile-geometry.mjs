import * as T from 'three';
import V from '../prototype/vessels.js';

// Sewn front/back panels share their boundary; UVs follow the cloth deformation.
function panelPoint(u,v,w,h,d,kind,side){
 const inset=1-.065*Math.pow(Math.abs(v),10),vertical=1-.065*Math.pow(Math.abs(u),10);
 const fullness=Math.pow(Math.max(0,(1-u*u)*(1-v*v)),kind==='bag'?.22:.52);
 const wrinkle=.012*Math.sin(u*24+v*5)*Math.exp(-Math.pow((Math.abs(v)-.82)*8,2))*(1-u*u)*(1-v*v);
 const drape=kind==='duvet'?.065*Math.sin(u*5+v*2)+.025*Math.sin(v*11+u*4):0;
 return new T.Vector3(u*w/2*inset,v*h/2*vertical,side*(.015+d/2*fullness+wrinkle)+drape);
}
function panel(w,h,d,kind,side){
 const n=48,p=[],uv=[],idx=[];
 for(let j=0;j<=n;j++)for(let i=0;i<=n;i++){
  const u=i/n*2-1,v=j/n*2-1,q=panelPoint(u,v,w,h,d,kind,side);p.push(q.x,q.y,q.z);uv.push(side===1?i/n:1-i/n,j/n);
  if(i<n&&j<n){const a=j*(n+1)+i,b=a+1,c=a+n+1,e=c+1;idx.push(...(side===1?[a,b,c,b,e,c]:[a,c,b,b,c,e]));}
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;
}
function seam(w,h,d,kind,side,material,offset=new T.Vector3()){
 const points=[];for(let edge=0;edge<4;edge++)for(let i=0;i<40;i++){
  const t=i/40*1.92-.96,u=edge===0?t:edge===1?.96:edge===2?-t:-.96,v=edge===0?-.96:edge===1?t:edge===2?.96:-t;
  points.push(panelPoint(u,v,w,h,d,kind,side).add(offset));
 }
 return new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points,true),160,.009,5,true),material);
}
function ribbon(points,width,material){
 const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),verts=[],uv=[],idx=[];
 for(let i=0;i<=40;i++){const t=i/40,p=curve.getPoint(t),tan=curve.getTangent(t),across=new T.Vector3(-tan.y,tan.x,0).normalize().multiplyScalar(width/2);for(const sign of [-1,1]){const q=p.clone().addScaledVector(across,sign);verts.push(q.x,q.y,q.z);uv.push(sign===1?1:0,t);}if(i<40){const a=i*2;idx.push(a,a+1,a+2,a+1,a+3,a+2);}}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(verts,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return new T.Mesh(g,material);
}
export function createTextile(type){
 const c=V.get(type),[w,h,d]=c.size,kind=type==='duvet'?'duvet':c.family==='bags'?'bag':'pillow';
 const group=new T.Group();group.name='sewn-'+type+'-v1';
 const glaze=new T.MeshPhysicalMaterial({color:'#f5f1e6',roughness:.94,metalness:0,clearcoat:0,sheen:.45,sheenRoughness:.9,sheenColor:'#fff',side:T.DoubleSide});
 const trim=glaze.clone();trim.color.set('#d7d0c1');const surfaces=[];
 for(const [face,side]of [['front',1],['back',-1]]){const mesh=new T.Mesh(panel(w,h,d,kind,side),glaze.clone());mesh.name=type+'-'+face;mesh.userData.fabricFace=face;mesh.userData.fabricSize=[w,h];group.add(mesh);surfaces.push(mesh);group.add(seam(w,h,d,kind,side,trim));}
 // Narrow edge closes the seam instead of leaving a hollow sheet.
 const edgePoints=[];for(let e=0;e<4;e++)for(let i=0;i<32;i++){const t=i/32*2-1;edgePoints.push(panelPoint(e===0?t:e===1?1:e===2?-t:-1,e===0?-1:e===1?t:e===2?1:-t,w,h,d,kind,0));}
 group.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(edgePoints,true),128,.02,6,true),trim));
 if(type==='backpack'){
  const pocket=new T.Mesh(panel(w*.78,h*.38,.18,'bag',1),glaze.clone());pocket.name='backpack-pocket';pocket.position.set(0,-.52,d/2-.015);pocket.userData.fabricFace='pocket';pocket.userData.fabricSize=[w*.78,h*.38];group.add(pocket);surfaces.push(pocket);group.add(seam(w*.78,h*.38,.18,'bag',1,trim,pocket.position));
  for(const side of [-1,1])group.add(ribbon([[side*.5,.92,-.28],[side*.74,.5,-.85],[side*.72,-.6,-.8],[side*.5,-1,-.22]],.22,trim));
  group.add(ribbon([[-.25,1.16,0],[-.21,1.48,0],[.21,1.48,0],[.25,1.16,0]],.09,trim));
  const zipper=new T.Mesh(new T.BoxGeometry(w*.66,.018,.018),new T.MeshStandardMaterial({color:'#77746f',metalness:.4,roughness:.55}));zipper.position.set(0,-.11,d/2+.09);group.add(zipper);
  const pull=new T.Mesh(new T.TorusGeometry(.04,.01,6,16),zipper.material);pull.scale.y=2;pull.position.set(w*.28,-.18,d/2+.1);group.add(pull);
 }
 if(type==='tote')for(const side of [-1,1])group.add(ribbon([[-.63,.9,side*.12],[-.55,1.84,side*.18],[0,2.03,side*.2],[.55,1.84,side*.18],[.63,.9,side*.12]],.13,trim));
 const print=new T.Mesh(new T.BufferGeometry(),glaze);print.visible=false;group.add(print);
 return {type,group,body:surfaces[0],print,glaze,surfaces,trim,floor:-h/2};
}
