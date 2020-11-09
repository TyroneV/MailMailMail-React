
import { UserState, UserInfo } from "../states/states";

/*
* The actions
*/
export type LoginAction = {type: 'LOG_IN',payload: UserState};
export type searchAction = {type: 'SEARCH', payload: UserInfo}; //change payload to UserInfo

/*
* Callbacks that gives back an action
*/
export const onLogin = (user:UserState):LoginAction => (
    {
        type:'LOG_IN',
        payload:user
    }
)

export const getSearch = (name: string):searchAction  =>{
    //const res = await: 
    const profile:UserInfo={
        id:0,
        email:"enoch@bomb.com",
        password:"asdddfff",
        photo: "this is a photo",
        firstName: name,
        lastName: "cho",
    }
    return({
        type: 'SEARCH',
        payload: profile
    })

}