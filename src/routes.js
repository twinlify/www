// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Routes} from 'react-router-dom';

// -----------------------------------------------------------------------------

import Home from './pages/home';
import Contact from './pages/contact';

// -----------------------------------------------------------------------------

const _Routes = () => (
  <Routes>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
  </Routes>
);

// -----------------------------------------------------------------------------

export default _Routes;
