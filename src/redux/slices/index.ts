import { combineReducers } from '@reduxjs/toolkit'
import storage from '../storage'
import counterSlice from './counterSlice'
import { persistReducer } from 'redux-persist'
import counterTempSlice from './counterTempSlice'

const rootPersistConfig = {
  key: 'root',
  version: 1,
  blacklist: ['counterTempReducer'],
  storage
}

const rootReducer = combineReducers({
  counterReducer: counterSlice,
  counterTempReducer: counterTempSlice
})

export default persistReducer(rootPersistConfig, rootReducer)
