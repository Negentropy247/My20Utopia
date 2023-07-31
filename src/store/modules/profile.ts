import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "@/types/data";

export interface profileState {
  user: User;
}

export const profile = createSlice({
  name: "profile",
  initialState: {
    user: {},
  } as profileState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = profile.actions;

export default profile.reducer;
