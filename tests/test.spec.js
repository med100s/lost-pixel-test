import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:5173/'

test('visual test main page', async ({ page }) => {
    await page.goto(baseUrl);

    //  🚀🚀🚀 We are adding visual tests here 🚀🚀🚀
    await expect(page).toHaveScreenshot("visual_test_main_page.png");

});

