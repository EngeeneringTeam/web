import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const isProduction = process.env.NODE_ENV === 'production' ? true : false;

import rootReducer from '../reducers/index';

const store = createStore(rootReducer, isProduction ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk)));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
