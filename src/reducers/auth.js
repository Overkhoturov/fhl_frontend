import * as actionTypes from '../action-types/auth';

const initialState = {
  isLogedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_SUCCESS:
      console.log('action', action);
      return state;
    case actionTypes.AUTH_LOGIN_ERROR:
      console.log('action', action);
      return state;

    default:
      return state;
  }
};
