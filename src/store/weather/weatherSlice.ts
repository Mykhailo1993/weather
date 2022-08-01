import {createSlice} from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weathers: [],
    isLoading: false,
  },
  reducers: {
    getFetchData: state => {
      state.isLoading = true;
    },
    getDataSuccess: (state, action) => {
      console.log('That');
      console.log(action);

      state.weathers = action.payload.weathers;
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
