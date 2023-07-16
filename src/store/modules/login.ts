import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppThunk } from '../index'
import { Token } from '@/types/data'

export interface loginState {
  token: Token
}

const initState: loginState = {
  token: {
    token: '',
    refresh_token: ''
  }
}

export const login = createSlice({
  name: 'login',
  initialState: initState,
  reducers: {
    changeToken(state, action: PayloadAction<Token | undefined>) {
      if (action.payload) {
        state.token = action.payload
      }
    }
  }
})

export const { changeToken } = login.actions

export const asyncAction = (payload?: unknown): AppThunk => {
  return async (dispatch, getState) => {
    // dispatch(add())
  }
}

export default login.reducer
