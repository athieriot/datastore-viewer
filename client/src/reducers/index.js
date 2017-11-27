import {combineReducers} from 'redux'
import selection from "../reducers/selection";
import repository from "../reducers/repository";

const viewerApp = combineReducers({
  selection,
  repository
});

export default viewerApp