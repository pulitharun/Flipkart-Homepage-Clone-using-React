import React from "react";
import Slider from "react-slick";
import { carouselImages } from "./carouselData";
import "./carousel.css";
import "../categories/categories.css"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Carousel = () => {
  return (
    <div className="carousel_wrapper">
      <Slider nextArrow={<NextButton />} prevArrow={<PrevButton />}>
        {carouselImages.map((item, index) => (
          <div className="carousel_item" key={index}>
            <img src={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " carousel_btn carousel_nxt_btn"}
      style={style}
      onClick={onClick}
    >
      <ChevronRightIcon />
    </div>
  );
};

const PrevButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " carousel_btn carousel_prev_btn"}
      style={style}
      onClick={onClick}
    >
      <ChevronLeftIcon />
    </div>
  );
};

export default Carousel;
