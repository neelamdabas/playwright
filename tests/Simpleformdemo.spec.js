const {test,expect}=require('@playwright/test');

test('veryfy the url is open or not',async({page})=>
{
await  page. goto ("https://www.lambdatest.com/selenium-playground/");
await expect(page).toHaveURL("https://www.testmuai.com/selenium-playground/");

await page.locator('//a[@href="https://www.testmuai.com/selenium-playground/simple-form-demo/"]').click();

await page.locator('//input[@id="user-message"]').type("Welcome to Lambda Test");

await page.locator('#showInput').click();


await expect(page.locator('#message')).toHaveText("Welcome to Lambda Test");


})
