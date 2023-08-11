import { SAVE_FAVORITE_RECIPES, SAVE_RECIPES } from '../actions/recipes';

// reducer qui gère le tiroir des recettes
export const initialState = {
  list: [],
  favorites: [],
  // indique si les recettes sont chargées
  isRecipesLoaded: false,
};

const recipesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.recipes,
        // on indique que les recettes sont prêtes
        isRecipesLoaded: true,
      };

    case SAVE_FAVORITE_RECIPES:
      return {
        ...state,
        favorites: action.favoriteRecipes,
      };

    default:
      return state;
  }
};

export default recipesReducer;
