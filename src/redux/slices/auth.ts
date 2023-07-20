import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  logedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.logedIn = action.payload;
    },
    logout: (state, action) => {
      state.logedIn = action.payload;
    },
  },
});
export const {authUser, logout} = authSlice.actions;
export const authReducer = authSlice.reducer;
