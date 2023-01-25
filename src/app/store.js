import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../features/news.slice";

const store = configureStore({
    reducer: {
        news: newsSlice
    }
})

export default store