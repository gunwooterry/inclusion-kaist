import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

/* eslint-disable react/jsx-filename-extension */
const router = (
  <Provider store={store}>
    <Router
      onUpdate={() => {}}
      history={createBrowserHistory()}
    >
      <App />
    </Router>
  </Provider>
);
/* eslint-enable */

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
