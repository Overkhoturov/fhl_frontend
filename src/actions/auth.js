import {
  AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR,
  AUTH_REGISTRATION_REQUEST, AUTH_REGISTRATION_SUCCESS,
  AUTH_REGISTRATION_ERROR,
  AUTH_LOGOUT,
} from '../action-types/auth';

export const loginRequest = (payload) => ({ type: AUTH_LOGIN_REQUEST, payload });
export const loginSuccess = (payload) => ({ type: AUTH_LOGIN_SUCCESS, payload });
export const loginError = (payload) => ({ type: AUTH_LOGIN_ERROR, payload });

export const registrationRequest = (payload) => ({ type: AUTH_REGISTRATION_REQUEST, payload });
export const registrationSuccess = (payload) => ({ type: AUTH_REGISTRATION_SUCCESS, payload });
export const registrationError = (payload) => ({ type: AUTH_REGISTRATION_ERROR, payload });

export const logOut = () => ({ type: AUTH_LOGOUT });
