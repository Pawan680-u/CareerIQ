const USER_KEY = "careeriq_user";

export const saveUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user));
export const getUser = () => JSON.parse(localStorage.getItem(USER_KEY) || "null");
export const logout = () => localStorage.removeItem(USER_KEY);
export const isAuthenticated = () => Boolean(getUser());
