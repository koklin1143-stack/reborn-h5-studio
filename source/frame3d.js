/* Authored Three.js frame models. Rebuild with npm run build:frame. */
import * as T from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

let renderer, scene, camera, model, environment, host, category, frame = 0;
let target = 0, current = 0, failed = false, framesRendered = 0;
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function rounded(w, h, r, ox = 0, oy = 0, Path = T.Shape) {
  const p = new Path(), x = ox - w / 2, y = oy - h / 2;
  p.moveTo(x + r, y);
  p.lineTo(x + w - r, y); p.quadraticCurveTo(x + w, y, x + w, y + r);
  p.lineTo(x + w, y + h - r); p.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  p.lineTo(x + r, y + h); p.quadraticCurveTo(x, y + h, x, y + h - r);
  p.lineTo(x, y + r); p.quadraticCurveTo(x, y, x + r, y);
  return p;
}

function ring(w, h, r, iw, ih, ir, depth, bevel, material, z = 0, cy = 2) {
  const shape = rounded(w, h, r);
  shape.holes.push(rounded(iw, ih, ir, 0, cy, T.Path));
  const geo = new T.ExtrudeGeometry(shape, {
    depth, bevelEnabled: bevel > 0, bevelThickness: bevel,
    bevelSize: bevel, bevelSegments: 4, curveSegments: 16, steps: 1,
  });
  geo.translate(0, 0, -depth / 2);
  const mesh = new T.Mesh(geo, material); mesh.position.z = z; model.add(mesh);
  return mesh;
}

// A continuous curved shoulder gives the fired enamel rim a rounded highlight.
function rolledRim(material) {
  const n=160, bands=12, inner=rounded(117,139,5,0,2).getSpacedPoints(n), outer=rounded(138,172,12).getSpacedPoints(n);
  const vertices=[],uv=[],indices=[];
  for(let j=0;j<=bands;j++)for(let i=0;i<=n;i++){
    const u=j/bands,p=inner[i].clone().lerp(outer[i],u),z=1.6+2.5*Math.pow(Math.sin(Math.PI*u),.8);
    vertices.push(p.x,p.y,z);uv.push(i/n,u);
    if(j<bands&&i<n){const a=j*(n+1)+i,b=a+n+1;indices.push(a,b,a+1,b,b+1,a+1);}
  }
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(vertices,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeVertexNormals();
  model.add(new T.Mesh(geometry,material));
}

function noiseTexture(brushed = false) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 256;
  const ctx = canvas.getContext('2d'), data = ctx.createImageData(256, 256);
  let seed = 973;
  const random = () => { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 4294967296; };
  for (let y = 0; y < 256; y++) {
    const line = random() * 18;
    for (let x = 0; x < 256; x++) {
      const i = (y * 256 + x) * 4, value = 130 + (brushed ? line + random() * 4 : random() * 38);
      data.data[i] = data.data[i + 1] = data.data[i + 2] = value; data.data[i + 3] = 255;
    }
  }
  ctx.putImageData(data, 0, 0);
  const texture = new T.CanvasTexture(canvas); texture.wrapS = texture.wrapT = T.RepeatWrapping;
  texture.repeat.set(brushed ? .2 : 2, brushed ? 3 : 2); return texture;
}

function standard(color, roughness, metalness = 0, extra = {}) {
  return new T.MeshStandardMaterial({color, roughness, metalness, envMapIntensity: 1, ...extra});
}

function arm(sign, material) {
  const a = new T.Vector3(sign * 67, 29, -2), b = new T.Vector3(sign * 81, 37, -2);
  const mesh = new T.Mesh(new T.CylinderGeometry(1.45, 1.45, a.distanceTo(b), 16), material);
  mesh.position.copy(a).add(b).multiplyScalar(.5);
  mesh.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), b.sub(a).normalize()); model.add(mesh);
}

function enamel() {
  const glaze = new T.MeshPhysicalMaterial({color: '#090b0c', roughness: .29, metalness: .02,
    clearcoat: .55, clearcoatRoughness: .29, envMapIntensity: .35});
  ring(136,170,11,118,140,5,5,1.1,glaze,-1.4);
  const shoulder=glaze.clone();shoulder.roughness=.44;shoulder.clearcoat=.25;shoulder.clearcoatRoughness=.35;shoulder.envMapIntensity=.18;rolledRim(shoulder);
  ring(138, 172, 12, 120, 142, 6, 1.2, .55, standard('#080a0b', .6, .08), -3.7);
  ring(118, 140, 5, 114, 136, 4, .8, .45, standard('#080a0b', .25, .25), 3.7);
  arm(-1, glaze); arm(1, glaze);
}

function paperOutline() {
  const s = new T.Shape(), x = 69, y = 85, r = 1.2;
  s.moveTo(-x, y);
  for (let cx = -63; cx <= 63; cx += 7) { s.lineTo(cx - r, y); s.absarc(cx, y, r, Math.PI, Math.PI * 2, false); }
  s.lineTo(x, y);
  for (let cy = 77; cy >= -77; cy -= 7) { s.lineTo(x, cy + r); s.absarc(x, cy, r, Math.PI / 2, Math.PI * 1.5, false); }
  s.lineTo(x, -y);
  for (let cx = 63; cx >= -63; cx -= 7) { s.lineTo(cx + r, -y); s.absarc(cx, -y, r, 0, Math.PI, false); }
  s.lineTo(-x, -y);
  for (let cy = -77; cy <= 77; cy += 7) { s.lineTo(-x, cy - r); s.absarc(-x, cy, r, -Math.PI / 2, Math.PI / 2, false); }
  s.lineTo(-x, y); s.holes.push(rounded(116, 138, 1, 0, 2, T.Path)); return s;
}

function stamp() {
  const texture = noiseTexture(), paper = standard('#090a0a', .98, 0, {bumpMap: texture, bumpScale: .025});
  const shape = paperOutline();
  for (let i = 0; i < 3; i++) {
    const geo = new T.ExtrudeGeometry(shape, {depth: .32, bevelEnabled: false, curveSegments: 8});
    const mesh = new T.Mesh(geo, paper); mesh.position.set(i * .35, -i * .25, -i * .6);
    mesh.rotation.z = i * .002; model.add(mesh);
  }
  ring(127, 151, 1, 126.2, 150.2, 1, .1, 0, standard('#323333', 1), .5, 0);
  ring(117, 139, 1, 114.6, 136.6, 1, .3, .1, standard('#181a18', 1), -.3);
}

function wrapper() {
  const n = 144, bands = 9;
  const inside = rounded(116, 138, 3, 0, 2).getSpacedPoints(n);
  const outline=new T.Shape();[[-70,-83],[-53,-86],[-19,-85],[29,-87],[67,-84],[70,-62],[69,20],[71,74],[68,86],[30,85],[-9,87],[-66,86],[-70,52],[-69,-10],[-71,-61],[-70,-83]].forEach(([x,y],i)=>i?outline.lineTo(x,y):outline.moveTo(x,y));
  const outside=outline.getSpacedPoints(n);
  const vertices = [], indices = [], uv = [];
  for (let b = 0; b <= bands; b++) {
    const u = b / bands;
    for (let i = 0; i <= n; i++) {
      const t = i / n * Math.PI * 2, p = inside[i].clone().lerp(outside[i], u);
      const ridge=(a,b,c,w,h)=>Math.max(0,1-Math.abs(p.x*a+p.y*b-c)/w)*h;
      const fold=ridge(.35,1,62,3,.85)-ridge(1,.28,61,2.5,.5)+ridge(-.55,1,-63,3,.65)+ridge(1,-.4,-61,2.5,.45);
      const edge=Math.sin(u*Math.PI/2);
      vertices.push(p.x, p.y, .8 + edge*fold + Math.sin(t*23)*.035*u);
      uv.push(i / n, u);
      if (b < bands && i < n) { const a = b * (n + 1) + i, c = a + n + 1; indices.push(a, c, a + 1, c, c + 1, a + 1); }
    }
  }
  const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.Float32BufferAttribute(vertices, 3));
  geo.setAttribute('uv', new T.Float32BufferAttribute(uv, 2)); geo.setIndex(indices); geo.computeVertexNormals();
  model.add(new T.Mesh(geo, standard('#0c0d0e', .48, .52, {side: T.DoubleSide, bumpMap: noiseTexture(), bumpScale: .015})));
  ring(136,170,2,116,138,3,.24,.08,standard('#101112',.85),.1);
}

function screw(x, y) {
  const metal = standard('#535759', .36, .95);
  const head = new T.Mesh(new T.CylinderGeometry(1.6, 1.7, .7, 24), metal);
  head.rotation.x = Math.PI / 2; head.position.set(x, y, 4.8); model.add(head);
  const slot = new T.Mesh(new T.BoxGeometry(2.4, .32, .12), standard('#171919', .85));
  slot.position.set(x, y, 5.22); slot.rotation.z = .52; model.add(slot);
}

function part() {
  const metal = standard('#141718', .39, .92, {bumpMap: noiseTexture(true), bumpScale: .025});
  ring(136, 170, 4, 118, 140, 3, 8, 1.1, metal);
  ring(132,166,3,130.8,164.8,3,.35,.2,standard('#484d4e',.4,.9),4.5,0);
  ring(139, 173, 5, 120, 142, 3, 1.3, .45, standard('#191b1c', .6, .8), -3.6);
  ring(118, 140, 3, 114, 136, 2, 1.2, .4, standard('#101213', .5, .6), 3.2);
  for (const x of [-63, 63]) for (const y of [-79, 79]) screw(x, y);
  arm(-1, metal); arm(1, metal);
}

function disposeModel() {
  if (!model) return;
  const materials = new Set(), geometries = new Set(), textures = new Set();
  model.traverse(node => { if (node.geometry) geometries.add(node.geometry); if (node.material) materials.add(node.material); });
  materials.forEach(material => { for (const value of Object.values(material)) if (value?.isTexture) textures.add(value); material.dispose(); });
  textures.forEach(t => t.dispose()); geometries.forEach(g => g.dispose()); scene.remove(model); model = null;
}

function init() {
  renderer = new T.WebGLRenderer({alpha: true, antialias: true, powerPreference: 'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2)); renderer.setSize(176, 210, false);
  renderer.outputColorSpace = T.SRGBColorSpace; renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = .85;
  renderer.domElement.className = 'frame-3d'; renderer.domElement.setAttribute('aria-hidden', 'true');
  scene = new T.Scene(); camera = new T.OrthographicCamera(-88, 88, 105, -105, .1, 1000); camera.position.z = 400;
  const studio = new RoomEnvironment(), generator = new T.PMREMGenerator(renderer);
  environment = generator.fromScene(studio, .04); scene.environment = environment.texture; studio.dispose(); generator.dispose();
  scene.add(new T.HemisphereLight(0xffffff, 0x686868, .6));
  const key = new T.DirectionalLight(0xffffff, 1.6); key.position.set(-100, 170, 240); scene.add(key);
  const rim = new T.DirectionalLight(0xe8eef7, .7); rim.position.set(160, 45, 80); scene.add(rim);
  renderer.domElement.addEventListener('webglcontextlost', e => { e.preventDefault(); failed = true; cancelAnimationFrame(frame); host?.classList.remove('has-3d'); if (host) host.dataset.renderer = 'fallback'; });
}

function draw() {
  frame = 0;
  if (!host?.isConnected || failed || document.hidden || !model) return;
  current += (target - current) * .2;
  model.rotation.set(.035, -.045 + current, 0);
  renderer.render(scene, camera); host.dataset.renderCount = String(++framesRendered);
  host.dataset.triangles = String(renderer.info.render.triangles);
  host.dataset.geometries = String(renderer.info.memory.geometries); host.dataset.textures = String(renderer.info.memory.textures);
  host.dataset.drawCalls = String(renderer.info.render.calls);
  if (Math.abs(target - current) > .0005) frame = requestAnimationFrame(draw);
}

function attach(element, kind, drag = 0) {
  if (!element || failed) return;
  try {
    if (!renderer) init();
    const moved = host !== element; host = element;
    if (renderer.domElement.parentNode !== host) host.prepend(renderer.domElement);
    if (category !== kind) {
      disposeModel(); model = new T.Group(); scene.add(model); category = kind;
      ({enamel, stamp, wrapper, part}[kind] || enamel)(); current = 0;
    }
    host.classList.add('has-3d'); host.dataset.renderer = 'three'; host.dataset.model = kind;
    target = reduced() ? 0 : Math.max(-.055, Math.min(.055, drag * .00045));
    if (moved || !frame) { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw); }
  } catch (error) {
    failed = true; host?.classList.remove('has-3d'); if (host) host.dataset.renderer = 'fallback';
    console.warn('3D frame unavailable; using the lightweight frame.', error.message);
  }
}

function detach() { cancelAnimationFrame(frame); frame = 0; target = current = 0; host = null; }
function destroy() { const previous = host; detach(); disposeModel(); environment?.dispose(); renderer?.domElement.remove(); renderer?.dispose(); previous?.classList.remove('has-3d'); renderer = null; category = null; }
document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else if (host?.isConnected) frame = requestAnimationFrame(draw); });
window.addEventListener('pagehide', destroy);
window.addEventListener('pageshow', e => { if (e.persisted) { const viewer = document.querySelector('.film-viewer'); if (viewer) attach(viewer, viewer.closest('.film-gallery').dataset.material); } });
window.Frame3D = {attach, detach};
