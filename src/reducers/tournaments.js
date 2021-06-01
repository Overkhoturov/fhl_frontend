import * as actionTypes from '../action-types/tournaments';

const initialState = {
  showModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOME_SHOW_MODAL:
      return { ...state, showModal: true };
    case actionTypes.HOME_HIDE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};
