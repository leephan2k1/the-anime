import React from "react";
import PropTypes from "prop-types";
import Carousel from "../Carousel";

import { sectionCarouselSettings } from "../../settings";

import "./styles.scss";

function SectionAnime(props) {
  const { title } = props;

  return (
    <div className="section w-full d-flex flex-column">
      <h4 className="section__title">Anime mới cập nhật</h4>
      <Carousel
        settings={sectionCarouselSettings}
        carouselType={"carouselSection"}
      />
    </div>
  );
}

SectionAnime.propTypes = {
  title: PropTypes.string,
};

export default SectionAnime;
