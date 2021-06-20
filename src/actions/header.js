import {
  HEADER_TOGGLE_MENU_TOURNAMENTS, HEADER_TOGGLE_BURGER_MENU,
} from '../action-types/header';

export const tournamentsToggleMenu = (payload) => (
  { type: HEADER_TOGGLE_MENU_TOURNAMENTS, payload }
);

export const toggleBurgerMenu = (payload) => (
  { type: HEADER_TOGGLE_BURGER_MENU, payload }
);
