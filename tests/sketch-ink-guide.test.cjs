const test=require('node:test'),assert=require('node:assert/strict');
const {PNG}=require('pngjs');
const {sketchInkGuide,reserveGlaze}=require('../scripts/sketch-ink-guide.cjs');
const {generate}=require('../scripts/bailian-image.cjs');
const {roundLineStudy,separateLineInk}=require('../scripts/round-line-print.cjs');
const {readSketchField}=require('../scripts/sketch-ink-guide.cjs');

function drawing(rects){
 const img=new PNG({width:768,height:768});img.data.fill(255);
 for(const [x0,y0,x1,y1] of rects)for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++){
  if(Math.min(x-x0,x1-x,y-y0,y1-y)>4)continue;
  img.data.set([53,91,104,255],4*(y*768+x));
 }
 return 'data:image/png;base64,'+PNG.sync.write(img).toString('base64');
}
const big=[250,238,620,512],small=[120,325,252,425],source=drawing([big,small]);
const joined=drawing([big,small,[300,510,378,613],[491,510,573,602]]);
test('a rounded line study uses the current connected parts; two lobes and unrelated marks retain their own treatment',()=>{
 const guide=roundLineStudy(readSketchField(joined));assert.ok(guide);
 assert.equal(roundLineStudy(readSketchField(source)),null);
 assert.equal(roundLineStudy(readSketchField(drawing([big,[50,50,145,147],[64,600,177,712]]))),null);
 const img=PNG.sync.read(Buffer.from(guide.split(',')[1],'base64'));
 const RGB=(x,y)=>[...img.data.subarray(4*(Math.floor(y/2)*img.width+Math.floor(x/2)),4*(Math.floor(y/2)*img.width+Math.floor(x/2))+3)];
 assert.deepEqual(RGB(440,380),[32,63,102]);assert.deepEqual(RGB(60,85),[255,255,255]);
});
test('single-ink separation takes its edges from the AI image and leaves holes transparent on any glaze',()=>{
 const im=new PNG({width:5,height:1});
 im.data.set([30,45,64,255,255,255,255,255,146,146,146,255,14,20,25,130,0,0,0,0]);
 const result=PNG.sync.read(separateLineInk(PNG.sync.write(im),'#203f66')).data;
 assert.deepEqual([...result.subarray(0,4)],[32,63,102,255]);
 assert.equal(result[7],0);assert.ok(result[11]>30&&result[11]<225);assert.equal(result[15],130);assert.equal(result[19],0);
});
test('fair a full-size printed corner without losing the enclosed cut or a separate eye mark',()=>{
 const im=new PNG({width:256,height:256});im.data.fill(255);
 for(let y=25;y<226;y++)for(let x=25;x<226;x++){
  if((y<160&&x>135)||(x>50&&x<95&&y>50&&y<103))continue;
  im.data.set([9,24,43,255],(y*256+x)*4);
 }
 for(let y=72;y<78;y++)for(let x=67;x<73;x++)im.data.set([9,24,43,255],(y*256+x)*4);
 const out=PNG.sync.read(separateLineInk(PNG.sync.write(im),'#203f66'));
 const alpha=(x,y)=>out.data[(y*256+x)*4+3];
 assert.equal(alpha(70,74),255);assert.equal(alpha(58,68),0);assert.equal(alpha(114,85),255);
 assert.equal(alpha(200,80),0);assert.ok(alpha(25,25)<255);assert.ok(alpha(30,30)>250);
});
test('connected sketches use one real render with a geometry study; explicit spray and user ink plates take precedence',async()=>{
 for(const [hint,requestedInks,line] of [['',undefined,true],['粗线平涂朱红色',undefined,true],['朱红喷花',undefined,false],['',['#315487','#be4532'],false]]){
  const calls=[],design={subject:'一组相接的窗扇',traits:[],seams:[],technique:'vermilion',structure:'linear',redraw:'主面',unit:'横线相接',arrangement:'左低右高',void:'窗框留白'};
  const {data}=PNG.sync.read(await generate({consent:true,reference:'motif:enamel-peony',direction:'classic',method:'sketch',stage:'pattern',prompt:'',subject:hint,requestedInks,technique:'auto',image:joined},{
   env:{DASHSCOPE_API_KEY:'fixture',BAILIAN_WORKSPACE_ID:'llm-test'},fetcher:async(_url,req)=>{
    if(!req.body)return new Response(Buffer.from(joined.split(',')[1],'base64'));
    calls.push(JSON.parse(req.body));return calls.length===1?Response.json({choices:[{message:{content:JSON.stringify(design)}}]}):Response.json({data:[{url:'https://fixture.oss-cn-beijing.aliyuncs.com/print.png'}]});
   }}));
  assert.equal(calls.length,2);assert.equal(calls[1].image[0],joined);assert.equal(calls[1].prompt.includes('圆线分色试稿'),line);
  if(line){
   const i=4*(238*768+350);assert.deepEqual([...data.subarray(i,i+4)],hint?[190,69,50,255]:[32,63,102,255]);
   assert.equal(data[3],0);assert.ok(!calls[1].prompt.includes('朱红喷花'));
  }
 }
});
test('gaps at the tail joint in the archived three-stroke browser export still support open-tail printing',()=>{
 const real=require('node:fs').readFileSync(require.resolve('./fixtures/three-stroke-fish.png'));
 const guide=sketchInkGuide('data:image/png;base64,'+real.toString('base64'),'#c54227');
 assert.ok(guide?.smallFirst&&guide.horizontal);
});
test('a neighbouring small compartment stays unprinted and the wash is local to the join',()=>{
 const guide=sketchInkGuide(source,'#c54227');
 const image=PNG.sync.read(Buffer.from(guide.image.split(',')[1],'base64'));
 const green=(x,y)=>image.data[(Math.floor(y/4)*192+Math.floor(x/4))*4+1];
 assert.ok(green(182,375)>245);assert.ok(green(420,375)<100);
 assert.ok(green(265,375)>green(420,375)+45);
});
test('nested marks, disconnected objects, symmetric weights and single shapes keep free composition',()=>{
 for(const rects of [[big,[350,320,480,409]],[big,[22,325,150,425]],[[50,238,350,512],[350,238,650,512]],[big],[]]){
  assert.equal(sketchInkGuide(drawing(rects),'#c54227'),null);
 }
});
test('a flooded print opens only its small compartment, retains the rim and leaves already open or unrelated art unchanged',()=>{
 for(const direction of ['horizontal','vertical','mirrored']){
  const transform=([x,y])=>direction==='vertical'?[y,x]:direction==='mirrored'?[767-x,y]:[x,y];
  const rects=[big,small].map(([x,y,X,Y])=>{const [a,b]=transform([x,y]),[c,d]=transform([X,Y]);return [Math.min(a,c),Math.min(b,d),Math.max(a,c),Math.max(b,d)];});
  const guide=sketchInkGuide(drawing(rects),'#c54227');
  const print=new PNG({width:768,height:768});print.data.fill(255);
  for(const [x,y,X,Y] of rects)for(let v=y;v<=Y;v++)for(let u=x;u<=X;u++)print.data.set([197,66,39,255],4*(v*768+u));
  const result=reserveGlaze(PNG.sync.write(print),guide);assert.ok(result);
  const pixels=PNG.sync.read(result).data;
  function alpha(x,y){const [a,b]=transform([x,y]);return pixels[4*(b*768+a)+3];}
  assert.equal(alpha(182,375),0);assert.ok(alpha(122,375)>220);assert.ok(alpha(420,375)>220);assert.equal(alpha(40,40),0);
  assert.equal(reserveGlaze(result,guide),null);
  assert.equal(reserveGlaze(Buffer.from(drawing([[100,100,140,700]]).split(',')[1],'base64'),guide),null);
 }
});
test('one render uses original then style then ink guide only for an unassigned warm sketch',async()=>{
 for(const [hint,requestedInks,technique,count] of [['',undefined,'vermilion',3],['两扇窗',undefined,'vermilion',3],['左边是实色',undefined,'vermilion',2],['',undefined,'cobalt',2],['',['#184789','#ac4530'],'vermilion',1]]){
  const calls=[],design={subject:'相接的两扇窗',subjectOnly:true,traits:[],seams:[],structure:'linear',technique,redraw:'右侧压重',unit:'窗框相接处收笔',arrangement:'左轻右重',void:'小窗露釉'};
  const png=Buffer.from(source.split(',')[1],'base64');
  await generate({consent:true,reference:'motif:enamel-peony',direction:'classic',method:'sketch',stage:'pattern',prompt:'',subject:hint,requestedInks,technique:'auto',image:source},
   {env:{DASHSCOPE_API_KEY:'fixture',BAILIAN_WORKSPACE_ID:'llm-demo'},fetcher:async(_url,req)=>{
    if(!req.body)return new Response(png);
    calls.push(JSON.parse(req.body));
    return calls.length===1?Response.json({choices:[{message:{content:JSON.stringify(design)}}]}):Response.json({data:[{url:'https://fixture.oss-cn-beijing.aliyuncs.com/proof.png'}]});
   }});
  const image=calls[1].image;assert.equal(image[0],source);assert.equal(image.length,count);
  assert.equal(calls[1].prompt.includes('图三'),count===3);assert.equal(calls.length,2);
 }
});
