import React, { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { deletUser, getUserItem } from "../Redux/ecommerceSlice";
import { state } from "../typeProps";
import AdminNav from "./AdminNav";
import Footer from "./Footer";
const AdminDashBoard = () => {
  let useAppSelector: TypedUseSelectorHook<state> = useSelector;
  let state = useAppSelector((state) => state);
  console.log(state.EcommerceReducer);
  let dispatch = useDispatch();
  let userData = localStorage.getItem("signUpData") || "";
  useEffect(() => {
    dispatch(getUserItem(JSON.parse(userData)));
  }, []);
  const deleteUser = (index: number) => {
    dispatch(deletUser(index));
  };
  return (
    <>
      <AdminNav />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {JSON.parse(userData).map((item: any, index: number) => {
              if (item.role == "user") {
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>
                      <i
                        className="bi bi-trash3-fill fs-3 text-danger"
                        onClick={() => deleteUser(index)}
                      ></i>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default AdminDashBoard;
