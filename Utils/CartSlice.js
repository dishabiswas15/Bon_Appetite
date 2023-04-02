import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
            console.log(action.payload);
        },
        removeItems: (state, action) => {
            const index = state.items.findIndex((i)=> i.card?.info?.id === action.payload.id);
            state.items.splice(index,index+1);
            // state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
        updateCart: (state, action) => {
            const index = state.items.findIndex((i) => i.card?.info?.id == action.payload.id )
            if(action.payload.qty>-1){
                state.items[index].qty = action.payload.qty;
            }
             
        }
    },
});

export const {addItems, removeItems, clearCart, updateCart} = cartSlice.actions;

export default cartSlice.reducer;