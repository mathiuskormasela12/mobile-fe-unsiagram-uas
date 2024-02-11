import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ICounterReduxState } from '@src/interfaces'

const initialState: ICounterReduxState = {
  count: 0
}

const counterTempSlice = createSlice({
  name: 'counter-temp-slice',
  initialState,
  reducers: {
    incrementTemp (state, action: PayloadAction<ICounterReduxState>) {
      state.count += action.payload.count
    }
  }
})

export const { incrementTemp } = counterTempSlice.actions
export default counterTempSlice.reducer
