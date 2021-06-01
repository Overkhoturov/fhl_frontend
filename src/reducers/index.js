import { combineReducers } from 'redux';

import auth from './auth';
import home from './home';
import tournaments from './tournaments';

export default () => combineReducers({
  auth,
  home,
  tournaments,
});
