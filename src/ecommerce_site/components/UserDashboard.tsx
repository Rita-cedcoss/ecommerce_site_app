import React, { useEffect } from 'react'
import {TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from '../Redux/ecommerceSlice'
import { state } from '../typeProps'
import Footer from './Footer'
import Navbar from './Navbar'
import Slider from './Slider'
const UserDashboard = () => {
  let useAppSelector:TypedUseSelectorHook<state>=useSelector
  let state=useAppSelector(state=>state)
  let dispatch=useDispatch();
  // console.log(state.EcommerceReducer.productArr);
  useEffect(()=>{
    dispatch<any>(fetchProductData());
  },[])
  return (   
    <>
        <Navbar/>
        <Slider/>
        <div className='container'>
          <div className='autofill '>
            {state.EcommerceReducer.productArr.map((item:any)=>{
              console.log(item)
              return(<>
               <div className="item1 pb-5">
            <img alt="image1" src={item.thumbnail} height="60%"
              width="100%"/>
            <div className="productItem_content ps-2 border-top">
              <p className='fw-bold'>{item.title}</p>
              <p>{item.brand}</p>
              <div className="productItem_rating">
                <i className="bi bi-star-fill" style={{fontSize:"20px",color:"rgb(230, 59, 59)"}}></i>
                <i className="bi bi-star-fill" style={{fontSize:"20px",color:"rgb(230, 59, 59)"}}></i>
                <i className="bi bi-star-fill" style={{fontSize:"20px",color:"rgb(230, 59, 59)"}}></i>
                <i className="bi bi-star-fill" style={{fontSize:"20px",color:"rgb(230, 59, 59)"}}></i>
                <i className="bi bi-star-half" style={{fontSize:"20px",color:"rgb(230, 59, 59)"}}></i>
              </div>
              <div className="productItem_price">
                {/* <p>Rating:{item.rating}</p> */}
                <div className='d-flex justify-content-between '>
                <h5>Price : ${item.price}</h5><span className='bg-primary rounded text me-3 ps-2 pe-2 pt-1 text-light'>Add To Cart</span>
                </div>
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