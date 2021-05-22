import { takeEvery } from 'redux-saga/effects';

import { AUTH_LOGIN_REQUEST, AUTH_REGISTRATION_REQUEST } from '../action-types/auth';
import { loginSaga, registrationSaga } from './auth';

function* rootSaga() {
  yield takeEvery(AUTH_LOGIN_REQUEST, loginSaga);
  yield takeEvery(AUTH_REGISTRATION_REQUEST, registrationSaga);
}

export default rootSaga;
