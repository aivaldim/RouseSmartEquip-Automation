
export default class ResultsPage {

    constructor(page){
        this.page = page;
        this.resultLinks = page.locator('h2 > a > span');
    }

    async getResultLinks(){

        await this.page.waitForLoadState('load');

        const elements = await this.resultLinks;
        let links = new Array();

        for (let i = 0; i < await elements.count(); i++) {
            links.push( await elements.nth(i) );
        }

        return links;
    }
}