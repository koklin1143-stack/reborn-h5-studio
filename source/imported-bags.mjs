import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// Cache bytes, not GPU resources: each viewer owns and disposes its parsed model.
const downloads=new Map();
export function disposeBag(group){const geometries=new Set(),materials=new Set(),textures=new Set();group.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m);});for(const m of materials){for(const value of Object.values(m))if(value?.isTexture)textures.add(value);m.dispose();}for(const t of textures)t.dispose();for(const g of geometries)g.dispose();}
export async function loadBag(type){
 if(!['backpack','tote'].includes(type))return null;
 if(!downloads.has(type)){
  const embedded=window.CarrierModelData?.[type];
  const bytes=embedded?Promise.resolve(Uint8Array.from(atob(embedded),c=>c.charCodeAt(0)).buffer):fetch(new URL((window.CarrierModelFolder||'prototype/media/models/')+type+'.glb',location.href)).then(r=>{if(!r.ok)throw Error('模型文件读取失败');return r.arrayBuffer();});
  downloads.set(type,bytes.catch(e=>{downloads.delete(type);throw e;}));
 }
 const gltf=await new GLTFLoader().parseAsync((await downloads.get(type)).slice(0),'');
 const group=new T.Group(),surfaces=[],tints=[];group.name='authored-'+type+'-v1';gltf.scene.updateMatrixWorld(true);
 // Flatten authored transforms so picking, print UVs and capture share one space.
 gltf.scene.traverse(o=>{if(!o.isMesh)return;const mesh=new T.Mesh(o.geometry,o.material);mesh.geometry.applyMatrix4(o.matrixWorld);mesh.name=o.name;mesh.userData={...o.userData};mesh.material.side=T.DoubleSide;mesh.material.shadowSide=T.FrontSide;
  if(mesh.userData.fabricFace){mesh.geometry.setAttribute('printUv',mesh.geometry.attributes.uv1);surfaces.push(mesh);}
  else if(mesh.material.userData?.dyeable)tints.push({material:mesh.material,factor:1});
  group.add(mesh);
 });
 surfaces.sort((a,b)=>['front','back','pocket'].indexOf(a.userData.fabricFace)-['front','back','pocket'].indexOf(b.userData.fabricFace));
 if(!surfaces.length){disposeBag(group);throw Error('模型缺少印花区域');}
 const glaze=new T.MeshPhysicalMaterial({color:'#f5f1e6',roughness:.94,metalness:0});
 const print=new T.Mesh(new T.BufferGeometry(),glaze);print.visible=false;group.add(print);
 return {type,group,body:surfaces[0],surfaces,glaze,print,trim:glaze,tints,imported:true};
}
