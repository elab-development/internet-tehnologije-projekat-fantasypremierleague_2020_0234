import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        let token = localStorage.getItem('authToken')
        if (error.response.status === 401 && token) {
            localStorage.removeItem('authToken');
            window.location = '/login'
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;
