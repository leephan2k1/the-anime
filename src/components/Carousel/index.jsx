import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Card from "../Card";
import Button from "../Button";

import MyLoader from "../MyLoader";

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
  }, [data]);

  return (
    <div className={carouselType}>
      {/* <div className="controller position-absolute d-flex justify-content-between"> */}
      <Button type={"Prev"} handleEvent={() => sliderRef.current.slickPrev()} />
      <Button type={"Next"} handleEvent={() => sliderRef.current.slickNext()} />

      <Slider {...settings} ref={sliderRef}>
        {data && data.length > 0
          ? data.map((elem) => {
              return (
                <div
                  key={elem.anilist_id}
                  className="cardWrapper d-flex justify-content-center"
                >
                  <Card
                    imgSrc={elem.cover_image}
                    episode_count={elem.episode_count}
                    episode_duration={elem.episode_duration}
                    id={elem.anilist_id}
                  />
                </div>
              );
            })
          : [...Array(10).keys()].map((e) => {
              return (
                <div
                  key={e}
                  className="cardWrapper d-flex justify-content-center"
                >
                  <MyLoader className={"cardContainer"} />
                </div>
              );
            })}
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
