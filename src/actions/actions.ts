
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
        email:"enoch@bomb.com",
        photo: "this is a photo",
        firstname: name,
        lastname: "cho",
        profile: "not sure what this is",
        birthday: "1/1/2001",
        job_title: "Helper"
    }
    return({
        type: 'SEARCH',
        payload: profile
    })

}