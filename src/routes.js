// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';
// -----------------------------------------------------------------------------

import Home from './pages/home';
import Contact from './pages/contact';

// -----------------------------------------------------------------------------

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
  </Switch>
);

// -----------------------------------------------------------------------------

export default Routes;
