// API-only entry for FC custom runtimes. Missing hosting settings must never enable local mode.
const {createServer}=require('./serve.cjs');
function createFCServer(options={}){
 const env=options.env||process.env;
 if(!env.PUBLIC_ORIGIN)throw Error('Configure PUBLIC_ORIGIN with the FC HTTPS trigger origin');
 if(!env.ALLOWED_ORIGINS)throw Error('Configure ALLOWED_ORIGINS with the frontend origin');
 const server=createServer({...options,env});
 const handler=server.listeners('request')[0];server.removeListener('request',handler);
 server.on('request',(req,res)=>{
  let pathname;try{pathname=new URL(req.url,'http://localhost').pathname;}catch{res.writeHead(400);res.end();return;}
  if(pathname!=='/healthz'&&!pathname.startsWith('/api/')){
   res.writeHead(404,{'Content-Type':'application/json'});res.end('{"error":"NOT_FOUND"}');return;
  }
  return handler(req,res);
 });
 server.requestTimeout=300000;
 return server;
}
if(require.main===module){createFCServer().listen(Number(process.env.PORT)||9000,'0.0.0.0',()=>console.log('AI backend listening on configured FC port'));}
module.exports={createFCServer};
