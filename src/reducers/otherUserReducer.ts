import {UserInfo} from '../states/states'

interface IOtherUserState{
    user: UserInfo
}

const initialState: IOtherUserState ={
    user: {
        id: 0,
        email: "",
        password: "",
        firstName: "",
        lastName:"",
        photo: ""
    }
}

const otherUserReducer = (state:IOtherUserState=initialState, action:any):IOtherUserState =>{
    switch(action.type){
        case 'OTHERUSER':
            return{
                user:action.payload
            }
        default:
            return state;
    }
}

export default otherUserReducer;

