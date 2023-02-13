import { set } from 'immer/dist/internal'
import React, { useEffect, useState } from 'react'
import {TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { addCart, fetchProductData, getCart, getQuantity } from '../Redux/ecommerceSlice'
import { state } from '../typeProps'
import Footer from './Footer'
import Navbar from './Navbar'
import Slider from './Slider'
const UserDashboard = () => {
  let useAppSelector:TypedUseSelectorHook<state>=useSelector
  let state=useAppSelector(state=>state)
  let dispatch=useDispatch();

  useEffect(() => {
    // localStorage.removeItem("cartData");
    let productData = localStorage.getItem("productData") || "";
    dispatch(getQuantity(JSON.parse(productData)));      

    // let cartData=localStorage.getItem("cartData")||"";
    // dispatch(getCart(JSON.parse(cartData)));
  }, []);

  const addToCart=(ind:number)=>{   
  dispatch(addCart(state.EcommerceReducer.productArr[ind]));
  }
  // console.log(state.EcommerceReducer);
  return (   
    <>
        <Navbar/>
        <Slider/>
        <div className='container'>
          <div className='autofill '>
            {state.EcommerceReducer.productArr.map((item:any,i:number)=>{
              return(<>
               <div className="item1 pb-5">
            <img alt="image1" src={item.thumbnail} height="60%"
              width="100%"/>
            <div className="productItem_content ps-2 border-top">
              <p className='fw-bold'>{item.title}</p>
              <h5>Price : ${item.price}</h5>
                <div className='d-flex justify-content-between  '>
                <span className='bg-primary rounded text me-3 mt-2 ps-2 pe-2 pt-2 pb-2 text-light' onClick={()=>addToCart(i)}>Add To Cart</span>
                </div>
            </div>
          </div>
              </>)
            })     
            }
          </div>
        </div>
        <Footer/>
    </>
  
  )
}

export default UserDashboard