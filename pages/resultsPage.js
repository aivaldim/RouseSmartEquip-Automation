
export default class ResultsPage {

    constructor(page){
        this.page = page;
        this.resultLinks = page.locator('h2 > a > span');
        this.allRegionsDropdown = page.locator('[data-testid="region-filter-label"]');
        this.regionOptions = page.locator('//div[@data-testid=\'dropdown-options\']/div[2]/div');
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