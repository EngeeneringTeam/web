import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LoginContainer from './LoginContainer.jsx';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={LoginContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="*" />
    </Route>
  </Router>
);

export default App;
