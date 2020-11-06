import{combineReducers} from 'redux';
import { loginReducer } from './loginReducer';
import searchReducer from './searchReducer';

/*
* Put all Reducers in here
*/
export const allReducers = combineReducers({
    login : loginReducer,
    search: searchReducer

});

export type RootStore = ReturnType<typeof allReducers>;



