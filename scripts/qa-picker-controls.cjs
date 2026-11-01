// Navigate the same visible steps and settings as a touch user.
async function adjust(page){
 if(await page.locator('.picker-next').isVisible())await page.locator('.picker-next:enabled').click();
 await page.locator('.picker-adjustment:visible').waitFor();
}
async function selection(page){
 if(await page.locator('.picker-back').isVisible())await page.locator('.picker-back').click();
 await page.locator('.picker-next:enabled').waitFor();
}
async function setting(page,key){
 await adjust(page);await page.locator('[data-picker-setting="'+key+'"]').click();
}
async function name(page,value){await setting(page,'name');await page.locator('[name=crop-name]').fill(value);}
module.exports={adjust,selection,setting,name};
