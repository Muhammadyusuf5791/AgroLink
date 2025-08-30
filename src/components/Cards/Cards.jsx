import React, { useState } from "react";
import "./Cards.css";
import Data from "../../assets/Data";
import {
  PiHeartStraight,
  PiHeartStraightFill,
  PiShuffle,
} from "react-icons/pi";
import {
  IoSearchOutline,
} from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Cards = () => {
  const products = Data[0].products;
  const [like, setLiked] = useState({});
  const [hoverId, setHoverId] = useState(null);

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="cards">
      {/* Sarlavha */}
      <div className="logo">
        <h1>
          Mahsulotlarimiz ichida <br /> eng mashhurlari
        </h1>
      </div>

      {/* Swiper */}
      <div className="swiper-container">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="content"
                onMouseEnter={() => setHoverId(item.id)}
                onMouseLeave={() => setHoverId(null)}
              >
                {/* Like tugmasi */}
                <div onClick={() => toggleLike(item.id)} className="like-btn">
                  {like[item.id] ? (
                    <PiHeartStraightFill size={24} color="red" />
                  ) : (
                    <PiHeartStraight size={24} color="grey" />
                  )}
                </div>

                {/* Rasm */}
                <img src={item.image} alt={item.title} />

                {/* Nomi va yulduzcha */}
                <div className="product-name">
                  <h1>{item.title}</h1>
                  <h1>
                    {item.stars}
                    <FaStar className="icon" />
                  </h1>
                </div>

                {/* Narx */}
                <div className="price">
                  <h2>{item.price}</h2>
                  <h3>{item.oldPrice}</h3>
                </div>

                {/* Hover qism */}
                <div
                  className={`hoverContent ${
                    hoverId === item.id ? "show" : ""
                  }`}
                >
                  <button>
                    <span className="btn-text">Savatga Qo'shish</span>
                    <SlBasket className="basket-icon" />
                  </button>
                  <PiShuffle className="icon" />
                  <IoSearchOutline className="icon" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
