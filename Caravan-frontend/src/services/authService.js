import axios from "axios";

/**
 * Base API URL
 * Example in .env:
 * VITE_API_URL=http://localhost:5000/api/auth
 */
const API_URL = import.meta.env.VITE_API_URL;

/**
 * Helper: choose storage based on rememberMe
 */
const getStorage = (rememberMe) => {
  return rememberMe ? localStorage : sessionStorage;
};

/* =========================
   REGISTER USER
   ========================= */
export const registerUser = async (formData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, formData);
    return res.data; // { msg, user }
  } catch (error) {
    throw error.response?.data || { error: "Registration failed" };
  }
};

/* =========================
   LOGIN USER
   ========================= */
export const loginUser = async (formData, rememberMe = false) => {
  try {
    const res = await axios.post(`${API_URL}/login`, formData);

    // Backend returns: { token, user }
    const { token, user } = res.data;

    const storage = getStorage(rememberMe);

    // Save auth data
    storage.setItem("token", token);
    storage.setItem("user", JSON.stringify(user));

    return { token, user };
  } catch (error) {
    throw error.response?.data || { error: "Login failed" };
  }
};

/* =========================
   GET TOKEN
   ========================= */
export const getToken = () => {
  return (
    localStorage.getItem("token") ||
    sessionStorage.getItem("token")
  );
};

/* =========================
   GET CURRENT USER
   ========================= */
export const getCurrentUser = () => {
  const user =
    localStorage.getItem("user") ||
    sessionStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};

/* =========================
   LOGOUT USER
   ========================= */
export const logoutUser = () => {
  localStorage.clear();
  sessionStorage.clear();
};

/* =========================
   DEFAULT EXPORT (OPTIONAL)
   ========================= */
const authService = {
  registerUser,
  loginUser,
  getToken,
  getCurrentUser,
  logoutUser,
};

export default authService;
