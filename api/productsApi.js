import axios from "axios";

const API_URL = "https://react-native-e-commerce-backend.onrender.com";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/products`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
