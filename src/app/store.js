import { configureStore } from "@reduxjs/toolkit";
import fightersSlice from "../features/fighters.slice";
import newsSlice from "../features/news.slice";
import weightCategoriesSlice from "../features/weightCategories.slice";

const store = configureStore({
    reducer: {
        news: newsSlice,
        fighters: fightersSlice,
        wCategories: weightCategoriesSlice
    }
})

export default store