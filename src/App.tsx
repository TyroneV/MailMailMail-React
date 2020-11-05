import React from 'react';
import { Login } from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch} from 'react-redux';
import { onLogin } from './actions/actions';
import { UserState } from './states/states';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  const dispatch = useDispatch();

  /*
  * Callback that calls the dispatcher
  */
  const showUsername = (u:UserState) =>{
    dispatch(onLogin(u));
    console.log(u);
  }

  // New components/pages should be added here. 
  return (
    <>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" render= {() => (<Login submit ={showUsername}/>)}/>
        {/*This should be the home page component*/}
        <Route path ="/Home" component = {NavBar}/>



      </Switch>

      
    </BrowserRouter>
    </>

  );
}

export default App;
