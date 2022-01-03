import React from "react";
import { useSelector } from "react-redux";
import { homeList } from "../../app/selectors";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import SectionAnime from "../../components/SectionAnime";
import SectionSeason from "../../components/SectionSeason";
import { mainCarouselSettings } from "../../settings";

export default function HomePage(props) {
  const data = useSelector(homeList);
  const { newAniList, suggestList, seasonList } = props;
  return (
    <div className="w-full h-full">
      <Header />
      <Carousel
        settings={mainCarouselSettings}
        carouselType={"carouselMain"}
        data={data}
      />
      <SectionAnime title={"Anime mới cập nhật"} data={newAniList} />
      <SectionSeason />
      <SectionAnime title={"Hôm nay xem gì?"} data={suggestList} />
    </div>
  );
}
