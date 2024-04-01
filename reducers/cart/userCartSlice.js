import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCartItems,
  addItemToCart,
  deleteItemFromCart,
  updateProductAmount,
} from "./userCartApi";

const initialState = {
  activeCartItems: [],
  loading: false,
  error: null,
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.activeCartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.activeCartItems.push(action.payload.cartItem);
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteItemFromCart.fulfilled, (state, action) => {
        state.activeCartItems = state.activeCartItems.filter(
          (item) => item._id !== action.payload.cartItemId
        );
      })
      .addCase(deleteItemFromCart.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateProductAmount.fulfilled, (state, action) => {
        const { cartItem } = action.payload;
        const index = state.activeCartItems.findIndex(
          (item) => item._id === cartItem._id
        );
        if (index !== -1) {
          state.activeCartItems[index] = cartItem;
        }
      })
      .addCase(updateProductAmount.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default cartItemsSlice.reducer;
