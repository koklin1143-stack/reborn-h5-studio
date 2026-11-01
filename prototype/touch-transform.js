/* Shared gesture maths. One complete touch sequence is one undoable edit. */
(function(root,factory){const api=factory();if(typeof module==='object')module.exports=api;else root.TouchTransform=api;})(typeof window!=='undefined'?window:this,function(){
 const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
 const pair=points=>{const [a,b]=points;return {x:(a.x+b.x)/2,y:(a.y+b.y)/2,distance:Math.hypot(b.x-a.x,b.y-a.y),angle:Math.atan2(b.y-a.y,b.x-a.x)};};
 const pinch=(base,start,current)=>({ ...base,scale:Math.round(clamp(base.scale*current.distance/Math.max(1,start.distance),40,160)),rotation:Math.round(((base.rotation+(Math.atan2(Math.sin(current.angle-start.angle),Math.cos(current.angle-start.angle)))*180/Math.PI+540)%360)-180)});
 function bind(element,{read,preview,commit,drag,transform=pinch}){
  const points=new Map();let original,current,segment,anchor;
  const rebase=()=>{segment={...current};anchor=points.size===1?[...points.values()][0]:pair([...points.values()]);};
  element.addEventListener('pointerdown',e=>{if(points.size>=2)return;e.stopPropagation();e.preventDefault();if(!points.size){original={...read()};current={...original};}points.set(e.pointerId,{x:e.clientX,y:e.clientY});element.setPointerCapture(e.pointerId);rebase();});
  element.addEventListener('pointermove',e=>{if(!points.has(e.pointerId))return;e.stopPropagation();points.set(e.pointerId,{x:e.clientX,y:e.clientY});current=points.size===2?transform(segment,anchor,pair([...points.values()])):drag(segment,anchor,{x:e.clientX,y:e.clientY});preview(current);});
  element.addEventListener('pointerup',e=>{if(!points.has(e.pointerId))return;e.stopPropagation();points.delete(e.pointerId);if(points.size)rebase();else if(JSON.stringify(current)!==JSON.stringify(original))commit(current);});
  const cancel=e=>{if(!points.size)return;e.stopPropagation();points.clear();preview(original);};
  element.addEventListener('pointercancel',cancel);element.addEventListener('lostpointercapture',e=>{if(points.has(e.pointerId))cancel(e);});
 }
 return {pair,pinch,bind,clamp};
});
