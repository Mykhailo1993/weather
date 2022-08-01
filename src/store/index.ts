import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import saga from './saga/saga';
import weatherReducer from './weather/weatherSlice';

let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
