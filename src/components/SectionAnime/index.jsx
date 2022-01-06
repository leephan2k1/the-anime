import PropTypes from "prop-types";
import React from "react";
import { sectionCarouselSettings } from "settings";
import Carousel from "../Carousel";
import "./styles.scss";

function SectionAnime(props) {
  const { title, data, thumbnail, sectionType } = props;

  //configure 4 AnimeEpisode Component
  if (sectionType === "Episode") {
    sectionCarouselSettings.infinite = false;
    sectionCarouselSettings.speed = 150;
    sectionCarouselSettings.responsive[0] = {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    };
  }

  return (
    <section className="section w-full d-flex flex-column">
      <a href="#" className="section__title">
        {title}
        <i className="fas fa-chevron-right"></i>
      </a>
      <Carousel
        settings={sectionCarouselSettings}
        carouselType={
          sectionType === "Episode" ? "episodeSection" : "carouselSection"
        }
        data={data}
        customThumbnail={thumbnail}
      />
    </section>
  );
}

SectionAnime.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default SectionAnime;
