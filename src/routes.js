// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';
// -----------------------------------------------------------------------------

import Home from './pages/home';
import Team from './pages/team';

// -----------------------------------------------------------------------------

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/team" exact component={Team} />
  </Switch>
);

// -----------------------------------------------------------------------------

export default Routes;
