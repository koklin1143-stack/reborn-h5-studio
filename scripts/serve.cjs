const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),AI=require('./search-service.cjs');
const root=path.resolve(__dirname,'..');
const {createHandler,configured}=require('./bailian-image.cjs');
const {createAccess}=require('./server-access.cjs');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.json':'application/json','.glb':'model/gltf-binary'};
function createServer(patternOptions){let active=0,last=0;const env=patternOptions?.env||process.env,access=createAccess(env),pattern=createHandler(patternOptions);return http.createServer(async(req,res)=>{
 const json=(code,data)=>{if(!res.destroyed){res.writeHead(code,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(req.url?.split('?')[0].endsWith('/status')?{...data,...access.description(req)}:data));}};
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{return json(400,{error:'INVALID_URL'});}
 let host;try{host=new URL('http://'+req.headers.host);}catch{return json(403,{});}
 if(!access.hostAllowed(host))return json(403,{});
 if(pathname==='/healthz'&&req.method==='GET')return json(200,{ok:true});
 if(pathname.startsWith('/api/')){
  // Keep existing drafts on :8879 when the image service runs beside a static preview.
  const patternRoute=pathname==='/api/pattern'||pathname==='/api/pattern/status';
 const searchRoute=['/api/search','/api/search/status','/api/search/transcribe'].includes(pathname);
 const sibling=(patternRoute||searchRoute)&&['127.0.0.1:8881','127.0.0.1:8882'].includes(host.host)&&req.headers.origin==='http://127.0.0.1:8879';
  if(!access.originAllowed(req.headers.origin,host,sibling))return json(403,{error:'ORIGIN_REJECTED'});
  if(req.headers.origin){
   res.setHeader('Access-Control-Allow-Origin',req.headers.origin);res.setHeader('Vary','Origin');
   if(req.method==='OPTIONS'){
    res.writeHead(204,{'Access-Control-Allow-Methods':'GET, POST','Access-Control-Allow-Headers':'Content-Type, Authorization','Access-Control-Max-Age':'600'});res.end();return;
   }
  }
  if((req.method==='POST'||pathname==='/api/access')&&!access.granted(req))return json(401,{error:'ACCESS_CODE_REQUIRED'});
  if(pathname==='/api/access'&&req.method==='GET')return json(200,{service:'reborn-h5',available:configured(env)});
  if(pathname==='/api/pattern'||pathname==='/api/pattern/status')return pattern(req,res,pathname,json);
  if(pathname==='/api/search/status'&&req.method==='GET')return json(200,{available:AI.available(patternOptions?.env),provider:'bailian'});
  const speech=pathname==='/api/search/transcribe';
  if((!speech&&pathname!=='/api/search')||req.method!=='POST')return json(404,{});
  if(!req.headers['content-type']?.startsWith('application/json'))return json(415,{});
  if(active>=2||(!speech&&Date.now()-last<500))return json(429,{error:'RATE_LIMIT'});
  const chunks=[];let size=0;try{for await(const chunk of req){size+=chunk.length;if(size>(speech?Math.ceil(AI.maxAudio/3)*4+256:2048))return json(413,{});chunks.push(chunk);}}catch{return;}
  const body=Buffer.concat(chunks).toString('utf8');
  let data;try{data=JSON.parse(body);}catch{return json(400,{error:'INVALID_JSON'});}
  if(data?.consent!==true||(speech?!AI.validAudio(data.audio):typeof data.query!=='string'||!data.query.trim()||data.query.length>160))return json(400,{error:'INVALID_INPUT_OR_CONSENT'});
  if(!speech)last=Date.now();active++;const controller=new AbortController();res.on('close',()=>controller.abort());
  const options={...patternOptions,signal:controller.signal};
  try{json(200,speech?{text:await AI.transcribe(data.audio,options)}:await AI.search(data.query,options));}catch(e){if(!res.destroyed)json(e.message==='RATE_LIMIT'?429:e.message==='NO_SPEECH'?422:503,{error:e.message==='NO_SPEECH'?'NO_SPEECH':'UNAVAILABLE'});}finally{active--;}return;
 }
 if(!['GET','HEAD'].includes(req.method))return json(405,{});
 if(pathname==='/'){res.writeHead(302,{Location:'/prototype/index.html'});res.end();return;}
 // Only browser assets and review artifacts are public; no scripts, env, repository internals or symlinks outside root.
 const segments=pathname.split('/').filter(Boolean);
 const publicPath=['prototype','assets','previews','docs'].includes(segments[0])||segments.length===1&&['index.html','物之再生-H5-单文件.html'].includes(segments[0]);
 if(!publicPath||segments.some(s=>s.startsWith('.')||s.includes('\\'))||!mime[path.extname(pathname)])return json(403,{});
 const file=path.resolve(root,'.'+pathname);
 try{const real=await fs.promises.realpath(file);if(!real.startsWith(root+path.sep))return json(403,{});const data=await fs.promises.readFile(real);res.writeHead(200,{'Content-Type':mime[path.extname(file)],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:data);}catch{json(404,{error:'NOT_FOUND'});}
 });}
if(require.main===module){const port=Number(process.env.PORT)||8765,host=process.env.HOST||'127.0.0.1';createServer().listen(port,host,()=>console.log('Listening on '+host+':'+port));}
module.exports={createServer};
