
import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from '../reducers/cart/userCartSlice';
import userSlice from '../reducers/user/userSlice';

const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    user: userSlice
  },
});

export default store;