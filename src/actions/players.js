import * as actionTypes from '../action-types/players';

// const getPlayers = () => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.PLAYERS_GET_PLAYERS_REQUEST });
//     const response = await axios.get(
//       'https://iryabuhin.github.io/users/players',
//     );
//     dispatch({
//       type: actionTypes.PLAYERS_GET_PLAYERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: actionTypes.PLAYERS_GET_PLAYERS_ERROR,
//       payload: 'Ошибка при загрузке игроков',
//     });
//   }
// };

export const getPlayers = () => (
  { type: actionTypes.PLAYERS_GET_PLAYERS });
export const getPlayersSuccess = (payload) => (
  { type: actionTypes.PLAYERS_GET_PLAYERS_SUCCESS, payload });
export const getPlayersError = (payload) => (
  { type: actionTypes.PLAYERS_GET_PLAYERS_ERROR, payload });
