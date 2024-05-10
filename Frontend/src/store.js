import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./Features/authSlice";
import profileReducer from "./Features/editUserSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer
    },
})