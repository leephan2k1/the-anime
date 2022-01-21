import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { sectionCarouselSettings } from "settings";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import "./styles.scss";

function SectionAnime(props) {
  const { title, data, thumbnail, sectionType, target } = props;

  //configure 4 AnimeEpisode Component
  useEffect(() => {
    if (sectionType === "Episode") {
      sectionCarouselSettings.infinite = false;
      sectionCarouselSettings.speed = 150;
      sectionCarouselSettings.responsive[0] = {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      };
    }
    return () => {
      sectionCarouselSettings.responsive[0] = {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      };
    };
  }, []);

  const handleOptionClick = (e) => {
    if (sectionType === "Episode") {
      e.preventDefault();
    }
  };

  return (
    <section className="section w-full d-flex flex-column">
      <Link to={target} className="section__title" onClick={handleOptionClick}>
        {title}
        <i className="fas fa-chevron-right"></i>
      </Link>
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
