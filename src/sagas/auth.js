import { put } from 'redux-saga/effects';

import { loginSuccess } from '../actions/auth';
// import * as actionTypes from '../action-types/auth';

export function* loginSaga() {
  // try {
  //   const user = yield call(Api.fetchUser, action.payload.userId);
  //   yield put({ type: 'USER_FETCH_SUCCEEDED', user });
  // } catch (e) {
  //   yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  // }

  return yield put(loginSuccess('fsdfsd'));
}
export function* logOutSaga() {
  // try {
  //   const user = yield call(Api.fetchUser, action.payload.userId);
  //   yield put({ type: 'USER_FETCH_SUCCEEDED', user });
  // } catch (e) {
  //   yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  // }

  return yield put(loginSuccess('fsdfsd'));
}
