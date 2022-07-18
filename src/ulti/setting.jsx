import axios from 'axios'
//Cấu hình các hằng số của hệ thống 

//domain backend
export const DOMAIN = 'https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a';



//config axios 
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
});

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers
    }
    return config;
}, (errors) => {
    return Promise.reject(errors)
})