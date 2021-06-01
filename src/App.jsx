import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Clubs from './pages/Clubs';
import Donuts from './pages/Donuts';
import Events from './pages/Events';
import Players from './pages/Players';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Tournaments from './pages/Tournaments';
import Notification from './components/Notification';

import CONSTANTS from './constants';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={CONSTANTS.HOME} component={Home} />
        <Route path={CONSTANTS.CLUBS} component={Clubs} />
        <Route path={CONSTANTS.DONATES} component={Donuts} />
        <Route path={CONSTANTS.EVENTS} component={Events} />
        <Route path={CONSTANTS.PLAYERS} component={Players} />
        <Route path={`${CONSTANTS.PROFILE}/:id`} component={Profile} />
        <Route path={CONSTANTS.REGISTRATION} component={Registration} />
        <Route exact path={CONSTANTS.TOURNAMENTS} component={Tournaments} />
        <Route path={`${CONSTANTS.TOURNAMENTS}/:id`} component={Tournaments} />
        <Route component={NotFound} />
      </Switch>
      <Notification />
    </Router>
  );
}

export default App;
