async function openStyle(page){
 const style=page.locator('details.print-style');
 if(!await style.evaluate(el=>el.open))await style.locator('summary').click();
 return style;
}
async function pickReference(page,id){
 const style=await openStyle(page);
 await style.locator('[data-action="in-reference"][data-id="motif:'+id+'"]').click();
}
module.exports={openStyle,pickReference};
