const { test, expect } = require("@playwright/test");
import PagesFactory from "../pages/pagesFactory";

test.describe("Test 2", () => {

    let pagesFactory;
    let searchPage;
    let resultsPage;

    test.beforeEach(async ({ page }) => {
        pagesFactory = new PagesFactory(page);
        searchPage = pagesFactory.getSearchPage();
        resultsPage = pagesFactory.getResultsPage();

        await page.goto('/');
        await page.waitForLoadState('load');
    });

    test('Validate regions amount', async () => {
        const textToSearch = 'Android';
        
        await searchPage.enterTextToSearch(textToSearch);

        await resultsPage.clickAllRegions();

        const counter = await resultsPage.getAllRegions();

        expect(counter).toBeGreaterThan(10);
    });
});