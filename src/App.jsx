import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Clubs from './pages/Clubs';
import Donuts from './pages/Donuts';
import Events from './pages/Events';
import Login from './pages/Login';
import Players from './pages/Players';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Tournaments from './pages/Tournaments';

import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/clubs" component={Clubs} />
        <Route path="/donuts" component={Donuts} />
        <Route path="/events" component={Events} />
        <Route path="/login" component={Login} />
        <Route path="/players" component={Players} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/registration" component={Registration} />
        <Route path="/tournaments" component={Tournaments} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
