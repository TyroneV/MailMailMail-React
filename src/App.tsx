import React from 'react';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Profile } from './components/Profile';

function App() {


  // New components/pages should be added here. 
  return (
    <>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component= {Login}/>
        {/*This should be the home page component*/}
        <Route path ="/home" component = {NavBar}/>
        <Route path ="/me" component = {Profile}/>
      </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;
