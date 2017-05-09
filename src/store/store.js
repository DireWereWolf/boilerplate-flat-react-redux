import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducersContext = require.context('reducers', false, /^((?!\.js).)*$/);
const reducers = reducersContext.keys()
  .filter((item)=>{
    return item !== './index'
  })
  .reduce((res, item) => {
    console.log(item);
    res[item.substr(2)] = reducersContext(item).default;
    return res;
  }, {});

console.log(reducers);

const createLocalStore = compose(
  persistState('user', {
    key: 'App store'
  })
)(createStore);

let store = createLocalStore(combineReducers(reducers), {}, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
