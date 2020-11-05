import{combineReducers} from 'redux';
import { loginReducer } from './loginReducer';

/*
* Put all Reducers in here
*/
export const allReducers = combineReducers({
    login : loginReducer,
});

export type RootStore = ReturnType<typeof allReducers>;



