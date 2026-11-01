import * as T from 'three';
import V from '../prototype/vessels.js';
export const PRINT_REGION={thetaMin:-1.02,thetaMax:1.02,yMin:-.68,yMax:.68};
export const DEFAULT_CAMERA={yaw:.28,pitch:.28,distance:4.8};
export function clampCamera(value={}){const n=(v,def)=>Number.isFinite(Number(v))?Number(v):def;return {yaw:((n(value.yaw,.28)+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,pitch:T.MathUtils.clamp(n(value.pitch,.28),-.65,1.15),distance:T.MathUtils.clamp(n(value.distance,4.8),3.7,8)};}
export function printGeometry(){const positions=[],uvs=[],normals=[],indices=[],cols=64,rows=12;for(let j=0;j<=rows;j++){const v=j/rows,y=PRINT_REGION.yMin+v*(PRINT_REGION.yMax-PRINT_REGION.yMin),radius=.97+(y+.90)/1.83*.03+.003;for(let i=0;i<=cols;i++){const u=i/cols,a=PRINT_REGION.thetaMin+u*(PRINT_REGION.thetaMax-PRINT_REGION.thetaMin);positions.push(Math.sin(a)*radius,y,Math.cos(a)*radius);normals.push(Math.sin(a),-.03/1.83,Math.cos(a));uvs.push(u,v);if(j<rows&&i<cols){const k=j*(cols+1)+i;indices.push(k,k+1,k+cols+1,k+1,k+cols+2,k+cols+1);}}}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('normal',new T.Float32BufferAttribute(normals,3));g.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));g.setIndex(indices);return g;}
export function createCup(){const group=new T.Group();group.name='procedural-enamel-cup-v1';const glaze=new T.MeshPhysicalMaterial({color:'#f5f1e6',roughness:.23,metalness:0,clearcoat:1,clearcoatRoughness:.12,vertexColors:true});const rim=new T.MeshPhysicalMaterial({color:'#163d51',roughness:.26,metalness:0,ior:1.5,clearcoat:.54,clearcoatRoughness:.17});const profile=V.data.cup.profile.map(([x,y])=>new T.Vector2(x,y));const body=new T.Mesh(new T.LatheGeometry(profile,96),glaze);body.name='hollow-body';const colors=[];for(let i=0;i<body.geometry.attributes.position.count;i++){const row=i%profile.length,y=body.geometry.attributes.position.getY(i),shade=row>=9?.83+.14*(y+.84)/1.82:1;colors.push(shade,shade,shade);}body.geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));group.add(body);
const lip=new T.Mesh(new T.TorusGeometry(.963,.041,16,128),rim);lip.rotation.x=Math.PI/2;lip.position.y=.98;lip.name='rolled-blue-rim';group.add(lip);
const foot=new T.Mesh(new T.TorusGeometry(.905,.020,12,96),glaze);foot.rotation.x=Math.PI/2;foot.position.y=-.995;foot.name='base-rim';group.add(foot);
const curve=new T.CatmullRomCurve3([[.974,.62,0],[1.14,.68,0],[1.39,.64,0],[1.54,.45,0],[1.57,.20,0],[1.47,-.08,0],[1.26,-.30,0],[.972,-.46,0]].map(p=>new T.Vector3(...p)));
// Oval section follows the bent enamel-coated steel strap instead of a round pipe.
const handleGeometry=new T.TubeGeometry(curve,64,1,16,false),hp=handleGeometry.attributes.position;
for(let i=0;i<=64;i++){
 const u=i/64,center=curve.getPointAt(u),t=curve.getTangentAt(u),n=new T.Vector3(-t.y,t.x,0);
 const weld=Math.exp(-Math.min(u,1-u)*14),halfWidth=.130+.042*weld,halfDepth=.047-.014*weld;
 const corner=v=>Math.sign(v)*Math.pow(Math.abs(v),.68);
 for(let j=0;j<=16;j++){
  const a=j*Math.PI/8,v=center.clone().addScaledVector(n,-corner(Math.cos(a))*halfDepth);
  v.z+=corner(Math.sin(a))*halfWidth;hp.setXYZ(i*17+j,v.x,v.y,v.z);
 }
}
handleGeometry.computeVertexNormals();const handle=new T.Mesh(handleGeometry,glaze);handle.name='handle-unprinted';group.add(handle);
for(const y of [.62,-.46]){const join=new T.Mesh(new T.SphereGeometry(1,16,12),glaze);join.position.set(.976,y,0);join.scale.set(.036,.105,.185);join.name='enamel-handle-joint';group.add(join);}

const printMaterial=new T.MeshPhysicalMaterial({color:'#ffffff',transparent:true,roughness:.23,metalness:0,clearcoat:1,clearcoatRoughness:.12,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1,side:T.FrontSide});const print=new T.Mesh(printGeometry(),printMaterial);print.name='front-print-region';print.renderOrder=1;group.add(print);group.traverse(o=>{if(o.isMesh&&o.material===glaze&&!o.geometry.attributes.color)o.geometry.setAttribute('color',new T.Float32BufferAttribute(new Float32Array(o.geometry.attributes.position.count*3).fill(1),3));});return {group,body,handle,print,glaze,rim};}
