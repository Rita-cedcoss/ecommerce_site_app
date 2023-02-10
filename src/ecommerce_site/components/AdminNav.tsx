import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navBg border-bottom mb-2">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <i className="bi bi-person-circle fs-2"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/" className="text-decoration-none ps-3 pe-3 text-dark">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
