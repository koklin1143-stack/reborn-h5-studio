import * as T from 'three';

const v=(x,y,z)=>new T.Vector3(x,y,z),sq=x=>x*x;
function panel(fn,side=1,cols=56,rows=64){
 const p=[],uv=[],index=[];
 for(let j=0;j<=rows;j++)for(let i=0;i<=cols;i++){
  const q=fn(i/cols*2-1,j/rows*2-1);p.push(q.x,q.y,q.z);uv.push(side===1?i/cols:1-i/cols,j/rows);
  if(i<cols&&j<rows){const a=j*(cols+1)+i,b=a+1,c=a+cols+1,d=c+1;index.push(...(side===1?[a,b,c,b,d,c]:[a,c,b,b,c,d]));}
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(index);g.computeVertexNormals();return g;
}
function piping(points,r,material,closed=false){const c=new T.CatmullRomCurve3(points,closed,'centripetal');return new T.Mesh(new T.TubeGeometry(c,Math.max(48,points.length*2),r,6,closed),material);}
function rim(fn,inset=1){const a=[];for(let e=0;e<4;e++)for(let i=0;i<32;i++){const t=(i/16-1)*inset;a.push(fn(e===0?t:e===1?inset:e===2?-t:-inset,e===0?-inset:e===1?t:e===2?inset:-t));}return a;}
// One continuous solid strap, including the two ends sewn onto the cloth.
function strap(points,width,thickness,material){
 const c=new T.CatmullRomCurve3(points,false,'centripetal'),p=[],uv=[],idx=[],n=112;
 for(let i=0;i<=n;i++){
  const t=i/n,at=c.getPoint(t),tangent=c.getTangent(t),across=v(-tangent.y,tangent.x,0).normalize(),normal=new T.Vector3().crossVectors(tangent,across).normalize();
  for(const [a,b]of [[-1,-1],[1,-1],[1,1],[-1,1]]){const q=at.clone().addScaledVector(across,a*width/2).addScaledVector(normal,b*thickness/2);p.push(q.x,q.y,q.z);uv.push((a+1)/2,t);}
  if(i<n)for(let j=0;j<4;j++){const a=i*4+j,b=i*4+(j+1)%4;idx.push(a,b,a+4,b,b+4,a+4);}
 }
 idx.push(0,2,1,0,3,2,n*4,n*4+1,n*4+2,n*4,n*4+2,n*4+3);
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return new T.Mesh(g,material);
}

export function createBag(type){
 const group=new T.Group(),surfaces=[],tints=[];group.name='studio-sewn-'+type+'-v4';
 const threads=new Uint8Array(128*128*4);for(let y=0;y<128;y++)for(let x=0;x<128;x++){const at=(y*128+x)*4,height=128+Math.round(24*Math.sin(x*Math.PI/2)+24*Math.sin(y*Math.PI/2)*(Math.floor(x/4)%2?1:-1));threads[at]=threads[at+1]=threads[at+2]=height;threads[at+3]=255;}
 const weave=new T.DataTexture(threads,128,128);weave.wrapS=weave.wrapT=T.RepeatWrapping;weave.repeat.set(6,6);weave.generateMipmaps=true;weave.minFilter=T.LinearMipmapLinearFilter;weave.magFilter=T.LinearFilter;weave.needsUpdate=true;
 const glaze=new T.MeshPhysicalMaterial({color:'#f5f1e6',roughness:.94,metalness:0,sheen:.22,sheenRoughness:.9,sheenColor:'#ffffff',clearcoat:0,bumpMap:weave,bumpScale:.0035,side:T.DoubleSide,shadowSide:T.FrontSide});
 const tint=factor=>{const material=glaze.clone();material.color.multiplyScalar(factor);tints.push({material,factor});return material;};
 const trim=tint(.88),thread=tint(.72),lining=tint(.72),webbing=tint(.84),zipTape=new T.MeshStandardMaterial({color:'#65655c',roughness:1}),metal=new T.MeshStandardMaterial({color:'#9c978b',metalness:.72,roughness:.4});
 const add=(mesh,name)=>{mesh.name=name;group.add(mesh);return mesh;};
 const face=(name,fn,w,h,side=1,local=[.5,.5,1,1])=>{const mesh=add(new T.Mesh(panel(fn,side),glaze.clone()),type+'-'+name);mesh.userData={fabricFace:name,fabricSize:[w,h],localPrintBox:local};surfaces.push(mesh);return mesh;};
 function join(front,back,open,material=glaze){
  for(const edge of open?[0,1,3]:[0,1,2,3]){
   const fn=(u,t)=>{const a=edge===0?front(u,-1):edge===1?front(1,u):edge===2?front(-u,1):front(-1,-u),b=edge===0?back(u,-1):edge===1?back(1,u):edge===2?back(-u,1):back(-1,-u);const q=a.lerp(b,(t+1)/2);
    if(open&&edge!==0)q.x*=1-.07*Math.pow(((edge===1?u:-u)+1)/2,5)*(1-t*t);
    return q;};add(new T.Mesh(panel(fn,1,56,12),material),type+'-joined-edge-'+edge);
  }
 }
 function zip(points,name){
  add(piping(points,.014,zipTape),name+'-tape');add(piping(points.map(p=>p.clone().add(v(0,0,.010))),.005,metal),name+'-teeth');
  const at=points[Math.round(points.length*.78)],pull=add(new T.Mesh(new T.TorusGeometry(.026,.006,6,14),metal),name+'-pull');pull.scale.y=2.4;pull.position.copy(at).add(v(0,-.043,.028));
 }
 if(type==='tote'){
  function cloth(u,t,side){
   const width=1.035+.08*t,x=u*width*(1-.024*Math.pow(Math.abs(t),8));
   const top=(t+1)/2,y=t*1.10-.065*(1-u*u)*Math.pow(top,8)+.075*Math.pow(Math.abs(u),8)*Math.pow(1-top,8);
   const tension=(Math.exp(-sq((u-.56)*9))+Math.exp(-sq((u+.56)*9)))*top*top;
   const z=.33-.09*Math.pow(Math.abs(u),6)+.03*(1-t*t)+.023*Math.sin(u*12+t*2)*(1-u*u)*(1-t*t)-.024*tension;
   return v(x,y,side*z);
  }
  const front=(u,t)=>cloth(u,t,1),back=(u,t)=>cloth(u,t,-1);
  face('front',front,2.15,2.2);face('back',back,2.15,2.2,-1);join(front,back,true);
  const inside=side=>(u,t)=>{const q=cloth(u*.994,t*.994,side);q.z-=side*.018;return q;};
  for(const side of [1,-1]){
   add(new T.Mesh(panel(inside(side),side),lining),'tote-inner-wall');
   // Folded hem follows the actual mouth; no detached cap across the opening.
   const hem=(u,t)=>{const q=cloth(u,.935+(t+1)*.0325,side);q.z+=side*.006;return q;};
   add(new T.Mesh(panel(hem,side,56,4),trim),'tote-folded-mouth-hem');
   add(piping(Array.from({length:57},(_,i)=>cloth(i/28-1,.938,side).add(v(0,0,side*.009))),.0022,thread),'tote-hem-stitch');
   const left=cloth(-.56,.70,side),right=cloth(.56,.70,side),mouthL=cloth(-.56,1,side),mouthR=cloth(.56,1,side);
   const z=side*.34,points=[left.clone().add(v(0,0,side*.009)),mouthL.clone().add(v(0,0,side*.018)),v(-.55,1.48,z+side*.055),v(-.36,1.91,z+side*.045),v(.02,2.02,z),v(.37,1.88,z+side*.02),v(.55,1.47,z+side*.04),mouthR.clone().add(v(0,0,side*.018)),right.clone().add(v(0,0,side*.009))];
   const handle=add(strap(points,.125,.022,webbing),'tote-sewn-handle');handle.userData.attachmentPoints=[left.toArray(),right.toArray()];
   for(const u of [-.56,.56]){
    const pts=[[-.042,.72],[.042,.91],[-.042,.91],[.042,.72],[-.042,.72],[-.042,.91],[.042,.91],[.042,.72]].map(([dx,t])=>cloth(u+dx,t,side).add(v(0,0,side*.025)));
    add(piping(pts,.0022,thread),'tote-handle-box-stitch');
   }
  }
  join(inside(1),inside(-1),true,lining);
  for(const side of [1,-1])for(const u of [-1,1])add(piping(Array.from({length:49},(_,i)=>cloth(u,i/24-1,side)),.004,trim),'tote-side-seam');
 }
 if(type==='backpack'){
  function body(u,t,side){
   const top=1.30-.48*Math.pow(Math.abs(u),2.7),bottom=-1.30+.11*Math.pow(Math.abs(u),8),y=bottom+(t+1)/2*(top-bottom),x=u*.96*(1-.035*Math.pow(Math.abs(t),8));
   const edge=Math.pow(Math.abs(u),10)*(1-.9*Math.pow(Math.max(t,0),4))+.8*Math.pow(Math.abs(t),10),puff=(1-u*u)*(1-t*t);
   const z=side===1?.44-.085*edge+.045*puff:-.36+.055*edge-.018*puff;
   return v(x,y,z);
  }
  const front=(u,t)=>body(u,t,1),back=(u,t)=>body(u,t,-1);
  face('front',front,1.92,2.6,1,[.5,.69,.87,.52]);face('back',back,1.92,2.6,-1,[.5,.5,.50,.78]);join(front,back,false);
  for(const fn of [front,back])add(piping(rim(fn),.006,trim,true),'backpack-panel-seam');
  const pf=(u,t)=>{const top=-.51-.035*Math.pow(Math.abs(u),6),bottom=-1.19+.055*Math.pow(Math.abs(u),8);return v(u*.81*(1-.03*Math.pow(Math.abs(t),8)),bottom+(t+1)/2*(top-bottom),.62-.05*(Math.pow(Math.abs(u),10)+Math.pow(Math.abs(t),10))+.023*(1-u*u)*(1-t*t));};
  const pb=(u,t)=>{const q=pf(u,t);q.z=.39;return q;};
  face('pocket',pf,1.62,.68,1,[.5,.43,.86,.70]);join(pf,pb,false);add(piping(rim(pf),.005,trim,true),'backpack-pocket-seam');
  zip(Array.from({length:57},(_,i)=>pf(i/28-1,.79).add(v(0,0,.006))),'pocket-zip');
  const arch=[];for(let i=0;i<=20;i++){const p=front(-1,-.05+i/20*1.05);p.z=.08;arch.push(p);}for(let i=1;i<=56;i++){const p=front(i/28-1,1);p.z=.08;arch.push(p);}for(let i=1;i<=20;i++){const p=front(1,1-i/20*1.05);p.z=.08;arch.push(p);}zip(arch,'main-zip');
  for(const sign of [-1,1]){
   const top=back(sign*.44,.84),bottom=back(sign*.62,-.85);
   add(strap([top,v(sign*.53,.69,-.59),v(sign*.63,.10,-.78),v(sign*.65,-.56,-.70),bottom],.23,.055,webbing),'backpack-padded-shoulder-strap');
   const adjuster=add(new T.Mesh(new T.TorusGeometry(.06,.009,5,16),metal),'backpack-strap-adjuster');adjuster.scale.x=1.55;adjuster.position.set(sign*.64,-.75,-.57);
   add(strap([v(sign*.62,-.85,-.41),v(sign*.66,-1.05,-.46),v(sign*.64,-1.20,-.42)],.10,.018,webbing),'backpack-webbing-tail');
  }
  add(strap([v(-.24,1.17,-.10),v(-.20,1.43,-.12),v(0,1.52,-.13),v(.20,1.43,-.12),v(.24,1.17,-.10)],.095,.026,webbing),'backpack-sewn-carry-loop');
 }
 // All views target the actual centre, including handles; the bag is never cut off.
 group.updateMatrixWorld(true);const bounds=new T.Box3().setFromObject(group);group.position.y=-(bounds.max.y+bounds.min.y)/2;
 const print=add(new T.Mesh(new T.BufferGeometry(),glaze),'hidden-print-contract');print.visible=false;
 return {type,group,body:surfaces[0],print,glaze,surfaces,trim,tints};
}
