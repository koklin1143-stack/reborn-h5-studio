const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

async function check(browser, url) {
  const context = await browser.newContext({ viewport: { width: 375, height: 667 }, hasTouch: true });
  try {
    const page = await context.newPage();
    await page.goto(url + '#mine');
    const action = name => page.locator('[data-action="' + name + '"]');
    const toggle = action('toggle-work-selection');
    const remove = action('delete-selected-works');
    const confirm = action('confirm-work-selection');
    const all = page.locator('#works-select-all');
    const count = page.locator('#work-selection-count');
    await page.locator('.my-tabs').waitFor();
    assert.equal(await toggle.count(), 0);
    const fixture = await page.evaluate(async () => {
      const s = await LocalStore.load();
      const works = ['红花杯', '黑边小盘', '留着的碗'].map(title =>
        Studio.complete(s, Studio.addDraft(s).id, title));
      const publication = Studio.publish(s, works[0].id, { rights: true, display: true, inspiration: true });
      const submission = Studio.submit(s, works[1].id, true);
      const draft = Studio.addDraft(s);
      s.ui.filter = 'works';
      await LocalStore.commit(s);
      return { ids: works.map(w => w.id), publication: publication.id, submission: submission.id, draft: draft.id, points: Studio.stats(s).balance };
    });
    await page.reload();
    await toggle.click();
    assert.equal(await remove.isDisabled(), true);
    assert.equal(await page.locator('#nav').isVisible(), false);
    await page.locator('.work-pick').filter({ hasText: '红花杯' }).tap();
    assert.equal(await count.innerText(), '已选 1 件');
    assert.equal(await all.evaluate(el => el.indeterminate), true);
    await all.click();
    assert.equal(await count.innerText(), '已选 3 件');
    await all.click();
    assert.equal(await remove.isDisabled(), true);
    await page.getByRole('checkbox', { name: '选择作品：黑边小盘' }).check();
    await toggle.click();
    await toggle.click();
    assert.equal(await count.innerText(), '已选 0 件');
    await page.getByRole('checkbox', { name: '选择作品：红花杯' }).check();
    await action('filter').and(page.locator('[data-id="drafts"]')).click();
    assert.equal(await toggle.count(), 0);
    assert.equal(await page.locator('#work-batch-bar').isVisible(), false);
    await action('filter').and(page.locator('[data-id="works"]')).click();
    await toggle.click();
    assert.equal(await count.innerText(), '已选 0 件');
    await page.locator('.work-pick').filter({ hasText: '红花杯' }).tap();
    await page.locator('.work-pick').filter({ hasText: '黑边小盘' }).tap();
    await remove.click();
    assert.match(await page.locator('dialog').innerText(), /删除这 2 件作品/);
    assert.deepEqual(await page.locator('.batch-delete-list li').allTextContents(), ['黑边小盘', '红花杯']);
    await page.locator('dialog').getByRole('button', { name: '取消', exact: true }).click();
    assert.equal(await count.innerText(), '已选 2 件');
    await remove.click();
    await page.evaluate(() => {
      const commit = LocalStore.commit;
      LocalStore.commit = async () => {
        LocalStore.commit = commit;
        throw Error('本地存储测试失败');
      };
    });
    await confirm.click();
    await page.locator('.dialog-error').waitFor();
    assert.equal(await page.evaluate(async () => (await LocalStore.load()).works.length), 3);
    await confirm.click();
    await page.locator('dialog').waitFor({ state: 'hidden' });
    await page.reload();
    await toggle.waitFor();
    assert.equal(await page.locator('article.work-card').count(), 1);
    const after = await page.evaluate(async () => {
      const s = await LocalStore.load();
      return { works: s.works.map(w => w.id), drafts: s.drafts.map(d => d.id), submissions: s.submissions.map(x => x.id), publications: s.publications, points: Studio.stats(s).balance };
    });
    assert.deepEqual(after.works, [fixture.ids[2]]);
    assert.ok(after.drafts.includes(fixture.draft));
    assert.ok(after.submissions.includes(fixture.submission));
    assert.equal(after.points, fixture.points);
    assert.equal(after.publications.find(p => p.id === fixture.publication).state, 'withdrawn');
    assert.equal(await action('delete').count(), 1);
    await toggle.click();
    await all.check();
    await remove.click();
    await confirm.click();
    await page.getByText('还没有作品', { exact: true }).waitFor();
    assert.equal(await page.locator('#nav').isVisible(), true);
    assert.equal(await toggle.count(), 0);
  } finally {
    await context.close();
  }
}

(async () => {
  const browser = await chromium.launch({ channel: 'msedge' });
  try {
    await check(browser, 'http://127.0.0.1:8879/index.html');
    await check(browser, pathToFileURL(path.resolve(__dirname, '../物之再生-H5-单文件.html')).href);
    console.log('Work multi-selection, cancellation, atomic retry and persistent deletion passed on both builds.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
