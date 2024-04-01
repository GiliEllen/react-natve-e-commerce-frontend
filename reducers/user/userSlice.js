import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      _id: null,
      name: null,
      email: null,
      password: null,
      role: null,
    },
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = {
        _id: null,
        name: null,
        email: null,
        password: null,
        role: null,
      };
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, clearUser, setIsLoggedIn } = userSlice.actions;
export const selectUserState = (state) => state.user.user;
export const isLoggedInSelector = (state) => state.user.isLoggedIn;
export const selector = (state) => state.user;
export default userSlice.reducer;
