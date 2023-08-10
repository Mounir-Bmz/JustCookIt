import axios from 'axios';
import {
  FETCH_FAVORITE_RECIPES,
  FETCH_RECIPES,
  saveFavoriteRecipes,
  saveRecipes,
} from '../actions/recipes';

const recipesMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_RECIPES:
      axios
        .get('http://localhost:3001/recipes')
        .then((response) => {
          // console.log(response.data);

          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_FAVORITE_RECIPES:
      axios
        .get(
          // URL
          'http://localhost:3001/favorites',
          // options (notamment les headers)
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          }
        )
        .then((response) => {
          // console.log(response);
          store.dispatch(saveFavoriteRecipes(response.data.favorites));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default recipesMiddleware;
