import React from "react"
import Sone from "./components/Sone"
import Stwo from "./components/Stwo"
import Sthree from "./components/Sthree"
import Sfour from "./components/Sfour"
import Sfive from "./components/Sfive"
import Ssix from "./components/Ssix"
import Sseven from "./components/Sseven"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const App = () => {
  return (
    <div className="review p-2 pt-6">
      <div className="review-container">
        <h2 className=" heading">What Our Customers Say</h2>
        <div className="">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1324: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            // className="mySwiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            autoplay={{
              delay: 2000,
              // disableOnInteraction: false
            }}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              {" "}
              <Sone />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Stwo />{" "}
            </SwiperSlide>

            <SwiperSlide>
              <Sthree />
            </SwiperSlide>
            <SwiperSlide>
              <Sfour />
            </SwiperSlide>

            <SwiperSlide>
              <Sfive />
            </SwiperSlide>
            <SwiperSlide>
              <Ssix />
            </SwiperSlide>
            <SwiperSlide>
              <Sseven />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="bg-[#f8fdffdd] h-[40px] circle "></div>
    </div>
  )
}

export default App
