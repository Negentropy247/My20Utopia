import request from "@/utils/request";
import { AppThunk } from "..";
import { setUser } from "../modules/profile";

/**
 * 获取登录用户信息
 * @param payload
 * @returns
 */
export const getUserAction = (): AppThunk => {
  return async (dispatch, getState) => {
    // 1、获取用户信息
    const res = await request.get("/user");
    console.log(res);
    // 2、存储用户信息
    dispatch(setUser(res.data));
  };
};
