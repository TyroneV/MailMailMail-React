import {PostInfo} from '../states/states';

interface IFeedState {
    posts: PostInfo[]
}

const initialState: IFeedState ={    
    posts : [],
}

const feedReducer = (state:IFeedState = initialState, action: any): IFeedState =>{
    return {
        posts:action.payload
    }
}

export default feedReducer;