import * as actionTypes from '../action-types/players';

export const initialState = {
  players: [],
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAYERS_GET_PLAYERS_SUCCESS:
      return {
        ...state, loading: false, error: false, players: action.payload,
      };
    case actionTypes.PLAYERS_GET_PLAYERS_ERROR:
      return {
        ...state, loading: false, error: action.payload, players: [],
      };
    default: return state;
  }
};
