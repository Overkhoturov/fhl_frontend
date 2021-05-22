import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  loginSuccess, loginError, registrationSuccess, registrationError,
} from '../actions/auth';
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
    yield put(loginSuccess(payload));
  } catch (error) {
    const { message } = error.response.data;
    yield put(loginError(message));
  }
}

async function registrationRequest(name, email, password) {
  const result = await axios.post(`${CONSTANTS.SERVER}/auth/registrate`, {
    login: name,
    email,
    password,
  });
  return result;
}

export function* registrationSaga(action) {
  const { name, email, password } = action.payload;
  try {
    const result = yield call(registrationRequest, name, email, password);
    const payload = result.data;
    yield put(registrationSuccess(payload));
    console.log('success');
  } catch (error) {
    console.log('error', error);
    // const { message } = error.response.data;
    yield put(registrationError());
  }
}
