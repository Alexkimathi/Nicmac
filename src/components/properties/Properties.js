import React from "react";
import "./properties.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "./data";
import { sliderSetting } from "../Common";

function Properties() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Prices</span>
          <span className="primaryText">Featured Listings</span>
        </div>

        <Swiper {...sliderSetting}>
        <SliderButtons />
          {data.map((card, i) => (
            
            <SwiperSlide key={i}>
              
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>Ksh</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Properties;

const SliderButtons = () => {
  const Swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=> Swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> Swiper.slideNext()}>&gt;</button>
    </div>
  );
};
