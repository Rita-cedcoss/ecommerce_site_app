import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { json } from "stream/consumers";
import { ecommerceProps,FetchProps } from "../typeProps";

let initialState:ecommerceProps={
    signupArr:[],
    productArr:[]
}
export const fetchProductData=createAsyncThunk<FetchProps>(
    "EcommerceApp/fetchProductData",
    async type=>{
        let res;
        try{
            res=await axios.get("https://dummyjson.com/products")
            console.log(res.data.products);
            return(res.data.products);
        }
        catch(error){
            console.log(error);
        } 
    }
)
const ecommerceSlice=createSlice({
   name:"EcommerceApp",
   initialState,
   reducers:{
    signup:(state,action)=>{
        console.log(action.payload);
        state.signupArr.push(action.payload);
        localStorage.setItem("signUpData",JSON.stringify(state.signupArr));
    },
    getUserItem:(state,action)=>{
       state.signupArr=action.payload
    },
    deletUser:(state,action)=>{
     state.signupArr.splice(action.payload,1);
     localStorage.setItem("signUpData",JSON.stringify(state.signupArr));
    }
   } ,
   extraReducers:(builder)=>{
    builder
    .addCase(fetchProductData.pending,(state,action)=>{
      
    })
    .addCase(fetchProductData.fulfilled,(state,action)=>{
        state.productArr=action.payload;
        localStorage.setItem("productData",state.productArr);
    })
    .addCase(fetchProductData.rejected,(state,action)=>{
        
    })
   }
})
export const {signup,getUserItem,deletUser}=ecommerceSlice.actions
export default ecommerceSlice.reducer