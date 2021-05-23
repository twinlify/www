// -----------------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';

// -----------------------------------------------------------------------------

import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes';

// -----------------------------------------------------------------------------

const $App = styled.div`
  text-align: center;
  // background-color: #E7F8FF;
  min-height: 100vh;
  justify-content: flex-start;
  color: #000;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const $Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// -----------------------------------------------------------------------------

const App = () => (
  <$App>
    <Router>
      <Header />
      <$Screen>
        <Routes />
      </$Screen>
      <Footer />
    </Router>
  </$App>
);

// -----------------------------------------------------------------------------

export default App;
