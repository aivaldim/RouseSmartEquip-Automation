const { test, expect } = require("@playwright/test");
import PagesFactory from "../pages/pagesFactory";
const tests_data = require('../constants/tests-data/tests-data');

test.describe('Test 1', () => {

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

    test('Search "Android" successfully', async () => {
    
        await searchPage.enterTextToSearch(tests_data.test1.textToSearch);

        let links = await resultsPage.getResultLinks();
        
        links.forEach(element => {
            expect(element).toContainText(tests_data.test1.textToSearch);
        });
    });
});
