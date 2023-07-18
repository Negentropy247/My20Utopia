import { LoginFormData } from "@/types/data";
import { AppThunk } from "..";
import request from "@/utils/request";

export const loginAction = (formData: LoginFormData): AppThunk => {
  return async (dispatch, getState) => {
    // dispatch(add())
    // 1、发送请求获取token
    const res = await request.post("/authorizations", formData);
    console.log(res);
    // 2、把token储存到redux
  };
};
