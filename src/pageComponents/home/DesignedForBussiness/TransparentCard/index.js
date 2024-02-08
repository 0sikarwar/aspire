import React from "react"
import "./index.css"

const TransparentCard = ({ image, heading, subtitle }) => {
  return (
    <div className="designed-bussiness-transparent-card">
      <div className="designed-bussiness-transparent-card-image">
        <img src={image} alt="" />
      </div>
      <div className="designed-bussiness-transparent-card-content">
        <div className="designed-bussiness-transparent-card-heading">
          {heading}
        </div>
        <div className="designed-bussiness-transparent-card-subtitle">
          {subtitle}
        </div>
      </div>
    </div>
  )
}

export default TransparentCard
