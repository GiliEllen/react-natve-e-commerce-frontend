// useCart.js

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCartItems } from './userCartSlice'; // Assuming your slice file is named userCartSlice.js

const useCart = () => {
  const dispatch = useDispatch();
  const { activeCartItems, loading, error } = useSelector(state => state.cartItems);

  useEffect(() => {
    dispatch(fetchCartItems()); // Fetch cart items when the component mounts
  }, [dispatch]);

  return { activeCartItems, loading, error };
};

export default useCart;



// const ExampleComponent = () => {
//     const { activeCartItems, loading, error } = useCart();
  
//     // how to use activeCartItems, loading, error 
//   };