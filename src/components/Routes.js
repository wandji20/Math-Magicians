/* eslint-disable */
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';


const Routes = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route path = '/Calculator' component={Calculator} />
        <Route path = '/Quote' component={Quote} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;
