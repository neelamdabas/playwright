const {test,expect}=require('@playwright/test');

test('veryfy the url is open or not',async({page})=>
{
await  page. goto ('https://rahulshettyacademy.com/AutomationPractice/');


  await page.on('dialog',dialog=>dialog.accept());
  await page.locator("#confirmbtn").click();
  //page.waitForTimeout(5000);

 // await page.pause
  await page.locator('#mousehover').hover();
  
  const framesPage=page.frameLocator('#courses-iframe');


 await framesPage.locator("//li[@class='current']/a].visible").click();
 const textCheck=await framesPage.locator("//h2/span['text()=13,522']").textcontent();
 console.log(textcheck.split(" ")[1]);




})
  
  







