import axios from "axios";

export const API_URL = "https://react-native-e-commerce-backend.onrender.com";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/products`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getSpecificProduct = async (productId) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/products/${productId}`);
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
