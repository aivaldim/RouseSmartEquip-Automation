const search_page_selectors = require('../constants/selectors/search-page-selectors');

export default class SearchPage {

    constructor(page) {
        this.page = page;
        this.searchInput = page.locator(search_page_selectors.searchInput);
        this.searchBtn = page.getByLabel(search_page_selectors.searchBtn, { exact: true });
    }

    async enterTextToSearch( text ) {
        await this.searchInput.click();
        await this.searchInput.fill(text);
        await this.searchBtn.click();

        await this.page.waitForLoadState('load');
    }
}