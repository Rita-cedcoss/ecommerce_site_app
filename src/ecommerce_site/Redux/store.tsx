import { configureStore } from "@reduxjs/toolkit";
import EcommerceReducer from './ecommerceSlice'
export const store=configureStore({
    reducer:{
        EcommerceReducer
    }
})