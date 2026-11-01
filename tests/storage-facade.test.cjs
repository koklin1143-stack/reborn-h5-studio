const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),M=require('../prototype/foundation.js'),{IDBFactory}=require('fake-indexeddb'),createDB=require('../prototype/storage-driver.js');
function store(idb=new IDBFactory()){const context={window:{Studio:M,indexedDB:idb,createArchiveDB:createDB},URL,Blob,localStorage:{getItem:()=>null}};vm.createContext(context);vm.runInContext(fs.readFileSync(require.resolve('../prototype/storage.js'),'utf8'),context);return {S:context.window.LocalStore,idb};}
test('old drawing histories share identical strokes after reload without merging a different mark, and commits isolate later edits',async()=>{
 const {S,idb}=store(),driver=createDB(idb),s=M.blank(),d=M.addDraft(s,'enamel-peony');
 const first={tool:'pen',points:[[11,19],[25,38]]},second={tool:'pen',points:[[11,19],[25,39]]};
 M.edit(d,{sketchStrokes:[first]});M.edit(d,{sketchStrokes:[first,second]});M.edit(d,{sketchStrokes:[second]});
 await driver.commit(JSON.parse(JSON.stringify(s)));
 const restored=await S.load(),a=restored.drafts[0],past=a.past;
 assert.equal(past.at(-1).sketchStrokes[0],past.at(-2).sketchStrokes[0]);
 assert.notDeepEqual(a.sketchStrokes[0],past.at(-1).sketchStrokes[0]);
 const saving=S.commit(restored);M.undo(a);await saving;
 const disk=await driver.read('state','current');assert.deepEqual(disk.drafts[0].sketchStrokes,[second]);
 assert.deepEqual(a.sketchStrokes,[first,second]);S.close();driver.close();
});
test('public draft/asset facade saves canonical draft and Blob and restores both after reload',async()=>{const {S,idb}=store();const state=await S.load(),draft=M.addDraft(state,'enamel-peony');M.edit(draft,{userImageAssetId:'personal',prompt:'保留牡丹',vesselType:'plate'});await S.saveDraft(draft,[{id:'personal',blob:new Blob(['actual-fixture'],{type:'image/png'})}]);assert.equal(await (await S.getAsset('personal')).text(),'actual-fixture');S.close();const reopened=store(idb).S,loaded=await reopened.load();assert.equal(loaded.drafts[0].prompt,'保留牡丹');assert.equal((await reopened.getDraft(draft.id)).vesselType,'plate');await reopened.preload(loaded);assert.match(reopened.image('personal'),/^blob:/);reopened.close();});
test('facade upgrades v7 state and commits v8 without changing existing reward balance',async()=>{const idb=new IDBFactory(),db=createDB(idb),s=M.blank(),d=M.addDraft(s,'enamel-peony');M.complete(s,d.id,'旧稿');s.version=7;await db.commit(s);db.close();const {S}=store(idb);const loaded=await S.load();assert.equal(loaded.version,8);assert.equal(loaded.ledger.length,1);assert.equal(loaded.ledger[0].points,20);assert.equal(loaded.works[0].title,'旧稿');const raw=await createDB(idb).read('state','current');assert.equal(raw.version,8);S.close();});
