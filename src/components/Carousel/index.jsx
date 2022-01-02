import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { getMiddleElement, handleMainCarouselCSS } from "../../utils";
import Button from "../Button";
import Card from "../Card";
import MyLoader from "../MyLoader";
import "./styles.scss";
//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMiddleElem } from "../../components/Carousel/carouselSlice";
import { randomList } from "../../app/selectors";

function Carousel(props) {
  const { settings, carouselType } = props;
  const sliderRef = useRef(null);
  const data = useSelector(randomList);
  const dispatch = useDispatch();

  settings.afterChange = () => {
    handleMainCarouselCSS();
    const id = getMiddleElement();
    dispatch(setMiddleElem(id));
  };
  //Effect handle CSS for main Carousel first time
  useEffect(() => {
    if (carouselType === "carouselMain") {
      handleMainCarouselCSS();
      if (data.length) {
        const id = getMiddleElement();
        dispatch(setMiddleElem(id));
      }
    }
  }, [data.length]);

  return (
    <div className={carouselType}>
      <Button type={"Prev"} handleEvent={() => sliderRef.current.slickPrev()} />
      <Button type={"Next"} handleEvent={() => sliderRef.current.slickNext()} />

      <Slider {...settings} ref={sliderRef}>
        {data && data.length > 0
          ? data.map((elem) => {
              return (
                <div
                  key={elem.anilist_id}
                  data-id={elem.anilist_id}
                  className="cardWrapper d-flex justify-content-center"
                >
                  <Card
                    imgSrc={elem.cover_image}
                    episode_count={elem.episodes_count}
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
};
Carousel.defaultProps = {
  settings: {},
  carouselType: "",
};

export default Carousel;
