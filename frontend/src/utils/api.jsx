import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://logist-q-api.vercel.app/"
})

export default axiosInstance