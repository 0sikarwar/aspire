import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import "./home.css"
import Herosection from "../pageComponents/home/HeroSection"
import GrowYourBussiness from "../pageComponents/home/GrowYourBussiness"
import DesignedForBussiness from "../pageComponents/home/DesignedForBussiness"
import ExperienceFuture from "../pageComponents/home/ExperienceFuture"

const IndexPage = () => {
  return (
    <Layout>
      {/* <div>
      <LazyLottie
        lottieName="hero_section_lottie"
        fallback={<StaticImage src="../images/home/hero_section.webp" alt="" />}
      />
    </div> */}
      <Herosection />
      <GrowYourBussiness />
      <DesignedForBussiness />
      <ExperienceFuture />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
