import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import RestaurantPanelContainer from './RestaurantPanelContainer.jsx';
import RegisterContainer from './RegisterContainer.jsx';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="/admin" component={RegisterContainer} />
      <Route path="*" />
    </Route>
  </Router>
);

export default App;
