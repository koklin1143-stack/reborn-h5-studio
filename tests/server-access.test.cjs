const test=require('node:test'),assert=require('node:assert/strict');
const {createServer}=require('../scripts/serve.cjs');
const {createAccess}=require('../scripts/server-access.cjs');
const env={PUBLIC_ORIGIN:'https://api.example.test',ALLOWED_ORIGINS:'https://koklin1143-stack.github.io',AI_ACCESS_CODE:'isolated-test-access-code',DASHSCOPE_API_KEY:'fixture',BAILIAN_WORKSPACE_ID:'llm-test'};
test('hosted AI refuses to start without a private access code',()=>{
 assert.throws(()=>createAccess({...env,AI_ACCESS_CODE:''}),/AI_ACCESS_CODE/);
 assert.throws(()=>createAccess({...env,PUBLIC_ORIGIN:'http://api.example.test'}),/HTTPS/);
 const access=createAccess({});assert.equal(access.hosted,false);
 assert.equal(access.hostAllowed(new URL('http://evil.test')),false);
});
test('hosted origins, preflight, protected APIs and status all share the access policy',async()=>{
 let calls=0;
 const server=createServer({env,fetcher:async()=>{calls++;throw Error('should not call provider');}});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const root='http://127.0.0.1:'+server.address().port,origin='https://koklin1143-stack.github.io';
 try{
  let response=await fetch(root+'/api/pattern/status',{headers:{Origin:origin}});
  assert.equal(response.status,200);assert.equal(response.headers.get('Access-Control-Allow-Origin'),origin);
  let status=await response.json();assert.equal(status.available,true);assert.equal(status.accessGranted,false);
  assert.ok(!JSON.stringify(status).includes(env.AI_ACCESS_CODE));
  response=await fetch(root+'/api/pattern',{method:'OPTIONS',headers:{Origin:origin,'Access-Control-Request-Method':'POST','Access-Control-Request-Headers':'authorization,content-type'}});
  assert.equal(response.status,204);assert.match(response.headers.get('Access-Control-Allow-Headers'),/Authorization/);
  assert.equal((await fetch(root+'/api/pattern/status',{headers:{Origin:'https://evil.test'}})).status,403);
  const badHost=await new Promise((resolve,reject)=>require('node:http').get(root+'/api/pattern/status',{headers:{Host:'evil.test'}},res=>{res.resume();resolve(res.statusCode);}).on('error',reject));
  assert.equal(badHost,403);
  for(const path of ['/api/pattern','/api/search','/api/search/transcribe']){
   response=await fetch(root+path,{method:'POST',headers:{Origin:origin,'Content-Type':'application/json'},body:'{}'});assert.equal(response.status,401);
  }
  assert.equal((await fetch(root+'/api/access',{headers:{Origin:origin,Authorization:'Bearer wrong'}})).status,401);
  const headers={Origin:origin,Authorization:'Bearer '+env.AI_ACCESS_CODE};
  assert.equal((await fetch(root+'/api/access',{headers})).status,200);
  status=await (await fetch(root+'/api/pattern/status',{headers})).json();assert.equal(status.accessGranted,true);
  assert.equal((await fetch(root+'/api/search',{method:'POST',headers:{...headers,'Content-Type':'application/json'},body:'{}'})).status,400);
  for(const path of ['/.env','/.git/config','/scripts/server-access.cjs'])assert.equal((await fetch(root+path)).status,403);
  assert.equal((await fetch(root+'/healthz')).status,200);assert.equal(calls,0);
 }finally{server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
});
