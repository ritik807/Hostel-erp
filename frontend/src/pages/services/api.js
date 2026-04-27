import axios from "axios";

const API = axios.create({
  baseURL: "https://hostel-erp-hu2e.onrender.com/api",
});

export default API;