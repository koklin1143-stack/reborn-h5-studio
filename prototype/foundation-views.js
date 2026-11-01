/* Reuse shared buttons, dialog shell and views; expose missing capabilities honestly. */
(() => {
 const V=window.Views,M=window.Studio,oldHeader=V.header,oldEditor=V.editor;
 V.statePanel=({state='empty',title,description,action='close',label='返回'})=>`<section class="state-panel" data-state="${V.esc(state)}" role="${state==='error'?'alert':'status'}"><span class="eyebrow">${state==='loading'?'加载中':state==='error'?'暂时无法完成':state==='unavailable'?'待接入':'暂无内容'}</span><h2>${V.esc(title)}</h2><p>${V.esc(description)}</p>${state==='loading'?'':V.btn(label,action,'secondary')}</section>`;

 function mineHeader(c){
  const canPick=(c.s.ui.filter||'works')==='works'&&c.s.works.length>0;
  const picker=canPick?V.btn(c.selectedWorkIds?'取消':'多选','toggle-work-selection','text','aria-pressed="'+Boolean(c.selectedWorkIds)+'"'):'';
  return `<h1 class="app-page-title">我的作品</h1><div class="mine-head-tools">${picker}${c.selectedWorkIds?'':V.ib('info','about','关于物之再生')}</div>`;
 }
 V.header=c=>c.page==='mine'?mineHeader(c):c.page==='discover'?`${oldHeader(c).replace(V.btn('关于','about','header-note'),'')}<div class="foundation-entry">${V.ib('info','about','关于物之再生')}</div>`:oldHeader(c);
 V.editor=c=>{const object=M.heritageObjects.find(o=>o.id===c.d?.sourceObjectId);return oldEditor(c).replace('<div class="editor-meta">',`<div class="foundation-plaque">来源：${V.esc(object?.name||'旧版示意')} · ${V.esc(object?.physicalForm==='plate'?'搪瓷盘示意':'示意物件')}<br>应用：<b>${V.esc(M.vessels.find(v=>v.id===c.d?.vesselId)?.name||'二维画布')}</b> · 二维静态预览</div><div class="editor-meta">`);};
})();
