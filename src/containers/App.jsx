import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LoginContainer from './LoginContainer.jsx';
import RestaurantsListContainer from './RestaurantsListContainer.jsx';
import RestaurantContainer from './RestaurantContainer.jsx';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={LoginContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/restaurants" component={RestaurantsListContainer} />
      <Route path="/restaurant" component={RestaurantContainer} />
      <Route path="*" />
    </Route>
  </Router>
);

export default App;
