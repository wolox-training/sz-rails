import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './Game/reducer.js';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import auth from './Auth/reducer.js';

const reducers = combineReducers({
  reducer,
  form,
  auth
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
