import * as actionTypes from '../action-types/players';

export const getPlayers = () => (
  { type: actionTypes.PLAYERS_GET_PLAYERS });
export const getPlayersSuccess = (payload) => (
  { type: actionTypes.PLAYERS_GET_PLAYERS_SUCCESS, payload });
export const getPlayersError = (payload) => (
  { type: actionTypes.PLAYERS_GET_PLAYERS_ERROR, payload });
