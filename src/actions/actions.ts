
import { UserState, UserInfo, PostInfo } from "../states/states";
import axios from'axios';

/*
* The actions
*/
export type LoginAction = {type: 'LOG_IN',payload: UserState};
export type searchAction = {type: 'SEARCH', payload: UserInfo}; //change payload to UserInfo
export type getPostAction = {type: 'GETFEED', payload: PostInfo[]};

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


export const getFeed = async (id?:number) => async (dispatch:any) =>{
    const res = await axios.get('http://localhost:8080/Project2/postAll.app')
    const posts: PostInfo[] = await res.data;
    console.log(posts);
    dispatch({
        type: 'GETFEED',
        payload:posts
    })
}