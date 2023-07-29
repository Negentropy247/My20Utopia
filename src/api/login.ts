import request from "@/utils/request";

/**
 *发送验证码
 * @param mobile
 * @returns
 */
export const getCodeApi = (mobile: string) => {
  return request.get(`/sms/codes/${mobile}`);
};
