const { test, expect } = require("@playwright/test");
import PagesFactory from "../pages/pagesFactory";

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
        const textToSearch = 'Android';
    
        await searchPage.enterTextToSearch(textToSearch);

        let links = await resultsPage.getResultLinks();
        
        links.forEach(element => {
            expect(element).toContainText(textToSearch);
        });
    });
});
