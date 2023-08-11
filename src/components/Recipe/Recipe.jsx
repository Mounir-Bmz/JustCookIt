import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findRecipe } from '../../selectors/recipes';

import Page from '../Page/Page';
import AppHeader from '../AppHeader/AppHeader';
import Header from './Header/Header';
import Instructions from './Instructions/Instructions';
import Ingredients from './Ingredients/Ingredients';

import './style.scss';

function Recipe() {
  // const params = useParams();
  // console.log(params);
  // => on récupère sous forme d'objet les paramètres de l'URL, avec les noms qu'
  // on a indiqués en définissant la route (:nom)

  const { slug } = useParams();

  // on récupère la recette qui a le slug indiqué dans l'URL
  const recipe = useSelector((state) => findRecipe(state.recipes.list, slug));

  // console.log('rendu du composant Recipe');

  if (!recipe) {
    // si recette pas trouvée (car slug pas valide dans les données), on renvoie
    // vers la page d'erreur
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients list={recipe.ingredients} />
        <Instructions steps={recipe.instructions} />
      </div>
    </Page>
  );
}

export default Recipe;
