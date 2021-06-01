import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  loginSuccess, loginError, registrationSuccess, registrationError,
} from '../actions/auth';
import { hideModal } from '../actions/home';
import CONSTANTS from '../constants';

async function loginRequest(login, password) {
  const result = await axios.post(`${CONSTANTS.SERVER}/auth/login`, {
    login,
    password,
  });
  return result;
}

export function* loginSaga(action) {
  const { login, password } = action.payload;
  try {
    const result = yield call(loginRequest, login, password);
    const payload = result.data;
    const { token } = payload;
    if (!token) {
      throw Error();
    }
    localStorage.setItem('token', token);
    yield put(loginSuccess(payload));
    yield put(hideModal());
  } catch (error) {
    const { message } = error.response.data;
    yield put(loginError(message));
  }
}

async function registrationRequest(payload) {
  const result = await axios.post(`${CONSTANTS.SERVER}/auth/registrate`, payload);
  return result;
}

export function* registrationSaga(action) {
  try {
    console.log('action.payload', action.payload);
    const result = yield call(registrationRequest, action.payload);
    const payload = result.data;
    yield put(registrationSuccess(payload));
    console.log('success');
  } catch (error) {
    console.log('error', error);
    // const { message } = error.response.data;
    yield put(registrationError());
  }
}
