import React from "react";
import { Provider } from 'react-redux';
import store from './../redux/store.js';
import Main from './screens/Main';
import About from './screens/About'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topbar from './components/Topbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Topbar />
        <Route exact path='/' component={Main}/>
        <Route path='/about' component={About}/>
      </Router>
    </Provider>
  );
}

export default App;
