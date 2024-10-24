// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Test 1", () => {
    test('Search "Android: successfully', async ({ page }) => {
        await page.goto('/');
    });
});
