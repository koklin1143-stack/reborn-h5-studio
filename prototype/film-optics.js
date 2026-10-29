/* A fixed lens over two independently moving paper photographs. */
(() => {
 'use strict';
 let host=null, animations=[], generation=0, progress=0, direction=1;
 const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
 const read=el=>{const s=getComputedStyle(el);return {transform:s.transform,opacity:s.opacity,filter:s.filter};};
 function sheet(p,dir,incoming){
  const q=incoming?1-p:p, arc=Math.sin(q*Math.PI);
  const x=(incoming?dir:-dir)*(118*q+7*arc), y=26*q+9*arc;
  const rz=(incoming?dir:-dir)*(12*q), ry=(incoming?dir:-dir)*18*q;
  const scale=1-.09*q;
  return {transform:`translate3d(${x}px,${y}px,${-22*arc}px) rotateZ(${rz}deg) rotateY(${ry}deg) scale(${scale})`,opacity:1,
   filter:`blur(${Math.max(1.15*q,Math.sin(q*Math.PI)*1.5).toFixed(3)}px) brightness(${(1-.22*q).toFixed(3)})`};
 }
 function stop(){animations.forEach(a=>a.cancel());animations=[];}
 function bind(win){if(host!==win){stop();host=win;progress=0;generation++;}}
 function make(item,photo,preview=false){const el=document.createElement('span');el.className='viewed-slide'+(preview?' preview-slide':'');el.dataset.id=item.id;el.innerHTML=photo(item);el.setAttribute('aria-hidden','true');return el;}
 function paint(el,values){Object.assign(el.style,values);}
 function play(el,frames,options={}){const a=el.animate(frames,{duration:740,easing:'cubic-bezier(.22,.64,.24,1)',...options});animations.push(a);return a;}
 function current(win){return win.querySelector('.viewed-slide:not(.leaving):not(.preview-slide)');}
 function glow(win,dir,p){win.style.setProperty('--lens-drift',`${-dir*p*12}px`);win.style.setProperty('--lens-motion',String(Math.sin(p*Math.PI)));}
 function drag(win,item,next,dx,photo){
  bind(win);if(reduced())return;
  const dir=dx<0?1:-1,p=Math.min(.86,Math.abs(dx)/150);
  const active=current(win);if(!active)return;
  if(progress===0||dir!==direction){stop();generation++;win.querySelectorAll('.viewed-slide.leaving,.preview-slide').forEach(el=>el.remove());}
  let preview=win.querySelector('.preview-slide');
  if(!preview||preview.dataset.id!==next.id){preview?.remove();preview=make(next,photo,true);win.prepend(preview);}
  active.style.zIndex='2';preview.style.zIndex='1';
  paint(active,sheet(p,dir,false));paint(preview,sheet(p,dir,true));glow(win,dir,p);
  direction=dir;progress=p;win.dataset.scrubProgress=p.toFixed(3);
 }
 function release(win){
  if(!win||win!==host||!progress)return;
  const active=current(win),preview=win.querySelector('.preview-slide'),dir=direction;
  const a=active&&read(active),b=preview&&read(preview),token=++generation;
  stop();progress=0;win.dataset.scrubProgress='0';glow(win,dir,0);
  if(active){paint(active,sheet(0,dir,false));play(active,[a,sheet(0,dir,false)],{duration:300});}
  if(preview){play(preview,[b,sheet(0,dir,true)],{duration:300,fill:'forwards'}).finished.then(()=>{if(token===generation)preview.remove();}).catch(()=>{});}
 }
 function transition(win,item,dir,photo,{animate=true,categoryChanged=false}={}){
  bind(win);const previous=current(win),preview=win.querySelector('.preview-slide');
  if(previous?.dataset.id===item.id){release(win);return;}
  const fromPrevious=previous&&read(previous),usePreview=preview?.dataset.id===item.id&&direction===dir;
  const fromIncoming=usePreview?read(preview):sheet(0,dir,true),start=usePreview?progress:0,token=++generation;
  stop();const incoming=usePreview?preview:make(item,photo);
  win.querySelectorAll('.viewed-slide').forEach(el=>{if(el!==previous&&el!==incoming)el.remove();});
  incoming.className='viewed-slide';incoming.style.zIndex='2';paint(incoming,sheet(1,dir,true));
  if(!incoming.parentNode)win.prepend(incoming);
  progress=0;win.dataset.scrubProgress='0';glow(win,dir,0);
  if(!animate||reduced()||!previous){previous?.remove();return;}
  previous.className='viewed-slide leaving';previous.style.zIndex='3';
  if(categoryChanged){
   play(previous,[{opacity:1},{opacity:0}],{duration:240,fill:'forwards'}).finished.then(()=>{if(token===generation)previous.remove();}).catch(()=>{});
   play(incoming,[{opacity:0},{opacity:1}],{duration:240});return;
  }
  const oldFrames=[],newFrames=[];
  for(let k=0;k<=24;k++){const t=k/24,p=start+(1-start)*t;oldFrames.push({offset:t,...sheet(p,dir,false)});newFrames.push({offset:t,...sheet(p,dir,true)});}
  oldFrames[0]={offset:0,...fromPrevious};newFrames[0]={offset:0,...fromIncoming};
  const duration=Math.max(300,760*(1-start));
  paint(previous,sheet(1,dir,false));
  play(previous,oldFrames,{duration,fill:'forwards'}).finished.then(()=>{if(token===generation)previous.remove();}).catch(()=>{});
  play(incoming,newFrames,{duration});
  const glass=win.querySelector('.glass-reflection');
  if(glass)play(glass,[{transform:`translateX(${-dir*8}px)`,opacity:.85},{transform:'translateX(0)',opacity:1}],{duration});
 }
 function reset(){stop();host=null;progress=0;generation++;}
 window.FilmOptics={drag,release,transition,reset};
})();
