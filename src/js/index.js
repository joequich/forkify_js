// Global app controller
import Search from './models/Search'
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
/** Global state of the app
 * - search object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */


const state = {}

const controlSearch = async () => {
    // 1ero get query from view
    const query = searchView.getInput();

    if(query) {
        // 2do new search object and add to state
        state.search = new Search(query);

        // 3ero prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        console.time()
        // 4to search for recipes
        await state.search.getResults();

        // 5to render results on UI
        console.log(state.search.result);
        clearLoader();
        searchView.renderResults(state.search.result);
        
        console.timeEnd()
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});
//https://www.food2fork.com/api/search
//aa6634f7387fbbe73d4722f26b2fe165 