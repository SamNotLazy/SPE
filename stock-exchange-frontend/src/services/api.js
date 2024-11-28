import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8082/api";

export const registerUser = (user) => axios.post(`${API_BASE_URL}/users/register`, user);
export const registerStock = (stock) => axios.post(`${API_BASE_URL}/stocks/register`, stock);
export const getStock = (symbol) => axios.get(`${API_BASE_URL}/stocks/${symbol}`);
export const getUser = (email) => axios.get(`${API_BASE_URL}/users/${email}`);
