import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './user/containers/App.jsx';
import store from './user/store/store';

import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app'));
