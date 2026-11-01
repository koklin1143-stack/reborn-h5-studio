const {timingSafeEqual,createHash}=require('node:crypto');
const digest=value=>createHash('sha256').update(value).digest();
function createAccess(env){
 const origin=env.PUBLIC_ORIGIN||env.RENDER_EXTERNAL_URL||'';
 let publicURL;
 if(origin){
  publicURL=new URL(origin);
  if(publicURL.protocol!=='https:'||publicURL.pathname!=='/'||publicURL.search||publicURL.hash||publicURL.username||publicURL.password)throw Error('PUBLIC_ORIGIN must be an HTTPS origin');
  if(!/^[\x21-\x7e]{16,256}$/.test(env.AI_ACCESS_CODE||''))throw Error('Hosted AI requires a 16–256 character AI_ACCESS_CODE');
 }
 const allowed=new Set([publicURL?.origin,...(env.ALLOWED_ORIGINS||'').split(',').map(x=>x.trim()).filter(Boolean)]);
 function granted(req){return !publicURL||timingSafeEqual(digest(req.headers.authorization||''),digest('Bearer '+env.AI_ACCESS_CODE));}
 return {
  hosted:Boolean(publicURL),
  hostAllowed:host=>['localhost','127.0.0.1'].includes(host.hostname)||host.host===publicURL?.host,
  originAllowed:(value,host,sibling)=>!value||value===(publicURL?.origin||host.origin)||sibling||Boolean(publicURL&&allowed.has(value)),
  granted,
  description:req=>({accessRequired:Boolean(publicURL),accessGranted:granted(req)})
 };
}
module.exports={createAccess};
