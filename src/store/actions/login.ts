import { LoginFormData, LoginResponse } from "@/types/data";
import { AppThunk } from "..";
import request from "@/utils/request";
import { changeToken } from "../reducers/login";

export const loginAction = (formData: LoginFormData): AppThunk => {
  return async (dispatch, getState) => {
    // dispatch(add())
    // 1、发送请求获取token
    const res: LoginResponse = await request.post("/authorizations", formData);
    console.log(res.data);

    // 2、把token储存到redux
    dispatch(changeToken(res.data));
  };
};
