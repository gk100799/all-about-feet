import axios from "axios";

export const backendURL = "http://localhost:8000";
// export const backendURL = "https://allaboutfeet-live.herokuapp.com";

export const request = axios.create({
  baseURL: backendURL,
  // timeout: 10000
});

export const axiosInstance = axios.create({
  baseURL: backendURL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `JWT ${localStorage.getItem('token')}`
  },
  // timeout: 10000
});

export const axiosInstanceFormData = axios.create({
  baseURL: backendURL,
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
    if (error.response.status === 408 || error.code === 'ECONNABORTED') {
        console.log(`A timeout happend on url ${error.config.url}`)
      }
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
