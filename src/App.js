import React from "react"

import Subscribe from "./components/suscribe/Subscribe"
import Slider from "./components/slider/Slider"
import Footer from "./components/footer/Footer"
import FooterSection from "./components/footer/FooterSection"

const App = () => {
  return (
    <div className="review p-2 pt-6">
      <Slider />

      <Subscribe />
      <Footer />
      <FooterSection />
    </div>
  )
}

export default App
