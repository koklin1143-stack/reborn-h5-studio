/* Shared UI driver: names select the editor, checkboxes control independent printing. */
module.exports=page=>{
 const open=async()=>{if(!await page.locator('#dialog').evaluate(e=>e.open))await page.locator('[data-action=cup-positions]').last().click();};
 const close=async()=>{if(await page.locator('#dialog').evaluate(e=>e.open))await page.keyboard.press('Escape');};
 const choose=async id=>{await open();const button=page.locator(`[data-action=cup-position-edit][data-id=${id}]`);if(await button.count())await button.click();else {await page.locator(`[data-position-print=${id}]`).check();await close();}};
 const ensurePrint=async()=>{if(!await page.evaluate(()=>Cup3D.diagnostics().printEnabled)){await open();const id=await page.locator('[data-print-position]').getAttribute('data-print-position');await page.locator(`[data-position-print=${id}]`).check();await close();}};
 return {open,close,choose,ensurePrint};
};
