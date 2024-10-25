const { test, expect } = require("@playwright/test");
import ResultsPage from "../pages/resultsPage";
import SearchPage from "../pages/searchPage";

test.describe("Test 2", () => {
    test('Validate regions amount', async ({ page }) => {
        const searchPage = new SearchPage(page);
        const resultsPage = new ResultsPage(page);

        const textToSearch = 'Android';
        
        await page.goto('/');
        
        await searchPage.enterTextToSearch(textToSearch);

        await resultsPage.clickAllRegions();

        const counter = await resultsPage.getAllRegions();

        expect(counter).toBeGreaterThan(10);
    });
});