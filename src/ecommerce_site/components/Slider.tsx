import React, { useEffect, useRef } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { filter, searchItem, sortItem } from "../Redux/ecommerceSlice";
import { state } from "../typeProps";
let arr: any = [];
const Slider = () => {
  const dispatch = useDispatch();
  const searchref = useRef<HTMLInputElement>(null);
  const searchData = (e: any) => {
    e.preventDefault();
    if (searchref.current !== null) {
      let value = searchref.current.value;
      dispatch<any>(searchItem(value));
    }
  };
  useEffect(() => {
    let productData = localStorage.getItem("productData") || "";
    console.log(JSON.parse(productData));
    JSON.parse(productData).map((item: any) => {
      if (!arr.includes(item.category)) {
        arr.push(item.category);
      }
    });
  }, []);
  const filterItem = (e: any) => {
    dispatch<any>(filter(e.target.value));
  };
  const sorting = (e: any) => {
    dispatch<any>(sortItem(e.target.value));
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light navBg border-bottom mb-2">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <form className="d-flex mt-md-2 mt-sm-2 mt-2 mt-lg-0">
            <input
              className="form-control me-2 border border-primary"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchData}
              ref={searchref}
            />
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 "></ul>
          <ul className="navbar-nav  mb-2 mb-lg-0 ">
            <li>
              <select
                className="border border-primary text-primary bg-light fs-5 p-1 ms-3 me-3 rounded"
                onChange={(e) => filterItem(e)}
              >
                <option selected hidden>
                  Filter
                </option>
                {arr.map((item: any) => {
                  return <option>{item}</option>;
                })}
              </select>
            </li>
            <li>
              <select
                className="border border-primary text-primary bg-light fs-5 p-1 ms-3 me-3 rounded"
                onChange={(e) => sorting(e)}
              >
                <option selected hidden>
                  Sorting
                </option>
                <option value="low-high price">low-high price</option>
                <option value="high-low price">high-low price</option>
              </select>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Slider;
