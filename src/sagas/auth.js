import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  loginSuccess, loginError, registrationSuccess, registrationError,
  forgotPasswordError, forgotPasswordSuccess, resetPasswordSuccess, resetPasswordError,
  confirmEmailSuccess, confirmEmailError,
} from '../actions/auth';
import { hideModal } from '../actions/home';
import CONSTANTS from '../constants';

async function loginRequest(email, password) {
  const result = await axios.post(`/api/auth/login`, {
    email,
    password,
  });
  return result;
}

export function* loginSaga(action) {
  const { email, password } = action.payload;
  try {
    const result = yield call(loginRequest, email, password);
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
  const result = await axios.post(`/api/auth/registrate`, payload);
  return result;
}

export function* registrationSaga(action) {
  try {
    const result = yield call(registrationRequest, action.payload);
    const payload = result.data;
    yield put(registrationSuccess(payload));
  } catch (error) {
    const message = '';
    // if (error.response.data && error.response.data.errors) {
    //   message = error.response.data.errors.map((item) => Object.keys(item));
    //   message.join(' ');
    // }
    yield put(registrationError(message));
  }
}

async function forgotPasswordRequest(payload) {
  const result = await axios.post(`/api/auth/forgot`, payload);
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
  const { token, newPassword } = payload;
  const result = await axios.put(`/api/auth/reset-password`, { token, newPassword });
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

async function confirmEmailRequest(payload) {
  const result = await axios.get(`/api/auth/confirm${payload}`);
  return result;
}

export function* confirmEmailSaga(action) {
  try {
    const result = yield call(confirmEmailRequest, action.payload);
    const payload = result.data;
    yield put(confirmEmailSuccess(payload));
  } catch (error) {
    // const { message } = error.response.data;
    yield put(confirmEmailError());
  }
}
