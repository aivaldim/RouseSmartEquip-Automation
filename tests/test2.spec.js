const { test, expect } = require("@playwright/test");
const tests_data = require('../constants/tests-data/tests-data');
import PagesFactory from "../pages/pagesFactory";
import CommonMethods from "../utils/commonMethods";

test.describe("Test 2", () => {

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

    test('Validate regions amount', async () => {
        
        await searchPage.enterTextToSearch(tests_data.test2.textToSearch);

        await resultsPage.clickAllRegions();

        const counter = await resultsPage.getAllRegions();

        expect(counter).toBeGreaterThan(10);
    });
});