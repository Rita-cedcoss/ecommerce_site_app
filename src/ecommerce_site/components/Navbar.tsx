import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
          <Link to="/user" className='text-decoration-none ps-3 pe-3 text-dark'>OnlineShop</Link>
        </li>
        <li className="nav-item">
      <Link to="/cart" className='text-decoration-none text-dark'>Cart Page</Link> 
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-secondary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar