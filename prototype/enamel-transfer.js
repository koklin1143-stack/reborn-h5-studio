/* Offline enamel print study: derive a printing block from pixels or a small
   vocabulary of motifs, then compose it using the chosen reference. */
(()=>{
 'use strict';
 const palettes={

  blue:['#244e70','#6899ad','#a8c4cd','#b09b6d'],
  green:['#355f51','#7da18a','#bdc9a9','#ba9760'],
  red:['#9f4241','#cf7466','#8a9979','#c1a068']
 };
 const layouts={spray:'折枝',rosette:'团花',seal:'对称章纹',border:'边饰'};
 function recipe(d){
  const text=d.inputTab==='text'?d.prompt.trim():'',ref=d.pattern||'magpie';
  let layout=({magpie:'spray',peony:'rosette',happiness:'seal'})[ref]||'spray';
  if(d.direction==='modern')layout='seal';
  if(d.direction==='free')layout=layout==='rosette'?'spray':'rosette';
  if(/花边|边饰|边缘|沿口/.test(text))layout='border';
  else if(/团花|环绕|环形|一圈|放射/.test(text))layout='rosette';
  else if(/对称|菱格|几何/.test(text))layout='seal';
  else if(/枝|舒展/.test(text))layout='spray';
  const color=/蓝|青花/.test(text)?'blue':/绿|翠/.test(text)?'green':/红|朱砂/.test(text)?'red':ref;
  const subject=[['magpie',/喜鹊|小鸟|鸟|燕子/],['happiness',/双喜|喜字|婚庆/],['peony',/牡丹/],
   ['plum',/梅花|花瓣|花朵|花卉|花枝|小花|花纹/],['leaf',/竹|叶/],['wave',/水波|海浪|波浪|涟漪/],['star',/星/],['diamond',/方格|格纹|菱形|几何/]].find(entry=>entry[1].test(text))?.[0];
  if(d.inputTab==='text'&&!subject&&color===ref&&!/对称|环绕|环形|团花|边饰|花边|枝|疏|密|留白/.test(text))throw Error('本地转化还读不出这个主题。试试“蓝白牡丹团花”“红色双喜边饰”，或用手绘提供轮廓。');
  const grammar=window.PatternGrammar,refId=Object.hasOwn(grammar.references,d.sourceMotifId)?d.sourceMotifId:'motif:enamel-magpie';
  const study=[...new Set([...grammar.printPalette(refId),...grammar.references[refId].colors])];
  const palette=color==='blue'&&/蓝白|青花/.test(text)?['#204d71','#729bb4','#adbfca','#cedbdc']:palettes[color]||study;
  return {subject:subject||ref,palette,layout,reference:ref,
   repeats:/疏|简洁|留白/.test(text)?4:/密|繁复/.test(text)?8:6};
 }
 function canvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
 function rgb(hex){return [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));}
 async function decode(url){const im=new Image();im.src=url;await im.decode();return im;}
 // Tint the enclosed areas of a drawing. Gaps remain open; only an enclosed
 // region receives the second ink, so a stray stroke cannot fill the entire tile.
 function tintEnclosed(p,w,h,colour){
  const visited=new Uint8Array(w*h),queue=new Int32Array(w*h);let read=0,end=0;
  function visit(n){if(!visited[n]&&p[n*4+3]<32){visited[n]=1;queue[end++]=n;}}
  for(let x=0;x<w;x++){visit(x);visit((h-1)*w+x);}
  for(let y=0;y<h;y++){visit(y*w);visit(y*w+w-1);}
  while(read<end){
   const n=queue[read++],x=n%w;
   if(x)visit(n-1);if(x<w-1)visit(n+1);if(n>=w)visit(n-w);if(n+w<w*h)visit(n+w);
  }
  const tint=[...rgb(colour).map(n=>Math.round(n*.62+247*.38)),246];
  for(let n=0;n<visited.length;n++)if(!visited[n]&&p[n*4+3]<32){
   p.set(tint,n*4);
  }
 }
 async function blockFromImage(url,palette,sketch){
  if(!url)throw Error('找不到原始素材，请重新上传图片或画几笔。');
  const im=await decode(url),ratio=240/Math.max(im.width,im.height);
  const w=Math.max(1,Math.round(im.width*ratio)),h=Math.max(1,Math.round(im.height*ratio));
  const c=canvas(w,h),ctx=c.getContext('2d',{willReadFrequently:true});
  ctx.drawImage(im,0,0,w,h);
  const data=ctx.getImageData(0,0,w,h),p=data.data,bins=new Map();let borderSamples=0;
  function sample(i){
   borderSamples++;if(p[i+3]<32)return;
   const bin=(p[i]>>5)*64+(p[i+1]>>5)*8+(p[i+2]>>5);
   const v=bins.get(bin)||[0,0,0,0];v[0]++;for(let k=0;k<3;k++)v[k+1]+=p[i+k];bins.set(bin,v);
  }
  for(let x=0;x<w;x++){sample(x*4);sample(((h-1)*w+x)*4);}
  for(let y=1;y<h-1;y++){sample(y*w*4);sample((y*w+w-1)*4);}
  const bg=[...bins.values()].sort((a,b)=>b[0]-a[0])[0];
  const backdrop=!sketch&&bg&&bg[0]/borderSamples>.38?bg.slice(1).map(n=>n/bg[0]):null;
  const borderOpaque=[...bins.values()].reduce((sum,v)=>sum+v[0],0)/borderSamples;
  const histogram=new Uint32Array(256),tones=new Uint8Array(w*h);
  let x0=w,y0=h,x1=-1,y1=-1,total=0;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
   const n=y*w+x,i=n*4;
   if(backdrop){
    const distance=Math.hypot(p[i]-backdrop[0],p[i+1]-backdrop[1],p[i+2]-backdrop[2]);
    p[i+3]*=Math.min(1,Math.max(0,(distance-30)/32));
   }else if(!sketch&&borderOpaque>.8){
    // A complex background becomes a softly bounded sample instead of a rectangular photograph.
    const radius=Math.hypot((2*x+1-w)/w,(2*y+1-h)/h);
    p[i+3]*=Math.min(1,Math.max(0,(1-radius)*32));
   }
   if(p[i+3]<24){p[i+3]=0;continue;}
   tones[n]=Math.round(p[i]*.33+p[i+1]*.57+p[i+2]*.10);
   histogram[tones[n]]++;total++;x0=Math.min(x,x0);x1=Math.max(x,x1);y0=Math.min(y,y0);y1=Math.max(y,y1);
  }
  if(!total)throw Error('没有提取到可用轮廓。请保留可见线条，或选择主体与背景对比更清楚的图片。');
  function quantile(f){let sum=0;for(let i=0;i<256;i++){sum+=histogram[i];if(sum>=total*f)return i;}return 255;}
  const low=quantile(.35),high=quantile(.72),inks=palette.slice(0,3).map(rgb);
  for(let n=0;n<tones.length;n++){
   const i=n*4;if(!p[i+3])continue;
   const ink=inks[tones[n]<=low?0:tones[n]<=high?1:2];
   p[i]=ink[0];p[i+1]=ink[1];p[i+2]=ink[2];
  }
  if(sketch)tintEnclosed(p,w,h,palette[1]);
  ctx.putImageData(data,0,0);
  const cut=canvas(x1-x0+1,y1-y0+1);cut.getContext('2d').drawImage(c,x0,y0,cut.width,cut.height,0,0,cut.width,cut.height);
  return `<image x="-64" y="-64" width="128" height="128" preserveAspectRatio="xMidYMid meet" href="${cut.toDataURL('image/png')}"/>`;
 }
 const leaf=(x,y,angle,size,color)=>`<g transform="translate(${x} ${y}) rotate(${angle}) scale(${size})"><path d="M0 0Q-12 -16 0 -31Q14 -16 0 0" fill="${color}"/><path d="M0 -2L0 -23" stroke="#faf4dc" stroke-width=".9"/></g>`;
 function textBlock(spec){
  const [dark,mid,green,gold]=spec.palette;
  if(['magpie','peony','happiness'].includes(spec.subject)){
   const markup=window.Art.motif(spec.subject);
   return markup.replace(/#[\da-f]{6}/gi,hex=>{
    const [r,g,b]=rgb(hex);
    if(Math.min(r,g,b)>225)return '#fbf5e4';
    if(r>g&&g>b*1.15&&(r-g)<(r-b)*.58)return gold;
    if(g>r&&g>=b)return green;
    return Math.max(r,g,b)>174?mid:dark;
   });
  }
  if(spec.subject==='leaf')return [-42,-16,12,40].map((x,i)=>leaf(x,i*9-4,(-1)**i*38,1.35, i%2?green:dark)).join('');
  if(spec.subject==='wave')return [-25,0,25].map((y,i)=>`<path d="M-60 ${y}q18 -24 39 0t40 0t40 0" fill="none" stroke="${i===1?mid:dark}" stroke-width="7" stroke-linecap="round"/>`).join('');
  if(spec.subject==='star')return `<path d="M0 -63 15 -20 59 -20 24 8 37 52 0 26 -37 52 -24 8 -59 -20 -15 -20Z" fill="${dark}"/><circle r="10" fill="${gold}"/>`;
  if(spec.subject==='diamond')return `<path d="M0 -60 48 0 0 60 -48 0Z" fill="${dark}"/><path d="m0 -35 26 35 -26 35 -26 -35Z" fill="${mid}"/><circle r="8" fill="${gold}"/>`;
  return Array.from({length:5},(_,i)=>`<g transform="rotate(${72*i})"><path d="M0 2C-31 -10 -35 -47 -13 -52Q-4 -55 0 -48Q12 -60 24 -48C39 -29 16 -6 0 2Z" fill="${i%2?mid:dark}"/><path d="M0 -5Q-7 -18 -9 -31" fill="none" stroke="#f1d5b8" stroke-width="1.4"/></g>`).join('')+`<circle r="7" fill="${gold}"/>`;
 }
 function compose(block,spec){
  const [dark,mid,green,gold]=spec.palette;
  function ornament(x,y,angle){
   if(spec.reference==='magpie')return leaf(x,y,angle,.55,green)+leaf(x+4,y+2,angle+48,.34,mid);
   const mark=spec.reference==='peony'
    ?Array.from({length:5},(_,i)=>`<ellipse cy="-4" rx="2.6" ry="4" transform="rotate(${72*i})" fill="${mid}"/>`).join('')+`<circle r="2.2" fill="${gold}"/>`
    :`<path d="M0 -8 5 0 0 8 -5 0Z" fill="${gold}"/><path d="M-8 0h-4m20 0h4" stroke="${dark}" stroke-width="1.5"/>`;
   return `<g transform="translate(${x} ${y}) rotate(${angle})">${mark}</g>`;
  }
  const stamp=(x,y,scale,angle=0)=>`<g transform="translate(${x} ${y}) rotate(${angle}) scale(${scale})">${block}</g>`;
  let drawing='';
  if(spec.layout==='spray'){
   drawing=`<path d="M62 318Q83 266 158 246Q224 221 283 108M136 254Q95 239 82 204M221 191Q262 188 308 158" fill="none" stroke="${green}" stroke-width="3" stroke-linecap="round"/>`;
   for(const [x,y,a,k] of [[79,290,-42,.95],[106,267,48,1.3],[126,255,-65,1.1],[165,243,58,1.26],[218,191,-45,.9],[270,182,50,1],[278,119,-22,.9]])drawing+=leaf(x,y,a,k,green);
   drawing+=stamp(184,192,1.28,-8)+stamp(280,103,.44,14)+stamp(82,204,.3,-20)+ornament(104,238,-46)+ornament(299,166,24);
  }else if(spec.layout==='border'){
   drawing=`<path d="M26 158Q112 142 200 158T374 158M26 248Q112 232 200 248T374 248" stroke="${gold}" stroke-width="2" fill="none"/>`;
   for(let i=0;i<5;i++){drawing+=stamp(51+74*i,201,i%2?.34:.5,i%2?18:0);if(i<4)drawing+=ornament(87+74*i,201,0);}
  }else{
   const count=spec.layout==='seal'?4:spec.repeats;
   if(spec.layout==='seal')drawing=`<path d="M200 36 364 200 200 364 36 200Z" stroke="${gold}" stroke-width="2" fill="none"/>`;
   else drawing=`<circle cx="200" cy="200" r="154" stroke="${gold}" stroke-width="1.6" fill="none"/>`;
   for(let i=0;i<count;i++){
    const a=i*2*Math.PI/count,x=200+110*Math.sin(a),y=200-110*Math.cos(a);
    drawing+=stamp(x,y,spec.layout==='seal'?.37:.45,i*360/count);
    drawing+=ornament(200+132*Math.sin(a+.2),200-132*Math.cos(a+.2),i*360/count+70);
   }
   drawing+=stamp(200,200,.97);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="768" height="768">${drawing}</svg>`;
 }
 async function generate(d,url){
  const spec=recipe(d),personal=d.inputTab!=='text';
  const block=personal?await blockFromImage(url,spec.palette,d.inputTab==='sketch'):textBlock(spec);
  const svg=compose(block,spec),src=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
  try{
   const image=await decode(src),out=canvas(768,768);out.getContext('2d').drawImage(image,0,0);
   const blob=await new Promise(resolve=>out.toBlob(resolve,'image/png'));
   if(!blob)throw Error('纹样暂未导出，请重试。');
   return {blob,layout:layouts[spec.layout],label:(personal?(d.inputTab==='image'?'色块':'线描'):({plum:'梅花',magpie:'花鸟',peony:'牡丹',happiness:'双喜',leaf:'枝叶',wave:'水波',star:'星形',diamond:'菱格'})[spec.subject])+layouts[spec.layout]};
  }finally{URL.revokeObjectURL(src);}
 }
 window.EnamelTransfer={generate};
})();
