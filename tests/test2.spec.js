const { test, expect } = require("@playwright/test");
import PagesFactory from "../pages/pagesFactory";
const tests_data = require('../constants/tests-data/tests-data');

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
        
        await searchPage.enterTextToSearch(tests_data.test2.textToSearch);

        await resultsPage.clickAllRegions();

        const counter = await resultsPage.getAllRegions();

        expect(counter).toBeGreaterThan(10);
    });
});