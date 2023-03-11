import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
const store = configureStore({
    reducer: {
        cart: CartSlice,
    },
});

export default store;





/**
 * craete Store
 *   -configureStore() - RTK
 * 
 * Provide my store to app
 *   -<Provider store = {store}> - import from react-redux
 * 
 * Slice
 *   -RTK - createSlice({
 *          name: ""
 *          initialState: 
 *          reducers: {
 *              addItem: (state, action) => {state= action.payload}
 *          }
 *  })
 * export const {addItems, removeItem} = cartSlice.action;
 * export default cartSlice.reducer;
 * 
 * Put that slice into the store
 *      -{
 *          reducer: {
 *              cart: cartSlice,
 *              user: userSlice
 *          }
 *      }
 */