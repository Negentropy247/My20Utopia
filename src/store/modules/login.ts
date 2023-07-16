import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppThunk } from '..'

export interface loginState {
  count: number
}
export const login = createSlice({
  name: 'login',
  initialState: {
    count: 0
  } as loginState,
  reducers: {
    add(state, action: PayloadAction<number | undefined>) {
      state.count++
    }
  }
})

export const { add } = login.actions

export const asyncAction = (payload?: unknown): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(add())
  }
}

export default login.reducer
