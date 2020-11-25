import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { logsReducer } from "./logsReducer";
import { reposReducer } from "./reposReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
    auth: authReducer,
    logs: logsReducer,
    reposData: reposReducer,
    userData: userReducer,
})