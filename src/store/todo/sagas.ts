import axios from 'axios';
import {all, call, put, takeLatest} from 'redux-saga/effects';

import {fetchTodoFailure, fetchTodoSuccess} from './action';
import {FETCH_TODO_REQUEST} from './actionTypes';
import {ITodo} from './types';

const getWeather = () =>
  axios.get<ITodo[]>(
    'https://api.openweathermap.org/data/2.5/forecast/?lat=48.625262&lon=22.288702&cnt=14&appid=275b943c549bd91a7d92ca362895cc80',
  );

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchWeatherSaga() {
  try {
    const response = yield call(getWeather);

    const {list, city} = response.data;
    yield put(
      fetchTodoSuccess({
        todos: [list, city],
      }),
    );
  } catch (e) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      }),
    );
  }
}

function* weatherSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchWeatherSaga)]);
}

export default weatherSaga;
