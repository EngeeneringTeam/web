import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

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
