import React from 'react';

// Import Swiper React components
// import {  SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper";
import  "swiper/swiper-bundle.css";

export default class VehicleGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    var swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      speed: 500,
      centeredSlides: true,
      createElements: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        beforeDestroy: () => {
          console.log("before destroy");
        },

        navigationNext: () => {
          console.log("BLURP");
        },
      },
    });
  }
  render() {
    return (
      <div className="swiper" id="myswiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>

          <div className="swiper-slide">Slide 2</div>

          <div className="swiper-slide">Slide 3</div>
        </div>

        <div  className="swiper-button-prev"></div>

        <div  className="swiper-button-next"></div>
      </div>
    );
  }
}
