
import { UserState, UserInfo, PostInfo } from "../states/states";
import axios from'axios';

//const pref = "http://18.191.119.230:8081/Project2-1.0.0/";
const pref ="http://localhost:8080/Project2/"

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


export const getFeed = (id:number) => async (dispatch:any) =>{
    let url = "";
    if(id === 0){
        url = `${pref}postAll.app`
    } else{
        url = `${pref}postAUser.app?id=${id}`
    }
    try{

        const res = await axios.get(url)
        const posts: PostInfo[] = await res.data;
        //console.log("This is the posts" + posts[1].content);
        dispatch({
            type: 'GETFEED',
            payload:posts
        })
    } catch (error){
        console.log(error.message)
        return error.message
    }
}

export const getUsers = () => async(dispatch:any) => {
    
    let url =`${pref}userAll.app`
    const res = await axios.get(url);
    const allUsers: UserInfo[] = await res.data;
    dispatch({
        type: 'GETUSERS',
        payload:allUsers
    }) 
}