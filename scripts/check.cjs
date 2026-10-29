const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process'),assert=require('node:assert/strict');
const src=path.resolve(__dirname,'../prototype');
for(const name of fs.readdirSync(src).filter(x=>x.endsWith('.js'))){cp.execFileSync(process.execPath,['--check',path.join(src,name)]);console.log('Syntax OK: '+name);}
const html=fs.readFileSync(path.join(src,'index.html'),'utf8');for(const m of html.matchAll(/(?:src|href)="([^"#]+)"/g)){assert(fs.existsSync(path.join(src,m[1])),'Missing asset '+m[1]);}
for(const name of fs.readdirSync(src).filter(x=>x.endsWith('.css'))){const css=fs.readFileSync(path.join(src,name),'utf8');assert.equal((css.match(/{/g)||[]).length,(css.match(/}/g)||[]).length,'Unbalanced CSS blocks: '+name);}
console.log('Local asset references and CSS block balance OK');
