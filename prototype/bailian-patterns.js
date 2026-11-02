/* Same-origin bridge to the local H5 server. No provider credentials in the browser. */
(() => {
  const model = 'qwen-image-2.1-turbo';
  const readUrl = blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(Error('读取素材失败，请重新选择。'));
    reader.readAsDataURL(blob);
  });
  // Only remove the light, nearly uniform field connected to the outside edge.
  // Preserve existing transparency, enclosed light pigment, and complex backgrounds.
  function clearPaper(pixels, width, height) {
    const total = width * height;
    const corners = [0, width - 1, total - width, total - 1];
    const color = [0,1,2].map(c => corners.reduce((sum, i) => sum + pixels[4*i+c], 0) / 4);
    if (Math.min(...color) < 222) return false;
    const paper = (i, tolerance) => color.every((v, c) => Math.abs(v - pixels[4*i+c]) <= tolerance);
    if (!corners.every(i => paper(i, 12) && pixels[4*i+3] >= 245)) return false;
    for (let p = 3; p < pixels.length; p += 4) if (pixels[p] < 180) return false;
    const seen = new Uint8Array(total), queue = new Int32Array(total);
    let end = 0;
    function add(i) {
      if (!seen[i] && paper(i, 20)) { seen[i] = 1; queue[end++] = i; }
    }
    for (let x = 0; x < width; x++) { add(x); add(total - width + x); }
    for (let y = 0; y < height; y++) { add(y * width); add((y + 1) * width - 1); }
    for (let q = 0; q < end; q++) {
      const i = queue[q], x = i % width;
      if (x > 0) add(i-1);
      if (x + 1 < width) add(i+1);
      if (i >= width) add(i-width);
      if (i + width < total) add(i+width);
    }
    if (end < total * .03 || end > total * .96) return false;
    for (let q = 0; q < end; q++) pixels[4*queue[q]+3] = 0;
    return true;
  }
  async function preparePrint(blob,technique,separated=false) {
    const url = URL.createObjectURL(blob);
    try {
      const img = new Image(); img.src = url; await img.decode();
      const canvas = document.createElement('canvas');
      if (img.naturalWidth * img.naturalHeight > 4096 * 4096) throw Error('纹样尺寸过大。');
      canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d', {willReadFrequently:true});
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const inks=window.PatternGrammar.techniques[technique]?.inks;
      let removed;
      if(separated)removed=false; // Separated prints already carry their final ink coverage, including white pigment.
      else if(inks){
        const darkest=Math.min(...inks.flatMap(hex=>hex.slice(1).match(/../g).map(c=>parseInt(c,16))));
        const proof=window.EnamelPaper.separate(data.data,data.width,data.height,darkest);
        if(proof.coveredEdge>.65)throw Error('这张回图的背景与纹样未分开，请保留素材重试。');
        removed=proof.changed;
      }else removed=clearPaper(data.data,data.width,data.height);
      let ink=0,empty=0,edge=0,cleaned=false;
      for(let y=0;y<data.height;y++)for(let x=0;x<data.width;x++){
        const offset=(y*data.width+x)*4,alpha=data.data[offset+3];
        // Some RGBA outputs store a coloured matte at alpha 1. Keep light pigment at normal opacity.
        if(alpha>0&&alpha<5){data.data.fill(0,offset,offset+4);cleaned=true;}
        if(alpha<20){empty++;continue;}
        if(alpha<100)continue;
        ink++;
        if(x===0||x===data.width-1||y===0||y===data.height-1)edge++;
      }
      if(ink===0)throw Error('模型返回的纹样为空。素材已保留，可调整方案后重试。');
      const proofNote=empty===0?'这张图保留了完整底色，请在器物上检查。':edge>Math.max(data.width,data.height)*.05?'图案延伸到了边缘，请检查主体是否完整。':'';
      if(!removed&&!cleaned)return {blob,removedPaper:false,proofNote};
      ctx.putImageData(data,0,0);
      const trimmed = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      if(!trimmed)throw Error('未能保存透明贴图，请重试。');
      return {blob:trimmed,removedPaper:removed||cleaned,proofNote};
    } finally { URL.revokeObjectURL(url); }
  }
  // The server pairs this broad pose guide with selected marks from the higher-resolution drawing.
  function gestureStudy(original, strokes, bounds) {
    const thumb=document.createElement('canvas');
    thumb.width=thumb.height=96;
    const ctx=thumb.getContext('2d');
    ctx.fillStyle='#fff';ctx.fillRect(0,0,96,96);
    if(strokes?.length && strokes.every(stroke=>stroke.tool==='pen')) {
      const {left,top,width,height}=bounds;
      const scale=Math.min(80/Math.max(width,height),3/8);
      ctx.setTransform(scale,0,0,scale,48-(left+width/2)*scale,48-(top+height/2)*scale);
      const tolerance=Math.max(1.5,Math.max(width,height)*.011);
      ctx.lineCap=ctx.lineJoin='round';ctx.strokeStyle='#47515a';
      for(const stroke of strokes){
        if(!stroke.points?.length)continue;
        const points=DataTool.simplify_line(stroke.points,tolerance);
        const first=points[0],last=points[points.length-1];
        ctx.lineWidth=points.length<=2?tolerance*1.7:tolerance*2.7;
        ctx.beginPath();ctx.moveTo(...first);
        for(let i=1;i<points.length-1;i++){
          const [x,y]=points[i],next=points[i+1];
          ctx.quadraticCurveTo(x,y,(x+next[0])/2,(y+next[1])/2);
        }
        ctx.lineTo(last[0]+.01,last[1]);ctx.stroke();
      }
    }else{
      // Re-sample only the surviving ink after any erasing, including drafts with no stroke history.
      ctx.drawImage(original,0,0,96,96);
    }
    const guide=document.createElement('canvas');guide.width=guide.height=512;
    const brush=guide.getContext('2d');
    brush.imageSmoothingEnabled=true;brush.imageSmoothingQuality='high';
    brush.drawImage(thumb,0,0,512,512);
    return guide.toDataURL('image/png');
  }
  async function sketchReference(blob,strokes,includeGesture) {
    const url=URL.createObjectURL(blob);
    try {
      const img=new Image();img.src=url;await img.decode();
      const sheet=document.createElement('canvas');
      sheet.width=img.naturalWidth;sheet.height=img.naturalHeight;
      const context=sheet.getContext('2d',{willReadFrequently:true});
      context.drawImage(img,0,0);
      const {data}=context.getImageData(0,0,sheet.width,sheet.height);
      let left=sheet.width,right=-1,top=sheet.height,bottom=-1;
      for(let y=0;y<sheet.height;y++)for(let x=0;x<sheet.width;x++){
        if(data[(y*sheet.width+x)*4+3]<32)continue;
        left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);
      }
      if(right<left)throw Error('画板上没有可见的线条，请再画几笔。');
      const width=right-left+1,height=bottom-top+1,scale=Math.min(640/Math.max(width,height),3);
      const output=document.createElement('canvas');output.width=output.height=768;
      const ink=output.getContext('2d');ink.fillStyle='white';ink.fillRect(0,0,768,768);
      const w=width*scale,h=height*scale;
      ink.drawImage(sheet,left,top,width,height,(768-w)/2,(768-h)/2,w,h);
      return {image:output.toDataURL('image/png'),...(includeGesture?{gestureImage:gestureStudy(output,strokes,{left,top,width,height})}:{})};
    } finally {URL.revokeObjectURL(url);}
  }
  let endpoint='/api/pattern';
  async function run(input, {signal}) {
    const stage=input.stage||'pattern', decorate=stage==='decorate';
    const source = decorate ? input.form : input.method === 'image' ? input.image : input.method === 'sketch' ? input.sketch : null;
    if (['image','sketch'].includes(input.method) && !source) throw Error('素材文件缺失，请重新选择。');
    const sketch=stage==='shape'||(stage==='pattern'&&input.method==='sketch')?
      await sketchReference(source,input.strokes,stage==='shape'&&input.recipe?.sketchMode!=='redesign'):null;
    const image=sketch?sketch.image:source?await readUrl(source):null;
    const recipe=input.recipe;
    if(!recipe || recipe.version!==window.PatternGrammar.version)throw Error('请先确认纹样方案。');
    const response = await fetch(endpoint, {method:'POST', signal, headers:{'Content-Type':'application/json',...window.AIConnection.headers(endpoint)},
      body:JSON.stringify({consent:input.consent===true,method:input.method,reference:input.sourceMotifId,
        direction:input.direction,prompt:input.method==='text'?input.prompt:'',subject:input.method==='sketch'&&!decorate?input.sketchSubject:'',
        sketchMode:recipe.sketchMode,technique:recipe.technique,requestedInks:recipe.requestedInks,layout:recipe.layout,reading:recipe.reading,ruleVersion:recipe.version,stage,refinement:input.refinement,
        ...(sketch||(decorate?{shapeImage:image,approved:true,identity:input.identity}:{image}))})}).catch(err=>{
      if(signal?.aborted)throw err;
      throw Error('连接中断，请检查网络后重试。');
    });
    if (!response.ok) {
      const body=await response.json().catch(()=>({})),detail=String(body?.error||'');
      if(/内容审核/.test(detail))throw Error('这份素材未通过内容审核，请调整后重试。');
      if(response.status===413)throw Error('图片过大，请缩小后重试。');
      if(response.status===429)throw Error(/额度/.test(detail)?'生成服务繁忙或额度不足，请稍后再试。':'已有生成任务，请稍后再试。');
      if(response.status===409)throw Error('请刷新页面后再试。');
      if(response.status===401||response.status===403||response.status===503)throw Error('AI 服务暂不可用，请稍后再试。');
      if(stage==='recolour')throw Error('未能完成换色，原版仍可使用。请写明要换色的部位后重试。');
      if(response.status===422&&/没认出主体|主体还不够明确/.test(detail))throw Error('还没认出主体，可以补一句描述再试。');
      if(response.status===400)throw Error('请检查所选素材和填写的内容，再试一次。');
      throw Error('这次没能生成纹样，可以用原素材重试。');
    }
    const result=await response.json();
    if(result.ruleVersion!==recipe.version || result.stage!==stage || (stage==='shape'?!result.identity:input.method!=='motif'&&!result.design))throw Error('未收到这份方案的纹样，请重试。');
    const png=new Blob([Uint8Array.from(atob(result.png),c=>c.charCodeAt(0))],{type:'image/png'});
    const lineInk=result.technique==='linePlate'&&/^#[a-f0-9]{6}$/i.test(result.design?.lineInk||'')&&result.design.lineInk;
    const bindings=result.technique==='regionInk'&&result.design?.regionBindings;
    const finish=recipe.technique==='auto'&&(bindings?{name:'按部位分色',inks:result.design.inkPalette?.map(p=>p.hex)||[...new Set(bindings.map(p=>p.hex))]}:lineInk?{name:window.PatternGrammar.linePlate.name,inks:[lineInk]}:window.PatternGrammar.techniques[result.technique]);
    if(recipe.technique==='auto'&&!finish)throw Error('未收到本次纹样的制稿记录，请重试。');
    const printTechnique=stage==='shape'?undefined:finish?result.technique:recipe.technique;
    const plates=finish&&!bindings&&result.design?.inkPalette;
    const variant=await preparePrint(png,printTechnique,Boolean(bindings||plates||lineInk||result.design?.glazeReserve||result.design?.colourIssue));
    if(result.design?.colourIssue)variant.proofNote='可在工作台调整局部配色。';
    if(plates&&result.design.inkCoverage?.some(fraction=>fraction<.005))variant.proofNote='有一处点色很少，可在工作台的「局部配色」里补上。';
    return {provider:'阿里云百炼',model:stage==='recolour'?result.planner:model,stage,identity:result.identity,recipe:{...recipe,...(finish?{technique:result.technique,colorStudy:plates?(plates.length===3?'三色套印':'双色套印'):finish.name,printInks:plates?plates.map(p=>p.hex):finish.inks}:{}),...(printTechnique?{paperVersion:window.EnamelPaper.version}:{}),planner:result.planner||recipe.planner,design:result.design},variants:[variant]};
  }
  async function connect() {
    await window.AIConnection.ready;
    window.Services.configure('ai',null);
    const paths=window.AIConnection.paths('pattern');
    for(const path of paths){
      try {
        const response=await fetch(path+'/status',{cache:'no-store',headers:window.AIConnection.headers(path),signal:AbortSignal.timeout(8000)});
        if(!response.ok)continue;
        const info=await response.json();
        if(info.available&&info.accessGranted!==false&&info.model===model&&info.ruleVersion===window.PatternGrammar.version){endpoint=path;window.Services.configure('ai',{run});return true;}
      }catch{ /* Manual editing stays available when a local service is absent. */ }
    }
    return false;
  }
  window.BailianPatterns = {connect,preparePrint};
})();
