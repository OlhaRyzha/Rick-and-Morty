import { createSlice } from '@reduxjs/toolkit';
import {
  getCharacters,
  getfilteredByName,
  getNameByValue,
} from 'redux/operations';

const initialState = {
  characters: [],
  value: [],
  isLoading: false,
  error: null,
  page: 1,
  pages: 1,
  count: 0,
  name: '',
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  extraReducers: builder =>
    builder
      // ----- getcharacters -----
      .addCase(getCharacters.pending, pendingHandler)
      .addCase(getCharacters.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.characters = payload.results;
        state.count = payload.info.count;
      })
      .addCase(getCharacters.rejected, rejectHandler)
      // ----- filteredByName -----

      .addCase(getfilteredByName.fulfilled, (state, { payload }) => {
        state.count = payload.info?.count;
        state.value = payload.results;
      })
      .addCase(getNameByValue.fulfilled, (state, { payload }) => {
        state.name = payload;
      }),
});

function pendingHandler(state) {
  state.isLoading = true;
  state.error = null;
}
function rejectHandler(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

export const charactersReducer = charactersSlice.reducer;
