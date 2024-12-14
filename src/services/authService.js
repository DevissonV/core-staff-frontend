import axios from "axios";
import { URL_BACK } from '../utils/constants';

const API_URL = `${URL_BACK}/users`;

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        if (response.data.status) {
            return response.data.data;
        }
        throw new Error("Error en la autenticación");
    } catch (error) {
        throw error.response?.data?.data?.message || "Error de conexión";
    }
};

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        if (response.data.status) {
            return response.data.data;
        }
        throw new Error("Error en el registro");
    } catch (error) {
        throw error.response?.data?.data?.message || "Error de conexión";
    }
};
