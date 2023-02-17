import { constants } from 'buffer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getLogin } from '../Redux/ecommerceSlice';



const Navbar = () => {
  
  const dispatch=useDispatch();
  useEffect(()=>{
    let loginData= localStorage.getItem("loginUser")||"";
    dispatch(getLogin(JSON.parse(loginData)));
   })
  //  console.log(state)
  return (
<>
<nav className="navbar navbar-expand-lg navbar-light navBg border-bottom mb-2">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#h"><i className="bi bi-person-circle fs-2"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link to="/user" className='text-decoration-none ps-3 pe-3 text-dark fs-5'>OnlineShop</Link>
        </li>
      </ul>   
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
      <li className="nav-item">
      <Link to="/cart" className='text-decoration-none text-dark fs-5'><i className="bi bi-cart-dash-fill "></i>Cart Page</Link> 
        </li>
      <li className="nav-item">
          <Link to="/" className='text-decoration-none ps-3 pe-3 text-dark fs-5'>Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className='text-decoration-none ps-3 pe-3 text-dark fs-5'>Log Out</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar