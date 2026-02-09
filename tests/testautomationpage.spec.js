const {test,expect}=require('@playwright/test');
test('verify the url is open or not',async({page}) =>{

await page.goto("https://testautomationpractice.blogspot.com/");

page .on('dialog',async(diloag)=>
{
    await page.waitForTimeout(5000);
    console.log(diloag.message());
    await diloag.dismiss();
})
await page.click('#confirmBtn');
await page.waitForTimeout(5000);
await page.hover("// button[text()='Point Me']");
await page.waitForTimeout(5000);
await page.selectOption('#colors',['Red','Blue','Green']);

await page.fill('#datepicker','11/19/2025');

await page.click('#start-date','11/20/2025');

await page.click('#end-date',12/27/2025);

await page.click('.submit-btn');


await page.dragAndDrop('#draggable','#droppable');
//await page.waitForTimeout(9000);
//await page.setInputFiles('#singleFileInput','C:\Users\LaptopL460\Desktop\Guru\Fatal n Non Fatal Bugs SS');
//await page.setInputFiles('#multipleFilesInput','C:\Users\LaptopL460\Downloads\English Practice Worksheet - 12.11.25 (2).pdf',
 //'C:\Users\LaptopL460\Downloads\English Practice Worksheet - 12.11.25 (1).pdf');
//await page.waitForTimeout(16000);

await page.fill('#Wikipedia1_wikipedia-search-input','neelam');//assertion
await page .click('.wikipedia-search-button')
await expect(page.locator('#Wikipedia1_wikipedia-search-results-header')).toHaveText('Search results');
 

})