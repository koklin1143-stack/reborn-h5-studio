const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const base = process.env.QA_URL || 'http://127.0.0.1:8879/prototype/index.html';

async function main() {
  const browser = await chromium.launch({channel:'msedge'});
  try {
    const page = await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
    const errors = [], sent = [];
    page.on('pageerror',e => errors.push(e.message));
    await page.route('**/api/search/status',route=>route.fulfill({json:{available:true,provider:"bailian"}}));
    await page.route('**/api/search',async route=>{
      sent.push(route.request().postDataJSON());
      await new Promise(done=>setTimeout(done,100));
      await route.fulfill({json:{mode:'ai',ids:['enamel-plate-01']}});
    });
    const tap = action => page.locator('[data-action="'+action+'"]:visible').first().click();
    await page.goto(base+'#discover');await page.locator('.category-voice').waitFor();
    const rail=page.locator('.explore-category-bar .category-scroll'), mic=page.locator('.category-voice');
    assert.equal(await rail.locator('button').count(),12);
    assert.doesNotMatch(await rail.innerText(),/未开放|即将开放/);
    assert.equal(await rail.locator('[aria-pressed=true]').innerText(),'搪瓷');
    const cdp=await page.context().newCDPSession(page);
    const box=await rail.boundingBox(),y=box.y+box.height/2;
    async function swipe(from,to){
      await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:from,y}]});
      for(let i=1;i<=8;i++) {
        await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:from+(to-from)*i/8,y}]});
      }
      await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    }
    const originalX=(await mic.boundingBox()).x;
    await swipe(box.x+box.width-12,box.x+14);
    await page.waitForFunction(()=>document.querySelector('.category-scroll').scrollLeft>60);
    assert.equal((await mic.boundingBox()).x,originalX);
    await rail.locator('[data-id=gauge]').click();assert.match(await page.locator('dialog').innerText(),/工业仪表 · 即将开放/);
    await tap('close');assert.equal(await rail.locator('[aria-pressed=true]').innerText(),'搪瓷');
    await rail.evaluate(el=>el.scrollLeft=0);
    await page.mouse.move(box.x+box.width-8,y);await page.mouse.down();await page.mouse.move(box.x+18,y,{steps:10});await page.mouse.up();
    assert.ok(await rail.evaluate(el=>el.scrollLeft)>60);assert.equal(await page.locator('dialog').isVisible(),false);
    const left=await rail.evaluate(el=>el.scrollLeft);
    await page.mouse.move(box.x+18,y);await page.mouse.down();await page.mouse.move(box.x+box.width-8,y,{steps:10});await page.mouse.up();
    assert.ok(await rail.evaluate(el=>el.scrollLeft)<left);
    for(const [width,height] of [[320,640],[375,812],[390,844],[430,932]]){
      await page.setViewportSize({width,height});
      const position=await mic.boundingBox();
      for(const side of ['end','start']){
        await rail.evaluate((el,side)=>{el.scrollLeft=side==='end'?el.scrollWidth:0;},side);
        const visible=await rail.evaluate(el=>{const bounds=el.getBoundingClientRect();return [...el.children].filter(btn=>{const r=btn.getBoundingClientRect();return Math.min(r.right,bounds.right)-Math.max(r.left,bounds.left)>1;}).map(b=>b.dataset.id);});
        assert.equal(visible.length,4,width+'px '+side+' shows '+visible.join(','));
        const current=await mic.boundingBox();assert.equal(current.x,position.x);
        assert.ok(current.x+current.width<=width+1);
        assert.ok(await mic.evaluate(el=>{const r=el.getBoundingClientRect();return el.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2));}));
      }
    }
    await page.setViewportSize({width:375,height:812});
    await tap('search');await page.locator('#search-ai-settings').waitFor();assert.equal(await page.locator('#voice-toggle').getAttribute('aria-pressed'),'false');
    await page.locator('#search-query').fill('有西湖字样的纪念盘');assert.deepEqual(sent,[]);await tap('search-ai');
    await page.waitForFunction(()=>document.querySelector('#search-status').textContent.includes('百炼匹配'));
    await page.locator('#search-results .catalog-row').click();assert.match(await page.locator('.object-title').innerText(),/立鹤牌西湖博览会纪念盘/);
    await tap('search');await page.locator('#search-ai-settings').waitFor();await page.evaluate(()=>{navigator.mediaDevices.getUserMedia=async()=>{throw new DOMException('denied','NotAllowedError');}});
    await tap('search-voice');await page.getByText(/未获麦克风权限/).waitFor();await page.locator('#search-query').fill('洗脸');assert.match(await page.locator('#search-results').innerText(),/平海铭文搪瓷脸盆/);
    assert.deepEqual(errors,[]);
    console.log('PASS catalogue navigation, four widths, submitted search and denied-microphone fallback');
  } finally {await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
