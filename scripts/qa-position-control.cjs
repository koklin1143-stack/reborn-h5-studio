/* Inline names select the visible part; the switch controls only that part. */
module.exports=page=>{
 const open=async()=>page.locator('.print-zone').waitFor();
 const close=async()=>{if(await page.locator('#dialog').evaluate(e=>e.open))await page.keyboard.press('Escape');};
 const choose=async id=>{await open();await page.locator(`[data-action=cup-position-edit][data-id=${id}]`).click();};
 const ensurePrint=async()=>{if(!await page.evaluate(()=>Cup3D.diagnostics().printEnabled))await page.locator('[data-position-print]').check();};
 return {open,close,choose,ensurePrint};
};
