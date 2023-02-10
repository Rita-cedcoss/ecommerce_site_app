import React from 'react'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { state } from '../typeProps'
import Footer from './Footer'
import Navbar from './Navbar'

const CartPage = () => {
    let useAppSelector:TypedUseSelectorHook<state>=useSelector
    let state=useAppSelector(state=>state);
    console.log(state);
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td><span>+</span><span>3</span><span>-</span></td>
      <td>@mdo</td>
      <td>fdsfdf</td>
      <td><i className="bi bi-trash3-fill fs-3 text-danger"></i></td>
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