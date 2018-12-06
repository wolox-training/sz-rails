import { createStore } from 'redux';
import reducer from './Game/reducer.js';

const store = createStore(reducer);

export default store;
