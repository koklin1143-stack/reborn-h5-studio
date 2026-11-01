const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const out = process.env.QA_OUT;

(async () => {
  const browser = await chromium.launch({channel: 'msedge'});
  try {
    for (const [width, height] of [[375,812], [390,844], [320,640], [430,932]]) {
      const page = await browser.newPage({viewport:{width,height}, isMobile:true, hasTouch:true});
      page.setDefaultTimeout(7000);
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      const online = width === 375 || width === 430;
      await page.route('**/api/pattern/status', route => route.fulfill({json:{
        available:online, model:'qwen-image-2.1-turbo', ruleVersion:require('../prototype/pattern-grammar.js').version
      }}));
      await page.route('**/api/pattern', route => route.fulfill({status:502,json:{error:'内部审稿意见：提示词测试'}}));
      const tap = (action,id) => page.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
      const snap = async name => { if (out && width===375) { fs.mkdirSync(out,{recursive:true}); await page.screenshot({path:path.join(out,name+'.png'),animations:'disabled'}); } };
      await page.goto('http://127.0.0.1:8879/index.html#discover');
      await page.locator('.object-directory').waitFor();
      await snap('共创首页');
      for(const action of ['open-gallery','about','browse']){
        await tap(action);
        if(action==='open-gallery'){await page.waitForURL(/#gallery$/);await tap('back');}
        else {await page.locator('dialog[open]').waitFor();await tap('close');}
      }
      await tap('choose-start'); await tap('start-method','sketch');
      await page.locator('#sketch-pad').waitFor();
      assert.equal(await page.locator('[data-action=in-convert]').count(),0);
      if (online) {
        await page.locator('.input-footer [data-action=in-ai]').waitFor();
        const b = await page.locator('#sketch-pad').boundingBox();
        await page.mouse.move(b.x+50,b.y+70); await page.mouse.down();
        await page.mouse.move(b.x+104,b.y+92,{steps:8}); await page.mouse.up();
        await snap('画几笔');
        await tap('in-ai'); await tap('in-ai-confirm');
        await page.locator('[data-ai-state=failed]').waitFor();
        assert.doesNotMatch(await page.locator('.input-footer').innerText(),/内部审稿|提示词测试/);
      } else { await page.locator('[data-action=in-reconnect]').waitFor(); }
      for (const type of ['text','image']) {
        await tap('in-options'); await tap('in-tab',type);
        assert.equal(await page.locator('[data-action=in-convert]').count(),1);
      }
      await tap('back');
      await page.waitForURL(/#discover$/);
      await page.locator('[data-action=navigate][data-page=mine]').click();
      await page.locator('.my-tabs').waitFor();
      await page.reload(); await page.locator('.my-tabs').waitFor();
      const ids=await page.evaluate(async () => {
        const s=await LocalStore.load(), base=Studio.addDraft(s,'enamel-peony');
        base.title='春日牡丹杯'; base.sourceObjectId='object:'+Explore.items.find(o=>o.type==='plate').id;
        const work=Studio.complete(s,base.id,base.title);
        const d=Studio.addDraft(s); d.title='我的手绘草稿'; d.inputTab='text';
        d.prompt='把一条小鱼画在杯上'; d.sketchAssetId='qa-missing'; d.inputStage=true;
        const loadPrint=async name=>(await fetch('/previews/enamel-pilot/'+name+'.png')).blob();
        const r=Studio.addDraft(s); r.inputStage=true; r.inputTab='sketch'; r.sketchAssetId='qa-original';
        const local={assetId:'qa-pattern',sourceAssetId:r.sketchAssetId,method:'sketch',key:InspirationModel.conversionKey(r),label:'旧版手绘',proofNote:'内部审稿意见'};
        r.patternConversion=local;
        const a=Studio.addDraft(s);
        const [reference,study]=Object.entries(PatternGrammar.references)[0];
        a.imageId=local.assetId; a.inputStage=true; a.inputTab='sketch'; a.aiVariants=[{...local,
          selection:{sketchSubject:'垂耳的小狗'},record:{...local,aiGenerated:true,recipe:{reference,sourceUrl:study.url,accession:study.accession,technique:'regionInk',design:{redraw:'内部制稿提示'}}}}];
        const ai=Studio.complete(s,a.id,'垂耳小狗');ai.previewAssetId='qa-saved-preview';
        s.ui.filter='works'; await LocalStore.commit(s,[{id:r.sketchAssetId,blob:await loadPrint('sketch')},{id:local.assetId,blob:await loadPrint('sketch-blue')},{id:ai.previewAssetId,blob:await loadPrint('cup-blue')}]);
        return {work:work.id,draft:d.id,legacy:r.id,ai:ai.id};
      });
      await page.reload();
      await tap('filter','works'); await tap('regeneration',ids.work);
      const dialog=page.locator('dialog[open]');
      assert.match(await dialog.innerText(),/春日牡丹杯/); assert.match(await dialog.innerText(),/项目示意/);
      assert.match(await dialog.innerText(),/搪瓷杯/);
      assert.doesNotMatch(await dialog.innerText(),/未提供|未填写|实际步骤|当前引用文件|关键版本|纹样版本|制作方式|重新检查文件/);
      assert.ok(await dialog.locator('.origin-card').evaluate(el=>el.scrollWidth<=el.clientWidth+1));
      await snap('再生档案'); await tap('close'); await tap('regeneration',ids.ai);
      assert.match(await dialog.innerText(),/AI 辅助制纹与配色/);
      assert.match(await dialog.innerText(),/垂耳的小狗/);
      assert.equal(await dialog.locator('.origin-sequence figure').count(),2);
      await dialog.locator('.origin-thumb img').waitFor();
      assert.ok(await dialog.locator('.origin-sample img').evaluateAll(async imgs=>{
        await Promise.all(imgs.map(i=>i.decode()));
        return imgs.length===2&&imgs.every(i=>i.clientHeight<=i.parentElement.clientHeight+1);
      }));
      await snap('手绘作品档案');
      assert.match(await dialog.locator('.origin-facts a').getAttribute('href'),/^https:\/\//);
      assert.doesNotMatch(await dialog.innerText(),/内部制稿提示|qa-pattern/);
      await tap('close'); await tap('filter','drafts'); await tap('resume',ids.legacy);
      await page.getByRole('button',{name:'使用这份本地纹样'}).waitFor();
      assert.doesNotMatch(await page.locator('.inspiration-screen').innerText(),/内部审稿意见|仅用本地规则预览/);
      await tap('in-continue'); await page.waitForURL(/#editor$/);
      await page.goto('http://127.0.0.1:8879/index.html#mine'); await page.locator('.my-tabs').waitFor();
      await tap('filter','drafts'); await tap('regeneration',ids.draft);
      assert.match(await dialog.innerText(),/把一条小鱼画在杯上/);
      await tap('check-record-assets'); await dialog.locator('.origin-recovery').waitFor();
      await dialog.locator('[data-action=resume]').click(); await page.locator('.inspiration-screen').waitFor();
      assert.equal(await page.locator('#inspiration-prompt').inputValue(),'把一条小鱼画在杯上');
      assert.deepEqual(errors,[]); console.log(width+'px OK'); await page.close();
    }
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1;});
