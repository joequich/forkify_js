// Global app controller
import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
/** Global state of the app
 * - search object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */


const state = {}

/*
* Search Controller
*/
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

        try {
            // 4to search for recipes
            await state.search.getResults();
            // 5to render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            alert('Something wrong with the search...');
            clearLoader();
        }
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

/*
* Recipe Controller
*/
const controlRecipe = async () => {
    // get id from url
    const id = window.location.hash.substring(1);
    if (id) {
        // prepare UI for changes

        // create new recipe object
        state.recipe = new Recipe(id);

        try {
            // get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
            // calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
            // render recipe
            console.log(state.recipe);

        } catch (error) {
            alert('Error proccesing recipe!');
        }
        
    }
};

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

//https://www.food2fork.com/api/search
//aa6634f7387fbbe73d4722f26b2fe165 