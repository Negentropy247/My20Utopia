import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Token } from "@/types/data";
import { getToken, setToken } from "@/utils/token";

export interface loginState {
  token: Token;
}

const initState: loginState = {
  token: getToken() || {
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
        // 本地持久化储存一份
        setToken(action.payload);
      }
    },
  },
});

export const { changeToken } = login.actions;

export default login.reducer;
