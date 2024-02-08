import React from "react"
import "./index.css"

const ImageCard = ({ image, logo, subtitle }) => {
  return (
    <div className="designed-bussiness-image-card">
      <div className="designed-bussiness-image-card-image">{image}</div>
      <div className="designed-bussiness-image-card-logo">
        <img src={logo} alt="" />
      </div>
      <p className="designed-bussiness-image-card-subtitle">{subtitle}</p>
    </div>
  )
}

export default ImageCard
