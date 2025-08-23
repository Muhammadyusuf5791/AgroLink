import React, { useState } from "react";
import "./Cards.css";
import Data from "../../assets/Data";
import {
  PiHeartStraight,
  PiHeartStraightFill,
  PiShuffle,
} from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

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
      <div className="logo">
        <h1>
          Mahsulotlarimiz ichida <br /> eng mashhurlari
        </h1>
      </div>
      <div className="card">
        {products.map((item) => (
          <div
            className="content"
            key={item.id}
            onMouseEnter={() => setHoverId(item.id)}
            onMouseLeave={() => setHoverId(null)}
          >
            <div onClick={() => toggleLike(item.id)} className="like-btn">
              {like[item.id] ? (
                <PiHeartStraightFill size={24} color="red" />
              ) : (
                <PiHeartStraight size={24} color="grey" />
              )}
            </div>
            <img src={item.image} alt={item.title} />
            <div className="product-name">
              <h1>{item.title}</h1>
              <h1>
                {item.stars}
                <FaStar className="icon" />
              </h1>
            </div>
            <div className="price">
              <h2>{item.price}</h2>
              <h3>{item.oldPrice}</h3>
            </div>

            <div
              className={`hoverContent ${hoverId === item.id ? "show" : ""}`}
            >
              <button>
                <span className="btn-text">Savatga Qo'shish</span>
                <SlBasket className="basket-icon" />
              </button>
              <PiShuffle className="icon" />
              <IoSearchOutline className="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
