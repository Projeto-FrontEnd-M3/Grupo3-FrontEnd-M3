import axios from "axios";

export const Api = axios.create({
  baseURL: "https://json-server-m3-t13.herokuapp.com",
  timeout: 5000,
});
