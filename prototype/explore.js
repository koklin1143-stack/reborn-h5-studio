/* Browse slots stay stable; source identities distinguish photographs from older studies. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require('./model.js'),require('./photo-catalogue.js'),require('./object-display.js'));else root.Explore=factory(root.Studio,root.PhotoCatalogue,root.ObjectDisplay);})(globalThis,(studio,photos,display)=>{
 const plannedCategories=[
  ['glass','玻璃器皿'],['textile','纺织品'],['clock','钟表'],['camera','照相机'],
  ['radio','收音机'],['printing','印刷字模'],['sewing','缝纫机'],['gauge','工业仪表']
 ];
 const categories=[...studio.categories,...plannedCategories.map(([id,name])=>({id,name}))].map(({id,name})=>({id,name,open:id==='enamel'}));
 const illustrations=[
 {id:'enamel-cup-01',type:'cup',typeName:'杯',name:'花枝蓝沿杯',legacyItemId:'enamel-magpie',pattern:'magpie',description:'蓝色口沿收住温润的白色杯身，一枝花鸟留在日常视线里。',tags:['杯','杯子','茶杯','蓝','鸟','喜鹊','花枝','花鸟','花']},
 {id:'enamel-plate-01',type:'plate',typeName:'盘',name:'牡丹浅口盘',legacyItemId:'enamel-peony',pattern:'peony',description:'从盘心向外舒展的花朵，与一圈细细的蓝沿相互呼应。',tags:['盘','盘子','牡丹','红','花','圆','蓝','浅口']},
 {id:'enamel-bowl-01',type:'bowl',typeName:'碗',name:'花间深口碗',legacyItemId:'enamel-peony',pattern:'peony',description:'深弧形的碗壁承接光线，让柔和花色沿着曲面展开。',tags:['碗','饭碗','花','牡丹','蓝','深口']},
 {id:'enamel-basin-01',type:'basin',typeName:'盆',name:'双喜宽沿盆',legacyItemId:'enamel-happiness',pattern:'happiness',description:'宽阔盆沿围合一枚双喜纹样，留下熟悉的日用器物比例。',tags:['盆','脸盆','双喜','喜字','红','宽沿']}
 ].map((x,i)=>({...x,index:i,category:'enamel',subtitle:x.description,source:{kind:'project-illustration',label:'示意素材 · 非真实馆藏',creator:'项目代码绘制',license:'本项目演示使用；实物摄影与馆藏授权待补',verified:false,year:null,collectionNumber:null}}));
 const items=photos.map((photo,index)=>{
  const base=illustrations.find(o=>o.type===photo.type);
  return {...base,id:photo.slot||base.id,index,name:photo.name,description:photo.description,subtitle:photo.description,tags:photo.tags,photo,
   sourceObjectId:'object:photo-'+photo.key,source:{kind:'external-photo',verified:true,label:'同类实物 · 开放摄影',creator:photo.credit,
    license:photo.cc==='0'?'CC0':'CC BY-SA '+photo.cc,url:'https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(photo.file.replace(/ /g,'_')),
    licenseUrl:photo.cc==='0'?'https://creativecommons.org/publicdomain/zero/1.0/':'https://creativecommons.org/licenses/by-sa/'+photo.cc+'/',collection:photo.collection||null}};
 });
 const fromSource=id=>items.find(o=>o.sourceObjectId===id)||illustrations.find(o=>'object:'+o.id===id);
 const get=id=>items.find(x=>x.id===id),selected=s=>get(s.ui.exploreObjectId)||items[0];
 const exhibits=items.filter(o=>{const d=display?.[o.photo.key];return d?.mode==='cutout'&&d.asset===o.photo.key+'-cut';});
 const featured=s=>exhibits.find(o=>o.id===s.ui.exploreObjectId)||exhibits[0];
 function select(s,id){if(!get(id))throw Error('物件不存在');s.ui.exploreObjectId=id;s.ui.category='enamel';return get(id);}
 function cycle(s,delta){if(!exhibits.length)return;const i=exhibits.indexOf(featured(s));return select(s,exhibits[(i+delta%exhibits.length+exhibits.length)%exhibits.length].id);}
 function search(input){
  const query=String(input).trim();
  if(!query||categories.some(c=>!c.open&&query.includes(c.name)))return [];
  const q=query.replace(/花纹|纹样/g,'图案').replace(/花朵|花儿|花卉/g,'花').replace(/小鸟|鸟儿/g,'鸟')
   .replace(/洗脸|洗衣|洗手/g,'洗脸盆').replace(/喝水|喝茶|饮水/g,'杯').replace(/吃饭|盛饭/g,'碗').replace(/喜庆|结婚|婚礼/g,'双喜');
  const types=items.filter(i=>q.includes(i.typeName));
  const traits=['洗脸','斑纹','放射','边饰','几何','牡丹','花鸟','花枝','喜鹊','双喜','喜字','鸟','花','红','蓝','白','金','浅口','深口','宽沿','数字','20','德胜','平海','圆印','人物','西湖','立鹤','卷纹','铭文','纪念盘'].filter(t=>q.includes(t));
  return items.filter(i=>(!types.length||types.includes(i))&&traits.every(t=>i.tags.includes(t))&&
   (q.includes('搪瓷')||[i.name,...i.tags].some(t=>q.includes(t)||(q.length===1&&t.includes(q)))));
 }
 return {categories,items,exhibits,featured,illustrations,fromSource,get,selected,select,cycle,search};
});
