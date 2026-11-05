(()=>{
 const V=window.Views,M=window.Studio,oldHeader=V.header;let api;
 const range=(label,key,value,min,max)=>`<label class="range-field"><span>${label}<output data-cup-output="${key}">${value}</output></span><input type="range" data-cup-field="${key}" aria-label="${label}" min="${min}" max="${max}" value="${value}"></label>`;
 function pattern(d,svg){const p=d.vesselPlacement||{x:0,y:0,scale:100,rotation:0};return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><g transform="translate(${256+p.x*3} ${256+p.y*3}) rotate(${p.rotation}) scale(${p.scale/100}) translate(-256 -256)">${svg||window.PatternTexture.svg(d,{transparent:true})}</g></svg>`;}
 let serial=0;
 function printLabel(r,p){
  if(v.isFill(r)&&(v.coveragePercent(p.coverWidth)<100||v.coveragePercent(p.coverHeight)<100))return r.face?r.label.replace('满铺','')+'局部铺纹':r.mode==='wrap'?'外壁局部铺纹':'内侧局部铺纹';
  return r.label;
 }
 function zoneControl(d){
  const area=v.position(d.canvas,d.vesselPlacement);
  return `<div class="print-zone"><span>印花位置</span><button type="button" data-action="cup-positions" data-print-position="${area.id}" aria-label="印花位置，当前${area.label}" aria-haspopup="dialog"><strong>${area.label}</strong><svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true"><path d="m3 6 5 5 5-5"/></svg></button></div>`;
 }
 function positionOptions(d){
  const area=v.position(d.canvas,d.vesselPlacement),multi=v.surface(d.canvas),printed=multi?v.facePlacements(d.canvas,d.vesselPlacement):{};
  const groups=new Map();for(const [id,p]of Object.entries(v.positions[d.canvas])){const face=multi?v.region(d.canvas,p.local).face:id;if(!groups.has(face))groups.set(face,[]);groups.get(face).push({id,...p});}
  const rows=[...groups].map(([face,choices])=>{
   const current=choices.some(p=>p.id===area.id),primary=choices[0],stored=printed[face]||d.vesselPlacement.zones?.[d.vesselPlacement.faces?.[face]],selected=choices.find(p=>p.id===area.id)||choices.find(p=>[p.local,p.full].includes(stored?.zone))||primary,checked=multi?!!printed[face]:current&&v.hasPrint(d.vesselPlacement);
   const field=`<input type="${multi?'checkbox':'radio'}" name="print-position" data-position-print="${selected.id}" ${checked?'checked':''} aria-label="${primary.label}印花">`;
   const variants=choices.length>1?`<div class="position-variants" aria-label="${primary.label}印花区域">${choices.map(p=>`<button type="button" data-action="cup-position-edit" data-id="${p.id}" aria-pressed="${p.id===area.id}">${p.id==='front'?'中央':p.label.replace('正面','')}</button>`).join('')}</div>`:'';
   return `<div class="position-choice${current?' is-current':''}">${multi?`<button type="button" class="position-name" data-action="cup-position-edit" data-id="${selected.id}" ${current?'aria-current="true"':''}>${primary.label}<span aria-hidden="true">${current?'编辑中':'›'}</span></button><label class="position-toggle">${field}</label>`:`<label class="position-radio">${field}<span>${primary.label}</span></label>`}${variants}</div>`;
  }).join('');
  return `<div class="position-chooser"><p class="position-help">${multi?'勾选印花部位，点名称调整。':'选择一个印花位置。'}</p>${multi?'<div class="position-column-head"><span>部位</span><span>印花</span></div>':''}<div class="position-options" ${multi?'':'role="radiogroup" aria-label="印花位置"'}>${rows}${multi?'':`<label class="position-radio position-none"><input type="radio" name="print-position" data-position-print="none" ${v.hasPrint(d.vesselPlacement)?'':'checked'}><span>不印花</span></label>`}</div>${multi?V.btn('完成','close','primary full'):''}</div>`;
 }
 function openPositions(){
  api.open('印花位置',positionOptions(api.draft()),'print-positions');
  document.querySelector('.position-choice.is-current .position-name,.position-options input:checked')?.focus({preventScroll:true});
  document.querySelector('#dialog').addEventListener('close',()=>document.querySelector('[data-action=cup-positions]')?.focus({preventScroll:true}),{once:true});
 }
 function selectPosition(id){
  const d=api.draft();if(v.position(d.canvas,d.vesselPlacement).id!==id)M.edit(d,v.positionPatch(d,id));
  if(!v.hasPrint(d.vesselPlacement))window.EditorObject.rotate();fullPanel=false;window.Workbench?.closePanel();api.close();api.changed();api.render();focusPlacement();
 }
 function densityControl(d,hidden=false){
  if(!window.Vessels.hasPrint(d.vesselPlacement))return '';
  const v=window.Vessels,r=v.region(d.canvas,d.vesselPlacement.zone);if(!v.isFill(r))return '';
  const n=v.fillCount(r,d.vesselPlacement.scale),max=r.mode==='wrap'?24:10;
  const opts=Array.from({length:max},(_,i)=>`<option value="${i+1}" ${i+1===n?'selected':''}>${i+1} 组</option>`).join('');
  return `<label class="fill-density" ${hidden?'hidden':''}>疏密<select data-fill-count aria-label="满铺疏密">${opts}</select></label>`;
 }
 let fullPanel=false;
 const v=window.Vessels;
 const carrierImage=id=>window.CarrierImageData?.[id]?'data:image/webp;base64,'+window.CarrierImageData[id]:window.CarrierAssetFolder+id+'.webp?v='+encodeURIComponent(document.querySelector('meta[name=reborn-release]')?.content||'');
 function modelOrigin(){return '器型示意';}
 function vesselPicker(d){
  const item=v.get(d.canvas);
  return `<div class="carrier-picker"><div class="carrier-current-name"><small>${v.families[item.family]}</small><h2><strong>${item.name}</strong></h2></div><button type="button" class="carrier-change" data-action="cup-picker" aria-label="更换物品，当前${item.name}" aria-haspopup="dialog">更换物品 ${V.icon('arrow',14)}</button></div>`;
 }
 function catalogue(family){
  const d=api.draft(),items=Object.entries(v.data).filter(([id,item])=>v.available(id)&&item.family===family);
  return `<div class="carrier-choices"><div class="carrier-categories" role="group" aria-label="物品分类">${Object.entries(v.families).map(([id,name])=>`<button type="button" data-action="cup-family" data-id="${id}" aria-pressed="${id===family}">${name}</button>`).join('')}</div><div class="carrier-choice-grid" data-count="${items.length}" aria-label="${v.families[family]}">${items.map(([id,item])=>`<button type="button" data-action="cup-pick" data-id="${id}" aria-pressed="${d.canvas===id}"><span class="carrier-choice-art"><img src="${carrierImage(id)}" alt="" width="320" height="320"><span class="carrier-chosen" aria-hidden="true">${V.icon('check',13)}</span></span><span class="carrier-choice-caption"><span>${item.short}</span><small>${d.canvas===id?'当前使用':''}</small></span></button>`).join('')}</div><p class="carrier-catalogue-note">换一件物品，保留你的纹样。</p></div>`;
 }
 function openPicker(){
  api.open('选择物品',catalogue(v.get(api.draft().canvas).family),'carrier-picker');
  document.querySelector('.carrier-categories [aria-pressed=true]')?.focus({preventScroll:true});
 }
 function coverageBar(d,editing=false){
  if(!v.hasPrint(d.vesselPlacement))return '<div class="coverage-bar coverage-empty"><span>印花范围</span><button type="button" class="btn text" data-action="cup-positions">选择印花部位</button></div>';
  const p=d.vesselPlacement,r=v.region(d.canvas,p.zone),area=v.position(d.canvas,p),fill=v.isFill(r),whole=fill&&v.coveragePercent(p.coverWidth)===100&&v.coveragePercent(p.coverHeight)===100;
  const btn=(label,id,active)=>V.btn(label,'cup-coverage','text',`data-id="${id}" aria-pressed="${active}"`);
  return `<div class="coverage-bar" role="group" aria-label="印花范围"><span>印花范围</span>${area.full?btn('局部印花','local',!fill)+btn(area.fullLabel,'full',whole&&!editing):`<strong class="coverage-fixed">${area.arrangement||'局部印花'}</strong>`}${btn('调范围','custom',area.full?fill&&(editing||!whole):editing)}</div>`;
 }
 function coverageControls(d){
  if(!v.hasPrint(d.vesselPlacement))return '';
  const p=d.vesselPlacement,r=v.region(d.canvas,p.zone),wall=r.mode==='wrap';
  const slider=(label,key,value,min,max,unit)=>`<label class="coverage-field"><span>${label}</span><input type="range" data-cover-field="${key}" aria-label="${label}" min="${min}" max="${max}" value="${value}"><output data-cover-value="${key}" data-unit="${unit}">${Math.round(value)}${unit}</output></label>`;
  const fields=v.isFill(r)?slider(wall?'环绕宽度':'覆盖宽度','coverWidth',v.coveragePercent(p.coverWidth),5,100,'%')+slider('覆盖高度','coverHeight',v.coveragePercent(p.coverHeight),5,100,'%')+slider(wall?'整圈重复':'横向重复','count',v.fillCount(r,p.scale),1,wall?24:10,'组'):slider('单幅大小','scale',p.scale,40,160,'%');
  const params=v.isFill(r)?[['coverWidth',wall?'环绕宽度':'覆盖宽度'],['coverHeight','覆盖高度'],['count','花纹疏密']]:[['scale','单幅大小']];
  params.push(['position','移动位置']);
  return `<div class="coverage-fields" data-param="${params[0][0]}"><div class="coverage-tabs" role="group" aria-label="选择调整参数">${params.map(([id,label],i)=>`<button type="button" data-cover-tab="${id}" aria-pressed="${!i}">${label}</button>`).join('')}</div>${fields}<details><summary>移动印花位置</summary>${slider('水平位置','x',p.x,-60,60,'')}${slider('上下位置','y',p.y,-60,60,'')}</details></div>`;
 }
 document.addEventListener('click',e=>{
  const el=e.target.closest('[data-cover-tab]');if(!el)return;
  const fields=el.closest('.coverage-fields');fields.dataset.param=el.dataset.coverTab;
  fields.querySelectorAll('[data-cover-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b===el)));
  fields.querySelector('details').open=el.dataset.coverTab==='position';
 });
 function syncCoverage(d){
  const p=d.vesselPlacement,r=v.region(d.canvas,p.zone);
  document.querySelectorAll('[data-cover-field]').forEach(el=>{
   const key=el.dataset.coverField,value=key==='count'?v.fillCount(r,p.scale):key.startsWith('cover')?v.coveragePercent(p[key]):p[key];
   el.value=value;const out=el.parentElement.querySelector('output');out.textContent=Math.round(value)+out.dataset.unit;
  });
  document.querySelectorAll('[data-cup-field]').forEach(el=>{
   const value=p[el.dataset.cupField];el.value=value;el.closest('label').querySelector('output').textContent=Math.round(value);
  });
  const density=document.querySelector('[data-fill-count]');if(density&&v.isFill(r))density.value=v.fillCount(r,p.scale);
 }
 function setCoverage(mode){
  const d=api.draft();
  if(!d||!v.hasPrint(d.vesselPlacement)||!['local','full','custom'].includes(mode))return;
  const editing=mode!=='full';
  M.edit(d,v.coverPatch(d,mode));
  if(api.page()==='editor'){
   window.Workbench.setCoveragePanel(editing);
   if(editing)window.EditorObject.place();
  }else fullPanel=editing;
  api.changed(0);api.render();focusPlacement();
 }
 function focusPlacement(){
  const d=api.draft();if(!d)return;d.cupCamera=v.regionCamera(d.canvas,d.vesselPlacement);window.Cup3D.control('reset');api.changed();
 }
 function changePrint(enabled){
  const d=api.draft();if(!d)return;M.edit(d,v.printPatch(d,enabled));fullPanel=false;window.Workbench?.closePanel();
  if(enabled)window.EditorObject.place();else window.EditorObject.rotate();api.changed(0);api.render();focusPlacement();
 }
 function adjustCoverage(e,commit){
  const el=e.target,key=el.dataset.coverField;
  if(!key||!api||!['editor','cup'].includes(api.page()))return;
  const d=api.draft(),r=v.region(d.canvas,d.vesselPlacement.zone),placement={...d.vesselPlacement};
  if(key==='count')placement.scale=v.fillScale(r,Number(el.value));
  else placement[key]=Number(el.value);
  if(commit){M.edit(d,{vesselPlacement:placement});api.changed(0);}
  const next={...d,vesselPlacement:placement};
  syncCoverage(next);
  if(api.page()==='editor')window.EditorObject.preview(next);
  else if(window.Cup3D.diagnostics()?.mode==='static')document.querySelector('.cup-static').innerHTML=staticCup(next);
  else window.Cup3D.update(next);
  if(commit){
   const bar=document.querySelector('.coverage-bar');if(bar)bar.outerHTML=coverageBar(next,true);
   const undo=document.querySelector('[data-action=undo]');if(undo)undo.disabled=!d.past.length;
   const redo=document.querySelector('[data-action=redo]');if(redo)redo.disabled=!d.future.length;
  }
 }
 document.addEventListener('input',e=>adjustCoverage(e,false));
 document.addEventListener('change',e=>adjustCoverage(e,true));
 // A low-resolution orthographic projection of the same UV field for static mode.
 // Each projected triangle reads the shared source through a periodic SVG pattern.
 function staticFill(d,svg,id,body,r){
  const v=window.Vessels,type=d.canvas,p=d.vesselPlacement,c=v.get(type),wall=r.mode==='wrap';
  const profile=c.profile.slice(r.rows[0],r.rows[1]+1),arc=[0];
  for(let i=1;i<profile.length;i++)arc.push(arc[i-1]+Math.hypot(profile[i][0]-profile[i-1][0],profile[i][1]-profile[i-1][1]));
  const length=arc.at(-1),rim=wall?profile.at(-1):profile[0],winding=v.fillBasis(r,p),[a,b]=winding,aspect=v.fillAspect(r,winding,length);
  const [centerU,centerV,halfU,halfV]=v.fillWindow(r,p);
  const pitch=wall?.19:.98,k=Math.min(125/rim[0],190/Math.max(.1,length)),top=wall?64:137;
  const cy=top+rim[1]*k*Math.cos(pitch),cx=type==='cup'?145:170;
  function vertex(j,turn){
   const [rad,y]=profile[j],angle=turn*2*Math.PI,x=rad*Math.sin(angle),z=rad*Math.cos(angle),t=arc[j]/length;
   const u=(wall?turn:.5*(1-t)*Math.sin(angle))-p.x/120;
   const h=((wall?t:-.5*(1-t)*Math.cos(angle))+p.y/120)*aspect;
   return [cx+x*k,cy-y*k*Math.cos(pitch)+z*k*Math.sin(pitch),.5+a*u-b*h,1-(wall?0:.5)-b*u-a*h,wall?turn:.5*(1-t)*Math.sin(angle),wall?t:-.5*(1-t)*Math.cos(angle)];
  }
  function clip(vertices,axis,edge,sign){
   const result=[];
   for(let i=0;i<vertices.length;i++){
    const a=vertices[(i+vertices.length-1)%vertices.length],b=vertices[i],da=(a[axis]-edge)*sign,db=(b[axis]-edge)*sign;
    if((da<0)!==(db<0)){const t=da/(da-db);result.push(a.map((val,j)=>val+t*(b[j]-val)));}
    if(db>=0)result.push(b);
   }return result;
  }
  let inks='',polys='',index=0;
  function triangle(o,j,k){
   const [x,y,u,vv]=o,du=j[2]-u,dv=j[3]-vv,eu=k[2]-u,ev=k[3]-vv,det=du*ev-eu*dv;
   if(Math.abs(det)<1e-9)return;
   const ma=((j[0]-x)*ev-(k[0]-x)*dv)/det,mc=(du*(k[0]-x)-eu*(j[0]-x))/det;
   const mb=((j[1]-y)*ev-(k[1]-y)*dv)/det,md=(du*(k[1]-y)-eu*(j[1]-y))/det;
   const tr=[ma,mb,mc,md,x-ma*u-mc*vv,y-mb*u-md*vv].map(n=>n.toFixed(4)).join(' ');
   const key=id+'-t'+index++;
   let points=[o,j,k];
   if(halfV<.5)points=clip(clip(points,5,centerV-halfV,1),5,centerV+halfV,-1);
   const turns=wall&&halfU<.5?[-1,0,1]:[0];
   const paths=[];
   for(const turn of turns){
    const polygon=halfU===.5?points:clip(clip(points,4,centerU+turn-halfU,1),4,centerU+turn+halfU,-1);
    if(polygon.length>=3)paths.push('M'+polygon.map(pt=>pt[0]+' '+pt[1]).join('L')+'Z');
   }
   if(!paths.length)return;
   inks+=`<pattern id="${key}" href="#${id}-tile" patternTransform="matrix(${tr})"/>`;
   polys+=`<path d="${paths.join('')}" fill="url(#${key})"/>`;
  }
  const N=wall?16:24,turn=i=>wall?-.25+i/(2*N):i/N;
  for(let j=0;j<profile.length-1;j++)for(let i=0;i<N;i++){
   const o=vertex(j,turn(i)),a=vertex(j,turn(i+1)),b=vertex(j+1,turn(i)),c=vertex(j+1,turn(i+1));
   triangle(o,a,b);triangle(a,c,b);
  }
  const rx=rim[0]*k,ry=rx*Math.sin(pitch),topOval=`<ellipse cx="${cx}" cy="${top}" rx="${rx}" ry="${ry}" fill="${type==='cup'?'#f4f0e4':body}" stroke="#315361" stroke-width="4"/>`;
  const side=profile.map((_,i)=>vertex(i,-.25)).concat(profile.map((_,i)=>vertex(i,.25)).reverse());
  const bottom=profile[0],bottomY=cy-bottom[1]*k*Math.cos(pitch),bottomR=bottom[0]*k;
  const shell=`<path d="M${side.map(v=>v[0]+' '+v[1]).join('L')}Z" fill="${body}"/><ellipse cx="${cx}" cy="${bottomY}" rx="${bottomR}" ry="${bottomR*Math.sin(pitch)}" fill="${body}"/>`;
  const footR=(c.foot||.90)*k,footY=top+(rim[1]-(c.floor||-1.0))*k*Math.cos(pitch);
  const foot=wall?`<ellipse cx="${cx}" cy="${footY}" rx="${footR}" ry="${Math.max(2,footR*Math.sin(pitch))}" fill="${body}" stroke="#657067" stroke-opacity=".35"/>`:'';
  const shade=`<linearGradient id="${id}-light"><stop stop-color="#fff" stop-opacity=".25"/><stop offset=".36" stop-color="#fff" stop-opacity=".025"/><stop offset=".8" stop-color="#232b29" stop-opacity=".12"/><stop offset="1" stop-color="#fff" stop-opacity=".18"/></linearGradient>`;
  const light=wall?`<path d="M${side.map(v=>v[0]+' '+v[1]).join('L')}Z" fill="url(#${id}-light)"/>`:'';
  const handle=type==='cup'?`<path d="M${cx+rx-4} 84q76 -15 51 50q-12 24 -52 32" fill="none" stroke="${body}" stroke-width="13"/>`:'';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" role="img" aria-label="${printLabel(r,p)}，静态示意"><defs>${shade}<pattern id="${id}-tile" patternUnits="userSpaceOnUse" width="1" height="1" viewBox="0 0 512 512">${svg||window.PatternTexture.svg(d,{transparent:true})}</pattern>${inks}</defs>${foot}${handle}${wall?shell:topOval}${polys}${light}${wall?topOval:''}</svg>`;
 }
 function staticCup(d,svg,{transparent=false}={}){
  const type=d.canvas,p=d.vesselPlacement||window.Vessels.placement(type),r=window.Vessels.region(type,p?.zone),body=window.Vessels.glazeHex(d.cupMaterial?.color);
  if(v.surface(type))return window.TextilePreview.svg(d,svg);
  if(!v.hasPrint(p))svg='<g/>';
  const id='static-ink-'+(++serial);if(window.Vessels.isFill(r))return staticFill(d,svg,id,body,r);
  const art=pattern(d,svg),stamp=(x,y,w,h,angle=0)=>`<g transform="translate(${x} ${y}) rotate(${angle}) scale(${w/512} ${h/512})"><use href="#${id}" x="-256" y="-256"/></g>`;
  const ellipse=(x,y,rx,ry,fill,stroke='none',width=1)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"/>`;
  let content;
  if(type==='cup'){
   const handle=`<path d="M249 100C315 80 323 146 252 177" fill="none" stroke="${body}" stroke-width="14"/>`;
   const band=Array.from({length:7},(_,i)=>stamp(68+i*29,108-9*Math.cos(i*Math.PI/3),24,28)).join('');
   content=(p.zone==='back'?'<g transform="translate(316 0) scale(-1 1)">'+handle+'</g>':handle)+`<path d="M63 70L70 222Q156 252 246 222L254 70Z" fill="${body}" stroke="#82908b"/>`+(r.mode==='belt'?band:stamp(158,164,132,132))+ellipse(158,70,95,24,'#f4f0e4','#355b68',5);
  }else{
   const plate=type==='plate',rx=type==='basin'?143:plate?139:119,side=r.mode==='wall',cy=side?85:plate?146:100,ry=side?23:plate?79:57;
   const shell=`<path d="M${170-rx} ${cy}Q70 ${plate?234:270} 170 ${plate?232:246}Q270 ${plate?234:270} ${170+rx} ${cy}" fill="${body}" stroke="#8b9892"/>`+ellipse(170,cy,rx,ry,body,'#244f65',4);
   const ring=()=>Array.from({length:r.count},(_,i)=>{const a=i*2*Math.PI/r.count;return stamp(170+(rx-11)*Math.sin(a),cy-(ry-7)*Math.cos(a),24,15,a*180/Math.PI);}).join('');
   if(r.mode==='back')content=ellipse(170,150,rx,75,body,'#244f65',4)+stamp(170,150,170,100)+ellipse(170,150,44,26,'none','#87938a',3);
   else content=shell+(side?stamp(170,163,89,92):r.mode==='ring'?ring():stamp(170,cy,plate?196:146,plate?103:86));
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" role="img" aria-label="${r.label}，静态示意"><defs><g id="${id}">${art}</g></defs>${transparent?'':ellipse(170,253,118,9,'#20232115')}${content}</svg>`;
 }
 V.cup=c=>{const d=c.d;if(!d)return V.empty('没有可预览的草稿','请先从共创开始。');const placement=d.vesselPlacement;return `<section class="cup-screen">${vesselPicker(d,'cup-vessel')}${coverageBar(d,fullPanel)}<div id="cup-host" class="cup-host" data-mode="loading"><div class="vessel-zone">${zoneControl(d)}</div><div class="cup-static" hidden>${staticCup(d)}</div></div>${fullPanel?coverageControls(d):''}<p id="cup-status" role="status">正在建立三维预览…</p><details class="cup-settings-fold"><summary>精细调整与预览设置</summary><div class="cup-settings"><div class="cup-controls" aria-label="辅助视角控制">${[['left','左转'],['right','右转'],['in','放大'],['out','缩小'],['reset','重置视角']].map(([id,label])=>V.btn(label,'cup-camera','secondary',`data-id="${id}"`)).join('')}</div><div class="vessel-source-row"><label class="cup-source-select">纹样<select id="cup-motif"><option value="current">当前编辑结果</option>${M.items.filter(i=>i.category==='enamel').map(i=>`<option value="${i.id}">${i.name} · 示意</option>`).join('')}</select></label><label class="cup-source-select">配色<select id="cup-ink">${[['original','原色'],['blue','搪瓷蓝'],['red','砖红'],['graphite','石墨']].map(([id,name])=>`<option value="${id}" ${d.patternInk===id?'selected':''}>${name}</option>`).join('')}</select></label></div>${densityControl(d)}<div class="range-grid">${range('摆放大小','scale',placement.scale,40,160)}${range('摆放旋转','rotation',placement.rotation,-180,180)}${range('水平位置','x',placement.x,-60,60)}${range('垂直位置','y',placement.y,-60,60)}</div><div class="cup-material-row"><div class="full-glaze"><h3>${v.materialLabel(d.canvas)}</h3>${window.InkPicker.spectrumField()}</div><label>预设<select id="cup-material"><option value="" disabled ${d.cupMaterial.color.startsWith('#')?'selected':''}>自选颜色</option><option value="white" ${d.cupMaterial.color==='white'?'selected':''}>${v.surface(d.canvas)?'本白':'白釉'}</option><option value="cream" ${d.cupMaterial.color==='cream'?'selected':''}>米色</option><option value="blue" ${d.cupMaterial.color==='blue'?'selected':''}>浅蓝</option></select></label>${V.btn('恢复材质','cup-material-reset','text')}${V.btn('静态预览','cup-static','text')}</div></div></details><div class="cup-origin">设计示意 · 非馆藏测绘</div><div class="cup-footer">${V.btn('返回二维编辑','cup-flat','secondary')}${V.btn('完成并保存','finish','primary')}</div></section>`;};
 V.header=c=>c.page==='cup'?`<div class="preview-heading"><strong>全屏预览</strong><span id="save-status" role="status">${V.esc(c.saveLabel)}</span></div>${V.btn('<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 9h6V3m12 12h-6v6M9 9L3 3m12 12 6 6"/></svg> 返回工作台','back','preview-return')}`:oldHeader(c);
 function status(state,message){const host=document.querySelector('#cup-host'),el=document.querySelector('#cup-status');if(!host||!el)return;el.dataset.state=state;el.textContent=message;document.querySelectorAll('[data-action="cup-camera"]').forEach(b=>b.disabled=state==='fallback');const panel=host.querySelector('.cup-static');if(state==='fallback'){panel.innerHTML=staticCup(api.draft());panel.hidden=false;el.insertAdjacentHTML('beforeend',' '+V.btn('重试三维','cup-retry','text'));}else if(state==='error')el.insertAdjacentHTML('beforeend',' '+V.btn('重试贴图','cup-texture-retry','text'));else panel.hidden=true;}
 function bindGlaze(){
  const root=document.querySelector('.full-glaze .inline-spectrum');if(!root)return;
  window.InkPicker.mountSpectrum(root,{draft:api.draft,previewUpdate:next=>{
   if(window.Cup3D.diagnostics()?.mode==='static')document.querySelector('.cup-static').innerHTML=staticCup(next);else window.Cup3D.update(next);
  },update:patch=>{M.edit(api.draft(),patch);api.changed();document.querySelector('#cup-material').value='';refresh();}},'glaze');
 }
 function redrawGlaze(){
  const field=document.querySelector('.full-glaze .inline-spectrum');
  if(field){field.outerHTML=window.InkPicker.spectrumField();bindGlaze();}
 }
 function mount(force=false){bindGlaze();const host=document.querySelector('#cup-host');if(!host)return;window.Cup3D.mount(host,api.draft(),camera=>{if(api.page()!=='cup')return;api.draft().cupCamera=camera;api.changed();},status,{force});}
 function refresh(){const d=api.draft();syncCoverage(d);if(window.Cup3D.diagnostics()?.mode==='static'){const el=document.querySelector('.cup-static');if(el)el.innerHTML=staticCup(d);}else window.Cup3D.update(d);}
 async function handle(action,el){if(!action.startsWith('cup-'))return false;if(action==='cup-positions'){openPositions();return true;}if(action==='cup-position-edit'){selectPosition(el.dataset.id);return true;}if(action==='cup-picker'){openPicker();return true;}if(action==='cup-family'){if(v.families[el.dataset.id]){document.querySelector('.carrier-choices').outerHTML=catalogue(el.dataset.id);document.querySelector('.carrier-categories [aria-pressed=true]')?.focus({preventScroll:true});}return true;}if(action==='cup-pick'){api.close();if(el.dataset.id!==api.draft().canvas){fullPanel=false;M.switchVessel(api.draft(),el.dataset.id);api.changed();api.render();}document.querySelector('[data-action=cup-picker]')?.focus({preventScroll:true});return true;}if(action==='cup-coverage'){setCoverage(el.dataset.id);return true;}if(action==='cup-vessel'){fullPanel=false;M.switchVessel(api.draft(),el.dataset.id);api.changed();api.render();}if(action==='cup-flat'){api.draft().editorSurface='flat';api.changed();await api.toEditor();}if(action==='cup-camera')window.Cup3D.control(el.dataset.id);if(action==='cup-material-reset'){M.edit(api.draft(),{cupMaterial:v.material(api.draft().canvas)});api.changed();document.querySelector('#cup-material').value='white';redrawGlaze();refresh();}if(action==='cup-static'){api.draft().cupPreviewMode='static';api.changed();mount();}if(action==='cup-retry'){api.draft().cupPreviewMode='three';api.changed();mount(true);}if(action==='cup-texture-retry')refresh();return true;}

 document.addEventListener('input',e=>{if(!api||api.page()!=='cup'||!e.target.dataset.cupField)return;const d=api.draft(),key=e.target.dataset.cupField;const preview={...d,vesselPlacement:{...d.vesselPlacement,[key]:Number(e.target.value)}};const out=document.querySelector(`[data-cup-output="${key}"]`);if(out)out.textContent=e.target.value;if(window.Cup3D.diagnostics()?.mode==='static')document.querySelector('.cup-static').innerHTML=staticCup(preview);else window.Cup3D.update(preview);});
 document.addEventListener('change',e=>{if(!api)return;
  if(e.target.matches('[data-position-print]')){
   const d=api.draft(),id=e.target.dataset.positionPrint,multi=v.surface(d.canvas),active=document.activeElement;
   M.edit(d,id==='none'?v.printPatch(d,false):v.positionPrintPatch(d,id,e.target.checked));
   if(!v.hasPrint(d.vesselPlacement))window.EditorObject.rotate();api.changed(0);api.render();
   if(multi){document.querySelector('.position-chooser').outerHTML=positionOptions(d);document.querySelector(`[data-position-print="${active?.dataset.positionPrint}"]`)?.focus({preventScroll:true});}
   else {api.close();focusPlacement();document.querySelector('[data-action=cup-positions]')?.focus({preventScroll:true});}return;
  }
 if(e.target.matches('[data-fill-count]')){
  const d=api.draft(),r=window.Vessels.region(d.canvas,d.vesselPlacement.zone);
  if(!window.Vessels.isFill(r))return;
  const scale=window.Vessels.fillScale(r,Number(e.target.value));
  M.edit(d,{vesselPlacement:{...d.vesselPlacement,scale}});api.changed();
  if(api.page()==='cup')refresh();
  else api.render();return;
 }
 if(api.page()!=='cup')return;const d=api.draft(),el=e.target;if(el.dataset.cupField){M.edit(d,{vesselPlacement:{...d.vesselPlacement,[el.dataset.cupField]:Number(el.value)}});}else if(el.id==='cup-motif'){if(el.value==='current')return;M.replace(d,el.value);}else if(el.id==='cup-ink')M.edit(d,{patternInk:el.value});else if(el.id==='cup-material')M.edit(d,{cupMaterial:{...v.material(d.canvas),color:el.value}});else return;if(el.id==='cup-material')redrawGlaze();const density=document.querySelector('[data-fill-count]');if(density)density.value=window.Vessels.fillCount(window.Vessels.region(d.canvas,d.vesselPlacement.zone),d.vesselPlacement.scale);api.changed();refresh();});
 window.CupView={vesselPicker,modelOrigin,init:ctx=>api=ctx,mount,handle,staticCup,zoneControl,focusPlacement,densityControl,coverageBar,coverageControls,syncCoverage};
})();
