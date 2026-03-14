import axios from "axios";

const API_URL = "http://localhost:3000";

export const loginApi = async (username, password) => {
  const res = await axios.get(
    `${API_URL}/users?username=${username}&password=${password}`
  );
  return res.data[0];
};