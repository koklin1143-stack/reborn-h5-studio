/* Local command/query boundary. A remote implementation must enforce ownership,
   consent, idempotency and moderation on the server before replacing this adapter. */
(() => {
 const M=window.Studio;
 window.ArchiveService=Object.freeze({
  mode:'local-demo',capabilities:Object.freeze({publicSharing:false,cloudSync:false,moderation:false,officialRewards:false}),
  list:(state,filters)=>M.copy(M.queryGallery(state,filters)),
  get:(state,id)=>M.copy(M.findPublication(state,id)),
  publish:(state,id,consent)=>M.publish(state,id,consent),
  withdraw:(state,id)=>M.withdraw(state,id),
  inspire:(state,id)=>M.inspire(state,id),
  toggle:(state,type,id)=>M.toggleGallery(state,type,id)
 });
})();
