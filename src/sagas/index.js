import { takeEvery } from 'redux-saga/effects';

import {
  AUTH_LOGIN_REQUEST, AUTH_REGISTRATION_REQUEST, AUTH_FORGOT_PASSWORD_REQUEST,
  AUTH_RESET_PASSWORD_REQUEST, AUTH_CONFIRM_EMAIL_REQUEST,
} from '../action-types/auth';
import { TOURNAMENTS_GET_TOURNAMENTS } from '../action-types/tournaments';
import {
  loginSaga, registrationSaga, forgotPasswordSaga, resetPasswordSaga, confirmEmailSaga,
} from './auth';
import getTournaments from './home';

function* rootSaga() {
  yield takeEvery(AUTH_LOGIN_REQUEST, loginSaga);
  yield takeEvery(AUTH_REGISTRATION_REQUEST, registrationSaga);
  yield takeEvery(TOURNAMENTS_GET_TOURNAMENTS, getTournaments);
  yield takeEvery(AUTH_FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
  yield takeEvery(AUTH_RESET_PASSWORD_REQUEST, resetPasswordSaga);
  yield takeEvery(AUTH_CONFIRM_EMAIL_REQUEST, confirmEmailSaga);
}

export default rootSaga;
