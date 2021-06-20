import * as actionTypes from '../action-types/header';

const initialState = {
  showTournamentMenu: false,
  showBurgerMenu: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HEADER_TOGGLE_MENU_TOURNAMENTS:
      return { ...state, showTournamentMenu: action.payload };
    case actionTypes.HEADER_TOGGLE_BURGER_MENU:
      return { ...state, showBurgerMenu: action.payload };
    default:
      return state;
  }
};
