import * as T from 'three';
import V from '../prototype/vessels.js';

const modes=['disk','back','wall','belt','ring','wrap','faceFill'];
const tau=2*Math.PI;
const signedAngle=a=>Math.atan2(Math.sin(a),Math.cos(a));

// Periodic height and roughness, shared by the glazed and printed areas.
// A small linear-data texture avoids per-fragment procedural noise on phones.
function enamelGrain(){
 let seed=8713;
 function octave(size){
  const grid=Float32Array.from({length:size*size},()=>{
   seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;
  });
  return (u,v)=>{
   const x=u*size,y=v*size,i=Math.floor(x),j=Math.floor(y);
   const smooth=t=>t*t*(3-2*t),a=smooth(x-i),b=smooth(y-j);
   const at=(dx,dy)=>grid[((j+dy)%size)*size+(i+dx)%size];
   return (1-b)*((1-a)*at(0,0)+a*at(1,0))+b*((1-a)*at(0,1)+a*at(1,1));
  };
 }
 const low=octave(6),mid=octave(19),fine=octave(43),size=128,pixels=new Uint8Array(size*size*4);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const u=x/size,v=y/size,i=(y*size+x)*4,m=mid(u,v),l=low(u,v);
  pixels[i]=255*(.50*l+.34*m+.16*fine(u,v));pixels[i+1]=255*(.6*l+.4*m);pixels[i+3]=255;
 }
 const map=new T.DataTexture(pixels,size,size);
 map.wrapS=map.wrapT=T.RepeatWrapping;map.magFilter=T.LinearFilter;
 map.minFilter=T.LinearMipmapLinearFilter;map.generateMipmaps=true;map.needsUpdate=true;
 return map;
}

// Both the pigment and the drag target use the lathed body. Handle, foot and lip
// occlude pointer hits normally and never acquire a separate decal surface.
export function bindEnamelInk(vessel){
 const {body,print,glaze,type}=vessel,material=glaze.clone();
 body.material=material;print.visible=false;
 const geometry=body.geometry,points=geometry.parameters.points,rows=points.length;
 const design=geometry.userData.designRows||points.map((_,i)=>i);
 const distance=[0];
 for(let i=1;i<rows;i++)distance.push(distance[i-1]+points[i].distanceTo(points[i-1]));
 const count=geometry.attributes.position.count;
 geometry.setAttribute('profileRow',new T.BufferAttribute(Float32Array.from({length:count},(_,i)=>design[i%rows]),1));
 geometry.setAttribute('profileArc',new T.BufferAttribute(Float32Array.from({length:count},(_,i)=>distance[i%rows]),1));
 // A convex enamel dish receives diffuse room light through its mouth. Sample
 // that aperture once per profile row; every longitude shares the same result.
 const config=V.get(type),opening=config.rimRadius-config.rimTube;
 const visibility=points.map((pt,i)=>{
  if(type==='cup'||design[i]<config.profile.length-config.inner.length)return 1;
  const normals=geometry.attributes.normal,ny=normals.getY(i),nz=normals.getZ(i);
  let clear=0;
  for(let k=0;k<96;k++){
   const u=(k+.5)/96,a=k*2.39996323,h=Math.sqrt(u),vertical=Math.sqrt(1-u);
   const dy=ny*vertical+nz*h*Math.sin(a);
   if(dy<=.0001)continue;
   const t=Math.max(0,config.rimY-pt.y)/dy;
   const x=t*h*Math.cos(a),z=pt.x+t*(nz*vertical-ny*h*Math.sin(a));
   if(Math.hypot(x,z)<opening)clear++;
  }
  return clear/96;
 });
 geometry.setAttribute('apertureLight',new T.BufferAttribute(Float32Array.from({length:count},(_,i)=>visibility[i%rows]),1));
 const grain=enamelGrain();
 const uniforms={
  enamelGrain:{value:grain},lining:{value:new T.Color('#f4f0e4')},
  enamelInk:{value:null},inkReady:{value:0},printEnabled:{value:1},regionHighlight:{value:0},zoneMode:{value:0},printRows:{value:new T.Vector2()},
  fillMetrics:{value:new T.Vector3()},fillWinding:{value:new T.Vector2()},fillWindow:{value:new T.Vector4()},
  limits:{value:new T.Vector4()},inkTransform:{value:new T.Vector4()},wallAspect:{value:1}
 };
 let region,heading,arcStart,arcLength;
 function setPlacement(p){
  region=V.region(type,p.zone);
  uniforms.printEnabled.value=V.hasPrint(p)?1:0;
  if(V.isFill(region)){
   arcStart=distance[design.indexOf(region.rows[0])];
   arcLength=distance[design.indexOf(region.rows[1])]-arcStart;
   const winding=V.fillBasis(region,p);
   // Fit complete rows between foot and lip for an upright motif.
   const aspect=V.fillAspect(region,winding,arcLength);
   uniforms.fillMetrics.value.set(arcStart,1/arcLength,aspect);
   uniforms.fillWinding.value.set(...winding);
   uniforms.fillWindow.value.set(...V.fillWindow(region,p));
  }
  heading=(region.yaw||0)+(region.around?p.x*Math.PI/60:0);
  uniforms.zoneMode.value=modes.indexOf(region.mode);
  uniforms.printRows.value.set(...region.rows);
  uniforms.limits.value.set(region.low||0,region.high||1,heading,region.span||region.count||1);
  uniforms.wallAspect.value=region.mode==='wall'?(region.high-region.low)/(region.radius*region.span):1;
  if(V.isFill(region))uniforms.inkTransform.value.set(p.x/120,-p.y/120,0,1);
  else uniforms.inkTransform.value.set(region.around?0:p.x*3/512,-p.y*3/512,p.rotation*Math.PI/180,p.scale/100);
 }
 function hitUV(hit){
  if(!uniforms.printEnabled.value||!hit||hit.object!==body)return null;
  const face=hit.face,minRow=Math.min(design[face.a%rows],design[face.b%rows],design[face.c%rows]);
  if(minRow<region.rows[0]||minRow>=region.rows[1])return null;
  const {x,y,z}=body.worldToLocal(hit.point.clone()),r=Math.hypot(x,z),angle=Math.atan2(x,z);
  if(V.isFill(region)){
   const weights=hit.barycoord;
   const arc=weights.x*distance[face.a%rows]+weights.y*distance[face.b%rows]+weights.z*distance[face.c%rows];
   const v=(arc-arcStart)/arcLength;
   if(region.mode==='wrap')return {angle,y:v};
   const factor=(1-v)*.5/Math.max(r,.0001);return {x:x*factor,y:-z*factor};
  }
  const disk=region.mode==='disk'||region.mode==='back';
  if(disk)return r<=region.high?{x:.5+x/(2*region.high),y:.5+(region.mode==='back'?z:-z)/(2*region.high)}:null;
  const v=((region.mode==='ring'?r:y)-region.low)/(region.high-region.low);
  if(v<0||v>1)return null;
  const phase=signedAngle(angle-heading);
  if(region.mode==='wall'&&!region.around&&Math.abs(phase)>region.span/2)return null;
  return {angle,y:v};
 }
 // Pick only the visible body's printable region; handles and lips occlude it.
 function positionAt(hit){
  if(hit?.object!==body)return null;
  const row=Math.min(...['a','b','c'].map(k=>design[hit.face[k]%rows]));
  const {x,y,z}=body.worldToLocal(hit.point.clone()),radius=Math.hypot(x,z),angle=Math.atan2(x,z);
  const matches=Object.entries(V.positions[type]).filter(([,p])=>{
   const r=V.region(type,p.local);if(row<r.rows[0]||row>=r.rows[1])return false;
   if(r.mode==='disk'||r.mode==='back')return radius<=r.high;
   if(r.mode==='ring')return radius>=r.low&&radius<=r.high;
   if(r.mode==='belt')return y>=.68&&y<=r.high;
   if(r.mode==='wall')return y>=r.low&&y<=r.high&&(r.around||Math.abs(signedAngle(angle-(r.yaw||0)))<=r.span/2);
   return false;
  });
  return matches.find(([,p])=>['ring','belt'].includes(V.region(type,p.local).mode))?.[0]||matches[0]?.[0]||null;
 }
 material.customProgramCacheKey=()=>'spun-enamel-v4-'+type;
 material.onBeforeCompile=shader=>{
  Object.assign(shader.uniforms,uniforms);
  shader.vertexShader='attribute float profileRow,profileArc,apertureLight; varying float skyLight; varying vec2 sheetCoord; varying float inkRow; varying vec3 inkPosition;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ninkPosition=position; inkRow=profileRow; sheetCoord=vec2(uv.x,profileArc); skyLight=apertureLight;');
  shader.fragmentShader='uniform sampler2D enamelInk,enamelGrain; uniform vec3 lining,fillMetrics; uniform vec2 fillWinding; varying float skyLight; varying vec2 sheetCoord; uniform float inkReady,printEnabled,regionHighlight; uniform int zoneMode; uniform vec2 printRows; uniform vec4 limits,inkTransform,fillWindow; uniform float wallAspect; varying float inkRow; varying vec3 inkPosition;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`
   #include <color_fragment>
   float radius=length(inkPosition.xz);
   float angle=atan(inkPosition.x,inkPosition.z)-limits.z;
   float zoneMask=step(printRows.x,inkRow)*step(inkRow,printRows.y);
   float regionEdge=1.0-smoothstep(0.0,.12,min(inkRow-printRows.x,printRows.y-inkRow));
   vec2 uv;
   float inside=1.0;
   if(zoneMode>=5){
    float arc=(sheetCoord.y-fillMetrics.x)*fillMetrics.y;
    vec2 surface=zoneMode==5?vec2(sheetCoord.x,arc):vec2(inkPosition.x,-inkPosition.z)/max(radius,.0001)*((1.0-arc)*.5);
    vec2 offset=surface-fillWindow.xy;
    if(zoneMode==5)offset.x=fract(offset.x+0.5)-0.5;
    vec2 inset=fillWindow.zw-abs(offset);
    vec2 aa=max(fwidth(surface),vec2(0.00001));
    if(fillWindow.z<0.5)zoneMask*=smoothstep(-0.5*aa.x,0.5*aa.x,inset.x);
    if(fillWindow.w<0.5)zoneMask*=smoothstep(-0.5*aa.y,0.5*aa.y,inset.y);
    surface-=inkTransform.xy;
    surface.y*=fillMetrics.z;
    uv=mat2(fillWinding.x,fillWinding.y,-fillWinding.y,fillWinding.x)*surface+(zoneMode==5?vec2(.5,0.0):vec2(.5));
   }else{
   if(zoneMode<=1){
    uv=vec2(inkPosition.x,(zoneMode==1?1.0:-1.0)*inkPosition.z)/(2.0*limits.y)+0.5;
    zoneMask*=step(radius,limits.y);
    regionEdge=max(regionEdge,1.0-smoothstep(0.0,.02,limits.y-radius));
   }else{
    float v=((zoneMode==4?radius:inkPosition.y)-limits.x)/(limits.y-limits.x);
    uv=vec2(zoneMode==2?0.5+atan(sin(angle),cos(angle))/limits.w:fract(0.5+angle*limits.w/6.2831853),v);
    zoneMask*=step(0.0,v)*step(v,1.0);
    if(zoneMode==2)zoneMask*=step(0.0,uv.x)*step(uv.x,1.0);
    regionEdge=max(regionEdge,1.0-smoothstep(0.0,.025,min(v,1.0-v)));
    if(zoneMode==2)regionEdge=max(regionEdge,1.0-smoothstep(0.0,.02,min(uv.x,1.0-uv.x)));
   }
   uv-=0.5+inkTransform.xy;
   if(zoneMode>=3)uv.x=fract(uv.x+0.5)-0.5;
   uv.x/=wallAspect;
   float co=cos(inkTransform.z),si=sin(inkTransform.z);
   uv=mat2(co,si,-si,co)*uv/inkTransform.w+0.5;
   inside=step(0.0,uv.x)*step(uv.x,1.0)*step(0.0,uv.y)*step(uv.y,1.0);
   uv=clamp(uv,vec2(.5/512.0),vec2(1.0-.5/512.0));
   }
   // Leave repeat coordinates unwrapped so mip derivatives remain continuous at a tile boundary.
   vec4 pigment=texture2D(enamelInk,uv);
   vec2 enamelRG=texture2D(enamelGrain,vec2(inkPosition.x*.67+inkPosition.z*.43,inkPosition.y*.73-inkPosition.z*.52)).rg;
   ${type==='cup'?'diffuseColor.rgb=mix(diffuseColor.rgb,lining*vColor.rgb*(1.0-.36*smoothstep(.03,1.1,.98-inkPosition.y)),smoothstep(7.0,8.0,inkRow));':''}
   vec3 pigmentBase=pigment.rgb*mix(vec3(1.0),diffuseColor.rgb,0.055);
   diffuseColor.rgb=mix(diffuseColor.rgb,pigmentBase,pigment.a*zoneMask*inside*inkReady*printEnabled*0.98);
   diffuseColor.rgb*=1.0+0.011*(enamelRG.g-0.5);
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.10,.30,.32),zoneMask*regionHighlight*(.10+.65*regionEdge));

  `);
  shader.fragmentShader=shader.fragmentShader.replace('#include <aomap_fragment>',`
   #include <aomap_fragment>
   reflectedLight.indirectDiffuse*=mix(.55,1.0,skyLight);
   reflectedLight.indirectSpecular*=mix(.83,1.0,skyLight);
  `);
  shader.fragmentShader=shader.fragmentShader.replace('#include <clearcoat_normal_fragment_maps>',`
   #include <clearcoat_normal_fragment_maps>
   vec3 qx=dFdx(-vViewPosition),qy=dFdy(-vViewPosition);
   vec3 s=cross(qy,normal),t=cross(normal,qx);
   float determinant=dot(qx,s),height=enamelRG.r*.0018;
   vec3 gradient=sign(determinant)*(dFdx(height)*s+dFdy(height)*t)/max(abs(determinant),0.0000001);
   normal=normalize(normal-gradient);
   #ifdef USE_CLEARCOAT
    clearcoatNormal=normalize(clearcoatNormal-gradient*.84);
   #endif
  `);
  shader.fragmentShader=shader.fragmentShader.replace('#include <lights_physical_fragment>',`
   #include <lights_physical_fragment>
   material.clearcoatRoughness=clamp(material.clearcoatRoughness+(enamelRG.g-.5)*.05,.12,1.0);
  `);
 };
 function dragX(start,end){
  if(start.angle===undefined)return (end.x-start.x)*(V.isFill(region)?120:512/3);
  const delta=signedAngle(end.angle-start.angle);
  if(region.around||region.mode==='wrap')return delta*120/tau;
  return (region.mode==='wall'?delta/region.span:delta*region.count/tau)*512/3;
 }
 return {setPlacement,hitUV,positionAt,setHighlight(value){uniforms.regionHighlight.value=value;},dragX,dragY:(a,b)=>(a.y-b.y)*(V.isFill(region)?120:512/3),setTexture(map){uniforms.enamelInk.value=map;uniforms.inkReady.value=map?1:0;},
  dispose(){grain.dispose();},
  syncFinish(){material.color.copy(glaze.color);material.roughness=glaze.roughness;material.clearcoat=glaze.clearcoat;material.ior=glaze.ior;material.specularIntensity=glaze.specularIntensity;material.clearcoatRoughness=glaze.clearcoatRoughness;}};
}
