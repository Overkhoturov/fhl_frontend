import { put, call, select } from 'redux-saga/effects';
import axios from 'axios';

import {
  loginSuccess, loginError, registrationSuccess, registrationError, logOut,
  forgotPasswordError, forgotPasswordSuccess, resetPasswordSuccess, resetPasswordError,
  confirmEmailSuccess, confirmEmailError, getUserSuccess, getUserRequest, changeMainUserInfoSuccess,
  changeMainUserInfoError,
} from '../actions/auth';
import { hideModal } from '../actions/home';
import CONSTANTS from '../constants';

async function getUserAxios(uid, token) {
  const result = await axios.get(`${CONSTANTS.SERVER}/users/${uid}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export function* getUserSaga(action) {
  try {
    const token = yield select((state) => state.auth.token);
    if (token) {
      const result = yield call(getUserAxios, action.payload, token);
      const payload = result.data;
      yield put(getUserSuccess(payload));
    }
  } catch (error) {
    yield put(logOut());
  }
}

async function loginRequest(email, password) {
  const result = await axios.post(`${CONSTANTS.SERVER}/auth/login`, {
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
    const { token, uid } = payload;
    if (!token) {
      throw Error();
    }
    localStorage.setItem('token', token);
    localStorage.setItem('uid', uid);
    yield put(loginSuccess(payload));
    yield put(hideModal());
    yield put(getUserRequest(uid));
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
    const message = '';
    // if (error.response.data && error.response.data.errors) {
    //   message = error.response.data.errors.map((item) => Object.keys(item));
    //   message.join(' ');
    // }
    yield put(registrationError(message));
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
  const { token, newPassword } = payload;
  const result = await axios.put(`${CONSTANTS.SERVER}/auth/reset-password`, { token, newPassword });
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
  const result = await axios.get(`${CONSTANTS.SERVER}/auth/confirm${payload}`);
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

async function changeMainUserInfoRequest(payload, uid, token) {
  const result = await axios.put(`${CONSTANTS.SERVER}/users/${uid}/profile`, payload, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export function* changeMainUserInfoSaga(action) {
  try {
    const { id, token } = yield select((state) => state.auth);
    console.log('payload', action.payload);
    const result = yield call(changeMainUserInfoRequest, action.payload, id, token);
    const payload = result.data;
    console.log('result', result);
    yield put(changeMainUserInfoSuccess(payload));
  } catch (error) {
    // const { message } = error.response.data;
    yield put(changeMainUserInfoError());
  }
}
