const fs=require('node:fs'),path=require('node:path'),{createHash}=require('node:crypto');
const root=path.resolve(__dirname,'..'),source=path.join(root,'prototype');
const photos=require('../prototype/photo-catalogue.js'),report=require('../prototype/object-display.js');
const assets={},display={};
function readAsset(key){
 const bytes=fs.readFileSync(path.join(source,'media/enamel',key+'.webp'));
 assets[key]=bytes.toString('base64');return createHash('sha256').update(bytes).digest('hex');
}
function hasAlpha(key){
 const bytes=Buffer.from(assets[key],'base64');
 if(bytes.toString('ascii',0,4)!=='RIFF'||bytes.toString('ascii',8,12)!=='WEBP')return false;
 for(let i=12;i+8<=bytes.length;){
  const chunk=bytes.toString('ascii',i,i+4),size=bytes.readUInt32LE(i+4);
  if(i+8+size>bytes.length)return false;
  if(chunk==='ALPH'&&size>0)return true;
  if(chunk==='VP8L'&&size>=5&&bytes[i+8]===0x2f&&(bytes[i+12]&16))return true;
  i+=8+size+(size%2);
 }
 return false;
}
for(const p of photos){
 const hash=readAsset(p.key),item=report[p.key];
 if(p.studyKey)readAsset(p.studyKey);
 display[p.key]={mode:'photo',asset:p.key};
 if(item && ['cutout','context'].includes(item.mode) && item.sourceSha===hash){
  const key=p.key+(item.mode==='cutout'?'-cut':'-view');
  if(item.asset===key && fs.existsSync(path.join(source,'media/enamel',key+'.webp'))){
   if(readAsset(key)===item.assetSha&&(item.mode!=='cutout'||(!item.reasons?.length&&hasAlpha(key))))display[p.key]={mode:item.mode,asset:key,opticalX:item.opticalX||0};
   else delete assets[key];
  }
 }
 for(const sample of p.samples)readAsset(p.key+'-'+sample.key+(sample.version>1?'-v'+sample.version:''));
}
for(const e of require('../prototype/gallery-editions.js')){readAsset(e.coverKey);if(!assets[e.patternKey])readAsset(e.patternKey);}
let html=fs.readFileSync(path.join(source,'index.html'),'utf8');
html=html.replace(/<link rel="stylesheet" href="([^"]+)">/g,(_,file)=>'<style>\n'+fs.readFileSync(path.join(source,file),'utf8')+'\n</style>');
html=html.replace(/<script defer src="([^"]+)"><\/script>/g,(_,file)=>{
 let js=fs.readFileSync(path.join(source,file),'utf8');
 if(file==='object-display.js')js='window.ObjectDisplay='+JSON.stringify(display)+';';
 return '<script>\n'+js.replace(/<\/script/gi,'<\\/script')+'\n</script>';
});
// Inline scripts must execute after the document is present; preserve source order.
const scripts=[];html=html.replace(/<script>[\s\S]*?<\/script>/g,s=>{scripts.push(s);return '';});
html=html.replace('</body>',()=>scripts.join('\n')+'\n</body>');
const offline=html.replace('const bundledPhotos=null;',()=> 'const bundledPhotos='+JSON.stringify(assets)+';');
fs.writeFileSync(path.join(root,'物之再生-H5-单文件.html'),offline);
const online=html.replace("const photoFolder='media/enamel/';","const photoFolder='prototype/media/enamel/';");
fs.writeFileSync(path.join(root,'index.html'),online);
console.log('Built online HTML ('+Buffer.byteLength(online)+' bytes) and standalone HTML ('+Buffer.byteLength(offline)+' bytes)');
fs.writeFileSync(path.join(root,'.nojekyll'),'');
