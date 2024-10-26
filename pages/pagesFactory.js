
import ResultsPage from "../pages/resultsPage";
import SearchPage from "../pages/searchPage";

export default class PagesFactory {

    constructor(page){
        this.page = page;
    }

    getSearchPage(){
        return new SearchPage(this.page);
    }

    getResultsPage(){
        return new ResultsPage(this.page);
    }
}