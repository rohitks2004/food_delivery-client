import { createSlice } from "@reduxjs/toolkit";
import { MENU } from "../constants";
const itemSlice = createSlice({
    name:"items",
    initialState:{
        items:MENU
    },
    reducers:{
        addItem(state,action){
            state.items.push(action.payload);
        },
        removeItem(state,action){
            state.items = state.items.filter((item)=> item.id == action.payload.id);
        },
    }
})

export default itemSlice.reducer;
export const {addItem,removeItem} = itemSlice.actions;