import PropTypes from "prop-types";
import React from "react";
import { sectionCarouselSettings } from "../../settings";
import Carousel from "../Carousel";
import "./styles.scss";

function SectionAnime(props) {
  const { title, data } = props;

  return (
    <section className="section w-full d-flex flex-column">
      <a href="#" className="section__title">
        {title}
        <i className="fas fa-chevron-right"></i>
      </a>
      <Carousel
        settings={sectionCarouselSettings}
        carouselType={"carouselSection"}
        data={data}
      />
    </section>
  );
}

SectionAnime.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default SectionAnime;
