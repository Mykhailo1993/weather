import {combineReducers} from 'redux';

import weatherReducer from './todo/reducer';

const rootReducer = combineReducers({
  todo: weatherReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
