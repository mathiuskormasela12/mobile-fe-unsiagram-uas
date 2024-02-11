import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ICounterReduxState } from '@src/interfaces'

const initialState: ICounterReduxState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter-slice',
  initialState,
  reducers: {
    increment (state, action: PayloadAction<ICounterReduxState>) {
      state.count += action.payload.count
    }
  }
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer
