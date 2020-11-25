import {
    LOGIN,
    LOGOUT,
    FETCH_USERDATA
} from "./types";
import githubToken from "../../apis/githubToken";
import githubRestAPI from "../../apis/githubRestAPI";

export const fetchUserData = (token) => async dispatch => {
    const result = await githubRestAPI.get('/user', {headers: { authorization: token}});
    console.log(result);
    return result;
}


export const exchangeCodeForToken = (clientID, clientSecret, exchangeCode) => async dispatch => {
    const result = await githubToken.post(`?client_id=${clientID}&client_secret=${clientSecret}&code=${exchangeCode}`);
    const regex = /access_token=([a-z0-9]+)&/gm;

    const searchResult = regex.exec(result.data);
    dispatch({
        type: LOGIN,
        payload: searchResult[1] ?? null,
    });
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}