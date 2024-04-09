import React  , {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Zoom,
  Autoplay,
  Pagination,
  Navigation,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/zoom";
const productData = [
  "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_room_image/16763730367549.webp",
  "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_room_image/16763730374518.webp",
  "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_room_image/16763730379303.webp",
  "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_room_image/16763730387264.webp",
  "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_room_image/16763730392565.webp",
  "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_room_image/16763730395448.webp",
  "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_room_image/16763730408806.webp",
  "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_room_image/16763730401380.webp"
]
const Glider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div className="col-12    ">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          zoom={true}
          modules={[Zoom, FreeMode, Navigation, Thumbs, Autoplay]}
          className=" swiper-zoom-container market-swipper-img"
          pagination={{
            clickable: true,
          }}
          style={{
            display: "block",
          }}
        >
          {productData?.map((url, index) => (
            <SwiperSlide key={index} style={{ display: "flex" }}>
              <div className="swiper-zoom-container market-swipper-container" style={{height : 200 }}>
                <img src={url} alt={`Slide ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          style={{
            marginTop: "10px",
            width: "100%",
            height: "40%",
          }}
          className="market-swipper-thumb-container"
        >
          {productData?.map((url, index) => (
            <SwiperSlide key={index} className="market-swipper-thumbnail">
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "86px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Glider;
