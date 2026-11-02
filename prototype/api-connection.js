/* One endpoint and access-code policy for generation, search and speech. */
(()=>{
 const key='reborn-api-base',codes=new Map();
 const rememberedKey=origin=>'reborn-test-access:'+origin;
 function stored(store,name){try{return store.getItem(name)||'';}catch{return '';}}
 function base(value){
  const url=new URL(value);
  if(url.username||url.password||url.search||url.hash||url.pathname!=='/'||
   !(url.protocol==='https:'||url.protocol==='http:'&&['localhost','127.0.0.1'].includes(url.hostname)))throw Error('请填写 HTTPS 服务地址，不包含接口路径。');
  return url.origin;
 }
 function selected(){
  try{return base(stored(localStorage,key)||window.RebornConfig?.apiBase);}catch{return '';}
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
  const code=codes.get(origin)||stored(sessionStorage,'reborn-access:'+origin)||stored(localStorage,rememberedKey(origin));
  return code?{Authorization:'Bearer '+code}:{};
 }
 async function configure(address,code,{remember=false}={}){
  const origin=base(address),response=await fetch(origin+'/api/access',{cache:'no-store',headers:code?{Authorization:'Bearer '+code}:{},signal:AbortSignal.timeout(75000)});
  const data=await response.json().catch(()=>({}));
  if(response.status===401)throw Error('访问码不正确，请检查后重试。');
  if(!response.ok||data.service!=='reborn-h5')throw Error('未连接到物之再生服务，请检查地址。');
  if(!data.available)throw Error('服务已启动，但尚未配置 AI。请在服务端填写百炼配置。');
  codes.set(origin,code);
  try{localStorage.setItem(key,origin);sessionStorage.setItem('reborn-access:'+origin,code);}catch{}
  try{if(remember)localStorage.setItem(rememberedKey(origin),code);else localStorage.removeItem(rememberedKey(origin));}catch{}
  return true;
 }
 function hasAccess(){const address=selected();return !!(address&&headers(address+'/api/pattern').Authorization);}
 function remembered(){return !!stored(localStorage,rememberedKey(selected()));}
 function forget(){const origin=selected();codes.delete(origin);try{sessionStorage.removeItem('reborn-access:'+origin);localStorage.removeItem(rememberedKey(origin));}catch{}}
 // Invitation fragments are never sent to the web host. Remove them before routing or analytics.
 async function acceptInvitation(){
  if(!location.hash.startsWith('#ai-invite='))return null;
  const token=new URLSearchParams(location.hash.slice(1)).get('ai-invite')||'';
  history.replaceState(history.state,'',location.pathname+location.search+'#discover');
  if(!/^[a-f0-9]{48}$/.test(token))return {ok:false,message:'邀请链接不完整，请重新打开完整链接。'};
  // Only the built-in deployment may receive an invitation credential, never a URL from the link or storage.
  const address=window.RebornConfig?.apiBase;
  if(!address)return {ok:false,message:'请在正式测试网页打开邀请链接。'};
  try{await configure(address,token,{remember:true});return {ok:true,remembered:remembered()};}
  catch(error){return {ok:false,message:error.message==='Failed to fetch'?'暂时无法连接 AI，请检查网络后重试邀请链接。':error.message};}
 }
 window.AIConnection={paths,headers,configure,selected,hasAccess,remembered,forget,receiveInvitation:()=>window.AIConnection.ready=acceptInvitation(),ready:acceptInvitation()};
})();
