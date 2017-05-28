import 'babel-polyfill';
import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Routes from './routes';

import './style.scss';

const renderDom = (Component) => (
  render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  )
);

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', renderDom(Routes));
} else {
  window.attachEvent('onload', renderDom(Routes));
}

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    render(Routes);
  });
}
