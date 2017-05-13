import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import restaurants from './restaurants';
import currentRestaurant from './currentRestaurant';
import user from './user';
import userReservations from './userReservations';

const rootReducer = combineReducers({
  restaurants,
  currentRestaurant,
  user,
  userReservations,
  routing: routerReducer,
});

export default rootReducer;
