import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { act } from "react-dom/test-utils";
import { json } from "stream/consumers";
import { ecommerceProps,FetchProps } from "../typeProps";

let initialState:ecommerceProps={
    signupArr:[],
    productArr:[],
    CartArr:[],
    productQuantity:0,
    calPrice:0,
    searchArr:[]
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
    },
    updateQuntity:(state,action)=>{
      state.productArr[action.payload.index].stock=action.payload.inpValue;
      localStorage.setItem("productData",JSON.stringify(state.productArr));
    },
    getQuantity:(state,action)=>{
      state.productArr=action.payload;
    },
    getCart:(state,action)=>{
        state.CartArr=action.payload;
    },
    addCart:(state,action)=>{ 
        // console.log(action.payload);
       const itemIndex= state.CartArr.findIndex((item:any)=>(item.id===action.payload.id));
       if(itemIndex>=0)
       {
        if(state.CartArr[itemIndex].productQuantity<action.payload.stock){
            state.CartArr[itemIndex].productQuantity+=1;
            state.CartArr[itemIndex].calPrice=state.CartArr[itemIndex].calPrice*state.CartArr[itemIndex].productQuantity
        }
        else{
          state.CartArr[itemIndex].msg="Stock Finish";
        }    
       }
       else{
        const tempProduct={...action.payload,productQuantity:1,msg:"",calPrice:action.payload.price}
        state.CartArr.push(tempProduct);
       } 
        localStorage.setItem("cartData",JSON.stringify(state.CartArr));
    },
    searchItem:(state,action)=>{
        // console.log(state.productArr,action.payload.length);
        // state.p=[]
        // state.searchArr=state.productArr
        let matchSearchArr:any=[];
        state.productArr.map((item:any)=>{
            
            // console.log(item.title);
             if(item.title.slice(0,action.payload.length).toUpperCase()===action.payload.toUpperCase())
             {
                matchSearchArr.push(item);
             } 
        })
        state.searchArr=matchSearchArr
    }
   } ,
   extraReducers:(builder)=>{
    builder
    .addCase(fetchProductData.pending,(state,action)=>{
      
    })
    .addCase(fetchProductData.fulfilled,(state,action)=>{
        state.productArr=action.payload;
        // state.searchArr=action.payload
        localStorage.setItem("productData",state.productArr);
    })
    .addCase(fetchProductData.rejected,(state,action)=>{
        
    })
   }
})
export const {signup,getUserItem,deletUser,updateQuntity,getQuantity,addCart,getCart,searchItem}=ecommerceSlice.actions
export default ecommerceSlice.reducer