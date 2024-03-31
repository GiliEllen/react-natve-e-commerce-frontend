import axios from "axios";
import API_URL from "../api/productsApi"
export const API_URL = "https://react-native-e-commerce-backend.onrender.com";

export const createUser = async (email, password, name) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/users/register`, {email, password, name});
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const authUser = async (email, password) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/users/login`, { email, password });
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  