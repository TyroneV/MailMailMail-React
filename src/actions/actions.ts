
import { UserState } from "../states/states";

/*
* The actions
*/
export type LoginAction = {type: 'LOG_IN',payload: UserState};

/*
* Callbacks that gives back an action
*/
export const onLogin = (user:UserState):LoginAction => (
    {
        type:'LOG_IN',
        payload:user
    }
)