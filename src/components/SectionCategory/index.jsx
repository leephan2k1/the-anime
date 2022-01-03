import React from "react";
import { categoryCarouselSettings } from "../../settings";
import Carousel from "../Carousel";
import arrayData from "./supportData";

function SectionCategory(props) {
  const { title } = props;

  return (
    <section className="section w-full d-flex flex-column">
      <a href="#" className="section__title">
        {title}
        <i className="fas fa-chevron-right"></i>
      </a>
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
