import React from 'react';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {


  // New components/pages should be added here. 
  return (
    <>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" render= {() => (<Login/>)}/>
        {/*This should be the home page component*/}
        <Route path ="/Home" component = {NavBar}/>



      </Switch>

      
    </BrowserRouter>
    </>

  );
}

export default App;
