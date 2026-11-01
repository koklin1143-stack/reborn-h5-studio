(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require('./foundation.js'));else root.PatternEditor=factory(root.Studio);})(globalThis,M=>{
 const defaults={scale:100,x:0,y:0,rotation:0,color:'white',patternInk:'original',patternLayout:'single',cropWidth:100,cropHeight:100,sampleMirror:false,spotPaint:null,motifInks:{},sampleX:0,sampleY:0,sampleWidth:100,sampleHeight:100,sampleRotation:0,echoIterations:3,echoRatio:65,foldSlope:50,flowEnabled:false,flowKind:'wave',flowStrength:45,brightness:100,contrast:100,saturation:100,hue:0,patternOpacity:100,borderWidth:0,borderColor:'#355b68',inkColor:'#355b68',inkDark:'#1f4557',inkLight:'#c7b085',repeatDensity:4,repeatGap:12,flipX:false,flipY:false};
 // The printed layer owns its crop, layout and inks. The canvas ground and vessel belong to the draft.
 function confirmedSettings(d){return {...defaults,motifInks:{},color:d.color};}
 function hasConfirmedPrint(d){return Boolean(d.imageId&&d.patternConversion?.assetId===d.imageId);}
 function saveVersion(d,label){if(d.versions.length>=12)throw Error('已保存12个关键版本，请先删除一个再保存。');const name=String(label||'').trim().slice(0,24);if(!name)throw Error('请为版本取一个名字。');const version={id:M.uid('version'),name,createdAt:M.now(),snapshot:M.copy(M.snapshot(d))};d.versions.push(version);d.updatedAt=M.now();return version;}
 function restoreVersion(d,id){const v=d.versions.find(v=>v.id===id);if(!v)throw Error('版本已不存在。');M.edit(d,{...defaults,...M.copy(v.snapshot)});return d;}
 function removeVersion(d,id){d.versions=d.versions.filter(v=>v.id!==id);d.updatedAt=M.now();}
 return {defaults,confirmedSettings,hasConfirmedPrint,saveVersion,restoreVersion,removeVersion};
});
