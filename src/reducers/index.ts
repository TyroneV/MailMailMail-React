import { combineReducers } from 'redux';
import allUsersReducer from './allUsersReducer';
import feedReducer from './feedReducer';
import { loginReducer } from './loginReducer';

import otherUserReducer from './otherUserReducer';

/*
* Put all Reducers in here
*/
export const allReducers = combineReducers({
    login: loginReducer,
    feed: feedReducer,
    users: allUsersReducer,
    otherUser: otherUserReducer,
});

export type RootStore = ReturnType<typeof allReducers>;



