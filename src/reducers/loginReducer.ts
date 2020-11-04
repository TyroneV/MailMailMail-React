
export interface UserState{
    username:string,
    password:string
}

const initialState ={
    username:'',
    password:''
}


export const loginReducer = (state:UserState = initialState,action:Action) =>{
    switch(action.type){
        case "LOG_IN":{
            return action.payload;
        }
        default:
            return initialState;
    }
}