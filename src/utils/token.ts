import { Token } from "@/types/data";
const TOKEN_KEY: string = "geek-app-token";

// 获取token
const getToken = () => JSON.parse(localStorage.getItem(TOKEN_KEY) ?? "{}") as Token;
// 存储token
const setToken = (token: Token): void => localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
// 清除token
const clearToken = () => localStorage.removeItem(TOKEN_KEY);
// 是否已登录
const isAuth = () => !!getToken().token;

export { isAuth, getToken, setToken, clearToken };
