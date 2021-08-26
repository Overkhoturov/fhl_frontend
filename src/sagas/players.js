import axios from 'axios';

import { call, put } from 'redux-saga/effects';

import { getPlayersError, getPlayersSuccess } from '../actions/players';

async function getPlayersAxios() {
  const result = await axios.get('https://iryabuhin.github.io/users/players');
  return result;
}

function* getPlayersSaga() {
  try {
    const result = yield call(getPlayersAxios);
    const payload = result.data;
    yield put(getPlayersSuccess(payload));
  } catch (error) {
    yield put(getPlayersError('Ошибка при загрузке игроков'));
  }
}
export default getPlayersSaga;
