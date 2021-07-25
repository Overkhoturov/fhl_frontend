import {
  AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR,
  AUTH_REGISTRATION_REQUEST, AUTH_REGISTRATION_SUCCESS, AUTH_REGISTRATION_ERROR,
  AUTH_LOGOUT,
  AUTH_FORGOT_PASSWORD_REQUEST, AUTH_FORGOT_PASSWORD_SUCCESS, AUTH_FORGOT_PASSWORD_ERROR,
  AUTH_RESET_PASSWORD_ERROR, AUTH_RESET_PASSWORD_SUCCESS, AUTH_RESET_PASSWORD_REQUEST,
  AUTH_CONFIRM_EMAIL_REQUEST, AUTH_CONFIRM_EMAIL_SUCCESS, AUTH_CONFIRM_EMAIL_ERROR,
  AUTH_CHANGE_STEP_REGISTRATION,
  AUTH_GET_USER_REQUEST, AUTH_GET_USER_SUCCESS, AUTH_GET_USER_ERROR,
  AUTH_CHANGE_INFO_REQUEST, AUTH_CHANGE_INFO_SUCCESS, AUTH_CHANGE_INFO_ERROR,
} from '../action-types/auth';

export const loginRequest = (payload) => ({ type: AUTH_LOGIN_REQUEST, payload });
export const loginSuccess = (payload) => ({ type: AUTH_LOGIN_SUCCESS, payload });
export const loginError = (payload) => ({ type: AUTH_LOGIN_ERROR, payload });

export const getUserRequest = (payload) => ({ type: AUTH_GET_USER_REQUEST, payload });
export const getUserSuccess = (payload) => ({ type: AUTH_GET_USER_SUCCESS, payload });
export const getUserError = (payload) => ({ type: AUTH_GET_USER_ERROR, payload });

export const registrationRequest = (payload) => ({ type: AUTH_REGISTRATION_REQUEST, payload });
export const registrationSuccess = (payload) => ({ type: AUTH_REGISTRATION_SUCCESS, payload });
export const registrationError = (payload) => ({ type: AUTH_REGISTRATION_ERROR, payload });

export const forgotPasswordRequest = (payload) => ({ type: AUTH_FORGOT_PASSWORD_REQUEST, payload });
export const forgotPasswordSuccess = (payload) => ({ type: AUTH_FORGOT_PASSWORD_SUCCESS, payload });
export const forgotPasswordError = (payload) => ({ type: AUTH_FORGOT_PASSWORD_ERROR, payload });

export const resetPasswordRequest = (payload) => ({ type: AUTH_RESET_PASSWORD_REQUEST, payload });
export const resetPasswordSuccess = (payload) => ({ type: AUTH_RESET_PASSWORD_SUCCESS, payload });
export const resetPasswordError = (payload) => ({ type: AUTH_RESET_PASSWORD_ERROR, payload });

export const confirmEmailRequest = (payload) => ({ type: AUTH_CONFIRM_EMAIL_REQUEST, payload });
export const confirmEmailSuccess = (payload) => ({ type: AUTH_CONFIRM_EMAIL_SUCCESS, payload });
export const confirmEmailError = (payload) => ({ type: AUTH_CONFIRM_EMAIL_ERROR, payload });

export const changeStepRegistration = (payload) => ({
  type: AUTH_CHANGE_STEP_REGISTRATION, payload,
});

export const logOut = () => ({ type: AUTH_LOGOUT });

export const changeMainUserInfoRequest = (payload) => ({ type: AUTH_CHANGE_INFO_REQUEST, payload });
export const changeMainUserInfoSuccess = (payload) => ({ type: AUTH_CHANGE_INFO_SUCCESS, payload });
export const changeMainUserInfoError = (payload) => ({ type: AUTH_CHANGE_INFO_ERROR, payload });
