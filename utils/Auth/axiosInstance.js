// utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend-ry1.fyber.site/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
