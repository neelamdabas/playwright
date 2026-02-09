import { test, expect } from '@playwright/test';

test('popup window', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/popup.html');

  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator("//button[@onclick='openWindow()']").click()]);

  await popup.waitForLoadState('domcontentloaded');

  await expect(popup.getByText('This is the popup window')).toBeVisible();

  await popup.locator('#confirmBtn').click();

  const message = popup.locator('#message');

  await expect(message).toBeVisible();
  await expect(message).toHaveText('You clicked the button');
});