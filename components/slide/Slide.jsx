import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss";
import Slider from "react-slick";

const Slide = ({ children, slidesToShow = 1, arrowsScroll = 1, className }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: arrowsScroll,
    arrows: true,
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings} className={className}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
