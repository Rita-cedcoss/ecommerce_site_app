import React, { useEffect, useRef } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { filter, searchItem, sortItem } from '../Redux/ecommerceSlice';
import { state } from '../typeProps';
let arr:any=[]
const Slider = () => {
  
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
  const filterItem=(e:any)=>{
    dispatch<any>(filter(e.target.value));
  }
  const sorting=(e:any)=>{
    dispatch<any>(sortItem(e.target.value));
  }
  return (
    // <div className='container'>
     <nav className="navbar navbar-expand-lg navbar-light navBg border-bottom mb-2">
  <div className="container-fluid ">
    {/* <a className="navbar-brand" href="#"><i className="bi bi-person-circle fs-2"></i></a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
    <form className="d-flex mt-md-2 mt-sm-2 mt-2 mt-lg-0" >
        <input className="form-control me-2 border border-primary" type="search" placeholder="Search" aria-label="Search" onChange={searchData} ref={searchref}/>
        {/* <button className="btn btn-outline-secondary" type="submit" >Search</button> */}
      </form>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
 
      </ul>
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
      <li>
          <select className='border border-primary text-primary bg-light fs-5 p-1 ms-3 me-3 rounded' onChange={(e)=>filterItem(e)}>
          <option selected hidden>Filter</option>  
            {arr.map((item:any)=>{       
                    return(   
                      <option>{item}</option>
                     ) 
            })}
          </select>
        </li>
        <li>
          <select className='border border-primary text-primary bg-light fs-5 p-1 ms-3 me-3 rounded' onChange={(e)=>sorting(e)}>
            <option selected hidden>Sorting</option>
            <option value="low-high price">low-high price</option>
            <option value="high-low price">high-low price</option>
          </select>
        </li>
      <li className="nav-item">
      {/* <Link to="/cart" className='text-decoration-none text-dark fs-5'><i className="bi bi-cart-dash-fill "></i>Cart Page</Link>  */}
        </li>
      </ul>
      {/* {(flag)?<p>true</p>:<p>false</p>} */}
     
    </div>
  </div>
</nav>
    // </div>
    // <div id="demo" className="carousel slide" data-bs-ride="carousel">
    //         <div className="carousel-indicators">
    //           <button
    //             type="button"
    //             data-bs-target="#demo"
    //             data-bs-slide-to="0"
    //             className="active"></button>
    //           <button
    //             type="button"
    //             data-bs-target="#demo"
    //             data-bs-slide-to="1"></button>
    //           <button
    //             type="button"
    //             data-bs-target="#demo"
    //             data-bs-slide-to="2"></button>
    //         </div>
    //         <div className="carousel-inner">
    //           <div className="carousel-item active">
    //             <img
    //               src="https://img.freepik.com/premium-psd/horizontal-website-banne_451189-110.jpg"
    //               alt="Los Angeles"
    //               className="d-block"
    //               style={{ width: "100%", height: "400px" }}/>
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src="https://www.laptopstoreindia.com/image/cache/catalog/000001/bestdell-1090x450.jpg"
    //               alt="Chicago"
    //               className="d-block"
    //               width="100%"
    //               height="400px"/>
    //           </div>
    //           <div className="carousel-item">
    //             <img
    //               src="https://m.media-amazon.com/images/S/aplus-media/sota/0ca3932a-0e55-4499-8f92-8f065599597d.__CR0,0,970,300_PT0_SX970_V1___.jpg"
    //               alt="New York"
    //               className="d-block"
    //               style={{ width: "100%", height: "400px" }}/>
    //           </div>
    //         </div>
    //         <button
    //           className="carousel-control-prev"
    //           type="button"
    //           data-bs-target="#demo"
    //           data-bs-slide="prev">
    //           <span className="carousel-control-prev-icon"></span>
    //         </button>
    //         <button
    //           className="carousel-control-next"
    //           type="button"
    //           data-bs-target="#demo"
    //           data-bs-slide="next">
    //           <span className="carousel-control-next-icon"></span>
    //         </button>
    //       </div>
  )
}

export default Slider