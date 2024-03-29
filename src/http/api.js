const { api } = require("./client");

// products
export const getProducts = () => api.get("/api/product");
export const getProduct = (id) => api.get(`/api/product/${id}`);
