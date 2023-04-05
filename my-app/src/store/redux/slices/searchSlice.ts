/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = String(action.payload);
    },
  },
});

export const { changeValue } = searchSlice.actions;

export default searchSlice.reducer;
