const {test}=require('node:test'),assert=require('node:assert/strict');
const {generate,configured,model}=require('../scripts/bailian-image.cjs');
const env={BAILIAN_WORKSPACE_ID:'llm-localtest',DASHSCOPE_API_KEY:'fixture-only'};
const input={method:'text',reference:'motif:enamel-peony',direction:'modern',prompt:'桂花围成一圈',consent:true};
test('only eligible consented inputs can reach the paid provider',async()=>{
 let contacted=0;const fetcher=()=>{contacted++;throw Error('unexpected network')};
 for (const patch of [{consent:false},{method:'image',image:'https://example.com/pic'},{reference:'unlicensed'},{method:'text',image:'private image'},{prompt:''}]){
  await assert.rejects(generate({...input,...patch},{env,fetcher}),{status:400});
 }
 assert.equal(configured({...env,BAILIAN_WORKSPACE_ID:'outside.example'}),false);assert.equal(contacted,0);
});

test('a one-ink proof can use a small existing island for its accent without changing its geometry',()=>{
 const {applySpotInks}=require('../scripts/spot-print.cjs');
 const p=new PNG({width:64,height:64});p.data.fill(255);
 for(let y=10;y<40;y++)for(let x=3;x<33;x++)p.data.fill(0,(y*64+x)*4,(y*64+x)*4+3);
 for(let y=20;y<28;y++)for(let x=40;x<48;x++)p.data.fill(0,(y*64+x)*4,(y*64+x)*4+3);
 const out=PNG.sync.read(applySpotInks(PNG.sync.write(p),['#203f66','#bb4939']));
 const pixel=(x,y)=>[...out.data.slice((y*64+x)*4,(y*64+x)*4+4)];
 assert.deepEqual(pixel(10,12),[32,63,102,255]);assert.deepEqual(pixel(44,23),[187,73,57,255]);assert.equal(pixel(36,24)[3],0);
});

const shapeIdentity={subject:'狗',family:'quadruped',pose:'站立',facing:'向左',cue:'竖耳',count:1};
const {PNG}=require('pngjs');
const draw=new PNG({width:768,height:768});draw.data.fill(255);
for(let y=200;y<204;y++)for(let x=100;x<650;x++)draw.data.fill(0,(y*768+x)*4,(y*768+x)*4+3);
const rawSketch='data:image/png;base64,'+PNG.sync.write(draw).toString('base64');
const gestureImage='data:image/png;base64,R1VJREU=';
const approvedForm='data:image/png;base64,Rk9STQ==';
const imageReply=()=>Response.json({data:[{url:'https://dashscope-result.oss-cn-beijing.aliyuncs.com/print.png'}]});
const printProof=new PNG({width:3,height:1});
printProof.data.set([0,0,0,255,235,30,30,255,255,255,255,255]);
const pngReply=()=>new Response(PNG.sync.write(printProof));
test('the sketch conditions the form renderer and the reader records its particular gesture',async()=>{
 const bodies=[];
 await generate({...input,method:'sketch',stage:'shape',subject:'',image:rawSketch,gestureImage},{env,fetcher:async(_url,req)=>{
  if(!req.body)return pngReply();
  bodies.push(JSON.parse(req.body));
  if(bodies.length===1)return Response.json({choices:[{message:{content:JSON.stringify({...shapeIdentity,gesture:{axis:'头比肩低，身体向前探',proportion:'长身配短腿',accent:'尾尖有回钩'},redraw:'照搬错位的火柴腿'})}}]});
  return imageReply();
 }});
 assert.equal(bodies.length,2);assert.equal(bodies[0].messages[0].content[1].image_url.url,rawSketch);
 assert.equal(bodies[1].image.length,3);assert.equal(bodies[1].image[1],gestureImage);
 assert.ok(bodies[1].image[0].startsWith('data:image/png;base64,'));
 const ink=PNG.sync.read(Buffer.from(bodies[1].image[2].split(',')[1],'base64'));
 let retained=0;
 for(let i=0;i<ink.data.length;i+=4){
  if(ink.data[i]===255)continue;
  assert.equal(draw.data[i],0,'every supplied mark must come from the original drawing');retained++;
 }
 assert.ok(retained>0&&retained<550*4,'show only local pen passages');assert.ok(!bodies[1].image.includes(rawSketch));assert.match(bodies[1].prompt,/头比肩低，身体向前探/);assert.match(bodies[1].prompt,/狗/);assert.match(bodies[1].prompt,/竖耳/);
 assert.ok(!bodies[1].prompt.includes('照搬错位的火柴腿'));
 assert.ok(bodies[1].prompt.includes(require('../prototype/pattern-grammar.js').directions.modern),'the sketch renderer must receive the selected design direction before the shape is approved');
});
test('artistic redraw reads the sketch and conditions the renderer on its subject and enamel print rules alone',async()=>{
 const bodies=[];
 const sketch={...input,method:'sketch',stage:'shape',sketchMode:'redesign',image:rawSketch,layout:'border'};
 await generate(sketch,{env,fetcher:async(_url,req)=>{
  if(!req.body)return pngReply();
  bodies.push(JSON.parse(req.body));
  if(bodies.length===1)return Response.json({choices:[{message:{content:JSON.stringify(shapeIdentity)}}]});
  return imageReply();
 }});
 assert.equal(bodies[0].messages[0].content[1].image_url.url,rawSketch);
 assert.equal(bodies[1].image,undefined);
 assert.match(bodies[1].prompt,/狗.*站立.*向左/);
 assert.match(bodies[1].prompt,/重新决定外轮廓和比例/);
 const rules=require('../prototype/pattern-grammar.js');
 assert.ok(bodies[1].prompt.includes(rules.layouts.border.plate));
 for(const invalid of [{sketchMode:'unknown'},{gestureImage},{method:'image',stage:'pattern'}]){
  await assert.rejects(generate({...sketch,...invalid},{env,fetcher:()=>assert.fail('unexpected provider call')}),{status:400});
 }
});
test('unrecognized or malformed identity stops before shape generation',async()=>{
 for(const reading of [shapeIdentity,{unclear:true},{...shapeIdentity,pose:'照描火柴腿'},{...shapeIdentity,count:0}]){
  let count=0;
  await assert.rejects(generate({...input,method:'sketch',stage:'shape',image:rawSketch,gestureImage},{env,fetcher:async()=>{
   count++;return Response.json({choices:[{message:{content:JSON.stringify(reading)}}]});
  }}));
  assert.equal(count,1);
 }
});
test('decoration uses only the approved form and colour study, without repeating recognition',async()=>{
 const req={...input,method:'sketch',prompt:'',stage:'decorate',approved:true,identity:shapeIdentity,shapeImage:approvedForm};
 let n=0;
 for(const invalid of [{approved:false},{image:rawSketch},{shapeImage:null},{identity:null},{gestureImage},{stage:'pattern'},{method:'text'},{method:'image'}]){
  await assert.rejects(generate({...req,...invalid},{env,fetcher:()=>{n++;}}),{status:400});
 }
 assert.equal(n,0);
 const rendered=await generate(req,{env,fetcher:async(url,opts)=>{
  if(!opts.body)return pngReply();
  n++;assert.match(String(url),/images\/generations$/);const body=JSON.parse(opts.body);
  assert.deepEqual(body.image,[approvedForm]);assert.match(body.prompt,/#ff0000/);
  assert.ok(!opts.body.includes(rawSketch));return imageReply();
 }});
 assert.equal(n,1);
 const {data}=PNG.sync.read(rendered);
 assert.deepEqual([...data.slice(0,3)],[185,79,87]); // peony main ink
 assert.deepEqual([...data.slice(4,7)],[72,122,162]); // blue accent
 assert.equal(data[11],0); // glaze shows through
});
const design={subject:'两枚樱桃',traits:['长短果梗','错位的果实'],redraw:'心形大弧穿插',unit:'果蒂切口重复两次',arrangement:'左低右高',void:'右上留月牙'};
const planned=()=>Response.json({choices:[{message:{content:JSON.stringify(design)}}]});
test('explicit two or three ink requests assign independent plate colours, keep transparent paper and use one render',async()=>{
 for(const method of ['text','image','sketch']){
  const three=method!=='image';
  const requested=three?['#1049a4','#be4532','#c59330']:['#315487','#e56954'];
  const proof=new PNG({width:5,height:1});
  proof.data.set([0,0,255,255,255,0,0,255,255,255,0,255,255,255,255,255,255,130,130,255]);
  const calls=[];
  const bytes=await generate({...input,method,technique:'auto',stage:'pattern',prompt:method==='text'?'三色：钴蓝鱼身、朱红鱼尾、赭黄鱼鳍':'',
   ...(method==='sketch'?{gestureImage,subject:'一条鱼'}:{}),...(method==='text'?{}:{image:rawSketch,requestedInks:requested})},
   {env,fetcher:async(url,req)=>{
    if(!req.body)return new Response(PNG.sync.write(proof));
    const b=JSON.parse(req.body);calls.push(b);
    return calls.length===1?Response.json({choices:[{message:{content:JSON.stringify({...design,subject:'鱼',structure:'linear',seams:[],inkPalette:requested.map((hex,i)=>({hex,part:['鱼身','鱼尾','鱼鳍'][i]}))})}}]}):imageReply();
   }});
  assert.equal(calls.length,2);assert.match(calls[1].prompt,/鱼身/);assert.match(calls[1].prompt,/鱼尾/);
  if(method==='sketch'){assert.deepEqual(calls[1].image,[rawSketch]);assert.match(calls[1].prompt,/完整的创作者线稿/);}
  assert.doesNotMatch(calls[1].prompt,/只用一种饱满的钴蓝|仅用朱红色系/);
  const pixels=PNG.sync.read(bytes).data;
  for(let i=0;i<requested.length;i++)assert.equal('#'+pixels.subarray(i*4,i*4+3).toString('hex'),requested[i]);
  assert.equal(pixels[15],0);assert.ok(pixels[19]>50&&pixels[19]<190);
 }
 for(const requestedInks of [['#ffffff'],['#ffffff','#FFFFFF'],['red','gold']])
  await assert.rejects(generate({...input,technique:'auto',stage:'pattern',requestedInks},{env,fetcher:()=>assert.fail('must not call provider')}),{status:400});
});
test('a missing requested spot can reuse existing ink inside the planned part without painting into glaze',()=>{
 const {colourPlates,printPlates}=require('../scripts/spot-print.cjs');
 const p=new PNG({width:64,height:32});p.data.fill(255);
 for(let y=6;y<26;y++)for(let x=2;x<62;x++)if(x!==18)p.data.set(x<20?[255,255,0,255]:[0,0,255,255],(y*64+x)*4);
 const plates=colourPlates([{hex:'#1049a4',part:'身'},{hex:'#be4532',part:'尾',region:[0,0,350,1000]},{hex:'#c59330',part:'鳍',region:[450,0,680,450]}]);
 const out=printPlates(PNG.sync.write(p),plates);assert.ok(out.coverage.every(v=>v>.012));
 const data=PNG.sync.read(out.bytes).data;assert.equal(data[(16*64+18)*4+3],0);assert.equal(data[3],0);
 assert.deepEqual([...data.subarray((16*64+10)*4,(16*64+10)*4+3)],[190,69,50]);
});
test('stored explicit enamel treatments still carry through planning, drawing and approved-sketch colouring',async()=>{
 const grammar=require('../prototype/pattern-grammar.js');
 for(const [technique,style] of Object.entries(grammar.techniques)){
  for(const method of ['image','text']){
   const bodies=[],args={...input,method,technique,prompt:method==='text'?'一辆向左的自行车':'',...(method==='image'?{image:rawSketch}:{})};
   await generate(args,{env,fetcher:async(url,req)=>{
    if(!req.body)return pngReply();
    bodies.push(JSON.parse(req.body));return bodies.length===1?planned():imageReply();
   }});
   assert.match(bodies[0].messages[0].content[0].text,/主体、数量/);
   assert.ok(bodies[1].prompt.includes(style.finish));assert.ok(bodies[1].prompt.includes(grammar.layouts.single.plate));
   if(method==='text')assert.ok(bodies[1].prompt.includes(args.prompt));
   assert.equal(bodies[1].image,undefined);
  }
  const bodies=[];
  await generate({...input,method:'sketch',stage:'shape',technique,image:rawSketch,gestureImage},{env,fetcher:async(url,req)=>{
   if(!req.body)return pngReply();bodies.push(JSON.parse(req.body));
   if(bodies.length===1)return Response.json({choices:[{message:{content:JSON.stringify({...shapeIdentity,gesture:{axis:'身形向左',proportion:'右长左短',accent:'尾尖弯曲'}})}}]});
   return imageReply();
  }});
  assert.deepEqual(bodies[1].image,[rawSketch,gestureImage]);assert.match(bodies[1].prompt,/右长左短/);
  const bytes=await generate({...input,method:'sketch',stage:'decorate',technique,approved:true,identity:shapeIdentity,shapeImage:approvedForm},{env,fetcher:async(url,req)=>{
   if(!req.body)return pngReply();
   const b=JSON.parse(req.body);assert.deepEqual(b.image,[approvedForm]);assert.ok(b.prompt.includes(style.finish));assert.doesNotMatch(b.prompt,/#ff0000/);
   return imageReply();
  }});
  assert.deepEqual(PNG.sync.read(bytes).data,printProof.data,'do not remap approved tones with the old two-ink filter');
 }
 await assert.rejects(generate({...input,technique:'unknown'},{env,fetcher:()=>assert.fail('must reject before calling provider')}),{status:400});
});
test('automatic stamping uses three safe internal ink references and the user gesture, with one image call',async()=>{
 const fs=require('node:fs'),path=require('node:path'),rules=require('../prototype/pattern-grammar.js');
 for(const [method,technique] of [['text','cobalt'],['image','vermilion'],['sketch','softSpray']]){
  const calls=[];
  await generate({...input,technique:'auto',method,stage:'pattern',...(method!=='text'?{image:rawSketch}:{}),...(method==='sketch'?{gestureImage,subject:'眯眼猫'}:{})},
   {env,fetcher:async(_url,req)=>{
    if(!req.body)return pngReply();calls.push(JSON.parse(req.body));
    return calls.length===1?Response.json({choices:[{message:{content:JSON.stringify({...design,technique,structure:'linear',seams:[]})}}]}):imageReply();
   }});
  const swatch=fs.readFileSync(path.join(__dirname,'../scripts/print-references/ink-'+technique+'.png')).toString('base64');
  assert.equal(calls.length,2);
  assert.deepEqual(calls[1].image,[...(method==='sketch'?[rawSketch]:[]),'data:image/png;base64,'+swatch]);
  assert.ok(calls[1].prompt.includes(rules.techniques[technique].finish));
  if(method==='sketch')assert.equal(calls[0].messages[0].content[1].image_url.url,rawSketch);
 }
});
test('solid sketch proof check distinguishes fine hatching and hollow outlines from solid print faces',()=>{
 const {proofIssue}=require('../scripts/sketch-proof.cjs');
 function sample(paint){
  const p=new PNG({width:128,height:128});p.data.fill(255);
  for(let y=10;y<=110;y++)for(let x=10;x<=110;x++)if(paint(x,y)){
   const i=(y*128+x)*4;p.data[i]=8;p.data[i+1]=50;p.data[i+2]=144;
  }
  return PNG.sync.write(p);
 }
 assert.match(proofIssue(sample(x=>x%5<2)),/细线过密/);
 assert.match(proofIssue(sample((x,y)=>x<12||x>108||y<12||y>108)),/空心描线/);
 assert.equal(proofIssue(sample((x,y)=>x>32||y<26)),'');
});
test('seam feedback and unavailable optional reviews do not discard an available print or regenerate it',async()=>{
 for(const review of [{pass:true},{pass:false,issue:'颈部与胸前未挖出釉白留底'},'malformed','quota']){
  const bodies=[];
  const call=generate({...input,method:'sketch',stage:'pattern',technique:'auto',image:rawSketch,gestureImage,subject:'分叉枝条'},{env,fetcher:async(url,req)=>{
   if(!req.body)return pngReply();
   const body=JSON.parse(req.body);bodies.push(body);
   if(bodies.length===1)return Response.json({choices:[{message:{content:JSON.stringify({...design,structure:'linear',technique:'vermilion',seams:['两枝之间上窄下宽的开口']})}}]});
   if(bodies.length===2)return imageReply();
   if(review==='quota')return Response.json({}, {status:429});
   return Response.json({choices:[{message:{content:review==='malformed'?'…':JSON.stringify(review)}}]});
  }});
  assert.deepEqual(await call,PNG.sync.write(printProof));
  assert.equal(bodies.length,3);assert.equal(bodies[1].image[0],rawSketch);assert.match(bodies[1].prompt,/上窄下宽/);
  const content=bodies[2].messages[0].content;assert.equal(content[1].image_url.url,rawSketch);
  assert.equal(content[2].image_url.url,'data:image/png;base64,'+PNG.sync.write(printProof).toString('base64'));
 }
});
test('an unnamed ambiguous sketch can generate from its strokes, and an optional hint steers the same drawing',async()=>{
 for(const subject of ['', '一只低头的小鹿']){
  const calls=[];
  await generate({...input,subject,method:'sketch',stage:'pattern',technique:'auto',image:rawSketch,gestureImage},
   {env,fetcher:async(_url,req)=>{
    if(!req.body)return pngReply();calls.push(JSON.parse(req.body));
    return calls.length===1?Response.json({choices:[{message:{content:'{"unclear":true}'}}]}):imageReply();
   }});
  assert.equal(calls.length,2);
  assert.ok(calls[1].prompt.includes(subject||'手绘线纹'));
  assert.equal(calls[1].image[0],rawSketch);
 }
});
test('one visible trait suffices and a user-requested second version receives the last refinement',async()=>{
 const calls=[],refinement='打开颈部两块色面之间的空隙';
 await generate({...input,method:'sketch',stage:'pattern',technique:'auto',image:rawSketch,gestureImage,refinement},
  {env,fetcher:async(_url,req)=>{
   if(!req.body)return pngReply();calls.push(JSON.parse(req.body));
   return calls.length===1?Response.json({choices:[{message:{content:JSON.stringify({...design,traits:['向下倾斜']})}}]}):imageReply();
  }});
 assert.equal(calls.length,2);assert.ok(calls[1].prompt.includes(refinement));
 await assert.rejects(generate({...input,refinement},{env,fetcher:()=>assert.fail('unexpected call')}),{status:400});
});
test('complex monochrome and multi-ink sketches keep the original drawing and the same visible landmarks',async()=>{
 for(const requestedInks of [undefined,['#315487','#be4532'],['#315487','#be4532','#c59330']]){
  const calls=[],landmarks=['尖角眼在长吻上方','右侧远端弧线延至下沿'];
  await generate({...input,method:'sketch',stage:'pattern',technique:'auto',image:rawSketch,requestedInks},
   {env,fetcher:async(_url,req)=>{
    if(!req.body)return pngReply();
    calls.push(JSON.parse(req.body));
    if(calls.length===1)return Response.json({choices:[{message:{content:JSON.stringify({...design,technique:'vermilion',structure:'solid',seams:['一处开口'],landmarks,
     planes:{mass:[[10,10],[70,10],[70,70],[10,70]],reserve:[[20,20],[30,20],[30,30],[20,30]]}})}}]});
    return calls.length===2?imageReply():Response.json({choices:[{message:{content:'{"pass":true}'}}]});
   }});
  assert.equal(calls[0].messages[0].content[1].image_url.url,rawSketch);
  assert.equal(calls[1].image[0],rawSketch);
  for(const mark of landmarks)assert.ok(calls[1].prompt.includes(mark));
  for(const part of [design.redraw,design.void,design.unit])assert.ok(calls[1].prompt.includes(part));
  if(requestedInks){
   assert.deepEqual(calls[1].image,[rawSketch]);
   assert.ok(!calls[1].prompt.includes('仅用朱红色系'));
  }else{
   const study=require('node:fs').readFileSync(require.resolve('../scripts/print-references/open-vermilion.png'));
   assert.deepEqual(calls[1].image,[rawSketch,'data:image/png;base64,'+study.toString('base64')]);
   assert.ok(!calls[1].prompt.includes('派生纹元'));
  }
  assert.equal(calls.filter(c=>c.n===1).length,1);
 }
});
test('the structural colour guide puts a real unprinted opening into the main ink plane',()=>{
 const {inkPlan,validPlane}=require('../scripts/ink-plan.cjs');
 const mass=[[200,200],[800,200],[800,800],[200,800]],reserve=[[400,400],[800,400],[800,600],[400,600]];
 assert.ok(validPlane(mass));assert.ok(!validPlane([[10,10],[20,20],[30,30]]));
 const guide=PNG.sync.read(Buffer.from(inkPlan(rawSketch,{mass,reserve},'#c54227').split(',')[1],'base64'));
 const rgb=(x,y)=>[...guide.data.subarray(4*(y*guide.width+x),4*(y*guide.width+x)+3)];
 assert.deepEqual(rgb(180,144),[255,255,255]);assert.deepEqual(rgb(5,5),[255,255,255]);
 assert.ok(rgb(90,180)[0]>rgb(90,180)[2]+80);
});
test('a photo is interpreted first; only the structured design and approved grammar reach image generation',async()=>{
 const calls=[];const png=Buffer.from('89504e470d0a1a0a','hex');
 const fetcher=async(url,options)=>{
  calls.push([String(url),options]);
  if(calls.length===1)return planned();
  if(calls.length===2)return Response.json({data:[{url:'https://dashscope-result.oss-cn-beijing.aliyuncs.com/a.png'}]});
  return new Response(png);
 };
 const image='data:image/png;base64,QUJD';
 await generate({...input,method:'image',prompt:'无关旧输入',image,layout:'border'},{env,fetcher});
 const analysis=JSON.parse(calls[0][1].body),drawing=JSON.parse(calls[1][1].body);
 assert.match(calls[0][0],/chat\/completions$/);assert.equal(analysis.messages[0].content[1].image_url.url,image);
 assert.ok(!JSON.stringify(analysis).includes('无关旧输入'));assert.equal(drawing.n,1);assert.equal(drawing.model,model);
 assert.equal(drawing.image,undefined);assert.match(drawing.prompt,/长短果梗/);assert.match(drawing.prompt,/果蒂切口/);
 assert.match(drawing.prompt,/循环单元/);assert.match(drawing.prompt,/现代/);assert.equal(calls[2][1].headers,undefined);
});
test('ambiguous intent, stale rule version and unsupported plan are rejected before any paid call',async()=>{
 let n=0;const fetcher=()=>{n++;throw Error('unexpected')};
 for(const override of [{prompt:'团圆'},{prompt:'团圆',reading:'其他'},{layout:'unknown'},{ruleVersion:'old'}]){
  await assert.rejects(generate({...input,...override},{env,fetcher}));
 }
 assert.equal(n,0);
});
test('incomplete or unrecognizable visual analysis never triggers an image generation',async()=>{
 for(const content of ['{}','{"unclear":true}','[]','not JSON']){
  let n=0;await assert.rejects(generate(input,{env,fetcher:async()=>{n++;return Response.json({choices:[{message:{content}}]})}}));
  assert.equal(n,1);
 }
});
test('quota and unauthorized result URLs fail without downloading or returning the upstream message',async()=>{
 await assert.rejects(generate(input,{env,fetcher:async()=>Response.json({error:{code:'Throttling'}},{status:429})}),{status:429});
 let n=0;
 await assert.rejects(generate(input,{env,fetcher:async()=>{n++;return n===1?planned():Response.json({data:[{url:'https://example.net/other.png'}]});}}),{status:502});
 assert.equal(n,2);
});
