const test=require('node:test'),assert=require('node:assert/strict'),{PNG}=require('pngjs');
const {partAssignments}=require('../prototype/pattern-grammar.js');
const {regionMap,recolour}=require('../scripts/region-ink.cjs');
const {generate}=require('../scripts/bailian-image.cjs');
const words='龙，龙的角和眼睛是白色的，身体是绿色的';
const targets=partAssignments(words);
test('both noun-first and colour-first clauses retain each explicitly named part',()=>{
  assert.deepEqual(targets,[{part:'角',hex:'#ffffff'},{part:'眼睛',hex:'#ffffff'},{part:'身体',hex:'#518467'}]);
  assert.deepEqual(partAssignments('白色的角和眼睛，绿色身体'),targets);
  assert.deepEqual(partAssignments('角、眼睛都用米白，身体用墨绿').map(p=>p.hex),['#fffaf0','#fffaf0','#335e51']);
});
function fixture(){
  const png=new PNG({width:160,height:128}),p=png.data;
  function rect(l,t,r,b){for(let y=t;y<b;y++)for(let x=l;x<r;x++)p.set([147,45,26,255],(y*160+x)*4);}
  rect(15,62,150,119);rect(44,12,60,59);rect(79,19,95,59);
  for(let y=75;y<87;y++)for(let x=43;x<55;x++)p.fill(0,(y*160+x)*4,(y*160+x)*4+4);
  const bytes=PNG.sync.write(png),map=regionMap(bytes);
  const at=(x,y)=>map.labels[(Math.floor((y-map.t+.5)*map.scale)+6)*map.w+Math.floor((x-map.l+.5)*map.scale)+6];
  return {png,bytes,map,parts:{角:[at(52,29),at(87,35)],眼睛:[at(49,81)]}};
}
test('white ink, transparent openings and the selected source survive local separation',()=>{
  const {png,bytes,map,parts}=fixture(),choices=[parts.角,parts.眼睛,[]];
  const result=PNG.sync.read(recolour(map,targets,choices)),p=result.data;
  const at=(x,y)=>[...p.subarray((y*160+x)*4,(y*160+x)*4+4)];
  assert.deepEqual(at(52,29),[255,255,255,255]);assert.deepEqual(at(87,35),at(52,29));
  assert.deepEqual(at(49,81),at(52,29));assert.deepEqual(at(99,91),[81,132,103,255]);assert.equal(at(2,2)[3],0);
  assert.deepEqual(PNG.sync.read(bytes).data,map.png.data);
  for(let y=0;y<128;y++)for(let x=0;x<160;x++)if(x<43||x>=55||y<75||y>=87)assert.equal(at(x,y)[3],png.data[(y*160+x)*4+3]);
  assert.throws(()=>recolour(map,targets,[parts.角,[],[]]),/定位/);
  assert.throws(()=>recolour(map,targets,[parts.角,parts.角,[]]),/重叠/);
});
test('a verified region map is keyed by subject parts, independent of word order and new ink values, with no image calls',async()=>{
  const {bytes,parts}=fixture(),calls=[];
  const input={method:'sketch',reference:'motif:enamel-magpie',direction:'classic',technique:'auto',stage:'recolour',prompt:'',subject:words,consent:true,image:'data:image/png;base64,'+bytes.toString('base64')};
  const options={env:{DASHSCOPE_API_KEY:'fixture',BAILIAN_WORKSPACE_ID:'llm-fixture'},fetcher:async(url,req)=>{
    assert.match(String(url),/chat\/completions$/);const body=JSON.parse(req.body);calls.push(body);
    return Response.json({choices:[{message:{content:JSON.stringify({parts:{...parts,嘴:[]}})}}]});
  }};
  const a=await generate(input,options),b=await generate({...input,subject:'身体是绿色的，眼睛和角是白色的'},options);
  assert.deepEqual(a,b);assert.equal(calls.length,2);
  const c=await generate({...input,subject:'身体是朱红色的，眼睛和角是白色的'},options);assert.notDeepEqual(a,c);assert.equal(calls.length,2);
});
test('a mouth mistakenly included with an eye is excluded and audited; unresolved assignments are not saved',async()=>{
  const {bytes,parts}=fixture(),input={method:'sketch',reference:'motif:enamel-magpie',direction:'classic',technique:'auto',stage:'recolour',prompt:'',consent:true,image:'data:image/png;base64,'+bytes.toString('base64')};
  let calls=0;
  const reply=value=>Response.json({choices:[{message:{content:JSON.stringify(value)}}]});
  const options={env:{DASHSCOPE_API_KEY:'fixture',BAILIAN_WORKSPACE_ID:'llm-fixture'},fetcher:async()=>{
   calls++;return reply(calls===1?{parts:{瞳孔:[...parts.眼睛,1],嘴:[1]}}:{瞳孔:parts.眼睛,嘴:[1]});
  }};
  const ink=PNG.sync.read(await generate({...input,subject:'瞳孔白色，身体绿色'},options));
  assert.deepEqual([...ink.data.subarray(4*(81*160+49),4*(81*160+49)+4)],[255,255,255,255]);assert.equal(calls,2);
  const missing={...input,subject:'翅膀白色，身体绿色'};
  for(let i=0;i<2;i++)await assert.rejects(generate(missing,{...options,fetcher:async()=>{calls++;return reply({parts:{翅膀:[]}});}}),{status:422});
  assert.equal(calls,6);
});
test('a new bound-colour sketch renders its subject exactly once before local region colouring',async()=>{
  const {png}=fixture();const opaque=PNG.sync.read(PNG.sync.write(png));
  for(let y=0;y<128;y++)for(let x=0;x<160;x++){
    const i=(y*160+x)*4;
    const code=y>=75&&y<87&&x>=43&&x<55?[0,255,0]:!opaque.data[i+3]?[255,255,255]:y<62?[255,0,0]:[0,0,255];
    opaque.data.set([...code,255],i);
  }
  const out=PNG.sync.write(opaque),calls=[];
  const opts={env:{DASHSCOPE_API_KEY:'fixture',BAILIAN_WORKSPACE_ID:'llm-fixture'},fetcher:async(url,req)=>{
   if(!req.body)return new Response(out);
   const body=JSON.parse(req.body);calls.push(body);
   if(body.n===1)return Response.json({data:[{url:'https://fixture.oss-cn-beijing.aliyuncs.com/print.png'}]});
   const val=calls.length===1?{subject:'龙',structure:'linear',traits:[],seams:[],redraw:'保持轮廓',unit:'转角',arrangement:'居中',void:'留白'}:{parts:{角:[2,3],眼睛:[4],嘴:[]}};
   return Response.json({choices:[{message:{content:JSON.stringify(val)}}]});
  }};
  const data=await generate({consent:true,method:'sketch',reference:'motif:enamel-magpie',direction:'classic',technique:'auto',stage:'pattern',prompt:'',subject:words,image:'data:image/png;base64,'+out.toString('base64')},opts);
  const render=calls.filter(c=>c.n===1);assert.equal(render.length,1);assert.ok(!render[0].prompt.includes('身体是绿色'));
  assert.match(render[0].prompt,/角的全部可见部分用鲜红/);assert.match(render[0].prompt,/眼睛的全部可见部分用鲜绿/);
  const p=PNG.sync.read(data).data;assert.deepEqual([...p.subarray(4*(29*160+52),4*(29*160+52)+4)],[255,255,255,255]);
});
