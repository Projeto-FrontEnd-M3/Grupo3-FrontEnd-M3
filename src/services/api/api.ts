import axios from "axios";

export const Api = axios.create({
  baseURL: "https://m3-devs-helping-server.onrender.com",
  timeout: 5000,
});
