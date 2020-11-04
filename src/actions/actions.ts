import { UserState } from "../reducers/loginReducer";

export type Action = {type: 'LOG_IN',payload: UserState};


export const onLogin = (user:UserState):Action => (
    {
        type:'LOG_IN',
        payload:user
    }
)