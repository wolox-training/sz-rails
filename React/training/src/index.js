import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import Game from './app/screens/Game';
import * as serviceWorker from './services/serviceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
