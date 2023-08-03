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
// 后台返回数据的泛型工具
export type ApiResponse<Data> = {
  data: Data;
  message: string;
};

export type LoginResponse = ApiResponse<Token>;

// 我的 - 个人信息
export type User = {
  id: string;
  name: string;
  photo: string;
  art_count: number;
  follow_count: number;
  fans_count: number;
  like_count: number;
};

// 登录后用户数据类型
export type UserResponse = ApiResponse<User>;
