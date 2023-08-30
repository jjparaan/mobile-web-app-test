import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        doToggleDarkMode: (state) => {
            state.value = !state.value;
        },
    }
})

export const { doToggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer