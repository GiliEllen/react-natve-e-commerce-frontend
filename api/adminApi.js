import axios from "axios";

export const API_URL = "https://react-native-e-commerce-backend.onrender.com";

//get all users

export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/users/`)
        if (response.data.ok === false) {
            console.log(response.data.error)
            return response.data
        }
        return response.data
    } catch (error) {
        console.error(error)
    }
}

//update by userId: name, email

export const updateUser = async (userId, name, email) => {
    try {
        const response = await axios.patch(`${API_URL}/api/users/${userId}`, {name, email});
        const { ok, userData } = response.data;

        if (ok) {
           return userData
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error).message);
    }
};

//delete by userId

export const deleteUser = async (user_id) => {
    try {
        const response = await axios.delete(`${API_URL}/api/users/${user_id}`);
        const { ok, results } = response.data;
        if (ok) {
           return results
        } else {
            console.error("Error retrieving user:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error).message);
    }
}