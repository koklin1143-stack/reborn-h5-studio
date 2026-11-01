/* The full-frame photograph anchors the archive and its printable samples. */
(function(root,factory){
 if(typeof module==='object'&&module.exports)module.exports=factory();
 else root.PhotoCatalogue=factory();
})(globalThis,()=>[
 {key:'desheng',short:'德胜杯',type:'cup',name:'德胜号白搪瓷杯',credit:'Uuongkinghe',cc:'4.0',
  file:'“德胜”炮舰白搪瓷杯 20240314.jpg',collection:'武汉市中山舰博物馆',
  samples:[{key:'number',name:'杯身编号 20',region:[345,650,265,144],ink:'blue'},{key:'mark',name:'德胜铭字',region:[296,493,356,146],ink:'blue'},{key:'glaze',version:2,name:'旧釉肌理',region:[178,671,144,144],ink:'colour-circle'}],
  description:'乳白釉面上，蓝色的“德胜”和数字 20 仍很清楚。沿着杯口看一圈，可以看到磕落的釉和露出的深色金属。',
  tags:['杯','杯子','搪瓷杯','白','蓝','数字','20','德胜','铭文','喝水'],width:960,height:1133},
 {key:'westlake',short:'西湖纪念盘',type:'plate',name:'立鹤牌西湖博览会纪念盘',credit:'三猎',cc:'4.0',
  file:'立鹤牌西湖博览会纪念搪瓷盘.jpg',
  studyKey:'westlake-study',scanEllipse:[.505,.50,.34,.34],
  samples:[{key:'rosette',version:2,name:'盘沿点花',region:[248,448,84,78],ink:'blue'},{key:'letter',version:2,name:'盘沿「立」字',region:[638,446,91,96],ink:'blue'},{key:'garden',version:2,name:'盘心庭院人物',region:[326,191,323,323],ink:'colour-circle'},{key:'crane',name:'盘沿「鹤」字',region:[489,515,104,87],ink:'blue'}],
  description:'盘心绘着庭院里玩耍的孩子。蓝色题字与两朵小花围成一圈，和盘心的淡彩人物形成两层画面。',
  tags:['盘','盘子','纪念盘','西湖','博览会','立鹤','蓝','人物','孩子','花','铭文'],width:960,height:746},
 {key:'blue-enamel',short:'蓝釉碗',type:'bowl',name:'蓝釉卷纹碗',credit:'DoubleEyeDesign',cc:'3.0',
  file:'Enamel bowl.jpg',sourceTitle:'Enamel bowl',description:'碗壁的金色卷纹穿过深蓝，红釉聚在靠近口沿的地方。作者将这件作品记为玻璃质珐琅碗，这里用来对照釉色与曲面的关系。',
  samples:[{key:'scroll',name:'金色卷纹',region:[309,323,166,95],ink:'gold'},{key:'redglaze',version:2,name:'红蓝釉色',region:[200,446,110,110],ink:'colour-circle'}],
  tags:['碗','蓝','红','金','卷纹','珐琅','釉色'],width:960,height:720},
 {key:'pinghai',short:'平海脸盆',type:'basin',name:'平海铭文搪瓷脸盆',credit:'Uuongkinghe',cc:'4.0',
  exhibit:{occluded:true},
  file:'"平海"铭文搪瓷脸盆 20240314.jpg',collection:'武汉市中山舰博物馆',
  samples:[{key:'seal',name:'平海圆印',region:[360,336,267,264],ink:'seal'},{key:'enamel',version:2,name:'盆壁素釉',region:[244,571,128,128],ink:'colour-circle'}],
  description:'脸盆中央的“平海”二字围成一枚蓝色圆印。内壁到口沿之间留着大片素釉，边缘的磨损也保留在照片里。',
  tags:['盆','脸盆','面盆','平海','铭文','蓝','字','圆印','宽沿','洗脸'],width:960,height:960}
 ,{key:'granite',slot:'enamel-cup-02',short:'蓝斑杯',type:'cup',name:'蓝白斑纹搪瓷杯',credit:'Sobebunny',cc:'3.0',file:'Granitewaremug.jpg',
  exhibit:{roll:-1.2},
  description:'白釉上散落着大小不同的蓝斑，杯柄和杯内也能看到。适合截取一簇斑点，试成疏密不同的重复纹。',
  tags:['杯','杯子','蓝','白','斑点','斑纹','杯柄'],width:960,height:874,
  samples:[{key:'speckles',name:'蓝釉斑点',region:[337,343,159,154],ink:'blue'},{key:'inner',name:'杯内长斑',region:[270,133,167,91],ink:'blue'},{key:'mottle',version:2,name:'白釉蓝斑肌理',region:[225,435,169,169],ink:'colour-circle'}]},
 {key:'anniversary',slot:'enamel-basin-02',short:'蓝地盖盆',type:'basin',name:'蓝地纪念搪瓷盖盆',credit:'Fumikas Sagisavas',cc:'0',file:'Cobalt blue enamel basin.jpg',
  description:'深蓝盆身上印着“建厂七十周年”，上下各有一道白色几何边饰。这里取的是题字上方的一节折线。',
  tags:['盆','盖盆','蓝','白','边饰','几何','纪念','建厂'],width:960,height:720,
  samples:[{key:'border',name:'白釉折线边饰',region:[333,432,169,48],ink:'white'},{key:'year',name:'纪年款 1913',region:[348,565,151,51],ink:'white'}]},
 {key:'rays',slot:'enamel-cup-03',short:'放射纹口缸',type:'cup',name:'放射纹搪瓷口缸',credit:'瑞丽江的河水',cc:'4.0',file:'德宏州博物馆-现代-搪瓷口缸.jpg',collection:'德宏州博物馆',
  exhibit:{group:true,framedMaster:true,roll:8.5},
  description:'原照记录了同柜陈列的一组口缸。首页取前排右侧这一只，红色块下的短线随杯壁展开，形成扇面般的节奏。',
  tags:['杯','杯子','口缸','红','橙','放射','印花'],width:960,height:720,
  samples:[{key:'rays',name:'橙色放射边饰',region:[638,440,137,42],ink:'orange'},{key:'redprint',name:'红色印花',region:[677,391,99,50],ink:'red'}]}
]);
