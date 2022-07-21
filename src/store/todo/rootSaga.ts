import {all, fork} from 'redux-saga/effects';

import weatherSaga from './sagas';

export function* rootSaga() {
  yield all([fork(weatherSaga)]);
}
