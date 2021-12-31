import React from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

import { mainCarousel } from "./settings";

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <Header />
      <Carousel settings={mainCarousel} carouselType={"carouselMain"} />
    </div>
  );
}
