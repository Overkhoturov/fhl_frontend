import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR } from '../action-types/auth';

export const loginRequest = (payload) => ({ type: AUTH_LOGIN_REQUEST, payload });
export const loginSuccess = (payload) => ({ type: AUTH_LOGIN_SUCCESS, payload });
export const loginError = (payload) => ({ type: AUTH_LOGIN_ERROR, payload });
