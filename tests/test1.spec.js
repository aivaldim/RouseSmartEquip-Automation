const { test, expect } = require("@playwright/test");
const tests_data = require('../constants/tests-data/tests-data');
import PagesFactory from "../pages/pagesFactory";
import CommonMethods from "../utils/commonMethods";

test.describe('Test 1', () => {

    let pagesFactory;
    let searchPage;
    let resultsPage;

    test.beforeEach(async ({ page }) => {
        const commonMethods = new CommonMethods(page);
        pagesFactory = new PagesFactory(page);

        searchPage = pagesFactory.getSearchPage();
        resultsPage = pagesFactory.getResultsPage();

        commonMethods.goToBaseURL();
    });

    test('Search "Android" successfully', async () => {
    
        await searchPage.enterTextToSearch(tests_data.test1.textToSearch);

        let links = await resultsPage.getResultLinks();
        
        links.forEach(element => {
            expect(element).toContainText(tests_data.test1.textToSearch);
        });
    });
});
