/* Convert the reserved paper in our limited-ink studies to glaze coverage.
   All channels here are straight (unpremultiplied) sRGB bytes. */
(function(root,factory){
 if(typeof module==='object'&&module.exports)module.exports=factory();
 else root.EnamelPaper=factory();
})(globalThis,()=>{
 const version=1;
 function separate(pixels,width,height,darkest){
  const samples=[[],[],[]];
  function sample(x,y){
   const i=(y*width+x)*4,r=pixels[i],g=pixels[i+1],b=pixels[i+2];
   if(pixels[i+3]<235||Math.min(r,g,b)<210||Math.max(r,g,b)-Math.min(r,g,b)>22)return;
   [r,g,b].forEach((v,c)=>samples[c].push(v));
  }
  for(let t=0;t<48;t++){
   const x=Math.round(t*(width-1)/47),y=Math.round(t*(height-1)/47);
   sample(x,0);sample(x,height-1);sample(0,y);sample(width-1,y);
  }
  const paper=samples.map(values=>values.length>=40?values.sort((a,b)=>a-b)[values.length>>1]:255);
  const inkDepth=Math.min(...paper)-darkest;
  let changed=false,edgeInk=0,edgeCount=0;
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
   const i=(y*width+x)*4,a=pixels[i+3];
   if(!x||!y||x===width-1||y===height-1)edgeCount++;
   if(!a)continue;
   const r=pixels[i],g=pixels[i+1],b=pixels[i+2];
   const delta=Math.max(0,paper[0]-r,paper[1]-g,paper[2]-b);
   // Near-neutral, light paper may be slightly grey or warm. Ink washes have
   // chroma, even where their coverage fades; retain those with fractional alpha.
   const neutral=Math.max(r,g,b)-Math.min(r,g,b);
   const coverage=delta<=9||(neutral<=12&&Math.min(r,g,b)>=207)?0:Math.min(1,delta/inkDepth);
   const alpha=Math.round(a*coverage);
   if(!x||!y||x===width-1||y===height-1){if(alpha>48)edgeInk++;}
   if(alpha===a&&coverage===1)continue;
   changed=true;
   if(alpha<3){pixels.fill(0,i,i+4);continue;}
   // Undo the paper mixed into soft pixels. Simply lowering alpha leaves a
   // pale halo on graphite glaze. Do not unpremultiply existing alpha again.
   for(let c=0;c<3;c++)pixels[i+c]=Math.max(0,Math.min(255,Math.round(paper[c]+(pixels[i+c]-paper[c])/coverage)));
   pixels[i+3]=alpha;
  }
  return {changed,coveredEdge:edgeInk/edgeCount};
 }
 return {version,separate};
});
