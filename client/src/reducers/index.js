import {combineReducers} from 'redux'
import selection from "../actions/selection";
import repository from "../actions/repository";

const viewerApp = combineReducers({
  selection,
  repository
});

export default viewerApp