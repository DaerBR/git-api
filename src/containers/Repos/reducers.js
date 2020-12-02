import { FETCH_REPOS, FETCH_REPO_DETAILS } from '../../store/actions/types';

export const reposReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_REPOS:
            return action.payload;
        case FETCH_REPO_DETAILS:
            let newState = [...state];
            newState[action.payload.index].details = action.payload;
            return newState;
        default:
            return state;
    }

}