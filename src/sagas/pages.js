import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';

import {
  getTournamentsSuccess, getTournamentsErrror, getCurrentTournamentSuccess,
  getCurrentTournamentErrror,
} from '../actions/tournaments';

async function getTournamentsRequest() {
  const result = await axios.get(`/api/tournaments/`);
  return result;
}

export function* getTournamentsSaga() {
  try {
    const result = yield call(getTournamentsRequest);
    const payload = result.data;
    const sortedPayload = payload.sort((a, b) => moment(b.date).format('YYYYMMDD') - moment(a.date).format('YYYYMMDD'));
    yield put(getTournamentsSuccess(sortedPayload));
  } catch (error) {
    const { message } = error.response.data;
    yield put(getTournamentsErrror(message));
  }
}
async function getCurrentTournamentRequest(payload) {
  const result = await axios.get(`/api/tournaments/${payload}`);
  return result;
}

export function* getCurrentTournamentSaga(action) {
  try {
    const result = yield call(getCurrentTournamentRequest, action.payload);
    const payload = result.data;
    yield put(getCurrentTournamentSuccess(payload));
  } catch (error) {
    const { message } = error.response.data;
    yield put(getCurrentTournamentErrror(message));
  }
}
