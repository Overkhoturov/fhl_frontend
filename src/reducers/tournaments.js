import * as actionTypes from '../action-types/tournaments';

const initialState = {
  allTournaments: [],
  currentTournament: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOURNAMENTS_GET_SUCCESS:
      return { ...state, allTournaments: action.payload };
    case actionTypes.TOURNAMENTS_GET_CURRENT_SUCCESS:
      return { ...state, currentTournament: action.payload };
    default:
      return state;
  }
};
