import React from 'react';
import { Login } from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from './reducers/loginReducer';
import { onLogin } from './actions/actions';


function App() {

  const user = useSelector<UserState,UserState>((state)=>state);
  const dispatch = useDispatch();

  const showUsername = (u:UserState) =>{
    dispatch(onLogin(u))
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
