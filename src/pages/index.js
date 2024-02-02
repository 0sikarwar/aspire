import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import LazyLottie from "../components/LazyLottie"
import { StaticImage } from "gatsby-plugin-image"
import "./home.css"
import Herosection from "../pageComponents/home/HeroSection"

const IndexPage = () => {
  const [animationClass, setAnimationClass] = useState("")
  useEffect(() => {
    setAnimationClass("home-herosection-zoomin")
  }, [])
  return (
    <Layout>
      {/* <div>
      <LazyLottie
        lottieName="hero_section_lottie"
        fallback={<StaticImage src="../images/home/hero_section.webp" alt="" />}
      />
    </div> */}
      <Herosection animationClass={animationClass} />
      <h1 className="home-herosection-heading">
        The <span className="line-green-text">finance OS</span>
        <br /> that elevates your growth
      </h1>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
