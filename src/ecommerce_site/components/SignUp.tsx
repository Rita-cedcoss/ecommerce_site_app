import React, { useEffect, useRef, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserItem, signup } from "../Redux/ecommerceSlice";
import { state } from "../typeProps";

const SignUp = () => {
  //for state selector
  let useAppSelector:TypedUseSelectorHook<state>=useSelector
  let state=useAppSelector(state=>state);
//for dispatch function
  let dispatch=useDispatch();
  const signupRef=useRef<any>([]);
  const [errorMessage,setErrormsg]=useState({msgName:"",msgEmail:"",msgPswd:"" ,msgEmpty:""});
  // input handler
  const inputHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{ 
    let placeholder= e.target.getAttribute("placeholder");
    if(placeholder=="Enter Your Name")
    {  
      if(!e.target.value.match(/^[A-Za-z\s]*$/)){
            errorMessage.msgName="Please Enter only Letter" 
            errorMessage.msgEmpty="";    
      }
      else{
        errorMessage.msgName=""
        errorMessage.msgEmpty="";
        signupRef.current.name=e.target.value;
      }
    }
    if(placeholder=="Enter Your Email")
    {
      if(!e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
      {
          errorMessage.msgEmail="Please Enter correct email"
          errorMessage.msgEmpty="";
      }
      else{
        errorMessage.msgEmail=""
        errorMessage.msgEmpty="";
        signupRef.current.email=e.target.value;
      }
    }
    if(placeholder=="Enter Your Password")
    {
      if(!e.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/))
      {
        errorMessage.msgPswd="atlest 1 uppercase letter,1 lowercase letter,1 special character,1 number,min 8 characters";
        errorMessage.msgEmpty="";
      }
      else{
        errorMessage.msgPswd="";
        errorMessage.msgEmpty="";
        signupRef.current.password=e.target.value;
      }
    }
    setErrormsg({...errorMessage});
  }
  // user register
  const register=(e:any)=>{
    let flag=false;
    e.preventDefault();
     if(signupRef.current.name.value==""||signupRef.current.email.value==""|| signupRef.current.password.value==""){
      errorMessage.msgEmpty="Please Fill All The fields"
    
    }
     else{
      state.EcommerceReducer.signupArr.map((item:any)=>{
        if(item.name==signupRef.current.name.value &&  item.email==signupRef.current.email.value && item.password==signupRef.current.password.value){
          
          flag=true;
        }
      })
      if(flag)
      {
        alert("already exist");
      }
      else{
        errorMessage.msgEmpty="User Signup Successfully";
        let obj={name:signupRef.current.name.value,email:signupRef.current.email.value,password:signupRef.current.password.value,role:"user",cartArr:[]} 
            dispatch(signup(obj));
      }
     }
     e.currentTarget.reset();
     setErrormsg({...errorMessage});
  }
  // for get user Data
  useEffect(()=>{
    // localStorage.removeItem("signUpData");
    let signuUser=localStorage.getItem("signUpData")||"";
    console.log(signuUser);
    dispatch(getUserItem(JSON.parse(signuUser)));
  },[])
  return (
    <>
      <div className="container col-6 m-auto mt-2 text-center">
        <img
          alt=""
          src="https://previews.123rf.com/images/distrologo/distrologo1902/distrologo190200757/117609853-online-shop-logo-design-vector-icon-shopping-logo-design.jpg"
          height="150px"
          width="150px"
        />
      </div>
      <div className="container col-10 col-sm-8 col-md-7 col-lg-4    m-auto mt-1 border ps-4 pe-4 pt-2 pb-2 shadow rounded">
        <h2 className="mb-2">Sign Your Account</h2>
        <form onSubmit={register}>
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input
              placeholder="Enter Your Name"
              type="text"
              ref={(ref)=>signupRef.current.name=ref}
              className="form-control"
              onChange={inputHandler}
              aria-describedby="nameHelp"
            />
            <div id="emailHelp" className="form-text text-danger ">{errorMessage.msgName}</div>
          </div>
          <div className="mb-2">
            <label className="form-label">Email address</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              ref={ref=>signupRef.current.email=ref}
              onChange={inputHandler}
              className="form-control"
              aria-describedby="emailHelp"
            />
            <div  className="form-text">{errorMessage.msgEmail}</div>
          </div>
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              ref={ref=>signupRef.current.password=ref}
              onChange={inputHandler}
              className="form-control"
            />
          </div>
          <div className="form-text pb-2 text-danger">{errorMessage.msgPswd}</div>
          <div className="form-text pb-2 text-success" >{errorMessage.msgEmpty}</div>
          <button type="submit" className="btn btn-primary mt-2">
            Sign Up
          </button>
           <span className="ps-2 fs-5 pt-5"><Link to="/login">Login</Link></span>     
        </form>
      </div>
    </>
  );
};

export default SignUp;
