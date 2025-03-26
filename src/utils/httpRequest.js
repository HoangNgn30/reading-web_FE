import axios from "axios";

const httpRequest = axios.create({
    baseURL: "http://192.168.50.21:8000",
    withCredentials: true,
});

// httpRequest.interceptors.request.use((config) => {
//     const token = localStorage.getItem("jwt");
//     if (token) {
//         config.headers.Authorization = Bearer ${token};
//     }
//     return config;
// });

export default httpRequest;