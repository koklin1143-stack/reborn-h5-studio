(function(){
 'use strict';
 const palette=[
  ['瓷白','fffaf0'],['米黄','ead8af'],['沙褐','b39370'],['灰绿','9da89b'],['铅灰','707778'],['石墨','282d30'],
  ['浅粉','f4bcbb'],['珊瑚','ec836c'],['朱红','c65142'],['砖红','974d40'],['赭石','a56944'],['金黄','e8b353'],
  ['薄荷','b9e2c8'],['青绿','5fb195'],['松石','339798'],['湖蓝','5098ba'],['搪瓷蓝','355b68'],['靛青','33466c'],
  ['柠黄','e5df75'],['草绿','8db85e'],['天蓝','83c7ec'],['钴蓝','466dd0'],['紫罗兰','986cb0'],['梅紫','a34c83']
 ];
 const glazePalette=[
  ['象牙白','f5f1e6'],['月白','dde6e1'],['燕麦','d1c0a2'],['雾灰','a5aca6'],['铅灰','707a78'],['墨黑','303b3c'],
  ['淡青','c3d9cb'],['豆青','87af9b'],['鼠尾草','8b9c83'],['松绿','537a69'],['深松石','366866'],['苔绿','515c42'],
  ['雾蓝','b1c8cf'],['灰蓝','819fad'],['湖蓝','51859a'],['钴蓝','347aab'],['海蓝','34586d'],['靛蓝','35435b'],
  ['淡杏','dec2b0'],['粉褐','c69e92'],['珊瑚','b67967'],['砖红','984d40'],['赭黄','b4965d'],['茶褐','71554a']
 ];
 const tabs=[['grid','色板'],['spectrum','光谱'],['rgb','数值']];
 const rgbChannels=['红','绿','蓝'];
 const clamp=value=>Math.max(0,Math.min(1,value));
 const rgbFromHex=hex=>hex.slice(1).match(/../g).map(pair=>parseInt(pair,16));
 const asHex=rgb=>'#'+rgb.map(v=>Math.round(v).toString(16).padStart(2,'0')).join('');
 function hsvFromHex(hex,lastHue=0){
  const [r,g,b]=rgbFromHex(hex).map(v=>v/255);
  const high=Math.max(r,g,b),low=Math.min(r,g,b),span=high-low;
  if(!span)return {h:lastHue,s:0,v:high};
  let sector;
  if(high===r)sector=(g-b)/span;
  else if(high===g)sector=2+(b-r)/span;
  else sector=4+(r-g)/span;
  return {h:(60*sector+360)%360,s:span/high,v:high};
 }
 function hexFromHSV({h,s,v}){
  const channel=n=>{
   const k=(n+h/60)%6;
   return 255*v*(1-s*Math.max(0,Math.min(k,4-k,1)));
  };
  return asHex([channel(5),channel(3),channel(1)]);
 }
 function colorBinding(d,target){
  const body=target==='glaze',part=typeof target==='object'&&target,duo=!body&&!part&&d.patternInk==='duotone';
  const key=part&&d.pattern+'/'+part.key;
  const preset={blue:'#355b68',red:'#a85545',graphite:'#252925'};
  const valid=(v,fallback)=>/^#[0-9a-f]{6}$/i.test(v)?v.toLowerCase():fallback;
  const colors={
   inkColor:body?window.Vessels.glazeHex(d.cupMaterial?.color):part?valid(d.motifInks?.[key],window.PatternTexture.basePigment(d,part.colors[0])):preset[d.patternInk]||valid(d.inkColor,'#355b68'),
   inkDark:valid(d.inkDark,'#1f4557'),inkLight:valid(d.inkLight,'#c7b085')
  };
  const roles=duo?[['inkDark','深色'],['inkLight','浅色']]:[['inkColor',body?'器身':part?.name||'纹样']];
  function patch(){
   if(body)return {cupMaterial:{...d.cupMaterial,color:colors.inkColor}};
   if(part)return {motifInks:{...d.motifInks,[key]:colors.inkColor}};
   return window.PatternTexture.wholeInkPatch(d,duo?{patternInk:'duotone',inkDark:colors.inkDark,inkLight:colors.inkLight}:{patternInk:'custom',inkColor:colors.inkColor});
  }
  return {colors,roles,patch};
 }
 // The inline field sweeps all hues from pale tint through body colour to shadow.
 // At a fixed saturation the two halves are exact sRGB blends to white and black.
 function hslFromHex(hex){
  const {h,s,v}=hsvFromHex(hex),l=v*(1-s/2);
  return {h,l,s:l>0&&l<1?(v-l)/Math.min(l,1-l):0};
 }
 function hexFromHSL({h,s,l}){
  const v=l+s*Math.min(l,1-l);
  return hexFromHSV({h,s:v?2*(1-l/v):0,v});
 }
 function spectrumField(){
  return '<div class="inline-spectrum"><div class="chroma-bed"><div class="ink-spectrum" role="group" tabindex="0" aria-label="连续取色。左右调色相，上下调明暗"><i></i></div><span class="ink-loupe" aria-hidden="true"></span></div><label class="spectrum-light"><span>浓淡</span><input type="range" min="0" max="100" aria-label="颜色浓淡"><i aria-hidden="true"></i></label></div>';
 }
 let lastSelection;
 function mountSpectrum(root,api,target,role){
  if(!root)return;
  const binding=colorBinding(api.draft(),target),key=role||binding.roles[0][0];
  const context=[api.draft().id,target==='glaze'?api.draft().canvas:api.draft().pattern,target?.key||target,key].join('/');
  const patch=hex=>{const b=colorBinding(api.draft(),target);b.colors[key]=hex;return b.patch();};
  bindField(root,context,binding.colors[key],hex=>api.previewUpdate({...api.draft(),...patch(hex)}),
   hex=>api.applyInk(patch(hex)),()=>api.previewUpdate(api.draft()));
 }
 function bindField(root,context,initial,onPreview,onCommit,onCancel){
  if(root.dataset.bound)return;root.dataset.bound='true';
  const plane=root.querySelector('.ink-spectrum'),light=root.querySelector('input');
  let tone=lastSelection?.context===context&&lastSelection.hex===initial?{...lastSelection.tone}:hslFromHex(initial);
  let pointer=null,frame=0,start=null;
  function sync(){
   const value=hexFromHSL(tone);
   root.style.setProperty('--selected-ink',value);
   root.style.setProperty('--rail-start',hexFromHSL({...tone,s:0}));
   root.style.setProperty('--rail-end',hexFromHSL({...tone,s:1}));
   // At neutral, show the chromatic field available on the next hue gesture.
   root.style.setProperty('--field-sat',(tone.s||.64)*100+'%');
   root.style.setProperty('--x',tone.h/360*100+'%');root.style.setProperty('--y',(1-tone.l)*100+'%');
   light.value=Math.round(tone.s*100);plane.setAttribute('aria-label','连续取色，左右调色相，上下调明暗，当前 '+value);
  }
  function begin(){start={...tone};}
  function preview(){
   sync();
   if(!frame)frame=requestAnimationFrame(()=>{frame=0;if(root.isConnected)onPreview(hexFromHSL(tone));});
  }
  function finish(commit){
   cancelAnimationFrame(frame);frame=0;pointer=null;root.removeAttribute('data-picking');
   if(!start||!root.isConnected)return;
   const before=hexFromHSL(start);
   if(!commit)tone=start;
   start=null;sync();
   const value=hexFromHSL(tone);lastSelection={context,hex:value,tone:{...tone}};
   if(commit&&value!==before)onCommit(value);else onCancel(before);
  }
  function pick(e){
   const r=plane.getBoundingClientRect();
   const x=clamp((e.clientX-r.left)/r.width);root.style.setProperty('--loupe-side',x>.7?'-24px':'24px');
   tone={h:360*x,s:tone.s||.64,l:1-clamp((e.clientY-r.top)/r.height)};preview();
  }
  plane.addEventListener('pointerdown',e=>{if(pointer!==null)return;e.preventDefault();begin();pointer=e.pointerId;plane.setPointerCapture(pointer);root.dataset.picking='true';pick(e);});
  plane.addEventListener('pointermove',e=>{if(e.pointerId===pointer)pick(e);});
  plane.addEventListener('pointerup',e=>{if(e.pointerId===pointer){pick(e);finish(true);}});
  for(const event of ['pointercancel','lostpointercapture'])plane.addEventListener(event,e=>{if(e.pointerId===pointer)finish(false);});
  plane.addEventListener('keydown',e=>{
   if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;
   e.preventDefault();begin();tone.h=(tone.h+(e.key==='ArrowRight'?4:e.key==='ArrowLeft'?-4:0)+360)%360;
   if(e.key==='ArrowLeft'||e.key==='ArrowRight')tone.s=tone.s||.64;
   tone.l=clamp(tone.l+(e.key==='ArrowUp'?.03:e.key==='ArrowDown'?-.03:0));finish(true);
   (root.isConnected?plane:document.querySelector('.inline-spectrum .ink-spectrum'))?.focus({preventScroll:true});
  });
  light.addEventListener('input',()=>{if(!start)begin();tone.s=Number(light.value)/100;preview();});
  light.addEventListener('change',()=>finish(true));light.addEventListener('pointercancel',()=>finish(false));sync();
 }
 function open(api,part){
  const draft=api.draft(),{roles,colors,patch}=colorBinding(draft,part),duo=roles.length>1;
  let role=roles[0][0],tab='grid',frame=0;
  api.open(part==='glaze'?'器身颜色':part?part.name+'颜色':'自选颜色','<div class="ink-picker"></div>','ink-picker');
  const dialog=document.querySelector('#dialog'),root=dialog.querySelector('.ink-picker');
  const get=selector=>root.querySelector(selector);
  function preview(){
   if(frame)return;
   frame=requestAnimationFrame(()=>{
    frame=0;
    if(dialog.open&&root.isConnected)api.previewUpdate({...draft,...patch()});
   });
  }
  function colorChanged(hex){
   colors[role]=hex.toLowerCase();
   sync();preview();
  }
  function grid(){
   return `<div class="ink-grid" role="group" aria-label="选择色块">${(part==='glaze'?glazePalette:palette).map(([name,hex])=>`<button type="button" data-swatch="#${hex}" style="--ink:#${hex}" aria-label="${name} #${hex}"></button>`).join('')}</div>`;
  }
  function sliders(){
   return rgbChannels.map((name,i)=>`<label class="ink-slider">${name}<input type="range" min="0" max="255" data-channel="${i}"><output></output></label>`).join('')+
    `<label class="ink-hex">HEX<input data-hex aria-label="六位十六进制色值" maxlength="7" autocomplete="off" autocapitalize="characters" spellcheck="false"><small data-error role="status"></small></label>`;
  }
  function render(){
   root.innerHTML=`<div class="ink-summary"><div class="ink-roles">${roles.map(([key,name])=>duo?`<button data-role="${key}" aria-pressed="${role===key}"><i></i>${name}</button>`:`<span><i data-chip></i>${name}</span>`).join('')}</div>${tab==='rgb'?'<output class="ink-value"></output>':''}</div>
    <div class="ink-tabs ui-segment" role="group" aria-label="选色方式">${tabs.map(([id,label])=>`<button data-tab="${id}" aria-pressed="${tab===id}">${label}</button>`).join('')}</div>
    <div class="ink-body">${tab==='grid'?grid():tab==='spectrum'?spectrumField():sliders()}</div>
    <button class="btn primary full" data-apply>${!part&&draft.spotPaint?'替换局部配色':'应用颜色'}</button>`;
   sync();
   if(tab==='spectrum')bindField(get('.inline-spectrum'),'sheet/'+draft.id+'/'+(part?.key||part||'whole')+'/'+role,colors[role],colorChanged,colorChanged,colorChanged);
  }
  function sync(){
   const hex=colors[role];
   if(get('.ink-value'))get('.ink-value').textContent=hex.toUpperCase();
   root.querySelectorAll('[data-role]').forEach(b=>b.style.setProperty('--ink',colors[b.dataset.role]));
   root.style.setProperty('--selected-ink',hex);
   root.querySelectorAll('[data-swatch]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.swatch===hex));
   const rgb=rgbFromHex(hex);
   root.querySelectorAll('[data-channel]').forEach(input=>{
    input.value=rgb[Number(input.dataset.channel)];input.nextElementSibling.textContent=input.value;
   });
   const input=get('[data-hex]');
   if(input){
    if(document.activeElement!==input)input.value=hex.toUpperCase();
    input.setAttribute('aria-invalid','false');get('[data-error]').textContent='';
   }
   get('[data-apply]').disabled=false;
  }
  root.addEventListener('click',event=>{
   const button=event.target.closest('button');if(!button)return;
   if(button.dataset.tab){tab=button.dataset.tab;render();get(`[data-tab="${tab}"]`).focus();return;}
   if(button.dataset.role){role=button.dataset.role;render();get(`[data-role="${role}"]`).focus();return;}
   if(button.dataset.swatch){colorChanged(button.dataset.swatch);return;}
   if(button.hasAttribute('data-apply')){
    const changes=patch();api.close();
    if(Object.keys(changes).some(key=>JSON.stringify(draft[key])!==JSON.stringify(changes[key])))api.update(changes);
   }
  });
  root.addEventListener('input',event=>{
   const el=event.target;
   if(el.hasAttribute('data-channel')){
    const rgb=rgbFromHex(colors[role]);rgb[Number(el.dataset.channel)]=Number(el.value);colorChanged(asHex(rgb));
   }else if(el.hasAttribute('data-hex')){
    const value=el.value.trim().replace(/^#/,'');
    if(/^[0-9a-f]{6}$/i.test(value)){colorChanged('#'+value);return;}
    el.setAttribute('aria-invalid','true');get('[data-error]').textContent='请输入 6 位色值，如 355B68';get('[data-apply]').disabled=true;
   }
  });
  dialog.addEventListener('close',()=>{
   cancelAnimationFrame(frame);
   if(api.draft()?.id===draft.id&&document.querySelector('#work-preview,#editor-cup-host'))api.previewUpdate(api.draft());
  },{once:true});
  render();
 }
 window.InkPicker={open,spectrumField,mountSpectrum};
})();
