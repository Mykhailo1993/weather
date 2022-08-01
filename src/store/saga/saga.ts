import axios from 'axios';
import {call, takeEvery, put} from 'redux-saga/effects';

import {sagaActions} from '../sagaActions';
import {getDataSuccess} from '../weather/weatherSlice';

const getWeather = () =>
  axios.get<any[]>(
    'https://api.openweathermap.org/data/2.5/forecast/?lat=48.625262&lon=22.288702&cnt=14&appid=275b943c549bd91a7d92ca362895cc80',
  );

export function* fetchDataSaga() {
  try {
    let result = yield call(getWeather);

    const {list, city} = result.data;

    yield put(getDataSuccess({weathers: [list, city]}));
  } catch (e) {
    yield put({type: 'TODO_FETCH_FAILED'});
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
