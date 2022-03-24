import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import movieSlice from "./Slice/movieSlice";
import loadingAnimSlice from "./Slice/loadingAnimSlice";


const store = configureStore({
    reducer: {
        loadingAnimSlice,
        userSlice,
        movieSlice,
    },
    devTools: true
});

export default store;