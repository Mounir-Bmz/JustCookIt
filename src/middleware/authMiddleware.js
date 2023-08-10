import axios from 'axios';
import { SUBMIT_LOGIN, handleSuccessfulLogin } from '../actions/user';
import { fetchFavoriteRecipes } from '../actions/recipes';

// dans le cas où on a plusieurs point d'entrée et on veut mutualiser
const baseUrl = 'http://localhost:3001';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          // URL
          `${baseUrl}/login`,
          // données
          {
            // ne pas oublier le tiroir ;)
            email: store.getState().user.email,
            password: store.getState().user.password,
          }
        )
        .then((response) => {
          // console.log(response);

          // on veut enregistrer les infos dans le state
          store.dispatch(
            handleSuccessfulLogin(response.data.pseudo, response.data.token)
          );

          // on veut récupérer les recettes préférées => on dispatch une action
          // qui sera traitée par le middleware des recettes
          store.dispatch(fetchFavoriteRecipes());
        })
        .catch((error) => {
          console.log(error);

          // TODO afficher un message à l'utilisateur : prévoir un composant pour
          // le message, avec un affichage conditionnel. Il faudrait ajouter un
          // emplacement dans le state, booléen isAuthError par exemple.
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default authMiddleware;
