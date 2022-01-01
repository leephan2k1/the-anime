import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Card from "../Card";
import Button from "../Button";

import { handleMainCarouselCSS } from "../../settings";

import "./styles.scss";

function Carousel(props) {
  const { settings, carouselType, data } = props;
  const sliderRef = useRef(null);

  //Effect handle CSS for main Carousel
  useEffect(() => {
    if (carouselType === "carouselMain") {
      handleMainCarouselCSS();
    }
  }, []);

  return (
    <div className={carouselType}>
      {/* <div className="controller position-absolute d-flex justify-content-between"> */}
      <Button type={"Prev"} handleEvent={() => sliderRef.current.slickPrev()} />
      <Button type={"Next"} handleEvent={() => sliderRef.current.slickNext()} />
      {/* </div> */}
      <Slider {...settings} ref={sliderRef}>
        {/* at least 6 elements */}
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

Carousel.propTypes = {
  settings: PropTypes.object,
  carouselType: PropTypes.string,
  data: PropTypes.array,
};
Carousel.defaultProps = {
  settings: {},
  carouselType: "",
  data: [],
};

export default Carousel;
