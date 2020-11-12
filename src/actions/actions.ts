
import { UserState, UserInfo, PostInfo, LikeInfo } from "../states/states";
import axios from'axios';
import configData from "../config.json";
const pref = configData.LOCALHOST_URL;

/*
* The actions
*/
export type LoginAction = {type: 'LOG_IN',payload: UserState};
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



/**
 * This will pull the posts and likes, and figure out the authors as well. 
 * @param id 
 * Gets the id of the user's feed. If it's zero, its the home page so it 
 * pulls all the posts. 
 */
export const getFeed = (id:number) => async (dispatch:any) =>{
    //setting the url, based on whether its the home page feed or a user profile's feed. 
    let posturl = "";
    let likeurl = "";
    if(id === 0){
        posturl = `${pref}/postAll.app`
        likeurl = `${pref}/likeAll.app`
    } else{
        posturl = `${pref}/postAUser.app?id=${id}`
        likeurl = `${pref}/likeAll.app`
    }
    try{
        //getting the posts and the likes. 
        let postres = await axios.get(posturl)
        const posts: PostInfo[] = await postres.data;
        let likeres = await axios.get(likeurl);
        const likes: LikeInfo[] = await likeres.data;

        //making an array of posts with a list of likes for that post. 
        let feed:any = [];
        let x;
        let y;
        //for each post, go through the likes ,and if the post id matches then put them together. 
        for(x in posts){
            let likeList:LikeInfo[] = [];
            for(y in likes){
                if(posts[x].id === likes[y].post){
                    likeList.push(likes[y])
                }
            }
            feed.push([posts[x], likeList]);
        }

        dispatch({
            type: 'GETFEED',
            payload:feed
        })
    } catch (error){
        console.log(error.message)
        return error.message
    }
}

export const getUsers = () => async(dispatch:any) => {
    
    let url =`${pref}/userAll.app`
    const res = await axios.get(url);
    const allUsers: UserInfo[] = await res.data;

    dispatch({
        type: 'GETUSERS',
        payload:allUsers
    }) 
}

export const otherUser= (id:number) => async(dispatch:any, getState:any) =>{
    let state = getState();
    const usersState = state.users;
    let user;
    let i;
    for(i in usersState.users){
          if(id === usersState.users[i].id){
            user = usersState.users[i];
            break;
          }
    }
    dispatch({
        type: 'OTHERUSER',
        payload:user
    })
}

export const makeLike = (post:PostInfo) => async (dispatch:any, getState:any) =>{
    let url = `${pref}/insertLike.app`;
    const state = getState();
    const currUser = state.login;

    let like = {
        id:0,
        post:post.id,
        commentId:0,
        authorId:currUser.id,
        dateCreated: null,
    }

    await axios.post(url, like);
}

export const deleteLike = (like:any)=> async() =>{
    let url = `${pref}/deleteLike.app`;
    await axios.post(url, like);
}