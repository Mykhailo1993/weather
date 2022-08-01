import {createSelector} from 'reselect';
import {RootState} from '..';

const getWeathers = (state: RootState) => state.weather;

export const getWeathersSelector = createSelector(
  getWeathers,
  weathers => weathers.weathers,
);
