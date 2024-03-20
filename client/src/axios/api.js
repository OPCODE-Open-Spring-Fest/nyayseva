import axios from "axios"

const axiosInstance = axios.create(
    {
        baseURL: "http://localhost:4000"
    }
)

axiosInstance.interceptors.response.use((response) => {
    return response
}, async function(err) {
    const originalRequest = err.config

    if(err.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;

        const token = localStorage.getItem("refreshtoken")
        const {data} = await axiosInstance.get("/refresh", {headers:{'Authorization':`Bearer ${token}`}})
        localStorage.setItem("token", data)
        originalRequest.headers.Authorization = `Bearer ${data}`
        return axiosInstance(originalRequest)

    }

    return Promise.reject(err)
})

export default axiosInstance;