// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from './userCartSlice';

const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
   
  },
});

export default store;