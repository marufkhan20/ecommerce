const { api } = require("./client");

// authentication
export const register = (data) => api.post("/api/user/register/", data);
export const login = (data) => api.post("/api/user/sign-in/", data);

// user
export const changePassword = (data) =>
  api.post("/api/user/change-password/", data);
export const updateAccount = (data) => api.put("/api/user/update/me/", data);

// products
export const getProducts = () => api.get("/api/product/");
export const getProduct = (id) => api.get(`/api/product/${id}/`);
export const createProduct = (data) => api.post(`/api/product/`, data);
export const deleteProduct = (id) => api.delete(`/api/product/${id}/`);

// categories
export const addCategory = (data) => api.post("/api/category/", data);
export const getCategories = () => api.get("/api/category/");
export const deleteCategory = (id) => api.delete(`/api/category/${id}/`);
