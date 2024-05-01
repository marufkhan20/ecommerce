import { API_BASE_URL } from "@/config";
import axios from "axios";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token Yl90SGItd1FySXE5X2t2Nmg0RHFtZk5vVFZHU0ZjTm8zSTdjelFtZ0tMVTo=`,
  },
});
