import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import logSlice from "./logSlice";


const store = configureStore({
    reducer: logSlice.reducer
});
export default store;