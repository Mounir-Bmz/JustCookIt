import { combineReducers } from 'redux';

import recipesReducer from './recipesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui s'occupe de ce tiroir
  recipes: recipesReducer,
  user: userReducer,
});

/*
on indique comment les reducers vont s'organiser, qui gère quel tiroir. Redux
créera le state par rapport à ces infos : mise en place des tiroirs, et state
intial de chaque reducer dans le tiroir associé
*/

export default rootReducer;
