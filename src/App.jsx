import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getUserRequest } from './actions/auth';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Clubs from './pages/Clubs';
import Donuts from './pages/Donuts';
import Events from './pages/Events';
import Players from './pages/Players';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Tournaments from './pages/Tournaments';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Notification from './components/Notification';
import ConfirmEmail from './pages/ConfirmEmail';

import CONSTANTS from './constants';
import './App.css';
import './buttons.css';
import FOOTER from './components/Footer';

function App() {
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const uid = localStorage.getItem('uid');
    if (uid) {
      dispatch(getUserRequest(uid));
    }
  }, []);

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
        <Route exact path={CONSTANTS.FORGOT} component={ForgotPassword} />
        <Route path={`${CONSTANTS.RESET_PASSWORD}/:token`} component={ResetPassword} />
        <Route path={`${CONSTANTS.CONFIRM_EMAIL}`} component={ConfirmEmail} />
        <Route component={NotFound} />
      </Switch>
      <Notification />
      <FOOTER />
    </Router>

  );
}

export default App;
