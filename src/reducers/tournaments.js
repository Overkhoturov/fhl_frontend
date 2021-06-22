import * as actionTypes from '../action-types/tournaments';

const initialState = {
  allTournaments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOURNAMENTS_GET_SUCCESS:
      return { ...state, allTournaments: action.payload };
    default:
      return state;
  }
};
