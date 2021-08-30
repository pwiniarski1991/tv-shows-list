import { AnyAction } from '@reduxjs/toolkit';
import { call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects'

import { fetchTVShows } from '../helpers/fetchTVShows';
import { setData, setError, setLoading } from '../store';
import { TVShow } from '../types/state';

function* fetchShows(action: { type: string, payload: string }): Generator<CallEffect<TVShow[]> | PutEffect<AnyAction>, void, TVShow[]> {
  try {
    yield put(setLoading());
    const tvShows = yield call(fetchTVShows, action.payload);
    yield put(setData(tvShows));
  } catch (e) {
    yield put(setError(e.message));
  } finally {
    yield put(setLoading());
  }
}

function* mySaga() {
  yield takeLatest("list/startFetching", fetchShows);
}

export default mySaga;