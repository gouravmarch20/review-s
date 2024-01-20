import React from "react"
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
import Loader from '../../components/loader/Loader'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"
const Slider = ({ data }) => {
  return (
    <div className="review-container">
      {data?.length > 0 ? (
        <>
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
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              autoplay={{
                delay: 2000,
              }}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                {" "}
                <Sone data={data} />{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Stwo data={data} />{" "}
              </SwiperSlide>

              <SwiperSlide>
                <Sthree data={data} />
              </SwiperSlide>
              <SwiperSlide>
                <Sfour data={data} />
              </SwiperSlide>

              <SwiperSlide>
                <Sfive data={data} />
              </SwiperSlide>
              <SwiperSlide>
                <Ssix data={data} />
              </SwiperSlide>
              <SwiperSlide>
                <Sseven data={data} />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      ) : (
        <Loader/>
      )}
    </div>
  )
}

export default Slider
