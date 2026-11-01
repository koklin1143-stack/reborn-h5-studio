const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const viewports = [[320, 640], [390, 844], [430, 932], [375, 812]];
const output = 'previews/mobile-system-after';

function inspectLayout(name) {
  const dialog = document.querySelector('dialog[open]');
  const root = dialog || document.querySelector('#main');
  const issues = [];
  for (const box of [document.documentElement, root]) {
    if (box.scrollWidth > box.clientWidth + 1) issues.push(box.tagName + ' overflows by ' + (box.scrollWidth - box.clientWidth));
  }
  // Tabs and short-screen primary actions must be reachable without scrolling.
  let targets = [];
  if (!dialog && name === 'discover') targets = ['start','choose-start','search','browse'];
  if (name === 'inspiration') targets = ['in-continue','in-options'];
  if (name === 'editor' || name === 'object') targets = ['finish', 'wb-tool'];
  if (!dialog && ['points','mine','discover','mine-saved','points-saved'].includes(name)) targets.push('navigate');
  for (const action of targets) {
    const controls = [...document.querySelectorAll('[data-action="' + action + '"]')].filter(el => el.getClientRects().length);
    if (!controls.length) issues.push(action + ' missing');
    for (const el of controls) {
      const r = el.getBoundingClientRect();
      const hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      if (r.y < -1 || r.bottom > innerHeight + 1 || !el.contains(hit)) issues.push(action + ' obscured @ ' + Math.round(r.y));
      if (r.height < 43.9) issues.push(action + ' target height ' + r.height);
    }
  }
  for (const el of document.querySelectorAll('.header,.app,.bottom-nav,.ui-segment,.btn.primary,.dialog-head,.dialog-body,.ledger-entry,.my-tabs')) {
    if (!el.getClientRects().length) continue;
    const style = getComputedStyle(el);
    for (const prop of ['color','backgroundColor']) {
      const [r, g, b] = style[prop].match(/[\d.]+/g) || [];
      if (r !== g || g !== b) issues.push(el.className + ' has non-neutral ' + prop + ' ' + style[prop]);
    }
  }
  return issues;
}

async function main() {
  fs.mkdirSync(output, {recursive:true});
  const browser = await chromium.launch({channel:'msedge'});
  try {
    const page = await browser.newPage({viewport:{width:375,height:812},isMobile:true,hasTouch:true});
    const errors = [], layouts = [];
    page.on('pageerror', e => errors.push(e.message));
    const control = (action,id) => page.locator('[data-action="' + action + '"]' + (id ? '[data-id="' + id + '"]' : '')).filter({visible:true}).first();
    async function tap(action,id) {
      await control(action,id).click();
      await page.waitForFunction(() => document.querySelector('.app')?.dataset.busy !== 'true');
    }
    const nav = name => page.locator('[data-action=navigate][data-page="' + name + '"]').click();
    const selected = (action,id) => control(action,id).getAttribute('aria-pressed');
    async function capture(name) {
      await page.locator('#toast').waitFor({state:'hidden'});
      for (const [width,height] of viewports) {
        await page.setViewportSize({width,height});
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        const issues = await page.evaluate(inspectLayout,name);
        assert.deepEqual(issues, [], name + ' @ ' + width + 'px: ' + issues.join(', '));
        layouts.push(name + '@' + width);
        if (width === 375 || (width === 390 && ['points-saved','editor','discover','mine-saved'].includes(name))) {
          const suffix = width === 375 ? '' : '-390';
          await page.screenshot({path:output + '/' + name + suffix + '.png',animations:'disabled'});
        }
      }
    }
    const base = process.env.QA_URL || 'http://127.0.0.1:8879/prototype/index.html';
    await page.goto(base + '#discover');
    await control('start').waitFor();
    assert.deepEqual(await page.locator('#nav button').allTextContents(),['共创','积分','我的']);
    await capture('discover');
    await nav('points'); await capture('points');
    await tap('rights'); await capture('rights'); await tap('close');
    await nav('mine'); await capture('mine');
    await nav('discover'); await tap('search'); await capture('search'); await tap('close');
    await tap('detail'); await capture('detail'); await tap('back'); await tap('open-gallery');
    await capture('gallery'); await tap('gallery-sort','latest'); await tap('gallery-category','enamel');
    await tap('gallery-detail'); await capture('gallery-detail');
    await tap('gallery-like'); await tap('gallery-collect'); assert.equal(await selected('gallery-collect'),'true');
    await tap('back'); assert.equal(await selected('gallery-sort','latest'),'true'); assert.equal(await selected('gallery-category','enamel'),'true');
    await nav('discover'); await tap('start');
    await capture('inspiration'); await tap('in-continue'); await capture('editor');
    await tap('editor-surface','object');
    await page.waitForFunction(() => document.querySelector('#editor-object-status')?.dataset.state === 'ready');
    await capture('object'); await tap('cup-open');
    await page.waitForFunction(() => document.querySelector('#cup-status')?.dataset.state === 'ready');
    await capture('cup'); await tap('back'); await tap('finish'); await capture('finish');
    await tap('complete'); await page.waitForURL(/#result/); await capture('result');
    await nav('mine'); await capture('mine-saved'); assert.equal(await page.locator('.work-card').count(),1);
    await tap('regeneration'); await capture('archive'); await tap('close');
    await tap('filter','favorites'); assert.equal(await page.locator('.gallery-card').count(),1);
    await nav('points'); await capture('points-saved');
    assert.equal(await page.locator('.points-hero>strong').innerText(),'20分');
    await tap('ledger-source'); await capture('event'); await tap('close');
    await tap('archive-history','growth'); await page.locator('.day-index').first().click(); await page.locator('.journey-day li').first().waitFor(); await capture('timeline');
    await page.reload(); await page.locator('.week-plot button').first().waitFor();
    assert.match(await page.locator('.points-hero>strong').innerText(),/20/);
    await nav('mine'); await tap('filter','works'); assert.equal(await page.locator('.work-card').count(),1);
    assert.deepEqual(errors,[]);
    console.log('PASS ' + layouts.length + ' mobile layout checks, ' + layouts.length/viewports.length + ' states. Gallery, studio, WebGL, save, archive, points and reload passed.');
  } finally { await browser.close(); }
}
main().catch(e => {console.error(e); process.exitCode = 1;});
