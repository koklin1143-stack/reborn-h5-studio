import * as T from 'three';
import V from '../prototype/vessels.js';
export function bindTextileInk(vessel){
 const {type,glaze,surfaces}=vessel;
 const uniforms={fabricInk:{value:null},fabricReady:{value:0}};
 let region,enabled=true;
 const bindings=surfaces.map(mesh=>{
  if(!mesh.geometry.attributes.printUv)mesh.geometry.setAttribute('printUv',mesh.geometry.attributes.uv);
  const [w,h]=mesh.userData.fabricSize,min=Math.min(w,h),own={fabricActive:{value:0},fabricLocalBox:{value:new T.Vector4(.5,.5,1,1)},fabricHighlight:{value:0},fabricAspect:{value:new T.Vector2(w/min,h/min)},fabricMode:{value:0},fabricTransform:{value:new T.Vector4(0,0,0,1)},fabricCoverage:{value:new T.Vector2(.5,.5)},fabricCount:{value:3}};
  mesh.material.customProgramCacheKey=()=>'surface-print-v2-'+V.textile(type);
  mesh.material.onBeforeCompile=shader=>{
   Object.assign(shader.uniforms,uniforms,own);
   shader.vertexShader='attribute vec2 printUv; varying vec2 fabricUV;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nfabricUV=printUv;');
   shader.fragmentShader='varying vec2 fabricUV; uniform sampler2D fabricInk; uniform float fabricReady,fabricActive,fabricMode,fabricCount,fabricHighlight; uniform vec4 fabricTransform,fabricLocalBox; uniform vec2 fabricCoverage,fabricAspect;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    vec2 paintUV=(fabricUV-fabricLocalBox.xy)/fabricLocalBox.zw+.5;vec2 surface=paintUV-.5-fabricTransform.xy;
    float mask=step(abs(surface.x),fabricCoverage.x)*step(abs(surface.y),fabricCoverage.y);
    float co=cos(fabricTransform.z),si=sin(fabricTransform.z);
    vec2 at=mat2(co,si,-si,co)*(surface*fabricAspect);
    if(fabricMode>.5){at=at*fabricCount+.5;}else{at=at/(.68*fabricTransform.w)+.5;mask*=step(0.,at.x)*step(at.x,1.)*step(0.,at.y)*step(at.y,1.);at=clamp(at,vec2(.001),vec2(.999));}
    if(fabricMode>1.5)mask*=step(.37,max(abs(fabricUV.x-.5),abs(fabricUV.y-.5)));
    vec4 pigment=texture2D(fabricInk,at);
    diffuseColor.rgb=mix(diffuseColor.rgb,pigment.rgb*.96,pigment.a*mask*fabricReady*fabricActive);
    // Subtle woven threads; fade above pixel frequency to avoid mobile moire.
    vec2 threadUV=fabricUV*fabricAspect*170.;vec2 fade=1.-smoothstep(vec2(.15),vec2(.7),fwidth(threadUV));
    float weave=dot(sin(threadUV*6.28318),fade)*${V.textile(type)?'.006':'0.'};diffuseColor.rgb*=${V.textile(type)?'.99':'1.'}+weave;
    float edgeAt=max(abs(fabricUV.x-.5),abs(fabricUV.y-.5));
    float halo=smoothstep(.465,.474,edgeAt)*step(edgeAt,.5),edge=smoothstep(.481,.488,edgeAt)*step(edgeAt,.5);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.85,.94,.92),halo*fabricHighlight*.85);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.08,.25,.27),edge*fabricHighlight*.95);
   `);
  };
  return {mesh,own};
 });
 function setPlacement(p){enabled=V.hasPrint(p);region=V.region(type,p.zone);const faces=V.facePlacements(type,p);for(const {mesh,own}of bindings){const placed=faces[mesh.userData.fabricFace];own.fabricActive.value=placed?1:0;if(!placed)continue;const r=V.region(type,placed.zone),box=V.isFill(r)?[.5,.5,1,1]:(mesh.userData.localPrintBox||[.5,.5,1,1]);own.fabricLocalBox.value.fromArray(box);const [w,h]=mesh.userData.fabricSize,min=Math.min(w*box[2],h*box[3]);own.fabricAspect.value.set(w*box[2]/min,h*box[3]/min);own.fabricMode.value=r.mode==='fabricBorder'?2:V.isFill(r)?1:0;own.fabricTransform.value.set(placed.x/120,-placed.y/120,placed.rotation*Math.PI/180,placed.scale/100);own.fabricCoverage.value.set(V.isFill(r)?V.coveragePercent(placed.coverWidth)/200:.5,V.isFill(r)?V.coveragePercent(placed.coverHeight)/200:.5);own.fabricCount.value=V.fillCount(r,placed.scale);}}
 return {setPlacement,setHighlight(value){for(const {mesh,own}of bindings)own.fabricHighlight.value=mesh.userData.fabricFace===region?.face?value:0;},setTexture(map){uniforms.fabricInk.value=map;uniforms.fabricReady.value=map?1:0;},syncFinish(){for(const {mesh}of bindings){mesh.material.color.copy(glaze.color);mesh.material.specularIntensity=glaze.specularIntensity;mesh.material.roughness=glaze.roughness;mesh.material.clearcoat=glaze.clearcoat;}if(vessel.trim!==glaze)vessel.trim.color.copy(glaze.color).multiplyScalar(.88);for(const {material,factor}of vessel.tints||[])material.color.copy(glaze.color).multiplyScalar(factor);},hitUV(hit){if(!enabled||hit?.object.userData.fabricFace!==region?.face||!(hit.uv1||hit.uv))return null;const uv=hit.uv1||hit.uv,box=bindings.find(b=>b.mesh===hit.object)?.own.fabricLocalBox.value;return box?{x:(uv.x-box.x)/box.z+.5,y:(uv.y-box.y)/box.w+.5}:null;},dragX:(a,b)=>(b.x-a.x)*120,dragY:(a,b)=>(a.y-b.y)*120,dispose(){}};
}
