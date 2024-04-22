import { API_BASE_URL } from "@/config";
import axios from "axios";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Token bc12d80ff7b55b5573827fb32629d9812605bbba",
  },
});
