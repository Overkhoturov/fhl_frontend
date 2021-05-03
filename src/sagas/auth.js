import { put } from 'redux-saga/effects';

import { login } from '../actions/auth';
import * as actionTypes from '../action-types/auth';

export const types = actionTypes;

export function* loginSaga() {
  return yield put(login());
}
