import React, { Suspense } from "react"

const LazyLottie = ({ lottieName, fallback }) => {
  const LazyLottieAnimation = React.lazy(() => import("./LoadAnimation"))

  return (
    <Suspense fallback={fallback}>
      <LazyLottieAnimation lottieName={lottieName} />
    </Suspense>
  )
}

export default LazyLottie
