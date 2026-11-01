/* Editable studies. The gallery cover is rendered from the same snapshot used to start a draft. */
(function(root,factory){
 if(typeof module==='object'&&module.exports)module.exports=factory(require('./explore.js'),require('./vessels.js'));
 else root.GalleryEditions=factory(root.Explore,root.Vessels);
})(globalThis,(explore,vessels)=>{
 const designs=[
  {key:'dinosaur',title:'恐龙',mine:'work-aa0d2dd2-4a3c-4a70-a951-2314aa26635a',type:'plate',zone:'center',glaze:'#000000',pitch:1.15,yaw:-.04978124999999878,technique:'蜂巢拼排',idea:'小恐龙',date:'2026-11-01T07:00:59.264Z',likes:38,saves:12,theme:true,settings:{patternLayout:'honeycomb',sampleMirror:true,sampleWidth:38,sampleHeight:38,sampleX:-9.892208456733385,sampleY:-7.7269457316346575,patternInk:'custom',inkColor:'#ffffff',repeatDensity:4,repeatGap:12}},
  {key:'grain',title:'碎青',author:'阿蓝',source:'granite',motif:'speckles',type:'bowl',zone:'outerFill',glaze:'#eee9d6',height:74,count:6,pitch:.30,technique:'蓝斑环带',idea:'满碗蓝点，看久了有点晃眼。碗口这圈白是后来留的。',likes:46,saves:15,settings:{patternLayout:'brick',scale:128,repeatDensity:2,repeatGap:0}},
  {key:'garden',title:'庭中一日',author:'禾页',source:'westlake',motif:'garden',type:'plate',zone:'center',glaze:'#ede4cb',pitch:1.19,technique:'盘心留白',idea:'把原盘放大才看清，院子里还有好几个人。我就取了中间这块。',likes:57,saves:24,theme:true},
  {key:'raptor',title:'侧立猛禽',mine:'work-0ae40ffb-d7db-4a20-be46-4632c5719736',type:'cup',zone:'outerFill',glaze:'#c46c98',pitch:.28666723632812474,yaw:-1.5072176558123918,technique:'交织满铺',idea:'',date:'2026-11-01T13:05:22.183Z',likes:31,saves:14,theme:true,placement:{x:8,y:-14,scale:140},settings:{patternLayout:'weave',sampleMirror:true,sampleX:-12.667502276518263,sampleY:-8.438636264510166,sampleWidth:40,sampleHeight:40,foldSlope:54,flowEnabled:true,flowKind:'swirl',flowStrength:0,patternInk:'custom',inkColor:'#ffffff',repeatDensity:4,repeatGap:12}},
  {key:'number',title:'二十号',author:'老周',source:'desheng',motif:'number',type:'cup',zone:'body',glaze:'#f2e8ce',pitch:.35,technique:'编号移印',idea:'20 是我的，别拿错啦。',likes:29,saves:8,theme:true},
  {key:'plum',title:'夜里开花',author:'橘灯',source:'westlake',motif:'rosette',type:'bowl',zone:'center',glaze:'#273e66',pitch:1.02,technique:'碗底点花',idea:'这碗要是盛面，得吃完才看得见底下那朵花。',likes:42,saves:19,theme:true,settings:{scale:76,patternInk:'duotone',inkDark:'#f6dddd',inkLight:'#fff8ea'}},
  {key:'tide',title:'潮线',author:'一禾',source:'anniversary',motif:'border',type:'basin',zone:'outerFill',glaze:'#225069',height:62,count:7,pitch:.19,technique:'折线环印',idea:'正面早就排好了。转到背面一看，两头没对上，又挪了半天。',likes:64,saves:22,theme:true,settings:{scale:141,sampleHeight:64,patternInk:'duotone',inkDark:'#f3dc9e',inkLight:'#fff5d7'}},
  {key:'vine',title:'藤过墙',author:'木合',source:'blue-enamel',motif:'scroll',type:'cup',zone:'body',glaze:'#384e43',pitch:.34,technique:'卷纹单印',idea:'试过并排放两枝，看着像两撇眉毛。还是一枝吧。',likes:35,saves:16,settings:{scale:150,patternInk:'duotone',inkDark:'#eed394',inkLight:'#fff5db'}},
  {key:'sun',title:'橘色节拍',author:'小杏',source:'rays',motif:'rays',type:'cup',zone:'outerFill',glaze:'#b96042',height:48,count:8,pitch:.29,technique:'放射纹腰带',idea:'这两样颜色放一起，我满脑子都是番茄炒蛋。',likes:27,saves:9,settings:{scale:136,sampleHeight:62,patternInk:'duotone',inkDark:'#fbd094',inkLight:'#fff0d4'}},
  {key:'harbor',title:'一枚海印',author:'南屿',source:'pinghai',motif:'seal',type:'plate',zone:'center',glaze:'#d8e5dd',pitch:1.23,technique:'印章居中',idea:'做的时候一直开着原图，怕把印上的字放倒了。',likes:33,saves:13,settings:{scale:145,patternInk:'custom',inkColor:'#304b60'}},
  {key:'year',title:'旧年月',author:'尺间',source:'anniversary',motif:'year',type:'basin',zone:'outer',glaze:'#7c3c33',pitch:.28,technique:'纪年款移印',idea:'1913 这行字得凑近看。我就喜欢这么小的。',likes:18,saves:7,settings:{scale:136,patternInk:'duotone',inkDark:'#f4d9a4',inkLight:'#fff2d3'}},
  {key:'crane',title:'一字落盘',author:'禾页',source:'westlake',motif:'crane',type:'plate',zone:'center',glaze:'#ece8db',pitch:1.22,technique:'单字朱印',idea:'「鹤」字有一笔是断的。我补过，看着太齐，又撤回了。',likes:36,saves:17,settings:{scale:138,patternInk:'custom',inkColor:'#a5392d'}}
 ];
 return designs.map((e,i)=>{
  const object=e.mine?null:explore.fromSource('object:photo-'+e.source);
  const sample=object?.photo.samples.find(m=>m.key===e.motif);
  const key=e.mine?'artist-'+e.key:e.source+'-'+e.motif;
  const version=sample?.version||1,patternKey=key+(version>1?'-v'+version:'');
  const assetId=e.mine?'community-pattern:'+e.key:'photo-print:'+key+':'+version;
  const id='motif:'+key,part=sample?{id,name:sample.name,assetId,fileKey:patternKey,sourceObjectId:object.sourceObjectId,region:sample.region,treatment:sample.ink.startsWith('colour-')?'colour':'ink',...(sample.ink==='colour-circle'?{shape:'circle'}:{}),size:1,x:.5,y:.5}:null;
  const placement={...vessels.placement(e.type),zone:e.zone,scale:e.count?vessels.fillScale(vessels.region(e.type,e.zone),e.count):100,coverHeight:e.height||100,coverWidth:100,...e.placement};
  const camera={...vessels.regionCamera(e.type,placement),pitch:e.pitch,...(e.yaw!=null?{yaw:e.yaw}:{})};
  const study=part?{sourceObjectId:object.sourceObjectId,sourceMotifId:id,pickedPhotoMotif:id,photoSelection:[{id}],provenance:{origin:'photo-study',aiGenerated:false,motifId:id,sourceObjectId:object.sourceObjectId,credit:object.source.creator,license:object.source.license,url:object.source.url,licenseUrl:object.source.licenseUrl,region:sample.region,parts:[part]}}:{provenance:{origin:'ai-pattern',aiGenerated:true}};
  return {id:'edition:'+e.key,kind:'example',creatorId:e.mine?'studio-original':'demo:'+e.author,authorName:e.author||'未署名',sourceWorkId:e.mine||null,communityOrder:i,
   simulatedLikes:e.likes,simulatedSaves:e.saves,title:e.title,idea:e.idea,sourceId:assetId,themeId:e.theme?'everyday-reborn':null,featured:true,
   createdAt:e.date||new Date(Date.UTC(2026,9,25,8,0,20-i)).toISOString(),coverKey:'edition-'+e.key,patternKey,technique:e.technique,
   snapshot:{itemId:object?.legacyItemId||'enamel-magpie',category:'enamel',canvas:e.type,pattern:object?.pattern||'magpie',color:'white',scale:100,x:0,y:0,rotation:0,imageId:assetId,imageName:sample?.name||e.title,
    inputStage:true,editorFormat:'pattern-v1',patternLayout:'single',...e.settings,cupMaterial:{color:e.glaze,finish:'gloss'},cupCamera:camera,vesselPlacement:placement,...study}};
 });
});
