
const { test, expect } = require('@playwright/test');

// Open browser in maximized mode
 


test('verify the url is open or not', async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");

  await page.locator('#firstName').fill("NEELAM");
  await page.locator('#lastName').fill("DABAS");
  await page.locator('#userEmail').fill("neelamdabas@gmail.com");
  await page.locator('#userNumber').fill('7042120101');

  await page.locator('label[for="gender-radio-2"]').click();

  await page.locator('#dateOfBirthInput').fill('03 Apr 2001');
  await page.keyboard.press('Enter');

  await page.locator('label[for="hobbies-checkbox-2"]').click();

  await page.locator('#currentAddress')
    .fill('ACE DIVINO, SECTOR 1, NOIDA, UTTAR PRADESH');

  await page.locator("#state").click();
  await page.keyboard.type("NCR");
  await page.keyboard.press("Enter");
 
  await page.locator("#city").click();
  await page.keyboard.type("Delhi");
  await page.keyboard.press("Enter");
  
});
