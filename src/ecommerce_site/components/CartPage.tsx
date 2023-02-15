import React, { useEffect } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCart } from '../Redux/ecommerceSlice'
import { state } from '../typeProps'
import Footer from './Footer'
import Navbar from './Navbar'

const CartPage = () => {
  let grandTotal=0;
    let useAppSelector:TypedUseSelectorHook<state>=useSelector
    let state=useAppSelector(state=>state);
    console.log(state);
    const dispatch=useDispatch();
    let cartData=localStorage.getItem("cartData")||"";
   console.log();
  return (
  <>
  <Navbar/>
  <div className='container'>
   <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price </th>
      <th scope="col">Product Quantity</th>
      <th scope="col">Amount</th>
      <th scope='col'> Action</th>
    </tr>
  </thead>
  <tbody>
    {JSON.parse(cartData).map((item:any)=>{
      grandTotal=grandTotal+parseInt(item.calPrice);
         return(
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td><span className='btnIncrement'>+</span><span>{item.productQuantity}</span><span className='btnIncrement'>-</span></td>
            <td>{item.calPrice}</td>
            <td><i className="bi bi-trash3-fill fs-3 text-danger"></i></td>
          </tr>
         )
    })}
    <tr>
      <td colSpan={5}><p className='fs-5 fw-bold text-primary'>SUBTOTAL={grandTotal}</p></td>
    </tr>
  </tbody>
</table>
<button className='btn btn-primary'><Link to="/payment " className='text-decoration-none text-light'>Proceed To pay</Link></button>
   </div>
   <Footer/>
  </>
  )
}

export default CartPage