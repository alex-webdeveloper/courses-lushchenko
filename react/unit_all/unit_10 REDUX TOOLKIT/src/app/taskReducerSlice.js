import { createSlice } from '@reduxjs/toolkit';

export const taskReducerSlice = createSlice({
  name: 'store',
  initialState: {
    value: 0,
    text: 'privet '
  },
  reducers: {
    add: (state, data) => {
      state.value += +data.payload;
    },
    minus: (state, data) => {
      state.value -= data.payload;
    },
    multi: (state, data) => {
      if (state.value !== Infinity) state.value *= data.payload;
    },
    division: (state, data) => {
      if (state.value !== 0) state.value /= data.payload;
    },
    showText: (state, data) => {
      state.text += data.payload;
    },
  },
});

export const { add, minus, multi, division, showText } = taskReducerSlice.actions;

export const selectValue = state => state.taskReducer.value;
export const selectTest = state => state.taskReducer.text;

export default taskReducerSlice.reducer;
