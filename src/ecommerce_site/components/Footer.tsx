import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark mt-5 pb-3 ">
      <div className="d-lg-flex flex-lg-row d-block ps-5 col-12">
        <div className="item pt-5 col-lg-3 col-12">
          <h3 className="text-light fw-bolder"> Start Crafting Epic Website Today</h3>
          <button className="btn btn-primary mt-3">Purchase Theme</button>
        </div>
        <div className="item pt-5 col-lg-3 col-12">
          <h5 className="text-light fw-bolder"> Useful</h5>
          <p className="text-light">Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quas, consequuntur.
          </p>
        </div>
        <div className="item pt-5 col-lg-3 col-12">
          <h5 className="text-light fw-bolder">Keep In Touch</h5>
          <p className="text-light">Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quas, consequuntur.
          </p>
        </div>
        <div className="item pt-5 col-lg-3 col-12">
          <h5 className="text-light fw-bolder">Sign-up For newsletter</h5>
          <div className="row ">
            <input type="text" className="col-5 bg-transparent border m-2" placeholder="E-mail"/>
            <button className="col-3 m-2 btn btn-outline-light">Send</button>
          </div>
        </div>

      {/* </div> */}
    </div>
  </div>
  )
}

export default Footer