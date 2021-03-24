// -----------------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';

// -----------------------------------------------------------------------------

import Header from './components/header';
import Routes from './routes';

// -----------------------------------------------------------------------------

const $App = styled.div`
  text-align: center;
  background-color: #101;
  min-height: 100vh;
  justify-content: flex-start;
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const $Screen = styled.div`
  margin-top: 100px;
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
    </Router>
  </$App>
);

// -----------------------------------------------------------------------------

export default App;
