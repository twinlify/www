// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';
// -----------------------------------------------------------------------------

import Home from './pages/home';
import Solutions from './pages/solutions';
import Demo from './pages/demo';
import AboutUs from './pages/about-us';
import Contact from './pages/contact';

// -----------------------------------------------------------------------------

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/solutions" exact component={Solutions} />
    <Route path="/demo" exact component={Demo} />
    <Route path="/about-us" exact component={AboutUs} />
    <Route path="/contact" exact component={Contact} />
  </Switch>
);

// -----------------------------------------------------------------------------

export default Routes;
