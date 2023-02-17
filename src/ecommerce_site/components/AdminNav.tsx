import React, { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLogin } from "../Redux/ecommerceSlice";
import { state } from "../typeProps";

const AdminNav = () => {
  let useAppSelector: TypedUseSelectorHook<state> = useSelector;
  let state = useAppSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    let user = localStorage.getItem("loginUser") || "";
    dispatch(getLogin(JSON.parse(user)));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light navBg border-bottom mb-2">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <i className="bi bi-person-circle fs-2"></i><span className="ps-3 fs-3">{state.EcommerceReducer.loginObj.name}</span>
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
              <Link to="/" className="text-decoration-none ps-3 fs-4 pe-3 text-dark">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
