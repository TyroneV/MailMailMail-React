import {PostInfo} from '../states/states';

interface IFeedState {
    posts: PostInfo[]
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

const initialState: IFeedState ={    
    posts : []
}

const feedReducer = (state:IFeedState = initialState, action: any): IFeedState =>{
    console.log("in the reducer");
    return {
        posts:action.payload
    }
}

export default feedReducer;