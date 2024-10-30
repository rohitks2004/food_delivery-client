import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState:{
        // order: 
        // {
        //     "name": "rohit",
        //     "address": "abc street,xyz",
        //     "items": [
        //         {
        //             "id": "0a2bf228-96cb-4ea6-8468-3359c4534127",
        //             "name": "Original Recipe Chicken",
        //             "description": "Classic fried chicken with secret blend of 11 herbs and spices.",
        //             "price": 8.99,
        //             "image": "src/images/original_recipe_chicken.png",
        //             "quantity": 2
        //         },
        //         {
        //             "id": "8e480333-bd26-41dc-bd19-40df881d6579",
        //             "name": "Extra Crispy Chicken",
        //             "description": "Extra crunchy fried chicken with a flavorful crispy coating.",
        //             "price": 9.49,
        //             "image": "src/images/extra_crispy_chicken.png",
        //             "quantity": 1
        //         }
        //     ],
        //     "email": "rohit@mail.com",
        //     "phone": "1234567890",
        //     "orderType": "delivery",
        //     "orderTime": "2024-08-12T05:49:13.909Z",
        //     "availableTime": "2024-08-12T06:14:13.902Z"
        // }
        order:null
    },
    reducers:{
        addOrder(state, action){
            state.order = state.order.push(action.payload)
        },

    }
})

export default orderSlice.reducer;
export const { addOrder} = orderSlice;

/*
{
    "name": "rohit",
    "address": "abc street,xyz",
    "items": [
        {
            "id": "0a2bf228-96cb-4ea6-8468-3359c4534127",
            "name": "Original Recipe Chicken",
            "description": "Classic fried chicken with secret blend of 11 herbs and spices.",
            "price": 8.99,
            "image": "src/images/original_recipe_chicken.png",
            "quantity": 2
        },
        {
            "id": "8e480333-bd26-41dc-bd19-40df881d6579",
            "name": "Extra Crispy Chicken",
            "description": "Extra crunchy fried chicken with a flavorful crispy coating.",
            "price": 9.49,
            "image": "src/images/extra_crispy_chicken.png",
            "quantity": 1
        }
    ],
    "email": "rohit@mail.com",
    "phone": "1234567890",
    "orderType": "delivery",
    "orderTime": "2024-08-12T05:49:13.909Z",
    "availableTime": "2024-08-12T06:14:13.902Z"
}
*/