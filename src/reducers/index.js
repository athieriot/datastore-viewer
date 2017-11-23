import {combineReducers} from 'redux'
import selection from "../actions/selection";

const viewerApp = combineReducers({
  selection
});

export default viewerApp