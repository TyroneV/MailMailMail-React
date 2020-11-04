
export interface UserState{
    username:string,
    password:string
}

const initialState ={
    username:'',
    password:''
}

type Action = {type: 'LOG_IN',payload: UserState};

export const loginReducer = (state:UserState = initialState,action:Action) =>{
    switch(action.type){
        case "LOG_IN":{
            return action.payload;
        }
        default:
            return initialState;
    }
}