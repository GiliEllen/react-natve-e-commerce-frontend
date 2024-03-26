// userCartSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchCartItems, addItemToCart, deleteItemFromCart, updateProductAmount } from "./userCartApi";

// Initial state
const initialState = {
  activeCartItems: [],
  loading: false,
  error: null,
};


// Slice
const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCartItems.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchCartItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.activeCartItems = action.payload;
    },
    [fetchCartItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  
  },
});

export default cartItemsSlice.reducer;