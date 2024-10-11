import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://kad-api.fyber.site/", // Base URL of your API
  headers: {
    "Content-Type": "application/json", // Default content type
    Accept: "application/json",
  },
});

export default axiosInstance;
