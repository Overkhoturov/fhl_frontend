import { TOURNAMENTS_GET_TOURNAMENTS, TOURNAMENTS_GET_SUCCESS, TOURNAMENTS_GET_ERROR } from '../action-types/tournaments';

export const getTournaments = () => ({ type: TOURNAMENTS_GET_TOURNAMENTS });
export const getTournamentsSuccess = () => ({ type: TOURNAMENTS_GET_SUCCESS });
export const getTournamentsErrror = () => ({ type: TOURNAMENTS_GET_ERROR });
