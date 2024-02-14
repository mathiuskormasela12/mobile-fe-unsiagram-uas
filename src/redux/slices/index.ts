import { combineReducers } from '@reduxjs/toolkit'
import storage from '../storage'
import authSlice from './authSlice'
import { persistReducer } from 'redux-persist'

const rootPersistConfig = {
  key: 'root',
  version: 1,
  blacklist: [],
  storage
}

const rootReducer = combineReducers({
  authReducer: authSlice
})

export default persistReducer(rootPersistConfig, rootReducer)
