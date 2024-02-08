import React from "react"
import "./index.css"
import { Link } from "gatsby"
import LazyLottie from "../../../components/LazyLottie"
import { StaticImage } from "gatsby-plugin-image"
import { cardData } from "./data"
import VerticleCard from "./VerticalCard"
import rightChevron from "../../../images/right_chevron.svg"

const GrowYourBussiness = () => {
  return (
    <div className="home-grow-your-bussiness">
      <div className="base-container">
        <h2 className="home-heading">Designed to grow your business</h2>
        <p className="home-grow-your-bussiness-subtitle">
          Integrating software and finance to help businesses gain efficiency
          and clarity
        </p>
        <div className="home-grow-your-bussiness-showcase showcase-1">
          <div className="home-grow-your-bussiness-showcase-content">
            <h2 className="home-grow-your-bussiness-showcase-heading">
              Grow your <span>business beyond borders</span> from a single
              platform
            </h2>
            <p className="home-grow-your-bussiness-showcase-subtitle">
              Manage multiple businesses, with access to multi-currency accounts
              and cards. Get started in minutes
            </p>
            <Link className="home-grow-your-bussiness-showcase-cta" to="#">
              Learn more <img src={rightChevron} alt="" />
            </Link>
          </div>
          <div className="home-grow-your-bussiness-showcase-lottie">
            <LazyLottie lottieName="grow_business_lottie" fallback={<div />} />
          </div>
        </div>
        <div className="home-grow-your-bussiness-showcase showcase-2">
          <div className="home-grow-your-bussiness-showcase-content">
            <h2 className="home-grow-your-bussiness-showcase-heading">
              Scale company spend with{" "}
              <span>control and real-time visibility</span>
            </h2>
            <p className="home-grow-your-bussiness-showcase-subtitle">
              Delegate purchasing across the organisation, while keeping the
              company efficient and informed
            </p>
            <Link className="home-grow-your-bussiness-showcase-cta" to="#">
              Learn more <img src={rightChevron} alt="" />
            </Link>
          </div>
          <div className="home-grow-your-bussiness-showcase-lottie">
            <LazyLottie lottieName="scale_spend_lottie" fallback={<div />} />
          </div>
        </div>
        <h2 className="home-heading">
          Delegate, automate and integrate with Aspire
        </h2>
        <div className="home-grow-your-bussiness-cards">
          {cardData.map((obj, index) => {
            return <VerticleCard {...obj} key={index} />
          })}
        </div>
        <div className="home-grow-your-bussiness-horizontal-card">
          <div className="home-grow-your-bussiness-horizontal-card-image">
            <StaticImage src="../../../images/home/grow_team.webp" alt="" />
          </div>
          <div className="home-grow-your-bussiness-horizontal-card-content">
            <h2 className="home-heading">Built for fast-growing teams</h2>
            <p className="home-grow-your-bussiness-horizontal-card-subtitle">
              Grant the right level of access with advanced permission settings
            </p>
            <p className="home-grow-your-bussiness-horizontal-card-cta">
              See more <img src={rightChevron} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrowYourBussiness
