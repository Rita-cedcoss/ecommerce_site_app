import React, { useEffect, useRef } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { searchItem } from '../Redux/ecommerceSlice';
import { state } from '../typeProps';
let arr:any=[]
const Navbar = () => {

  // console.log(JSON.parse(localStorage.getItem("productData")||""));
  let useAppSelector:TypedUseSelectorHook<state>=useSelector;
  let state=useAppSelector(state=>state.EcommerceReducer);
  const dispatch=useDispatch();
  const searchref=useRef<HTMLInputElement>(null);
  const searchData=(e:any)=>{
    e.preventDefault();
    if(searchref.current!==null)
    {
        let value=searchref.current.value;
        dispatch<any>(searchItem(value));
        
    }  
  }
  useEffect(()=>{
    let productData = localStorage.getItem("productData") || "";
    console.log(JSON.parse(productData));
    JSON.parse(productData).map((item:any)=>{
      if(!arr.includes(item.category))
      {
        arr.push(item.category);
      }
    })
  },[])

console.log(arr);
// console.log(state.productArr);
  return (
<nav className="navbar navbar-expand-lg navbar-light navBg border-bottom mb-2">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#"><i className="bi bi-person-circle fs-2"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link to="/user" className='text-decoration-none ps-3 pe-3 text-dark fs-5'>OnlineShop</Link>
        </li>
        
        <li>
          <select className='border-0 bg-dark text-light p-1 ms-3 me-3 rounded'>
          <option selected hidden>Filter</option>  
            {arr.map((item:any)=>{       
                    return(   
                      <option>{item}</option>
                     ) 
            })}
          </select>
        </li>
        <li>
          <select className='border-0 bg-dark text-light p-1 ms-3 me-3 rounded'>
            <option>Sorting</option>
            <option value="price">price</option>
            <option value="rating">rating</option>
            <option value="discountPercentage">Discount</option>
          </select>
        </li>
        <li className="nav-item">
      <Link to="/cart" className='text-decoration-none text-dark fs-5'><i className="bi bi-cart-dash-fill "></i>Cart Page</Link> 
        </li>
      </ul>
      <form className="d-flex" onSubmit={searchData}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={searchref}/>
        <button className="btn btn-outline-secondary" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar