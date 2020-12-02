import { combineReducers } from 'redux';
import { authReducer } from '../../containers/Login/reducers';
import { logsReducer } from "../../containers/Logs/reducers";
import { reposReducer } from "../../containers/Repos/reducers";
import { userReducer } from "../../containers/Profile/reducers";

export default combineReducers({
    auth: authReducer,
    logs: logsReducer,
    reposData: reposReducer,
    userData: userReducer,
})