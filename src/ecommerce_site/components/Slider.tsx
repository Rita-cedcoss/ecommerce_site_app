import React from 'react'

const Slider = () => {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                className="active"></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://img.freepik.com/premium-psd/horizontal-website-banne_451189-110.jpg"
                  alt="Los Angeles"
                  className="d-block"
                  style={{ width: "100%", height: "400px" }}/>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.laptopstoreindia.com/image/cache/catalog/000001/bestdell-1090x450.jpg"
                  alt="Chicago"
                  className="d-block"
                  width="100%"
                  height="400px"/>
              </div>
              <div className="carousel-item">
                <img
                  src="https://m.media-amazon.com/images/S/aplus-media/sota/0ca3932a-0e55-4499-8f92-8f065599597d.__CR0,0,970,300_PT0_SX970_V1___.jpg"
                  alt="New York"
                  className="d-block"
                  style={{ width: "100%", height: "400px" }}/>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
  )
}

export default Slider