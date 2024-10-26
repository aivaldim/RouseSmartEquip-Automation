const results_page_selectors = require('../constants/selectors/results-page-selectors');

export default class ResultsPage {

    constructor(page){
        this.page = page;
        this.resultLinks = page.locator(results_page_selectors.resutltsLinks);
        this.allRegionsDropdown = page.locator(results_page_selectors.allRegionsDropdown);
        this.regionOptions = page.locator(results_page_selectors.regionOptions);
    }

    async getResultLinks(){

        const elements = await this.resultLinks;
        let links = new Array();

        for (let i = 0; i < await elements.count(); i++) {
            links.push( await elements.nth(i) );
        }

        return links;
    }

    async clickAllRegions(){
        this.allRegionsDropdown.click();
    }

    async getAllRegions(){
        return await this.regionOptions.count();
    }
}