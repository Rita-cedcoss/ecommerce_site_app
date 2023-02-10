import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PaymentPage = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-around">
        <div className="col-6 card mt-5 shadow">
          <div className="card-header pt-3 pb-3">
            <h3>Enter Your Payment Details</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Card Holder's Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Expiry Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">CVV</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Make a Payment
              </button>
            </form>
          </div>
        </div>
        <div className="col-4 mt-5">
          <div className="card shadow">
            <div className="card-body p-5 rounded fs-4 fw-bold">
              Total Payment=2123434
            </div>
          </div>
          <img
            height="300px"
            width="100%"
            src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126089.jpg?w=2000"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
