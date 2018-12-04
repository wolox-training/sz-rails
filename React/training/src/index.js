import React from 'react';
import ReactDOM from 'react-dom';
import './scss/application.scss';
import App from './app';
import * as serviceWorker from './services/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
