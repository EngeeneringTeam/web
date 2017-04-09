import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LoginContainer from './LoginContainer.jsx';
import RegisterContainer from './RegisterContainer.jsx';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={LoginContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/register" component={RegisterContainer} />
      <Route path="*" />
    </Route>
  </Router>
);

export default App;
