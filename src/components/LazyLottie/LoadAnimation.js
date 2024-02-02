import React, { useEffect, useRef } from "react"
import lottie from "lottie-web"

const LazyLottieAnimation = ({ lottieName }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      import(`../../assets/lotties/${lottieName}.json`).then(res => {
        const data = res.default
        lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg", // or 'canvas' or 'html' as needed
          loop: true,
          autoplay: true,
          animationData: data,
        })
      })
    }
  }, [lottieName])

  return <div ref={containerRef} />
}

export default LazyLottieAnimation
