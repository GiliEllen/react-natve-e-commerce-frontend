import axios from "axios";

export const API_URL = "https://react-native-e-commerce-backend.onrender.com";

export const createUser = async () => {
  try {
    const { data } = await axios.post(`${API_URL}/api/users`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const authenticateUser = async (email, password) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/auth`, { email, password });
      console.log(data);
      // שמור את הטוקן במשתנה או באובייקט לשימוש עתידי
      // ניתן גם להחזיר את הטוקן כתוצאה מהפונקציה אם זה רלוונטי
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  