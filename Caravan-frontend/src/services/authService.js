import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // adjust if needed

// REGISTER USER
export const registerUser = async (formData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, formData);
    return res.data;
  } catch (error) {
    console.error("Register Error:", error.response?.data || error.message);
    throw error.response?.data || { error: "Registration failed" };
  }
};

// LOGIN USER
export const loginUser = async (formData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, formData);

    // Backend returns: { token, user }
    const { token, user } = res.data;

    // Save token in localStorage (recommended for now)
    localStorage.setItem("token", token);

    return { token, user };
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error.response?.data || { error: "Login failed" };
  }
};

// GET TOKEN
export const getToken = () => {
  return localStorage.getItem("token");
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
};
