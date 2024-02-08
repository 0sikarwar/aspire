import React from "react"
import "./index.css"
import rightChevron from "../../../../images/right_chevron.svg"

const Card = ({ logo, url, subtitle }) => {
  return (
    <div className="experience-future-card">
      <img src={logo} alt="" className="experience-future-card-image" />
      <p className="experience-future-card-subtitle">{subtitle}</p>
      <a className="experience-future-card-cta" href={url}>
        See more <img src={rightChevron} alt="" />
      </a>
    </div>
  )
}

export default Card
