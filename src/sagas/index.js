import { takeEvery } from 'redux-saga/effects';

import { AUTH_LOGIN_REQUEST } from '../action-types/auth';
import { loginSaga } from './auth';

function* rootSaga() {
  yield takeEvery(AUTH_LOGIN_REQUEST, loginSaga);
}

export default rootSaga;
