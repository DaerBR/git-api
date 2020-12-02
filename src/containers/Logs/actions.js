import {LOG_ACTION} from "../../store/actions/types";

export const logAction = (actionName) => {
    const time = new Date();
    return {
        type: LOG_ACTION,
        payload: {
            actionName: actionName,
            time: time.toUTCString(),
            timeStamp: new Date().getTime()
        }
    }
}
