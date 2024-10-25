
export default class ResultsPage {

    constructor(page){
        this.page = page;
        this.resultLinks = page.locator('h2 > a > span');
        this.allRegions = page.locator('[data-testid="region-filter-label"]');
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
        this.allRegions.click();
    }
}