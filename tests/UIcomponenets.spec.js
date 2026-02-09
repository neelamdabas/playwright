 const {test,expect} = require('@playwright/test');
 
 test('veryfy the url is open or not',async({page})=>
 {
 await  page. goto ('https://rahulshettyacademy.com/loginpagePractise/');
 await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
const username=page.locator('#username');
const signin=page.locator('#password');
const dropdown=page.locator('select.form-control')
await dropdown.selectOption("Teacher")
//await page.pause();
await page.locator('.radiotextsty').last().click();
 await expect(page.locator('.radiotextsty').last()).toBeChecked();
await page.locator('#okayBtn').click();

await page.locator('#terms').click();

await expect(page.locator('#terms')).toBeChecked();
 

 })
