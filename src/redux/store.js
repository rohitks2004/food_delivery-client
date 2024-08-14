import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import itemSlice from "./itemSlice";

const store = configureStore({
    reducer: {
        itemSlice:itemSlice,
        cart:cartSlice
    }
})

export default store;