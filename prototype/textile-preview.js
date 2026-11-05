/* Static fabric preview for devices without WebGL and draft thumbnails. */
(()=>{
 let serial=0;
 function svg(d,provided){
  const v=window.Vessels,c=v.get(d.canvas),p=d.vesselPlacement||v.placement(d.canvas),r=v.region(d.canvas,p.zone),id='cloth-'+(++serial),color=v.glazeHex(d.cupMaterial?.color);
  const isBag=c.family==='bags',scale=Math.min(240/c.size[0],(isBag?174:230)/c.size[1]),w=c.size[0]*scale,h=c.size[1]*scale,x=(340-w)/2,y=(280-h)/2+(isBag?18:0),round=d.canvas==='duvet'?8:d.canvas==='backpack'?30:18;
  const rect=(xx,yy,ww,hh,fill,rx=round)=>`<rect x="${xx}" y="${yy}" width="${ww}" height="${hh}" rx="${rx}" fill="${fill}"/>`;
  const back=r.face==='back',pocket=d.canvas==='backpack'&&!back,faces=v.facePlacements(d.canvas,p),art=provided||window.PatternTexture.svg(d,{transparent:true});
  const path=d.canvas==='backpack'?`M${x} ${y+h*.27}Q${x} ${y} ${x+w*.5} ${y}T${x+w} ${y+h*.27}V${y+h*.88}Q${x+w} ${y+h} ${x+w*.86} ${y+h}H${x+w*.14}Q${x} ${y+h} ${x} ${y+h*.88}Z`:d.canvas==='tote'?`M${x} ${y}Q${x+w*.5} ${y+8} ${x+w} ${y}L${x+w*.92} ${y+h}H${x+w*.08}Z`:['cushion','pillow'].includes(d.canvas)?`M${x} ${y}Q${x+w*.5} ${y+h*.12} ${x+w} ${y}Q${x+w*.90} ${y+h*.5} ${x+w} ${y+h}Q${x+w*.5} ${y+h*.9} ${x} ${y+h}Q${x+w*.10} ${y+h*.5} ${x} ${y}Z`:`M${x+7} ${y}Q${x+w*.5} ${y-5} ${x+w-5} ${y+6}L${x+w} ${y+h}Q${x+w*.5} ${y+h-8} ${x} ${y+h-3}Z`;
  const silhouette=fill=>`<path d="${path}" fill="${fill}"/>`;
  const main={x,y,w,h},small={x:x+w*.11,y:y+h*.48,w:w*.78,h:h*.38};
  function print(area,placed,key){
   if(!placed)return '';const region=v.region(d.canvas,placed.zone),full=v.isFill(region),min=Math.min(area.w,area.h),tile=full?min/v.fillCount(region,placed.scale):min*.68*placed.scale/100;
   const cx=area.x+area.w*(.5+placed.x/120),cy=area.y+area.h*(.5+placed.y/120),code=id+'-'+key;
   const coverW=full?area.w*v.coveragePercent(placed.coverWidth)/100:area.w,coverH=full?area.h*v.coveragePercent(placed.coverHeight)/100:area.h;
   const image=full?rect(area.x-area.w,area.y-area.h,area.w*3,area.h*3,`url(#${code}-pattern)`,0):`<svg x="${cx-tile/2}" y="${cy-tile/2}" width="${tile}" height="${tile}" viewBox="0 0 512 512" overflow="hidden">${art}</svg>`;
   const border=region.mode==='fabricBorder'?`<path clip-rule="evenodd" d="M${x} ${y}h${w}v${h}h${-w}Z M${x+w*.13} ${y+h*.13}v${h*.74}h${w*.74}v${-h*.74}Z"/>`:(key==='pocket'?rect(area.x,area.y,area.w,area.h,'black',12):silhouette('black'));
   return `<defs><clipPath id="${code}-clip">${border}</clipPath><clipPath id="${code}-range">${rect(cx-coverW/2,cy-coverH/2,coverW,coverH,'black',0)}</clipPath><pattern id="${code}-pattern" patternUnits="userSpaceOnUse" x="${cx-tile/2}" y="${cy-tile/2}" width="${tile}" height="${tile}" viewBox="0 0 512 512">${art}</pattern></defs><g clip-path="url(#${code}-clip)"><g clip-path="url(#${code}-range)"><g transform="rotate(${placed.rotation} ${cx} ${cy})">${image}</g></g></g>`;
  }
  const handles=d.canvas==='tote'?`<path d="M${x+w*.22} ${y+15}v-35q0-30 ${w*.28}-30t${w*.28} 30v35" fill="none" stroke="${color}" stroke-width="10"/>`:d.canvas==='backpack'?`<path d="M145 ${y+5}v-15q25-20 50 0v15" fill="none" stroke="${color}" stroke-width="7"/>`:'';
  const straps=d.canvas==='backpack'&&back?`<path d="M${x+30} ${y+20}q-23 60 0 ${h-40}M${x+w-30} ${y+20}q23 60 0 ${h-40}" stroke="#a8a297" stroke-width="15" fill="none"/>`:'';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" role="img" aria-label="${c.name}静态示意"><defs><linearGradient id="${id}-shade" x2="1" y2="1"><stop stop-color="white" stop-opacity=".18"/><stop offset=".5" stop-color="white" stop-opacity="0"/><stop offset="1" stop-color="black" stop-opacity=".16"/></linearGradient><clipPath id="${id}-body">${silhouette('black')}</clipPath></defs><ellipse cx="170" cy="${y+h+6}" rx="${w*.48}" ry="9" fill="#444" opacity=".08"/>${handles}${silhouette(color)}<g clip-path="url(#${id}-body)">${print(main,faces[back?'back':'front'],'body')}${pocket?rect(small.x,small.y,small.w,small.h,color,12)+print(small,faces.pocket,'pocket'):''}</g>${silhouette(`url(#${id}-shade)`)}<path d="${path}" fill="none" stroke="#817e75" stroke-opacity=".45" stroke-dasharray="2 3"/>${d.canvas==='duvet'&&!back?`<path d="M${x+7} ${y}L${x} ${y+25}Q${x+w*.5} ${y+18} ${x+w} ${y+30}L${x+w-5} ${y+6}Z" fill="${color}" stroke="#aaa495" stroke-width=".5"/>`:''}${d.canvas==='tote'?`<path d="M${x} ${y}Q${x+w*.5} ${y+8} ${x+w} ${y}Q${x+w*.5} ${y-7} ${x} ${y}" fill="#827d70" opacity=".5"/>`:''}${pocket?`<path d="M${x+w*.15} ${y+h*.5}h${w*.7}" stroke="#777" fill="none"/>`:''}${straps}</svg>`;
 }
 window.TextilePreview={svg};
})();
