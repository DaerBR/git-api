import githubToken from "../../apis/githubToken";
import {LOGIN, LOGOUT} from "../../store/actions/types";

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
