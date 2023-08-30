import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    classValue: false,
}

export const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState,
    reducers: {
        doToggleHamburgerBtn: (state) => {
            state.value = !state.value;
        },
        doToggleClassValue: (state) => {
            state.classValue = !state.classValue;
        }
    }
})

export const { doToggleHamburgerBtn, doToggleClassValue } = hamburgerSlice.actions;

export default hamburgerSlice.reducer