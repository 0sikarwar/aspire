import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./index.css"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../../../components/Button"
import lock from "../../../images/lock.svg"

const Herosection = () => {
  const imageData = useStaticQuery(graphql`
    query partnerLogoImages {
      allFile(
        filter: { relativeDirectory: { eq: "partner-logos" } }
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
  const [animationFlag, setAnimationFlag] = useState(false)
  useEffect(() => {
    setAnimationFlag(true)
  }, [])
  return (
    <>
      <div
        className={`base-container home-herosection${
          animationFlag ? " home-herosection-zoomin" : ""
        }`}
      >
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
      <div className="base-container home-herosection-content">
        <h1 className="home-title">
          The <span>finance OS</span>
          <br /> that elevates your growth
        </h1>
        <p className="home-herosection-subtitle">
          A unified solution designed to manage your global business operations
          <br />
          and scale company spend, all-in-one account
        </p>
        <Button text="Get Started" />
        <div className="home-herosection-tagline">
          <img src={lock} alt="" />
          <p>Funds safeguarded with Tier-1 banks in Singapore</p>
        </div>
        <div className="home-herosection-trusted-partner">
          <h2 className="home-herosection-trusted-partner-text">
            Trusted by <strong>15,000+</strong> modern businesses worldwide
          </h2>
          <div className="home-herosection-trusted-partner-logos">
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
      </div>
    </>
  )
}

export default Herosection
