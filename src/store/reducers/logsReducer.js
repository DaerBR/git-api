import { LOG_ACTION } from '../actions/types';

export const logsReducer =  (state = [], action) => {
    switch (action.type) {
        case LOG_ACTION:
            return {
                ...state,
                logs: [
                    ...state.logs,
                    action.payload
                ]
            }
        default:
            return state;
    }

}