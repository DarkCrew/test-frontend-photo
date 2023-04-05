/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  value: string;
  photos: [];
}

const initialState: SearchState = {
  value: '',
  photos: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = String(action.payload);
    },
    getPhotos: (state, action: PayloadAction<[]>) => {
      state.photos = action.payload;
    },
  },
});

export const { changeValue, getPhotos } = searchSlice.actions;

export default searchSlice.reducer;
