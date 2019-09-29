// Global app controller
import Search from './models/Search'
import * as searchView from './views/searchView';
import { elements } from './views/base';
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
        console.time()
        // 4to search for recipes
        await state.search.getResults();

        // 5to render results on UI
        console.log(state.search.result);
        searchView.renderResults(state.search.result);
        
        console.timeEnd()
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


console.log("Hola");
//https://www.food2fork.com/api/search
//aa6634f7387fbbe73d4722f26b2fe165 