import React from 'react';
import { Login } from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from './reducers/loginReducer';


function App() {

  const user = useSelector<UserState,UserState>((state)=>state);
  const dispatch = useDispatch();

  const showUsername = (u:UserState) =>{
    dispatch({type:"LOG_IN",payload:u})
  }

  return (
    <>
      <p>{user.username}</p>
      <p>{user.password}</p>
      <Login submit={showUsername}/>
    </>
  );
}

export default App;
