import axios from "axios";

const API_URL = "http://localhost:5000";

const register = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/users/register`,
      userData
    );
  } catch (error) {}
};
