import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../redux/features/darkMode/darkModeSlice'

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
})