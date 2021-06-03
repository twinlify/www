// -----------------------------------------------------------------------------

import React from 'react';
import {render} from 'react-dom';
import {createGlobalStyle} from 'styled-components';

import App from './app';

// -----------------------------------------------------------------------------

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    margin-block-start: unset;
    margin-block-end: unset;
    font-family: Poppins;
    a {
      text-decoration: unset;
      color: unset;
    }
  }
`;

// -----------------------------------------------------------------------------

const createWebsite = (options = {}) => {
  if (!options.container) {
    console.error('[Website] Requires a container.');
  }

  const container = document.getElementById(options.container);
  render(
    <>
      <GlobalStyle />
      <App />
    </>,
    container
  );
};

// -----------------------------------------------------------------------------

if (window && !window.createWebsite) {
  window.createWebsite = createWebsite;
}
