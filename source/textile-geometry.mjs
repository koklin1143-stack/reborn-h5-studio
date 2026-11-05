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
function ribbon(points,width,thickness,mat){
 const curve=new T.CatmullRomCurve3(points.map(p=>vec(...p))),n=64,p=[],uv=[],idx=[];
 // Closed edges keep straps visible from side views.
 for(let i=0;i<=n;i++){
  const t=i/n,c=curve.getPoint(t),tan=curve.getTangent(t),across=vec(-tan.y,tan.x,0).normalize();
  for(const [a,b]of [[-1,-1],[1,-1],[1,1],[-1,1]]){const q=c.clone().addScaledVector(across,a*width/2);q.z+=b*thickness/2;p.push(q.x,q.y,q.z);uv.push((a+1)/2,t);}
  if(i<n)for(let k=0;k<4;k++){const a=i*4+k,b=i*4+(k+1)%4;idx.push(a,b,a+4,b,b+4,a+4);}
 }
 idx.push(0,2,1,0,3,2,n*4,n*4+1,n*4+2,n*4,n*4+2,n*4+3);
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return new T.Mesh(g,mat);
}
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
function pack(u,v,w,h,d,side,pocket=false){
 const top=h/2-(pocket?.055:.60)*Math.pow(Math.abs(u),3),bottom=-h/2+.08*Math.pow(Math.abs(u),8);
 const y=bottom+(v+1)/2*(top-bottom),x=u*w/2*(1-.045*Math.pow(Math.abs(v),8));
 const rounding=Math.min(.07,d*.22)*(Math.pow(Math.abs(u),10)+Math.pow(Math.abs(v),10));
 return vec(x,y,side*(d/2-rounding+.055*(1-u*u)*(1-v*v)));
}
function tote(u,v,side){
 const w=1.02+.075*v,x=u*w*(1-.035*Math.pow(Math.abs(v),8));
 const y=v*1.09-.085*(1-u*u)*Math.pow((v+1)/2,8)+.09*Math.pow(Math.abs(u),8)*Math.pow((1-v)/2,8);
 const hang=(.026*Math.sin(u*13+v*2)+.012*Math.sin(u*25-v*4))*(1-u*u)*(1-v*v);
 const pulls=-.035*(Math.exp(-sq((u-.56)*9))+Math.exp(-sq((u+.56)*9)))*Math.pow((v+1)/2,2);
 return vec(x,y,side*(.29-.105*Math.pow(Math.abs(u),6)+.045*(1-v*v)+hang+pulls));
}
export function createTextile(type){
 const c=V.get(type),[w,h,d]=c.size,group=new T.Group(),surfaces=[],tints=[];group.name='sewn-'+type+'-v2';
 const glaze=new T.MeshPhysicalMaterial({color:'#f5f1e6',roughness:.94,metalness:0,clearcoat:0,sheen:.28,sheenRoughness:.85,sheenColor:'#fff',side:T.DoubleSide,shadowSide:T.FrontSide});
 const trim=glaze.clone();trim.color.multiplyScalar(.88);
 const shade=factor=>{const material=glaze.clone();material.color.multiplyScalar(factor);tints.push({material,factor});return material;};
 const bag=c.family==='bags',lining=bag?shade(.62):trim,webbing=bag?shade(.86):trim,stitch=type==='backpack'?trim:shade(.78),metal=bag?new T.MeshStandardMaterial({color:'#827e73',metalness:.65,roughness:.48}):trim;
 const add=(mesh,name)=>{if(name)mesh.name=name;group.add(mesh);return mesh;};
 function printFace(face,fn,width,height,side=1){const mesh=add(new T.Mesh(grid(fn,side,64),glaze.clone()),type+'-'+face);mesh.userData.fabricFace=face;mesh.userData.fabricSize=[width,height];surfaces.push(mesh);return mesh;}
 function edgeBridge(front,back,open=false,material=glaze){
  // No top cap on a tote: only two gussets and a closed bottom.
  for(const edge of open?[0,1,3]:[0,1,2,3]){
   const fn=(u,v)=>{const a=edge===0?front(u,-1):edge===1?front(1,u):edge===2?front(-u,1):front(-1,-u),b=edge===0?back(u,-1):edge===1?back(1,u):edge===2?back(-u,1):back(-1,-u);return a.lerp(b,(v+1)/2);};
   add(new T.Mesh(grid(fn,1,48,8),material),open?'tote-gusset-'+edge:'sewn-gusset-'+edge);
  }
 }
 function zip(points,name){
  add(tube(points,.014,lining),name+'-tape');add(tube(points.map(p=>p.clone().add(vec(0,0,.012))),.0055,metal),name+'-teeth');
  const at=points[Math.floor(points.length*.83)],pull=add(new T.Mesh(new T.TorusGeometry(.028,.007,5,12),metal),name+'-pull');pull.scale.y=2.2;pull.position.copy(at).add(vec(0,-.045,.028));
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
 if(type==='backpack'){
  const front=(u,v)=>pack(u,v,w,h,d,1),back=(u,v)=>pack(u,v,w,h,d,-1);
  printFace('front',front,w,h);printFace('back',back,w,h,-1);edgeBridge(front,back);
  for(const fn of [front,back])add(tube(boundary(fn),.009,trim,true),'backpack-panel-binding');
  const pocketFront=(u,v)=>pack(u,v,1.44,.88,.22,1,true).add(vec(0,-.57,.49)),pocketBack=(u,v)=>pack(u,v,1.44,.88,.22,-1,true).add(vec(0,-.57,.49));
  printFace('pocket',pocketFront,1.44,.88);edgeBridge(pocketFront,pocketBack);add(tube(boundary(pocketFront),.008,trim,true),'pocket-binding');
  zip(Array.from({length:41},(_,i)=>pocketFront(i/20-1,.86).add(vec(0,0,.008))),'pocket-zip');
  const zipper=[];for(let i=0;i<=20;i++){const p=front(-1,i/20*1.25-.25);p.z=.08;zipper.push(p);}for(let i=1;i<=40;i++){const p=front(i/20-1,1);p.z=.08;zipper.push(p);}for(let i=1;i<=20;i++){const p=front(1,1-i/20*1.25);p.z=.08;zipper.push(p);}zip(zipper,'main-zip');
  for(const sign of [-1,1]){
   add(ribbon([[sign*.42,.94,-.37],[sign*.63,.58,-.78],[sign*.66,-.27,-.85],[sign*.57,-.84,-.54],[sign*.58,-1.13,-.30]],.25,.07,webbing),'padded-shoulder-strap');
   const buckle=add(new T.Mesh(new T.BoxGeometry(.27,.12,.055),metal),'strap-adjuster');buckle.position.set(sign*.59,-.81,-.62);
   add(new T.Mesh(grid((u,v)=>vec(sign*(.87+.085*(1-u*u)*(1-v*v)),-.72+v*.32,u*.27),sign,24),shade(.93)),'side-slip-pocket');
   add(tube(Array.from({length:17},(_,i)=>vec(sign*.88,-.4,i/16*.54-.27)),.012,trim),'side-pocket-opening');
  }
  add(ribbon([[-.25,1.15,-.1],[-.20,1.47,-.11],[.20,1.47,-.11],[.25,1.15,-.1]],.095,.035,webbing),'carry-loop');
 }
 if(type==='tote'){
  const front=(u,v)=>tote(u,v,1),back=(u,v)=>tote(u,v,-1);
  printFace('front',front,w,h);printFace('back',back,w,h,-1);edgeBridge(front,back,true);
  for(const side of [1,-1]){
   add(new T.Mesh(grid((u,v)=>{const p=tote(u*.995,v*.995,side);p.z-=side*.012;return p;},side),lining),'tote-interior');
   add(tube(Array.from({length:49},(_,i)=>tote(i/24-1,1,side)),.017,trim),'open-mouth-hem');
   add(tube(Array.from({length:49},(_,i)=>tote(i/24-1,.94,side).add(vec(0,0,side*.006))),.0035,stitch),'mouth-stitch');
   const z=side*.30;
   add(ribbon([[-.57,.75,z],[-.59,1.20,z+side*.08],[-.45,1.87,z+side*.09],[.03,2.03,z],[.48,1.83,z],[.59,1.22,z],[.57,.75,z]],.115,.027,webbing),'canvas-handle');
   for(const sign of [-1,1]){const x=sign*.57;add(tube([vec(x-.045,.78,z+side*.02),vec(x+.045,.96,z+side*.02),vec(x-.045,.96,z+side*.02),vec(x+.045,.78,z+side*.02)],.003,stitch),'handle-cross-stitch');}
  }
  for(const u of [-1,1])add(tube(Array.from({length:41},(_,i)=>tote(u,i/20-1,1)),.006,trim),'boxed-corner-seam');
 }
 const print=add(new T.Mesh(new T.BufferGeometry(),glaze));print.visible=false;
 return {type,group,body:surfaces[0],print,glaze,surfaces,trim,tints,floor:new T.Box3().setFromObject(group).min.y};
}
