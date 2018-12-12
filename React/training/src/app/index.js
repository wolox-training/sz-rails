import React from "react";
import Game from "./screens/Game";
import { Provider } from 'react-redux';
import store from './../redux/store.js';
import Login from './screens/Login';

function App() {
  return (
    <Provider store={store}>
      <div className='bla'>
        <Game />
        <Login />
      </div>
    </Provider>
  );
}

export default App;
