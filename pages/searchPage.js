
export default class SearchPage {

    constructor(page) {
        this.searchInput = page.locator('#searchbox_input');
        this.searchBtn = page.getByLabel('Search', { exact: true });
    }

    async enterTextToSearch( text ) {
        await this.searchInput.click();
        await this.searchInput.fill(text);
        await this.searchBtn.click();
    }

    async getSearchTitles(){

    }
}