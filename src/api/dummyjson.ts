import axios from "axios";
const BASE_URL = "https://dummyjson.com";

export const loginUser = (username: string, password: string) => {
  axios.post(`${BASE_URL}/auth/login`, {
    username,
    password,
    expiresInMins: 60,
  });
};
