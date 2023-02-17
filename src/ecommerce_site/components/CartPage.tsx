import React, { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementCart,
  deletCartItem,
  getLogin,
  getQuantity,
  getUserItem,
  incrementCart,
} from "../Redux/ecommerceSlice";
import { state } from "../typeProps";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CartPage = () => {
  let flag = false;
  let grandTotal = 0;
  let useAppSelector: TypedUseSelectorHook<state> = useSelector;
  let state = useAppSelector((state) => state);
  useEffect(() => {
    let loginData = localStorage.getItem("loginUser") || "";
    dispatch(getLogin(JSON.parse(loginData)));
    let signuUser = localStorage.getItem("signUpData") || "";
    dispatch(getUserItem(JSON.parse(signuUser)));
    let productData = localStorage.getItem("productData") || "";
    dispatch(getQuantity(JSON.parse(productData)));
  }, []);
  const dispatch = useDispatch();
  const deleteCart = (index: number, i: number) => {
    dispatch<any>(deletCartItem({ userIndex: index, cartIndex: i }));
  };
  const increment = (index: number, i: number) => {
    state.EcommerceReducer.productArr.map((item: any, ind: number) => {
      if (item.id === state.EcommerceReducer.signupArr[index].cartArr[i].id) {
        console.log(item.title);
        if (
          state.EcommerceReducer.signupArr[index].cartArr[i].productQuantity <
          item.stock
        ) {
          console.log(ind);
          dispatch<any>(
            incrementCart({ userIndex: index, cartIndex: i, prodIndex: ind })
          );
        }
      }
    });
  };
  const decrement = (index: number, i: number) => {
    state.EcommerceReducer.productArr.map((item: any, ind: number) => {
      if (item.id === state.EcommerceReducer.signupArr[index].cartArr[i].id) {
        console.log(ind);
        dispatch<any>(
          decrementCart({ userIndex: index, cartIndex: i, prodIndex: ind })
        );
      }
    });
  };
  const PlaceOrder = () => {
    window.print();
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <table className="table mt-5">
          <thead></thead>
          <tbody>
            {state.EcommerceReducer.signupArr.map(
              (item: any, index: number) => {
                if (item.email === state.EcommerceReducer.loginObj.email) {
                  if (item.cartArr.length > 0) {
                    flag = true;
                    return item.cartArr.map((ele: any, i: number) => {
                      grandTotal = grandTotal + parseInt(ele.calPrice);
                      return (
                        <>
                          {!i && (
                            <tr>
                              <th scope="col">Id</th>
                              <th scope="col">Product Name</th>
                              <th scope="col">Product Price </th>
                              <th scope="col">Product Quantity</th>
                              <th scope="col">Amount</th>
                              <th scope="col"> Action</th>
                            </tr>
                          )}
                          <tr>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td>{ele.price}</td>
                            <td>
                              <span
                                className="btnIncrement"
                                onClick={() => increment(index, i)}
                              >
                                +
                              </span>
                              <span>{ele.productQuantity}</span>
                              <span
                                className="btnIncrement"
                                onClick={() => decrement(index, i)}
                              >
                                -
                              </span>
                            </td>
                            <td>{ele.calPrice}</td>
                            <td>
                              <i
                                className="bi bi-trash3-fill fs-3 text-danger"
                                onClick={() => deleteCart(index, i)}
                              ></i>
                            </td>
                          </tr>
                        </>
                      );
                    });
                  }
                }
              }
            )}
            {flag ? (
              <>
                <tr>
                  <td colSpan={6}>
                    <p className="fs-5 fw-bold text-primary">
                      SUBTOTAL={grandTotal}
                    </p>
                  </td>
                </tr>
                <button className="btn btn-primary mt-3" onClick={PlaceOrder}>
                  PLace Order
                </button>
              </>
            ) : (
              <p className="text-center fs-1 text-danger">Cart is Empty</p>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
