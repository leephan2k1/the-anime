import React from "react";
import { categoryCarouselSettings } from "settings";
import Carousel from "../Carousel";
import arrayData from "./supportData";
import { Link } from "react-router-dom";

function SectionCategory(props) {
  const { title, target } = props;

  return (
    <section className="section w-full d-flex flex-column">
      <Link to={target} className="section__title">
        {title}
        <i className="fas fa-chevron-right"></i>
      </Link>
      <Carousel
        settings={categoryCarouselSettings}
        carouselType={"carouselSection"}
        renderType={"Box"}
        data={arrayData}
      />
    </section>
  );
}

SectionCategory.propTypes = {};

export default SectionCategory;
