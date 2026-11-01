const test=require('node:test'),assert=require('node:assert/strict');
const {createFCServer}=require('../scripts/fc-entry.cjs');
test('FC entry refuses missing public configuration and serves only protected APIs',async()=>{
 assert.throws(()=>createFCServer({env:{}}),/PUBLIC_ORIGIN/);
 assert.throws(()=>createFCServer({env:{PUBLIC_ORIGIN:'https://example.fcapp.run'}}),/ALLOWED_ORIGINS/);
 const env={PUBLIC_ORIGIN:'https://example.fcapp.run',ALLOWED_ORIGINS:'https://koklin1143-stack.github.io',AI_ACCESS_CODE:'test-only-random-access-code'};
 const server=createFCServer({env});await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const base='http://127.0.0.1:'+server.address().port;
 try{
  assert.equal((await fetch(base+'/healthz')).status,200);
  assert.equal((await fetch(base+'/api/access')).status,401);
  assert.equal((await fetch(base+'/api/access',{headers:{Authorization:'Bearer '+env.AI_ACCESS_CODE}})).status,200);
  for(const url of ['/index.html','/docs/online-ai-setup.md','/scripts/server.cjs','/.env'])assert.equal((await fetch(base+url)).status,404);
  assert.equal((await fetch(base+'/api/pattern',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'})).status,401);
 }finally{server.closeAllConnections();await new Promise(r=>server.close(r));}
});
