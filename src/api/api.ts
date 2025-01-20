import axios, { AxiosInstance, AxiosResponse } from 'axios';

const axiosClient: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;
