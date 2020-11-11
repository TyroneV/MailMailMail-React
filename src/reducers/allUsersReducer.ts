import {UserInfo} from '../states/states';

interface ISearchState {
    users: UserInfo[]
}

const initialState: ISearchState = {
    users: [],
}

const allUsersReducer = (state:ISearchState=initialState, action:any):ISearchState =>{
    switch(action.type){
        case 'GETUSERS':
            return{
                users:action.payload
            }
        default:
            return state;
    }
}

export default allUsersReducer;