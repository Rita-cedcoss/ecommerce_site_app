import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { fetchProductData } from "../Redux/ecommerceSlice";

const Login = () => {
  let loginRef=useRef<any>([]);
  const[errorMsg,setErrormsg]=useState<string>('');
  // console.log();
  let navigate=useNavigate();
  const signIn=(e:any)=>{
    e.preventDefault();
    let signUpData=localStorage.getItem("signUpData")||"";
    JSON.parse(signUpData).map((item:any)=>{
      if(item.email==loginRef.current.email.value && item.password==loginRef.current.password.value && item.role=="user")
      {
        // console.log("match item")
        navigate("/user")
       
      }
      else if(item.email==loginRef.current.email.value && item.password==loginRef.current.password.value && item.role=="manager")
      {
        // console.log("manager")
        navigate("/manager")
      }
      else if(item.email==loginRef.current.email.value && item.password==loginRef.current.password.value && item.role=="admin")
      {
        // console.log("admin");
        navigate("/admin");
      }
      else{
        setErrormsg("Please enter valid email");
        setTimeout(()=>{setErrormsg(" ")},2000);
      }
    }) 
   }
  return (
    <>
      <div className="container col-6  mt-4 text-center">
        <img
          alt=""
          src="https://previews.123rf.com/images/distrologo/distrologo1902/distrologo190200757/117609853-online-shop-logo-design-vector-icon-shopping-logo-design.jpg"
          height="150px"
          width="150px"
        />
      </div>
      <div className="container col-10 col-sm-8 col-md-7 col-lg-4 m-auto mt-4 border p-4 shadow rounded">
        <h2 className="mb-4">Sign Your Account</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              ref={ref=>loginRef.current.email=ref}
              className="form-control"
              aria-describedby="emailHelp"
            />
            {/* <div id="emailHelp" className="form-text">xcsdg</div> */}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              ref={ref=>loginRef.current.password=ref}
              className="form-control"
              id="exampleInputPassword1"
            />
            <div id="emailHelp" className="form-text text-danger">{errorMsg}</div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={signIn}>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
