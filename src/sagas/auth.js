import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  loginSuccess, loginError, registrationSuccess, registrationError,
  forgotPasswordError, forgotPasswordSuccess, resetPasswordSuccess, resetPasswordError,
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
    const result = yield call(registrationRequest, action.payload);
    const payload = result.data;
    yield put(registrationSuccess(payload));
  } catch (error) {
    // const { message } = error.response.data;
    yield put(registrationError());
  }
}

async function forgotPasswordRequest(payload) {
  const result = await axios.post(`${CONSTANTS.SERVER}/auth/forgot`, payload);
  return result;
}

export function* forgotPasswordSaga(action) {
  try {
    const result = yield call(forgotPasswordRequest, action.payload);
    const payload = result.data;
    yield put(forgotPasswordSuccess(payload));
  } catch (error) {
    // const { message } = error.response.data;
    yield put(forgotPasswordError());
  }
}

async function resetPasswordRequest(payload) {
  const { token, id, newPassword } = payload;
  const result = await axios.put(`${CONSTANTS.SERVER}/auth/reset-password/${id}`, { token, newPassword });
  return result;
}

export function* resetPasswordSaga(action) {
  try {
    const result = yield call(resetPasswordRequest, action.payload);
    const payload = result.data;
    yield put(resetPasswordSuccess(payload));
  } catch (error) {
    // const { message } = error.response.data;
    yield put(resetPasswordError());
  }
}
