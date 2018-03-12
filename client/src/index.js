import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable react/jsx-filename-extension */
const router = (
  <Router
    onUpdate={() => {}}
    history={createBrowserHistory()}
  >
    <App />
  </Router>
);
/* eslint-enable */

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
