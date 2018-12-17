import React, { Fragment } from "react";
import Topbar from './components/Topbar';
import { Provider } from 'react-redux';
import store from './../redux/store.js';
import Main from './screens/Main';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Bla = () => (
  <Fragment>
    <Topbar />
    <h1>Bla</h1>
  </Fragment>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Main}/>
        <Route path='/bla' component={Bla}/>
      </Router>
    </Provider>
  );
}

/*
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
*/

export default App;
