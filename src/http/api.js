const { api } = require("./client");

// products
export const getProducts = () => api.get("/api/product/");
export const getProduct = (id) => api.get(`/api/product/${id}/`);
export const createProduct = (data) => api.post(`/api/product/`, data);
export const deleteProduct = (id) => api.delete(`/api/product/${id}/`);

// categories
export const addCategory = (data) => api.post("/api/category/", data);
export const getCategories = () => api.get("/api/category/");
export const deleteCategory = (id) => api.delete(`/api/category/${id}/`);
