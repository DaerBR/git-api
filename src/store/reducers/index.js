import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { logsReducer } from "./logsReducer";
import { reposReducer } from "./reposReducer";

export default combineReducers({
    auth: authReducer,
    logs: logsReducer,
    repos: reposReducer
})