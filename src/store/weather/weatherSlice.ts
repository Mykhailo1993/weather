import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Weather = {weathers: {}};
type WeathersState = {
  weathers: Weather[];
  isLoading: boolean;
};

const initialState: WeathersState = {
  weathers: [],
  isLoading: false,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getFetchData: state => {
      state.isLoading = true;
    },
    getDataSuccess: (state, action: PayloadAction<Weather>) => {
      const {weathers} = action.payload;
      state.weathers = weathers[0];
      state.isLoading = false;
    },
    getDataFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {getFetchData, getDataSuccess, getDataFailure} =
  weatherSlice.actions;

export default weatherSlice.reducer;
