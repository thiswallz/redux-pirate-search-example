import { combineReducers } from 'redux';
import FilesReducer from './reducer_files';
import ActiveTerm from "./reducer_active_term";

const rootReducer = combineReducers({
  files: FilesReducer,
  activeTerm: ActiveTerm
});

export default rootReducer;
