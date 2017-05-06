import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise';

import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
