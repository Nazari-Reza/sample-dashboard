export interface AuthUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}
export interface Address {
  city: string;
  state: string;
  country: string;
}
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  age: number;
  gender: string;
  image: string;
  role: string;
  company: { name: string; department: string };
  address: Address;
}
export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
export interface PaginationState {
  page: number;
  limit: number;
  total: number;
}
