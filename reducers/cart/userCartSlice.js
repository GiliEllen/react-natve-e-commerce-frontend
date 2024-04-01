import { createSlice } from "@reduxjs/toolkit";
import { fetchCartItems } from "./userCartApi";

const initialState = {
  activeOrder: "",
  activeCartItems: [],
  loading: false,
  error: null,
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    setActiveOrder: (state, action) => {
      state.activeOrder = action.payload;
    },
  },
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
        state.activeCartItems = state.activeCartItems.filter(item => item._id !== action.payload.cartItemId);
      })
      .addCase(deleteItemFromCart.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateProductAmount.fulfilled, (state, action) => {
        const { cartItem } = action.payload;
        const index = state.activeCartItems.findIndex(item => item._id === cartItem._id);
        if (index !== -1) {
            state.activeCartItems[index] = cartItem;
        }
    })
      .addCase(updateProductAmount.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setActiveOrder } = cartItemsSlice.actions;

export const activeOrderSelector = (state) => state.cartItems.activeOrder;

export default cartItemsSlice.reducer;
