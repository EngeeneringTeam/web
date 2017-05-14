import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import PanelContainer from './PanelContainer.jsx';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="/user" component={PanelContainer} />
      <Route path="*" />
    </Route>
  </Router>
);

export default App;
