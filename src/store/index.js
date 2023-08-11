import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

// import reducer from '../reducers/index.js';
// on importe le reducer du fichier index.js, mais vu le nom du fichier on n'a
// pas besoin de préciser
import rootReducer from '../reducers';

import recipesMiddleware from '../middleware/recipesMiddleware';
import authMiddleware from '../middleware/authMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    recipesMiddleware,
    authMiddleware
    // ... d'autres middlewares
  )
);

const store = createStore(
  // reducer
  rootReducer,
  // enhancer
  enhancers
);

export default store;
