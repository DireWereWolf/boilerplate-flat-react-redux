import 'babel-polyfill';
import { render } from 'react-dom';

import Routes from './routes';

import './style.scss';

function run() {
  render(Routes, document.getElementById('app'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}

if (module.hot) {
  module.hot.accept('./routes', run);
}
