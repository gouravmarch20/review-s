import React, { useEffect , useState } from "react"

import Subscribe from "./components/suscribe/Subscribe"
import Slider from "./components/slider/Slider"
import Footer from "./components/footer/Footer"
import FooterSection from "./components/footer/FooterSection"

const App = () => {
  const [data, setData] = useState([])
  const fetchReview = async () => {
    const apiUrl = `https://admin.tomedes.com/api/v1/get-reviews?page=${1}`
    const res = await fetch(apiUrl)
      .then((response) => {
        return response.json()
      })
      .catch((error) => {})
    setData(res?.data)
  }
  useEffect(() => {
    fetchReview()
  }, [])

  return (
    <div className="review p-2 pt-6">
      <Slider data={data} />

      <Subscribe />
      <Footer />
      <FooterSection />
    </div>
  )
}

export default App
