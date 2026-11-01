/* Isolated HTTPS origins and a local backend fixture; no paid provider calls. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),{createServer}=require('./serve.cjs');
const version=require('../prototype/pattern-grammar.js').version;
(async()=>{
 const frontend='https://koklin1143-stack.github.io',api='https://api.reborn.test',code='browser-test-access-code';
 const server=createServer({env:{PUBLIC_ORIGIN:api,ALLOWED_ORIGINS:frontend,AI_ACCESS_CODE:code,DASHSCOPE_API_KEY:'fixture',BAILIAN_WORKSPACE_ID:'llm-test'},
  fetcher:async()=>Response.json({choices:[{message:{content:JSON.stringify({ids:['enamel-plate-01']})}}]})});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const local='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844},hasTouch:true,isMobile:true});
  page.setDefaultTimeout(10000);
  const errors=[],generated=[];page.on('pageerror',e=>errors.push(e.message));
  await page.route(frontend+'/**',async route=>{
   const file=decodeURIComponent(new URL(route.request().url()).pathname.replace('/reborn-h5-studio/',''));
   const bytes=fs.readFileSync(path.resolve(file||'index.html'));
   await route.fulfill({status:200,body:bytes,contentType:file.endsWith('.webp')?'image/webp':'text/html; charset=utf-8'});
  });
  await page.route(api+'/**',async route=>{
   const request=route.request(),pathname=new URL(request.url()).pathname,headers=request.headers();
   if(pathname==='/api/pattern'&&request.method()==='POST'){
    assert.equal(headers.authorization,'Bearer '+code);generated.push(request.postDataJSON());
    return route.fulfill({headers:{'Access-Control-Allow-Origin':frontend},json:{ruleVersion:version,stage:'pattern',technique:'vermilion',planner:'fixture',design:{subject:'小鱼',traits:['单色'],redraw:'测试',unit:'鱼',arrangement:'单幅',void:'四周留白'},png:fs.readFileSync('previews/bailian-live/cherry.png').toString('base64')}});
   }
   const response=await fetch(local+pathname,{method:request.method(),headers:{...headers,host:new URL(local).host,origin:frontend},...(['POST','PUT'].includes(request.method())?{body:request.postData()}:{} )});
   await route.fulfill({status:response.status,headers:Object.fromEntries(response.headers),body:Buffer.from(await response.arrayBuffer())});
  });
  const tap=(action,id)=>page.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().tap();
  await page.goto(frontend+'/reborn-h5-studio/index.html#discover');await tap('choose-start');await tap('start-method','text');
  await page.locator('#inspiration-prompt').fill('一条红色的小鱼');
  await tap('ai-connection');await page.locator('[name=endpoint]').fill(api);await page.locator('[name=access]').fill('wrong');
  await page.locator('#ai-connect-form button').tap();await page.getByText('访问码不正确，请检查后重试。').waitFor();
  assert.equal(generated.length,0);
  await page.locator('[name=access]').fill(code);
  if(process.env.QA_OUT)await page.screenshot({path:process.env.QA_OUT+'/api-connection.png'});
  await page.locator('#ai-connect-form button').tap();await page.locator('dialog').waitFor({state:'hidden'});
  await page.locator('[data-action=in-ai]:enabled').waitFor();assert.equal(generated.length,0);
  assert.equal(await page.evaluate(()=>localStorage.getItem('reborn-api-base')),api);
  assert.ok(!(await page.evaluate(()=>JSON.stringify(localStorage))).includes(code));
  await tap('in-ai');await page.locator('.recipe-sheet').waitFor();await tap('in-ai-confirm');
  await page.locator('[data-action=in-continue]').filter({visible:true}).waitFor();assert.equal(generated.length,1);
  await tap('in-continue');await page.waitForURL(/#editor$/);await page.reload();await page.locator('#work-preview').waitFor();
  assert.equal(await page.evaluate(()=>Services.status('ai').state),'configured');
  await page.goto(frontend+'/reborn-h5-studio/index.html#discover');await tap('search');await page.locator('#search-query').fill('西湖');
  await page.locator('[data-action=search-ai]:visible').waitFor();await tap('search-ai');
  await page.getByText('百炼匹配 · 实物目录').waitFor();
  assert.deepEqual(errors,[]);console.log('HTTPS gallery origin: wrong code, unlock, generation consent, authenticated output, reload and search passed with fixture responses');
 }finally{await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1});
