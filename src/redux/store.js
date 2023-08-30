import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../redux/features/darkMode/darkModeSlice'
import hamburgerReducer from '../redux/features/hamburger/hamburgerSlice'

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        hamburger: hamburgerReducer,
    },
})