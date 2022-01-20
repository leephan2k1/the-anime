import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { getMiddleElement, handleMainCarouselCSS } from "utils";
import Button from "../Button";
import Card from "../Card";
import MyLoader from "../MyLoader";
import Box from "../Box";
import { carouselLoaderSettings } from "settings";
import "./styles.scss";
//redux
import { useDispatch } from "react-redux";
import { setMiddleElem } from "app/listSlice";

function Carousel(props) {
  const { settings, carouselType, data, renderType, customThumbnail } = props;
  const [dataList, setDataList] = useState([]);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  if (carouselType === "carouselMain") {
    settings.afterChange = () => {
      handleMainCarouselCSS();
      const id = getMiddleElement();
      dispatch(setMiddleElem(id));
    };
  }

  //Effect handle CSS for main Carousel first time
  useEffect(() => {
    if (carouselType === "carouselMain") {
      handleMainCarouselCSS();
      if (data.length) {
        const id = getMiddleElement();
        dispatch(setMiddleElem(id));
      }
    }
    return () => {
      settings.afterChange = null;
    };
  }, [data.length]);

  return (
    <div className={carouselType}>
      <Button type={"Prev"} handleEvent={() => sliderRef.current.slickPrev()} />
      <Button type={"Next"} handleEvent={() => sliderRef.current.slickNext()} />

      <Slider {...settings} ref={sliderRef}>
        {data && data.length > 0
          ? data.map((elem, index) => {
              return (
                <div
                  key={elem.slug + index}
                  data-id={elem.details?.id || elem.slug}
                  className={`cardWrapper d-flex justify-content-center`}
                >
                  {renderType === "Box" ? (
                    <Box
                      classNames={{
                        wrapperClassName:
                          "category d-flex flex-column justify-content-center align-items-center",
                        imgClassName: "category__img",
                        titleClassName: "category__title",
                      }}
                      imgUrl={elem.imgPath}
                      title={elem.genre}
                    />
                  ) : (
                    <Card
                      imgSrc={
                        customThumbnail ||
                        elem.details?.thumbnail ||
                        elem.thumbnail
                      }
                      // episode_count={elem.episodes_count || index + 1}
                      id={elem.slug}
                      typeCard={
                        carouselType === "carouselSection" ||
                        carouselType === "episodeSection"
                          ? "details"
                          : "notDetails"
                      }
                      title={
                        carouselType === "carouselSection" ||
                        carouselType === "episodeSection"
                          ? elem.titles?.en || `Tập ${index + 1}`
                          : null
                      }
                      customCard={
                        carouselType === "episodeSection" && "episodeCard"
                      }
                    />
                  )}
                </div>
              );
            })
          : [...Array(10).keys()].map((e) => {
              return (
                <div
                  key={e}
                  className="cardWrapper d-flex justify-content-center"
                >
                  <MyLoader
                    className={"cardContainer"}
                    stloader={carouselLoaderSettings}
                  />
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
