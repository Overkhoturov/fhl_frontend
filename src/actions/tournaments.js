import {
  TOURNAMENTS_GET_TOURNAMENTS, TOURNAMENTS_GET_SUCCESS, TOURNAMENTS_GET_ERROR,
  TOURNAMENTS_GET_CURRENT, TOURNAMENTS_GET_CURRENT_SUCCESS, TOURNAMENTS_GET_CURRENT_ERROR,
} from '../action-types/tournaments';

export const getTournaments = () => ({ type: TOURNAMENTS_GET_TOURNAMENTS });
export const getTournamentsSuccess = (payload) => ({ type: TOURNAMENTS_GET_SUCCESS, payload });
export const getTournamentsErrror = () => ({ type: TOURNAMENTS_GET_ERROR });

export const getCurrentTournament = (payload) => ({ type: TOURNAMENTS_GET_CURRENT, payload });
export const getCurrentTournamentSuccess = (payload) => (
  { type: TOURNAMENTS_GET_CURRENT_SUCCESS, payload });
export const getCurrentTournamentErrror = () => ({ type: TOURNAMENTS_GET_CURRENT_ERROR });
