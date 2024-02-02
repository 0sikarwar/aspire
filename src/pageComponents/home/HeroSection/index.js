import React from "react"
import "./index.css"
import { StaticImage } from "gatsby-plugin-image"

const Herosection = ({ animationClass }) => {
  return (
    <div className={`base-container home-herosection ${animationClass}`}>
      <div className="home-herosection-images">
        <StaticImage
          src="../../../images/home/hero_section_left.webp"
          className="home-herosection-images-left"
          alt=""
          aspectRatio={0.5}
        />
        <StaticImage
          src="../../../images/home/hero_section_center.webp"
          className="home-herosection-images-center"
          alt=""
          aspectRatio={1.5}
        />
        <StaticImage
          src="../../../images/home/hero_section_right.webp"
          className="home-herosection-images-right"
          alt=""
          aspectRatio={1.5}
        />
      </div>
    </div>
  )
}

export default Herosection
