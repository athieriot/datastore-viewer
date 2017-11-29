import {combineReducers} from 'redux'
import selection from "../reducers/selection";
import repository from "../reducers/repository";
import { routerReducer } from 'react-router-redux'

const viewerApp = combineReducers({
  selection,
  repository,
  router: routerReducer
});

export default viewerApp