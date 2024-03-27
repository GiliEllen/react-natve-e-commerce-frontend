
import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from '../reducers/cart/userCartSlice';

const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
   
  },
});

export default store;