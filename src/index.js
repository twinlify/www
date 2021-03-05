import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';

const createWebsite = (options = {}) => {
  if (!options.container) {
    console.error('[Website] Requires a container.');
  }

  const container = document.getElementById(options.container);
  render(
    <div>
      <b>🚀 skeleton-react</b>
    </div>,
    container
  );
};

if (window && !window.createWebsite) {
  window.createWebsite = createWebsite;
}
