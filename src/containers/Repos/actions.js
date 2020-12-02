import _ from "lodash";
import githubRestAPI from "../../apis/githubRestAPI";
import {FETCH_REPO_DETAILS, FETCH_REPOS} from "../../store/actions/types";
import { reposDataSelect } from './selectors';

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