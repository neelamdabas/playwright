const {test,expect}=require('@playwright/test');

test('verify the url is open or not',async({page})=>
{
await  page. goto ("https://www.lambdatest.com/selenium-playground/");

await page.locator('a[href="https://www.testmuai.com/selenium-playground/input-form-demo/"]').click();
await page.locator('//button[text()="Submit"]').click();

const firstField = page.locator('input[required]').first();

  
  const validationMessage = await firstField.evaluate(
    (el) => el.validationMessage
  );

  console.log("Validation Message:", validationMessage);

  
  expect(validationMessage).toBe("Please fill out this field.");


  await page.locator('//input[@placeholder="Name"]').fill("Neelam");
  await page.locator('#inputEmail4').fill("test@qabrains.com");
  await page.locator('#inputPassword4').fill('Hello123');
await page.selectOption('//select[@class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"]',"United States");
await page.locator('#websitename').fill("india.com");
await page.locator('#inputCity').fill("Noida");

await page.locator('//input[@id="company"]').fill('abc company');
await page.locator('#inputAddress1').fill("Ace divino");
await page.locator('#inputAddress2').fill("Ace city");
await page.locator('#inputState').fill("utter pardesh");
await page.locator('//input[@id="inputZip"]').fill('100039');
await page.locator('//button[@class="bg-lambda-900 hover:bg-transparent hover:text-lambda-900 border border-lambda-900 text-white rounded p-10 focus:outline-none w-180 selenium_btn py-5 px-10 rounded"]').click();
await page.waitForTimeout(5000);
});


