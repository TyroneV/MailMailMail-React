import React from 'react';
import { Login } from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Profile } from './components/Profile';
import { Home } from './components/Home';

function App() {


  // New components/pages should be added here. 
  return (
    <>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component= {Login}/>
        {/*This should be the home page component*/}
        <Route path ="/home" component = {Home}/>
        <Route path ="/me" component = {Profile}/>
      </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;
