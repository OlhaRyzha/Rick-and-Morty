import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { email: null, id: null },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefreshing: false,
  errorLoginMessage: null,
  errorRegisterMessage: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => builder,
});

export const userReducer = userSlice.reducer;
