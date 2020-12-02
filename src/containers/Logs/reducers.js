import { LOG_ACTION, CLEAR_LOGS } from '../../store/actions/types';

export const logsReducer =  (state = [], action) => {
    switch (action.type) {
        case LOG_ACTION:
            return [
                ...state,
                action.payload
            ]
        case CLEAR_LOGS: {
            return []
        }
        default:
            return state;
    }

}