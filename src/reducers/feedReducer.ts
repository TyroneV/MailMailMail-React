import {PostInfo, LikeInfo} from '../states/states';

interface IFeedState {
    postsAndLikes: [[PostInfo,LikeInfo[]]]
}

// const initialState: IFeedState ={    
//     posts : [{
//         id: 1,
//         content: "test",
//         photo:"photo",
//         authorId: 0,
//         dateCreated: new Date()
//     }],
// }

const emptyPost:PostInfo = {
            id: 0,
            content: "",
            photo:"",
            authorId: 0,
            dateCreated: new Date()
}

// const emptyLike:LikeInfo = {
//     id: 0,
//     postId: 0,
//     commentId: 0,
//     authorId: 0, 
//     dateCreated: new Date()
// }

const initialState: IFeedState ={    
    postsAndLikes : [[emptyPost,[]]]
}

const feedReducer = (state:IFeedState = initialState, action: any): IFeedState =>{
    switch(action.type){
        case 'GETFEED':
            return {
                postsAndLikes:action.payload
            }
        default:
            return state;
    }
}

export default feedReducer;