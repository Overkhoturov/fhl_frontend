import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import CONSTANTS from '../constants';

import { getPlayersError, getPlayersSuccess } from '../actions/players';

async function getPlayersAxios() {
  const result = await axios.get(`${CONSTANTS.SERVER}/users/players/`);
  console.log(result);
  return result;
}

function* getPlayersSaga() {
  try {
    const result = yield call(getPlayersAxios);
    const payload = result.data;
    yield put(getPlayersSuccess(payload));
  } catch (error) {
    const { message } = error.response.data;
    yield put(getPlayersError(message));
  }
}

export default getPlayersSaga;
