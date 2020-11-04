import {createStore} from 'redux';
import { loginReducer } from '../reducers/loginReducer';
import { allReducers } from '../reducers';

/*
* Makes Redux got back and forth between older and newer states
*/
const composeEnhancers =(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(allReducers, composeEnhancers );