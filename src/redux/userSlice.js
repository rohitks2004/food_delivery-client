import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userToken",
    initialState:{
        userToken:null
    },
    reducers:{
        login:(state,action)=>{
            state.userToken = action.payload;
        },
        logout:(state)=>{
            state.userToken = null;
        }
    }
})

export default userSlice.reducer;
export const {login,logout} = userSlice.actions;