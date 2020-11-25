import { FETCH_REPOS } from '../actions/types';

export const reposReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_REPOS:
            return action.payload;
        default:
            return state;
    }

}