const toggleSample=async(page,id)=>{
 await page.locator('.sample-selector').waitFor();
 const button=page.locator('[data-action=in-photo-toggle][data-id="'+id+'"]');
 if(!await button.count()){
  await page.locator('.sample-search select').selectOption('all');await page.locator('.sample-search input').fill('');
  const prev=page.locator('[data-pg="-1"]'),next=page.locator('[data-pg="1"]');
  while(await prev.count()&&await prev.isEnabled())await prev.click();
  while(!await button.count()&&await next.count()&&await next.isEnabled())await next.click();
 }
 await button.click();
};
const focusSample=async(page,id)=>{
 const current=page.locator('[data-action=in-photo-color]');for(let i=0;i<6;i++){
  if(await current.getAttribute('data-id')===id)return;
  await page.getByRole('button',{name:'预览下一份已选素材'}).click();
 }
 throw Error('没有选中这份素材 '+id);
};
const currentSize=async page=>Number((await page.locator('.layer-handle').getAttribute('aria-label')).match(/(\d+)%/)[1]);
module.exports={toggleSample,focusSample,currentSize};
