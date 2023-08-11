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
