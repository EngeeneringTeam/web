import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './admin/containers/App.jsx';
import store from './admin/store/store';

import './app/styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app'));
