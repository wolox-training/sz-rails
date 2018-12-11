import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './Game/reducer.js';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

//const store = createStore(reducer);
//export default store;

const reducers = combineReducers({
  reducer,
  formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
