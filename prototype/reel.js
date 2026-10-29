/* Seven display slots repeat only the current series; catalog counts remain unchanged. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.FilmQueue=api;})(globalThis,()=>{
 'use strict';
 const radius=3,size=radius*2+1,mod=(n,m)=>(n%m+m)%m;
 function fill(rows,ids,currentId){if(!ids.length)throw Error('A film series must contain an item');const current=Math.max(0,ids.indexOf(currentId));return rows.map(row=>({...row,itemId:ids[mod(current+row.offset,ids.length)]}));}
 function create(ids,currentId){return fill(Array.from({length:size},(_,key)=>({key,offset:key-radius})),ids,currentId);}
 function advance(rows,ids,currentId,step){return fill(rows.map(row=>({...row,offset:mod(row.offset-Math.round(step)+radius,size)-radius})),ids,currentId);}
 return {radius,size,create,advance};
});
