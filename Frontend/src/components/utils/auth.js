export const getAdminToken = () => localStorage.getItem("adminToken");

export const isAuthenticatedAdmin = () => !!getAdminToken();