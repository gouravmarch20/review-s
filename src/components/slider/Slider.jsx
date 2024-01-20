import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Sone from "./Sone"
import Stwo from "./Stwo"
import Sthree from "./Sthree"
import Sfour from "./Sfour"
import Sfive from "./Sfive"
import Ssix from "./Ssix"
import Sseven from "./Sseven"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"
const Slider = () => {
  return (
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
          1020: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
       
          1600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1800: {
            slidesPerView: 4,
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
  )
}

export default Slider