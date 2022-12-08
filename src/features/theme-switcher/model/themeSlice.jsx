import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'mode',
  initialState: { mode: true },
  reducers: {
    setMode: (state, { payload }) => {
      state.mode = payload;
    },
  },
});

export const reducer = slice.reducer;
export const { setMode } = slice.actions;
