import React from "react"
import "./index.css"
import Button from "../../../components/Button"
import { StaticImage } from "gatsby-plugin-image"
import { cardData } from "./data"
import Card from "./Card"

const ExperienceFuture = () => {
  return (
    <div className="home-experience-future">
      <div className="base-container">
        <h2 className="home-title">
          Experience the{" "}
          <span>
            future of <br /> business finance
          </span>{" "}
          today
        </h2>
        <div className="home-experience-future-buttons">
          <Button text="Get Started" />
          <Button text="Talk to sales" type="secondary" />
        </div>
        <div className="home-experience-future-image">
          <StaticImage src="../../../images/home/bottom_bg.png" alt="" />
        </div>
        <div className="home-experience-future-cards">
          {cardData.map((obj, index) => {
            return <Card {...obj} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ExperienceFuture
