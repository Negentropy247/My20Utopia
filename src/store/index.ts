import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import login from "./reducers/login";

const store = configureStore({
  reducer: {
    login,
  },
});

// redux相关类型
// 1、dispatch函数类型
export type AppDispatch = typeof store.dispatch;

// 2、store状态类型
export type RootStore = ReturnType<typeof store.getState>;
// 3、异步Action函数返回值类型
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStore,
  unknown,
  Action<string>
>;

export default store;
