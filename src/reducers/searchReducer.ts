import {UserInfo} from '../states/states'

interface ISearchState{
    profile?: UserInfo
}

const initialState: ISearchState ={

}


const searchReducer = (state:ISearchState = initialState, action:any):ISearchState =>{
    switch(action.type){
        case 'SEARCH':
            return {
                profile: action.payload
            }
        default:
            return state;
    }
};

export default searchReducer;