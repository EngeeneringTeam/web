import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReservations from './userReservations';
import user from './user';

const rootReducer = combineReducers({
  user,
  userReservations,
  routing: routerReducer,
});

export default rootReducer;
