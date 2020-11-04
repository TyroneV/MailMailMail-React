import {compose, createStore} from 'redux';
import { loginReducer } from '../reducers/loginReducer';

/*
* Makes Redux got back and forth between older and newer states
*/
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(loginReducer,composeEnhancers);