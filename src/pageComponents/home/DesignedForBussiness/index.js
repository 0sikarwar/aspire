import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import "./index.css"
import { designedBussinessData, financeInfraData, imageCardData } from "./data"
import TransparentCard from "./TransparentCard"
import ImageCard from "./ImageCard"

const DesignedForBussiness = () => {
  const imageData = useStaticQuery(graphql`
    query paymentPartnerLogo {
      allFile(
        filter: { relativeDirectory: { eq: "payment-partner-logos" } }
        sort: { modifiedTime: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            name
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="base-container home-designed-for-bussiness">
        <h2 className="home-heading">Designed for business of all sizes</h2>
        <p className="home-designed-for-bussiness-subtitle">
          From early stage startups to industry leading global corporations,
          <br />
          Aspire is the choice of modern CEOs and CFOs
        </p>
        <div className="home-designed-for-bussiness-cards">
          {designedBussinessData.map((obj, index) => {
            return <TransparentCard {...obj} key={index} />
          })}
        </div>
        <div className="home-designed-for-bussiness-cards">
          {imageCardData.map((obj, index) => {
            return <ImageCard {...obj} key={index} />
          })}
        </div>
        <h2 className="home-heading">
          Thousands of companies across SEA trust Aspire to manage critical
          finance infrastructure
        </h2>
        <div className="home-designed-for-bussiness-cards">
          {financeInfraData.map((obj, index) => {
            return <TransparentCard {...obj} key={index} />
          })}
        </div>
      </div>
      <div className="home-designed-for-bussiness-pay-partner-strip">
        <div className="base-container home-designed-for-bussiness-pay-partner-logos">
          {imageData?.allFile?.edges.length &&
            imageData.allFile.edges.map((item, index) => {
              return (
                <GatsbyImage
                  image={getImage(item.node)}
                  alt={item.name || ""}
                  key={index}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}

export default DesignedForBussiness
