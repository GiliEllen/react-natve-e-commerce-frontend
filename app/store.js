
import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from '../reducers/cart/userCartSlice';
import userSlice from '../reducers/user/userSlice';
import userCartSlice from '../reducers/cart/userCartSlice';

const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    user: userSlice,
    userCart: userCartSlice
  },
});

export default store;