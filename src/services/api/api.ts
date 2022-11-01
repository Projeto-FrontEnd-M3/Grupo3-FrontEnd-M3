import axios from "axios";

export const Api = axios.create({
  baseURL: "....",
  timeout: 5000,
});
