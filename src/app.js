// -----------------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import {device} from './style/breakpoints';

// -----------------------------------------------------------------------------

import Header from './header';
import Footer from './footer';
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  /* h1 {
    font-size: 2rem;
    @media ${device.tablet} {
      font-size: 3rem;
    }
    @media ${device.laptop} {
      font-size: 4rem;
    }
  }
  h2 {
    font-size: 1.5rem;
    @media ${device.tablet} {
      font-size: 2rem;
    }
  }
  p {
    font-size: 0.8rem;
    @media ${device.tablet} {
      font-size: 1rem;
    }
  } */
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
