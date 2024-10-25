const { test, expect } = require("@playwright/test");
import ResultsPage from "../pages/resultsPage";
import SearchPage from "../pages/searchPage";

test.describe("Test 1", () => {
    test('Search "Android" successfully', async ({ page }) => {
        const searchPage = new SearchPage(page);
        const resultsPage = new ResultsPage(page);

        const textToSearch = 'Android';
        
        await page.goto('/');
        
        await searchPage.enterTextToSearch(textToSearch);

        let links = await resultsPage.getResultLinks();
        
        links.forEach(element => {
            expect(element).toContainText(textToSearch);
        });
    });
});
