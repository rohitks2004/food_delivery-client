import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addItem:(state, action)=>{
            const product = {...action.payload}
            product.quantity = 1
            state.cart = [...state.cart, product]
        },
        removeItem:(state,action)=>{
            state.cart = state.cart.filter(item=> item.id != action.payload.id)
        },
        incrementQuantity:(state,action)=>{
            const product = state.cart.find(item=>item.id === action.payload)
            product.quantity += 1
        },
        decrementQuantity:(state,action)=>{
            const product = state.cart.find(item=>item.id === action.payload)
            product.quantity -= 1
        }
    }
})
export default cartSlice.reducer;
export const {addItem,removeItem,decrementQuantity,incrementQuantity} = cartSlice.actions;