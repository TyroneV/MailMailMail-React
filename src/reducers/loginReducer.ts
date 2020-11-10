import { LoginAction } from "../actions/actions";
import { UserState } from "../states/states";


const initialState:UserState = {
    id:0,
    email:'',
    password:'',
    firstName:'',
    lastName:'',
    photo:''
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