import {compose, createStore} from 'redux';
import { loginReducer } from '../reducers/loginReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(loginReducer,composeEnhancers);