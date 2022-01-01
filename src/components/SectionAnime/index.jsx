import PropTypes from "prop-types";
import React from "react";
import { sectionCarouselSettings } from "../../settings";
import Carousel from "../Carousel";
import "./styles.scss";

function SectionAnime(props) {
  const { title } = props;

  return (
    <div className="section w-full d-flex flex-column">
      <a href="#" className="section__title">
        Anime mới cập nhật
        <i className="fas fa-chevron-right"></i>
      </a>
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
