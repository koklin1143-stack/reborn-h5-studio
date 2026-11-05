const test=require('node:test'),assert=require('node:assert/strict');
test('both tote handles start and end on sewn cloth, with visible thickness from every side',async()=>{
 const {createBag}=await import('../source/bag-geometry.mjs'),T=await import('three');const bag=createBag('tote');
 const handles=bag.group.children.filter(m=>m.name==='tote-sewn-handle');assert.equal(handles.length,2);
 for(const handle of handles){const p=handle.geometry.attributes.position;
  for(const [end,anchor]of handle.userData.attachmentPoints.entries()){
   const at=new T.Vector3();for(let i=0;i<4;i++)at.add(new T.Vector3().fromBufferAttribute(p,end?p.count-4+i:i));at.multiplyScalar(.25);assert.ok(at.distanceTo(new T.Vector3(...anchor))<.015);
   const a=new T.Vector3().fromBufferAttribute(p,end?p.count-4:0),b=new T.Vector3().fromBufferAttribute(p,end?p.count-1:3);assert.ok(a.distanceTo(b)>.02,'strap must remain solid in a side view');
  }
 }
});
test('backpack local artwork occupies the main panel above the pocket rather than crossing its zipper',async()=>{
 const {createBag}=await import('../source/bag-geometry.mjs');const bag=createBag('backpack'),main=bag.surfaces.find(s=>s.userData.fabricFace==='front'),pocket=bag.surfaces.find(s=>s.userData.fabricFace==='pocket');
 const [cx,cy,w,h]=main.userData.localPrintBox,p=main.geometry.attributes.position,uv=main.geometry.attributes.uv;let bottom=Infinity;
 for(let i=0;i<p.count;i++)if(Math.abs(uv.getX(i)-cx)<=w/2&&Math.abs(uv.getY(i)-cy)<=h/2)bottom=Math.min(bottom,p.getY(i));
 pocket.geometry.computeBoundingBox();assert.ok(bottom>pocket.geometry.boundingBox.max.y+.10);
});
