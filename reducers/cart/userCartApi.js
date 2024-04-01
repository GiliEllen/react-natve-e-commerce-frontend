import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../api/productsApi";

// Thunks
export const fetchCartItems = createAsyncThunk(
  "cartItems/fetchCartItems",
  async (orderId, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/api/cart-items/${orderId}`);
      return response.data.cart;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "cartItems/addItemToCart",
  async (cartItem, thunkAPI) => {
    try {
      const response = await axios.post("/api/cart", cartItem);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const handleAddItemToCart = async (cartItem) => {
  try {
    console.log(cartItem);
    console.log(API_URL);
    const response = await axios.post(`${API_URL}/api/cart-items`, cartItem);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteItemFromCart = createAsyncThunk(
  "cartItems/deleteItemFromCart",
  async (cartItemId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/cart/${cartItemId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProductAmount = createAsyncThunk(
  "cartItems/updateProductAmount",
  async ({ cartItemId, amount }, thunkAPI) => {
    try {
      await updateProductAmountApi(cartItemId, amount);
      return { cartItemId, amount };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
