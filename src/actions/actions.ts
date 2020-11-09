
import { UserState, UserInfo, Posts } from "../states/states";

/*
* The actions
*/
export type LoginAction = {type: 'LOG_IN',payload: UserState};
export type searchAction = {type: 'SEARCH', payload: UserInfo}; //change payload to UserInfo
export type getPostAction = {type: 'GETFEED', payload: Posts};

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


export const getFeed = async (id?:number):getPostAction =>{
    const res = await .get('http://localhost:8080/Project2/postAll.app')
    const args = await res.json();
    const posts: Posts = args;
    console.log(posts);

    return ({
        type: 'GETFEED',
        payload: posts
    })
}