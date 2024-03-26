// useCart.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../reducers/cart/userCartApi';

const useCart = () => {
  const dispatch = useDispatch();
  const { activeCartItems, loading, error } = useSelector(state => state.cartItems);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return { activeCartItems, loading, error };
};

export default useCart;
