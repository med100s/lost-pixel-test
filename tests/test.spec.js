import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:5173/'

test('visual test main page', async ({ page }) => {
    await page.goto(baseUrl);


    // await page.screenshot({ path: 'visual test main page.png', fullPage: true })

    //  🚀🚀🚀 We are adding visual tests here 🚀🚀🚀
    await expect(page).toHaveScreenshot("visual_test_main_page.png");

});

