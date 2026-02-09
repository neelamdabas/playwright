import{test, expect} from '@playwright/test';
 
test.describe('Dialog Handling',()=>{
    let page;
 
    test.beforeEach( async ({browser}) =>{
        page = await browser.newPage();
 
        await page.goto('');
    });
 
    test('Handle alert dialog', async ()=>{
        page.on('dialog', async dialog =>{
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('This is an alert');
            await dialog.accept();
        });
 
        await page.click('#alertBtn');
        await expect(page.locator('#result')).toHaveText('Alert was shown');
        await page.waitForTimeout(3000);
    });
 
});