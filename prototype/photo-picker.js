/* The photograph, interactive hit testing and saved regions share one logical coordinate system. */
(()=>{
 'use strict';
 const engine=window.PhotoExtraction,clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 const canvas=(w,h)=>Object.assign(document.createElement('canvas'),{width:w,height:h});
 const scans=new Map();
 function fit(r,p){
  const x=clamp(Math.floor(r[0]),0,p.width-1),y=clamp(Math.floor(r[1]),0,p.height-1);
  return [x,y,clamp(Math.ceil(r[0]+r[2])-x,1,p.width-x),clamp(Math.ceil(r[1]+r[3])-y,1,p.height-y)];
 }
 function hits(boxes,x,y,radius){
  const dist=b=>Math.hypot(Math.max(b.x-x,0,x-b.x-b.w),Math.max(b.y-y,0,y-b.y-b.h));
  return boxes.filter(b=>dist(b)<=radius).sort((a,b)=>dist(a)-dist(b)||a.w*a.h-b.w*b.h)[0];
 }
 async function scan(p,image,choices,load){
  const scale=Math.min(1,700/Math.max(p.width,p.height)),c=canvas(Math.round(p.width*scale),Math.round(p.height*scale));
  const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(image,0,0,c.width,c.height);
  const pixels=ctx.getImageData(0,0,c.width,c.height);
  const inks=new Set();
  for(const m of choices.filter(m=>!m.custom&&m.treatment==='ink')){
   const small=canvas(24,24),sc=small.getContext('2d');sc.drawImage(await load(m.fileKey),0,0,24,24);
   const [ink]=engine.palette(sc.getImageData(0,0,24,24));if(ink)inks.add(ink);
  }
  const boxes=[];
  for(const ink of inks){
   const found=engine.regions(pixels,ink,Math.max(2,Math.round(Math.max(c.width,c.height)*.005)),p.scanEllipse);
   for(const b of found){
    boxes.push(b);
   }
  }
  const convert=b=>({...b,x:b.x*p.width/c.width,y:b.y*p.height/c.height,w:b.w*p.width/c.width,h:b.h*p.height/c.height});
  const complete=[];
  for(const b of boxes.sort((a,b)=>b.count-a.count)){
   const covered=complete.some(o=>{
    const iw=Math.max(0,Math.min(o.x+o.w,b.x+b.w)-Math.max(o.x,b.x)),ih=Math.max(0,Math.min(o.y+o.h,b.y+b.h)-Math.max(o.y,b.y));
    return iw*ih>.62*Math.min(o.w*o.h,b.w*b.h);
   });
   if(!covered)complete.push(b);
  }
  return {boxes:complete.sort((a,b)=>a.y-b.y||a.x-b.x).map(convert),local(x,y,ink){
   const cx=Math.round(x*c.width/p.width),cy=Math.round(y*c.height/p.height),r=70;
   const ox=Math.max(0,cx-r),oy=Math.max(0,cy-r),rw=Math.min(cx+r+1,c.width)-ox,rh=Math.min(cy+r+1,c.height)-oy;
   const found=engine.regions(ctx.getImageData(ox,oy,rw,rh),ink,3);
   const b=hits(found,cx-ox,cy-oy,7);
   if(b)return convert({...b,x:b.x+ox,y:b.y+oy});
  }};
 }
 function polygon(trace,p){
  const line=[];for(const pt of trace){const last=line.at(-1);if(!last||Math.hypot(pt[0]-last[0],pt[1]-last[1])>=1.5)line.push(pt);}
  if(line.length<3)return null;
  const xs=line.map(v=>v[0]),ys=line.map(v=>v[1]),x=Math.min(...xs),y=Math.min(...ys);
  const area=Math.abs(line.reduce((sum,v,i)=>{const next=line[(i+1)%line.length];return sum+v[0]*next[1]-next[0]*v[1];},0))/2;
  if(area<24)return null;
  const region=fit([x,y,Math.max(...xs)-x+1,Math.max(...ys)-y+1],p);
  const points=line.filter((v,i)=>i%Math.ceil(line.length/220)===0||i===line.length-1).map(([u,v])=>[+( (u-region[0])/region[2]).toFixed(4),+( (v-region[1])/region[3]).toFixed(4)]);
  return {region,points};
 }
 async function open({p,choices,load,api,tool:initial,focus,count,canAdd,add}){
  const label={smart:'点选识别',circle:'圆形',rect:'矩形',ellipse:'椭圆',lasso:'套索'};
  api.open('从原照取样',`<div class="crop-maker photo-picker" data-step="select">
   <div class="picker-steps" role="group" aria-label="取样步骤"><button type="button" data-picker-step="select" aria-pressed="true"><span>1</span> 选范围</button><button type="button" data-picker-step="adjust" aria-pressed="false" disabled><span>2</span> 调效果</button></div>
   <section class="picker-selection" aria-label="选择取样范围">
   <div class="picker-tools" role="group" aria-label="选区工具">${Object.entries(label).map(([k,v])=>`<button type="button" data-shape="${k}" aria-pressed="${k===initial}">${v}</button>`).join('')}</div>
   <div class="picker-photo"><canvas class="crop-source" tabindex="0" aria-label="原照选区，方向键移动，Shift 调整尺寸。套索可按空格加点、回车闭合"></canvas></div>
   <div class="picker-caption"><span class="pick-help" role="status"></span><button type="button" class="source-zoom">放大选区</button></div>
   <div class="picker-found" hidden><span aria-live="polite"></span><button type="button" data-step="-1" aria-label="上一处候选">上一处</button><button type="button" data-step="1" aria-label="下一处候选">下一处</button></div>
   <button type="button" class="close-lasso" hidden>闭合套索</button>
   </section>
   <section class="picker-adjustment" aria-label="调整取样效果" hidden>
   <section class="proof-panel"><div class="proof-heading"><strong>局部预览</strong><div role="group" aria-label="预览倍率">${[1,2,4].map(z=>`<button type="button" data-zoom="${z}" aria-pressed="${z===1}">${z}×</button>`).join('')}</div></div>
    <div class="crop-result"><canvas tabindex="0" aria-label="放大的局部预览"></canvas></div>
    <div class="proof-tabs" role="group" aria-label="对照预览"><button type="button" data-proof="result" aria-pressed="true">提取结果</button><button type="button" data-proof="source" aria-pressed="false">原照取色</button></div>
    <small class="proof-hint"></small></section>
   <div class="picker-adjust-tools">
    <div class="picker-settings-tabs" role="group" aria-label="素材设置"><button type="button" data-picker-setting="extract" aria-pressed="true">提取</button><button type="button" data-picker-setting="tint" aria-pressed="false">改色</button><button type="button" data-picker-setting="name" aria-pressed="false">名称</button></div>
    <div class="picker-setting-panel" data-setting-panel="extract">
   <div class="crop-settings"><label>提取方式<select class="input" name="extract"><option value="photo">保留原色</option><option value="ink">提取单色</option><option value="line">按明暗提线</option></select></label>
   <label class="crop-ink" hidden><span>取样色</span><input type="color" value="#17317b"></label></div>
   <div class="ink-options" hidden><div class="picked-palette" role="group" aria-label="从选区换色"></div><label><span>取色范围</span> <input type="range" name="ink-range" min="0" max="100" value="45"><output>45</output></label></div>
    </div>
    <div class="picker-setting-panel crop-tint" data-setting-panel="tint" hidden><div class="picker-setting-label">素材颜色 <span>原色</span></div>${window.MaterialColor.controls()}</div>
    <div class="picker-setting-panel" data-setting-panel="name" hidden><label class="crop-name">素材名称<input class="input" name="crop-name" maxlength="16" value="自取局部 ${count+1}"></label></div>
   </div></section>
   <footer class="picker-footer"><div class="picker-mini"><canvas width="80" height="80" aria-label="当前取样预览"></canvas><span>取样预览</span></div><button type="button" class="btn primary picker-next" disabled>下一步 · 调效果</button><button type="button" class="btn secondary picker-back" hidden>改范围</button><button class="btn primary full crop-apply" disabled hidden>${canAdd?'加入这组素材':'存入素材库'}</button></footer></div>`);
  const root=document.querySelector('.photo-picker'),get=q=>root.querySelector(q),all=q=>[...root.querySelectorAll(q)];
  const im=await load(p.studyKey||p.key);if(!root.isConnected||!root.closest('dialog')?.open)return;
  const board=get('.crop-source'),proof=get('.crop-result canvas'),mode=get('[name=extract]'),color=get('.crop-ink input'),range=get('[name=ink-range]'),help=get('.pick-help'),apply=get('.crop-apply');
  board.width=Math.round(820*p.width/Math.max(p.width,p.height));board.height=Math.round(820*p.height/Math.max(p.width,p.height));
  const full=[0,0,p.width,p.height],sx=im.naturalWidth/p.width,sy=im.naturalHeight/p.height;
  let region=focus?[...focus.region]:fit([p.width*.3,p.height*.3,p.width*.4,p.height*.4],p),view=full;
  let tool=initial,shape=focus?.recipe?.shape||focus?.shape||(initial==='circle'?'circle':'rect'),points=focus?.recipe?.points||[],trace=[],drag=null,discovered=null,candidate=-1,ready=initial!=='smart'||Boolean(focus);
  let zoom=1,proofMode='result',centre=[.5,.5],frame=0,raw=null,cut=null,lastROI='',lastCut='',hasInk=false,proofMap=null,notice='',saving=false,keyboardPen=null;
  let tint=initial==='inspect'?focus?.tint||null:null;
  const tintLabel=get('.crop-tint .picker-setting-label span');tintLabel.textContent=tint?'已改色':'原色';
  function showStep(step){
   if(step==='adjust'&&!ready)return;
   root.dataset.step=step;get('.picker-selection').hidden=step!=='select';get('.picker-adjustment').hidden=step!=='adjust';
   get('.picker-mini').hidden=get('.picker-next').hidden=step!=='select';get('.picker-back').hidden=apply.hidden=step!=='adjust';
   all('[data-picker-step]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.pickerStep===step)));
   refresh();
  }
  all('[data-picker-step]').forEach(el=>el.onclick=()=>showStep(el.dataset.pickerStep));
  get('.picker-next').onclick=()=>showStep('adjust');get('.picker-back').onclick=()=>showStep('select');
  all('[data-picker-setting]').forEach(el=>el.onclick=()=>{
   all('[data-picker-setting]').forEach(b=>b.setAttribute('aria-pressed',String(b===el)));
   all('[data-setting-panel]').forEach(panel=>panel.hidden=panel.dataset.settingPanel!==el.dataset.pickerSetting);
   refresh();
  });
  window.MaterialColor.bind(get('.sample-colors'),tint,value=>{tint=value;tintLabel.textContent=tint?'已改色':'原色';proofMode='result';refresh();});
  if(focus?.ink){mode.value=focus.recipe?.method==='line'?'line':'ink';color.value=focus.ink;range.value=focus.recipe?.range??45;}
  const recipe=()=>({version:2,shape,...(shape==='lasso'?{points}:{}),...(mode.value==='line'?{method:'line'}:{}),...(mode.value!=='photo'?{range:Number(range.value)}:{})});
  function magnify(){
   const [x,y,w,h]=region,scale=Math.min(4,p.width/(w*1.65),p.height/(h*1.65));
   const vw=p.width/Math.max(1.15,scale),vh=p.height/Math.max(1.15,scale);
   view=[clamp(x+w/2-vw/2,0,p.width-vw),clamp(y+h/2-vh/2,0,p.height-vh),vw,vh];
  }
  function squareRegion(){
   const [x,y,w,h]=region,side=Math.min(w,h);
   region=[Math.round(x+(w-side)/2),Math.round(y+(h-side)/2),side,side];
  }
  if(shape==='circle')squareRegion();
  if(initial==='inspect'){tool=shape;magnify();}
  function renderBoard(){
   const ctx=board.getContext('2d');ctx.save();ctx.scale(board.width/view[2],board.height/view[3]);ctx.translate(-view[0],-view[1]);ctx.drawImage(im,0,0,p.width,p.height);
   const lineWidth=view[2]/board.width;
   if(tool==='smart'&&discovered){
    for(const b of discovered.boxes){ctx.strokeStyle='rgba(255,255,255,.9)';ctx.lineWidth=3*lineWidth;ctx.strokeRect(b.x-2,b.y-2,b.w+4,b.h+4);
     ctx.strokeStyle='#426479';ctx.lineWidth=1.3*lineWidth;ctx.strokeRect(b.x-2,b.y-2,b.w+4,b.h+4);}
   }
   if(ready){
    const sel=engine.path(region,recipe()),cover=new Path2D();cover.rect(...full);cover.addPath(sel);
    ctx.fillStyle=tool==='smart'?'#0002':'#0005';ctx.fill(cover,'evenodd');
    ctx.strokeStyle='white';ctx.lineWidth=5*lineWidth;ctx.stroke(sel);ctx.strokeStyle='#173c51';ctx.lineWidth=2*lineWidth;ctx.stroke(sel);
   }
   if(trace.length){ctx.beginPath();trace.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.strokeStyle='white';ctx.lineWidth=5*lineWidth;ctx.stroke();ctx.strokeStyle='#163d51';ctx.lineWidth=2*lineWidth;ctx.stroke();}
   if(keyboardPen){ctx.beginPath();ctx.arc(...keyboardPen,5*lineWidth,0,Math.PI*2);ctx.strokeStyle='#fff';ctx.lineWidth=2*lineWidth;ctx.stroke();}
   ctx.restore();
  }
  function samplePixel(x,y){
   const c=canvas(3,3),ctx=c.getContext('2d');ctx.drawImage(im,clamp(Math.round(x*sx)-1,0,im.naturalWidth-3),clamp(Math.round(y*sy)-1,0,im.naturalHeight-3),3,3,0,0,3,3);
   const data=ctx.getImageData(0,0,3,3).data;
   return '#'+[0,1,2].map(ch=>Array.from({length:9},(_,i)=>data[4*i+ch]).sort((a,b)=>a-b)[4].toString(16).padStart(2,'0')).join('');
  }
  function proofDraw(){
   const mini=get('.picker-mini canvas'),mc=mini.getContext('2d');mc.clearRect(0,0,80,80);
   if(ready&&cut){const source=window.MaterialColor.paint(cut,{tint,treatment:mode.value==='photo'?'colour':'ink'}),scale=Math.min(80/source.width,80/source.height);mc.drawImage(source,(80-source.width*scale)/2,(80-source.height*scale)/2,source.width*scale,source.height*scale);}
   if(root.dataset.step!=='adjust')return;
   const b=proof.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2),pw=Math.max(1,Math.round(b.width*d)),ph=Math.max(1,Math.round(b.height*d));
   if(proof.width!==pw)proof.width=pw;if(proof.height!==ph)proof.height=ph;
   const ctx=proof.getContext('2d'),src=proofMode==='source'?raw:cut&&window.MaterialColor.paint(cut,{tint,treatment:mode.value==='photo'?'colour':'ink'});
   ctx.clearRect(0,0,pw,ph);
   if(!ready||!src){proofMap=null;return;}
   const factor=Math.min(proof.width/src.width,proof.height/src.height)*zoom,w=src.width*factor,h=src.height*factor;
   const x=w<=proof.width?(proof.width-w)/2:clamp(proof.width/2-centre[0]*w,proof.width-w,0);
   const y=h<=proof.height?(proof.height-h)/2:clamp(proof.height/2-centre[1]*h,proof.height-h,0);
   proofMap={x,y,w,h};ctx.drawImage(src,x,y,w,h);
  }
  function update(){
   if(!root.isConnected||!root.closest('dialog')?.open)return;
   const ink=mode.value!=='photo',desc=recipe(),roi=JSON.stringify([region,shape,points]);
   if(ready&&roi!==lastROI){
    raw=engine.render(im,p,region,null,desc);lastROI=roi;lastCut='';
    const c=canvas(92,92),ctx=c.getContext('2d');ctx.drawImage(raw,0,0,92,92);
    get('.picked-palette').innerHTML=engine.palette(ctx.getImageData(0,0,92,92)).map(col=>`<button type="button" data-swatch="${col}" aria-label="使用取样色 ${col}" style="--swatch:${col}"></button>`).join('');
   }
   const key=ink?[mode.value,color.value,range.value].join('-'):'photo';
   if(ready&&lastCut!==key){
    cut=ink?engine.render(im,p,region,color.value,desc):raw;lastCut=key;
    hasInk=!ink||cut.getContext('2d').getImageData(0,0,cut.width,cut.height).data.some((v,i)=>i%4===3&&v>=110);
   }
   help.textContent=notice||(tool==='smart'?(discovered?(discovered.boxes.length?'点一下标出的字纹，也可尝试其他位置。':'轻点要取的笔画或色块，自动寻找边界。'):'正在查找相近的印色…'):tool==='lasso'?'沿轮廓拖一圈，或逐点描边后闭合。':'拖动定范围，轻点移动选区。');
   all('[data-shape]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.shape===tool)));
   get('.picker-found').hidden=tool!=='smart'||!discovered?.boxes.length;
   get('.picker-found span').textContent=candidate>=0?'候选 '+(candidate+1)+' / '+discovered.boxes.length:'可点选 '+(discovered?.boxes.length||0)+' 处';
   get('.source-zoom').textContent=view===full?'放大选区':'看全图';get('.source-zoom').disabled=!ready&&view===full;
   get('.close-lasso').hidden=tool!=='lasso'||!trace.length;get('.close-lasso').disabled=trace.length<3;
   get('.crop-ink').hidden=get('.ink-options').hidden=!ink;get('output').textContent=range.value;    get('.crop-ink span').textContent=mode.value==='line'?'线纹颜色':'取样色';get('.ink-options label span').textContent=mode.value==='line'?'线纹强度':'取色范围';
   all('[data-swatch]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.swatch===color.value)));
   all('[data-zoom]').forEach(el=>el.setAttribute('aria-pressed',String(+el.dataset.zoom===zoom)));
   all('[data-proof]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.proof===proofMode)));
   const lightInk=parseInt(color.value.slice(1,3),16)*.213+parseInt(color.value.slice(3,5),16)*.715+parseInt(color.value.slice(5),16)*.072;
   get('.crop-result').classList.toggle('proof-dark',ink&&proofMode==='result'&&lightInk>165);
   get('.crop-result').classList.toggle('proof-empty',!ready);
   get('.proof-hint').textContent=!ready?'先在原照上选一处字纹。':proofMode==='source'?'轻点局部吸取颜色，随即查看单色结果。':!hasInk?'当前颜色未取到笔画，可换色或放宽范围。':zoom>1?'拖动预览查看放大后的边缘。':'可放大查看笔画与透明边缘。';
   apply.disabled=saving||!ready||!hasInk;get('.picker-next').disabled=get('[data-picker-step=adjust]').disabled=saving||!ready;renderBoard();proofDraw();
  }
  function refresh(){if(!frame)frame=requestAnimationFrame(()=>{frame=0;update();});}
  async function find(){
   if(!scans.has(p.key)){
    scans.set(p.key,scan(p,im,choices,load).catch(e=>{scans.delete(p.key);throw e;}));
    if(scans.size>6)scans.delete(scans.keys().next().value);
   }
   try{discovered=await scans.get(p.key);}catch{notice='可改用矩形、椭圆或套索取样。';}refresh();
  }
  function useInk(value){if(mode.value!=='line')mode.value='ink';color.value=value;proofMode='result';refresh();}
  function smart(x,y){
   if(!discovered)return;
   const b=hits(discovered.boxes,x,y,Math.min(view[2],view[3])*.024)||discovered.local(x,y,samplePixel(x,y));
   if(!b){ready=false;candidate=-1;notice='这里的边界不够清楚，可放大后重选，或改用套索。';return;}
   chooseBox(b);
  }
  function chooseBox(b){
   candidate=discovered.boxes.indexOf(b);notice='';
   const gap=Math.max(3,Math.min(b.w,b.h)*.14);
   region=fit([b.x-gap,b.y-gap,b.w+2*gap,b.h+2*gap],p);ready=true;shape='rect';points=[];centre=[.5,.5];mode.value='ink';useInk(b.ink);
  }
  all('[data-step]').forEach(el=>el.onclick=()=>{
   const boxes=discovered?.boxes;if(!boxes?.length)return;
   const step=+el.dataset.step,at=candidate<0?(step>0?0:boxes.length-1):(candidate+step+boxes.length)%boxes.length;
   chooseBox(boxes[at]);if(view!==full)magnify();refresh();
  });
  function finishPath(){
   const sel=polygon(trace,p);if(!sel){notice='请圈出一块有面积的区域。';return;}
   region=sel.region;points=sel.points;shape='lasso';trace=[];ready=true;centre=[.5,.5];notice='';
  }
  function selectTool(next){
   tool=next;notice='';trace=[];drag=null;keyboardPen=null;
   if(next==='lasso'){ready=false;points=[];}else if(next==='smart'){ready=false;find();}
   else{ready=true;shape=next;points=[];if(next==='circle')squareRegion();}
   refresh();
  }
  all('[data-shape]').forEach(el=>el.onclick=()=>selectTool(el.dataset.shape));
  get('.source-zoom').onclick=()=>{if(view===full)magnify();else view=full;refresh();};
  get('.close-lasso').onclick=()=>{finishPath();refresh();};
  const point=e=>{const b=board.getBoundingClientRect();return [clamp(Math.round(view[0]+(e.clientX-b.left)/b.width*view[2]),0,p.width-1),clamp(Math.round(view[1]+(e.clientY-b.top)/b.height*view[3]),0,p.height-1)];};
  function boxAt(at){
   const [x,y]=drag.at,dx=at[0]-x,dy=at[1]-y;
   if(tool==='circle'){
    const side=clamp(Math.max(Math.abs(dx),Math.abs(dy)),3,Math.min(p.width,p.height));
    region=[clamp(dx<0?x-side:x,0,p.width-side),clamp(dy<0?y-side:y,0,p.height-side),side,side];
   }else region=fit([Math.min(x,at[0]),Math.min(y,at[1]),Math.max(3,Math.abs(dx)),Math.max(3,Math.abs(dy))],p);
   shape=tool;points=[];ready=true;
  }
  board.onpointerdown=e=>{if(!e.isPrimary)return;keyboardPen=null;drag={at:point(e),before:trace.slice(),region:[...region],ready,moved:false};notice='';board.setPointerCapture(e.pointerId);};
  board.onpointermove=e=>{if(!drag||!e.isPrimary||tool==='smart')return;const at=point(e);
   if(Math.hypot(at[0]-drag.at[0],at[1]-drag.at[1])>view[2]*.009)drag.moved=true;
   if(!drag.moved)return;
   if(tool==='lasso'){if(!trace.length)trace=[drag.at];trace.push(at);ready=false;}else boxAt(at);
   refresh();
  };
  board.onpointerup=e=>{if(!drag||!e.isPrimary)return;const at=point(e);
   if(tool==='smart')smart(...at);
   else if(tool==='lasso'){if(!trace.length)trace=[drag.at];if(drag.moved){trace.push(at);finishPath();}else if(trace.length===1&&trace[0]===drag.at)ready=false;else trace.push(at);}
   else if(drag.moved||Math.hypot(at[0]-drag.at[0],at[1]-drag.at[1])>view[2]*.009)boxAt(at);
   else if(mode.value!=='photo'&&at[0]>=region[0]&&at[1]>=region[1]&&at[0]<region[0]+region[2]&&at[1]<region[1]+region[3])useInk(samplePixel(...at));
   else{region[0]=clamp(Math.round(at[0]-region[2]/2),0,p.width-region[2]);region[1]=clamp(Math.round(at[1]-region[3]/2),0,p.height-region[3]);}
   drag=null;refresh();
  };
  board.onpointercancel=()=>{if(drag){trace=drag.before;region=drag.region;ready=drag.ready;drag=null;refresh();}};
  board.onkeydown=e=>{const delta={ArrowLeft:[-4,0],ArrowRight:[4,0],ArrowUp:[0,-4],ArrowDown:[0,4]}[e.key];
   if(tool==='lasso'&&!ready){
    keyboardPen??=[Math.round(view[0]+view[2]/2),Math.round(view[1]+view[3]/2)];
    if(delta)keyboardPen=[clamp(keyboardPen[0]+delta[0]*(e.shiftKey?5:1),0,p.width-1),clamp(keyboardPen[1]+delta[1]*(e.shiftKey?5:1),0,p.height-1)];
    else if(e.key===' ')trace.push([...keyboardPen]);else if(e.key==='Enter'){finishPath();keyboardPen=null;}else return;
    e.preventDefault();refresh();return;
   }
   if(!delta||!ready)return;e.preventDefault();
   if(e.shiftKey&&shape==='circle'){region[2]=region[3]=clamp(region[2]+delta[0]+delta[1],3,Math.min(p.width-region[0],p.height-region[1]));}
   else if(e.shiftKey){region[2]=clamp(region[2]+delta[0],3,p.width-region[0]);region[3]=clamp(region[3]+delta[1],3,p.height-region[1]);}
   else{region[0]=clamp(region[0]+delta[0],0,p.width-region[2]);region[1]=clamp(region[1]+delta[1],0,p.height-region[3]);}refresh();
  };
  mode.onchange=()=>{proofMode='result';refresh();};color.oninput=()=>useInk(color.value);range.oninput=()=>{proofMode='result';refresh();};
  get('.picked-palette').onclick=e=>{const el=e.target.closest('[data-swatch]');if(el)useInk(el.dataset.swatch);};
  all('[data-proof]').forEach(el=>el.onclick=()=>{proofMode=el.dataset.proof;refresh();});
  all('[data-zoom]').forEach(el=>el.onclick=()=>{zoom=+el.dataset.zoom;if(zoom===1)centre=[.5,.5];refresh();});
  let pan=null;
  proof.onpointerdown=e=>{if(!proofMap)return;pan={x:e.clientX,y:e.clientY,centre:[...centre],moved:false};proof.setPointerCapture(e.pointerId);};
  proof.onpointermove=e=>{if(!pan||!proofMap||zoom===1)return;const b=proof.getBoundingClientRect(),dx=e.clientX-pan.x,dy=e.clientY-pan.y;
   if(Math.hypot(dx,dy)>3)pan.moved=true;if(!pan.moved)return;
   centre=[clamp(pan.centre[0]-dx*proof.width/b.width/proofMap.w,0,1),clamp(pan.centre[1]-dy*proof.height/b.height/proofMap.h,0,1)];proofDraw();
  };
  proof.onpointerup=e=>{if(pan&&!pan.moved&&proofMode==='source'&&proofMap){
   const b=proof.getBoundingClientRect(),u=((e.clientX-b.left)*proof.width/b.width-proofMap.x)/proofMap.w,v=((e.clientY-b.top)*proof.height/b.height-proofMap.y)/proofMap.h;
   if(u>=0&&u<=1&&v>=0&&v<=1&&raw.getContext('2d').getImageData(clamp(Math.floor(u*raw.width),0,raw.width-1),clamp(Math.floor(v*raw.height),0,raw.height-1),1,1).data[3]>100)useInk(samplePixel(region[0]+u*region[2],region[1]+v*region[3]));
  }pan=null;};proof.onpointercancel=()=>{pan=null;};
  apply.onclick=async()=>{update();if(apply.disabled)return;saving=true;apply.disabled=true;
   const ink=mode.value!=='photo'?color.value:null,rec=recipe(),coords=[...region],name=get('[name=crop-name]').value.trim()||('自取局部 '+(count+1));
   try{const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify([p.studyKey||p.key,coords,ink,rec])));
    const id='crop:'+p.key+':v2:'+Array.from(new Uint8Array(digest).slice(0,16),x=>x.toString(16).padStart(2,'0')).join('');
    if(root.closest('dialog')?.open&&await add({id,region:coords,name,ink,recipe:rec,...(tint?{tint}:{})})&&root.closest('dialog')?.open)api.close();
   }catch(e){api.dialogError('素材暂时未保存，请再试一次。');}finally{saving=false;refresh();}
  };
  const resize=new ResizeObserver(()=>{if(root.isConnected)proofDraw();});resize.observe(get('.crop-result'));
  root.closest('dialog').addEventListener('close',()=>{resize.disconnect();if(frame)cancelAnimationFrame(frame);},{once:true});
  if(tool==='smart')find();if(initial==='inspect')showStep('adjust');update();
 }
 window.PhotoPicker={open};
})();
