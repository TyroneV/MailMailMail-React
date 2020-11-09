import {createStore, applyMiddleware} from 'redux';
import { allReducers } from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/*
* Makes Redux got back and forth between older and newer states
*/
// const composeEnhancers =(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
// (window as any).__REDUX_DEVTOOLS_EXTENSION__();



// export const store = createStore(allReducers, composeEnhancers );

export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));


