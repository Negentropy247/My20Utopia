import request from "@/utils/request";
import { AppThunk } from "..";

/**
 * 获取登录用户信息
 * @param payload
 * @returns
 */
export const getUserAction = (): AppThunk => {
  return async (dispatch, getState) => {
    // dispatch(add());
    const res = await request.get("/user");
    console.log(res);
  };
};
