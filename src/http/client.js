import { API_BASE_URL } from "@/config";
import axios from "axios";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Token 612f925a970388ff1f80d6885a913aa19bc39361",
  },
});
