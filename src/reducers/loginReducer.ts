import { LoginAction } from "../actions/actions";
import { UserState } from "../states/states";


const initialState:UserState ={
    username:'',
    password:''
}

export const loginReducer = (state:UserState = initialState,action:LoginAction) =>{
    switch(action.type){
        case "LOG_IN":{
            return action.payload;
        }
        default:
            return initialState;
    }
}