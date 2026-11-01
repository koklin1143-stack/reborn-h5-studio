/* One endpoint and access-code policy for generation, search and speech. */
(()=>{
 const key='reborn-api-base',codes=new Map();
 function stored(store,name){try{return store.getItem(name)||'';}catch{return '';}}
 function base(value){
  const url=new URL(value);
  if(url.username||url.password||url.search||url.hash||url.pathname!=='/'||
   !(url.protocol==='https:'||url.protocol==='http:'&&['localhost','127.0.0.1'].includes(url.hostname)))throw Error('请填写 HTTPS 服务地址，不包含接口路径。');
  return url.origin;
 }
 function selected(){
  try{return base(window.RebornConfig?.apiBase||stored(localStorage,key));}catch{return '';}
 }
 function paths(kind){
  const remote=selected(),list=remote?[remote+'/api/'+kind]:[];
  if(/^https?:$/.test(location.protocol)&&!location.hostname.endsWith('.github.io'))list.push('/api/'+kind);
  if(location.origin==='http://127.0.0.1:8879')list.push('http://127.0.0.1:8882/api/'+kind,'http://127.0.0.1:8881/api/'+kind);
  return [...new Set(list)];
 }
 function headers(path){
  const origin=new URL(path,location.href).origin;
  if(!paths('pattern').some(p=>new URL(p,location.href).origin===origin))return {};
  const code=codes.get(origin)||stored(sessionStorage,'reborn-access:'+origin);
  return code?{Authorization:'Bearer '+code}:{};
 }
 async function configure(address,code){
  const origin=base(address),response=await fetch(origin+'/api/access',{cache:'no-store',headers:code?{Authorization:'Bearer '+code}:{},signal:AbortSignal.timeout(75000)});
  const data=await response.json().catch(()=>({}));
  if(response.status===401)throw Error('访问码不正确，请检查后重试。');
  if(!response.ok||data.service!=='reborn-h5')throw Error('未连接到物之再生服务，请检查地址。');
  if(!data.available)throw Error('服务已启动，但尚未配置 AI。请在服务端填写百炼配置。');
  codes.set(origin,code);
  try{localStorage.setItem(key,origin);sessionStorage.setItem('reborn-access:'+origin,code);}catch{}
  return true;
 }
 window.AIConnection={paths,headers,configure,selected};
})();
