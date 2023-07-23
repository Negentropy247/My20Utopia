/**
 * 后台返回数据类型
 */
export type Token = {
  token: string;
  refresh_token: string;
};

// 登录表单的数据类型
export type LoginFormData = {
  mobile: string;
  code: string;
};

// 登录接口返回值的类型
export type LoginResponse = {
  data: Token;
  message: string;
};
