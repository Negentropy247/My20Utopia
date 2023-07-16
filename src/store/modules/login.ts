import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppThunk } from '../index'
import { Token } from '@/types/data'

export interface loginState {
  token: Token
}
export const login = createSlice({
  name: 'login',
  initialState: {
    token: {
      token: '',
      refresh_token: ''
    }
  } as loginState,
  reducers: {
    changeToken(state, action: PayloadAction<number | undefined>) {
      state.token = action.payload
    }
  }
})

export const { add } = login.actions

export const asyncAction = (payload?: unknown): AppThunk => {
  return async (dispatch, getState) => {
    // dispatch(add())
  }
}

export default login.reducer
