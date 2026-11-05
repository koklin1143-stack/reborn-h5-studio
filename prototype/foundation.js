/* Canonical records layered onto the existing renderer/domain. No second application. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require('./community.js'));else factory(root.Studio);})(globalThis,M=>{
 'use strict';const VD=typeof module==='object'&&module.exports?require('./vessels.js'):globalThis.Vessels;
 const base=Object.fromEntries(['blank','validate','fresh','addDraft','edit','undo','redo','replace','complete','resumeWork','submit','inspire'].map(k=>[k,M[k]]));
 const heritageObjects=M.items.map(i=>({id:'object:'+i.id,legacyItemId:i.id,name:i.name,category:i.category,physicalForm:i.category==='enamel'?'plate':i.category,assetId:null,provenance:{kind:'illustration',verified:false,collectionNumber:null,manufacturer:null,year:null,photographer:null,license:'项目原创示意，非真实馆藏'},motifIds:['motif:'+i.id]}));
 const motifs=M.items.map(i=>({id:'motif:'+i.id,sourceObjectId:'object:'+i.id,name:i.name,assetId:null,format:'procedural-svg',pattern:i.pattern,origin:'project-demo',rightsStatus:'demo-only'}));
 const photos=typeof module==='object'&&module.exports?require('./photo-catalogue.js'):globalThis.PhotoCatalogue;
 for(const p of photos)for(const sample of p.samples){
  const key=p.key+'-'+sample.key,version=sample.version||1,fileKey=key+(version>1?'-v'+version:'');
  motifs.push({id:'motif:'+key,sourceObjectId:'object:photo-'+p.key,name:sample.name,fileKey,
   assetId:'photo-print:'+key+':'+version,format:'webp',origin:'photo-study',region:sample.region,treatment:sample.ink.startsWith('colour-')?'colour':'ink',shape:sample.ink==='colour-circle'?'circle':sample.ink==='colour-oval'?'ellipse':undefined,
   credit:p.credit,rightsStatus:p.cc==='0'?'CC0':'CC BY-SA '+p.cc});
 }
 const vessels=[...Object.keys(VD.data).map(type=>({id:'vessel:'+VD.get(type).family+':'+type,type,name:VD.get(type).name,category:'enamel',family:VD.get(type).family,preview:'procedural-3d',modelAssetId:null,modelStatus:'procedural',zones:Object.keys(VD.regions[type])})),...['stamp','wrapper','part'].map(type=>({id:'vessel:legacy:'+type,type,name:M.category(type).name+'旧版示意画布',category:type,preview:'legacy-2d',modelAssetId:null,modelStatus:'not-connected',zones:['center']}))];
 function normalize(d,kind='draft'){
  // Keep completed clothing works intact; editable drafts retain their pattern on an available object.
  if(kind==='draft'&&VD.data[d.canvas]?.retired)Object.assign(d,VD.switchPatch(d,'notebook'));
  const item=M.getItem(d.itemId),v=vessels.find(v=>v.type===d.canvas)||vessels[0];
  d.recordType=kind;d.sourceObjectId??='object:'+item.id;
  if(!customPhoto(d.provenance,d.sourceMotifId,d.sourceObjectId)&&!motifs.some(m=>m.origin==='photo-study'&&m.id===d.sourceMotifId&&m.sourceObjectId===d.sourceObjectId))d.sourceMotifId='motif:'+item.id;
  d.cupCamera??=M.copy(VD.get(d.canvas).camera);d.cupMaterial??=VD.material(d.canvas);d.cupPreviewMode??='three';d.versions??=[];d.cropWidth??=100;d.cropHeight??=100;d.patternInk??='original';d.editorFormat??='legacy';d.inputStage??=false;d.inspirationImageId??=null;d.inputImageName??='';d.spotPaint??=null;d.direction??='classic';d.sketchStrokes??=[];d.sketchSubject??='';d.primaryInput??='motif';d.inputTab??='motif';
  d.userImageAssetId=d.inputStage?(d.inspirationImageId||null):(d.imageId||null);d.prompt??='';d.sketchAssetId??=null;d.sketchForm??=null;d.patternConversion??=null;d.aiVariants??=[];d.selectedVariantId??=null;
  d.editParams={scale:d.scale??100,rotation:d.rotation??0,x:d.x??0,y:d.y??0,color:d.color||'white',cropWidth:d.cropWidth,cropHeight:d.cropHeight,patternInk:d.patternInk};
  d.sampleMirror??=false;d.motifInks??={};d.sampleX??=0;d.sampleY??=0;d.sampleWidth??=100;d.sampleHeight??=100;d.sampleRotation??=0;d.echoIterations??=3;d.echoRatio??=65;d.foldSlope??=50;d.flowEnabled??=false;d.flowKind??='wave';d.flowStrength??=45;d.brightness??=100;d.contrast??=100;d.saturation??=100;d.hue??=0;d.patternOpacity??=100;d.borderWidth??=0;d.borderColor??='#355b68';d.inkColor??='#355b68';d.inkDark??='#1f4557';d.inkLight??='#c7b085';d.patternLayout??='single';d.repeatDensity??=4;d.repeatGap??=12;d.flipX??=false;d.flipY??=false;d.vesselId=v.id;d.vesselType=v.type;
  d.vesselPlacement??={zone:v.zones[0],scale:100,x:0,y:0,rotation:0};
  if(!v.zones.includes(d.vesselPlacement.zone))d.vesselPlacement={...d.vesselPlacement,zone:v.zones[0]};
  VD.remember(d);d.saveStatus??='local';d.provenance??={origin:d.imageId?'personal-image':'project-demo',aiGenerated:false};
  if(kind==='work'){d.visibility='private';d.workId=d.id;delete d.draftId;}else{d.draftId=d.id;}
  return d;
 }
 function validate(input){
  if(!input||![6,7,8].includes(input.version))throw Error('本地记录版本无法识别，保留原档案并停止写入。');
  const s=base.validate(input.version===8?{...input,version:7}:input);s.version=8;
  for(const d of s.drafts)normalize(d);for(const w of s.works)normalize(w,'work');
  for(const sub of s.submissions){sub.recordType='submission';sub.submissionId=sub.id;normalize(sub.snapshot,'work');}
  for(const e of s.ledger)normalizeEvent(e);
  for(const p of s.publications)normalize(p.snapshot,'work');
  return s;
 }
 function normalizeEvent(e){Object.assign(e,{recordType:'pointEvent',pointEventId:e.id,scope:'local-demo'});if(e.snapshot)normalize(e.snapshot,'work');return e;}
 function customPhoto(p,id,objectId){return p?.origin==='photo-study'&&p.sourceObjectId===objectId&&p.parts?.some(m=>m.custom&&m.id===id&&m.sourceObjectId===objectId);}
 function patch(changes){const next={...changes};if((next.imageId!==undefined||next.userImageAssetId!==undefined)&&!next.provenance)next.provenance={origin:(next.userImageAssetId??next.imageId)?'personal-image':'project-demo',aiGenerated:false};if(next.editParams)Object.assign(next,next.editParams);if(next.userImageAssetId!==undefined)next.imageId=next.userImageAssetId;
  if(next.sourceMotifId&&!customPhoto(next.provenance,next.sourceMotifId,next.provenance?.sourceObjectId)){const motif=motifs.find(m=>m.id===next.sourceMotifId);if(!motif)throw Error('纹样记录不存在');if(motif.origin!=='photo-study'){next.itemId=motif.sourceObjectId.slice(7);next.pattern=motif.pattern;}}
  if(next.vesselId||next.vesselType){const v=vessels.find(v=>next.vesselId?v.id===next.vesselId:v.type===next.vesselType);if(!v||v.preview==='unavailable')throw Error('该器型预览待接入');next.canvas=v.type;}
  return next;
 }
 Object.assign(M,{heritageObjects,motifs,vessels,normalizeRecord:normalize,
  blank:()=>validate(base.blank()),validate,
  switchVessel:(d,type)=>{if(d.category!=='enamel')throw Error('该类别器型待接入');M.edit(d,VD.switchPatch(d,type));return d;},
  fresh:id=>normalize(base.fresh(id)),addDraft:(s,id)=>normalize(base.addDraft(s,id)),
  edit:(d,changes)=>{const p=patch(changes);if(p.canvas&&vessels.find(v=>v.type===p.canvas)?.category!==d.category)throw Error('器型与当前画布类别不兼容');if(p.itemId&&M.getItem(p.itemId).category!==d.category)throw Error('跨类别更换必须创建独立草稿。');const changed=base.edit(d,p);normalize(d);return changed;},
  undo:d=>{const type=d.canvas,zone=d.vesselPlacement?.zone,changed=base.undo(d);if(type!==d.canvas)d.cupCamera=M.copy(d.vesselStates?.[d.canvas]?.camera||VD.get(d.canvas).camera);else if(zone!==d.vesselPlacement?.zone)d.cupCamera=VD.regionCamera(d.canvas,d.vesselPlacement);normalize(d);return changed;},redo:d=>{const type=d.canvas,zone=d.vesselPlacement?.zone,changed=base.redo(d);if(type!==d.canvas)d.cupCamera=M.copy(d.vesselStates?.[d.canvas]?.camera||VD.get(d.canvas).camera);else if(zone!==d.vesselPlacement?.zone)d.cupCamera=VD.regionCamera(d.canvas,d.vesselPlacement);normalize(d);return changed;},
  replace:(d,id)=>{const item=M.getItem(id);if(item.category!==d.category)throw Error('跨类别更换必须创建独立草稿。');base.edit(d,patch({sourceMotifId:"motif:"+item.id,itemId:item.id,pattern:item.pattern,imageId:null,imageName:'',...(d.inputStage?{primaryInput:'motif'}:{})}));return normalize(d);},
  complete:(s,id,title)=>{const w=base.complete(s,id,title);normalize(w,'work');s.ledger.forEach(normalizeEvent);return w;},
  resumeWork:(s,id)=>normalize(base.resumeWork(s,id)),inspire:(s,id)=>normalize(base.inspire(s,id)),
  submit:(s,id,consent)=>{const sub=base.submit(s,id,consent);sub.recordType='submission';sub.submissionId=sub.id;normalize(sub.snapshot,'work');s.ledger.forEach(normalizeEvent);return sub;}
 });
 return M;
});
