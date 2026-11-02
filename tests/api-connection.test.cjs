const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const script=fs.readFileSync(require.resolve('../prototype/api-connection.js'),'utf8');
const origin='https://api.example.test',token='a'.repeat(48);
function storage(){const map=new Map();return {getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v),removeItem:k=>map.delete(k)};}
function client({local=storage(),session=storage(),hash='',accept=true}={}){
 const calls=[],location=new URL('https://test.github.io/studio/'+hash);
 const context={window:{RebornConfig:{apiBase:origin}},location,localStorage:local,sessionStorage:session,URL,URLSearchParams,AbortSignal,
  history:{state:null,replaceState:(_state,_title,url)=>{location.href=new URL(url,location).href;}},
  fetch:async(url,options)=>{calls.push({url,options});return {status:accept?200:401,ok:accept,json:async()=>({service:'reborn-h5',available:true})};}};
 vm.runInNewContext(script,context);return {api:context.window.AIConnection,calls,location,local,session};
}
test('remembered access restores in a new browser session for all three APIs and can be cleared',async()=>{
 const first=client();await first.api.configure(origin,token,{remember:true});
 const next=client({local:first.local});
 for(const route of ['pattern','search','search/transcribe'])assert.equal(next.api.headers(origin+'/api/'+route).Authorization,'Bearer '+token);
 assert.equal(next.api.remembered(),true);next.api.forget();assert.equal(next.api.hasAccess(),false);
 assert.equal(client({local:first.local}).api.hasAccess(),false);
});
test('session-only choice removes an older remembered credential',async()=>{
 const c=client();await c.api.configure(origin,token,{remember:true});await c.api.configure(origin,token,{remember:false});
 assert.equal(c.api.hasAccess(),true);assert.equal(client({local:c.local}).api.hasAccess(),false);
});
test('invitation is removed from URL immediately and verified before remembering',async()=>{
 const c=client({hash:'#ai-invite='+token});assert.equal(c.location.hash,'#discover');
 assert.deepEqual(JSON.parse(JSON.stringify(await c.api.ready)),{ok:true,remembered:true});
 assert.equal(c.calls[0].url,origin+'/api/access');assert.equal(c.api.hasAccess(),true);
});
test('invalid or rejected invitations are not saved and their tokens leave the URL',async()=>{
 for(const options of [{hash:'#ai-invite=broken'},{hash:'#ai-invite='+token,accept:false}]){
  const c=client(options);assert.equal((await c.api.ready).ok,false);assert.equal(c.api.hasAccess(),false);assert.equal(c.location.hash,'#discover');
 }
});
test('credentials cannot be sent to unrelated endpoints; invitations use only built-in origin',async()=>{
 const local=storage();local.setItem('reborn-api-base','https://other.example');
 const c=client({local,hash:'#ai-invite='+token});await c.api.ready;
 assert.equal(c.calls[0].url,origin+'/api/access');assert.deepEqual(Object.keys(c.api.headers('https://other.example/api/pattern')),[]);
});
test('verified manual endpoint overrides deployment default and failed changes leave it intact',async()=>{
 const c=client();await c.api.configure('https://alternate.example',token);
 assert.equal(c.api.selected(),'https://alternate.example');
 const failed=client({local:c.local,accept:false});await assert.rejects(failed.api.configure(origin,token,{remember:true}));
 assert.equal(failed.api.selected(),'https://alternate.example');assert.equal(failed.api.remembered(),false);
});
