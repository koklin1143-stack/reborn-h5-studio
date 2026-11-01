const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const url = 'http://127.0.0.1:8879/index.html';

(async () => {
  const browser = await chromium.launch({channel:'msedge',args:['--use-fake-device-for-media-stream','--use-fake-ui-for-media-stream']});
  try {
    const page = await browser.newPage({viewport:{width:375,height:812},hasTouch:true,isMobile:true,permissions:['microphone']});
    page.setDefaultTimeout(6000);
    const errors=[],calls=[];
    page.on('pageerror', error=>errors.push(error.message));
    const tap=(action,id)=>page.locator('[data-action="'+action+'"]'+(id?'[data-id="'+id+'"]':'')).filter({visible:true}).first().click();
    const shot=async name=>{if(process.env.QA_OUT){fs.mkdirSync(process.env.QA_OUT,{recursive:true});await page.screenshot({path:path.join(process.env.QA_OUT,name+'.png'),animations:'disabled'});}};
    await page.goto(url+'#points');
    await page.getByText('首次保存作品后，可以在这里查看积分来源。').waitFor();
    assert.equal(await page.locator('.account-line,.plot-day').count(),0);
    const newest=await page.evaluate(async()=>{
      const s=await LocalStore.load(),titles=['春日牡丹','蓝边花枝','双喜团花','双喜团花','故园里的喜鹊'];
      const days=['2025-09-12','2025-10-28','2025-10-30','2025-10-30','2025-10-31'];
      let id;
      for(let i=0;i<titles.length;i++){
        const d=Studio.addDraft(s,'enamel-peony'); const w=Studio.complete(s,d.id,titles[i]);id=w.id;
        const stamp=new Date(days[i]+'T'+(10+i)+':08:00').toISOString();
        s.ledger.at(-1).createdAt=stamp;s.growth.at(-1).createdAt=stamp;
        if(i===2){
          s.growth.push({...s.growth.at(-1),id:Studio.uid('growth')});
          Studio.publish(s,w.id,{rights:true,display:true,inspiration:true});s.growth.at(-1).createdAt=stamp;
        }
      }
      await LocalStore.commit(s);return id;
    });
    await page.reload();await page.locator('.week-plot').waitFor();
    const dialog=page.locator('dialog[open]');
    for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
      await page.setViewportSize({width,height});
      assert.equal(await page.locator('.week-plot .plot-day').count(),7);
      assert.equal(await page.locator('.week-plot button').count(),3);
      assert.equal(await page.locator('main .account-line').count(),3);
      assert.match(await page.locator('main .account-month h3').innerText(),/合计 \+80 分/);
      if(width===375){await page.locator('#main').evaluate(el=>el.scrollTop=0);await shot('创作成长档案');}
      await tap('growth-day','2025-10-30'); assert.equal(await dialog.locator('li').count(),2);await tap('close');
      await tap('archive-history','growth');assert.equal(await dialog.locator('.day-index').count(),4);
      await dialog.locator('[data-id="2025-10-30"]').click();
      assert.equal(await dialog.locator('li').count(),2);
      assert.equal(await dialog.getByText('双喜团花',{exact:true}).count(),2);
      assert.match(await dialog.innerText(),/在本机展示/);
      if(width===375)await shot('当天的创作');
      await dialog.locator('[data-action=view-work]').first().click();await page.waitForURL(/#result/);
      await tap('back');await dialog.locator('.journey-day').waitFor();
      await dialog.getByRole('button',{name:'返回全部足迹'}).click();await dialog.locator('.day-index').first().waitFor();await tap('close');
      await tap('archive-history','ledger');assert.equal(await dialog.locator('.account-month').count(),2);assert.equal(await dialog.locator('.account-line').count(),5);
      if(width===375)await shot('全部积分明细');
      await dialog.locator('.account-line').first().click();assert.match(await dialog.innerText(),/故园里的喜鹊/);
      assert.doesNotMatch(await dialog.innerText(),/legacy|work-|规则版本/);
      await dialog.getByRole('button',{name:'返回全部明细'}).click();assert.equal(await dialog.locator('.account-line').count(),5);await tap('close');
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    }
    await tap('ledger-source');await tap('view-work',newest);await page.waitForURL(/#result/);await tap('back');await page.waitForURL(/#points/);
    await page.route('**/api/search/status',r=>r.fulfill({json:{available:true,provider:'bailian'}}));
    await page.route('**/api/search/transcribe',r=>{calls.push('voice');return r.fulfill({json:{text:'带牡丹花纹的盘子'}})});
    await page.route('**/api/search',r=>{calls.push('search');return r.fulfill({json:{mode:'ai',ids:['enamel-plate-01']}})});
    await page.goto(url+'#discover');await page.setViewportSize({width:375,height:812});await tap('search');await page.locator('#search-ai-settings').waitFor();
    assert.equal(await page.locator('.query-sample:visible').count(),3);
    await shot('找物');
    await tap('search-voice');await page.waitForFunction(()=>document.querySelector('#voice-toggle').getAttribute('aria-pressed')==='true');await page.waitForTimeout(700);await tap('search-voice');
    await page.waitForFunction(()=>document.querySelector('#search-query').value.includes('牡丹') && document.querySelector('#search-results .catalog-row'));
    assert.deepEqual(calls,['voice','search']);assert.equal(await page.locator('.query-sample:visible').count(),0);
    await tap('clear-search');assert.equal(await page.locator('.query-sample:visible').count(),3);
    await tap('close');assert.deepEqual(errors,[]);
    console.log('Passed four mobile widths, activity dates, five events, two monthly totals, receipt/back, empty state and microphone flow with mocked APIs');
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1;});
