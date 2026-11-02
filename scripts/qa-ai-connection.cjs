const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const root=process.cwd(),site='https://koklin1143-stack.github.io/reborn-h5-studio/',api='https://reborn-h-api-tvgcnmrfdl.cn-beijing.fcapp.run',token='a'.repeat(48);
(async()=>{const browser=process.env.QA_WEBKIT?await webkit.launch():await chromium.launch({channel:'msedge'});try{
const errors=[],posts=[];let context;
async function setup(storageState){context=await browser.newContext({viewport:{width:375,height:812},isMobile:true,hasTouch:true,storageState});
await context.route(site+'**',async route=>{const pathname=new URL(route.request().url()).pathname.replace('/reborn-h5-studio/','');const file=path.resolve(root,pathname||'index.html');if(!file.startsWith(root+path.sep))return route.abort();try{await route.fulfill({path:file});}catch{await route.fulfill({status:404,body:''});}});
await context.route(api+'/**',async route=>{const r=route.request(),p=new URL(r.url()).pathname,ok=r.headers().authorization==='Bearer '+token;
const headers={'Access-Control-Allow-Origin':'https://koklin1143-stack.github.io','Access-Control-Allow-Headers':'authorization,content-type','Access-Control-Allow-Methods':'GET, POST'};
if(r.method()==='OPTIONS')return route.fulfill({status:204,headers});
if(p==='/api/access')return route.fulfill({status:ok?200:401,headers,json:ok?{service:'reborn-h5',available:true}:{error:'ACCESS_CODE_REQUIRED'}});
if(p.endsWith('/status'))return route.fulfill({headers,json:{available:true,provider:'bailian',model:'qwen-image-2.1-turbo',ruleVersion:'enamel-ornament-17',accessRequired:true,accessGranted:ok}});
assert.equal(ok,true);posts.push(p);return route.fulfill({headers,json:{mode:'ai',ids:['enamel-plate-01']}});});
const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));return p;}
const tap=(p,a,id)=>p.locator('[data-action="'+a+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
let p=await setup();await p.goto(site+'#discover');await tap(p,'search');await p.locator('#search-connect:not([hidden])').waitFor();await tap(p,'ai-connection');
assert.equal(await p.locator('[name=remember]').isChecked(),true);
await p.locator('[name=access]').fill(token);await p.locator('#ai-connect-form button[type=submit]').click();console.log('form submitted');await p.locator('.voice-search-sheet').waitFor();await p.locator('#search-ai-settings:not([hidden])').waitFor();assert.equal(await p.locator('#voice-toggle').isDisabled(),false);
await p.locator('#search-query').fill('有人物的盘子');await tap(p,'search-ai');await p.waitForFunction(()=>document.querySelector('#search-status').textContent.includes('百炼匹配'));
await tap(p,'close');await p.goto(site+'#mine');await tap(p,'ai-connection');
for(const width of [320,375,430]){await p.setViewportSize({width,height:812});assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);}
await p.setViewportSize({width:375,height:812});fs.mkdirSync('work/qa/ai-connection',{recursive:true});await p.waitForTimeout(400);await p.screenshot({path:'work/qa/ai-connection/settings.png'});
console.log('manual/search/settings done');const state=await context.storageState();await context.close();p=await setup(state);await p.goto(site+'#discover');await p.waitForFunction(()=>Services.status('ai').state==='configured');assert.equal(await p.evaluate(()=>AIConnection.remembered()),true);
console.log('restore done');for(const method of ['text','image','sketch']){await p.goto(site+'#discover');await tap(p,'choose-start');await tap(p,'start-method',method);await p.locator('.input-footer [data-action=in-ai]').waitFor();assert.equal(await p.locator('[data-ai-state=unconfigured]').count(),0);}
console.log('methods done');await p.goto(site+'#mine');await tap(p,'ai-connection');await tap(p,'ai-forget');assert.equal(await p.evaluate(()=>AIConnection.hasAccess()),false);
await p.goto(site+'#ai-invite='+token);await p.waitForFunction(()=>AIConnection.remembered());assert.equal(new URL(p.url()).hash,'#discover');await p.waitForFunction(()=>Services.status('ai').state==='configured');
await context.close();p=await setup();await p.goto(site+'#ai-invite='+token);await p.waitForFunction(()=>Services.status('ai').state==='configured');assert.equal(new URL(p.url()).hash,'#discover');assert.equal(await p.evaluate(()=>AIConnection.remembered()),true);assert.deepEqual(errors,[]);console.log('PASS: phone connection, return to search, all 3 creation entries, new-session restore, forget, invite, 320/375/430 layout; mocked provider; no page errors');
}finally{await browser.close();}})().catch(e=>{console.error(e.stack);process.exitCode=1});
