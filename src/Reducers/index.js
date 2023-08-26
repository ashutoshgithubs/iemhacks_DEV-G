import authReducer from '../Slices/authSlice'
import profileReducer from '../Slices/profileSlice'
import cartReducer from '../Slices/cartSlice'
import { combineReducers } from '@reduxjs/toolkit'
const rootReducer =combineReducers({
    auth:authReducer,
    profile:profileReducer,
    cart:cartReducer
})

export default rootReducer