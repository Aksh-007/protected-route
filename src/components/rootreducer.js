import { createAction, createReducer } from "@reduxjs/toolkit";

/* this is basic reducer where initial value of 
    isAuthentiated is true and when click on login it will true 
    and if clicked on logout it will became false
*/

const login = createAction('login')
const logout = createAction('logout')
export const rootReducer = createReducer(
    { isAuthenticated: false },
    // new builder method is added 
    (builder) => {
        builder
            .addCase(login, (state, action) => {
                state.isAuthenticated = true
            })
            .addCase(logout, (state, action) => {
                state.isAuthenticated = false
            })
    }
)
    // {
    //     login: (state, action) => {
    //         state.isAuthenticated = true;
    //     },
    //     logout: (state, action) => {
    //         state.isAuthenticated = false;
    //     }
    // })