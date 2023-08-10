import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import Recipe from '../Recipe/Recipe';
import Error from '../Error/Error';

import Loading from './Loading/Loading';

import './style.scss';
import { fetchRecipes } from '../../actions/recipes';

/*
Explication du bug quand on affiche une recette sans passer par la page d'accueil :
lorsqu'on refresh la page deuis une page de recette, le premier rendu se fait, y'a pas le useEffect qui se declanche, donc pas les datas de l'API, et la condition !recipes nous redirige vers la page erreur

Bug courant quand on a redux + react-router-dom + récupération de données initiales
depuis une API (et pas de loader pour protéger les Routes)

Solution : empêcher l'utilisation de la Route Recipe quand on n'a pas les recettes
(statut loading en attendant la réponse), et on en profite pour afficher un loader

Deux possibilités :
- masquer une partie de l'application (la partie qui n'est pas affichable)
- masquer toute l'application => loader qui prend toute la place
*/

function App() {
  const dispatch = useDispatch();
  const isRecipesLoaded = useSelector((state) => state.recipes.isRecipesLoaded);

  useEffect(() => {
    // on déclenche la récupération des recettes
    dispatch(fetchRecipes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /*
  ESLint nous dit qu'il faudrait avoir une dépendance sur dispatch (on a une
  variable qui est utilisée dans l'effet) => mais en fait cette variable ne
  changera pas, c'est pas une prop ou une variable de state
  */

  // si les recettes ne sont pas chargées, on remplace toute l'appli par le loader
  if (!isRecipesLoaded) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

/*
si les recettes ne sont pas chargées => loader
si les recettes sont chargées => les routes
*/

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;

/*
On peut générer toutes les routes des recettes avec un map, mais s'il y a beaucoup
de recettes ça posera des problèmes de performance (comme un grand bloc if/else if
avec des dizaines de conditions)
  {recipesData.map((recipeItem) => (
    <Route
      element={<Recipe {...recipeItem} />}
      key={recipeItem.id}
      path={`/recipe/${recipeItem.slug}`}
    />
  ))}

Dans ce cas Recipe reçoit en props les détails de la recette qu'il affiche :

function Recipe({
  title,
  thumbnail,
  author,
  difficulty,
  ingredients,
  instructions,
}) {
  
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={title}
          thumbnail={thumbnail}
          author={author}
          difficulty={difficulty}
        />
        <Ingredients list={ingredients} />
        <Instructions steps={instructions} />
      </div>
    </Page>
  );
}
*/
