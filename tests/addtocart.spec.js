const {test,expect}=require('@playwright/test');

test('veryfy the url is open or not',async({page})=>
{
await  page. goto ("https://www.saucedemo.com/");
await page.locator('#user-name').fill('standard_user');
await expect.soft(page.locator('#user-name')).toHaveValue('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();

await page.locator('#add-to-cart-sauce-labs-backpack').click()
await page.locator('#add-to-cart-sauce-labs-bike-light').click();
await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
//await page.waitForTimeout(5000);
await page.locator('#shopping_cart_container').click();
//await page.waitForTimeout(5000);
await page.locator('#checkout').click();
//await page.waitForTimeout(5000);
await page.locator('#first-name').fill('neelam');
await page.locator('#last-name').fill('dabas');
await page.locator('#postal-code').fill('12345');
//await page.waitForTimeout(5000);
await page.locator('#continue').click();
//await page.waitForTimeout(9000);
await page.locator('#finish').click();

})
