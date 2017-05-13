import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import restaurants from './restaurants';
import currentRestaurant from './currentRestaurant';

const rootReducer = combineReducers({
  restaurants,
  currentRestaurant,
  routing: routerReducer,
});

export default rootReducer;
