import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
    isLoggedIn: false,
    user: null,
    userToken: null,
    clientID: process.env.REACT_APP_CLIENT_ID,
    clientSecret:  process.env.REACT_APP_CLIENT_SECRET,
    redirectURI: process.env.REACT_APP_REDIRECT_URI
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isLoggedIn: true,
                userToken: action.payload
            };
        }
        case LOGOUT: {
            return {
                ...state,
                isLoggedIn: false,
                userToken: null
            };
        }
        default:
            return state;
    }
};