/* Shared authored geometry descriptors and per-vessel placement state. Units are illustrative. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.Vessels=api;})(globalThis,()=>{
 const data={
  cup:{profile:[[.001,-1],[.83,-1],[.90,-.995],[.94,-.98],[.96,-.95],[.97,-.90],[1,.93],[1,.98],[.93,.98],[.91,.93],[.88,-.78],[.865,-.815],[.82,-.84],[.001,-.84]],name:'搪瓷杯',short:'杯',zone:'杯身正面',camera:{yaw:.22,pitch:.46,distance:4.8},rim:'#163d51'},
  plate:{name:'搪瓷盘',short:'盘',zone:'盘面内侧',camera:{yaw:0,pitch:1.02,distance:5.5},rim:'#244f65',rimRadius:1.48,rimY:.2,rimTube:.028,foot:.54,floor:-.25,roughness:.22,printRadius:1.08,inner:[[0,-.10],[.82,-.10],[1.1,-.05],[1.33,.14],[1.48,.20]],profile:[[.001,-.18],[.48,-.18],[.52,-.23],[.60,-.23],[.65,-.18],[.9,-.16],[1.14,-.07],[1.36,.11],[1.48,.16],[1.5,.18],[1.48,.20],[1.33,.14],[1.1,-.05],[.82,-.10],[.001,-.10]]},
  bowl:{name:'搪瓷碗',short:'碗',zone:'碗内底与内壁',camera:{yaw:0,pitch:1.1,distance:4.9},rim:'#234c5d',rimRadius:1.16,rimY:.65,rimTube:.036,foot:.40,floor:-.66,roughness:.27,printRadius:.84,inner:[[0,-.525],[.33,-.525],[.49,-.485],[.68,-.333],[.90,-.045],[1.095,.37],[1.145,.625]],profile:[[.001,-.58],[.34,-.58],[.37,-.64],[.43,-.64],[.46,-.55],[.61,-.45],[.78,-.27],[.955,.02],[1.135,.43],[1.19,.63],[1.16,.65],[1.145,.625],[1.095,.37],[.90,-.045],[.68,-.333],[.49,-.485],[.33,-.525],[.001,-.525]]},
  basin:{name:'搪瓷盆',short:'盆',zone:'盆内底',camera:{yaw:0,pitch:.88,distance:6},rim:'#183d52',rimRadius:1.66,rimY:.44,rimTube:.055,foot:1.02,floor:-.53,roughness:.29,printRadius:1.05,inner:[[0,-.39],[.94,-.39],[1.02,-.36],[1.14,-.27],[1.43,.23],[1.48,.35],[1.66,.44]],profile:[[.001,-.48],[.94,-.48],[1.02,-.51],[1.10,-.47],[1.20,-.32],[1.50,.20],[1.55,.32],[1.68,.39],[1.66,.44],[1.48,.35],[1.43,.23],[1.14,-.27],[1.02,-.36],[.94,-.39],[.001,-.39]]}
 };
 const families={enamel:'搪瓷器皿',textile:'家居布艺',bags:'包袋',daily:'随身用品',apparel:'衣服'};
 for(const c of Object.values(data))c.family='enamel';
 Object.assign(data,{
  cushion:{name:'抱枕',short:'抱枕',family:'textile',size:[2.25,2.25,.96],camera:{yaw:.50,pitch:.16,distance:5.4}},
  pillow:{name:'枕头',short:'枕头',family:'textile',size:[3,1.9,.84],camera:{yaw:.40,pitch:.20,distance:5.7}},
  duvet:{name:'被套',short:'被套',family:'textile',size:[2.7,3.25,.18],camera:{yaw:.26,pitch:.30,distance:6.3}},
  backpack:{name:'书包',short:'书包',family:'bags',size:[1.85,2.5,.88],camera:{yaw:.48,pitch:.18,distance:5.8}},
  tote:{name:'帆布袋',short:'帆布袋',family:'bags',size:[2.15,2.25,.60],camera:{yaw:.32,pitch:.22,distance:6.2}},
  notebook:{name:'笔记本',short:'笔记本',family:'daily',size:[2.04,2.86,.35],camera:{yaw:.42,pitch:.20,distance:5.7}},
  phonecase:{name:'手机壳',short:'手机壳',family:'daily',size:[1.52,3.06,.25],camera:{yaw:.38,pitch:.16,distance:5.7}},
  tshirt:{name:'T 恤',short:'T 恤',family:'apparel',size:[3.34,2.94,.25],camera:{yaw:.12,pitch:.08,distance:6.4}}
 });
 const surface=type=>!!data[type]&&data[type].family!=='enamel';
 const textile=type=>['textile','bags','apparel'].includes(data[type]?.family);
 const materialShort=type=>type==='notebook'?'封面色':type==='phonecase'?'壳色':textile(type)?'布色':'釉色';
 const materialLabel=type=>type==='notebook'?'封面颜色':type==='phonecase'?'壳体颜色':textile(type)?'布料颜色':'釉色';
 const material=type=>({color:'white',finish:surface(type)?'matte':'gloss'});
 const copy=x=>JSON.parse(JSON.stringify(x));
 const get=type=>data[type]||data.cup;
 // row limits follow each lathed profile. Disk radii and wall heights are in model units.
 const regions={
  cup:{
   body:{label:'杯身正面',mode:'wall',rows:[0,7],low:-.68,high:.68,span:2.04,radius:.986},
   outerFill:{label:'杯身满铺',mode:'wrap',rows:[4,7],radius:.986,repeat:7,pitch:.34},
   back:{label:'杯身背面',mode:'wall',rows:[0,7],low:-.68,high:.68,span:2.04,radius:.986,yaw:Math.PI},
   band:{label:'杯口环带',mode:'belt',rows:[0,7],low:.44,high:.88,count:14,pitch:.23}
  },
  plate:{
   center:{label:'盘心',mode:'disk',rows:[10,14],high:1.08},
   innerFill:{label:'盘面满铺',mode:'faceFill',rows:[10,14],repeat:3},
   rim:{label:'盘沿花边',mode:'ring',rows:[10,14],low:1.05,high:1.46,count:18},
   back:{label:'盘背',mode:'back',rows:[0,8],high:1.30,pitch:-.65}
  },
  bowl:{
   center:{label:'碗内',mode:'disk',rows:[11,17],high:.84},
   outer:{label:'碗身外壁',mode:'wall',rows:[3,10],low:-.45,high:.56,span:1.2,radius:.85,pitch:.18,around:true},
   outerFill:{label:'外壁满铺',mode:'wrap',rows:[4,9],radius:.86,repeat:8,pitch:.24},
   innerFill:{label:'碗内满铺',mode:'faceFill',rows:[11,17],repeat:3},
   rim:{label:'碗口花边',mode:'ring',rows:[11,17],low:.86,high:1.12,count:14}
  },
  basin:{
   center:{label:'盆内底',mode:'disk',rows:[8,14],high:1.05},
   outer:{label:'盆身外壁',mode:'wall',rows:[3,8],low:-.35,high:.31,span:.60,radius:1.32,pitch:.13,around:true},
   outerFill:{label:'外壁满铺',mode:'wrap',rows:[3,7],radius:1.37,repeat:14,pitch:.21},
   innerFill:{label:'盆内满铺',mode:'faceFill',rows:[8,14],repeat:4},
   rim:{label:'盆口花边',mode:'ring',rows:[8,14],low:1.38,high:1.64,count:24}
  }
 };
 for(const type of Object.keys(data).filter(surface)){
  regions[type]={};
  const faces=type==='backpack'?['front','pocket','back']:type==='phonecase'?['front']:['front','back'];
  for(const face of faces){
   const label=type==='notebook'?(face==='front'?'封面':'封底'):type==='phonecase'?'壳背':face==='front'?(type==='backpack'?'主包正面':'正面'):face==='pocket'?'前袋':'背面';
   regions[type][face]={label,mode:'fabric',face,repeat:3,pitch:face==='back'&&['pillow','duvet'].includes(type)?-.32:data[type].camera.pitch,yaw:face==='back'?Math.PI+.15:data[type].camera.yaw};
   regions[type][face+'Fill']={...regions[type][face],label:label+'满铺',mode:'fabricFill'};
  }
  if(type==='duvet')regions[type].border={label:'正面边缘',mode:'fabricBorder',face:'front',repeat:6};
 }
 const region=(type,zone)=>regions[type]?.[zone]||Object.values(regions[type]||regions.cup)[0];
 const isFill=r=>['wrap','faceFill','fabricFill','fabricBorder'].includes(r.mode);
 const primaryFill=(type,p)=>surface(type)?(region(type,p?.zone).face||'front')+'Fill':type==='plate'?'innerFill':'outerFill';
 const coveragePercent=value=>Number.isFinite(value)?Math.max(5,Math.min(100,value)):100;
 function fillWindow(r,p){
  const w=coveragePercent(p.coverWidth)/200,h=coveragePercent(p.coverHeight)/200;
  const wall=r.mode==='wrap',x=(p.x||0)/120,y=-(p.y||0)/120;
  const bounded=(v,half)=>Math.max(half-.5,Math.min(.5-half,v));
  return [wall?x:bounded(x,w),(wall ? .5 : 0)+bounded(y,h),w,h];
 }
 function coverPatch(d,mode){
  const p=d.vesselPlacement,r=region(d.canvas,p.zone),fill=isFill(r);
  const localZone=surface(d.canvas)?r.face:['wall','disk','back'].includes(r.mode)?p.zone:['faceFill','ring'].includes(r.mode)?'center':d.canvas==='cup'?'body':'outer';
  const zone=mode==='local'?localZone:mode==='custom'&&fill?p.zone:primaryFill(d.canvas,p);
  const patch=zone===p.zone?{vesselPlacement:{...p}}:zonePatch(d,zone);
  const next=patch.vesselPlacement;
  if(mode==='full'){next.coverWidth=100;next.coverHeight=100;}
  if(mode==='custom'&&!fill&&next.coverWidth==null){next.coverWidth=55;next.coverHeight=70;}
  return patch;
 }
 // On a closed wall one full revolution must advance by whole texture periods
 // in BOTH texture axes, including after a twist. A disk has no such constraint.
 function fillCount(r,scale=100){
  const limit=r.mode==='wrap'?24:10,s=Math.max(40,Math.min(160,scale));
  return Math.round(s<100?r.repeat+(100-s)*(limit-r.repeat)/60:1+(160-s)*(r.repeat-1)/60);
 }
 function fillScale(r,count){
  const limit=r.mode==='wrap'?24:10,n=Math.max(1,Math.min(limit,count));
  return n<r.repeat?160-(n-1)*60/(r.repeat-1):100-(n-r.repeat)*60/(limit-r.repeat);
 }
 function fillBasis(r,p){
  const count=fillCount(r,p.scale),angle=(p.rotation||0)*Math.PI/180;
  const a=count*Math.cos(angle),b=count*Math.sin(angle);
  return r.mode==='wrap'?[Math.round(a),Math.round(b)]:[a,b];
 }
 function fillAspect(r,winding,length){
  if(r.mode!=='wrap')return 1;
  const n=Math.hypot(...winding);
  return Math.max(1,Math.round(n*length/(2*Math.PI*r.radius)))/n;
 }
 const glazes={white:'#f5f1e6',cream:'#e9ddc6',blue:'#c9dcdf'};
 const glazeHex=value=>/^#[0-9a-f]{6}$/i.test(value)?value.toLowerCase():Object.hasOwn(glazes,value)?glazes[value]:glazes.white;
 function regionCamera(type,placement){
  const r=region(type,placement?.zone),base=get(type).camera;
  return {...base,pitch:r.pitch??base.pitch,yaw:(r.yaw??base.yaw)+(r.around?(placement?.x||0)*Math.PI/60:0)};
 }
 function zonePatch(d,zone){
  if(!regions[d.canvas]?.[zone])throw Error('该器型没有这个印花位置');
  const {zones={},faces={},...current}=d.vesselPlacement;
  const placed={...placement(d.canvas),...zones[zone],zone};
  const currentFace=region(d.canvas,current.zone).face,nextFace=region(d.canvas,zone).face,nextFaces={...faces,[currentFace]:current.zone};
  // Selecting the backpack's print position moves the motif; it must not copy it.
  if(d.canvas==='backpack'){const active=['front','pocket'].includes(nextFace)?nextFace:currentFace;if(['front','pocket'].includes(active))delete nextFaces[active==='front'?'pocket':'front'];}
  return {vesselPlacement:{...placed,zones:{...zones,[current.zone]:current},...(surface(d.canvas)?{faces:nextFaces}:{})},cupCamera:regionCamera(d.canvas,placed)};
 }
 // Opposite fabric faces retain their layout. Backpack front/pocket are alternatives.
 function facePlacements(type,p){const result={};for(const [face,zone]of Object.entries(p.faces||{})){if(p.zones?.[zone]&&region(type,zone).face===face)result[face]=p.zones[zone];}result[region(type,p.zone).face]=p;if(type==='backpack'&&result.front&&result.pocket)delete result[region(type,p.zone).face==='pocket'?'front':'pocket'];return result;}
 const placement=type=>({zone:surface(type)?'front':type==='cup'?'body':type==='basin'?'outer':'center',x:0,y:0,scale:100,rotation:0});
 function remember(d){d.vesselStates={...(d.vesselStates||{}),[d.canvas]:{placement:copy(d.vesselPlacement||placement(d.canvas)),camera:copy(d.cupCamera||get(d.canvas).camera),material:copy(d.cupMaterial||material(d.canvas))}};}
 function switchPatch(d,type){if(!data[type])throw Error('器型尚未接入');const states=copy(d.vesselStates||{});states[d.canvas]={placement:copy(d.vesselPlacement||placement(d.canvas)),camera:copy(d.cupCamera||get(d.canvas).camera),material:copy(d.cupMaterial||material(d.canvas))};const target=states[type]||{placement:placement(type),camera:regionCamera(type,placement(type)),material:material(type)};return {canvas:type,vesselStates:states,vesselPlacement:copy(target.placement),cupCamera:copy(target.camera),cupMaterial:copy(target.material)};}
 function height(type,r){const points=get(type).inner;for(let i=1;i<points.length;i++){if(r<=points[i][0]){const [x,y]=points[i-1],[xx,yy]=points[i];return y+(yy-y)*(r-x)/(xx-x);}}return points.at(-1)[1];}
 return {data,get,families,surface,textile,materialShort,materialLabel,material,facePlacements,regions,region,isFill,primaryFill,coveragePercent,fillWindow,coverPatch,fillCount,fillScale,fillBasis,fillAspect,regionCamera,zonePatch,glazeHex,placement,remember,switchPatch,height};
});
