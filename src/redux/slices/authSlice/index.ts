import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IAuthToken } from '@src/interfaces'

const initialState: IAuthToken = {
  accessToken: '',
  refreshToken: ''
}

const authSlice = createSlice({
  name: 'auth-slice',
  initialState,
  reducers: {
    setToken (state, action: PayloadAction<IAuthToken>) {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    }
  }
})

export const { setToken } = authSlice.actions
export default authSlice.reducer
