import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import Nav from './Nav';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Calculator" component={Calculator} />
      <Route path="/Quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
