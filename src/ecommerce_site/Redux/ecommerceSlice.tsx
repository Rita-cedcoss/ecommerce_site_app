import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { act } from "react-dom/test-utils";
import { json } from "stream/consumers";
import { ecommerceProps,FetchProps } from "../typeProps";

let initialState:ecommerceProps={
    signupArr:[],
    loginObj:{},
    productArr:[],
    CartArr:[],
    productQuantity:0,
    calPrice:0,
    searchArr:[],
    searchMsg:"",
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
    loginUser:(state,action)=>{
         state.loginObj=action.payload;
         localStorage.setItem("loginUser",JSON.stringify(state.loginObj));
    },
    getLogin:(state,action)=>{
         state.loginObj=action.payload
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
        console.log(action.payload);
    //    const itemIndex= state.CartArr.findIndex((item:any)=>(item.id===action.payload.id));
    //    if(itemIndex>=0)
    //    {
        
    //     if(state.CartArr[itemIndex].productQuantity<action.payload.stock){
    //         state.CartArr[itemIndex].productQuantity+=1;
    //         state.CartArr[itemIndex].calPrice=state.CartArr[itemIndex].calPrice*state.CartArr[itemIndex].productQuantity
    //     }
    //     else{
    //       state.CartArr[itemIndex].msg="Stock Finish";
    //     }    
    //    }
    //    else{
    //     const tempProduct={...action.payload,productQuantity:1,msg:"",calPrice:action.payload.price}
    //     // state.CartArr.push(tempProduct);
    //    } 
    //     localStorage.setItem("cartData",JSON.stringify(state.CartArr));
    },
    searchItem:(state,action)=>{
        let matchSearchArr:any=[];
        state.productArr.map((item:any)=>{
             if(item.title.slice(0,action.payload.length).toUpperCase()===action.payload.toUpperCase())
             {
                matchSearchArr.push(item);
             } 
             else{
                console.log("result not found");
                // state.productArr=[];
             }
        })
        state.searchArr=matchSearchArr
    },
    filter:(state,action)=>{
       console.log(action.payload);
       let matchSearchArr:any=[];
       state.productArr.map((item:any)=>{
            if(item.category.toUpperCase()===action.payload.toUpperCase())
            {
               matchSearchArr.push(item);
            } 
       })
       state.searchArr=matchSearchArr
    },
    sortItem:(state,action)=>{
        if(action.payload=="low-high price"){
            state.productArr.sort((a:any,b:any)=>{
                return(parseInt(a.price)-parseInt(b.price));
            })
            state.searchArr.sort((a:any,b:any)=>{
                return(parseInt(a.price)-parseInt(b.price));
            })
        }
        if(action.payload=="high-low price"){
            state.productArr.sort((a:any,b:any)=>{
                return(parseInt(b.price)-parseInt(a.price));
            })
            state.searchArr.sort((a:any,b:any)=>{
                return(parseInt(b.price)-parseInt(a.price));
            })
        }    
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
export const {signup,loginUser,getLogin,getUserItem,deletUser,updateQuntity,getQuantity,addCart,getCart,searchItem,filter,sortItem}=ecommerceSlice.actions
export default ecommerceSlice.reducer