import { set } from 'immer/dist/internal'
import React, { useEffect, useState } from 'react'
import {TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { addCart, fetchProductData, getQuantity, getUserItem } from '../Redux/ecommerceSlice'
import { state } from '../typeProps'
import Footer from './Footer'
import Navbar from './Navbar'
import Slider from './Slider'
const UserDashboard = () => {
  let useAppSelector:TypedUseSelectorHook<state>=useSelector
  let state=useAppSelector(state=>state)
  let dispatch=useDispatch();
  useEffect(() => {
    // dispatch<any>(fetchProductData())
    let productData = localStorage.getItem("productData") || "";
    dispatch(getQuantity(JSON.parse(productData)));
      let signuUser=localStorage.getItem("signUpData")||"";
    console.log(signuUser);
    dispatch(getUserItem(JSON.parse(signuUser)));
  }, []);
  const addToCart=(ind:number)=>{ 
   let loginData=JSON.parse(localStorage.getItem("loginUser")||"");
   console.log(state);
   JSON.parse( localStorage.getItem("signUpData")||"").map((item:any,i:number)=>{
     if(item. email==loginData.email && item.password==loginData.password){
            dispatch(addCart({obj:state.EcommerceReducer.searchArr[ind],index:i,prodIndex:ind}));
     }
   })
  }
  console.log(state.EcommerceReducer);
  return (   
    <>
        <Navbar/>
        <Slider/> 
        {(state.EcommerceReducer.searchArr.length>0)?
        <div className='container'>
          <div className='autofill '>
            {state.EcommerceReducer.searchArr.map((item:any,i:number)=>{
              return(<>
               <div className="item1 pb-5">
            <img alt="image1" src={item.thumbnail} height="60%"
              width="100%"/>
            <div className="productItem_content ps-2 border-top">
              <p className='fw-bold pt-2'>{item.title}</p>
              <p >Price : ${item.price}</p>
                <div className='d-flex justify-content-between'>
                <span className='bg-primary rounded text me-3  ps-2 pe-2 pt-2 pb-2 text-light' onClick={()=>addToCart(i)}>Add To Cart</span>
                </div>
            </div>
          </div>
          </>)
            })     
            }
          </div>
        </div>
        :<p>Product is not found</p>}
        <Footer/>
    </>
  
  )
}

export default UserDashboard