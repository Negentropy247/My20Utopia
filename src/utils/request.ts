import axios, { AxiosError } from "axios";
import store from "@/store";

import { history } from "@/router/history";
import { Toast } from "antd-mobile";

const request = axios.create({
  baseURL: "http://toutiao.itheima.net/v1_0",
  // baseURL: process.env.REACT_APP_URL
});

// 请求拦截器
request.interceptors.request
  .use
  // config => {
  // 获取token
  // const {
  //   login: { token }
  // } = store.getState()

  // // 除了登录请求外，其他请求统一添加 token
  // if (token.token) {
  //   // ts中！操作符叫非空断言=》去掉null undefined 告诉ts类型是安全的
  //   config.headers!.Authorization = `Bearer ${token.token}`
  // }
  // return config
  // }
  ();

// 响应拦截器
request.interceptors.response.use(
  res => {
    // 简化返回数据
    return res.data;
  },
  async error => {
    // 处理token过期/统一处理接口请求错误
    if (error.response.status === 401) {
      // 401直接跳回登录页=》重新登陆
      Toast.show({
        content: "没有登录或token过期了",
        icon: "fail",
        afterClose: () => {
          // 删除token
          //  store.dispatch(logout())
          history.replace("/login", { from: history.location.pathname });
        },
      });
    }
    return Promise.reject(error);
  },
);

export default request;
