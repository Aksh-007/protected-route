import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootreducer"

const store = configureStore({
    reducer: {
        root: rootReducer
    }
});

export default store;