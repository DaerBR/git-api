import {LOGIN, LOGOUT, FETCH_USERDATA, FETCH_REPOS, LOG_ACTION, CLEAR_LOGS, FETCH_REPO_DETAILS} from "./types";
import _ from "lodash";

import githubToken from "../../apis/githubToken";
import githubRestAPI from "../../apis/githubRestAPI";
import { userDataSelect, reposDataSelect } from "../../store/selectors";

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

export const exchangeCodeForToken = (clientID, clientSecret, exchangeCode) => async dispatch => {
    const result = await githubToken.post(`?client_id=${clientID}&client_secret=${clientSecret}&code=${exchangeCode}`);

    const regex = /access_token=([a-z0-9]+)&/gm;
    const searchResult = regex.exec(result.data);
    dispatch({
        type: LOGIN,
        payload: searchResult ? searchResult[1] : null,
    });
}

export const logout = () => {
    // Current version Git API does not allow to revoke oAuth token, so it will be just state auth status change
    return {
        type: LOGOUT
    }
}

export const fetchReposData = token => dispatch => _fetchReposData(dispatch, token);
const _fetchReposData = _.memoize(async (dispatch, token) => {
    const result = await githubRestAPI.get('/user/repos', {headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },});
    dispatch({
        type: FETCH_REPOS,
        payload: reposDataSelect(result.data),
    });
});

export const fetchRepoDetails = (userName, repoName, index) => async dispatch => {
    let repoDetails = {
        totalCommits: null,
        branches: null,
        index: index
    };
    const url = `/repos/${userName}/${repoName}`
    const branches = await githubRestAPI.get(`${url}/branches`)
    repoDetails.branches = branches.data;
    const commits = await githubRestAPI.get(`${url}/commits`);
    repoDetails.totalCommits = _.size(commits.data);

    dispatch({
        type: FETCH_REPO_DETAILS,
        payload: repoDetails
    });

}
export const logAction = (actionName) => {
    console.log('Logaction', actionName)
    const time = new Date();
    return {
        type: LOG_ACTION,
        payload: {
            actionName: actionName,
            time: time.toUTCString(),
            timeStamp: new Date().getTime()
        }
    }
}

export const clearLogs = () => {
    return {
        type: CLEAR_LOGS,
    }
}

