import React from 'react';
import { Provider } from 'react-redux';
// import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
//
// import History from 'core/History';

import store from './store/store';

import App from 'components/App/App'


export default (
  <Provider store={store}>
    {/*<Router history={History}>*/}
      <div>
        <App/>
      </div>
    {/*</Router>*/}
  </Provider>
);
