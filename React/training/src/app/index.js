import React from "react";
import Game from "./screens/Game";
import { Provider } from 'react-redux';
import store from './../redux/store.js';

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
