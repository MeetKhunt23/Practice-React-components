import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const cartSlice=createSlice({
    name:'array',
    initialState,
    reducers:{
        add(state,action){
           state.action(action.payload) 
        },
    }
})

export const {add} = cartSlice.actions;
export default cartSlice.reducer