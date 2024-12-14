import axios from "axios";
import { getToken } from "../utils/authHelpers";
import { URL_BACK } from '../utils/constants';

const API_URL = `${URL_BACK}/employees`;


const getHeaders = () => {
  const token = getToken();
  if (!token) throw new Error("Token no disponible. Por favor, inicia sesión.");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-employees`, getHeaders());
    if (response.data.status) {
      return response.data.data;
    }
    throw new Error("Error al obtener empleados");
  } catch (error) {
    console.error("Error en getEmployees:", error.message);
    throw error.response?.data?.message || "Error de conexión";
  }
};

export const getEmployee = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get-employee/${id}`, getHeaders());
    if (response.data.status) {
      return response.data.data;
    }
    throw new Error("Error al obtener empleado");
  } catch (error) {
    console.error("Error en getEmployee:", error.message);
    throw error.response?.data?.message || "Error de conexión";
  }
};

export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_URL}/create-employee`, employeeData, getHeaders());
    if (response.data.status) {
      return response.data.data;
    }
    throw new Error("Error al crear empleado");
  } catch (error) {
    console.error("Error en createEmployee:", error.message);
    throw error.response?.data?.message || "Error de conexión";
  }
};

export const updateEmployee = async (id, employeeData) => {
  try {
    const updatedEmployeeData = {
      name: employeeData.name,
      hire_date: employeeData.hire_date,
      salary: employeeData.salary,
    };

    const response = await axios.put(`${API_URL}/update-employee/${id}`, updatedEmployeeData, getHeaders());
    
    if (response.data.status) {
      return response.data.data;
    }
    throw new Error("Error al actualizar empleado");
  } catch (error) {
    console.error("Error en updateEmployee:", error.message);
    throw error.response?.data?.message || "Error de conexión";
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-employee/${id}`, getHeaders());
    if (response.data.status) {
      return response.data.data;
    }
    throw new Error("Error al eliminar empleado");
  } catch (error) {
    console.error("Error en deleteEmployee:", error.message);
    throw error.response?.data?.message || "Error de conexión";
  }
};
