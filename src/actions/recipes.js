// actions en lien avec les recettes
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';
export const FETCH_FAVORITE_RECIPES = 'FETCH_FAVORITE_RECIPES';
export const SAVE_FAVORITE_RECIPES = 'SAVE_FAVORITE_RECIPES';

export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  recipes,
  // équivalent à recipes: recipes
});

export const fetchFavoriteRecipes = () => ({
  type: FETCH_FAVORITE_RECIPES,
});

export const saveFavoriteRecipes = (favoriteRecipes) => ({
  type: SAVE_FAVORITE_RECIPES,
  favoriteRecipes,
});
