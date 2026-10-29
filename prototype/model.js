/* Pure domain model. No DOM or storage side effects. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.Studio=api;})(globalThis,()=>{
 'use strict';
 const categories=[{id:'enamel',name:'搪瓷',en:'ENAMEL',canvas:'cup'},{id:'stamp',name:'邮票',en:'POSTAGE',canvas:'stamp'},{id:'wrapper',name:'糖纸',en:'WRAPPER',canvas:'wrapper'},{id:'part',name:'工业零件',en:'INDUSTRIAL',canvas:'part'}];
 const items=[
  {id:'enamel-magpie',category:'enamel',pattern:'magpie',name:'喜鹊花枝',subtitle:'把枝头的喜悦，留在日常。',tags:['鸟','喜鹊','花鸟','蓝','搪瓷','杯','盘','花枝'],description:'以喜鹊与花枝为线索的自绘纹样练习。蓝色鸟羽、红色花朵与细枝形成轻盈的平衡，可以在杯身或盘面上重新安排。'},
  {id:'enamel-peony',category:'enamel',pattern:'peony',name:'牡丹花开',subtitle:'让一朵花，重新走进生活。',tags:['牡丹','花','红','植物','搪瓷','杯','盘'],description:'层叠花瓣与舒展叶片构成这枚牡丹示意纹样。尝试缩小花朵、偏移中心，让熟悉的花纹拥有新的留白。'},
  {id:'enamel-happiness',category:'enamel',pattern:'happiness',name:'双喜记忆',subtitle:'一份祝愿，一件日常之物。',tags:['双喜','喜字','红','婚礼','祝福','搪瓷','杯','盘'],description:'以双喜字与环形边饰组成的自绘吉语纹样。保留对称关系，也可以把它移向一侧，探索新的器物构图。'},
  {id:'stamp-magpie',category:'stamp',pattern:'magpie',name:'枝头来信',subtitle:'把一段日常，寄给未来。',tags:['邮票','鸟','蓝','信','花鸟'],description:'以齿孔纸边和花鸟构成的邮票形式练习。此为数字画布示意，不是真实邮政发行物。'},
  {id:'stamp-peony',category:'stamp',pattern:'peony',name:'花开邮记',subtitle:'方寸之间，也有花开的季节。',tags:['邮票','牡丹','花','红','信'],description:'在矩形票面中探索花与文字的比例。边齿、铭文与留白为自绘设计，不对应真实邮票藏品。'},
  {id:'wrapper-happiness',category:'wrapper',pattern:'happiness',name:'一颗喜糖',subtitle:'展开包装，也展开一份心意。',tags:['糖纸','包装','喜','红','糖','婚礼'],description:'保留横向包装与两侧折边的糖纸示意画布。中部图案可调整，边缘为折叠区域的视觉提示。'},
  {id:'wrapper-peony',category:'wrapper',pattern:'peony',name:'花间甜意',subtitle:'把花香留在一张小小的纸上。',tags:['糖纸','包装','牡丹','花','糖','绿'],description:'以花卉和舒展的横向版式构成包装图形练习。未经过食品包装合规或生产工艺确认。'},
  {id:'part-happiness',category:'part',pattern:'happiness',name:'转动的印记',subtitle:'结构之中，留下自己的记号。',tags:['工业','零件','齿轮','金属','圆','机械'],description:'自绘齿轮轮廓与中心铭牌组成的数字再设计画布。调整的是中心图形，不改变零件结构，也不代表可生产的机械设计。'}
 ];
 const rules=Object.freeze({complete:{points:20,name:'完成数字作品'},submit:{points:5,name:'参与演示投稿'}});
 const copy=x=>JSON.parse(JSON.stringify(x));
 const uid=(p='id')=>p+'-'+(globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2));
 const now=()=>new Date().toISOString();
 const getItem=id=>items.find(x=>x.id===id)||items[0];
 const category=id=>categories.find(x=>x.id===id)||categories[0];
 const blank=()=>({version:6,drafts:[],works:[],submissions:[],ledger:[],favorites:[],ui:{category:'enamel',positions:{},query:'',activeDraftId:null,route:'discover',filter:'works'},legacyImported:false});
 function validate(s){if(!s||s.version!==6||['drafts','works','submissions','ledger','favorites'].some(k=>!Array.isArray(s[k]))||!s.ui)throw Error('本地记录格式无法识别，已停止写入以保护原数据。');return s;}
 function fresh(itemId){const item=getItem(itemId);return {id:uid('draft'),lineageId:uid('design'),itemId:item.id,category:item.category,canvas:category(item.category).canvas,pattern:item.pattern,color:'white',scale:100,x:0,y:0,rotation:0,imageId:null,imageName:'',title:'',idea:'',createdAt:now(),updatedAt:now(),past:[],future:[]};}
 const fields=['itemId','category','canvas','pattern','color','scale','x','y','rotation','imageId','imageName','title','idea'];
 function snapshot(d){return Object.fromEntries(fields.map(k=>[k,d[k]]));}
 function edit(d,changes){const before=snapshot(d);const next={...before,...changes};if(JSON.stringify(before)===JSON.stringify(next))return false;d.past=[...d.past,before].slice(-40);d.future=[];Object.assign(d,changes,{updatedAt:now()});return true;}
 function undo(d){if(!d.past.length)return false;d.future.push(snapshot(d));Object.assign(d,d.past.pop(),{updatedAt:now()});return true;}
 function redo(d){if(!d.future.length)return false;d.past.push(snapshot(d));Object.assign(d,d.future.pop(),{updatedAt:now()});return true;}
 function addDraft(s,itemId){const d=fresh(itemId);s.drafts.push(d);s.ui.activeDraftId=d.id;return d;}
 function replace(d,itemId){const item=getItem(itemId);if(item.category!==d.category)throw Error('跨类别更换必须创建独立草稿。');edit(d,{itemId:item.id,pattern:item.pattern,imageId:null,imageName:''});}
 function award(s,type,sourceId,title){const eventId=type+':'+sourceId;if(s.ledger.some(x=>x.eventId===eventId))return;const rule=rules[type];s.ledger.push({id:uid('event'),eventId,type,sourceId,title,points:rule.points,label:rule.name,createdAt:now()});}
 function complete(s,draftId,title){const d=s.drafts.find(x=>x.id===draftId);if(!d)throw Error('草稿不存在。');const name=String(title||'').trim().slice(0,24);if(!name)throw Error('请为作品取个名字。');d.title=name;let w=s.works.find(x=>x.id===d.workId);if(w&&s.submissions.some(x=>x.workId===w.id))throw Error('投稿作品请编辑为新副本。');const record={...copy(d),id:w?.id||uid('work'),savedAt:now()};delete record.past;delete record.future;delete record.workId;if(w)Object.assign(w,record);else{s.works.push(record);w=record;}award(s,'complete',d.lineageId,name);s.drafts=s.drafts.filter(x=>x.id!==draftId);s.ui.activeDraftId=null;return w;}
 function resumeWork(s,id){const w=s.works.find(x=>x.id===id);if(!w)throw Error('作品不存在。');const existing=s.drafts.find(x=>x.workId===id);if(existing){s.ui.activeDraftId=existing.id;return existing;}const submitted=s.submissions.some(x=>x.workId===id);const d={...copy(w),id:uid('draft'),workId:submitted?null:w.id,lineageId:submitted?uid('design'):w.lineageId,past:[],future:[],createdAt:now(),updatedAt:now()};s.drafts.push(d);s.ui.activeDraftId=d.id;return d;}
 function submit(s,id,consent){if(!consent)throw Error('请先确认演示授权说明。');const existing=s.submissions.find(x=>x.workId===id);if(existing)return existing;const w=s.works.find(x=>x.id===id);if(!w)throw Error('请先保存作品。');const record={id:uid('submission'),workId:id,status:'已提交 · 演示',createdAt:now(),snapshot:copy(w),consentVersion:'local-demo-v1'};s.submissions.push(record);award(s,'submit',w.lineageId,w.title);return record;}
 function remove(s,type,id){if(!['drafts','works','submissions'].includes(type))throw Error('无效记录类型');s[type]=s[type].filter(x=>x.id!==id);if(type==='drafts'&&s.ui.activeDraftId===id)s.ui.activeDraftId=null;}
 function search(query){const q=String(query||'').trim().toLowerCase();if(!q)return [];const aliases={花朵:'花',花儿:'花',鸟儿:'鸟',复古:'搪瓷',机械:'零件',结婚:'喜',信件:'邮票',甜:'糖'};let normalized=q;Object.entries(aliases).forEach(([a,b])=>{normalized=normalized.replaceAll(a,b);});const mentioned=categories.filter(c=>normalized.includes(c.name));const motifTerms=['牡丹','喜鹊','双喜','喜字','鸟','红','蓝'].filter(t=>normalized.includes(t));const scored=items.map(item=>{const score=item.tags.reduce((sum,t)=>sum+(normalized.includes(t)?t.length:0),0)+(normalized.includes(item.name)?20:0);return {item,score};}).filter(x=>x.score>0&&(!mentioned.length||mentioned.some(c=>c.id===x.item.category))&&(!motifTerms.length||motifTerms.every(t=>x.item.tags.some(tag=>tag.includes(t))))).sort((a,b)=>b.score-a.score);return scored.map(x=>x.item);}
 return {categories,items,rules,copy,uid,now,getItem,category,blank,validate,fresh,snapshot,edit,undo,redo,addDraft,replace,complete,resumeWork,submit,remove,search};
});
