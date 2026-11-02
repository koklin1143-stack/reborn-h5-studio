/* A sheet owns its microphone and network requests. Audio is kept in memory
   until the user finishes; leaving the sheet discards the recording. */
(()=>{
 const V=window.Views,E=window.Explore,el=id=>document.getElementById(id);
 let active=null;
 function voiceControls(){return V.btn(V.icon('mic',19)+'<span>说话</span>','search-voice','query-mic','id="voice-toggle" aria-label="开始说话" aria-pressed="false" disabled');}
 function controls(){return `<div id="search-connect" hidden>${V.btn('连接 AI，开启找物与语音','ai-connection','primary full')}</div><div id="search-ai-settings" hidden><div class="query-submit">${V.btn('查找','search-ai','primary','hidden')}${V.btn('取消查找','search-stop','text','hidden')}</div><small>语音和提交的搜索词由百炼处理</small></div><p id="search-status" role="status"></p>`;}
 function syncQuery(){
  const filled=Boolean(el('search-query').value.trim()),sheet=el('search-query').closest('.voice-search-sheet');
  sheet.querySelector('[data-action=clear-search]').hidden=!el('search-query').value;
  sheet.querySelector('.query-samples').hidden=filled;
  sheet.querySelector('[data-action=search-ai]').hidden=!filled||Boolean(active?.job);
 }
 function voiceNote(text){if(active)el('voice-status').textContent=text;}
 function note(text){if(active)el('search-status').textContent=text;}
 function listening(on){const b=el('voice-toggle');b.setAttribute('aria-pressed',String(on));b.setAttribute('aria-label',on?'结束录音并查找':'开始说话');b.querySelector('span').textContent=on?'说完了':'说话';}
 function disposeVoice(){
  const rec=active?.capture;if(!rec)return;
  active.capture=null;clearTimeout(rec.timer);
  if(rec.recorder?.state==='recording')rec.recorder.stop();
  rec.stream?.getTracks().forEach(t=>t.stop());listening(false);
 }
 function abort(){if(!active)return;disposeVoice();active.job?.abort();active.job=null;el('search-ai-settings').querySelector('[data-action=search-stop]').hidden=true;syncQuery();}
 function cancel(){abort();active=null;}
 function local(q){if(!active)return;abort();el('search-results').innerHTML=V.searchResults(q);if(active.endpoint)voiceNote('');note(q.trim()?'本地匹配':'');}
 async function run(){
  const s=active;if(!s)return;const query=el('search-query').value.trim();abort();
  if(!query){note('请先说出或输入想找的物件。');return;}
  if(!s.endpoint){local(query);return;}
  const job=new AbortController();s.job=job;syncQuery();el('search-ai-settings').querySelector('[data-action=search-stop]').hidden=false;
  note('正在找物…');const timer=setTimeout(()=>job.abort(),18000);
  try{const response=await fetch(s.endpoint,{method:'POST',headers:{'Content-Type':'application/json',...window.AIConnection.headers(s.endpoint)},signal:job.signal,body:JSON.stringify({query,consent:true})});
   if(!response.ok)throw Error();const data=await response.json();
   if(data.mode!=='ai'||!Array.isArray(data.ids)||!data.ids.every(id=>E.get(id)))throw Error();
   if(active!==s||s.job!==job)return;el('search-results').innerHTML=V.searchResults(query,data.ids.map(E.get));note('百炼匹配 · 实物目录');
  }catch{if(active===s&&s.job===job){el('search-results').innerHTML=V.searchResults(query);note('百炼未完成匹配，已显示本地结果。');}}
  finally{clearTimeout(timer);if(active===s&&s.job===job){s.job=null;syncQuery();el('search-ai-settings').querySelector('[data-action=search-stop]').hidden=true;}}
 }
 function stop(){abort();note('已取消匹配');}
 const base64=blob=>new Promise((ok,fail)=>{const reader=new FileReader();reader.onload=()=>ok(reader.result);reader.onerror=fail;reader.readAsDataURL(blob);});
 async function submitAudio(s,capture,chunks,type){
  capture.stream.getTracks().forEach(t=>t.stop());clearTimeout(capture.timer);
  if(active!==s||s.capture!==capture)return;
  s.capture=null;listening(false);
  const blob=new Blob(chunks,{type});if(!blob.size||blob.size>2097152){voiceNote('录音为空或过长，请再说一次。');return;}
  const job=new AbortController();s.job=job;const timer=setTimeout(()=>job.abort(),27000);voiceNote('正在转成文字…');
  try{const audio=await base64(blob);if(active!==s||s.job!==job)return;
   const res=await fetch(s.endpoint+'/transcribe',{method:'POST',headers:{'Content-Type':'application/json',...window.AIConnection.headers(s.endpoint)},body:JSON.stringify({consent:true,audio}),signal:job.signal});
   if(!res.ok)throw Error();const data=await res.json();if(active!==s||s.job!==job)return;
   if(!data.text?.trim())throw Error();el('search-query').value=data.text;s.onTranscript(data.text);
   voiceNote('可修改识别文字');await run();
  }catch{if(active===s&&s.job===job)voiceNote('这次未能识别，可以重说或输入。');}
  finally{clearTimeout(timer);if(active===s&&s.job===job)s.job=null;}
 }
 async function voice(){
  const s=active;if(!s?.endpoint)return;
  if(s.capture){if(s.capture.recorder?.state==='recording')s.capture.recorder.stop();else disposeVoice();return;}
  abort();const capture={};s.capture=capture;voiceNote('正在打开麦克风…');
  try{const stream=await navigator.mediaDevices.getUserMedia({audio:true});
   if(active!==s||s.capture!==capture){stream.getTracks().forEach(t=>t.stop());return;}
   capture.stream=stream;const mime=['audio/webm;codecs=opus','audio/mp4','audio/ogg;codecs=opus'].find(m=>MediaRecorder.isTypeSupported(m));
   if(!mime)throw Error();const recorder=new MediaRecorder(stream,{mimeType:mime,audioBitsPerSecond:64000});capture.recorder=recorder;
   const chunks=[];recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
   recorder.onstop=()=>submitAudio(s,capture,chunks,mime.split(';')[0]);
   recorder.onerror=()=>{if(active===s&&s.capture===capture){disposeVoice();voiceNote('录音中断，可直接输入。');}};
   recorder.start();listening(true);voiceNote('正在听，最长 20 秒');capture.timer=setTimeout(()=>{if(recorder.state==='recording')recorder.stop();},20000);
  }catch(e){if(active===s&&s.capture===capture){disposeVoice();voiceNote(e.name==='NotAllowedError'?'未获麦克风权限，可直接输入。':'此设备暂不能录音，可直接输入。');}}
 }
 async function mount(onTranscript){
  const s={onTranscript,endpoint:null,job:null,capture:null};active=s;syncQuery();
  voiceNote('正在检查 AI 连接…');
  await window.AIConnection.ready;
  if(active!==s)return;
  el('search-query').onkeydown=e=>{if(e.key==='Enter'&&!e.isComposing){e.preventDefault();run();}};
  const paths=window.AIConnection.paths('search');
  for(const path of paths){if(active!==s)break;
   try{const r=await fetch(path+'/status',{cache:'no-store',headers:window.AIConnection.headers(path),signal:AbortSignal.timeout(8000)});if(!r.ok)continue;const info=await r.json();if(info.available&&info.accessGranted!==false&&info.provider==='bailian'){s.endpoint=path;break;}}catch{}
  }
  if(active!==s)return;el('search-ai-settings').hidden=!s.endpoint;
  const canRecord=Boolean(s.endpoint&&navigator.mediaDevices?.getUserMedia&&window.MediaRecorder);
  el('voice-toggle').disabled=!canRecord;syncQuery();
  if(!canRecord)voiceNote(s.endpoint?'此浏览器暂不能录音，可输入查找。':window.AIConnection.hasAccess()?'AI 暂时无法连接，可先输入查找。':'首次使用需连接 AI，开启智能找物和语音。');
  else voiceNote('说出想找的器物，或输入后点查找。');
  el('search-connect').hidden=Boolean(s.endpoint);
 }
 document.addEventListener('visibilitychange',()=>{if(document.hidden&&active?.capture){disposeVoice();voiceNote('已取消录音');}});
 window.addEventListener('pagehide',cancel);
 window.SearchAssistant={voiceControls,controls,mount,run,cancel,local,stop,voice};
})();
