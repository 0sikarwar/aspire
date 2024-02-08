import React from "react"
import { Link } from "gatsby"
import "./index.css"
import rightChevron from "../../../../images/right_chevron.svg"

const VerticleCard = ({
  className,
  heading,
  subtitle,
  ctaText,
  url,
  image,
}) => {
  return (
    <div className={`grow-business-card${className || ""}`}>
      <div className="grow-business-card-content">
        <p className="grow-business-card-heading">{heading}</p>
        <p className="grow-business-card-subtitle">{subtitle}</p>
        <Link className="grow-business-card-cta" to={url}>
          {ctaText || "See more"} <img src={rightChevron} alt="" />
        </Link>
      </div>
      <div className="grow-business-card-image">{image}</div>
    </div>
  )
}

export default VerticleCard
