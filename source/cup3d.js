import * as T from 'three';
import {HDRLoader} from 'three/addons/loaders/HDRLoader.js';
import studioLight from './studio-small-09-256.hdr';
import Gesture from '../prototype/touch-transform.js';
import {clampCamera,PRINT_REGION} from './cup-geometry.mjs';
import {createVessel} from './vessel-geometry.mjs';
import V from '../prototype/vessels.js';
import {bindEnamelInk} from './enamel-ink.mjs';
import {bindTextileInk} from './textile-ink.mjs';
function createViewer(){
let live=null;
function dispose(){if(!live)return;const l=live;live=null;l.token++;clearTimeout(l.timer);clearTimeout(l.highlightTimer);cancelAnimationFrame(l.frame);l.observer?.disconnect();l.events.abort();l.texture?.dispose();l.ink?.dispose();l.environment?.dispose();const gs=new Set(),ms=new Set();l.scene?.traverse(o=>{o.shadow?.map?.dispose();if(o.geometry)gs.add(o.geometry);if(o.material)ms.add(o.material);});for(const g of gs)g.dispose();for(const m of ms){if(m.map&&m.map!==l.texture)m.map.dispose();m.dispose();}l.renderer?.dispose();l.renderer?.forceContextLoss();l.renderer?.domElement.remove();}
function framePreview(l){
 const aspect=l.camera.aspect,pitch=l.cameraState.pitch;
 let tangent=Math.tan(19*Math.PI/180)/Math.min(1,aspect/1.1);
 if(aspect>1&&(l.host.id==='cup-host'||l.host.closest('.wb-cover-open'))){
  const extent=l.bounds.height*Math.cos(pitch)+l.bounds.depth*Math.abs(Math.sin(pitch));
  // Reserve room for the silhouette while keeping a shallow basin legible above the sliders.
  const fit=1.30*Math.max(l.bounds.width/aspect,extent)/(2*V.get(l.vesselType).camera.distance);
  tangent=Math.min(tangent,fit);
 }
 const fov=2*Math.atan(tangent)*180/Math.PI;
 if(l.camera.fov!==fov){l.camera.fov=fov;l.camera.updateProjectionMatrix();}
}
function requestDraw(l){if(l!==live||l.failed||l.frame)return;l.frame=requestAnimationFrame(()=>{l.frame=0;if(l!==live||document.hidden||!l.host.isConnected)return;const c=l.cameraState,rad=c.distance*Math.cos(c.pitch);framePreview(l);const targetY=l.vesselType==='tote'?.42:0;l.camera.position.set(rad*Math.sin(c.yaw),targetY+c.distance*Math.sin(c.pitch),rad*Math.cos(c.yaw));l.camera.lookAt(l.vesselType==='cup'?.27:0,targetY,0);l.renderer.render(l.scene,l.camera);l.draws++;});}
function updateCamera(l,patch,save=true){l.cameraState=clampCamera({...l.cameraState,...patch});requestDraw(l);if(save)l.onCamera({...l.cameraState});}
function fallback(l,message){if(l!==live)return;l.failed=true;l.token++;clearTimeout(l.timer);l.host.dataset.mode='static';l.onStatus('fallback',message);l.renderer?.domElement.remove();cancelAnimationFrame(l.frame);l.frame=0;}
function update(d){
 const l=live;if(!l)return;
 if(l.vesselType!==d.canvas){mount(l.host,d,l.onCamera,l.onStatus,l.options);return;}
 if(l.failed)return;
 const p=d.vesselPlacement||V.placement(d.canvas),camera=d.cupCamera||V.regionCamera(d.canvas,p);
 const zoneChanged=l.zone&&l.zone!==p.zone;
 if(l.zone!==p.zone){l.zone=p.zone;l.cameraState=clampCamera(camera);}
 l.draft=d;l.ink.setPlacement(p);
 if(zoneChanged&&l.ink.setHighlight){clearTimeout(l.highlightTimer);l.ink.setHighlight(1);l.highlightTimer=setTimeout(()=>{l.ink.setHighlight(0);requestDraw(l);},700);}
 l.cup.glaze.color.set(V.glazeHex(d.cupMaterial?.color));
 const matte=d.cupMaterial?.finish==='matte';
 l.cup.glaze.roughness=matte?.57:.30+(V.get(d.canvas).roughness||.23)*.15;
 l.cup.glaze.ior=1.48;l.cup.glaze.specularIntensity=.78;
 l.cup.glaze.clearcoat=matte?.16:.50;l.cup.glaze.clearcoatRoughness=matte?.36:.17;
 if(V.textile(d.canvas)){l.cup.glaze.roughness=.94;l.cup.glaze.clearcoat=0;l.cup.glaze.specularIntensity=.25;}
 l.ink.syncFinish();
 requestDraw(l);
 const key=JSON.stringify([d.imageId,d.pattern,...Object.keys(window.PatternEditor.defaults).map(k=>d[k])]);
 if(!l.error&&key===l.textureKey){
  if(l.readyToken===l.token)l.onStatus('ready','三维预览 · 单指旋转 / 双指缩放');
  return;
 }
 l.error=null;l.textureKey=key;l.token++;
 l.pending={draft:{...d},token:l.token};
 if(!l.texture)l.onStatus('loading','正在更新器物纹样…');
 if(!l.drawingTexture)void updateTexture(l);
}
async function updateTexture(l){
 l.drawingTexture=true;
 try{
  while(l===live&&!l.failed&&l.pending){
   const {draft,token}=l.pending;l.pending=null;
   try{
    const result=await window.PatternTexture.export(draft,{size:512,transparent:true});
    const url=URL.createObjectURL(result.blob),image=new Image();
    try{image.src=url;await image.decode();}finally{URL.revokeObjectURL(url);}
    if(l!==live||l.failed)return;
    if(draft.imageId!==l.draft.imageId||draft.pattern!==l.draft.pattern)continue;
    const texture=new T.Texture(image);texture.colorSpace=T.SRGBColorSpace;texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.flipY=true;
    texture.anisotropy=Math.min(4,l.renderer.capabilities.getMaxAnisotropy());texture.needsUpdate=true;
    const old=l.texture;l.texture=texture;l.ink.setTexture(texture);old?.dispose();
    l.host.dataset.textureRevision=String(++l.textureRevision);l.readyToken=token;requestDraw(l);
    if(token===l.token)l.onStatus('ready','三维预览 · 单指旋转 / 双指缩放');
   }catch(e){if(l===live&&token===l.token){l.error=e;l.ink.setTexture(null);requestDraw(l);l.onStatus('error','贴图读取失败：'+e.message);}}
  }
 }finally{l.drawingTexture=false;}
}
function makeStudioEnvironment(renderer){
 // Local derivative of Poly Haven Studio Small 09 (CC0). Keep the HDR linear.
 const {data,width,height,type}=new HDRLoader().parse(studioLight);
 const map=new T.DataTexture(data,width,height,T.RGBAFormat,type);
 map.mapping=T.EquirectangularReflectionMapping;map.flipY=true;map.colorSpace=T.LinearSRGBColorSpace;
 map.minFilter=map.magFilter=T.LinearFilter;map.needsUpdate=true;
 const generator=new T.PMREMGenerator(renderer);
 try{return generator.fromEquirectangular(map);}
 finally{generator.dispose();map.dispose();}

}
function mount(host,draft,onCamera,onStatus,{force=false,interaction=()=> 'rotate',onPlacement=()=>{}}={}){dispose();const l={host,draft,vesselType:draft.canvas,options:{force,interaction,onPlacement},onCamera,onStatus,cameraState:clampCamera(draft.cupCamera||V.get(draft.canvas).camera),token:0,frame:0,draws:0,textureRevision:0,events:new AbortController()};live=l;host.dataset.mode='loading';onStatus('loading','正在建立'+V.get(l.vesselType).name+'三维预览…');if(!force&&(draft.cupPreviewMode==='static'||(navigator.deviceMemory&&navigator.deviceMemory<=2))){fallback(l,'静态预览 · 节能模式，不可旋转');return;}
try{l.renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});l.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));l.renderer.outputColorSpace=T.SRGBColorSpace;l.renderer.toneMapping=T.NeutralToneMapping;l.renderer.toneMappingExposure=V.textile(draft.canvas)?.95:1.16;l.renderer.domElement.setAttribute('aria-label',V.get(draft.canvas).name+'真实三维模型，可拖动旋转');host.prepend(l.renderer.domElement);l.scene=new T.Scene();l.camera=new T.PerspectiveCamera(38,1,.1,30);l.cup=createVessel(draft.canvas);l.ink=V.textile(draft.canvas)?bindTextileInk(l.cup):bindEnamelInk(l.cup);l.scene.add(l.cup.group);const bounds=new T.Box3().setFromObject(l.cup.group),size=bounds.getSize(new T.Vector3());l.bounds={width:size.x,height:size.y,depth:size.z};host.dataset.vesselType=l.vesselType;l.environment=makeStudioEnvironment(l.renderer);l.scene.environment=l.environment.texture;l.scene.environmentRotation.y=0;l.scene.environmentIntensity=V.textile(draft.canvas)?.48:.86;l.scene.add(new T.HemisphereLight(0xfffbf4,0xb2aaa0,.64));const key=new T.DirectionalLight(0xfffaf4,V.textile(draft.canvas)?1.8:2.35);key.position.set(-3.8,5.6,3.1);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-3;key.shadow.camera.right=3;key.shadow.camera.top=3;key.shadow.camera.bottom=-3;key.shadow.camera.near=.5;key.shadow.camera.far=12;key.shadow.bias=V.textile(draft.canvas)?.0001:-.0002;key.shadow.normalBias=V.textile(draft.canvas)?.012:.025;key.shadow.radius=10;l.scene.add(key);l.renderer.shadowMap.enabled=true;l.renderer.shadowMap.type=T.PCFShadowMap;l.renderer.shadowMap.autoUpdate=false;l.renderer.shadowMap.needsUpdate=true;l.cup.group.traverse(o=>{if(o.isMesh){o.castShadow=o!==l.cup.print;o.receiveShadow=o!==l.cup.handle&&o.name!=='enamel-handle-joint'&&!o.userData.fabricFace;}});const fill=new T.DirectionalLight(0xfffcf5,.46);fill.position.set(3.6,2.3,1.9);l.scene.add(fill);
// Contact follows the actual foot instead of a second, hard-edged silhouette.
const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=128;
const ctx=shadowCanvas.getContext('2d'),g=ctx.createRadialGradient(64,64,0,64,64,64);
g.addColorStop(0,'rgba(43,38,34,.36)');g.addColorStop(.47,'rgba(43,38,34,.27)');g.addColorStop(.64,'rgba(43,38,34,.065)');g.addColorStop(1,'rgba(43,38,34,0)');
ctx.fillStyle=g;ctx.fillRect(0,0,128,128);
const diameter=(V.get(l.vesselType).foot||.905)*3.55;
const shadow=new T.Mesh(new T.PlaneGeometry(diameter,diameter),new T.MeshBasicMaterial({map:new T.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false,toneMapped:false}));
shadow.rotation.x=-Math.PI/2;shadow.position.y=bounds.min.y-.004;l.scene.add(shadow);
const receiver=new T.Mesh(new T.PlaneGeometry(8,8),new T.ShadowMaterial({opacity:V.textile(l.vesselType)?.018:.047,depthWrite:false}));receiver.rotation.x=-Math.PI/2;receiver.position.y=bounds.min.y-.002;receiver.receiveShadow=true;l.scene.add(receiver);l.floor=[shadow,receiver];
const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;l.renderer.setSize(w,h,false);l.camera.aspect=w/h;l.camera.fov=2*Math.atan(Math.tan(19*Math.PI/180)/Math.min(1,l.camera.aspect/1.1))*180/Math.PI;l.camera.updateProjectionMatrix();requestDraw(l);};l.observer=new ResizeObserver(resize);l.observer.observe(host);resize();const pointers=new Map();let previousDistance=0;const distance=()=>{const a=[...pointers.values()];return a.length===2?Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y):0;};const element=l.renderer.domElement,options={signal:l.events.signal};
let placement=null,segment=null,pairStart=null,uvStart=null,initialCamera=null;
const ray=new T.Raycaster();const hit=e=>{const rect=element.getBoundingClientRect();ray.setFromCamera(new T.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1),l.camera);const surfaces=l.cup.group.children.filter(o=>o.visible&&o.isMesh);return l.ink.hitUV(ray.intersectObjects(surfaces,false)[0]);};
const rebase=()=>{if(!placement)return;segment={...placement.current};pairStart=pointers.size===2?Gesture.pair([...pointers.values()]):null;const p=[...pointers.values()][0];uvStart=p?hit({clientX:p.x,clientY:p.y}):null;};
element.addEventListener('pointerdown',e=>{if(pointers.size>=2)return;if(!pointers.size){initialCamera={...l.cameraState};if(interaction()==='place'){const base={...l.draft.vesselPlacement};placement={original:base,current:{...base},changed:false};}}pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});element.setPointerCapture(e.pointerId);previousDistance=distance();rebase();e.preventDefault();},options);
element.addEventListener('pointermove',e=>{const prev=pointers.get(e.pointerId);if(!prev)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(placement){if(pointers.size===2&&pairStart)placement.current=Gesture.pinch(segment,pairStart,Gesture.pair([...pointers.values()]));else {const uv=hit(e);if(!uv||!uvStart)return;const dx=segment.x+l.ink.dragX(uvStart,uv);placement.current={...segment,x:Math.round((V.region(l.vesselType,l.zone).around||V.region(l.vesselType,l.zone).mode==='wrap')?((dx+60)%120+120)%120-60:Gesture.clamp(dx,-60,60)),y:Math.round(Gesture.clamp(segment.y+l.ink.dragY(uvStart,uv),-60,60))};}placement.changed=true;onPlacement({vesselPlacement:placement.current},false);return;}if(pointers.size===1)updateCamera(l,{yaw:l.cameraState.yaw-(e.clientX-prev.x)*.009,pitch:l.cameraState.pitch+(e.clientY-prev.y)*.008},false);else{const dist=distance();if(previousDistance&&dist)updateCamera(l,{distance:l.cameraState.distance*previousDistance/dist},false);previousDistance=dist;}},options);
const end=e=>{if(!pointers.has(e.pointerId))return;pointers.delete(e.pointerId);previousDistance=distance();if(pointers.size){rebase();return;}if(placement?.changed)onPlacement({vesselPlacement:placement.current},true);placement=null;l.onCamera({...l.cameraState});};
const cancel=()=>{if(!pointers.size)return;pointers.clear();if(placement)onPlacement({vesselPlacement:placement.original},false);placement=null;if(initialCamera)updateCamera(l,initialCamera);};
element.addEventListener('pointerup',end,options);element.addEventListener('pointercancel',cancel,options);element.addEventListener('lostpointercapture',e=>{if(pointers.has(e.pointerId))cancel();},options);element.addEventListener('webglcontextlost',e=>{e.preventDefault();fallback(l,'静态预览 · 图形上下文丢失，可重试三维');},options);host.dataset.mode='three';update(draft);
}catch(e){fallback(l,'静态预览 · 当前设备无法启用WebGL，可重试三维');}}
function control(action){const l=live;if(!l?.renderer||l.failed)return;if(action==='reset')updateCamera(l,V.regionCamera(l.vesselType,l.draft.vesselPlacement));if(action==='in')updateCamera(l,{distance:l.cameraState.distance*.88});if(action==='out')updateCamera(l,{distance:l.cameraState.distance/ .88});if(action==='left')updateCamera(l,{yaw:l.cameraState.yaw-.35});if(action==='right')updateCamera(l,{yaw:l.cameraState.yaw+.35});}
function diagnostics(){const l=live;if(!l)return null;return {mode:l.failed?'static':'three',camera:{...l.cameraState},modelId:l.cup?.group.uuid,vesselType:l.vesselType,zone:l.zone,glaze:'#'+l.cup?.glaze.color.getHexString(),meshName:l.cup?.group.name,bodyName:l.cup?.body.name,geometryId:l.cup?.body.geometry.uuid,hasHandle:Boolean(l.cup?.handle),bounds:l.bounds,printRegion:l.vesselType==='cup'?PRINT_REGION:{radius:V.get(l.vesselType).printRadius,zone:V.get(l.vesselType).zone},handleHasMap:Boolean(l.cup?.handle?.material.map),inkOnBody:Boolean(l.ink&&l.texture&&!l.cup.print.visible),bodyHasMap:Boolean(l.cup?.body.material.map),textureRevision:l.textureRevision,draws:l.draws,triangles:l.renderer?.info.render.triangles,textures:l.renderer?.info.memory.textures,geometries:l.renderer?.info.memory.geometries};}
document.addEventListener('visibilitychange',()=>{if(document.hidden&&live){cancelAnimationFrame(live.frame);live.frame=0;}else if(live?.renderer&&!live.failed)requestDraw(live);});window.addEventListener('pagehide',dispose);
async function capture(d,{transparent=false}={}){
 const l=live;if(!l||l.failed||l.vesselType!==d.canvas)throw Error('三维预览尚未就绪');
 update(d);l.ink.setHighlight?.(0);const token=l.token;
 await new Promise((resolve,reject)=>{const began=performance.now();const check=()=>{if(l!==live||l.failed)return reject(Error('三维预览已关闭'));if(l.error)return reject(l.error);if(l.readyToken===token)return resolve();if(performance.now()-began>10000)return reject(Error('预览生成超时，请重试'));setTimeout(check,25);};check();});
 const oldSize=l.renderer.getSize(new T.Vector2()),oldAspect=l.camera.aspect,oldFov=l.camera.fov;
 const output=document.createElement('canvas');output.width=output.height=640;
 try{
  l.renderer.setSize(640,640,false);l.camera.aspect=1;l.camera.fov=38;l.camera.updateProjectionMatrix();
  const camera=l.cameraState,rad=camera.distance*Math.cos(camera.pitch);
  const targetY=l.vesselType==='tote'?.42:0;l.camera.position.set(rad*Math.sin(camera.yaw),targetY+camera.distance*Math.sin(camera.pitch),rad*Math.cos(camera.yaw));l.camera.lookAt(l.vesselType==='cup'?.27:0,targetY,0);
  if(transparent){
   l.floor.forEach(mesh=>mesh.visible=false);
   // Keep the full silhouette even when the editor was zoomed into a detail.
   l.camera.updateMatrixWorld();l.cup.group.updateWorldMatrix(true,true);
   const point=new T.Vector3(),toCamera=new T.Matrix4(),slope=Math.tan(19*Math.PI/180)*.97;let extra=0;
   l.cup.group.traverse(mesh=>{if(!mesh.isMesh||!mesh.visible)return;
    const positions=mesh.geometry.attributes.position;toCamera.multiplyMatrices(l.camera.matrixWorldInverse,mesh.matrixWorld);
    for(let i=0;i<positions.count;i++){point.fromBufferAttribute(positions,i).applyMatrix4(toCamera);extra=Math.max(extra,point.z+Math.max(Math.abs(point.x),Math.abs(point.y))/slope);}
   });
   l.camera.translateZ(extra);
  }
  l.renderer.render(l.scene,l.camera);
  const ctx=output.getContext('2d');
  if(!transparent){ctx.fillStyle='#f4f3ef';ctx.fillRect(0,0,640,640);}
  ctx.drawImage(l.renderer.domElement,0,0,640,640);
 }finally{
  l.floor.forEach(mesh=>mesh.visible=true);l.renderer.setSize(oldSize.x,oldSize.y,false);l.camera.aspect=oldAspect;l.camera.fov=oldFov;l.camera.updateProjectionMatrix();requestDraw(l);
 }
 return new Promise((resolve,reject)=>output.toBlob(blob=>blob?resolve(blob):reject(Error('无法保存预览图')),'image/png'));
}
return {mount,update,control,dispose,diagnostics,capture};
}
window.Cup3D={...createViewer(),createViewer};
