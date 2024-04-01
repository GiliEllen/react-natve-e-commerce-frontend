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

export const getUsersOrder = async (userId) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/orders/${userId}`);
    console.log("userId: " + userId);
    // const { data } = await axios.post(
    //   `http://localhost:4000/api/orders/${userId}`
    // );
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
