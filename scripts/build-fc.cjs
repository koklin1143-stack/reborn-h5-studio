// Bundle only the server dependency graph; never include local env files, logs or user uploads.
const fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const root=path.resolve(__dirname,'..');
const out=fs.mkdtempSync(path.join(os.tmpdir(),'reborn-fc-'));
require('esbuild').buildSync({entryPoints:[path.join(__dirname,'fc-entry.cjs')],outfile:path.join(out,'scripts/server.cjs'),platform:'node',target:'node22',format:'cjs',bundle:true,legalComments:'inline'});
const refs=path.join(out,'scripts/print-references');fs.mkdirSync(refs,{recursive:true});
for(const name of fs.readdirSync(path.join(__dirname,'print-references')).filter(n=>/^[\w-]+\.png$/.test(n)))fs.copyFileSync(path.join(__dirname,'print-references',name),path.join(refs,name));
fs.copyFileSync(path.join(root,'docs/aliyun-fc-setup.md'),path.join(out,'DEPLOY.md'));
fs.writeFileSync(path.join(out,'manifest.json'),JSON.stringify({entry:'scripts/server.cjs',port:9000,node:'22',builtAt:new Date().toISOString(),files:['scripts/server.cjs',...fs.readdirSync(refs).map(n=>'scripts/print-references/'+n),'DEPLOY.md']},null,2));
console.log(out);
