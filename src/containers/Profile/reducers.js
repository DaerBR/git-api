import { FETCH_USERDATA } from '../../store/actions/types';

export const userReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERDATA:
            return action.payload;
        default:
            return state;
    }

}