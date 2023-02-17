import React, { useEffect, useRef } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  fetchProductData,
  getQuantity,
  updateQuntity,
} from "../Redux/ecommerceSlice";
import { state } from "../typeProps";
import AdminNav from "./AdminNav";
import Footer from "./Footer";

const ManagerDashboard = () => {
  let useSelectorApp: TypedUseSelectorHook<state> = useSelector;
  let state = useSelectorApp((state) => state.EcommerceReducer);
  const dispatch = useDispatch();
  let refQuantity = useRef<any>([]);
  console.log(state.productArr);
  useEffect(() => {
    let productData = localStorage.getItem("productData") || "";
    console.log(JSON.parse(productData));
    dispatch(getQuantity(JSON.parse(productData)));
  }, []);
  const QuantityUpdate = (e:any ,i: number) => {
    e.preventDefault();
    dispatch<any>(
      updateQuntity({ index: i, inpValue: refQuantity.current[i].value })
    );
    e.target.reset();
  };
  return (
    <>
      <AdminNav />
      <div className="container text-center">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.productArr.map((item: any, i: number) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>₹{item.price}</td>
                  
                  <td>
                    {item.stock}
                  </td>
                  <td>
                    <form onSubmit={(e) => QuantityUpdate(e,i)}>
                    <input
                      className="col-2 border-0"
                      ref={(ref) => (refQuantity.current[i] = ref)}
                      type="text"
                    />
                    {/* <button
                      className="border-0 text-primary"
                      // onClick={() => QuantityUpdate(i)}
                    >
                      Update
                    </button> */}
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ManagerDashboard;
