import axios from "axios";

export const backendURL = "http://localhost:8000";

export const request = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000
});

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `JWT ${localStorage.getItem('token')}`
  }
});

export const axiosInstanceFormData = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "multipart/form-data"
  }
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error;
  }
);

axiosInstanceFormData.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstanceFormData.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
