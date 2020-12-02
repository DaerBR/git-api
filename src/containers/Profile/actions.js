import _ from "lodash";
import githubRestAPI from "../../apis/githubRestAPI";
import {FETCH_USERDATA} from "../../store/actions/types";
import { userDataSelect } from './selectors';

export const fetchUserData = token => dispatch => _fetchUserData(dispatch, token);
const _fetchUserData = _.memoize(async (dispatch, token) => {
    const result = await githubRestAPI.get('/user', {headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },});
    dispatch({
        type: FETCH_USERDATA,
        payload: userDataSelect(result.data),
    });
});