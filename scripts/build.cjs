const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),source=path.join(root,'prototype');
let html=fs.readFileSync(path.join(source,'index.html'),'utf8');
html=html.replace(/<link rel="stylesheet" href="([^"]+)">/g,(_,file)=>'<style>\n'+fs.readFileSync(path.join(source,file),'utf8')+'\n</style>');
html=html.replace(/<script defer src="([^"]+)"><\/script>/g,(_,file)=>'<script>\n'+fs.readFileSync(path.join(source,file),'utf8').replace(/<\/script/gi,'<\\/script')+'\n</script>');
// Inline scripts must execute after the document is present; preserve source order.
const scripts=[];html=html.replace(/<script>[\s\S]*?<\/script>/g,s=>{scripts.push(s);return '';});
html=html.replace('</body>',()=>scripts.join('\n')+'\n</body>');
const out=path.join(root,'物之再生-H5-单文件.html');fs.writeFileSync(out,html);console.log('Built single-file HTML: '+Buffer.byteLength(html)+' bytes');
// GitHub Pages serves the same self-contained prototype at the repository root.
fs.writeFileSync(path.join(root,'index.html'),html);
fs.writeFileSync(path.join(root,'.nojekyll'),'');
