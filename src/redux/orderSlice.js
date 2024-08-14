import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState:{
        order: [],
    },
    reducers:{
        addOrder(state, action){
            state.order = state.order.push(action.payload)
        },

    }
})

export default orderSlice.reducer;
export const { addOrder} = orderSlice;