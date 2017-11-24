import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import viewerApp from "./reducers/index";
import thunk from 'redux-thunk';

let store = createStore(
  viewerApp,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
