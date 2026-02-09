const { test, expect } = require('@playwright/test');

test('Drag & Drop Sliders', async ({ page }) => {

  // Step 1: Open playground page
  await page.goto("https://www.lambdatest.com/selenium-playground");
  await page.waitForTimeout(2000);

  // Click Drag & Drop Sliders
  await page.click('//a[text()="Drag & Drop Sliders"]');
   await page.waitForTimeout(2000);

  // Step 2: Select slider with default value 15
  const slider = page.locator('//input[@value="15"]');
   await page.waitForTimeout(2000);
  const sliderValue = page.locator('//output[@id="rangeSuccess"]');
   await page.waitForTimeout(2000);

  // Drag slider to make value = 95
  await expect(sliderValue).toHaveText('15');
   //await page.waitForTimeout(2000);
  await slider.fill('95');
   //await page.waitForTimeout(2000);
  
  // Validate the value is 95
  await expect(sliderValue).toHaveText("95");

});