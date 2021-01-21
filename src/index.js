import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Global } from './global';

render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById('root')
);