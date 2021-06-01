import * as actionTypes from '../action-types/auth';

const tokenLS = localStorage.getItem('token');

const initialState = {
  isLogedIn: false,
  isShowAlert: false,
  token: tokenLS || '',
  message: '',
  user: '',
  status: false,
  id: '',
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
      return { ...state, status: true, isShowAlert: true };
    case actionTypes.AUTH_REGISTRATION_ERROR:
      return { ...state, status: false, isShowAlert: true };
    default:
      return state;
  }
};
