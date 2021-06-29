import * as actionTypes from '../action-types/auth';

const tokenLS = localStorage.getItem('token');

const initialState = {
  isLogedIn: Boolean(tokenLS),
  isShowAlert: false,
  token: tokenLS || '',
  message: '',
  user: '',
  status: false,
  id: '',
  currentStepRegistration: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        status: true,
        isShowAlert: true,
        isLogedIn: true,
        token: action.payload.token,
        id: action.payload.id,
      };
    case actionTypes.AUTH_LOGIN_ERROR:
      return { ...state, status: false, isShowAlert: true };
    case actionTypes.AUTH_REGISTRATION_SUCCESS:
      return {
        ...state, status: true, isShowAlert: true, currentStepRegistration: 1,
      };
    case actionTypes.AUTH_REGISTRATION_ERROR:
      return { ...state, status: false, isShowAlert: true };
    case actionTypes.AUTH_RESET_PASSWORD_SUCCESS:
      return { ...state, status: true, isShowAlert: true };
    case actionTypes.AUTH_RESET_PASSWORD_ERROR:
      return { ...state, status: false, isShowAlert: true };
    case actionTypes.AUTH_CONFIRM_EMAIL_SUCCESS:
      return { ...state, status: true, isShowAlert: true };
    case actionTypes.AUTH_CONFIRM_EMAIL_ERROR:
      return { ...state, status: false, isShowAlert: true };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state, token: '', isShowAlert: false, isLogedIn: false,
      };
    case actionTypes.AUTH_CHANGE_STEP_REGISTRATION:
      return { ...state, currentStepRegistration: action.payload };
    default:
      return state;
  }
};
