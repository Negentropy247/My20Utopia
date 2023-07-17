import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../index";
import { LoginFormData, Token } from "@/types/data";
import request from "@/utils/request";

export interface loginState {
  token: Token;
}

const initState: loginState = {
  token: {
    token: "",
    refresh_token: "",
  },
};

export const login = createSlice({
  name: "login",
  initialState: initState,
  reducers: {
    changeToken(state, action: PayloadAction<Token | undefined>) {
      if (action.payload) {
        state.token = action.payload;
      }
    },
  },
});

export const { changeToken } = login.actions;

export const loginAction = (formData: LoginFormData): AppThunk => {
  return async (dispatch, getState) => {
    // dispatch(add())
    // 1、发送请求获取token
    const res = await request.post("/authorizations", formData);
    // 2、把token储存到redux
  };
};

export default login.reducer;
