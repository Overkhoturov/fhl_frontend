import { combineReducers } from 'redux';

import auth from './auth';
import home from './home';
import tournaments from './tournaments';
import header from './header';
import players from './players';

export default () => combineReducers({
  auth,
  home,
  tournaments,
  header,
  players,
});
