(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.PatternLayouts=api;})(globalThis,()=>{
 const clamp=(v,d,a,b)=>Number.isFinite(Number(v))?Math.max(a,Math.min(b,Number(v))):d;
 function placements(w){
  const density=Math.round(clamp(w.repeatDensity,4,2,8)),gap=clamp(w.repeatGap,12,0,60),step=500/density,size=step/170*(1-gap/100);
  if(['repeat','brick','mirror','drop','quarter','honeycomb'].includes(w.patternLayout)){
   const radius=Math.ceil(density/2)+2,out=[];
   for(let row=-radius;row<=radius;row++)for(let col=-radius;col<=radius;col++)out.push([(col+(['brick','honeycomb'].includes(w.patternLayout)&&Math.abs(row)%2?.5:0))*step,(row+(w.patternLayout==='drop'&&Math.abs(col)%2?.5:0))*step*(w.patternLayout==='honeycomb'?.8660254:1),w.patternLayout==='quarter'?((row-col)%4)*90:0,size,w.patternLayout==='mirror'&&Math.abs(col)%2?-1:1,w.patternLayout==='mirror'&&Math.abs(row)%2?-1:1]);
   return out;
  }
  if(w.patternLayout==='wrap')return Array.from({length:density*2},(_,i)=>{const a=i*Math.PI/density;return[Math.cos(a)*170,Math.sin(a)*170,i*180/density+90,size,1,1];});
  return [[0,0,0,2.2,1,1]];
 }
 // Symmetry is applied to a sampled fragment, rather than stamping whole motifs.
 const continuous=['weave','kaleido','diamond','echo','hexflower','chevron'];
 const isContinuous=id=>continuous.includes(id);
 function tileGeometry(w){
  const density=clamp(w.repeatDensity,4,2,8),step=500/density;
  return {step,angle:w.patternLayout==='diamond'?45:0,
   sectors:w.patternLayout==='kaleido'?8:4,
   echoes:w.patternLayout==='echo'?3:1};
 }
 return {placements,continuous,isContinuous,tileGeometry};
});
