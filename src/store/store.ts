import {createStore} from 'redux';
import { loginReducer } from '../reducers/loginReducer';


export const store = createStore(loginReducer);