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
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

const history = createHistory();

let store = createStore(
  viewerApp,
  applyMiddleware(thunk, routerMiddleware(history))
);
store.dispatch(fetchNamespaces());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
