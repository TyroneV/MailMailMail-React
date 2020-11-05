import React from 'react';
import { Login } from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { onLogin } from './actions/actions';
import { UserState } from './states/states';
import { NavBar } from './components/NavBar';


function App() {

  const user = useSelector<UserState,UserState>((state)=>state);
  const dispatch = useDispatch();

  /*
  * Callback that calls the dispatcher
  */
  const showUsername = (u:UserState) =>{
    dispatch(onLogin(u))
  }

  return (
    <>
    <NavBar/>
      <p>{user.username}</p>
      <p>{user.password}</p>
      <Login submit={showUsername}/>
    </>
  );
}

export default App;
