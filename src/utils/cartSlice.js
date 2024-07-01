import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  // state is a javascript object
  initialState: {
    item: ["apple", "mango"],
  },
  //reducer is pure function in side we will declare method like add , delete,remove,clear
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    remove: (state, action) => {
      state.item.pop();
    },
  },
});

// here addItem and removeItem destructing data from cartSlice object
//cartSlice object like cartSlice:{action:{},reducer:{}}
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
