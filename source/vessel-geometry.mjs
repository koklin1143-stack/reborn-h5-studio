import * as T from 'three';
import V from '../prototype/vessels.js';
import {createCup} from './cup-geometry.mjs';
import {createTextile} from './textile-geometry.mjs';
import {createBag} from './bag-geometry.mjs';
export function diskPrint(type){const config=V.get(type),segments=96,rings=24,p=[],uv=[],indices=[];
 for(let j=0;j<=rings;j++){const r=j/rings*config.printRadius,y=V.height(type,r)+.004;for(let i=0;i<=segments;i++){const a=i/segments*Math.PI*2,x=r*Math.cos(a),z=r*Math.sin(a);p.push(x,y,z);uv.push(.5+x/(2*config.printRadius),.5-z/(2*config.printRadius));if(j<rings&&i<segments){const k=j*(segments+1)+i;indices.push(k,k+1,k+segments+1,k+1,k+segments+2,k+segments+1);}}}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(p,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
}
// Interpolate only the pressed sides and dish faces. The rolled lip, foot and
// flat centre keep their authored corners. Logical rows stay stable for old drafts.
function spunBody(type,c){
 const profile=c.profile,ranges={plate:[[4,8],[10,14]],bowl:[[4,9],[11,17]],basin:[[3,7],[8,14]]}[type];
 const points=[],designRows=[];
 const slope=i=>(profile[i+1][1]-profile[i][1])/(profile[i+1][0]-profile[i][0]);
 const tangent=(i,from,to)=>{
  if(i===from)return slope(i);if(i===to)return slope(i-1);
  const a=slope(i-1),b=slope(i);return a*b<=0?0:2*a*b/(a+b);
 };
 for(let i=0;i<profile.length-1;i++){
  const [x,y]=profile[i],[xx,yy]=profile[i+1],run=ranges.find(([from,to])=>i>=from&&i<to);
  const steps=run?Math.min(7,Math.ceil(Math.hypot(xx-x,yy-y)/.072)):1;
  for(let j=0;j<steps;j++){
   const t=j/steps,h=t*t*(3-2*t);
   const Y=run?y+(yy-y)*h+(xx-x)*(t*(1-t)**2*tangent(i,...run)-t*t*(1-t)*tangent(i+1,...run)):y;
   points.push(new T.Vector2(x+(xx-x)*t,Y));designRows.push(i+t);
  }
 }
 points.push(new T.Vector2(...profile.at(-1)));designRows.push(profile.length-1);
 const g=new T.LatheGeometry(points,128);g.userData.designRows=designRows;return g;
}
export function createVessel(type='cup'){
 if(['backpack','tote'].includes(type))return createBag(type);
 if(V.textile(type))return createTextile(type);
 if(type==='cup')return {...createCup(),type,floor:-1.035};
 if(!V.data[type])throw Error('模型尚未接入');const c=V.get(type),group=new T.Group();group.name='procedural-enamel-'+type+'-v1';
 const glaze=new T.MeshPhysicalMaterial({color:'#f5f1e6',roughness:c.roughness,metalness:0,clearcoat:1,clearcoatRoughness:.12}),rim=new T.MeshPhysicalMaterial({color:c.rim,roughness:.265,metalness:0,ior:1.48,clearcoat:.55,clearcoatRoughness:.17});
 const body=new T.Mesh(spunBody(type,c),glaze);body.name=type+'-hollow-body';group.add(body);
 const lip=new T.Mesh(new T.TorusGeometry(c.rimRadius,c.rimTube,16,128),rim);lip.rotation.x=Math.PI/2;lip.position.y=c.rimY;lip.name=type+'-rolled-rim';group.add(lip);
 const foot=new T.Mesh(new T.TorusGeometry(c.foot,.02,12,96),glaze);foot.rotation.x=Math.PI/2;foot.position.y=c.floor+.02;group.add(foot);
 const print=new T.Mesh(diskPrint(type),new T.MeshPhysicalMaterial({color:'#fff',roughness:c.roughness,metalness:0,clearcoat:1,clearcoatRoughness:.12,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1,side:T.FrontSide}));print.name=type+'-interior-print';print.renderOrder=1;group.add(print);
 return {type,group,body,print,glaze,rim,floor:c.floor};
}
