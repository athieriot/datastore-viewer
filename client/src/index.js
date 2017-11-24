import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import viewerApp from "./reducers/index";
import thunk from 'redux-thunk';
import {fetchNamespaces} from "./actions/index";

let store = createStore(
  viewerApp,
  applyMiddleware(thunk)
);
store.dispatch(fetchNamespaces());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
