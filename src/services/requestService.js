import axios from "axios";
import { getToken } from "../utils/authHelpers";
import { URL_BACK } from '../utils/constants';

const API_URL = `${URL_BACK}/requests`;

const getHeaders = () => {
  const token = getToken();
  if (!token) throw new Error("Token no disponible. Por favor, inicia sesión.");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getRequests = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-requests`, getHeaders());
    if (response.data.status) {
      return response.data.data;
    }
    throw new Error("Error al obtener solicitudes");
  } catch (error) {
    console.error("Error en getRequests:", error.message);
    throw error.response?.data?.message || "Error de conexión";
  }
};

export const createRequest = async (requestData) => {
  try {
    const requestBody = {
      code: requestData.code,
      description: requestData.description,
      summary: requestData.summary,
      employee_id: requestData.employee_id,
    };

    const response = await axios.post(`${API_URL}/create-request`, requestBody, getHeaders());
    if (response.data.status) {
      return response.data.data;
    }
    throw new Error("Error al crear solicitud");
  } catch (error) {
    console.error("Error en createRequest:", error.message);
    throw error.response?.data?.message || "Error de conexión";
  }
};

export const updateRequest = async (id, requestData) => {
  try {
    const requestBody = {
      code: requestData.code,
      description: requestData.description,
      summary: requestData.summary,
      employee_id: requestData.employee_id,
    };

    const response = await axios.put(`${API_URL}/update-request/${id}`, requestBody, getHeaders());

    if (response.data.status) {
      return response.data.data;
    }
    throw new Error("Error al actualizar solicitud");
  } catch (error) {
    console.error("Error en updateRequest:", error.message);
    throw error.response?.data?.message || "Error de conexión";
  }
};

export const deleteRequest = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-request/${id}`, getHeaders());
    if (response.data.status) {
      return response.data.data;
    }
    throw new Error("Error al eliminar solicitud");
  } catch (error) {
    console.error("Error en deleteRequest:", error.message);
    throw error.response?.data?.message || "Error de conexión";
  }
};
