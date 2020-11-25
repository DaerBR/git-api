import { LOG_ACTION, CLEAR_LOGS } from '../actions/types';

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
        case CLEAR_LOGS: {
            return {
                ...state,
                logs: []
            }
        }
        default:
            return state;
    }

}