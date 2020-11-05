import React from 'react';
import { Login } from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, useDispatch} from 'react-redux';
import { onLogin } from './actions/actions';
import { UserState } from './states/states';
import { NavBar } from './components/NavBar';
import { store } from './store/store';


function App() {

  const dispatch = useDispatch();

  /*
  * Callback that calls the dispatcher
  */
  const showUsername = (u:UserState) =>{
    dispatch(onLogin(u));
    console.log(u);
  }

  return (
    <>
    <NavBar/>
    <Login submit={showUsername}/>
    </>

  );
}

export default App;
