/* Paint colour assignments in motif coordinates so every repeat uses the same inks. */
(() => {
 'use strict';
 const key=d=>d.imageId?'image:'+d.imageId:'motif:'+d.itemId;
 const hex=v=>typeof v==='string'&&/^#[0-9a-f]{6}$/i.test(v);
 const coord=v=>Math.max(0,Math.min(1000,Math.round(v)));
 function paintMap(state){
  const shape=s=>{
   const points=s.points;
   if(s.slot>=state.count||!points.length)return '';
   const color=state.colors[s.slot],w=s.width;
   if(!hex(color)||!(w>0&&w<=350))return '';
   if(points.length===1)return '<circle cx="'+coord(points[0][0])+'" cy="'+coord(points[0][1])+'" r="'+w/2+'" fill="'+color+'"/>';
   const d=points.map(([x,y],i)=>(i?'L':'M')+coord(x)+' '+coord(y)).join('');
   return '<path d="'+d+'" fill="none" stroke="'+color+'" stroke-width="'+w+'" stroke-linecap="round" stroke-linejoin="round"/>';
  };
  return '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 1000 1000">'+state.strokes.map(shape).join('')+'</svg>';
 }
 function sourcePalette(d){
  const rec=d.patternConversion;
  return d.imageId&&rec?.assetId===d.imageId&&rec.recipe?.design?.inkPalette?.map(p=>p.hex);
 }
 // The generated PNG already encodes each plate as a distinct RGB value, with
 // spray density in alpha. Project colours onto the axis that separates them
 // best, then look up the new ink for each plate independently of its opacity.
 function plateBase(source,state){
  if(!Array.isArray(source)||![2,3].includes(source.length)||!source.every(hex))return '<feFlood flood-color="'+state.colors[0]+'" result="base"/>';
  const rgb=source.map(v=>v.slice(1).match(/../g).map(c=>parseInt(c,16)/255));
  let best=-1,weights,values;
  for(const axis of [[1,0,0],[0,1,0],[0,0,1],[.5,.5,0],[.5,0,.5],[0,.5,.5],[.2,.7,.1]]){
   const projection=rgb.map(c=>c.reduce((sum,v,i)=>sum+v*axis[i],0));
   const sorted=projection.slice().sort((a,b)=>a-b);
   const gap=Math.min(...sorted.slice(1).map((v,i)=>v-sorted[i]));
   if(gap>best){best=gap;weights=axis;values=projection;}
  }
  const lo=Math.min(...values),span=Math.max(.001,Math.max(...values)-lo);
  const row=weights.map(v=>v/span).join(' ')+' 0 '+(-lo/span);
  const table=Array.from({length:64},(_,i)=>{
   const v=lo+(i+.5)*span/64;
   const nearest=values.reduce((a,b,k)=>Math.abs(b-v)<Math.abs(values[a]-v)?k:a,0);
   return state.colors[nearest<state.count?nearest:0];
  });
  return '<feColorMatrix in="SourceGraphic" values="'+[row,row,row,'0 0 0 0 1'].join(' ')+'"/><feComponentTransfer result="base">'+
   ['R','G','B'].map((c,k)=>'<feFunc'+c+' type="discrete" tableValues="'+table.map(v=>(parseInt(v.slice(1+2*k,3+2*k),16)/255).toFixed(4)).join(' ')+'"/>').join('')+'</feComponentTransfer>';
 }
 let uid=0;
 const maps=new WeakMap();
 function storedPaint(d){
  const s=d.spotPaint;
  return s&&s.source===key(d)&&[2,3].includes(s.count)&&Array.isArray(s.colors)&&s.colors.length>=s.count&&s.colors.slice(0,s.count).every(hex)&&Array.isArray(s.strokes)?s:null;
 }
 function apply(d,art){
  const s=storedPaint(d);
  if(!s)return art;
  let uri=maps.get(s);
  if(!uri){uri='data:image/svg+xml;base64,'+btoa(paintMap(s));maps.set(s,uri);}
  const id='spot-inks-'+(++uid);
  const source=sourcePalette(d);
  // Apply tone to the pigment only. Copy the source alpha once, including spray and open glaze.
  return '<defs><filter id="'+id+'" filterUnits="userSpaceOnUse" x="-85" y="-85" width="170" height="170" color-interpolation-filters="sRGB">'+
   '<feColorMatrix in="SourceGraphic" type="matrix" values=".13 .43 .04 0 .57  .13 .43 .04 0 .57  .13 .43 .04 0 .57  0 0 0 0 1" result="tone"/>'+
   plateBase(source,s)+'<feImage href="'+uri+'" x="-85" y="-85" width="170" height="170" result="brush"/>'+
   '<feComposite in="brush" in2="base" operator="over" result="pigment"/>'+
   (source?'':'<feBlend in="pigment" in2="tone" mode="multiply"/>')+'<feComposite in2="SourceGraphic" operator="in"/></filter></defs>'+
   '<g filter="url(#'+id+')">'+art+'</g>';
 }
 function paletteState(d){
  const source=key(d),stored=storedPaint(d);
  if(stored)return stored;
  const palette=d.patternConversion?.recipe?.printInks;
  const main={blue:'#355b68',red:'#a85545',graphite:'#252925',custom:d.inkColor}[d.patternInk]||palette?.[0]||'#355b68';
  const accent=parseInt(main.slice(1,3),16)>parseInt(main.slice(5,7),16)?'#315879':'#bd4d38';
  const existing=sourcePalette(d);
  return {source,count:existing?.length||2,colors:[existing?.[0]|| (hex(main)?main:'#355b68'),existing?.[1]||accent,existing?.[2]||'#d5a245'],strokes:[]};
 }
 function entry(d){
  const state=paletteState(d);
  const inks=state.colors.slice(0,state.count).map(c=>`<i style="background:${hex(c)?c:'#555'}"></i>`).join('');
  const hint=state===d.spotPaint?'继续编辑'+(state.count===3?'三色':'双色')+'纹样':'给纹样涂双色或三色';
  return `<button type="button" class="spot-entry" data-action="wb-spot-paint" aria-haspopup="dialog" aria-controls="dialog"><span class="spot-entry-inks" aria-hidden="true">${inks}</span><span class="spot-entry-copy"><strong>局部配色</strong><small>${hint}</small></span>${window.Views.icon('chevron',16)}</button>`;
 }
 function open(api,d){
  const existing=sourcePalette(d);
  let state=structuredClone(paletteState(d));
  let slot=1,width=100,stroke=null,pointer=null,frame=0;
  api.open('局部配色','<div class="spot-sheet"><div class="spot-count" role="group" aria-label="颜料数量"><button data-count="2">双色</button><button data-count="3">三色</button></div>'+
   '<div class="spot-art" aria-label="在纹样上涂色"></div><div class="spot-slots" role="group" aria-label="选择要涂的颜色"></div>'+
   '<div class="spot-tools"><label class="spot-color">改色<input type="color" aria-label="修改当前颜料"></label><label class="spot-width">笔宽<input type="range" min="22" max="260" value="100" aria-label="笔宽"></label><button data-back>撤销一笔</button></div>'+
   '<p>'+(existing?'选色签，再点「改色」可换整版颜色，也能用手指涂改局部。':'主色铺底，选辅色后用手指涂在纹样上。')+'</p><button class="btn primary full" data-done>应用配色</button></div>','spot-paint');
  const root=document.querySelector('.spot-sheet'),art=root.querySelector('.spot-art');
  const names=['主色','辅色','点色'],get=q=>root.querySelector(q);
  function preview(){
   frame=0;if(!root.isConnected)return;
   const current=stroke?{...state,strokes:[...state.strokes,stroke]}:state;
   art.innerHTML=window.PatternTexture.spotPreview({...d,patternInk:'original',spotPaint:current});
  }
  function controls(){
   for(const b of root.querySelectorAll('[data-count]'))b.setAttribute('aria-pressed',String(+b.dataset.count===state.count));
   get('.spot-slots').innerHTML=state.colors.slice(0,state.count).map((v,i)=>'<button data-slot="'+i+'" aria-pressed="'+(i===slot)+'"><i style="background:'+v+'"></i>'+names[i]+'</button>').join('');
   get('[type=color]').value=state.colors[slot];get('[data-back]').disabled=!state.strokes.length;
  }
  function refresh(){controls();if(!frame)frame=requestAnimationFrame(preview);}
  root.addEventListener('click',e=>{
   const b=e.target.closest('button');if(!b||pointer!==null)return;
   if(b.dataset.count){state={...state,count:+b.dataset.count};slot=Math.min(slot,state.count-1);}
   else if(b.dataset.slot!==undefined){slot=+b.dataset.slot;}
   else if(b.hasAttribute('data-back')){state={...state,strokes:state.strokes.slice(0,-1)};}
   else if(b.hasAttribute('data-done')){
    api.close();api.update({patternInk:'original',spotPaint:state});
    document.querySelector('.spot-entry')?.focus({preventScroll:true});return;
   }else return;
   refresh();
  });
  get('[type=color]').oninput=e=>{const colors=state.colors.slice();colors[slot]=e.target.value;state={...state,colors};refresh();};
  get('[type=range]').oninput=e=>{width=Number(e.target.value);};
  function point(e){const box=art.getBoundingClientRect();return [coord((e.clientX-box.left)/box.width*1000),coord((e.clientY-box.top)/box.height*1000)];}
  art.onpointerdown=e=>{
   if(pointer!==null||!e.isPrimary||e.button!==0)return;
   pointer=e.pointerId;art.setPointerCapture(pointer);stroke={slot,width,points:[point(e)]};if(!frame)frame=requestAnimationFrame(preview);
  };
  art.onpointermove=e=>{
   if(e.pointerId!==pointer)return;
   const p=point(e),last=stroke.points.at(-1);
   if(Math.hypot(p[0]-last[0],p[1]-last[1])<4)return;
   stroke.points.push(p);if(!frame)frame=requestAnimationFrame(preview);
  };
  art.onpointerup=e=>{
   if(e.pointerId!==pointer)return;
   const end=point(e),last=stroke.points.at(-1);if(end[0]!==last[0]||end[1]!==last[1])stroke.points.push(end);
   if(stroke.points.length>2)stroke.points=window.DataTool.simplify_line(stroke.points,2);
   state={...state,strokes:[...state.strokes,stroke]};stroke=null;pointer=null;refresh();
  };
  art.onpointercancel=art.onlostpointercapture=e=>{if(e.pointerId===pointer){stroke=null;pointer=null;refresh();}};
  controls();preview();
 }
 window.SpotPaint={apply,entry,open};
})();
