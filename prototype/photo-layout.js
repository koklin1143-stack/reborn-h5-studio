/* Per-material transforms are shared by the mobile editing surface and the saved composite. */
(()=>{
 'use strict';
 const clamp=(n,lo,hi)=>Math.max(lo,Math.min(hi,n));
 const radians=angle=>(angle||0)*Math.PI/180;
 const degrees=angle=>((Math.round(angle)+180)%360+360)%360-180;
 function frame(p,image){
  const ratio=image.width/image.height,w=p.size*Math.min(1,ratio),h=p.size*Math.min(1,1/ratio);
  const angle=radians(p.rotation),cos=Math.cos(angle),sin=Math.sin(angle);
  return {w,h,cos,sin,spanX:Math.abs(w*cos)+Math.abs(h*sin),spanY:Math.abs(w*sin)+Math.abs(h*cos)};
 }
 function contain(p,image){
  const unit=frame({...p,size:1},image);
  p.size=clamp(p.size,.12,Math.min(1,1/unit.spanX,1/unit.spanY));
  const x=p.size*unit.spanX/2,y=p.size*unit.spanY/2;
  p.x=clamp(p.x,x,1-x);p.y=clamp(p.y,y,1-y);
 }
 const blends=new Map([['source-over','原样'],['multiply','叠印'],['screen','提亮'],['soft-light','柔光'],['overlay','叠加']]);
 const edges=new Map([['none','原边'],['soft','柔边'],['left','左侧渐隐'],['right','右侧渐隐']]);
 const prepared=new WeakMap();
 function edged(image,edge){
  if(!edges.has(edge)||edge==='none')return image;
  if(!prepared.has(image))prepared.set(image,new Map());
  const cache=prepared.get(image);if(cache.has(edge))return cache.get(edge);
  const c=document.createElement('canvas');c.width=image.width;c.height=image.height;
  const ctx=c.getContext('2d');ctx.drawImage(image,0,0);ctx.globalCompositeOperation='destination-in';
  function fade(vertical,stops){
   const g=ctx.createLinearGradient(0,0,vertical?0:c.width,vertical?c.height:0);
   for(const [at,alpha] of stops)g.addColorStop(at,'rgba(0,0,0,'+alpha+')');
   ctx.fillStyle=g;ctx.fillRect(0,0,c.width,c.height);
  }
  if(edge==='soft'){
   const stops=[[0,0],[.08,.42],[.2,1],[.8,1],[.92,.42],[1,0]];fade(false,stops);fade(true,stops);
  }else fade(false,edge==='left'?[[0,0],[.12,0],[.77,1],[1,1]]:[[0,1],[.23,1],[.88,0],[1,0]]);
  cache.set(edge,c);return c;
 }
 function draw(ctx,layers,images){
  const n=ctx.canvas.width;ctx.clearRect(0,0,n,n);
  layers.forEach((p,i)=>{
   const f=frame(p,images[i]);ctx.save();ctx.translate(n*p.x,n*p.y);ctx.rotate(radians(p.rotation));
   ctx.scale(p.flipX?-1:1,p.flipY?-1:1);ctx.globalAlpha=(p.opacity??100)/100;
   ctx.globalCompositeOperation=blends.has(p.blend)?p.blend:'source-over';
   ctx.drawImage(edged(window.MaterialColor.paint(images[i],p),p.edge),-n*f.w/2,-n*f.h/2,n*f.w,n*f.h);ctx.restore();
  });
 }
 function uv(p,f,point){
  const dx=point.x-p.x,dy=point.y-p.y;
  return {u:.5+(dx*f.cos+dy*f.sin)/f.w*(p.flipX?-1:1),v:.5+(-dx*f.sin+dy*f.cos)/f.h*(p.flipY?-1:1)};
 }
 const inside=({u,v})=>u>=0&&v>=0&&u<=1&&v<=1;
 function hitMask(image){
  const c=document.createElement('canvas');c.width=c.height=64;const ctx=c.getContext('2d');
  ctx.drawImage(image,0,0,64,64);return ctx.getImageData(0,0,64,64).data;
 }
 function tool(id,label){return '<button type="button" data-layer-command="'+id+'"'+(id==='front'?' class="layer-front"':'')+'>'+label+'</button>';}
 function slider(key,label,min,max,unit){
  return '<label class="layer-slider layout-'+key+'"><span>'+label+'</span><input type="range" data-layer-field="'+key+'" min="'+min+'" max="'+max+'" aria-label="当前素材'+label+'"><output data-unit="'+unit+'"></output></label>';
 }
 async function open({layers,preferred,preparing,loadBlob,api,save}){
  const V=window.Views;
  const historyButtons=[['undo','撤销'],['redo','重做']].map(([id,label])=>'<button type="button" data-layout-history="'+id+'" aria-label="'+label+'排布" title="'+label+'" disabled>'+V.icon(id,18)+'</button>').join('');
  api.open('摆放与融合',`<div class="material-layout">
   <div class="layout-stage"><div class="layout-paper"><canvas width="640" height="640" tabindex="0" aria-label="点选素材后拖动，拖角标缩放，双指旋转"></canvas><button type="button" class="layer-handle" aria-label="缩放选中素材，拖动角标或按方向键" disabled><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5l14 14M5 12V5h7m7 7v7h-7"/></svg></button></div><small>点选后拖动 · 拖角标缩放 · 双指旋转</small></div>
   <div class="layout-parts" role="group" aria-label="选择素材，左侧在上层">${layers.slice().reverse().map((p,i)=>`<button type="button" data-layer="${layers.length-i-1}"><img alt=""><span>${V.esc(p.name)}</span></button>`).join('')}</div>
   <div class="blend-head"><div><strong>融图效果</strong><small class="blend-hint"></small></div><button type="button" class="pair-materials" aria-expanded="false">${V.icon('layers',16)} 叠到一起</button></div>
   <div class="pair-targets" role="group" aria-label="选择要叠到的素材" hidden></div>
   <div class="blend-presets" role="group" aria-label="选中素材的混色效果">${[...blends].map(([id,name])=>`<button type="button" data-layer-blend="${id}"><i aria-hidden="true"></i><span>${name}</span></button>`).join('')}</div>
   ${slider('opacity','不透明度',0,100,'%')}
   <details class="blend-edges"><summary>边缘融合 <span class="edge-value"></span></summary><div class="layer-actions">${[...edges].map(([id,name])=>`<button type="button" data-layer-edge="${id}">${name}</button>`).join('')}</div></details>
   <details class="placement-more"><summary>叠放顺序 <span class="layer-status" aria-live="polite"></span></summary><div class="layer-actions">${tool('up','上移一层')+tool('down','下移一层')+tool('front','置顶')+tool('back','置底')}</div></details>
   <div class="layer-apply-bar">${preparing?'':V.btn('增减素材','manage-photo-picks','text')}<button class="btn primary layout-apply" disabled>${preparing?'用这组素材进入工作台':'应用到纹样'}</button></div></div>`);
  const root=document.querySelector('.material-layout'),dialog=root.closest('dialog'),board=root.querySelector('canvas'),ctx=board.getContext('2d');
  const head=dialog.querySelector('.dialog-head'),commands=document.createElement('div');commands.className='layout-history';commands.innerHTML=historyButtons;head.insertBefore(commands,head.lastElementChild);
  const apply=root.querySelector('.layout-apply'),manage=root.querySelector('[data-action="manage-photo-picks"]');
  if(manage)manage.disabled=true;
  const urls=[],media=new Map(),before=[],after=[];
  const current=()=>root.isConnected&&dialog.open;
  const dispose=()=>{for(const url of urls)URL.revokeObjectURL(url);urls.length=0;};
  dialog.addEventListener('close',dispose,{once:true});
  try{
   const blobs=await Promise.all(layers.map(loadBlob));if(!current())return;
   await Promise.all(blobs.map(async(blob,i)=>{
    const image=new Image(),url=URL.createObjectURL(blob);urls.push(url);image.src=url;await image.decode();
    const layer=layers[i];let thumb=url;
    if(layer.tint){const c=document.createElement('canvas'),ratio=56/Math.max(image.width,image.height);c.width=Math.max(1,Math.round(image.width*ratio));c.height=Math.max(1,Math.round(image.height*ratio));c.getContext('2d').drawImage(window.MaterialColor.paint(image,layer),0,0,c.width,c.height);thumb=c.toDataURL();}
    media.set(layer.id,{image,url:thumb,masks:new Map()});
   }));
  }catch(e){dispose();if(current())api.dialogError(e.message||'素材暂时打不开，请重试。');return;}
  if(!current()){dispose();return;}
  let selected=layers.find(p=>p.id===preferred)?.id||layers.at(-1).id,saving=false;
  const index=()=>layers.findIndex(p=>p.id===selected),active=()=>layers[index()],asset=p=>media.get(p.id),image=p=>asset(p).image;
  const capture=()=>({layers:layers.map(p=>({...p})),selected});
  const surface=board.parentElement,handle=surface.querySelector('.layer-handle'),targets=root.querySelector('.pair-targets'),pairButton=root.querySelector('.pair-materials');
  function coverage(p,pt,f=frame(p,image(p))){
   const {u,v}=uv(p,f,pt);if(!inside({u,v})||p.opacity===0)return 0;
   const m=asset(p),key=p.edge||'none';
   if(!m.masks.has(key))m.masks.set(key,hitMask(edged(m.image,key)));
   return m.masks.get(key)[4*(Math.min(63,Math.floor(v*64))*64+Math.min(63,Math.floor(u*64)))+3]*(p.opacity??100)/100;
  }
  function intersects(p,lower){
   const f=frame(p,image(p)),g=frame(lower,image(lower));
   const left=Math.max(p.x-f.spanX/2,lower.x-g.spanX/2),right=Math.min(p.x+f.spanX/2,lower.x+g.spanX/2);
   const top=Math.max(p.y-f.spanY/2,lower.y-g.spanY/2),bottom=Math.min(p.y+f.spanY/2,lower.y+g.spanY/2);
   if(left>=right||top>=bottom)return false;
   for(let y=0;y<10;y++)for(let x=0;x<10;x++){
    const point={x:left+(right-left)*(x+.5)/10,y:top+(bottom-top)*(y+.5)/10};
    if(coverage(p,point,f)>8&&coverage(lower,point,g)>8)return true;
   }
   return false;
  }
  function closeTargets(){targets.hidden=true;pairButton.setAttribute('aria-expanded','false');}
  function stackOn(target){
   if(!target||target.id===selected)return;
   const prev=capture(),p=active();layers.splice(index(),1);layers.splice(layers.indexOf(target)+1,0,p);
   if(layers.length===2){
    const a=frame(p,image(p)),b=frame(target,image(target)),x=Math.max(a.spanX,b.spanX)/2,y=Math.max(a.spanY,b.spanY)/2;
    target.x=clamp((p.x+target.x)/2,x,1-x);target.y=clamp((p.y+target.y)/2,y,1-y);
   }
   p.x=target.x;p.y=target.y;contain(p,image(p));closeTargets();record(prev);render(true);
  }
  function pickTarget(){
   const others=layers.filter(p=>p.id!==selected);
   if(others.length===1){stackOn(others[0]);return;}
   if(!targets.hidden){closeTargets();return;}
   targets.innerHTML='<small>把当前素材叠到哪一份上？</small>'+others.map(p=>'<button type="button" data-stack-on="'+V.esc(p.id)+'"><img src="'+asset(p).url+'" alt="">'+V.esc(p.name)+'</button>').join('');
   targets.hidden=false;pairButton.setAttribute('aria-expanded','true');
  }
  let swatchKey='';
  function renderMix(p,i){
   const under=layers.slice(0,i).reverse(),overlap=under.find(q=>intersects(p,q)),lower=overlap||under[0]||layers[1];
   root.querySelector('.blend-hint').textContent=p.opacity===0?'提高不透明度即可显现':overlap?'与下层混色':'叠到一起就能看效果';
   const nextKey=JSON.stringify([p.id,lower.id]);
   const regenerate=nextKey!==swatchKey;swatchKey=nextKey;
   for(const el of root.querySelectorAll('[data-layer-blend]')){
    const mode=el.dataset.layerBlend;el.setAttribute('aria-pressed',String(mode===(p.blend||'source-over')));
    if(regenerate){
     const c=document.createElement('canvas');c.width=c.height=68;
     draw(c.getContext('2d'),[{x:.45,y:.52,size:1.15,tint:lower.tint,ink:lower.ink,treatment:lower.treatment},{x:.56,y:.48,size:.86,blend:mode,tint:p.tint,ink:p.ink,treatment:p.treatment}],[image(lower),image(p)]);
     el.firstElementChild.style.backgroundImage='url('+c.toDataURL()+')';
    }
   }
   for(const el of root.querySelectorAll('[data-layer-edge]'))el.setAttribute('aria-pressed',String(el.dataset.layerEdge===(p.edge||'none')));
   root.querySelector('.edge-value').textContent=edges.get(p.edge)||'原边';
  }
  const different=s=>s&&JSON.stringify(s.layers)!==JSON.stringify(layers);
  function record(previous){
   if(!different(previous))return;
   before.push(previous);if(before.length>40)before.shift();after.length=0;
  }
  function history(direction){
   const undo=direction==='undo',from=undo?before:after,to=undo?after:before;
   if(!from.length||saving)return;
   to.push(capture());const s=from.pop();layers=s.layers;selected=s.selected;closeTargets();render(true);
  }
  function render(reveal=false){
   const p=active(),i=index(),n=board.width,f=frame(p,image(p));
   draw(ctx,layers,layers.map(image));
   ctx.save();ctx.translate(p.x*n,p.y*n);ctx.rotate(radians(p.rotation));
   const line=n/Math.max(1,board.clientWidth);ctx.lineWidth=line*2;ctx.strokeStyle='#fff';ctx.strokeRect(-f.w*n/2,-f.h*n/2,f.w*n,f.h*n);
   ctx.setLineDash([line*5,line*3]);ctx.strokeStyle='#295b70';ctx.lineWidth=line;ctx.strokeRect(-f.w*n/2,-f.h*n/2,f.w*n,f.h*n);ctx.restore();
   handle.style.left=(p.x+(f.w*f.cos-f.h*f.sin)/2)*100+'%';handle.style.top=(p.y+(f.w*f.sin+f.h*f.cos)/2)*100+'%';
   handle.setAttribute('aria-label','缩放素材 '+Math.round(p.size*100)+'%，旋转 '+(p.rotation||0)+'°。方向键缩放，Shift 加方向键旋转');
   handle.firstElementChild.style.transform='rotate('+(p.rotation||0)+'deg)';
   renderMix(p,i);
   const strip=root.querySelector('.layout-parts');
   for(const el of strip.children){
    const k=Number(el.dataset.layer),layer=layers[k],on=k===i;
    el.setAttribute('aria-pressed',String(on));el.setAttribute('aria-label',layer.name+'，从底向上第 '+(k+1)+' 层');
    const im=el.querySelector('img');if(im.src!==asset(layer).url)im.src=asset(layer).url;
    el.querySelector('span').textContent=layer.name;
    if(reveal&&on){const offset=el.getBoundingClientRect().left-strip.getBoundingClientRect().left;
     if(offset<0)strip.scrollLeft+=offset;else if(offset+el.offsetWidth>strip.clientWidth)strip.scrollLeft+=offset+el.offsetWidth-strip.clientWidth;}
   }
   const status=root.querySelector('.layer-status'),label=p.name+' · '+(i===layers.length-1?'顶层':i===0?'底层':'第 '+(i+1)+' 层');
   if(status.textContent!==label)status.textContent=label;
   for(const el of root.querySelectorAll('[data-layer-command]')){
    const k=el.dataset.layerCommand;
    el.disabled=(['front','up'].includes(k)&&i===layers.length-1)||(['back','down'].includes(k)&&i===0);
   }
   const opacity=root.querySelector('[data-layer-field=opacity]');opacity.value=p.opacity??100;opacity.nextElementSibling.textContent=opacity.value+'%';
   commands.querySelector('[data-layout-history=undo]').disabled=!before.length;
   commands.querySelector('[data-layout-history=redo]').disabled=!after.length;
  }
  function command(k){
   const prev=capture(),i=index(),last=layers.length-1,next={up:i+1,down:i-1,front:last,back:0}[k];
   if(next===undefined)return;
   const p=layers.splice(i,1)[0];layers.splice(clamp(next,0,last),0,p);record(prev);render(true);
  }
  root.onclick=e=>{
   if(saving)return;
   const b=e.target.closest('button');if(!b)return;
   if(b.dataset.layer!==undefined){selected=layers[Number(b.dataset.layer)].id;explicitPick=true;closeTargets();render(true);}
   else if(b===pairButton)pickTarget();
   else if(b.dataset.stackOn)stackOn(layers.find(p=>p.id===b.dataset.stackOn));
   else if(b.dataset.layerBlend||b.dataset.layerEdge){
    const p=active(),prev=capture();
    if(b.dataset.layerBlend){if((p.blend||'source-over')===b.dataset.layerBlend)return;p.blend=b.dataset.layerBlend;}
    else{if((p.edge||'none')===b.dataset.layerEdge)return;p.edge=b.dataset.layerEdge;}
    record(prev);render();
   }

   else if(b.dataset.layerCommand)command(b.dataset.layerCommand);
  };
  commands.onclick=e=>{const btn=e.target.closest('[data-layout-history]');if(btn)history(btn.dataset.layoutHistory);};
  // A finger leaving a drag can suppress the next compatibility click on mobile.
  // Activate a stationary tap on release, while letting scrolls and gestures pass through.
  function bindTaps(container){
   let press=null;
   container.addEventListener('touchstart',e=>{
    const el=e.target.closest('button,summary'),touch=e.touches[0];
    press=e.touches.length===1&&el&&el!==handle&&!el.disabled?{el,id:touch.identifier,x:touch.clientX,y:touch.clientY}:null;
   },{passive:true});
   container.addEventListener('touchmove',e=>{
    const t=e.touches[0];if(press&&(e.touches.length!==1||Math.hypot(t.clientX-press.x,t.clientY-press.y)>9))press=null;
   },{passive:true});
   container.addEventListener('touchcancel',()=>{press=null;});
   container.addEventListener('touchend',e=>{
    const start=press,t=e.changedTouches[0];press=null;
    if(!start||!e.cancelable||t.identifier!==start.id||!start.el.contains(document.elementFromPoint(t.clientX,t.clientY)))return;
    e.preventDefault();start.el.focus({preventScroll:true});start.el.click();
   },{passive:false});
  }
  bindTaps(root);bindTaps(head);
  let rangeStart=null;
  root.oninput=e=>{
   const el=e.target,k=el.dataset.layerField;if(!k||saving)return;
   rangeStart??=capture();active().opacity=Number(el.value);render();
  };
  root.onchange=e=>{if(e.target.dataset.layerField){record(rangeStart);rangeStart=null;render();}};
  board.onkeydown=e=>{
   const step=e.shiftKey ? .05 : .01,ds={ArrowLeft:[-step,0],ArrowRight:[step,0],ArrowUp:[0,-step],ArrowDown:[0,step]}[e.key];
   if(!ds||saving)return;e.preventDefault();const prev=capture(),p=active();p.x+=ds[0];p.y+=ds[1];contain(p,image(p));record(prev);render();
  };
  root.onkeydown=e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();history(e.shiftKey?'redo':'undo');}};
  const point=e=>{const rect=board.getBoundingClientRect();return {x:(e.clientX-rect.left)/rect.width,y:(e.clientY-rect.top)/rect.height};};
  const hit=pt=>layers.findLast(p=>coverage(p,pt)>12);
  const pointers=new Map(),pair=()=>window.TouchTransform.pair([...pointers.values()]);
  let gesture,base,anchor,explicitPick=false;
  function rebase(){
   base={...active()};anchor=pointers.size===1?[...pointers.values()][0]:pair();
   if(gesture.handle){
    const f=frame(base,image(base));
    gesture.fixed={x:base.x-(f.w*f.cos-f.h*f.sin)/2,y:base.y-(f.w*f.sin+f.h*f.cos)/2};
   }
  }
  surface.onpointerdown=e=>{
   if(saving||e.button!==0||pointers.size>=2)return;
   const pt=point(e);
   if(!pointers.size){
    const p=active(),top=hit(pt),viaHandle=handle.contains(e.target);
    const held=explicitPick&&inside(uv(p,frame(p,image(p)),pt));
    gesture={start:capture(),tap:top?.id,pt,moved:false,handle:viaHandle,canDrag:viaHandle||held||Boolean(top)};
    if(!viaHandle&&!held&&top)selected=top.id;
    closeTargets();
   }else{gesture.moved=true;gesture.handle=false;gesture.canDrag=true;}
   e.preventDefault();pointers.set(e.pointerId,pt);surface.setPointerCapture(e.pointerId);rebase();render(true);
  };
  surface.onpointermove=e=>{
   if(!pointers.has(e.pointerId)||saving)return;
   const pt=point(e);pointers.set(e.pointerId,pt);const p=active();
   if(pointers.size===2){
    const next=pair(),ratio=next.distance/Math.max(.008,anchor.distance),angle=next.angle-anchor.angle;
    p.size=base.size*ratio;p.rotation=degrees((base.rotation||0)+angle*180/Math.PI);contain(p,image(p));
    const zoom=p.size/base.size,dx=base.x-anchor.x,dy=base.y-anchor.y;
    p.x=next.x+zoom*(dx*Math.cos(angle)-dy*Math.sin(angle));p.y=next.y+zoom*(dx*Math.sin(angle)+dy*Math.cos(angle));
   }else{
    if(!gesture.canDrag||(!gesture.moved&&Math.hypot(pt.x-gesture.pt.x,pt.y-gesture.pt.y)*board.clientWidth<3))return;
    gesture.moved=true;
    if(gesture.handle){
     const fixed=gesture.fixed,dx=anchor.x-fixed.x,dy=anchor.y-fixed.y;
     const ratio=((pt.x-fixed.x)*dx+(pt.y-fixed.y)*dy)/Math.max(.0001,dx*dx+dy*dy);
     p.size=base.size*ratio;contain(p,image(p));const zoom=p.size/base.size;
     p.x=fixed.x+(base.x-fixed.x)*zoom;p.y=fixed.y+(base.y-fixed.y)*zoom;
    }else{p.x=base.x+pt.x-anchor.x;p.y=base.y+pt.y-anchor.y;}
   }
   contain(p,image(p));render();
  };
  surface.onpointerup=e=>{
   if(!pointers.delete(e.pointerId))return;if(pointers.size){rebase();return;}
   if(!gesture.moved&&!gesture.handle&&gesture.tap){selected=gesture.tap;explicitPick=false;}
   record(gesture.start);gesture=null;render(true);
  };
  surface.onpointercancel=surface.onlostpointercapture=e=>{
   if(!pointers.has(e.pointerId))return;pointers.clear();layers=gesture.start.layers;selected=gesture.start.selected;gesture=null;render();
  };
  handle.onkeydown=e=>{
   if(saving||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;
   e.preventDefault();const prev=capture(),p=active();const direction=['ArrowRight','ArrowUp'].includes(e.key)?1:-1;if(e.shiftKey)p.rotation=degrees((p.rotation||0)+direction*5);else p.size=(Math.round(p.size*100)+direction*2)/100;contain(p,image(p));record(prev);render();
  };
  async function finish(managing){
   if(saving)return;saving=true;root.inert=true;commands.inert=true;
   try{await save(layers,managing,current);}catch(e){if(current())api.dialogError(e.message);}
   finally{if(current()){saving=false;root.inert=false;commands.inert=false;}}
  }
  handle.disabled=false;apply.disabled=false;apply.onclick=()=>finish(false);
  if(manage){manage.disabled=false;manage.onclick=e=>{e.stopPropagation();finish(true);};}
  render(true);
 }
 window.PhotoLayout={open,draw};
})();
