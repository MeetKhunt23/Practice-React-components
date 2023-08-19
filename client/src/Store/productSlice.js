// import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch, useSelector } from "react-redux";


// const initialState={
//     data:[]
// }
// console.log("intianstate",initialState.data);

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//         // const dispach = useDispatch();
//         const data = await fetch("https://fakestoreapi.com/products")
//         const result= data.json();
//         console.log("apidata",result);
//         dispatch(fetchproducts(result));
//     }
// }

// const productSlice=createSlice({
//     name:'products',
//     initialState,
//     reducers:{
//         fetchproducts(state,action){
//             state.data=action.payload;
//         }
        
//     }
// })

// export const {fetchproducts} = productSlice.actions;
// export default productSlice.reducer

