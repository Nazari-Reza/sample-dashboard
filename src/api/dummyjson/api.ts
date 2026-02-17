import axios from "axios";
import { AuthUser, UsersResponse } from "./types";
const BASE_URL = "https://dummyjson.com";

const api = axios.create({ baseURL: BASE_URL });

export const loginUser = (username: string, password: string) =>
  api.post<AuthUser>(`/auth/login`, {
    username,
    password,
    expiresInMins: 60,
  });

export const apiGetUsers = (limit: number = 10, skip: number = 0) =>
  api.get<UsersResponse>(`/users?limit=${limit}&skip=${skip}`);
