import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import restaurants from './restaurants';

const rootReducer = combineReducers({
  restaurants,
  routing: routerReducer,
});

export default rootReducer;
