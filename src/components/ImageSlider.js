import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/imageSlide.scss";
import sliderBadging from "../assets/images/slider-badging.jpg";
import sliderScale from "../assets/images/slider-scale.jpg";
import sliderBadg from "../assets/images/slider-badag.jpg";
import sliderScales from "../assets/images/slider-scales.jpg";

const ImageSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="slider">
      <div className="imageWrap">
        <a href='/#'>
          <img src={sliderBadging} alt="Slider Badging" />
        </a>
      </div>
      <div className="imageWrap">
        <a href='/#'>
          <img src={sliderScale} alt=" Slider Scale " />
        </a>
      </div>
      <div className="imageWrap">
        <a href='/#'>
          <img src={sliderBadg} alt="Slider Badg" />
        </a>
      </div>
      <div className="imageWrap">
        <a href='/#'>
          <img src={sliderScales} alt="Slider Scales" />
        </a>
      </div>
    </Slider>
  );
};

export default ImageSlider;
