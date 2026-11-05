import json,struct,pathlib,io
from PIL import Image
root=pathlib.Path('work/model-research');outdir=pathlib.Path('prototype/media/models');outdir.mkdir(parents=True,exist_ok=True)
for kind,src in [('backpack','pack-artist'),('tote','tote-artist')]:
 raw=(root/(src+'.glb')).read_bytes();size=struct.unpack_from('<I',raw,12)[0];original=json.loads(raw[20:20+size]);oldbin=raw[28+size:];parts=json.loads((root/(src+'-geometry.json')).read_text())
 binary=bytearray();views=[];accessors=[]
 def block(data):
  while len(binary)%4:binary.append(0)
  idx=len(views);views.append({'buffer':0,'byteOffset':len(binary),'byteLength':len(data)});binary.extend(data);return idx
 def attr(values,width,component=5126):
  fmt='f' if component==5126 else 'I';idx=len(accessors);a={'bufferView':block(struct.pack('<'+fmt*len(values),*values)),'componentType':component,'count':len(values)//width,'type':{1:'SCALAR',2:'VEC2',3:'VEC3'}[width]}
  if width==3:a.update(min=[min(values[i::width]) for i in range(width)],max=[max(values[i::width]) for i in range(width)])
  accessors.append(a);return idx
 materials=original.get('materials',[]);textures=original.get('textures',[]);images=[]
 normalids={textures[m['normalTexture']['index']]['source'] for m in materials if 'normalTexture' in m}
 for i,img in enumerate(original.get('images',[])):
  view=original['bufferViews'][img['bufferView']];b=oldbin[view.get('byteOffset',0):view.get('byteOffset',0)+view['byteLength']];im=Image.open(io.BytesIO(b)).convert('RGB');im.thumbnail((1024,1024),Image.Resampling.LANCZOS);buf=io.BytesIO();ext='PNG' if i in normalids else 'JPEG';im.save(buf,ext,**({'optimize':True} if ext=='PNG' else {'quality':86,'optimize':True}));images.append({'bufferView':block(buf.getvalue()),'mimeType':'image/png' if ext=='PNG' else 'image/jpeg'})
 matidx={m.get('name'):i for i,m in enumerate(materials)}
 allpoints=[]
 for part in parts:
  for ci,comp in enumerate(part['components']):
   ids=set(comp['indices']);pos=part['positions'];points={}
   for i in ids:
    x,y,z=pos[3*i:3*i+3]
    if kind=='tote' and ci<2:x=-x-.33;y=68.6-y
    points[i]=[x,y,z];allpoints.append([x,y,z])
   comp['points']=points
 mins=[min(p[a] for p in allpoints) for a in range(3)];maxs=[max(p[a] for p in allpoints) for a in range(3)];center=[(a+b)/2 for a,b in zip(mins,maxs)];scale=(2.8 if kind=='backpack' else 3.25)/(maxs[1]-mins[1])
 meshes=[];nodes=[]
 def material(source,role):
  m=json.loads(json.dumps(materials[matidx[source]]));pbr=m.setdefault('pbrMetallicRoughness',{});m['name']=role;m['doubleSided']=True
  if role in ['cloth','front','back','pocket']:
   pbr.pop('baseColorTexture',None);pbr['baseColorFactor']=[.91,.89,.83,1];pbr['metallicFactor']=0;pbr['roughnessFactor']=.9;m['extras']={'dyeable':True}
   if 'normalTexture'in m:m['normalTexture']['scale']=.35
  elif role=='webbing':
   pbr.pop('baseColorTexture',None);pbr['baseColorFactor']=[.08,.105,.10,1];pbr['metallicFactor']=0;pbr['roughnessFactor']=.9
   if 'normalTexture'in m:m['normalTexture']['scale']=.3
  materials.append(m);return len(materials)-1
 for part in parts:
  source=part['material'];position=part['positions'];normal=part['normals'];uv=part['uv']
  for ci,comp in enumerate(part['components']):
   cloth=(source=='Body') if kind=='backpack' else ci==2
   groups={}
   for k in range(0,len(comp['indices']),3):
    tri=comp['indices'][k:k+3];p=[comp['points'][i] for i in tri];n=[sum(normal[3*i+a] for i in tri)/3 for a in range(3)];x,y,z=[sum(v[a] for v in p)/3 for a in range(3)]
    face='cloth' if cloth else 'webbing' if source=='Handles' or kind=='tote' and ci<2 else 'trim'
    if cloth:
     if kind=='backpack':
      if n[2]>.18 and z>.20:face='pocket' if z>.445 and y<.37 else 'front'
      elif n[2]<-.25 and z<-.3:face='back'
     else:
      if n[2]>.30 and z>1.0:face='front'
      elif n[2]<-.30 and z<-1.0:face='back'
    groups.setdefault(face,[]).extend(tri)
   for face,indices in groups.items():
    points=comp['points'];ids=sorted(set(indices));mapping={old:i for i,old in enumerate(ids)};p=[];n=[];u=[];pu=[]
    # Artwork gets a separate planar UV set. Original UVs keep authored seams and normal maps.
    if kind=='backpack': bounds=[-.68,.68,.39,1.10] if face=='front' else [-.57,.57,-.75,.30] if face=='pocket' else [-.67,.67,-.92,1.12]
    else:bounds=[-16.3,16.3,-1,33.4]
    for i in ids:
     x,y,z=points[i];p.extend([(x-center[0])*scale,(y-center[1])*scale,(z-center[2])*scale]);nx,ny,nz=normal[i*3:i*3+3]
     if kind=='tote' and ci<2:nx=-nx;ny=-ny
     n.extend([nx,ny,nz]);u.extend(uv[i*2:i*2+2]);U=(x-bounds[0])/(bounds[1]-bounds[0]);pu.extend([1-U if face=='back' else U,(y-bounds[2])/(bounds[3]-bounds[2])])
    attrs={'POSITION':attr(p,3),'NORMAL':attr(n,3),'TEXCOORD_0':attr(u,2),'TEXCOORD_1':attr(pu,2)};extras={}
    if face in ['front','back','pocket']:extras={'fabricFace':face,'fabricSize':[(bounds[1]-bounds[0])*scale,(bounds[3]-bounds[2])*scale]}
    mi=len(meshes);meshes.append({'name':kind+'-'+face,'primitives':[{'attributes':attrs,'indices':attr([mapping[i] for i in indices],1,5125),'material':material(source,face)}]});nodes.append({'mesh':mi,'name':kind+'-'+face,'extras':extras})
 g={'asset':{'version':'2.0','generator':'Reborn Studio licensed asset adaptation'},'scene':0,'scenes':[{'nodes':list(range(len(nodes)))}],'nodes':nodes,'meshes':meshes,'materials':materials,'textures':textures,'samplers':original.get('samplers',[]),'images':images,'accessors':accessors,'bufferViews':views,'buffers':[{'byteLength':len(binary)}]}
 # Drop unused source colour maps/materials and repack only referenced resources.
 used_materials=sorted({p['material'] for m in meshes for p in m['primitives']});material_map={old:i for i,old in enumerate(used_materials)}
 g['materials']=[materials[i] for i in used_materials]
 for m in meshes:
  for p in m['primitives']:p['material']=material_map[p['material']]
 refs=[]
 def texture_refs(value):
  if not isinstance(value,dict):return
  for key,item in value.items():
   if key.endswith('Texture') and isinstance(item,dict) and 'index' in item:refs.append(item)
   else:texture_refs(item)
 for m in g['materials']:texture_refs(m)
 used_textures=sorted({r['index'] for r in refs});texture_map={old:i for i,old in enumerate(used_textures)}
 for r in refs:r['index']=texture_map[r['index']]
 g['textures']=[textures[i] for i in used_textures]
 used_images=sorted({t['source'] for t in g['textures']});image_map={old:i for i,old in enumerate(used_images)}
 for t in g['textures']:t['source']=image_map[t['source']]
 g['images']=[images[i] for i in used_images]
 used_views=sorted({a['bufferView'] for a in accessors}|{im['bufferView'] for im in g['images']});view_map={old:i for i,old in enumerate(used_views)};packed=bytearray();new_views=[]
 for i in used_views:
  v=views[i];offset=v.get('byteOffset',0)
  while len(packed)%4:packed.append(0)
  new_views.append({**v,'byteOffset':len(packed)});packed.extend(binary[offset:offset+v['byteLength']])
 for a in accessors:a['bufferView']=view_map[a['bufferView']]
 for im in g['images']:im['bufferView']=view_map[im['bufferView']]
 binary=packed;g['bufferViews']=new_views;g['buffers'][0]['byteLength']=len(binary)
 # Original material extensions (if any) remain declared; no extra runtime decoder.
 for key in ['extensionsUsed','extensionsRequired']:
  if key in original:g[key]=original[key]
 j=json.dumps(g,separators=(',',':')).encode();j+=b' '*((-len(j))%4);binary+=b'\0'*((-len(binary))%4);out=struct.pack('<III',0x46546c67,2,28+len(j)+len(binary))+struct.pack('<II',len(j),0x4e4f534a)+j+struct.pack('<II',len(binary),0x004e4942)+binary;(outdir/(kind+'.glb')).write_bytes(out);(root/(kind+'-adapted.glb')).write_bytes(out);print(kind,len(out),'bytes',len(meshes),'meshes')
