import{test,expect}from '@playwright/test';
import { LoginPage } from '../pages/loginpage.JS';

test('veryfy the url is open or not',async({page})=>{
const loginpage=new LoginPage(page)
await  page. goto ("https://www.saucedemo.com/");
await loginpage.login('standard_user','secret_sauce');
//addtocatawait expect.soft(page.locator('#user-name')).toHaveValue('standard_user');
await page.locator(".bm-burger-button button").click();
  //  await page.locator('#logout_sidebar_link').textContent('Logout')
 
  await expect.soft(page.locator("#logout_sidebar_link")).toHaveText("Logout");

})











