const {test,expect}=require('@playwright/test');

test('veryfy the url is open or not',async({page})=>
{
await  page. goto ('https://rahulshettyacademy.com/AutomationPractice/');
await page.locator("//label[@for='radio1']").click();
await page.locator("//input[@autocomplete]").fill("india");
await page.locator("#dropdown-class-example").click();
await page.selectOption("#dropdown-class-example",{index:2});
await page.locator("#checkBoxOption3").check();

})