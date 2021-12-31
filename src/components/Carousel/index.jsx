import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Card from "../Card";

import "./styles.scss";

function Carousel(props) {
  const { settings, carouselType } = props;

  useEffect(() => {});
  return (
    <div className={carouselType}>
      <div className="controller position-absolute d-flex justify-content-between">
        <div className="Prev d-flex justify-content-center align-items-center">
          ‹
        </div>
        <div className="Next d-flex justify-content-center align-items-center">
          ›
        </div>
      </div>
      <Slider {...settings}>
        <div className="cardWrapper d-flex justify-content-center">
          <Card />
        </div>
        <div className="cardWrapper d-flex justify-content-center">
          <Card />
        </div>
        <div className="cardWrapper d-flex justify-content-center">
          <Card />
        </div>
        <div className="cardWrapper d-flex justify-content-center">
          <Card />
        </div>
        <div className="cardWrapper d-flex justify-content-center">
          <Card />
        </div>
        <div className="cardWrapper d-flex justify-content-center">
          <Card />
        </div>
      </Slider>
    </div>
  );
}

Carousel.propTypes = {};

export default Carousel;
