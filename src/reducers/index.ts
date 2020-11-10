import{combineReducers} from 'redux';
import allUsersReducer from './allUsersReducer';
import feedReducer from './feedReducer';
import { loginReducer } from './loginReducer';
import searchReducer from './searchReducer';

/*
* Put all Reducers in here
*/
export const allReducers = combineReducers({
    login : loginReducer,
    search: searchReducer,
    posts: feedReducer,
    users: allUsersReducer

});

export type RootStore = ReturnType<typeof allReducers>;



