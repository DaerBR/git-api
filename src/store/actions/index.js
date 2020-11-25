import {LOGIN, LOGOUT, FETCH_USERDATA, FETCH_REPOS, LOG_ACTION, CLEAR_LOGS} from "./types";
import _ from "lodash";

import githubToken from "../../apis/githubToken";
import githubRestAPI from "../../apis/githubRestAPI";

export const fetchUserData = token => dispatch => _fetchUserData(dispatch, token);
const _fetchUserData = _.memoize(async (dispatch, token) => {
    const result = await githubRestAPI.get('/user', {headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },});
    dispatch({
        type: FETCH_USERDATA,
        payload: result.data,
    });
});

export const exchangeCodeForToken = (clientID, clientSecret, exchangeCode) => async dispatch => {
    const result = await githubToken.post(`?client_id=${clientID}&client_secret=${clientSecret}&code=${exchangeCode}`);

    // Because
    const regex = /access_token=([a-z0-9]+)&/gm;
    const searchResult = regex.exec(result.data);
    console.log(result.data)
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

    // Here we can make additional axios queries for each repo to https://api.github.com/repos/DaerBR/{name}/branches and
    // https://api.github.com/repos/DaerBR/{name}/commits to get data on repo commits/branches. Or do it later inside Repos
    // by clicking button for each repository

    dispatch({
        type: FETCH_REPOS,
        payload: result.data,
    });
});

export const logAction = () => {
    return {
        type: LOG_ACTION
    }
}

export const clearLogs = () => {
    return {
        type: CLEAR_LOGS,
    }
}