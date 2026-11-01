/* Explicit extension points. No API keys, remote calls or simulated generated output. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.Services=api;})(globalThis,()=>{
 const descriptions={ai:'AI 生成待接入，可继续使用原纹样或合法个人图片。',images:'首页采用开放授权的实物摄影。上海工业博物馆的馆藏影像待接入。',models:'器型 3D 模型待接入，现有画布是二维静态预览。'};
 const providers=new Map();
 const status=kind=>{if(!Object.hasOwn(descriptions,kind))throw Error('未知服务');return {kind,state:providers.has(kind)?'configured':'unavailable',message:descriptions[kind]};};
 function configure(kind,provider){status(kind);if(provider===null){providers.delete(kind);return;}if(typeof provider?.run!=='function')throw Error('适配器必须实现 run(input, {signal})');providers.set(kind,provider);}
 async function request(kind,input={},options={}){const current=status(kind);if(!providers.has(kind))return {...current,ok:false,code:'NOT_CONFIGURED',data:null};if(options.signal?.aborted)return {ok:false,code:'ABORTED',data:null};try{const data=await providers.get(kind).run(input,options);return {ok:true,code:'OK',data};}catch(error){return {ok:false,code:error.name==='AbortError'?'ABORTED':'PROVIDER_ERROR',message:error.message,data:null};}}
 return Object.freeze({status,configure,request});
});
