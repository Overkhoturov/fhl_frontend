import {
  TOURNAMENTS_GET_TOURNAMENTS, TOURNAMENTS_GET_SUCCESS,
  TOURNAMENTS_GET_ERROR,
} from '../action-types/tournaments';

export const getTournaments = () => ({ type: TOURNAMENTS_GET_TOURNAMENTS });
export const getTournamentsSuccess = (payload) => ({ type: TOURNAMENTS_GET_SUCCESS, payload });
export const getTournamentsErrror = () => ({ type: TOURNAMENTS_GET_ERROR });
