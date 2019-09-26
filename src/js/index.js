// Global app controller
import Search from './models/Search'

/** Global state of the app
 * - search object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */


const state = {}

const controlSearch = async () => {
    // 1ero get query from view
    const query = 'pizza';

    if(query) {
        // 2do new search object and add to state
        state.search = new Search(query);

        // 3ero prepare UI for results

        // 4to search for recipes
        await state.search.getResults();

        // 5to render results on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

//https://www.food2fork.com/api/search
//aa6634f7387fbbe73d4722f26b2fe165 