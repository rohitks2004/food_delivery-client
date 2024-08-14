import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import itemSlice from "./itemSlice";
import userSlice from "./userSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
    reducer: {
        itemSlice:itemSlice,
        userSlice:userSlice,
        cart:cartSlice,
        orderSlcie:orderSlice
    }
})

export default store;