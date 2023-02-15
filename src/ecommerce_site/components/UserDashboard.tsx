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
    let productData = localStorage.getItem("productData") || "";
    dispatch(getQuantity(JSON.parse(productData)));      
  }, []);
  const addToCart=(ind:number)=>{ 
    // console.log(JSON.parse( localStorage.getItem("signUpData")||""));  
  //  console.log(state.EcommerceReducer.signupArr);
   let loginData=JSON.parse(localStorage.getItem("loginUser")||"");
   console.log(loginData)
   JSON.parse( localStorage.getItem("signUpData")||"").map((item:any,i:number)=>{
    //  console.log(item);
     if(item. email==loginData.email && item.password==loginData.password){
            dispatch(addCart({obj:state.EcommerceReducer.productArr[ind],index:i}));
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
        :
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
        }
        <Footer/>
    </>
  
  )
}

export default UserDashboard