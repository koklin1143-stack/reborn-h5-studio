/* Keep source pixels immutable. The selection preview, edges, and final print share this colour treatment. */
(()=>{
 const colors=[['朱砂','#ae493a'],['赭石','#a47443'],['松绿','#467365'],['钴蓝','#345d99'],['靛青','#33466c'],['墨黑','#313739']];
 const valid=s=>typeof s==='string'&&/^#[0-9a-f]{6}$/i.test(s)?s.toLowerCase():null;
 const cache=new WeakMap();
 function paint(source,m){
  const tint=valid(m.tint);if(!tint)return source;
  const solid=m.treatment==='ink'||Boolean(m.ink),key=tint+(solid?'ink':'photo');
  const hit=cache.get(source);if(hit?.key===key)return hit.canvas;
  const c=document.createElement('canvas');c.width=source.width;c.height=source.height;
  const ctx=c.getContext('2d',{willReadFrequently:!solid});ctx.drawImage(source,0,0);
  if(solid){ctx.globalCompositeOperation='source-in';ctx.fillStyle=tint;ctx.fillRect(0,0,c.width,c.height);}
  else{
   const pixels=ctx.getImageData(0,0,c.width,c.height),d=pixels.data,rgb=tint.slice(1).match(/../g).map(v=>parseInt(v,16));
   for(let i=0;i<d.length;i+=4){
    const light=(.2126*d[i]+.7152*d[i+1]+.0722*d[i+2])/255;
    for(let k=0;k<3;k++)d[i+k]=light<.5?rgb[k]*2*light:rgb[k]+(255-rgb[k])*(2*light-1);
   }
   ctx.putImageData(pixels,0,0);
  }
  cache.set(source,{key,canvas:c});return c;
 }
 function controls(){return '<div class="sample-colors" role="group" aria-label="素材颜色"><button type="button" data-tint="" class="tint-original">原色</button>'+colors.map(([name,hex])=>'<button type="button" data-tint="'+hex+'" aria-label="'+name+'" title="'+name+'"><i style="--tint:'+hex+'"></i></button>').join('')+'<label class="tint-custom">自选<input type="color" aria-label="自选素材颜色"></label></div>';}
 function bind(root,initial,change){
  let value=valid(initial);const custom=root.querySelector('input[type=color]');
  function sync(){
   root.querySelectorAll('[data-tint]').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.tint||null)===value)));
   custom.value=value||'#345d99';custom.parentElement.style.setProperty('--tint',custom.value);
  }
  function set(color){value=valid(color);sync();change(value);}
  root.querySelectorAll('[data-tint]').forEach(b=>b.onclick=()=>set(b.dataset.tint));
  custom.oninput=()=>set(custom.value);custom.onchange=()=>set(custom.value);sync();
 }
 window.MaterialColor={valid,paint,controls,bind};
})();
