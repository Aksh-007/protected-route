import { createReducer } from "@reduxjs/toolkit";

/* this is basic reducer where initial value of 
    isAuthentiated is true and when click on login it will true 
    and if clicked on logout it will became false
*/
export const rootReducer = createReducer(
    { isAuthenticated: false },
    {
        login: (state, action) => {
            state.isAuthenticated = true;
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
        }
    })