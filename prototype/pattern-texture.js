/* Shared, non-destructive 2D source sampling, previews and 3D texture output. */
(()=>{
 const A=window.Art,esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));let seq=0;
 const ink={blue:'#355b68',red:'#a85545',graphite:'#252925'},num=(v,d,a,b)=>Math.max(a,Math.min(b,Number.isFinite(Number(v))?Number(v):d)),hex=(v,d)=>/^#[0-9a-f]{6}$/i.test(v)?v:d;
 function shade(color,toward,amount){
  return '#'+color.slice(1).match(/../g).map(pair=>{
   const value=parseInt(pair,16);
   return Math.round(value+(toward-value)*amount).toString(16).padStart(2,'0');
  }).join('');
 }
 const hasParts=w=>!w.imageId&&Object.keys(w.motifInks||{}).some(key=>key.startsWith(w.pattern+'/'));
 function wholeInkPatch(d,patch){
  const motifInks=Object.fromEntries(Object.entries(d.motifInks||{}).filter(([key])=>!key.startsWith(d.pattern+'/')));
  return {...patch,motifInks,spotPaint:null};
 }
 function basePigment(w,h){
  if(ink[w.patternInk])return ink[w.patternInk];
  const rgb=c=>c.slice(1).match(/../g).map(v=>parseInt(v,16));
  const [r,g,b]=rgb(h),l=(.213*r+.715*g+.072*b)/255;
  const color=hex(w.inkColor,'#355b68');
  const stops=w.patternInk==='duotone'?[hex(w.inkDark,'#1f4557'),hex(w.inkLight,'#c7b085')]:
   w.patternInk==='custom'?[shade(color,0,.38),color,shade(color,255,.62)]:w.patternInk==='bw'?['#000000','#ffffff']:null;
  if(!stops)return h;
  const pos=l*(stops.length-1),i=Math.min(stops.length-2,Math.floor(pos)),a=rgb(stops[i]),z=rgb(stops[i+1]);
  return '#'+a.map((n,k)=>Math.round(n+(z[k]-n)*(pos-i)).toString(16).padStart(2,'0')).join('');
 }
 const baseArt=(w,href)=>w.imageId?(href?`<image href="${esc(href)}" x="-85" y="-85" width="170" height="170" preserveAspectRatio="xMidYMid meet"/>`:'<text text-anchor="middle" fill="#9b4437" font-size="12">图片待恢复</text>'):A.motif(w.pattern,hasParts(w)?w.motifInks:null,h=>basePigment(w,h));
 const raw=(w,href)=>{const art=baseArt(w,href);return w.spotPaint?window.SpotPaint.apply(w,art):art;};
 function spotPreview(w){return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-85 -85 170 170" aria-hidden="true">'+raw(w,window.LocalStore.image(w.imageId))+'</svg>';}
 function sampleBox(w){
  const width=num(w.sampleWidth,100,15,100)*1.7,height=num(w.sampleHeight,100,15,100)*1.7;
  const center=(phase,size)=>num(phase,0,-50,50)/100*(w.sampleMirror?340:170-size);
  return {width,height,x:center(w.sampleX,width)-width/2,y:center(w.sampleY,height)-height/2};
 }
 function sourcePlane(w,href){
  const art=raw(w,href);if(!w.sampleMirror)return art;
  const id='source-plane-'+(++seq);
  return `<defs><g id="${id}-art">${art}</g><pattern id="${id}" patternUnits="userSpaceOnUse" x="-85" y="-85" width="340" height="340" viewBox="-85 -85 340 340"><use href="#${id}-art"/><use href="#${id}-art" transform="translate(170 0) scale(-1 1)"/><use href="#${id}-art" transform="translate(0 170) scale(1 -1)"/><use href="#${id}-art" transform="translate(170 170) scale(-1 -1)"/></pattern></defs><rect x="-425" y="-425" width="850" height="850" fill="url(#${id})"/>`;
 }
 function sampledSource(w,href){const b=sampleBox(w);return `<g transform="rotate(${num(w.sampleRotation,0,-180,180)} ${b.x+b.width/2} ${b.y+b.height/2})">${sourcePlane(w,href)}</g>`;}
 function samplePreview(w){
  const b=sampleBox(w),cx=b.x+b.width/2,cy=b.y+b.height/2,span=w.sampleMirror?220:180;
  const offset=(center,size)=>w.sampleMirror?Math.sign(center)*Math.max(0,Math.abs(center)-(span-size)/2+5):0;
  const originX=offset(cx,b.width)-span/2,originY=offset(cy,b.height)-span/2;
  const outline=w.patternLayout==='hexflower'?[[0,0],[1,0],[.5,1]]:w.patternLayout==='kaleido'?[[0,0],[1,0],[1,1]]:[[0,0],[1,0],[1,1],[0,1]];
  const points=outline.map(([x,y])=>[b.x+(w.flipX?1-x:x)*b.width,b.y+(w.flipY?1-y:y)*b.height].join(' ')).join('L');
  const id='selection-'+(++seq),path='M'+points+'Z',rotate=`rotate(${-num(w.sampleRotation,0,-180,180)} ${cx} ${cy})`;
  return `<svg viewBox="${originX} ${originY} ${span} ${span}" role="img" aria-label="素材取样窗口"><defs><mask id="${id}"><rect x="-425" y="-425" width="850" height="850" fill="white"/><path d="${path}" transform="${rotate}"/></mask></defs>${sourcePlane(w,window.LocalStore.image(w.imageId))}<rect x="${originX}" y="${originY}" width="${span}" height="${span}" fill="#202321" opacity=".30" mask="url(#${id})"/><path d="${path}" transform="${rotate}" fill="none" stroke="white" stroke-width="3"/><path d="${path}" transform="${rotate}" fill="none" stroke="#355b68" stroke-width="1.5" stroke-dasharray="3 2"/></svg>`;
 }
 // Two periodic cells made from the current sample. Reuse the source only once in each SVG.
 function foldedCell(w, source, id, step){
  const fragment=id+'-sample', cell=id+'-cell';
  const flip='scale('+(w.flipX?-1:1)+' '+(w.flipY?-1:1)+')';
  const square='<g transform="translate(.5 .5) scale('+1/170+')"><g transform="'+flip+'">'+source+'</g></g>';
  let content, definitions, height;
  if(w.patternLayout==='chevron'){
   height=1;
   const strip=[-1,0,1].map(y=>'<use href="#'+fragment+'" y="'+y+'"/>').join('');
   const slope=num(w.foldSlope,50,10,90)/100;
   definitions='<g id="'+fragment+'">'+square+'</g>';
   content='<g transform="matrix(1 '+slope+' 0 1 0 0)">'+strip+'</g><g transform="matrix(-1 '+slope+' 0 1 2 0)">'+strip+'</g>';
  }else{
   const h=Math.sqrt(3)/2;
   height=2*h;
   definitions='<clipPath id="'+id+'-triangle"><path d="M0 0H1L.5 '+h+'Z"/></clipPath><g id="'+fragment+'" clip-path="url(#'+id+'-triangle)"><g transform="scale(1 '+h+')">'+square+'</g></g>';
   const sectors=Array.from({length:6},(_,i)=>'<use href="#'+fragment+'" transform="rotate('+i*60+')"/>').join('');
   definitions+='<g id="'+id+'-flower">'+sectors+'</g>';
   content=[[0,0],[0,height],[1.5,h],[3,0],[3,height]].map(([x,y])=>'<use href="#'+id+'-flower" x="'+x+'" y="'+y+'"/>').join('');
  }
  const width=w.patternLayout==='chevron'?2:3;
  const defs='<defs>'+definitions+'<pattern id="'+cell+'" patternUnits="userSpaceOnUse" width="'+step+'" height="'+(step*height/width)+'" viewBox="0 0 '+width+' '+height+'">'+content+'</pattern></defs>';
  const reach=(380+Math.abs(num(w.x,0,-60,60)*3)+Math.abs(num(w.y,0,-60,60)*3))/(num(w.scale,100,40,160)/100);
  return defs+'<rect x="'+(-reach)+'" y="'+(-reach)+'" width="'+2*reach+'" height="'+2*reach+'" fill="url(#'+cell+')"/>';
 }
 // A small displacement field is reusable at every export resolution. Grey is neutral.
 const maps=new Map();
 function flowField(kind){
  if(maps.has(kind))return maps.get(kind);
  const canvas=document.createElement('canvas');canvas.width=canvas.height=96;
  const ctx=canvas.getContext('2d'),field=ctx.createImageData(96,96);
  for(let row=0;row<96;row++)for(let col=0;col<96;col++){
   const x=(col+.5)/48-1,y=(row+.5)/48-1,r=Math.hypot(x,y);
   const twist=Math.max(0,1-r);
   const dx=kind==='swirl'?-y*twist*3:Math.sin(y*2*Math.PI)*.8;
   const dy=kind==='swirl'?x*twist*3:Math.cos(x*Math.PI)*.2;
   const i=(row*96+col)*4;
   field.data[i]=128+127*dx;field.data[i+1]=128+127*dy;field.data[i+3]=255;
  }
  ctx.putImageData(field,0,0);
  const uri=canvas.toDataURL();maps.set(kind,uri);return uri;
 }
 function flowFilter(w,id){
  if(!w.flowEnabled||!w.flowStrength)return '';
  const kind=w.flowKind==='swirl'?'swirl':'wave';
  return '<filter id="'+id+'-flow" filterUnits="userSpaceOnUse" x="0" y="0" width="512" height="512" color-interpolation-filters="sRGB"><feImage href="'+flowField(kind)+'" width="512" height="512" x="0" y="0" preserveAspectRatio="none" result="offset"/><feDisplacementMap in="SourceGraphic" in2="offset" scale="'+num(w.flowStrength,45,0,100)+'" xChannelSelector="R" yChannelSelector="G"/></filter>';
 }
 function continuousSVG(w,source,id){
  const geo=window.PatternLayouts.tileGeometry(w),base=id+'-fragment',unit=id+'-unit',pattern=id+'-repeat';
  if(['hexflower','chevron'].includes(w.patternLayout))return foldedCell(w,source,id,geo.step);
  const quadrant=`<g transform="translate(42.5 42.5) scale(.5)"><g transform="scale(${w.flipX?-1:1} ${w.flipY?-1:1})">${source}</g></g>`;
  const mirror=[1,-1].flatMap(mx=>[1,-1].map(my=>`<use href="#${base}" transform="scale(${mx} ${my})"/>`)).join('');
  const wedges=Array.from({length:4},(_,i)=>`<g transform="rotate(${i*90})"><use href="#${base}" clip-path="url(#${id}-wedge)"/><g transform="matrix(0 1 1 0 0 0)"><use href="#${base}" clip-path="url(#${id}-wedge)"/></g></g>`).join('');
  const layers=Math.round(num(w.echoIterations,3,1,6)),ratio=num(w.echoRatio,65,30,90)/100,rings=[...Array.from({length:layers},(_,i)=>85*Math.pow(ratio,i)),0];
  const echo=Array.from({length:layers},(_,i)=>`<g clip-path="url(#${id}-ring-${i})"><g transform="scale(${rings[i]/85})">${mirror}</g></g>`).join('');
  const reach=(380+Math.abs(num(w.x,0,-60,60)*3)+Math.abs(num(w.y,0,-60,60)*3))/(num(w.scale,100,40,160)/100);
  return `<defs><g id="${base}">${quadrant}</g><clipPath id="${id}-wedge"><path d="M0 0L85 0L85 85Z"/></clipPath>${rings.slice(0,-1).map((r,i)=>`<clipPath id="${id}-ring-${i}"><path clip-rule="evenodd" d="M-${r} -${r}H${r}V${r}H-${r}Z M-${rings[i+1]} -${rings[i+1]}V${rings[i+1]}H${rings[i+1]}V-${rings[i+1]}Z"/></clipPath>`).join('')}<g id="${unit}">${w.patternLayout==='kaleido'?wedges:w.patternLayout==='echo'?echo:mirror}</g><pattern id="${pattern}" patternUnits="userSpaceOnUse" width="${geo.step}" height="${geo.step}" viewBox="-85 -85 170 170" patternTransform="rotate(${geo.angle})"><use href="#${unit}"/></pattern></defs><rect data-symmetry="${w.patternLayout}" x="${-reach}" y="${-reach}" width="${reach*2}" height="${reach*2}" fill="url(#${pattern})"/>`;
 }
 const canTile=id=>['repeat','brick','mirror','weave','kaleido','echo'].includes(id);
 function svg(original,{imageHref=window.LocalStore.image(original.imageId),transparent=false,guides=false,tile=false,surface=false}={}){
 if(tile&&(original.flowEnabled||!canTile(original.patternLayout)))throw Error('该排布暂不支持重复单元，请导出完整画布。');
 const w=tile?{...original,repeatDensity:2,scale:100,x:0,y:0,rotation:0,cropWidth:100,cropHeight:100}:original;
 const id='texture-'+(++seq),cw=num(w.cropWidth,100,20,100)*5.12,ch=num(w.cropHeight,100,20,100)*5.12,scale=num(w.scale,100,40,160)/100,rotation=num(w.rotation,0,-180,180),x=num(w.x,0,-60,60)*3,y=num(w.y,0,-60,60)*3;
 const color=A.palette.find(p=>p.id===w.color)?.color||'#fffdf7',tint=ink[w.patternInk],b=sampleBox(w);
 const saturation=num(w.saturation,100,0,200)/100,brightness=num(w.brightness,100,30,180)/100,contrast=num(w.contrast,100,30,200)/100,hue=num(w.hue,0,-180,180);
 const adjustments=`<feColorMatrix type="hueRotate" values="${hue}"/><feColorMatrix type="saturate" values="${saturation}"/><feComponentTransfer>${['R','G','B'].map(c=>`<feFunc${c} type="linear" slope="${brightness*contrast}" intercept="${.5-.5*contrast}"/>`).join('')}</feComponentTransfer>`;
 const local=hasParts(w);let effects='';if(tint&&!local){const rgb=tint.slice(1).match(/../g).map(c=>parseInt(c,16)/255);effects+=`<feColorMatrix type="matrix" values="0 0 0 0 ${rgb[0]} 0 0 0 0 ${rgb[1]} 0 0 0 0 ${rgb[2]} 0 0 0 1 0"/>`;}
 if(!local&&w.patternInk==='bw')effects+='<feColorMatrix type="saturate" values="0"/>';
 if(!local&&(w.patternInk==='custom'||w.patternInk==='duotone')){
  const inkColor=hex(w.inkColor,'#355b68');
  // A custom ink keeps the source's light and dark detail, including photos.
  const tones=w.patternInk==='duotone'?[hex(w.inkDark,'#1f4557'),hex(w.inkLight,'#c7b085')]:[
   shade(inkColor,0,.38),inkColor,shade(inkColor,255,.62)
  ];
  const colors=tones.map(c=>c.slice(1).match(/../g).map(c=>parseInt(c,16)/255));effects+=`<feColorMatrix type="saturate" values="0"/><feComponentTransfer>${['R','G','B'].map((c,i)=>`<feFunc${c} type="table" tableValues="${colors.map(tone=>tone[i]).join(' ')}"/>`).join('')}</feComponentTransfer>`;}
 effects+=adjustments;
 const border=num(w.borderWidth,0,0,8),source=`<svg x="-85" y="-85" width="170" height="170" viewBox="${b.x} ${b.y} ${b.width} ${b.height}" preserveAspectRatio="none" overflow="hidden">${sampledSource(w,imageHref)}</svg>${border?`<rect x="-85" y="-85" width="170" height="170" fill="none" stroke="${hex(w.borderColor,'#355b68')}" stroke-width="${border}"/>`:''}`;
 const flow=flowFilter(w,id);
 const copies=window.PatternLayouts.isContinuous(w.patternLayout)?continuousSVG(w,source,id):window.PatternLayouts.placements(w).map(([px,py,angle,size,mx,my])=>`<g data-pattern-copy="true" transform="translate(${px} ${py}) rotate(${angle+(tile?num(original.rotation,0,-180,180):0)}) scale(${size*mx*(w.flipX?-1:1)*(tile?num(original.scale,100,40,160)/100:1)} ${size*my*(w.flipY?-1:1)*(tile?num(original.scale,100,40,160)/100:1)})"><use href="#${id}-source"/></g>`).join('');
 return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" preserveAspectRatio="${surface&&w.patternLayout!=='single'?'xMidYMid slice':'xMidYMid meet'}" viewBox="${tile?'6 6 500 500':'0 0 512 512'}" role="img" aria-label="可编辑二维纹样"><defs>${flow}${window.PatternLayouts.isContinuous(w.patternLayout)?'':`<g id="${id}-source">${source}</g>`}<clipPath id="${id}-crop"><rect x="${256-cw/2}" y="${256-ch/2}" width="${cw}" height="${ch}"/></clipPath><filter id="${id}-ink" color-interpolation-filters="sRGB">${effects}</filter></defs>${transparent?'':`<rect width="512" height="512" fill="${color}"/>`}<g clip-path="url(#${id}-crop)" opacity="${num(w.patternOpacity,100,0,100)/100}"><g ${flow?'filter="url(#'+id+'-flow)"':''}><g transform="translate(${256+x} ${256+y}) rotate(${rotation}) scale(${scale})" filter="url(#${id}-ink)">${copies}</g></g></g>${guides?`<rect x="${256-cw/2}" y="${256-ch/2}" width="${cw}" height="${ch}" fill="none" stroke="#355b68" stroke-opacity=".5" stroke-dasharray="5 5" stroke-width="1"/>`:''}</svg>`;
 }
 async function documentSVG(d,options={}){let imageHref='';if(d.imageId){const blob=await window.LocalStore.getAsset(d.imageId);if(!blob)throw Error('源图片无法读取，请恢复素材后重试。');imageHref=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(Error('源图片读取失败'));r.readAsDataURL(blob);});}return svg(d,{...options,imageHref});}
 async function exportTexture(d,{size=1024,transparent=true,tile=false,format='png'}={}){if(![512,1024,2048].includes(size))throw Error('贴图尺寸支持512、1024或2048。');const xml=await documentSVG(d,{transparent,tile});if(format==='svg')return{blob:new Blob([xml.replace('width="512" height="512"',`width="${size}" height="${size}"`)],{type:'image/svg+xml'}),width:size,height:size};
 const url=URL.createObjectURL(new Blob([xml],{type:'image/svg+xml'}));try{const image=new Image();image.src=url;await image.decode();const canvas=document.createElement('canvas');canvas.width=canvas.height=size;canvas.getContext('2d').drawImage(image,0,0,size,size);const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('贴图导出失败');return {version:'reborn-pattern-v1',blob,width:size,height:size,mimeType:'image/png',colorSpace:'srgb',alpha:transparent,origin:'top-left',uv:{u:'right',v:'down'},sourceObjectId:d.sourceObjectId,sourceMotifId:d.sourceMotifId,...(d.provenance?.parts?.length?{sourceMotifIds:d.provenance.parts.map(m=>m.id)}:{}),imageAssetId:d.imageId||null,layout:d.patternLayout||'single',crop:{width:d.cropWidth??100,height:d.cropHeight??100}};}finally{URL.revokeObjectURL(url);}}
 window.PatternTexture={svg,spotPreview,export:exportTexture,documentSVG,samplePreview,sampleBox,basePigment,wholeInkPatch,canTile};
 const oldObject=A.object;A.object=(w,stage=false)=>w?.editorFormat==='pattern-v1'&&!stage?svg(w):oldObject(w,stage);
})();
