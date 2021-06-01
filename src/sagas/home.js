import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import CONSTANTS from '../constants';

import { getTournamentsSuccess, getTournamentsErrror } from '../actions/tournaments';

async function getTournamentsRequest() {
  const result = await axios.get(`${CONSTANTS.SERVER}/tournaments/`);
  return result;
}

export default function* getTournamentsSaga() {
  try {
    const result = yield call(getTournamentsRequest);
    console.log('result', result);
    const payload = result.data;
    yield put(getTournamentsSuccess(payload));
  } catch (error) {
    const { message } = error.response.data;
    yield put(getTournamentsErrror(message));
  }
}
