import React from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import SectionAnime from "../../components/SectionAnime";

import { mainCarouselSettings } from "../../settings";

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <Header />
      <Carousel settings={mainCarouselSettings} carouselType={"carouselMain"} />
      <SectionAnime />
    </div>
  );
}
