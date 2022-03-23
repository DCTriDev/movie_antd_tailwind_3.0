import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import movieSlice from "./Slice/movieSlice";

const store = configureStore({
    reducer: {
        userSlice,
        movieSlice,
    },
    devTools: true
});

export default store;