
export default class CommonMethods {
  
    constructor(page) {
      this.page = page;
    }
  
    async goToBaseURL(){
        await this.page.goto('/');
        await this.waitForPageToLoad();
    }

    async waitForPageToLoad(){
        await this.page.waitForLoadState('load');
    }
  }